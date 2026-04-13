'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  {
    vs: 'vs. Wix / Squarespace',
    verdict: 'You Look Like Everyone Else',
    them: ['Cookie-cutter templates', 'DIY = your time wasted', 'Locked into their platform'],
    us: ['Custom-designed for your business', 'Done-for-you in 7 days', '100% code ownership'],
  },
  {
    vs: 'vs. Agencies ($10K+)',
    verdict: 'You Pay 5x for the Same Result',
    them: ['$10K-$30K setup', '8-12 week timeline', 'Overseas contractors'],
    us: ['Fraction of the cost', '7-day delivery', 'US-based, Central Time'],
  },
  {
    vs: 'vs. DIY / WordPress',
    verdict: 'Cheap Now, Expensive Later',
    them: ['No SEO knowledge', 'Breaks when plugins update', 'No conversion strategy'],
    us: ['Local SEO built in', 'Modern stack, zero plugins', 'Every page designed to convert'],
  },
  {
    vs: 'vs. Doing Nothing',
    verdict: 'Your Competitors Thank You',
    them: ['Losing customers daily', 'Invisible on Google + AI', 'Competitors grow instead'],
    us: ['Customers find you first', 'Rank on Google + AI search', 'Visibility compounds monthly'],
  },
];

export function WhyBDCyber() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const villainRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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

      if (villainRef.current) {
        gsap.from(villainRef.current, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: villainRef.current,
            start: 'top 85%',
            once: true,
          },
        });
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.why-card');
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          filter: 'blur(6px)',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="why" ref={sectionRef}>
      <div className="c">
        <div className="sh sc" ref={headerRef} data-gsap-reveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--t2)' }}>3</span>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text)' }}>Why Black Diamond</span>
          </div>
          <h2 className="st">You have options. <em>Here is why we win.</em></h2>
        </div>

        {/* Removed villain framing for density */}



        <div ref={gridRef} id="why-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          {comparisons.map((c) => (
            <motion.div
              key={c.vs}
              className="svc why-card"
              whileHover={{
                y: -6,
                boxShadow: '0 12px 40px rgba(93,196,232,.1), inset 0 1px 0 rgba(255,255,255,.04)',
                borderColor: 'rgba(93,196,232,.15)',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                marginBottom: '8px',
              }}>
                {c.vs}
              </div>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '22px',
                color: 'var(--text)',
                fontWeight: 400,
                marginBottom: '10px',
                lineHeight: 1.2,
              }}>
                {c.verdict}
              </h3>
              {/* Comparison list */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: '8px' }}>Them</div>
                  {c.them.map((t) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '13px', color: 'var(--t2)', marginBottom: '6px', lineHeight: 1.5 }}>
                      <span style={{ color: '#EF4444', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✗</span>
                      {t}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: '8px' }}>Us</div>
                  {c.us.map((u) => (
                    <div key={u} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '13px', color: 'var(--text)', marginBottom: '6px', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--green)', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
