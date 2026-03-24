'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FOUNDING_CARDS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'Launch Pricing',
    description: 'Lock in our lowest rates before they increase. First 4 clients only.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Personal Attention',
    description: 'Work directly with Erik \u2014 not a junior designer or AI bot.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Shape the Product',
    description: 'Your feedback directly influences what we build next.',
  },
];

export function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="founding" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ marginBottom: '12px' }}>
            Limited Availability
          </div>
          <h2 className="st">
            Be One of Our <em>First 4 Clients</em>
          </h2>
          <p className="sd">
            We are building something special &mdash; and the first clients in get the best deal.
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:640px){#founding-grid{grid-template-columns:1fr!important}}
      ` }} />

      <div className="c">
        <div id="founding-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
          marginBottom: '32px',
        }}>
          {FOUNDING_CARDS.map((g, i) => (
            <motion.div
              key={g.title}
              className="svc"
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 32px rgba(93,196,232,.08), inset 0 1px 0 rgba(255,255,255,.03)',
                borderColor: 'rgba(93,196,232,.12)',
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                {g.icon}
              </div>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '20px',
                color: 'var(--text)',
                fontWeight: 400,
                marginBottom: '10px',
                lineHeight: 1.2,
              }}>
                {g.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'var(--t2)',
                lineHeight: 1.75,
              }}>
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA + honesty note */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <a
            href="/free-audit"
            className="bp"
            style={{ display: 'inline-flex', marginBottom: '24px' }}
          >
            Apply for Founding Client Pricing
            <span style={{ fontSize: '14px' }}>&rarr;</span>
          </a>
          <p style={{
            fontSize: '13px',
            color: 'var(--t3)',
            lineHeight: 1.7,
          }}>
            Honest truth: We are new. But our founder has worked inside 400+ dental practices and shipped 8 production apps. Your project gets our full attention and best work.
          </p>
        </div>
      </div>
    </section>
  );
}
