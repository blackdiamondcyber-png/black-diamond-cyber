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
    point: 'Template builders give you a generic site that looks like every other business on the block. No SEO strategy, no conversion optimization, no competitive edge. Your competitors who invest in custom sites will outrank you every time.',
    them: ['Cookie-cutter templates', 'DIY = your time wasted', 'Locked into their platform'],
    us: ['Custom-designed for your business', 'Done-for-you in 7 days', '100% code ownership'],
  },
  {
    vs: 'vs. Agencies ($10K+)',
    verdict: 'You Pay 5x for the Same Result',
    point: 'Traditional agencies charge $10K-$30K and take 8-12 weeks. Many outsource to overseas contractors or operate from different time zones. We are US-based in Texas, deliver agency-quality work in days, and you own every line of code.',
    them: ['$10K-$30K setup', '8-12 week timeline', 'Overseas contractors, different timezone'],
    us: ['$997-$4,997 setup', '7-day delivery', 'US-based team, Central Time support'],
  },
  {
    vs: 'vs. Your Nephew\'s Website',
    verdict: 'Cheap Now, Expensive Later',
    point: 'A friend-of-a-friend WordPress site might save money upfront, but it won\'t rank on Google, won\'t convert visitors into patients, and will break the moment you need to update it. You end up paying twice to fix it.',
    them: ['No SEO knowledge', 'Breaks when plugins update', 'No conversion strategy'],
    us: ['Local SEO built in', 'Modern tech, zero plugins', 'Every page designed to convert'],
  },
  {
    vs: 'vs. Doing Nothing',
    verdict: 'Your Competitors Thank You',
    point: 'Every day without a strong online presence, potential patients find your competitors instead. 77% of patients research online before booking. If your site is slow, outdated, or invisible on Google — they are already gone.',
    them: ['Losing patients daily', 'Invisible on Google', 'Competitors grow instead'],
    us: ['Patients find you first', 'Rank for "near me" searches', 'Local Texas market expertise'],
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
        <div className="sh sc" ref={headerRef}>
          <div className="tag" style={{ display: 'inline-flex' }}>Why Black Diamond Cyber</div>
          <h2 className="st">You Have Options.<br /><em>Here is Why We Win.</em></h2>
          <p className="sd">See how we stack up against every alternative &mdash; and why practices choose us.</p>
        </div>

        {/* Villain framing */}
        <div
          ref={villainRef}
          style={{
            maxWidth: '700px',
            margin: '0 auto 40px',
            padding: '24px 32px',
            background: 'rgba(239,68,68,.04)',
            border: '1px solid rgba(239,68,68,.12)',
            borderRadius: 'var(--rr)',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontSize: '15px',
            color: 'var(--t2)',
            lineHeight: 1.8,
            marginBottom: '12px',
          }}>
            Most web agencies have never stepped inside a dental practice. They build beautiful sites that rank for nothing and convert nobody. They charge $10K+, take 8 weeks, and lock you into a contract. Then they disappear.
          </p>
          <p style={{
            fontSize: '16px',
            color: 'var(--text)',
            fontWeight: 600,
          }}>
            We are the opposite — US-based, same timezone, and we know the Texas market.
          </p>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media(max-width:1024px){#why-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media(max-width:640px){#why-grid{grid-template-columns:1fr!important}}
        ` }} />

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
              <p style={{
                fontSize: '14px',
                color: 'var(--t2)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}>
                {c.point}
              </p>

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
