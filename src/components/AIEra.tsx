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
    // ChatGPT — OpenAI official logo (Simple Icons verified path)
    name: 'ChatGPT', sub: 'OpenAI', color: '#10A37F',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
      </svg>
    ),
  },
  {
    // Perplexity — official logo (Simple Icons verified path)
    name: 'Perplexity', sub: 'Answer Engine', color: '#1FB8CD',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/>
      </svg>
    ),
  },
  {
    // Google Gemini — official 4-pointed star (Simple Icons verified path)
    name: 'Google AI', sub: 'AI Overviews', color: '#4285F4',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
      </svg>
    ),
  },
  {
    // Microsoft Copilot — stylized C with colorful segments (official brand mark)
    name: 'Bing Copilot', sub: 'Microsoft', color: '#0067B8',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" fill="white" opacity="0.3"/>
        <path d="M17.5 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-2 0a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z" fill="white" opacity="0.6"/>
        <path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" fill="white"/>
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
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
