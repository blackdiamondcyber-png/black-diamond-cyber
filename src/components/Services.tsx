const SERVICES = [
  {
    icon: '◈',
    title: 'Websites',
    description:
      'AI-powered website design and hosting for local businesses. From template-based to fully custom builds, delivered in as little as 3 days.',
    tags: ['Next.js', 'Responsive', 'SEO-Ready'],
  },
  {
    icon: '⟨/⟩',
    title: 'App Development',
    description:
      'Custom web applications, client dashboards, and business portals. Real-time data, secure access, and mobile-first design.',
    tags: ['React', 'Supabase', 'Real-Time'],
  },
  {
    icon: '⚙',
    title: 'Automation',
    description:
      'Workflow automation, AI chatbots, CRM integrations, and auto-follow-ups. Eliminate repetitive tasks and never miss a lead.',
    tags: ['n8n', 'AI Chatbots', 'CRM'],
  },
  {
    icon: '⊞',
    title: 'SEO & Analytics',
    description:
      'Local SEO, Google Business optimization, and monthly performance reports. Know exactly where your traffic and leads come from.',
    tags: ['Local SEO', 'GBP', 'Reporting'],
  },
  {
    icon: '✦',
    title: 'AI Integration',
    description:
      'Smart forms, AI-generated content, lead scoring, and intelligent automation powered by the latest language models.',
    tags: ['Claude', 'GPT', 'Lead Scoring'],
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
            Full-Service <em>Digital Agency</em>
          </h2>
          <p className="sd">
            Websites are just the start. We build the systems that make local
            businesses impossible to ignore online.
          </p>
        </div>
        <div className="svcs">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`svc rv${i > 0 ? ` d${i}` : ''}`}
            >
              <span className="svc-icon">{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="svc-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="ptg hi">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#book" className="svc-link">
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
