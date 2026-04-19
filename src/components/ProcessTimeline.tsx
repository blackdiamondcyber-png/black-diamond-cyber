'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const STEPS = [
  {
    day: 'Day 1',
    title: 'Discovery Call',
    desc: 'We learn your practice, your patients, and your goals. You tell us what matters — we listen.',
  },
  {
    day: 'Day 2',
    title: 'Strategy & Design',
    desc: 'Custom wireframe and content plan, reviewed with you. No surprises — you approve before we build.',
  },
  {
    day: 'Day 3–4',
    title: 'AI-Powered Build',
    desc: 'Your site is coded, optimized, and tested. Hand-polished by a human, accelerated by AI.',
  },
  {
    day: 'Day 5',
    title: 'Your Review',
    desc: 'Full walkthrough with you. Unlimited revisions until you love it.',
  },
  {
    day: 'Day 6',
    title: 'SEO & Launch Prep',
    desc: 'Local SEO, Google Maps integration, schema markup, and speed optimization — all configured.',
  },
  {
    day: 'Day 7',
    title: 'Launch Day',
    desc: 'Site goes live. You get a training session and 30 days of priority support.',
  },
];

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ['0%', '100%']);

  return (
    <section ref={sectionRef} style={{ padding: '100px 0', position: 'relative' }}>
      <div className="c">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="tag rv" style={{ display: 'inline-flex', marginBottom: '16px' }}>
            Our Process
          </div>
          <h2
            className="rv d1"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text)',
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            From Signup to Launch — <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Day by Day</em>
          </h2>
          <p className="rv d2" style={{ fontSize: '15px', color: 'var(--t2)', maxWidth: '480px', margin: '12px auto 0', lineHeight: 1.7 }}>
            Complete transparency. You know exactly what happens and when.
          </p>
        </div>

        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical progress line */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              left: '23px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'var(--hr)',
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: lineHeight,
                background: 'linear-gradient(180deg, var(--blue), var(--cyan))',
                borderRadius: '2px',
              }}
            />
          </div>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 1, x: 0 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '24px 0',
                  position: 'relative',
                }}
              >
                {/* Number circle */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    borderRadius: '50%',
                    background: 'var(--bg1)',
                    border: '2px solid var(--blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: '18px',
                    color: 'var(--cyan)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {i + 1}
                </motion.div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: '4px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: 'var(--cyan)',
                      marginBottom: '4px',
                      display: 'block',
                    }}
                  >
                    {step.day}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--text)',
                      marginBottom: '6px',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
