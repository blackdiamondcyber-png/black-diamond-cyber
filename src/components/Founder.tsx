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
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--t2)' }}>4</span>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text)' }}>About Us</span>
          </div>
          <h2 className="st">
            Built by Someone Who Actually<br /><em>Knows Your Industry.</em>
          </h2>
        </motion.div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media(max-width:768px){
            #founder-grid{grid-template-columns:1fr!important;text-align:center}
            #founder-photo{margin:0 auto}
            #founder-stats{justify-content:center!important}
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
            initial={{ opacity: 0, x: -32, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
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
            initial={{ opacity: 0, x: 32, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '20px' }}>
              I manage <strong style={{ color: 'var(--text)' }}>400+ dental practice accounts</strong> at <strong style={{ color: 'var(--text)' }}>Patterson Dental</strong> across Austin and San Antonio. I&apos;ve walked into hundreds of offices and seen what actually drives customers through the door.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '32px' }}>
              After years of watching businesses struggle with overpriced agencies and zero AI search visibility, I built Black Diamond Cyber to fix it.
            </p>

            {/* Stats row with animated counters */}
            <div id="founder-stats" style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}>
              {[
                { num: 400, suffix: '+', label: 'Dental Accounts' },
                { num: 8, suffix: '', label: 'Apps Shipped' },
                { num: 7, suffix: '-Day', label: 'Avg Delivery' },
              ].map((stat, i) => (
                <motion.span
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    padding: '8px 18px',
                    background: 'rgba(40,135,204,.06)',
                    border: '1px solid rgba(93,196,232,.1)',
                    borderRadius: '40px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <AnimatedCounter value={stat.num} duration={2} suffix={stat.suffix} /> {stat.label}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: '8px 18px',
                  background: 'rgba(40,135,204,.06)',
                  border: '1px solid rgba(93,196,232,.1)',
                  borderRadius: '40px',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  color: 'var(--text)',
                  whiteSpace: 'nowrap',
                }}
              >
                Zero Long-Term Contracts
              </motion.span>
            </div>

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
