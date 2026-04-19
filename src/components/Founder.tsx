'use client';

import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  return (
    <section id="about" ref={sectionRef} style={{ scrollMarginTop: '80px' }}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 1, y: 0, /* no blur */ }}
          animate={isInView ? { opacity: 1, y: 0, /* no blur */ } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--t2)' }}>5</span>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text)' }}>About Us</span>
          </div>
          <h2 className="st">
            Built by Someone Who Actually{' '}<br /><em>Knows Your Industry.</em>
          </h2>
        </motion.div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media(max-width:768px){
            #founder-grid{grid-template-columns:1fr!important;text-align:left}
            #founder-photo{margin:0 auto}
            #founder-stats{grid-template-columns:repeat(2,1fr)!important;gap:16px!important}
          }
        ` }} />

        <div id="founder-grid" style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: '48px',
          alignItems: 'start',
          marginTop: '16px',
        }}>
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 1, x: 0, /* no blur */ }}
            animate={isInView ? { opacity: 1, x: 0, /* no blur */ } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div id="founder-photo" style={{
              width: '300px',
              height: '400px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 48px rgba(40,135,204,.2)',
              border: '2px solid rgba(93,196,232,.15)',
              position: 'relative',
            }}>
              <Image
                src="/images/erik-pearson-founder.png"
                alt="Erik Pearson - Founder of Black Diamond Cyber"
                width={300}
                height={400}
                style={{ objectFit: 'cover', objectPosition: 'center 15%', width: '100%', height: '100%' }}
                priority
              />
              {/* Frosted glass founder tag */}
              <div style={{
                position: 'absolute',
                left: 16,
                right: 16,
                bottom: 16,
                background: 'rgba(6, 8, 12, 0.82)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 10,
                padding: '12px 14px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <b style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                    Erik Pearson
                  </b>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--t2)', letterSpacing: '0.18em' }}>
                    FOUNDER
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontSize: 11, color: 'var(--t2)' }}>Black Diamond Cyber</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--cyan)', letterSpacing: '0.1em' }}>
                    Canyon Lake, TX
                  </span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '24px',
                color: 'var(--text)',
                fontWeight: 400,
              }}>Erik Pearson</div>
              <div style={{
                fontSize: '13px',
                color: 'var(--cyan)',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}>Founder &amp; Developer</div>
              <a
                href="https://www.linkedin.com/in/erik-pearson-a1a2b2206/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  color: 'var(--cyan)',
                  marginTop: '6px',
                  opacity: 0.8,
                  transition: 'opacity .3s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8'; }}
              >
                Verify on LinkedIn
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 1, x: 0, /* no blur */ }}
            animate={isInView ? { opacity: 1, x: 0, /* no blur */ } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '20px' }}>
              I manage <strong style={{ color: 'var(--text)' }}>400+ business accounts</strong> across Austin and San Antonio — and I&apos;ve built 8 production apps used by field reps daily. I&apos;ve walked into hundreds of offices and seen what actually drives customers through the door.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '32px' }}>
              After years of watching businesses struggle with overpriced agencies and zero AI search visibility, I built Black Diamond Cyber to fix it.
            </p>

            {/* Work history timeline */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginTop: 4,
                paddingTop: 28,
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  color: 'var(--t3)',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                Experience
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                {[
                  {
                    year: '2026\u2013Now',
                    role: 'Black Diamond Cybersecurity Consulting LLC',
                    title: 'Founder & Developer',
                    desc: 'Building AI-powered websites for local service businesses across Texas and nationwide.',
                    current: true,
                  },
                  {
                    year: '2019\u2013Now',
                    role: 'Patterson Dental',
                    title: 'Territory Sales Rep \u2014 Austin / San Antonio',
                    desc: 'Managed 400+ business accounts across Texas. Shipped 8 production web apps used by field reps daily.',
                    current: false,
                  },
                  {
                    year: '2024',
                    role: 'Self-Taught Developer',
                    title: 'Shipped 8 Production Apps',
                    desc: 'Prospector LIVE, RootCRM, PracticePulse, SMCC, and 4 more \u2014 all in active use.',
                    current: false,
                  },
                ].map(({ year, role, title, desc, current }) => (
                  <li
                    key={year}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '110px 1fr',
                      gap: 20,
                      alignItems: 'baseline',
                      position: 'relative',
                      paddingLeft: 16,
                      borderLeft: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: -4,
                        top: 7,
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: current ? 'var(--cyan)' : 'var(--t3)',
                        boxShadow: current ? '0 0 0 3px rgba(93,196,232,0.2)' : 'none',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        color: 'var(--t3)',
                        letterSpacing: '0.08em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {year}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <b
                        style={{
                          fontFamily: "'Instrument Serif', serif",
                          fontSize: 17,
                          fontWeight: 500,
                          color: 'var(--text)',
                          letterSpacing: '-0.005em',
                        }}
                      >
                        {role}
                      </b>
                      <em style={{ fontStyle: 'normal', fontSize: 13, color: 'var(--cyan)' }}>
                        {title}
                      </em>
                      <span style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.45 }}>
                        {desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Credibility bar — 4 columns */}
            <motion.div
              id="founder-stats"
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 20,
                marginTop: 40,
                marginBottom: 32,
                paddingTop: 32,
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {[
                { value: <AnimatedCounter value={8} duration={2} suffix="" />, label: 'Apps Shipped' },
                { value: '400+', label: 'Accounts Managed' },
                { value: 'Canyon Lake', label: 'Texas \u2014 Local' },
                { value: '7-Day', label: 'Delivery Guarantee' },
              ].map(({ value, label }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <b
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: 'clamp(18px, 2vw, 26px)',
                      fontWeight: 400,
                      color: 'var(--text)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {value}
                  </b>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      color: 'var(--t3)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <a href="#book" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              background: 'var(--blue)',
              color: '#fff',
              borderRadius: '40px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform .2s, box-shadow .2s',
            }}>
              <span style={{ color: 'var(--green)', fontSize: '10px' }}>●</span>
              Book a Free Call with Erik →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
