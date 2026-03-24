'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const comparisons = [
  {
    vs: 'vs. Wix & DIY Builders',
    statDisplay: { prefix: '', value: 6.8, suffix: 's', decimals: 1 },
    statAfter: ' \u2192 1.8s',
    statLabel: 'Page Load Time',
    point: 'Their sites load in 6.8 seconds. Ours load in under 2. Google notices \u2014 and so do your customers.',
  },
  {
    vs: 'vs. Dental Agencies',
    statDisplay: { prefix: '$', value: 0, suffix: '', decimals: 0 },
    statAfter: '',
    statLabel: 'Contracts Required',
    point: 'No 12-month contracts. No $5K setup fees. No 6-week timelines. Cancel anytime, own your website.',
  },
  {
    vs: 'vs. Template Companies',
    statDisplay: { prefix: '', value: 100, suffix: '%', decimals: 0 },
    statAfter: '',
    statLabel: 'Custom Built',
    point: 'Your competitor down the street has the same template. We build every site from scratch \u2014 your brand, your way.',
  },
  {
    vs: 'vs. Doing Nothing',
    statDisplay: { prefix: '', value: 15, suffix: '-30', decimals: 0 },
    statAfter: '',
    statLabel: 'Patients Lost/Month',
    point: 'Every month without a great website costs you 15-30 potential patients. At $800-$2,000 per patient, that adds up fast.',
  },
];

const statNumStyle: React.CSSProperties = {
  fontFamily: "'Instrument Serif', serif",
  fontSize: '36px',
  color: 'var(--text)',
  lineHeight: 1,
};

export function WhyBDCyber() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="why" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ display: 'inline-flex' }}>Why Switch</div>
          <h2 className="st">Why Local Businesses Switch to<br /><em>Black Diamond</em></h2>
          <p className="sd">We compared ourselves to every alternative so you don&apos;t have to.</p>
        </motion.div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media(max-width:1024px){#why-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media(max-width:640px){#why-grid{grid-template-columns:1fr!important}}
        ` }} />

        <div id="why-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '14px',
        }}>
          {comparisons.map((c, i) => (
            <motion.div
              key={c.vs}
              className="svc"
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 32px rgba(93,196,232,.08), inset 0 1px 0 rgba(255,255,255,.03)',
                borderColor: 'rgba(93,196,232,.12)',
              }}
            >
              <div style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                marginBottom: '14px',
              }}>
                {c.vs}
              </div>
              <div style={{ marginBottom: '2px' }}>
                <AnimatedCounter
                  value={c.statDisplay.value}
                  prefix={c.statDisplay.prefix}
                  suffix={c.statDisplay.suffix}
                  decimals={c.statDisplay.decimals}
                  duration={1.5}
                  style={statNumStyle}
                />
                {c.statAfter && (
                  <span style={{ ...statNumStyle, fontSize: '24px', color: 'var(--cyan)' }}>
                    {c.statAfter}
                  </span>
                )}
              </div>
              <div style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--t3)',
                marginBottom: '16px',
              }}>
                {c.statLabel}
              </div>
              <p style={{
                fontSize: '12px',
                color: 'var(--t2)',
                lineHeight: 1.7,
              }}>
                {c.point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
