'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function InlineCTA({
  eyebrow,
  headline,
  subhead,
  primary = { href: '#book', label: 'Book a Free Strategy Call' },
  secondary,
  accent = 'cyan',
}: {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  accent?: 'cyan' | 'green';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const accentColor = accent === 'green' ? 'var(--green)' : 'var(--cyan)';

  return (
    <section
      ref={ref}
      style={{ padding: '72px 24px', position: 'relative' }}
    >
      <div className="c">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background:
              'linear-gradient(135deg, rgba(40,135,204,0.06) 0%, rgba(93,196,232,0.03) 100%)',
            border: '1px solid rgba(93,196,232,0.12)',
            borderRadius: '20px',
            padding: 'clamp(28px, 4vw, 44px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '14px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                `radial-gradient(ellipse at 50% 0%, ${accentColor === 'var(--green)' ? 'rgba(52,211,153,0.08)' : 'rgba(93,196,232,0.06)'} 0%, transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%' }}>
            {eyebrow && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2.2px',
                  textTransform: 'uppercase',
                  color: accentColor,
                }}
              >
                {eyebrow}
              </span>
            )}
            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 'clamp(22px, 3vw, 34px)',
                color: 'var(--text)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                fontWeight: 400,
                maxWidth: '720px',
                margin: 0,
              }}
            >
              {headline}
            </h3>
            {subhead && (
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--t2)',
                  lineHeight: 1.65,
                  maxWidth: '560px',
                  margin: 0,
                }}
              >
                {subhead}
              </p>
            )}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '8px',
              }}
            >
              <a href={primary.href} className="bp" style={{ fontSize: '13px' }}>
                {primary.label}
              </a>
              {secondary && (
                <a href={secondary.href} className="bs" style={{ fontSize: '13px' }}>
                  {secondary.label}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
