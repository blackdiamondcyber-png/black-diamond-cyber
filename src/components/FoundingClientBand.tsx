'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Founding Client Program band. LeftClick has real logos and $-outcomes; we
 * don't yet. Instead of faking it, we lean into being early: first 10 clients
 * get locked-in founding pricing forever, direct founder access, and priority
 * build slots. This turns the "no logos yet" gap into scarcity and urgency.
 */
const BENEFITS = [
  { icon: '🔒', label: 'Founding pricing locked for life — we raise rates for everyone else.' },
  { icon: '📞', label: 'Direct Slack with Erik — not a ticket queue, not an SDR.' },
  { icon: '🚀', label: 'Priority build slot — start inside 7 days, not 7 weeks.' },
  { icon: '🤝', label: 'Case-study partnership — we\u2019ll feature your wins and drive traffic back.' },
];

export function FoundingClientBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section ref={ref} style={{ padding: '80px 24px' }}>
      <div className="c">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            padding: 'clamp(36px, 5vw, 56px)',
            borderRadius: 24,
            background:
              'linear-gradient(135deg, rgba(40,135,204,0.10) 0%, rgba(93,196,232,0.04) 60%, rgba(52,211,153,0.06) 100%)',
            border: '1px solid rgba(93,196,232,0.18)',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 0% 0%, rgba(93,196,232,0.12) 0%, transparent 60%), radial-gradient(ellipse at 100% 100%, rgba(52,211,153,0.08) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '6px 16px',
                borderRadius: 100,
                background: 'rgba(52,211,153,0.12)',
                border: '1px solid rgba(52,211,153,0.30)',
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--green)',
                  boxShadow: '0 0 10px var(--green)',
                  animation: 'p 2s infinite',
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--green)',
                }}
              >
                Founding Client Program · Spots Remaining
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
                gap: 40,
                alignItems: 'center',
              }}
              className="founding-grid"
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 'clamp(28px, 3.8vw, 46px)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.025em',
                    color: 'var(--text)',
                    margin: '0 0 18px',
                  }}
                >
                  Be one of our first{' '}
                  <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>ten</em>.{' '}
                  <br />
                  Lock the rate. Forever.
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: 'var(--t2)',
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: 560,
                  }}
                >
                  We&rsquo;re new. That&rsquo;s the advantage. We&rsquo;re taking on ten founding clients at current pricing and
                  keeping them there — even as we raise rates for everyone who comes after. Direct founder access, priority
                  build slots, case-study partnership. Once the ten are filled, the program closes.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {BENEFITS.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 1, x: 0 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      padding: '14px 16px',
                      borderRadius: 12,
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span style={{ fontSize: 18, lineHeight: 1.4, flexShrink: 0 }} aria-hidden>
                      {b.icon}
                    </span>
                    <span style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.55 }}>{b.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 36,
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <a href="#book" className="bp" style={{ fontSize: 14 }}>
                Claim a Founding Spot
              </a>
              <a href="/free-audit" className="bs" style={{ fontSize: 14 }}>
                Run the Free Audit First
              </a>
              <span style={{ fontSize: 12, color: 'var(--t3)', marginLeft: 4 }}>
                No credit card · 30-minute call · Honest answer either way
              </span>
            </div>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              @media (max-width: 860px) {
                .founding-grid { grid-template-columns: 1fr !important; }
              }
            `,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
