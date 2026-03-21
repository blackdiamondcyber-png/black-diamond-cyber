import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { checkoutSchema } from '@/lib/schemas';
import { TIERS } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const parsed = checkoutSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid tier selection' },
        { status: 400 },
      );
    }

    const { tier } = parsed.data;
    const config = TIERS[tier];
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${config.name} Website Setup`,
              description: `One-time setup fee for ${config.name} tier website`,
            },
            unit_amount: config.setupFee * 100,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${config.name} Monthly Hosting & Maintenance`,
              description: 'Monthly hosting, maintenance, and support',
            },
            unit_amount: config.monthlyPrice * 100,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://black-diamond-cyber.vercel.app'}?success=true&tier=${tier}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://black-diamond-cyber.vercel.app'}?canceled=true`,
      metadata: {
        tier,
        setupFee: config.setupFee.toString(),
        monthlyPrice: config.monthlyPrice.toString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
