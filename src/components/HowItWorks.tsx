'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const STEPS = [
  {
    title: 'Free Audit',
    description:
      'We audit your website, Google rankings, and AI search visibility. You get the report whether you hire us or not.',
    detail: 'Results in 24 hours.',
  },
  {
    title: 'Proposal',
    description:
      'A clear scope, timeline, and price built for your business. No generic decks.',
    detail: 'You see the plan before you spend a dollar.',
  },
  {
    title: 'Build',
    description:
      'Custom site, AI-optimized content, online booking, schema markup. Live in 7 days.',
    detail: 'Every page designed to convert.',
  },
  {
    title: 'Grow',
    description:
      'Monthly GEO optimization, performance reports, and AI search monitoring. Your visibility compounds.',
    detail: 'This is where the real ROI happens.',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });
  const stepsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 75%', 'end 60%'],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--t2)' }}>3</span>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text)' }}>The Diamond Method</span>
          </div>
          <h2 className="st">
            From first call to <em>launch.</em>
          </h2>
        </motion.div>

        <div ref={stepsRef} style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
          {/* Progress line */}
          <div style={{
            position: 'absolute',
            left: '19px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'var(--hr)',
            borderRadius: '1px',
          }}>
            <motion.div
              style={{
                width: '100%',
                height: progressHeight,
                background: 'linear-gradient(180deg, var(--cyan), var(--blue))',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Steps */}
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                paddingBottom: i < STEPS.length - 1 ? '40px' : '0',
                position: 'relative',
              }}
            >
              {/* Step number circle */}
              <motion.div
                whileInView={{ scale: [0.8, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg1)',
                  border: '1px solid var(--hr)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '18px',
                  color: 'var(--cyan)',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 0 0 4px var(--bg)',
                }}
              >
                {i + 1}
              </motion.div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: '6px' }}>
                <h3 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '22px',
                  color: 'var(--text)',
                  fontWeight: 400,
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--t2)',
                  lineHeight: 1.75,
                  marginBottom: '8px',
                }}>
                  {step.description}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--cyan)',
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}>
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
