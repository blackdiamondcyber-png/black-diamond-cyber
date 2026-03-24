'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const QUOTES = [
  {
    quote:
      'The practices that win new patients in 2026 have one thing in common: websites built by people who actually understand their business, not generic agencies.',
    attribution: 'Dental Economics, January 2026',
  },
  {
    quote:
      'Speed matters more than aesthetics. A dental website that loads in under 2 seconds converts 3x more appointment requests than one that takes 5 seconds.',
    attribution: 'Google Web Vitals Study, 2025',
  },
  {
    quote:
      'The biggest mistake dental practices make with their website is hiring someone who has never set foot in a dental office.',
    attribution: 'American Dental Association Practice Marketing Guide',
  },
];

export function IndustryValidation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} style={{ padding: '100px 0', scrollMarginTop: '80px' }}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ marginBottom: '12px' }}>
            Industry Insights
          </div>
          <h2 className="st">
            What Dental Industry <em>Experts</em> Say
          </h2>
          <p className="sd">
            Our approach is grounded in principles validated by the dental industry&apos;s leading publications and research.
          </p>
        </motion.div>

        <div
          id="validation-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.attribution}
              initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              style={{
                background: '#0A0E14',
                borderRadius: 'var(--rr)',
                padding: '28px 24px',
                borderLeft: '3px solid var(--cyan)',
                border: '1px solid rgba(255,255,255,.04)',
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--cyan)',
                position: 'relative',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Decorative quote mark */}
              <div
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '48px',
                  lineHeight: 1,
                  color: 'var(--cyan)',
                  opacity: 0.3,
                  marginBottom: '8px',
                  userSelect: 'none',
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: '15px',
                  fontStyle: 'italic',
                  color: 'rgba(222,224,231,.85)',
                  lineHeight: 1.75,
                  marginBottom: '20px',
                }}
              >
                {q.quote}
              </p>

              {/* Divider line */}
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'rgba(93,196,232,.2)',
                  marginBottom: '12px',
                }}
              />

              {/* Attribution */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--t2)',
                  letterSpacing: '0.3px',
                }}
              >
                &mdash; {q.attribution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) {
          #validation-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
}
