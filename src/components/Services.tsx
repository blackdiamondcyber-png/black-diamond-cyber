'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { IconBolt, IconBot, IconStar, IconPhone, IconMapPin, IconBarChart } from '@/components/Icons';

type ServiceIconComponent = React.FC<{ size?: number; color?: string }>;

type Service = {
  Icon: ServiceIconComponent;
  title: string;
  badge?: string;
  description: string;
  tags: readonly string[];
  features: readonly string[];
  highlight?: boolean;
};

const SERVICES: Service[] = [
  {
    Icon: IconBolt,
    title: 'AI-Powered Websites',
    badge: 'Most Popular',
    description:
      'Custom Next.js websites that load in under 2 seconds. PageSpeed 95+. Built in 3 days. You own the code forever.',
    tags: ['Next.js', '3-Day Delivery', 'PageSpeed 95+'],
    features: [
      'Fully custom design — zero templates',
      'Mobile-first, lightning fast',
      'Built-in SEO from day one',
      'Hosting, SSL & global CDN included',
    ],
    highlight: true,
  },
  {
    Icon: IconBot,
    title: 'AI Chatbot & Booking',
    description:
      'Your website answers questions and books appointments 24/7. Never miss a lead at 2am again.',
    tags: ['24/7 Booking', 'AI-Powered', 'Secure'],
    features: [
      'Instant response to visitors',
      'Books appointments automatically',
      'Answers your top 20 FAQs',
      'Escalates to your team when needed',
    ],
  },
  {
    Icon: IconStar,
    title: 'Review Automation',
    description:
      'Auto-request reviews after every appointment. Go from 12 Google reviews to 200+ in 90 days.',
    tags: ['Google Reviews', 'Automated', 'Multi-platform'],
    features: [
      'Post-appointment SMS requests',
      'Monitor Google, Yelp, Facebook',
      'AI-generated response drafts',
      'Review analytics dashboard',
    ],
  },
  {
    Icon: IconPhone,
    title: 'Missed Call Text-Back',
    description:
      'Every missed call gets an instant text. Recover 40%+ of leads that would have called your competitor instead.',
    tags: ['SMS Automation', '< 30sec', 'Lead Recovery'],
    features: [
      'Instant SMS when you miss a call',
      'AI follows up until they book',
      'Appointment reminder sequences',
      'No-show recovery campaigns',
    ],
  },
  {
    Icon: IconMapPin,
    title: 'Local SEO & Google Maps',
    description:
      'Dominate the Google Map Pack. Show up when customers search your service area or AI assistants recommend local businesses.',
    tags: ['Google Maps', 'Google Business Profile', 'AI Search'],
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'AI search visibility (GPT, Perplexity, Gemini)',
      'Monthly ranking reports',
    ],
  },
  {
    Icon: IconBarChart,
    title: 'Revenue Analytics',
    description:
      'Know exactly where your customers come from and how much each marketing dollar earns. No more guessing.',
    tags: ['Dashboard', 'ROI Tracking', 'Monthly'],
    features: [
      'Customer acquisition tracking',
      'Source attribution (Google, direct, referral)',
      'Monthly performance reports',
      'Revenue impact visibility',
    ],
  },
];

function TiltCard({
  children,
  index,
  highlight,
}: {
  children: React.ReactNode;
  index: number;
  highlight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), {
    stiffness: 200,
    damping: 20,
  });
  const glareX = useTransform(x, [0, 1], ['0%', '100%']);
  const glareY = useTransform(y, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
        border: highlight ? '1px solid rgba(40,135,204,.25)' : undefined,
        boxShadow: highlight ? '0 0 40px rgba(40,135,204,.08)' : undefined,
      }}
      className="svc"
    >
      {/* Glare overlay */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(93,196,232,.07), transparent 60%)`
          ),
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={sectionRef} style={{ scrollMarginTop: '80px' }}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ display: 'inline-flex' }}>
            What We Build
          </div>
          <h2 className="st">
            Not Just a Website. A <em>Revenue Machine.</em>
          </h2>
          <p className="sd" style={{ maxWidth: '520px' }}>
            We build the complete AI-powered system that fills your schedule, grows your reviews, and recovers lost leads — automatically.
          </p>
        </motion.div>

        <motion.div
          className="svcs"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {SERVICES.map((svc, i) => (
            <TiltCard key={svc.title} index={i} highlight={svc.highlight}>
              {svc.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--blue)',
                  color: '#fff',
                  fontSize: '8px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '3px 12px',
                  borderRadius: '0 0 8px 8px',
                  whiteSpace: 'nowrap',
                }}>
                  {svc.badge}
                </div>
              )}
              <span className="svc-icon"><svc.Icon size={28} /></span>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '10px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                }}
              >
                {svc.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: '11px',
                      color: 'var(--t2)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '6px',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--green)', fontSize: '11px', marginTop: '1px', flexShrink: 0 }}>
                      ✓
                    </span>
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
                See Pricing →
              </a>
            </TiltCard>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '48px',
            padding: '24px 32px',
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: 'var(--rr)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
              Not sure which service you need?
            </div>
            <div style={{ fontSize: '13px', color: 'var(--t2)' }}>
              Book a free 30-min call. We&apos;ll audit your current site and tell you exactly what to fix.
            </div>
          </div>
          <a
            href="#book"
            className="bp"
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            Get Free Audit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
