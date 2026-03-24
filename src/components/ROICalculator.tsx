'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { MagneticButton } from '@/components/MagneticButton';

const industries = ['Dental', 'HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Med Spa', 'Other'];

interface Results {
  projectedCustomers: number;
  annualRevenueIncrease: number;
  roiMultiple: number;
  paybackMonths: number;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  background: 'var(--bg2)',
  border: '1px solid var(--hr)',
  borderRadius: 'var(--r)',
  color: 'var(--text)',
  fontSize: '15px',
  fontFamily: 'Outfit, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.8px',
  textTransform: 'uppercase',
  color: 'var(--t2)',
  marginBottom: '8px',
};

export function ROICalculator() {
  const [customers, setCustomers] = useState('');
  const [ltv, setLtv] = useState('');
  const [spend, setSpend] = useState('');
  const [industry, setIndustry] = useState('Dental');
  const [results, setResults] = useState<Results | null>(null);

  const calculate = () => {
    const c = parseFloat(customers) || 0;
    const l = parseFloat(ltv) || 0;
    const s = parseFloat(spend) || 1;

    if (c <= 0 || l <= 0) return;

    const projectedCustomers = Math.round(c * 2.5);
    const additionalCustomers = projectedCustomers - c;
    const annualRevenueIncrease = additionalCustomers * l;
    const bdCostAnnual = 2997 + 497 * 12; // Growth plan setup + 12 mo
    const roiMultiple = Math.round((annualRevenueIncrease / bdCostAnnual) * 10) / 10;
    const paybackMonths = Math.max(1, Math.round(bdCostAnnual / (annualRevenueIncrease / 12)));

    setResults({ projectedCustomers, annualRevenueIncrease, roiMultiple, paybackMonths });
  };

  return (
    <section style={{ padding: '100px 0' }}>
      <div className="c">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>
            ROI Calculator
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
            See Your Potential <em>Returns</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--t2)', maxWidth: '520px', margin: '16px auto 0', lineHeight: 1.6 }}>
            Enter your current numbers and see what a high-performance website with growth automation could do for your bottom line.
          </p>
        </div>

        <div
          id="roi-calc-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            maxWidth: '880px',
            margin: '0 auto',
            alignItems: 'start',
          }}
        >
          {/* Input form */}
          <div
            style={{
              padding: '32px',
              background: 'var(--bg1)',
              border: '1px solid var(--hr)',
              borderRadius: 'var(--rr)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Current Monthly Customers</label>
                <input
                  type="number"
                  placeholder="e.g. 40"
                  value={customers}
                  onChange={(e) => setCustomers(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Avg Customer Lifetime Value ($)</label>
                <input
                  type="number"
                  placeholder="e.g. 2500"
                  value={ltv}
                  onChange={(e) => setLtv(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Current Monthly Marketing Spend ($)</label>
                <input
                  type="number"
                  placeholder="e.g. 1500"
                  value={spend}
                  onChange={(e) => setSpend(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  style={{ ...inputStyle, cursor: 'pointer', appearance: 'auto' }}
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={calculate}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: 'var(--blue)',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  borderRadius: '40px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '4px',
                }}
              >
                Calculate ROI
              </button>
            </div>
          </div>

          {/* Results */}
          <div>
            <AnimatePresence mode="wait">
              {results ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {[
                    {
                      label: 'Projected Monthly Customers',
                      value: results.projectedCustomers,
                      suffix: '',
                      prefix: '',
                      color: 'var(--green)',
                    },
                    {
                      label: 'Projected Annual Revenue Increase',
                      value: results.annualRevenueIncrease,
                      suffix: '',
                      prefix: '$',
                      color: 'var(--green)',
                    },
                    {
                      label: 'ROI Multiple',
                      value: results.roiMultiple,
                      suffix: 'x',
                      prefix: '',
                      color: 'var(--cyan)',
                      decimals: 1,
                    },
                    {
                      label: 'Payback Period',
                      value: results.paybackMonths,
                      suffix: ' months',
                      prefix: '',
                      color: 'var(--cyan)',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.12,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      style={{
                        padding: '24px',
                        background: 'var(--bg1)',
                        border: '1px solid var(--hr)',
                        borderRadius: 'var(--rr)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          color: 'var(--t3)',
                          marginBottom: '8px',
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Instrument Serif', serif",
                          fontSize: '32px',
                          color: item.color,
                          lineHeight: 1.1,
                        }}
                      >
                        <AnimatedCounter
                          value={item.value}
                          prefix={item.prefix}
                          suffix={item.suffix}
                          decimals={'decimals' in item ? item.decimals : 0}
                          duration={1.5}
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                    style={{ textAlign: 'center', marginTop: '12px' }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--t2)',
                        marginBottom: '16px',
                        lineHeight: 1.5,
                      }}
                    >
                      Ready to see these results? Book a strategy call.
                    </p>
                    <MagneticButton href="#book" className="bp">
                      Book Free Strategy Call
                    </MagneticButton>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    padding: '60px 32px',
                    background: 'var(--bg1)',
                    border: '1px dashed var(--hr)',
                    borderRadius: 'var(--rr)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(40,135,204,.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--t3)', lineHeight: 1.5 }}>
                    Enter your numbers and click Calculate to see your projected returns.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            #roi-calc-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
