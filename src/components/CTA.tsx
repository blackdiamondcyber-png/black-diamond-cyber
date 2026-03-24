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
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: 'var(--green)',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'p 1.5s infinite' }} />
                  Now Accepting Founding Clients
                </span>
              </div>

              <h2 style={{ marginBottom: '16px' }}>
                More Customers Start with
                <br />
                <em>a Better Website.</em>
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Your next customer is searching right now. If your website doesn&apos;t load fast, look professional, and make booking easy &mdash; they&apos;ll choose the business that does. Let&apos;s make sure that&apos;s you.
              </p>

              {/* What you get free */}
              <div style={{
                display: 'inline-flex',
                gap: '24px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '32px',
                padding: '16px 24px',
                background: 'rgba(255,255,255,.02)',
                border: '1px solid var(--hr)',
                borderRadius: '12px',
              }}>
                {['Free competitor analysis', 'Free website audit', 'Free content strategy', 'No sales pressure'].map((item) => (
                  <span key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: 'var(--t2)',
                    fontWeight: 500,
                  }}>
                    <span style={{ color: 'var(--green)', fontSize: '14px' }}>✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="cb"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <MagneticButton href="#book" className="bp" strength={0.25}>
                Book Free Strategy Call
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
                fontSize: '11px',
                color: 'var(--t3)',
                marginTop: '20px',
                textAlign: 'center',
              }}
            >
              No commitment required. 30 minutes. We&apos;ll show you exactly what&apos;s holding your online presence back.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
