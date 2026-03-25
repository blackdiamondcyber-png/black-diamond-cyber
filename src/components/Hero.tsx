'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INDUSTRIES = [
  'Dental Practices',
  'HVAC Companies',
  'Plumbing Services',
  'Med Spas',
  'Chiropractors',
  'Roofing Companies',
] as const;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '820px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'var(--cyan)',
            marginBottom: '28px',
          }}
        >
          AI-Powered Websites for Local Businesses
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '20px',
          }}
        >
          Your Website Should Book Appointments{' '}
          <span style={{ color: 'var(--cyan)' }}>While You Sleep.</span>
        </motion.h1>

        {/* Rotating industries */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            height: '30px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            color: 'var(--t2)',
          }}
        >
          <span>Built for</span>
          <span
            style={{
              position: 'relative',
              minWidth: '190px',
              height: '30px',
              display: 'inline-flex',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={INDUSTRIES[index]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  color: 'var(--cyan)',
                  fontWeight: 600,
                  position: 'absolute',
                  whiteSpace: 'nowrap',
                }}
              >
                {INDUSTRIES[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'var(--t2)',
            maxWidth: '620px',
            lineHeight: 1.75,
            marginBottom: '40px',
            textAlign: 'left',
            alignSelf: 'flex-start',
          }}
        >
          We build fast, beautiful, AI-powered websites for dental practices,
          HVAC companies, and local service businesses — delivered in 7 days.
          You own the code.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-ctas"
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
            marginBottom: '52px',
          }}
        >
          <a href="/free-audit" className="bp">
            Get Your Free Audit →
          </a>
          <a href="#work" className="bs">
            View Our Work
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="hero-badges"
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            paddingTop: '32px',
            borderTop: '1px solid var(--hr)',
            marginBottom: '28px',
            width: '100%',
          }}
        >
          {[
            { icon: '⚡', label: '7-Day Delivery' },
            { icon: '📱', label: 'Mobile-First' },
            { icon: '🔒', label: '100% Code Ownership' },
            { icon: '⭐', label: '97 PageSpeed' },
          ].map((badge) => (
            <span
              key={badge.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.06)',
                borderRadius: '40px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: 'var(--text)',
              }}
            >
              <span style={{ fontSize: '14px' }}>{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </motion.div>

        {/* Social proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            fontSize: '13px',
            color: 'rgba(222,224,231,.45)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
          }}
        >
          <span>Built by a US-based team</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Canyon Lake, TX</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Patterson Dental insider</span>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--t3)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '24px',
            background: 'linear-gradient(180deg, var(--t3), transparent)',
          }}
        />
      </motion.div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 640px) {
          .hero-ctas a { width: 100%; justify-content: center; text-align: center; }
          .hero-badges { gap: 8px !important; }
          .hero-badges > span { font-size: 11px !important; padding: 6px 10px !important; }
        }
      `,
        }}
      />
    </section>
  );
}
