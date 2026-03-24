export type SubscriptionTier = 'starter' | 'professional' | 'premium' | 'cinematic';
export type ServiceTier = 'growth' | 'dominate';
export type AllTiers = SubscriptionTier | ServiceTier;

export interface ServiceTierConfig {
  name: string;
  setupFee: number;
  monthlyPrice: number;
  includes: string;
  features: string[];
}

export const SERVICE_TIERS: Record<ServiceTier, ServiceTierConfig> = {
  growth: {
    name: 'Growth',
    setupFee: 2997,
    monthlyPrice: 497,
    includes: 'Everything in Professional website tier',
    features: [
      'Professional website (8-15 pages)',
      'AI review request system',
      'Missed call text-back',
      'Appointment reminder sequences',
      'Monthly performance dashboard',
      'Google Business Profile optimization',
      'Hosting, SSL, CDN included',
      'No contracts — cancel anytime',
    ],
  },
  dominate: {
    name: 'Dominate',
    setupFee: 4997,
    monthlyPrice: 1497,
    includes: 'Everything in Growth',
    features: [
      'Everything in Growth tier',
      'AI chatbot — books appointments 24/7',
      'AI-powered lead nurture (email + SMS)',
      'Reputation management dashboard',
      'Google Ads management with AI optimization',
      'Competitor monitoring alerts',
      'Dedicated Slack channel with Erik',
      'Priority support — same-day response',
    ],
  },
};

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
  project_status: string | null;
  project_status_updated_at: string | null;
  status_detail: string | null;
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

/* -------------------------------------------------- */
/* Proposals & Contracts                               */
/* -------------------------------------------------- */

export type ProposalProjectType = 'website' | 'growth' | 'dominate';
export type ProposalStatus = 'draft' | 'sent' | 'viewed' | 'accepted' | 'declined' | 'expired';
export type ContractStatus = 'draft' | 'sent' | 'signed' | 'active' | 'cancelled' | 'expired';

export interface ScopeItem {
  title: string;
  description: string;
  included: boolean;
}

export interface SignatureData {
  image: string;
  name: string;
  date: string;
  ip?: string;
}

export interface Proposal {
  id: string;
  client_name: string;
  client_email: string;
  client_business: string;
  project_type: ProposalProjectType;
  scope_items: ScopeItem[];
  total_setup: number;
  monthly_recurring: number;
  timeline: string | null;
  status: ProposalStatus;
  sent_at: string | null;
  viewed_at: string | null;
  accepted_at: string | null;
  signature_data: SignatureData | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface ContractTerms {
  description: string;
  paymentTerms: string;
  cancellationPolicy: string;
  deliverables: string[];
  additionalTerms?: string;
}

export interface Contract {
  id: string;
  proposal_id: string | null;
  client_name: string;
  client_email: string;
  contract_type: string;
  terms: ContractTerms;
  start_date: string | null;
  end_date: string | null;
  status: ContractStatus;
  signature_data: SignatureData | null;
  signed_at: string | null;
  created_at: string;
  updated_at: string;
}
