'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Hero3DScene = dynamic(
  () => import('@/components/Hero3DScene').then((mod) => mod.Hero3DScene),
  { ssr: false },
);

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
      {/* 3D Background — rendered client-side only */}
      <Hero3DScene />

      <div
        style={{
          maxWidth: '820px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
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
          AI Growth Systems for Local Businesses
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            lineHeight: 1.02,
            letterSpacing: '-0.05em',
            color: 'var(--text)',
            marginBottom: '20px',
          }}
        >
          Be the First Answer When Customers Search{' '}
          <span style={{ color: 'var(--cyan)' }}>&mdash; On Google and AI.</span>
        </motion.h1>

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
            textAlign: 'center',
          }}
        >
          High-performance websites and AI growth systems for local businesses.
          Built in 7 days. No contracts. You own everything.
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
            { label: '7-Day Build' },
            { label: 'Code Ownership' },
            { label: 'Mobile-First' },
            { label: 'AI Search Optimized' },
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
