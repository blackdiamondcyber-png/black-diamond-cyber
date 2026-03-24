'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { VideoBackground } from '@/components/VideoBackground';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { MagneticButton } from '@/components/MagneticButton';
import { ProductDemoReel } from '@/components/ProductDemoReel';

const HERO_WORDS = ['Dental Practices', 'HVAC Companies', 'Plumbers', 'Electricians', 'Roofers', 'Med Spas'] as const;

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const statStyle: React.CSSProperties = {
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontSize: '42px',
  color: 'var(--text)',
  lineHeight: 1,
};

const statLabelStyle: React.CSSProperties = {
  fontSize: '9px',
  fontWeight: 700,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: 'var(--t3)',
  marginTop: '6px',
};

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.85]);
  const reelY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Video / animated gradient background with parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10% 0',
          y: bgY,
          scale: bgScale,
        }}
      >
        <VideoBackground
          src={undefined}
          fallbackGradient="linear-gradient(135deg, #06080C 0%, #0A1828 20%, #0C1420 40%, #12151E 60%, #0A1018 80%, #06080C 100%)"
          overlayOpacity={0}
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Dynamic overlay that darkens on scroll */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--bg)',
          opacity: overlayOpacity,
          zIndex: 1,
        }}
      />

      {/* Ambient glow orbs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(40,135,204,.14), transparent 70%)',
          top: '-20%',
          right: '-15%',
          filter: 'blur(80px)',
          animation: 'heroOrb1 20s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(93,196,232,.09), transparent 70%)',
          bottom: '5%',
          left: '-8%',
          filter: 'blur(60px)',
          animation: 'heroOrb2 16s ease-in-out infinite reverse',
        }} />
        {/* Extra glow behind the demo reel */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(93,196,232,.06), transparent 70%)',
          top: '10%',
          right: '5%',
          filter: 'blur(100px)',
          animation: 'heroOrb1 25s ease-in-out infinite reverse',
        }} />
      </div>

      {/* Content with parallax offset */}
      <motion.div
        style={{ y: contentY, position: 'relative', zIndex: 2, width: '100%' }}
      >
        <div
          className="c"
          style={{
            padding: '140px 24px 80px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* LEFT — headline, CTAs, stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Urgency tag */}
            <motion.div variants={fadeUp} style={{ marginBottom: '28px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'p 2s infinite', marginRight: '4px' }} />
                Now Accepting Founding Clients
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: 'clamp(28px, 4.5vw, 62px)',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '8px',
              }}
            >
              Your Customers Are Choosing
              <br />
              Your Competitors.
              <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>We Fix That.</em>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--cyan), transparent)',
                    transformOrigin: 'left',
                  }}
                />
              </span>
            </motion.h1>

            {/* Rotating industry */}
            <motion.div
              variants={fadeUp}
              style={{
                fontSize: 'clamp(14px, 1.6vw, 20px)',
                color: 'var(--t2)',
                marginBottom: '20px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'nowrap',
                overflow: 'hidden',
              }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>AI-powered websites for</span>
              <span style={{ position: 'relative', minWidth: '180px', display: 'inline-block', overflow: 'hidden', height: '32px', flexShrink: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.em
                    key={HERO_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                    style={{
                      color: 'var(--cyan)',
                      fontStyle: 'italic',
                      display: 'inline-block',
                      position: 'absolute',
                      left: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {HERO_WORDS[wordIndex]}
                  </motion.em>
                </AnimatePresence>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '16px',
                color: 'var(--t2)',
                maxWidth: '480px',
                lineHeight: 1.85,
                marginBottom: '36px',
              }}
            >
              Built by someone who&apos;s worked with <strong style={{ color: 'var(--text)' }}>400+ local businesses</strong>. Premium websites delivered in days, not weeks. AI chatbots, review automation, and lead systems included. No contracts. You own the code.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px' }}
            >
              <MagneticButton href="#book" className="bp hero-cta-primary" strength={0.25}>
                Book Free Strategy Call
              </MagneticButton>
              <MagneticButton href="/free-audit" className="bs hero-cta-secondary" strength={0.2}>
                Run Your Free Site Audit
              </MagneticButton>
            </motion.div>

            {/* Stats bar — honest, verifiable stats only */}
            <motion.div
              variants={fadeUp}
              className="hero-stats"
              style={{
                display: 'flex',
                gap: '40px',
                paddingTop: '32px',
                borderTop: '1px solid var(--hr)',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={statStyle}>
                  <AnimatedCounter value={3} style={statStyle} />
                  <span style={{ color: 'var(--cyan)', fontSize: '28px' }}> days</span>
                </div>
                <div style={statLabelStyle}>Avg. Delivery Time</div>
              </div>
              <div>
                <div style={statStyle}>
                  <AnimatedCounter value={400} style={statStyle} />
                  <span style={{ color: 'var(--cyan)', fontSize: '28px' }}>+</span>
                </div>
                <div style={statLabelStyle}>Businesses Served</div>
              </div>
              <div>
                <div style={statStyle}>
                  $<AnimatedCounter value={0} style={statStyle} />
                </div>
                <div style={statLabelStyle}>Contracts Required</div>
              </div>
              <div>
                <div style={statStyle}>
                  <AnimatedCounter value={95} style={statStyle} />
                  <span style={{ color: 'var(--cyan)', fontSize: '28px' }}>+</span>
                </div>
                <div style={statLabelStyle}>PageSpeed Score</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Product Demo Reel */}
          <motion.div
            style={{ y: reelY }}
            initial={{ opacity: 0, x: 40, filter: 'blur(12px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hero-demo-reel"
          >
            <ProductDemoReel />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--t3)',
        }}>
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.1); }
          66% { transform: translate(30px, -20px) scale(0.95); }
        }
        @keyframes heroOrb2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -40px); }
        }
        @media (max-width: 1024px) {
          .hero-demo-reel {
            display: none !important;
          }
          .c[style*="grid-template-columns"] {
            display: block !important;
          }
        }
        @media (max-width: 640px) {
          .hero-stats { flex-direction: column !important; gap: 20px !important; }
          .hero-cta-primary, .hero-cta-secondary {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}} />
    </section>
  );
}
