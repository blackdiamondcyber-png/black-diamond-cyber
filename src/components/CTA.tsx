'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="cta" id="book" ref={ref}>
      <div className="c">
        <div className="cta-o">
          <div className="cta-i" style={{ padding: '72px 48px' }}>
            {/* Ambient glow */}
            <div style={{
              position: 'absolute',
              top: '-80px',
              left: '-80px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(40,135,204,.07), transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-60px',
              right: '-60px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(93,196,232,.05), transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }} />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              {/* Founding client pill */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 18px',
                  borderRadius: '40px',
                  background: 'rgba(52,211,153,.08)',
                  border: '1px solid rgba(52,211,153,.2)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: 'var(--green)',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'p 1.5s infinite' }} />
                  Founding Client Program — 5 Spots
                </span>
              </div>

              <h2 style={{ marginBottom: '16px' }}>
                Your Next Patient Is
                <br />
                <em>Searching Right Now.</em>
              </h2>
              <p style={{ marginBottom: '16px' }}>
                We&apos;re accepting <strong style={{ color: 'var(--text)' }}>5 founding dental clients</strong> at <strong style={{ color: 'var(--green)' }}>30% off</strong>. You get a premium, AI-powered website built by someone who knows your industry inside and out. We get a real case study to prove what we can do. Everybody wins.
              </p>

              {/* What founding clients get */}
              <div style={{
                display: 'inline-flex',
                gap: '24px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '16px',
                padding: '16px 24px',
                background: 'rgba(255,255,255,.02)',
                border: '1px solid var(--hr)',
                borderRadius: '12px',
              }}>
                {['Free dental website audit', 'Free competitor analysis', '30% off any tier', 'Priority 3-day delivery'].map((item) => (
                  <span key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    color: 'var(--t2)',
                    fontWeight: 500,
                  }}>
                    <span style={{ color: 'var(--green)', fontSize: '15px' }}>✓</span>
                    {item}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: '13px', color: 'var(--t3)', marginBottom: '24px', textAlign: 'center' }}>
                No commitment to apply. The audit alone is worth the 30-minute call &mdash; you&apos;ll see exactly what&apos;s costing your practice new patients.
              </p>
            </motion.div>

            <motion.div
              className="cb"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <MagneticButton href="#book" className="bp" strength={0.25}>
                Apply for a Founding Client Spot
              </MagneticButton>
              <MagneticButton href="/free-audit" className="bs" strength={0.2}>
                Run Your Free Site Audit
              </MagneticButton>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              style={{
                position: 'relative',
                zIndex: 1,
                fontSize: '13px',
                color: 'var(--t3)',
                marginTop: '20px',
                textAlign: 'center',
              }}
            >
              No contracts. You own the code. Cancel anytime.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
