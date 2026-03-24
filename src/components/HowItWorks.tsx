'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const STEPS = [
  {
    title: 'Free Website Audit',
    description:
      'We audit your current online presence: website speed, mobile experience, Google rankings, and how you compare to every competitor within 10 miles. You get the report whether you hire us or not.',
    detail: 'Takes 30 seconds to start. Results in 24 hours.',
  },
  {
    title: 'Custom Proposal',
    description:
      'Based on your audit, we build a custom proposal showing exactly what your new site will look like, what it will cost, and how it will outperform your current setup. No generic decks — this is built for your business.',
    detail: 'You see the plan before you spend a dollar.',
  },
  {
    title: 'AI-Powered Build',
    description:
      'We generate your site with AI, then hand-polish every detail. Industry-specific copy that speaks to patients, not dentists. Online booking, click-to-call, insurance info — all built in and conversion-optimized.',
    detail: 'Every page is designed to turn a visitor into a booked appointment.',
  },
  {
    title: 'Launch & Grow',
    description:
      'Domain connected, deployed on a global CDN, Google Analytics installed, schema markup live. You are ranking within 7 days. Then we optimize for 90 more — tracking new patient inquiries, not vanity metrics.',
    detail: 'Your business shows up when customers search "near me."',
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
            Audit. Proposal. Build. <em>Launch.</em>
          </h2>
          <p className="sd">
            Four steps. Your website is live in as little as 7 business days.
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
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
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
