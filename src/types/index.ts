export type SubscriptionTier = 'starter' | 'professional' | 'premium' | 'cinematic';

export interface TierConfig {
  name: string;
  setupFee: number;
  monthlyPrice: number;
  deliveryTime: string;
  features: string[];
  stripePriceId: string;
  stripeSetupPriceId: string;
}

export const TIERS: Record<SubscriptionTier, TierConfig> = {
  starter: {
    name: 'Starter',
    setupFee: 997,
    monthlyPrice: 79,
    deliveryTime: '3-5 days',
    features: [
      'Custom 5-page website',
      'Mobile responsive',
      'Basic SEO setup',
      'Contact form',
      'Google Business integration',
      'Monthly hosting & maintenance',
    ],
    stripePriceId: process.env.STRIPE_PRICE_STARTER || '',
    stripeSetupPriceId: process.env.STRIPE_SETUP_STARTER || '',
  },
  professional: {
    name: 'Professional',
    setupFee: 1997,
    monthlyPrice: 129,
    deliveryTime: '5-7 days',
    features: [
      'Custom 8-page website',
      'Advanced SEO & analytics',
      'Online booking integration',
      'Review management',
      'Blog setup',
      'Priority support',
      'Monthly performance report',
    ],
    stripePriceId: process.env.STRIPE_PRICE_PROFESSIONAL || '',
    stripeSetupPriceId: process.env.STRIPE_SETUP_PROFESSIONAL || '',
  },
  premium: {
    name: 'Premium',
    setupFee: 2997,
    monthlyPrice: 199,
    deliveryTime: '10-14 days',
    features: [
      'Custom 12+ page website',
      'Competitor research & analysis',
      'Full SEO campaign',
      'Social media integration',
      'Custom photography direction',
      'Dedicated account manager',
      'Weekly performance reports',
      'A/B testing',
    ],
    stripePriceId: process.env.STRIPE_PRICE_PREMIUM || '',
    stripeSetupPriceId: process.env.STRIPE_SETUP_PREMIUM || '',
  },
  cinematic: {
    name: 'Cinematic',
    setupFee: 4997,
    monthlyPrice: 249,
    deliveryTime: '10-14 days',
    features: [
      'Everything in Premium',
      '3D animated hero sections',
      'Scroll-linked video backgrounds',
      'Cinematic page transitions',
      'Custom motion graphics',
      'Kling 3.0 AI video integration',
      'VIP priority everything',
    ],
    stripePriceId: process.env.STRIPE_PRICE_CINEMATIC || '',
    stripeSetupPriceId: process.env.STRIPE_SETUP_CINEMATIC || '',
  },
};

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  industry: string;
  message?: string;
}

export interface Client {
  id: string;
  created_at: string;
  business_name: string;
  owner_name: string;
  email: string;
  phone: string | null;
  industry: string;
  city: string | null;
  state: string | null;
  website_url: string | null;
  stripe_customer_id: string | null;
  subscription_tier: SubscriptionTier | null;
  subscription_status: string;
  site_url: string | null;
  monthly_price: number | null;
  setup_fee: number | null;
  notes: string | null;
}

export interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  business_name: string | null;
  industry: string | null;
  message: string | null;
  source: string;
  status: string;
}
