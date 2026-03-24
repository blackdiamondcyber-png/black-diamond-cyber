import Stripe from 'stripe';

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY environment variable');
  }
  return new Stripe(key, {
    apiVersion: '2025-02-24.acacia',
    maxNetworkRetries: 3,
    timeout: 30000,
  });
}
