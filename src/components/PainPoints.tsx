'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface PainPoint {
  stat: string;
  headline: string;
  body: string;
  art: ReactNode;
}

function AIInvisibleArt() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        fontFamily: 'var(--mono)',
        fontSize: 10,
      }}
    >
      <div
        style={{
          background: 'rgba(16,163,127,0.08)',
          border: '1px solid rgba(16,163,127,0.25)',
          borderRadius: 10,
          padding: '10px 12px',
          color: 'var(--text)',
        }}
      >
        <div style={{ color: '#10A37F', fontSize: 9, letterSpacing: '0.15em', marginBottom: 4 }}>
          CHATGPT
        </div>
        <div style={{ fontSize: 11, lineHeight: 1.4 }}>
          <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>1. Canyon Lake Dental</span>
          <br />
          <span style={{ color: 'var(--t3)', fontSize: 9 }}>4.9★ · 127 reviews</span>
        </div>
      </div>
      <div
        style={{
          border: '1px dashed rgba(239,68,68,0.35)',
          borderRadius: 10,
          padding: '12px',
          background: 'rgba(239,68,68,0.03)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ color: '#EF4444', fontSize: 14 }}>✗</span>
        <span style={{ color: 'var(--t3)', fontSize: 10 }}>Your Business — Not Found</span>
      </div>
    </div>
  );
}

function SpeedGaugeArt() {
  const Gauge = ({ value, color, label }: { value: number; color: string; label: string }) => {
    const angle = Math.min(180, (value / 100) * 180);
    const rad = ((180 - angle) * Math.PI) / 180;
    const x = 50 + 40 * Math.cos(rad);
    const y = 50 - 40 * Math.sin(rad);
    const largeArc = angle > 180 ? 1 : 0;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <svg viewBox="0 0 100 60" width="100%" style={{ maxWidth: 120 }}>
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d={`M 10 50 A 40 40 0 ${largeArc} 1 ${x} ${y}`}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color,
            marginTop: 2,
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      </div>
    );
  };
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Gauge value={25} color="#EF4444" label="Wix · 6.8s" />
      <Gauge value={92} color="var(--green)" label="BDC · 0.8s" />
    </div>
  );
}

function MissedCallsArt() {
  return (
    <div
      style={{
        background: 'var(--bg2)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 18,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      {[
        { time: '9:47 PM', num: '(210) 555-0142' },
        { time: '11:23 PM', num: '(512) 555-0088' },
        { time: '6:12 AM', num: '(830) 555-0219' },
      ].map((call) => (
        <div
          key={call.time}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '6px 8px',
            borderRadius: 6,
            background: 'rgba(239,68,68,0.04)',
            border: '1px solid rgba(239,68,68,0.1)',
            fontFamily: 'var(--mono)',
            fontSize: 9,
          }}
        >
          <span style={{ color: '#EF4444' }}>✗ Missed</span>
          <span style={{ color: 'var(--t2)' }}>{call.num}</span>
          <span style={{ color: 'var(--t3)' }}>{call.time}</span>
        </div>
      ))}
      <div
        style={{
          marginTop: 4,
          paddingTop: 8,
          borderTop: '1px solid rgba(255,255,255,0.04)',
          fontFamily: 'var(--mono)',
          fontSize: 9,
          letterSpacing: '0.15em',
          color: '#EF4444',
          textAlign: 'center',
        }}
      >
        NO TEXT-BACK SENT
      </div>
    </div>
  );
}

function AdSpendArt() {
  const Bar = ({ label, cost, width, color }: { label: string; cost: string; width: number; color: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--mono)',
          fontSize: 9,
          color: 'var(--t2)',
        }}
      >
        <span>{label}</span>
        <span style={{ color }}>{cost}</span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: 'rgba(255,255,255,0.04)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${width}%`,
            height: '100%',
            background: color,
            borderRadius: 3,
          }}
        />
      </div>
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Bar label="HomeAdvisor" cost="$150/lead" width={85} color="#EF4444" />
      <Bar label="Angi" cost="$90/lead" width={60} color="var(--amber)" />
      <Bar label="BDC Organic" cost="$0 — yours" width={20} color="var(--cyan)" />
    </div>
  );
}

const PAIN_POINTS: PainPoint[] = [
  {
    stat: '46%',
    headline: 'Your competitors show up in AI search. You don\u2019t.',
    body: 'When a patient asks ChatGPT "best dentist near me," your practice isn\u2019t in the answer. Your competitor down the street is. We fix that.',
    art: <AIInvisibleArt />,
  },
  {
    stat: '6.8s',
    headline: 'Your Wix site loads in 6 seconds. Patients leave in 3.',
    body: 'Google penalizes slow sites. Patients bounce from them. Every second of load time costs you rankings and revenue.',
    art: <SpeedGaugeArt />,
  },
  {
    stat: '$1,400',
    headline: 'Every missed call is a $1,400 patient walking to your competitor.',
    body: '67% of HVAC and dental calls happen outside business hours. Without automated text-back, those leads are gone forever.',
    art: <MissedCallsArt />,
  },
  {
    stat: '$150',
    headline: 'You\u2019re paying $150 per lead to HomeAdvisor. Stop renting.',
    body: 'Paid lead platforms own your pipeline. The moment you stop paying, the leads stop. Organic search is yours forever.',
    art: <AdSpendArt />,
  },
];

export function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="rv"
      style={{
        padding: '100px 24px',
        position: 'relative',
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
            The Problem
          </span>
          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(28px, 3.6vw, 46px)',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: 760,
              margin: '0 auto',
            }}
          >
            Four Silent Reasons Your Website Is{' '}
            <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Bleeding Patients</em>
          </h2>
        </motion.div>

        <div
          className="pain-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            borderLeft: '1px solid rgba(255,255,255,0.04)',
            borderRadius: 16,
            overflow: 'hidden',
          }}
        >
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.stat}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pain-cell"
              style={{
                borderRight: '1px solid rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                display: 'grid',
                gridTemplateColumns: '1fr clamp(160px, 18vw, 220px)',
                gap: 28,
                padding: '36px 32px',
                minHeight: 340,
                background: 'var(--bg)',
                transition: 'background 0.3s ease',
              }}
              whileHover={{ backgroundColor: 'rgba(12,15,22,0.8)' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 'clamp(40px, 4.5vw, 56px)',
                    fontWeight: 400,
                    color: 'var(--cyan)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: 16,
                  }}
                >
                  {point.stat}
                </div>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                    fontStyle: 'italic',
                    marginBottom: 12,
                  }}
                >
                  {point.headline}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--t2)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {point.body}
                </p>
              </div>
              <div
                className="pain-art"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {point.art}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .pain-grid { grid-template-columns: 1fr !important; }
            .pain-cell { grid-template-columns: 1fr !important; padding: 28px 22px !important; min-height: auto !important; }
            .pain-art { display: none !important; }
          }
        `,
        }}
      />
    </section>
  );
}
