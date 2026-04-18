'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Engine {
  name: string;
  sub: string;
  color: string;
  icon: React.ReactNode;
}

const ENGINES: Engine[] = [
  {
    name: 'ChatGPT', sub: 'OpenAI', color: '#10A37F',
    icon: (
      <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.212-2.843 10.078 10.078 0 0 0-9.49 6.975 9.967 9.967 0 0 0-6.188 4.83 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.212 2.843 10.078 10.078 0 0 0 9.49-6.976 9.967 9.967 0 0 0 6.188-4.829 10.079 10.079 0 0 0-1.24-11.818zm-17.453 24.588a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.069zm-16.134-6.876a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zm-2.09-17.496a7.47 7.47 0 0 1 3.91-3.293c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L8.589 27.763a7.504 7.504 0 0 1-6.734-10.777zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V21.46z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Perplexity', sub: 'Answer Engine', color: '#20B2AA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M13 2v7.5h5.5L13 2zM11 2L5.5 9.5H11V2zM3 11v10h18V11H3zm6 7v-5h6v5H9z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Google AI', sub: 'AI Overviews', color: '#4285F4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M12 2C12 2 13.8 8.8 20 10.5C13.8 12.2 12 19 12 19C12 19 10.2 12.2 4 10.5C10.2 8.8 12 2 12 2Z" fill="white"/>
        <path d="M19 2C19 2 19.9 5.1 22 6C19.9 6.9 19 10 19 10C19 10 18.1 6.9 16 6C18.1 5.1 19 2 19 2Z" fill="white" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: 'Bing Copilot', sub: 'Microsoft', color: '#00B4D8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M4 4h7v7H4V4z" fill="white"/>
        <path d="M13 4h7v7h-7V4z" fill="white" opacity="0.8"/>
        <path d="M4 13h7v7H4v-7z" fill="white" opacity="0.8"/>
        <path d="M13 13h7v7h-7v-7z" fill="white" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'Apple Intelligence', sub: 'Siri + AI', color: '#555555',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.32 2.99-2.54 4zm-3.1-17.26c.06 2.28-1.67 4.15-3.83 4.08-.27-2.12 1.77-4.15 3.83-4.08z" fill="white"/>
      </svg>
    ),
  },
];

export function AIEra() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="rv"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--bg)',
      }}
    >
      <div className="c" style={{ maxWidth: 1180, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              display: 'block',
              marginBottom: 16,
            }}
          >
            AI Era
          </span>
          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(28px, 3.6vw, 46px)',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: 820,
              margin: '0 auto 14px',
            }}
          >
            Your Website Needs to Show Up Where Customers{' '}
            <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Search Now</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--t2)',
              lineHeight: 1.6,
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            46% of local searches now happen on AI platforms. If your site isn&rsquo;t GEO-optimized,
            you&rsquo;re invisible to the fastest-growing source of new patients.
          </p>
        </motion.div>

        <div
          className="engine-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 16,
            marginBottom: 48,
          }}
        >
          {ENGINES.map((engine, i) => (
            <motion.div
              key={engine.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="engine-card"
              style={
                {
                  position: 'relative',
                  background: 'var(--bg2)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 14,
                  padding: '24px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'default',
                  '--engine-color': engine.color,
                } as React.CSSProperties
              }
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: engine.color,
                  color: '#fff',
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 6px 18px ${engine.color}40`,
                }}
              >
                {engine.icon}
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--text)',
                    marginBottom: 2,
                  }}
                >
                  {engine.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 9,
                    color: 'var(--t3)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {engine.sub}
                </div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 9,
                  letterSpacing: '0.15em',
                  color: 'var(--green)',
                  marginTop: 4,
                }}
              >
                ✓ OPTIMIZED
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="geo-demo"
          style={{
            background: 'var(--bg2)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 18,
            overflow: 'hidden',
          }}
        >
          <div
            className="geo-demo-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
            }}
          >
            <div
              className="geo-demo-query"
              style={{
                padding: '32px 28px',
                borderRight: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 14,
                background: 'rgba(10,13,18,0.4)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: 'var(--t3)',
                  textTransform: 'uppercase',
                }}
              >
                Patient asks ChatGPT
              </div>
              <div
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 'clamp(20px, 2.2vw, 26px)',
                  fontStyle: 'italic',
                  color: 'var(--text)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                }}
              >
                &ldquo;Best dentist near Canyon Lake that accepts new patients?&rdquo;
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  color: 'var(--t3)',
                  marginTop: 4,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--green)',
                    display: 'inline-block',
                  }}
                />
                Live query · 2s ago
              </div>
            </div>

            <div
              className="geo-demo-response"
              style={{
                padding: '28px 28px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: '#10A37F',
                  textTransform: 'uppercase',
                }}
              >
                ChatGPT Response
              </div>
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--t1)',
                }}
              >
                Based on local reviews and availability, I recommend{' '}
                <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>
                  Canyon Lake Family Dentistry
                </span>
                . They&rsquo;re currently accepting new patients, have a 4.9★ rating across 127
                reviews, and offer same-week appointments.
              </div>
              <div
                style={{
                  background: 'rgba(93,196,232,0.06)',
                  border: '1px solid rgba(93,196,232,0.18)',
                  borderRadius: 10,
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--amber)', fontSize: 14 }}>★</span>
                  <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>
                    Canyon Lake Family Dentistry
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--t3)' }}>4.9 · 127 reviews</span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    color: 'var(--cyan)',
                  }}
                >
                  BDC CLIENT
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  color: 'var(--green)',
                  letterSpacing: '0.15em',
                  marginTop: 2,
                }}
              >
                ✓ GEO OPTIMIZED · 0.3s response
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .engine-card:hover {
            transform: translateY(-4px);
            border-color: var(--engine-color) !important;
            box-shadow: 0 -2px 0 0 var(--engine-color) inset, 0 10px 30px rgba(0,0,0,0.35);
          }
          @media (max-width: 900px) {
            .engine-grid { grid-template-columns: repeat(3, 1fr) !important; }
            .geo-demo-grid { grid-template-columns: 1fr !important; }
            .geo-demo-query { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
          }
          @media (max-width: 560px) {
            .engine-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `,
        }}
      />
    </section>
  );
}
