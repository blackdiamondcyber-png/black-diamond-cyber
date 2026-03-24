'use client';

import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={sectionRef} style={{ scrollMarginTop: '80px' }}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ display: 'inline-flex' }}>Meet the Founder</div>
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
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 32, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '20px' }}>
              I am Erik Pearson. By day, I manage <strong style={{ color: 'var(--text)' }}>400+ dental practice accounts</strong> across Austin and San Antonio as a territory sales rep at <strong style={{ color: 'var(--text)' }}>Patterson Dental</strong> &mdash; the largest dental supply company in the US.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '20px' }}>
              I have walked into hundreds of dental offices. I have seen the websites that bring in new patients, and the ones that silently bleed them to competitors down the street.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '20px' }}>
              After years of watching practices struggle with overpriced agencies, cookie-cutter templates, and websites that load like it is 2005 &mdash; I taught myself to code and built something better.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '32px' }}>
              <strong style={{ color: 'var(--text)' }}>8 production apps later</strong>, Black Diamond Cyber was born. Every site I build is informed by real conversations with real practice owners about what actually drives patients through the door.
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
