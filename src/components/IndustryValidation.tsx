'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const QUOTES = [
  {
    quote:
      '77% of patients use online search before booking a new healthcare provider — your website is the first impression most patients will ever have of your practice.',
    attribution: 'PatientPop 2023 Patient Perspective Survey',
  },
  {
    quote:
      '53% of mobile users abandon sites that take longer than 3 seconds to load. For dental practices, every second of delay costs potential appointments.',
    attribution: 'Google/SOASTA Research, 2017 (Think with Google)',
  },
  {
    quote:
      'Pages that load in under 2 seconds have a 15% higher conversion rate than slower pages — speed is the single biggest lever for turning visitors into booked patients.',
    attribution: 'Google Web Performance Documentation',
  },
];

export function IndustryValidation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

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
            What the <em>Data</em> Says
          </h2>
          <p className="sd">
            Our approach is grounded in real research from Google and healthcare industry surveys.
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
