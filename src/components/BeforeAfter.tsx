'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function ScoreCircle({ score, color, delay }: { score: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hydrated, setHydrated] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let frame = 0;
      const totalFrames = 60;
      const interval = setInterval(() => {
        frame++;
        setCount(Math.round((frame / totalFrames) * score));
        if (frame >= totalFrames) clearInterval(interval);
      }, 16);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, score, delay]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  // Before hydration, show the final score so there's no 0/100 flash
  const displayCount = hydrated ? count : score;
  const displayProgress = hydrated
    ? (isInView ? (count / 100) * circumference : 0)
    : (score / 100) * circumference;

  return (
    <div ref={ref} style={{ position: 'relative', width: '130px', height: '130px', flexShrink: 0 }}>
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle
          cx="65"
          cy="65"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="8"
        />
        <circle
          cx="65"
          cy="65"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - displayProgress}
          transform="rotate(-90 65 65)"
          style={{ transition: hydrated ? 'stroke-dashoffset 0.05s linear' : 'none' }}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '36px', fontWeight: 700, color, lineHeight: 1 }}>{displayCount}</span>
        <span style={{ fontSize: '11px', color: 'rgba(222,224,231,.5)', marginTop: '2px' }}>/100</span>
      </div>
      <noscript>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg)',
          borderRadius: '50%',
        }}>
          <span style={{ fontSize: '36px', fontWeight: 700, color, lineHeight: 1 }}>{score}</span>
          <span style={{ fontSize: '11px', color: 'rgba(222,224,231,.5)', marginTop: '2px' }}>/100</span>
        </div>
      </noscript>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function BeforeAfter() {
  const beforeItems = [
    'Load Time: 8.2s',
    'Mobile Score: 34/100',
    'Missing SSL certificate',
    'No online booking',
    'Template design (looks like every competitor)',
    'Zero local SEO optimization',
  ];

  const afterItems = [
    'Load Time: 0.8s',
    'Mobile Score: 97/100',
    'SSL + HIPAA-compliant forms',
    '24/7 online booking integration',
    'Custom AI-powered design',
    'Full local SEO + Google Maps optimization',
  ];

  return (
    <section
      style={{
        padding: '100px 24px',
        position: 'relative',
      }}
    >
      <div className="c" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            The Difference
          </span>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.15,
            }}
          >
            What We Fix in <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>7 Days</em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          className="ba-grid"
          style={{
            display: 'grid',
            gap: '32px',
          }}
        >
          {/* BEFORE card */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              background: 'rgba(255,255,255,.02)',
              border: '1px solid rgba(239,68,68,.2)',
              borderRadius: '16px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '28px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#ef4444',
                padding: '6px 16px',
                background: 'rgba(239,68,68,.08)',
                borderRadius: '20px',
                border: '1px solid rgba(239,68,68,.15)',
              }}
            >
              Before — Typical Dental Site
            </span>
            <ScoreCircle score={34} color="#ef4444" delay={0.2} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
              {beforeItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,.04)',
                    fontSize: '14px',
                    color: 'rgba(222,224,231,.7)',
                  }}
                >
                  <span style={{ color: '#ef4444', fontSize: '14px', flexShrink: 0 }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(222,224,231,.4)',
                textAlign: 'center',
                fontStyle: 'italic',
                marginTop: '4px',
              }}
            >
              Based on industry averages — not actual BDC client data
            </p>
          </motion.div>

          {/* AFTER card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              background: 'rgba(52,211,153,.02)',
              border: '1px solid rgba(52,211,153,.2)',
              borderRadius: '16px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '28px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#34d399',
                padding: '6px 16px',
                background: 'rgba(52,211,153,.08)',
                borderRadius: '20px',
                border: '1px solid rgba(52,211,153,.15)',
              }}
            >
              After — BDC Build
            </span>
            <ScoreCircle score={97} color="#34d399" delay={0.5} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
              {afterItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,.04)',
                    fontSize: '14px',
                    color: 'rgba(222,224,231,.85)',
                  }}
                >
                  <span style={{ color: '#34d399', fontSize: '14px', flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(222,224,231,.4)',
                textAlign: 'center',
                fontStyle: 'italic',
                marginTop: '4px',
              }}
            >
              What a BDC-built site targets
            </p>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            textAlign: 'center',
            fontSize: '13px',
            color: 'rgba(222,224,231,.4)',
            marginTop: '36px',
          }}
        >
          Scores represent industry averages from our analysis of dental practice websites — not actual BDC client results.
        </motion.p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ba-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .ba-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
}
