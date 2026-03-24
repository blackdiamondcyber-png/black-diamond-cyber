'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';

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

function TiltCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), {
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
              `radial-gradient(circle at ${gx} ${gy}, rgba(93,196,232,.06), transparent 60%)`
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
    <section id="services" ref={sectionRef}>
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
            Websites, Automation, &amp; <em>Growth</em>
          </h2>
          <p className="sd">
            We don&apos;t just build websites. We build the AI-powered systems
            that fill your schedule and grow your revenue.
          </p>
        </motion.div>
        <motion.div
          className="svcs"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {SERVICES.map((svc, i) => (
            <TiltCard key={svc.title} index={i}>
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
                      &#10003;
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
                View Pricing &rarr;
              </a>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
