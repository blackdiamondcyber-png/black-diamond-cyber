import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { getSupabaseAdmin } from '@/lib/supabase';
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
        await supabase.from('clients').insert({
          business_name: customerName || 'Unknown',
          owner_name: customerName || 'Unknown',
          email: customerEmail,
          industry: 'Unknown',
          stripe_customer_id: session.customer as string,
          subscription_tier: tier,
          subscription_status: 'active',
          monthly_price: Number(session.metadata?.monthlyPrice) || 0,
          setup_fee: Number(session.metadata?.setupFee) || 0,
        });
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      const customerId = subscription.customer as string;

      await supabase
        .from('clients')
        .update({ subscription_status: 'churned' })
        .eq('stripe_customer_id', customerId);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
