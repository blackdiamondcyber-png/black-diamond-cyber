export interface CompetitorData {
  slug: string;
  name: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  knownFor: string[];
  weaknesses: string[];
  features: Array<{
    label: string;
    bd: string;
    competitor: string;
  }>;
  stats: Array<{
    label: string;
    bd: string;
    competitor: string;
  }>;
}

export const COMPETITOR_DATA: Record<string, CompetitorData> = {
  wix: {
    slug: 'wix',
    name: 'Wix',
    tagline: 'Why local businesses are switching from Wix to Black Diamond Cyber',
    seoTitle: 'Black Diamond Cyber vs Wix | Custom Sites vs Cookie-Cutter Templates',
    seoDescription:
      'Compare Black Diamond Cyber to Wix. Custom Next.js sites with 90+ page speed, code ownership, and growth automation vs slow templates you can never truly own.',
    knownFor: ['Drag-and-drop builder', 'Free tier available', 'Template library'],
    weaknesses: [
      '6-8 second average load time',
      'No code ownership — you rent, never own',
      'Cookie-cutter templates that all look the same',
      'Poor SEO performance out of the box',
      'No review automation or lead nurture',
      'Limited customization without developer help',
    ],
    features: [
      { label: 'Page speed score', bd: '90+ (Next.js)', competitor: '40-60 (heavy builder)' },
      { label: 'Code ownership', bd: 'You own everything', competitor: 'Wix owns your site' },
      { label: 'Custom design', bd: 'Unique to your brand', competitor: 'Shared templates' },
      { label: 'SEO optimization', bd: 'Technical SEO built-in', competitor: 'Basic SEO tools' },
      { label: 'Review automation', bd: 'AI-powered requests', competitor: 'Not available' },
      { label: 'AI Chatbot', bd: 'Included in Growth plans', competitor: 'Third-party add-on' },
      { label: 'Lead nurture', bd: 'Automated sequences', competitor: 'Not available' },
      { label: 'Monthly cost', bd: '$79 – $249/mo', competitor: '$16 – $45/mo' },
      { label: 'Setup', bd: 'Done-for-you in 3-7 days', competitor: 'DIY (weeks/months)' },
      { label: 'Support', bd: 'Dedicated + Slack', competitor: 'Help center / AI chat' },
    ],
    stats: [
      { label: 'Average page speed', bd: '95/100', competitor: '48/100' },
      { label: 'Time to launch', bd: '3-7 days', competitor: '2-6 weeks (DIY)' },
      { label: 'Conversion rate lift', bd: '+150%', competitor: 'Baseline' },
    ],
  },
  gargle: {
    slug: 'gargle',
    name: 'Gargle',
    tagline: 'A modern alternative to Gargle for dental practices',
    seoTitle: 'Black Diamond Cyber vs Gargle | No Contracts, You Own Your Site',
    seoDescription:
      'Compare Black Diamond Cyber to Gargle for dental websites. Faster sites, no 12-month contracts, code ownership, and AI-powered growth at a fraction of the cost.',
    knownFor: ['Dental-focused marketing agency', 'WordPress websites', 'Reputation management'],
    weaknesses: [
      '$3,000+ setup fees',
      '12-month contracts with auto-renewal',
      'WordPress sites (slow, security-vulnerable)',
      'You don\'t own your website code',
      'Cookie-cutter WordPress themes',
      'Limited AI automation capabilities',
    ],
    features: [
      { label: 'Setup fee', bd: '$997 – $2,997', competitor: '$3,000+' },
      { label: 'Contracts', bd: 'None — cancel anytime', competitor: '12-month lock-in' },
      { label: 'Technology', bd: 'Next.js (enterprise-grade)', competitor: 'WordPress (legacy)' },
      { label: 'Page speed', bd: '90+ score', competitor: '50-70 (WordPress)' },
      { label: 'Code ownership', bd: 'You own everything', competitor: 'They own your site' },
      { label: 'AI chatbot', bd: 'Included in Growth plans', competitor: 'Not available' },
      { label: 'Lead nurture', bd: 'Automated sequences', competitor: 'Basic email only' },
      { label: 'Security', bd: 'Static deploy, zero plugins', competitor: 'WordPress plugin risks' },
      { label: 'Review automation', bd: 'AI-powered requests', competitor: 'Manual review tools' },
      { label: 'Delivery time', bd: '3-7 days', competitor: '4-6 weeks' },
    ],
    stats: [
      { label: 'Average setup cost', bd: '$997', competitor: '$3,000+' },
      { label: 'Contract length', bd: '0 months', competitor: '12 months' },
      { label: 'Page speed score', bd: '95/100', competitor: '58/100' },
    ],
  },
  agencies: {
    slug: 'agencies',
    name: 'Typical Agencies',
    tagline: 'Why businesses are leaving traditional agencies for Black Diamond Cyber',
    seoTitle: 'Black Diamond Cyber vs Web Agencies | Faster, Cheaper, You Own It',
    seoDescription:
      'Compare Black Diamond Cyber to traditional web agencies. Get a custom site in days not months, no contracts, own your code, and pay a fraction of agency prices.',
    knownFor: ['Custom design work', 'Full-service marketing', 'Established workflows'],
    weaknesses: [
      '$5,000 – $15,000 setup fees',
      '4-8 week delivery timelines',
      '6-12 month contracts',
      'WordPress or proprietary CMS (slow)',
      'They own your code — you\'re locked in',
      'Nickel-and-dime for every change',
    ],
    features: [
      { label: 'Setup fee', bd: '$997 – $4,997', competitor: '$5,000 – $15,000' },
      { label: 'Monthly cost', bd: '$79 – $249/mo', competitor: '$500 – $2,000/mo' },
      { label: 'Delivery time', bd: '3-7 days', competitor: '4-8 weeks' },
      { label: 'Contracts', bd: 'None — cancel anytime', competitor: '6-12 month lock-in' },
      { label: 'Technology', bd: 'Next.js (modern)', competitor: 'WordPress (legacy)' },
      { label: 'Code ownership', bd: 'You own everything', competitor: 'Agency owns your code' },
      { label: 'Page speed', bd: '90+ score', competitor: '50-70 (WordPress)' },
      { label: 'AI chatbot', bd: 'Included in Growth plans', competitor: 'Extra $300+/mo' },
      { label: 'Review automation', bd: 'AI-powered requests', competitor: 'Extra $200+/mo' },
      { label: 'Changes & updates', bd: 'Monthly updates included', competitor: '$100-200/hr' },
    ],
    stats: [
      { label: 'Average setup savings', bd: '60-80%', competitor: 'Baseline' },
      { label: 'Time to launch', bd: '3-7 days', competitor: '4-8 weeks' },
      { label: 'Contract required', bd: 'No', competitor: 'Yes (6-12 mo)' },
    ],
  },
};
