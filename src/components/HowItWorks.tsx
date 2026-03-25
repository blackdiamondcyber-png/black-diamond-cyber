'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

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
  const headerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header reveal
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 40,
          filter: 'blur(6px)',
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
          },
        });
      }

      // Progress line — scrubbed on scroll
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        });
      }

      // Step cards stagger
      if (stepsContainerRef.current) {
        const steps = stepsContainerRef.current.querySelectorAll('.hiw-step');
        gsap.from(steps, {
          opacity: 0,
          x: -30,
          filter: 'blur(4px)',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 75%',
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="process" ref={sectionRef}>
      <div className="c">
        <div className="sh sc" ref={headerRef} data-gsap-reveal>
          <div className="tag" style={{ display: 'inline-flex' }}>
            How It Works
          </div>
          <h2 className="st">
            Audit. Proposal. Build. <em>Launch.</em>
          </h2>
          <p className="sd">
            Four steps. Your website is live in as little as 7 business days.
          </p>
        </div>

        <div ref={stepsContainerRef} style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
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
            <div
              ref={progressRef}
              style={{
                width: '100%',
                height: '0%',
                background: 'linear-gradient(180deg, var(--cyan), var(--blue))',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Steps */}
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="hiw-step"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
