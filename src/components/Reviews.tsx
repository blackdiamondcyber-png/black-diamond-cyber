'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GUARANTEES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    title: 'You Own Every Line of Code',
    description: 'Your website is built on Next.js and deployed to your own Vercel account. No proprietary platforms, no lock-in. If you leave, you take everything with you.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'No Contracts. Ever.',
    description: 'Month-to-month hosting and support. Cancel anytime with zero penalties. We keep your business by earning it, not by trapping you.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '3-7 Day Delivery',
    description: 'Your site goes live in days, not weeks. AI-powered generation plus human polish means agency-quality work on a startup timeline.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '95+ PageSpeed Guaranteed',
    description: 'Every site is built on Next.js with server-side rendering, image optimization, and global CDN. Sub-2-second load times, every time.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: 'Competitor Research Included',
    description: 'Before we build, we analyze your top 10 local competitors. Your site is designed to outrank and outconvert every one of them.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: '90-Day Optimization',
    description: 'After launch, we monitor performance, tweak SEO, and optimize conversions for 90 days. Your site gets better every month.',
  },
];

export function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="guarantees" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh rv"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ marginBottom: '12px' }}>
            Our Promise
          </div>
          <h2 className="st">
            What We <em>Guarantee</em>
          </h2>
          <p className="sd">
            We&apos;re a new agency building our reputation one client at a time. These aren&apos;t vague promises &mdash; they&apos;re commitments we back with action.
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:1024px){#guarantee-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:640px){#guarantee-grid{grid-template-columns:1fr!important}}
      ` }} />

      <div className="c">
        <div id="guarantee-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
        }}>
          {GUARANTEES.map((g, i) => (
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
                fontSize: '13px',
                color: 'var(--t2)',
                lineHeight: 1.75,
              }}>
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
