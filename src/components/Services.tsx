const SERVICES = [
  {
    icon: '◈',
    title: 'AI-Powered Websites',
    description:
      'Custom Next.js websites delivered in 3-5 days. PageSpeed scores of 95+. You own the code.',
    tags: ['Next.js', '3-Day Delivery', 'PageSpeed 95+'],
    features: [
      'Custom design, not a template',
      'Mobile-first responsive',
      'Built-in SEO from day one',
      'Hosting & CDN included',
    ],
  },
  {
    icon: '◎',
    title: 'AI Chatbots',
    description:
      'Your website answers questions and books appointments around the clock. No missed leads, even at 2am.',
    tags: ['24/7 Booking', 'AI-Powered', 'HIPAA-Aware'],
    features: [
      'Instant response to website visitors',
      'Books appointments automatically',
      'Answers FAQs about your services',
      'Hands off to your team when needed',
    ],
  },
  {
    icon: '★',
    title: 'Review Automation',
    description:
      'Automatically request reviews after every appointment. Monitor, respond, and grow your online reputation on autopilot.',
    tags: ['Google Reviews', 'Automated', 'Reputation'],
    features: [
      'Post-appointment review requests',
      'Multi-platform monitoring',
      'AI-assisted response drafts',
      'Review analytics dashboard',
    ],
  },
  {
    icon: '⚡',
    title: 'Lead Nurture & Recovery',
    description:
      'AI email and SMS sequences that follow up with leads, recover missed calls, and reduce no-shows by up to 40%.',
    tags: ['SMS', 'Email', 'No-Show Recovery'],
    features: [
      'Missed call text-back in seconds',
      'Automated appointment reminders',
      'No-show follow-up sequences',
      'New lead drip campaigns',
    ],
  },
  {
    icon: '⊞',
    title: 'Local SEO & GEO',
    description:
      'Rank in the Google Map Pack and get found when AI assistants recommend local businesses.',
    tags: ['Google Maps', 'GBP', 'AI Search'],
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'GEO for AI search engines',
      'Monthly ranking reports',
    ],
  },
  {
    icon: '◈',
    title: 'Analytics & Reporting',
    description:
      'Know exactly where your patients come from, what they do on your site, and how much revenue your marketing generates.',
    tags: ['Dashboard', 'ROI Tracking', 'Monthly'],
    features: [
      'Patient acquisition tracking',
      'Source attribution (Google, direct, referral)',
      'Monthly performance reports',
      'Revenue impact visibility',
    ],
  },
] as const;

export function Services() {
  return (
    <section id="services">
      <div className="c">
        <div className="sh sc rv">
          <div className="tag" style={{ display: 'inline-flex' }}>
            What We Build
          </div>
          <h2 className="st">
            Websites, Automation, &amp; <em>Growth</em>
          </h2>
          <p className="sd">
            We don&apos;t just build websites. We build the AI-powered systems
            that fill your schedule and grow your revenue.
          </p>
        </div>
        <div className="svcs">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`svc rv${i > 0 ? ` d${Math.min(i, 4)}` : ''}`}
            >
              <span className="svc-icon">{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '10px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                {svc.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: '11px',
                      color: 'var(--t2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ color: 'var(--green)', fontSize: '10px' }}>
                      ✓
                    </span>{' '}
                    {f}
                  </li>
                ))}
              </ul>
              <div className="svc-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="ptg hi">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#pricing" className="svc-link">
                View Pricing →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
