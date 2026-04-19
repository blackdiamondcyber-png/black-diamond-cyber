'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="c" style={{ maxWidth: '700px' }}>
        <div
          style={{
            padding: '48px 40px',
            background: 'var(--bg1)',
            border: '1px solid var(--hr-b)',
            borderRadius: 'var(--rr)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Accent line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
            }}
          />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(93,196,232,.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>

                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 'clamp(24px, 4vw, 32px)',
                    color: 'var(--text)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: '12px',
                  }}
                >
                  Free Download: The Local Business<br />
                  <em>Digital Marketing Playbook</em>
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--t2)',
                    maxWidth: '440px',
                    margin: '0 auto 28px',
                    lineHeight: 1.6,
                  }}
                >
                  10 strategies to get more leads, reviews, and revenue — without ads.
                </p>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    maxWidth: '420px',
                    margin: '0 auto',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      padding: '14px 18px',
                      background: 'var(--bg2)',
                      border: '1px solid var(--hr)',
                      borderRadius: '40px',
                      color: 'var(--text)',
                      fontSize: '14px',
                      fontFamily: 'Outfit, sans-serif',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '14px 24px',
                      background: 'var(--cyan)',
                      color: 'var(--bg)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      borderRadius: '40px',
                      border: 'none',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Get Free Guide
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(52,211,153,.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: '28px',
                    color: 'var(--text)',
                    fontWeight: 400,
                    marginBottom: '12px',
                  }}
                >
                  Check Your Inbox
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.6 }}>
                  Your playbook is on its way. Check your email for the download link.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
