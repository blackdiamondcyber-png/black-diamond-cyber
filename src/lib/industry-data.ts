export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  headlineEmphasis: string;
  subheadline: string;
  description: string;
  heroImage: string;
  heroBgColor: string;
  accentColor: string;
  painPoints: {
    title: string;
    description: string;
    stat?: string;
  }[];
  portfolioSlug: string;
  portfolioName: string;
  portfolioLocation: string;
  portfolioResult: string;
  testimonial: {
    quote: string;
    name: string;
    title: string;
    industry: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const INDUSTRY_DATA: Record<string, IndustryData> = {
  dental: {
    slug: 'dental',
    name: 'Dental Practices',
    headline: 'Websites & Growth Systems for',
    headlineEmphasis: 'Dental Practices',
    subheadline: 'AI-powered websites, review automation, and patient acquisition systems built specifically for dentists.',
    description: 'We build high-performance websites and growth systems that help dental practices attract new patients, automate reviews, and dominate local search. No contracts. Own your code.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    heroBgColor: '#1B5E7A',
    accentColor: '#2A9AB5',
    painPoints: [
      {
        title: 'Invisible on Google',
        description: 'When someone searches "dentist near me," your practice doesn\'t show up. Meanwhile, the office down the street with a worse reputation is getting all the calls.',
        stat: '46%',
      },
      {
        title: 'Wix Sites Drive Patients Away',
        description: 'Your template website loads in 6+ seconds and looks like every other dental site. Patients bounce before they even see your services.',
        stat: '6.8s',
      },
      {
        title: 'No Review Strategy',
        description: 'Happy patients leave without reviewing. Unhappy ones find Google instantly. Without automated review requests, your rating stagnates.',
        stat: '15-30',
      },
      {
        title: 'Missed Calls = Lost Revenue',
        description: 'Every missed call is a $800-$2,000 patient walking to your competitor. Without missed call text-back, those patients are gone forever.',
        stat: '$2K',
      },
    ],
    portfolioSlug: 'bright-smile-dental',
    portfolioName: 'Bright Smile Dental',
    portfolioLocation: 'Austin, TX',
    portfolioResult: '+47 new patients/mo since launch',
    testimonial: {
      quote: 'We went from 12 new patients a month to 47. The website pays for itself ten times over. Best investment we\'ve made for the practice.',
      name: 'Dr. Sarah Mitchell',
      title: 'Bright Smile Dental, Austin TX',
      industry: 'Dental',
    },
    faqs: [
      {
        question: 'How long does it take to build a dental website?',
        answer: 'Most dental websites are delivered in 3-7 business days depending on the tier. Our AI-powered build process is significantly faster than traditional agencies that take 6-8 weeks.',
      },
      {
        question: 'Will my website work with my practice management software?',
        answer: 'Yes. We integrate with Dentrix, Eaglesoft, Open Dental, and most major PMS systems. Online booking, patient forms, and appointment reminders all connect seamlessly.',
      },
      {
        question: 'Do I own my website if I cancel?',
        answer: 'Absolutely. Unlike Wix or template companies, you own 100% of the code. If you cancel, we hand over everything — code, content, images. No hostage situations.',
      },
      {
        question: 'How does the review automation work?',
        answer: 'After each appointment, our system automatically sends a text/email asking for a Google review. Happy patients get a direct link to leave a 5-star review. It runs on autopilot.',
      },
      {
        question: 'What makes this different from dental marketing agencies?',
        answer: 'No contracts, no $5K setup fees, no 6-week timelines. We build faster with AI, charge less, and you own your website. Most dental agencies lock you into 12-month contracts.',
      },
    ],
    seoTitle: 'Dental Website Design & Growth Systems | Black Diamond Cyber',
    seoDescription: 'AI-powered websites for dental practices. Custom design, review automation, missed call text-back, and patient acquisition systems. Starting at $997. No contracts.',
    keywords: ['dental website design', 'dental practice marketing', 'dental SEO', 'dental website builder', 'dental practice website'],
  },

  hvac: {
    slug: 'hvac',
    name: 'HVAC Companies',
    headline: 'Websites & Growth Systems for',
    headlineEmphasis: 'HVAC Companies',
    subheadline: 'AI-powered websites, lead generation, and automation systems built specifically for heating and cooling businesses.',
    description: 'We build high-performance websites and growth systems that help HVAC companies generate more leads, automate follow-ups, and dominate local search. No contracts. Own your code.',
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=500&fit=crop',
    heroBgColor: '#8B4D1A',
    accentColor: '#D4893C',
    painPoints: [
      {
        title: 'Losing to HomeAdvisor',
        description: 'You\'re paying $50-$150 per lead on HomeAdvisor while your competitor\'s website generates free organic leads every day. Stop renting leads. Own your pipeline.',
        stat: '$150',
      },
      {
        title: 'Slow Website, Lost Jobs',
        description: 'When someone\'s AC breaks at 2 AM, they\'re calling whoever shows up first on Google with a fast site. If your site takes 5+ seconds, they\'re calling someone else.',
        stat: '5s+',
      },
      {
        title: 'No After-Hours Capture',
        description: '67% of HVAC emergency calls happen outside business hours. Without a missed call text-back system, those jobs go to the competition.',
        stat: '67%',
      },
      {
        title: 'Reviews Stuck at 4.2',
        description: 'You do great work but your Google rating doesn\'t reflect it. Without automated review requests after every job, your best customers stay silent.',
        stat: '4.2',
      },
    ],
    portfolioSlug: 'summit-hvac',
    portfolioName: 'Summit HVAC Services',
    portfolioLocation: 'Denver, CO',
    portfolioResult: '312% increase in web leads',
    testimonial: {
      quote: 'We stopped paying for HomeAdvisor leads completely. Our website generates more calls than we can handle. The missed call text-back alone pays for the entire service.',
      name: 'Mike Torres',
      title: 'Summit HVAC, Denver CO',
      industry: 'HVAC',
    },
    faqs: [
      {
        question: 'How quickly can I get my HVAC website up?',
        answer: 'Most HVAC websites are delivered in 3-7 business days. We prioritize fast launches because we know every day without a great website costs you jobs.',
      },
      {
        question: 'Can the website handle emergency service requests?',
        answer: 'Yes. We build prominent emergency CTAs, click-to-call buttons, and after-hours contact forms. The missed call text-back system ensures no emergency lead falls through the cracks.',
      },
      {
        question: 'Will this help me rank above competitors on Google?',
        answer: 'Our sites are built for speed (sub-2s load times) and SEO from day one. Combined with Google Business Profile optimization, most clients see significant ranking improvements within 60 days.',
      },
      {
        question: 'Do you integrate with ServiceTitan or Housecall Pro?',
        answer: 'Yes. We integrate with ServiceTitan, Housecall Pro, Jobber, and most major field service management platforms for seamless booking and scheduling.',
      },
      {
        question: 'What if I already have a website?',
        answer: 'We\'ll migrate your content, preserve your SEO rankings, and set up proper redirects. You\'ll get a faster, better-looking site without losing any of your existing Google juice.',
      },
    ],
    seoTitle: 'HVAC Website Design & Lead Generation | Black Diamond Cyber',
    seoDescription: 'AI-powered websites for HVAC companies. Custom design, lead generation, missed call text-back, and growth automation. Starting at $997. No contracts.',
    keywords: ['HVAC website design', 'HVAC lead generation', 'HVAC marketing', 'heating and cooling website', 'HVAC SEO'],
  },

  plumbing: {
    slug: 'plumbing',
    name: 'Plumbing Companies',
    headline: 'Websites & Growth Systems for',
    headlineEmphasis: 'Plumbing Companies',
    subheadline: 'AI-powered websites, lead capture, and automation systems built specifically for plumbers and plumbing contractors.',
    description: 'We build high-performance websites and growth systems that help plumbing companies generate more emergency calls, automate reviews, and own local search. No contracts. Own your code.',
    heroImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=500&fit=crop',
    heroBgColor: '#1A5580',
    accentColor: '#2887CC',
    painPoints: [
      {
        title: 'Competitors Own "Plumber Near Me"',
        description: 'The plumber ranking #1 for "plumber near me" in your city gets 10x more calls than #5. Your website\'s speed and SEO directly determine your ranking.',
        stat: '10x',
      },
      {
        title: 'Emergency Calls Going to Voicemail',
        description: 'A burst pipe at midnight means a customer needs help NOW. If your phone goes to voicemail, they\'re calling the next plumber. Missed call text-back saves those jobs.',
        stat: '73%',
      },
      {
        title: 'Template Site Looks Generic',
        description: 'Your Wix/GoDaddy site looks identical to 50 other plumbers in your area. Customers can\'t tell you apart. A custom site builds trust and converts at 3x the rate.',
        stat: '3x',
      },
      {
        title: 'No Repeat Business System',
        description: 'You fix the leak and never hear from them again — until they call someone else for the water heater. Automated follow-ups keep you top of mind for every future job.',
        stat: '$4K',
      },
    ],
    portfolioSlug: 'apex-plumbing',
    portfolioName: 'Apex Plumbing Co.',
    portfolioLocation: 'Phoenix, AZ',
    portfolioResult: 'Ranking #1 for "plumber near me"',
    testimonial: {
      quote: 'We went from page 3 on Google to the #1 spot in 6 weeks. The phone hasn\'t stopped ringing. I had to hire two more plumbers just to keep up with demand.',
      name: 'Carlos Mendez',
      title: 'Apex Plumbing, Phoenix AZ',
      industry: 'Plumbing',
    },
    faqs: [
      {
        question: 'How fast can I get a plumbing website built?',
        answer: 'Most plumbing websites are delivered in 3-5 business days. We know time is money in the trades — every day without a great website costs you emergency calls.',
      },
      {
        question: 'Can customers book emergency service online?',
        answer: 'Yes. We build prominent emergency call buttons, click-to-call functionality, and after-hours booking forms. The missed call text-back system ensures no lead is lost.',
      },
      {
        question: 'Will this help me stop paying for Angi/HomeAdvisor leads?',
        answer: 'That\'s the goal. Our sites are built for organic SEO — fast load times, local schema markup, and Google Business Profile optimization. Most clients significantly reduce paid lead spend within 90 days.',
      },
      {
        question: 'Do you handle Google Business Profile setup?',
        answer: 'Yes. GBP optimization is included in all Growth and Dominate tiers. We optimize your profile, set up review automation, and ensure you show up in the local map pack.',
      },
      {
        question: 'What if I\'m not tech-savvy?',
        answer: 'Perfect — that\'s who we built this for. We handle everything: design, development, hosting, maintenance, and updates. You focus on plumbing. We focus on getting you customers.',
      },
    ],
    seoTitle: 'Plumbing Website Design & Lead Generation | Black Diamond Cyber',
    seoDescription: 'AI-powered websites for plumbing companies. Custom design, emergency lead capture, review automation, and growth systems. Starting at $997. No contracts.',
    keywords: ['plumber website design', 'plumbing company marketing', 'plumbing lead generation', 'plumber SEO', 'plumbing website builder'],
  },
};
