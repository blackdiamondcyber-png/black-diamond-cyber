'use client';

import { motion } from 'framer-motion';
import { Hero3DScene } from '@/components/Hero3DScene';

export function Hero() {
  return (
    <section
      suppressHydrationWarning
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Hero3DScene />

      <div
        style={{
          maxWidth: '900px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Headline — dominant, LeftClick scale */}
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(3.2rem, 7vw, 7rem)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.05em',
            color: 'var(--text)',
            marginBottom: '32px',
          }}
        >
          The AI growth partner for{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, var(--cyan), var(--ice))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            local businesses.
          </span>
        </motion.h1>

        {/* Problem-framing subtext */}
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: '19px',
            color: 'var(--t2)',
            marginBottom: '40px',
            lineHeight: 1.7,
            maxWidth: '520px',
          }}
        >
          Websites, AI search optimization, and automation systems — built in 7 days, no contracts.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#book" className="bp" style={{ fontSize: '14px' }}>
            Book a Free Strategy Call
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
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
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: '1px',
            height: '24px',
            background:
              'linear-gradient(180deg, var(--t3), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
