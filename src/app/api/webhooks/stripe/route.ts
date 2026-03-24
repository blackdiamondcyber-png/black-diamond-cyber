import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { getSupabaseAdmin } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { TIERS } from '@/types';
import type { SubscriptionTier } from '@/types';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: 'Missing signature' },
      { status: 400 },
    );
  }

  const stripe = getStripe();
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Webhook verification failed';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const tier = session.metadata?.tier as SubscriptionTier | undefined;
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;

      if (customerEmail && tier) {
        const tierConfig = TIERS[tier];

        // Insert client record
        const { data: clientRecord, error: insertError } = await supabase
          .from('clients')
          .insert({
            business_name: customerName || 'Unknown',
            owner_name: customerName || 'Unknown',
            email: customerEmail,
            industry: 'Unknown',
            stripe_customer_id: session.customer as string,
            subscription_tier: tier,
            subscription_status: 'active',
            monthly_price: Number(session.metadata?.monthlyPrice) || 0,
            setup_fee: Number(session.metadata?.setupFee) || 0,
            project_status: 'in_progress',
          })
          .select('id')
          .single();

        if (insertError) {
          console.error('[webhook] Client insert failed:', insertError.message);
          break;
        }

        // Create Supabase Auth user for client portal access
        if (clientRecord) {
          let authUserId: string | null = null;

          const { data: authData, error: authError } =
            await supabase.auth.admin.createUser({
              email: customerEmail,
              email_confirm: true,
            });

          if (authError) {
            // User may already exist — look them up
            const { data: listData } =
              await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
            const existing = listData?.users?.find(
              (u) => u.email === customerEmail,
            );
            if (existing) {
              authUserId = existing.id;
            } else {
              console.error('[webhook] Auth user creation failed:', authError.message);
            }
          } else if (authData?.user) {
            authUserId = authData.user.id;
          }

          if (authUserId) {
            const { error: linkError } = await supabase
              .from('clients')
              .update({ auth_user_id: authUserId })
              .eq('id', clientRecord.id);

            if (linkError) {
              console.error('[webhook] Auth user link failed:', linkError.message);
            }
          }
        }

        // Send welcome email to customer
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-cyber.com';
        await sendEmail({
          to: customerEmail,
          subject: `Welcome to Black Diamond Cyber — ${tierConfig?.name || tier} tier`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
              <h1 style="font-size: 22px; margin-bottom: 16px;">Welcome aboard, ${customerName || 'there'}!</h1>
              <p>Thank you for choosing the <strong>${tierConfig?.name || tier}</strong> tier. We're excited to start building your website.</p>
              <p><strong>What happens next:</strong></p>
              <ul style="line-height: 1.8;">
                <li>Our team begins designing your site (${tierConfig?.deliveryTime || '3-5 days'})</li>
                <li>You'll get a login link to track progress in your client dashboard</li>
                <li>We'll notify you when your site is ready for review</li>
              </ul>
              <p style="margin-top: 24px;">
                <a href="${siteUrl}/login" style="display: inline-block; background: #2887CC; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">
                  View Your Dashboard
                </a>
              </p>
              <p style="margin-top: 24px; font-size: 13px; color: #666;">
                Questions? Reply to this email or contact us at
                <a href="mailto:blackdiamondcyber@gmail.com">blackdiamondcyber@gmail.com</a>
              </p>
            </div>
          `,
        });

        // Notify admin of new purchase
        await sendEmail({
          to: 'blackdiamondcyber@gmail.com',
          subject: `New purchase: ${customerName || customerEmail} — ${tierConfig?.name || tier}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #1a1a1a;">
              <h2>New Client Signed Up</h2>
              <ul style="line-height: 1.8;">
                <li><strong>Name:</strong> ${customerName || 'Not provided'}</li>
                <li><strong>Email:</strong> ${customerEmail}</li>
                <li><strong>Tier:</strong> ${tierConfig?.name || tier}</li>
                <li><strong>Setup Fee:</strong> $${session.metadata?.setupFee || '0'}</li>
                <li><strong>Monthly:</strong> $${session.metadata?.monthlyPrice || '0'}/mo</li>
              </ul>
              <p><a href="${siteUrl}/admin/clients">View in Admin Dashboard</a></p>
            </div>
          `,
        });
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      const customerId = subscription.customer as string;

      const { error: churnError } = await supabase
        .from('clients')
        .update({ subscription_status: 'churned' })
        .eq('stripe_customer_id', customerId);

      if (churnError) {
        console.error('[webhook] Churn update failed:', churnError.message);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
