'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * BDC's actual portfolio: four full-industry demo sites. These are what we
 * build and ship for clients. Each links to a live Next.js build with real
 * PageSpeed scores, mobile-tested and production-graded.
 */
const DEMOS = [
  {
    slug: 'dental',
    name: 'Canyon Lake Family Dentistry',
    industry: 'Dental Practice',
    href: '/demo/dental',
    image: '/images/demo-dental.png',
    color: '#5DC4E8',
    pageSpeed: 97,
    bullets: [
      'Online booking handoff to Dentrix / Open Dental',
      'Automated review request flow',
      'Google Business Profile schema',
    ],
  },
  {
    slug: 'hvac',
    name: 'Hill Country Heating & Air',
    industry: 'HVAC Company',
    href: '/demo/hvac',
    image: '/images/demo-hvac.png',
    color: '#F59E0B',
    pageSpeed: 96,
    bullets: [
      'Emergency call-now bar',
      'Service-area coverage map',
      'Missed-call text-back hook',
    ],
  },
  {
    slug: 'plumbing',
    name: 'Clearwater Plumbing Co.',
    industry: 'Plumbing Service',
    href: '/demo/plumbing',
    image: '/images/demo-plumbing.png',
    color: '#2887CC',
    pageSpeed: 97,
    bullets: [
      '24/7 emergency dispatch CTA',
      'Service-area SEO pages',
      'Before/after project gallery',
    ],
  },
  {
    slug: 'medspa',
    name: 'Serenity Med Spa',
    industry: 'Med Spa',
    href: '/demo/medspa',
    image: '/images/demo-medspa.png',
    color: '#8B5CF6',
    pageSpeed: 95,
    bullets: [
      'Luxe editorial design system',
      'Treatment menu + pricing tiers',
      'Consult-booking flow with intake',
    ],
  },
] as const;

function DemoCard({ demo, index }: { demo: (typeof DEMOS)[number]; index: number }) {
  return (
    <motion.a
      href={demo.href}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: 16,
          overflow: 'hidden',
          background: '#111113',
          marginBottom: 16,
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={demo.image}
          alt={`${demo.name} demo site`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
            transition: 'transform .5s cubic-bezier(.16,1,.3,1)',
          }}
        />
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            padding: '4px 10px',
            borderRadius: 100,
            background: 'rgba(6,8,12,0.85)',
            backdropFilter: 'blur(6px)',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: demo.color,
            border: `1px solid ${demo.color}40`,
          }}
        >
          PageSpeed {demo.pageSpeed}
        </span>
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 12,
            marginBottom: 6,
          }}
        >
          <h3
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              color: 'var(--text)',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {demo.name}
          </h3>
          <span
            style={{ fontSize: 13, fontWeight: 600, color: 'var(--t2)', whiteSpace: 'nowrap' }}
          >
            View demo &rarr;
          </span>
        </div>
        <span
          style={{
            display: 'inline-block',
            marginBottom: 10,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: demo.color,
          }}
        >
          {demo.industry}
        </span>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          {demo.bullets.map((b) => (
            <li
              key={b}
              style={{
                fontSize: 13,
                color: 'var(--t3)',
                lineHeight: 1.5,
                paddingLeft: 14,
                position: 'relative',
              }}
            >
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 8,
                  width: 6,
                  height: 1,
                  background: demo.color,
                }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}

export function Demos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section id="case-studies" ref={ref} style={{ scrollMarginTop: 80 }}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 18px',
              borderRadius: 100,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--t2)',
              }}
            >
              4
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--text)',
              }}
            >
              Live Demos
            </span>
          </div>
          <h2 className="st">
            Click any of these. <em>They&rsquo;re real.</em>
          </h2>
          <p className="sd" style={{ maxWidth: 620 }}>
            Fully-functional Next.js builds showing exactly what we ship for each industry. Mobile-tested,
            production-graded, and all scoring 95+ on PageSpeed.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32,
          }}
        >
          {DEMOS.map((demo, i) => (
            <DemoCard key={demo.slug} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
