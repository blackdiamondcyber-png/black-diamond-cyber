'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export function DentalROICalculator() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [patients, setPatients] = useState(80);
  const [avgValue, setAvgValue] = useState(800);
  const [lostPct, setLostPct] = useState(15);
  const [showResult, setShowResult] = useState(false);

  const monthlyLost = Math.round(patients * (lostPct / 100));
  const annualLoss = monthlyLost * avgValue * 12;

  const handleCalculate = () => {
    setShowResult(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,.03)',
    border: '1px solid var(--hr)',
    borderRadius: '10px',
    color: 'var(--text)',
    fontSize: '16px',
    fontFamily: "'Outfit', sans-serif",
    outline: 'none',
    transition: 'border-color .3s',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 600,
    color: 'var(--t2)',
    marginBottom: '8px',
    display: 'block',
  };

  return (
    <section ref={sectionRef} id="roi-calculator">
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ display: 'inline-flex' }}>
            Revenue Calculator
          </div>
          <h2 className="st">
            What Is a Bad Website <em>Costing Your Practice?</em>
          </h2>
          <p className="sd">
            Most dental practices don&rsquo;t realize how many patients they lose before the phone ever rings. Adjust the numbers below to see your reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: 'var(--rr)',
            padding: '40px 36px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(40,135,204,.05), transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div>
                <label style={labelStyle}>New Patients / Month</label>
                <input
                  type="number"
                  value={patients}
                  onChange={(e) => { setPatients(Number(e.target.value) || 0); setShowResult(false); }}
                  style={inputStyle}
                  min={0}
                  max={500}
                />
              </div>
              <div>
                <label style={labelStyle}>Avg. Patient Lifetime Value</label>
                <input
                  type="number"
                  value={avgValue}
                  onChange={(e) => { setAvgValue(Number(e.target.value) || 0); setShowResult(false); }}
                  style={inputStyle}
                  min={0}
                  max={10000}
                  step={100}
                />
              </div>
              <div>
                <label style={labelStyle}>Est. % Lost to Bad Website</label>
                <input
                  type="number"
                  value={lostPct}
                  onChange={(e) => { setLostPct(Math.min(100, Math.max(0, Number(e.target.value) || 0))); setShowResult(false); }}
                  style={inputStyle}
                  min={0}
                  max={100}
                />
              </div>
            </div>

            {/* Slider for lost % */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--t3)' }}>Conservative (5%)</span>
                <span style={{ fontSize: '12px', color: 'var(--t3)' }}>Aggressive (30%)</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                value={lostPct}
                onChange={(e) => { setLostPct(Number(e.target.value)); setShowResult(false); }}
                style={{
                  width: '100%',
                  accentColor: 'var(--cyan)',
                  height: '4px',
                }}
              />
            </div>

            {/* Calculate button */}
            <button
              onClick={handleCalculate}
              style={{
                width: '100%',
                padding: '16px',
                background: 'var(--blue)',
                color: '#fff',
                border: 'none',
                borderRadius: '40px',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif",
                transition: '.4s',
                marginBottom: '24px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--cyan)';
                e.currentTarget.style.color = 'var(--bg)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(93,196,232,.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--blue)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Calculate My Lost Revenue
            </button>

            {/* Result */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(239,68,68,.06), rgba(239,68,68,.02))',
                    border: '1px solid rgba(239,68,68,.15)',
                    borderRadius: '12px',
                    padding: '28px',
                    textAlign: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#EF4444', marginBottom: '8px' }}>
                    Estimated Annual Revenue Lost
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: 'clamp(36px, 5vw, 56px)',
                      color: 'var(--text)',
                      lineHeight: 1,
                      marginBottom: '12px',
                    }}
                  >
                    ${annualLoss.toLocaleString()}
                  </motion.div>
                  <div style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.7, marginBottom: '16px' }}>
                    That&rsquo;s roughly <strong style={{ color: 'var(--text)' }}>{monthlyLost} patients/month</strong> choosing a competitor because your online presence didn&rsquo;t give them confidence to book.
                  </div>
                  <a
                    href="#book"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 28px',
                      background: 'var(--blue)',
                      color: '#fff',
                      borderRadius: '40px',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: '.4s',
                    }}
                  >
                    Let&rsquo;s Fix This →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Disclaimer */}
            <p style={{ fontSize: '11px', color: 'var(--t3)', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
              This calculator uses your inputs to estimate potential lost revenue. Actual results vary by market, competition, and practice type.
            </p>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        #roi-calculator input[type="number"]:focus {
          border-color: var(--cyan);
        }
        @media(max-width:640px) {
          #roi-calculator .c > div > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
