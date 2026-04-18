'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Engine {
  name: string;
  sub: string;
  color: string;
  initial: string;
}

const ENGINES: Engine[] = [
  { name: 'ChatGPT', sub: 'OpenAI', color: '#10A37F', initial: 'G' },
  { name: 'Perplexity', sub: 'Answer Engine', color: '#20B2AA', initial: 'P' },
  { name: 'Google AI', sub: 'AI Overviews', color: '#4285F4', initial: 'G' },
  { name: 'Bing Copilot', sub: 'Microsoft', color: '#00B4D8', initial: 'B' },
  { name: 'Apple Intelligence', sub: 'Siri + AI', color: '#A2AAAD', initial: 'A' },
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
                {engine.initial}
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
