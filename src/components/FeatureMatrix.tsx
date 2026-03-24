'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  { label: 'Setup fee', bd: '$997 – $4,997', agency: '$5,000 – $15,000', diy: '$0 – $200' },
  { label: 'Monthly cost', bd: '$79 – $249/mo', agency: '$500 – $2,000/mo', diy: '$16 – $45/mo' },
  { label: 'Delivery time', bd: '3–7 days', agency: '4–8 weeks', diy: 'DIY (weeks/months)' },
  { label: 'Contracts', bd: 'None — cancel anytime', agency: '6–12 month lock-in', diy: 'Annual billing' },
  { label: 'Code ownership', bd: true, agency: false, diy: false },
  { label: 'Page speed (90+)', bd: true, agency: false, diy: false },
  { label: 'Custom design', bd: true, agency: true, diy: false },
  { label: 'SEO included', bd: true, agency: 'Extra $$', diy: 'Basic only' },
  { label: 'Review automation', bd: true, agency: 'Extra $$', diy: false },
  { label: 'AI Chatbot', bd: true, agency: false, diy: false },
  { label: 'Lead nurture', bd: true, agency: 'Extra $$', diy: false },
  { label: 'Support level', bd: 'Dedicated + Slack', agency: 'Ticket system', diy: 'Forums / AI chat' },
];

const INITIAL_ROWS = 6;

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: 'rgba(52,211,153,.12)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6l2.5 2.5L9.5 4" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: 'rgba(224,90,90,.1)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 3l6 6M9 3l-6 6" stroke="#e05a5a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return <span>{value}</span>;
}

export function FeatureMatrix() {
  const [expanded, setExpanded] = useState(false);
  const visibleFeatures = expanded ? features : features.slice(0, INITIAL_ROWS);

  return (
    <section style={{ padding: '100px 0' }}>
      <div className="c">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>
            Comparison
          </div>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text)',
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            How We <em>Stack Up</em>
          </h2>
        </div>

        {/* Table wrapper */}
        <div
          id="feature-matrix-table"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: 'var(--rr)',
            border: '1px solid var(--hr)',
            overflow: 'hidden',
            background: 'var(--bg1)',
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
              borderBottom: '1px solid var(--hr)',
              background: 'var(--bg2)',
            }}
          >
            <div
              style={{
                padding: '16px 20px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--t3)',
              }}
            >
              Feature
            </div>
            <div
              style={{
                padding: '16px 20px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                textAlign: 'center',
                borderLeft: '2px solid var(--blue)',
              }}
            >
              BD Cyber
            </div>
            <div
              style={{
                padding: '16px 20px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--t3)',
                textAlign: 'center',
              }}
            >
              Typical Agency
            </div>
            <div
              style={{
                padding: '16px 20px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--t3)',
                textAlign: 'center',
              }}
            >
              DIY (Wix/Squarespace)
            </div>
          </div>

          {/* Data rows */}
          <AnimatePresence initial={false}>
            {visibleFeatures.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const, delay: i >= INITIAL_ROWS ? (i - INITIAL_ROWS) * 0.04 : 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
                    borderBottom: '1px solid var(--hr)',
                  }}
                >
                  <div
                    style={{
                      padding: '14px 20px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--text)',
                    }}
                  >
                    {row.label}
                  </div>
                  <div
                    style={{
                      padding: '14px 20px',
                      fontSize: '13px',
                      color: 'var(--green)',
                      fontWeight: 500,
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderLeft: '2px solid var(--blue)',
                      background: 'rgba(40,135,204,.03)',
                    }}
                  >
                    <CellValue value={row.bd} />
                  </div>
                  <div
                    style={{
                      padding: '14px 20px',
                      fontSize: '13px',
                      color: 'var(--t2)',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CellValue value={row.agency} />
                  </div>
                  <div
                    style={{
                      padding: '14px 20px',
                      fontSize: '13px',
                      color: 'var(--t2)',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CellValue value={row.diy} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse toggle */}
        {!expanded && (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button
              onClick={() => setExpanded(true)}
              style={{
                background: 'none',
                border: '1px solid var(--hr)',
                borderRadius: '40px',
                padding: '10px 28px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--cyan)',
                cursor: 'pointer',
                letterSpacing: '0.3px',
                transition: 'border-color 0.2s',
              }}
            >
              See all features +
            </button>
          </div>
        )}

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            #feature-matrix-table > div {
              grid-template-columns: 1.4fr 1fr 1fr 1fr !important;
            }
            #feature-matrix-table {
              font-size: 12px;
            }
          }
          @media (max-width: 540px) {
            #feature-matrix-table > div > div {
              padding: 10px 8px !important;
              font-size: 11px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
