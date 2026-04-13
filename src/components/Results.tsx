'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  {
    value: '95+',
    label: 'Lighthouse Score',
    detail: 'Accessibility & SEO',
  },
  {
    value: '< 1s',
    label: 'Load Time',
    detail: 'First contentful paint',
  },
  {
    value: '7',
    label: 'Day Delivery',
    detail: 'Design to deploy',
  },
  {
    value: '4',
    label: 'Live Demos',
    detail: 'Built & running now',
  },
] as const;

const PROOF_POINTS = [
  'Hand-coded — no templates, no page builders',
  'You own the code — cancel anytime, keep everything',
  'AI search optimized from day one',
] as const;

export function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section
      id="results"
      ref={ref}
      style={{ padding: '120px 0 140px' }}
    >
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.06)',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--t2)',
              }}
            >
              2
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--text)',
              }}
            >
              Built to Perform
            </span>
          </div>
          <h2 className="st">
            Every site we ship <em>proves it.</em>
          </h2>
          <p className="sd" style={{ marginBottom: 0 }}>
            No vanity metrics. These are real numbers from our live builds.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              style={{
                background: 'var(--bg1)',
                border: '1px solid var(--hr)',
                borderRadius: 'var(--rr)',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'border-color .4s var(--ease)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  'rgba(93,196,232,.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  'rgba(255,255,255,.04)';
              }}
            >
              <div
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  color: 'var(--cyan)',
                  lineHeight: 1,
                  marginBottom: '8px',
                  letterSpacing: '-0.03em',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--t2)',
                }}
              >
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proof points */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {PROOF_POINTS.map((point) => (
            <span
              key={point}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: 'var(--t2)',
                fontWeight: 500,
              }}
            >
              <span style={{ color: 'var(--green)', fontSize: '14px', flexShrink: 0 }}>
                ✓
              </span>
              {point}
            </span>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:767px){
          #results [style*="grid-template-columns: repeat(4"]{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(max-width:480px){
          #results [style*="grid-template-columns: repeat(4"]{grid-template-columns:1fr!important}
        }
      `}} />
    </section>
  );
}
