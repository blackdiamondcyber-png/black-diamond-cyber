'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const STEPS = [
  {
    title: 'Discovery Call',
    description:
      'Free 30-minute call. We learn your practice, your goals, and your market. No pressure, no pitch — just a conversation about what\'s possible.',
  },
  {
    title: 'Free Site Audit',
    description:
      'We audit your current site (or lack of one), analyze your top 10 local competitors, and show you exactly where you\'re losing customers online.',
  },
  {
    title: 'Design & Build',
    description:
      'AI-powered generation plus human polish. We build your custom site with competitor-informed copy, SEO foundations, and conversion-optimized layouts.',
  },
  {
    title: 'Launch',
    description:
      'Domain connected, deployed on global CDN, analytics installed, Google Business Profile linked. You\'re live and getting found in 3-7 business days.',
  },
  {
    title: '90-Day Optimization',
    description:
      'After launch, we monitor traffic, refine SEO, and optimize conversions for 90 days. Monthly reports show exactly what\'s working and what we\'re improving.',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ display: 'inline-flex' }}>
            How It Works
          </div>
          <h2 className="st">
            From First Call to <em>More Customers</em>
          </h2>
          <p className="sd">
            Five steps. Your site is live in as little as 3 business days, then we optimize for 90 more.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
          {/* Progress line (vertical) */}
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
                height: lineHeight,
                background: 'linear-gradient(180deg, var(--cyan), var(--blue))',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Steps */}
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
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
                  fontSize: '14px',
                  color: 'var(--t2)',
                  lineHeight: 1.75,
                }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
