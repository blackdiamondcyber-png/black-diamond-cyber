'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { VideoBackground } from '@/components/VideoBackground';
import { MagneticButton } from '@/components/MagneticButton';

const HERO_WORDS = ['General Dentists', 'Orthodontists', 'Pediatric Dentists', 'Oral Surgeons', 'Cosmetic Dentists', 'Periodontists'] as const;

const HEADLINE_WORDS = ['Your', 'Patients', 'Are', 'Googling', 'You', 'Right', 'Now.'];
const HEADLINE_LINE2 = ['What', 'Do', 'They', 'Find?'];

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

// Floating geometric shapes for parallax depth
function FloatingShapes({ scrollProgress }: { scrollProgress: ReturnType<typeof useTransform<number, string>> }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
        y: scrollProgress,
      }}
    >
      {/* Diamond shape 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          border: '1px solid rgba(93,196,232,.08)',
          top: '20%',
          left: '15%',
          transform: 'rotate(45deg)',
        }}
      />
      {/* Hexagon shape */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          border: '1px solid rgba(40,135,204,.06)',
          borderRadius: '6px',
          top: '60%',
          right: '12%',
          transform: 'rotate(30deg)',
        }}
      />
      {/* Circle */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          border: '1px solid rgba(93,196,232,.06)',
          borderRadius: '50%',
          top: '35%',
          right: '30%',
        }}
      />
      {/* Diamond shape 2 */}
      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [45, 90, 45],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '24px',
          height: '24px',
          border: '1px solid rgba(40,135,204,.05)',
          top: '75%',
          left: '25%',
          transform: 'rotate(45deg)',
        }}
      />
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouch) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [isTouch]
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.85]);
  const shapesY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
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

      {/* Cursor-reactive gradient orb (desktop only) */}
      {!isTouch && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(93,196,232,.09), rgba(40,135,204,.04) 40%, transparent 70%)',
              left: mousePos.x - 300,
              top: mousePos.y - 300,
              transition: 'left 0.3s ease-out, top 0.3s ease-out',
              filter: 'blur(40px)',
              willChange: 'left, top',
            }}
          />
        </div>
      )}

      {/* Floating geometric shapes (parallax layer) */}
      <FloatingShapes scrollProgress={shapesY} />

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
          className="c hero-content"
          style={{
            padding: '140px 24px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Rotating industries */}
            <motion.div
              variants={fadeUp}
              style={{
                fontSize: 'clamp(13px, 1.4vw, 16px)',
                color: 'var(--t2)',
                marginBottom: '20px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'nowrap',
                overflow: 'hidden',
              }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>Built for</span>
              <span style={{ position: 'relative', minWidth: '200px', display: 'inline-block', overflow: 'hidden', height: '28px', flexShrink: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.em
                    key={HERO_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
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

            {/* Kinetic headline — word-by-word stagger */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: 'clamp(28px, 4.5vw, 62px)',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '20px',
              }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {HEADLINE_LINE2.map((word, i) => (
                <motion.span
                  key={'l2' + word + i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + (HEADLINE_WORDS.length + i) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: 'inline-block',
                    marginRight: '0.25em',
                    ...(i >= 0 ? { color: 'var(--cyan)', fontStyle: 'italic' as const } : {}),
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  display: 'block',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
                  transformOrigin: 'center',
                  marginTop: '4px',
                  maxWidth: '280px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </motion.h1>

            {/* Subheadline with typing cursor */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 'clamp(15px, 1.6vw, 18px)',
                color: 'var(--text)',
                maxWidth: '620px',
                lineHeight: 1.7,
                marginBottom: '12px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                textAlign: 'center',
              }}
            >
              <span>We build AI-powered websites that turn Google searches into booked appointments &mdash; in 7 days, guaranteed. No contracts. You own the code.</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear', repeatType: 'reverse' as const }}
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '18px',
                  background: 'var(--cyan)',
                  marginLeft: '4px',
                  borderRadius: '1px',
                  flexShrink: 0,
                }}
              />
            </motion.p>

            {/* Micro-proof credibility line */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '13px',
                color: 'rgba(222,224,231,.7)',
                marginBottom: '16px',
                letterSpacing: '0.2px',
                textAlign: 'center',
              }}
            >
              <span style={{ color: 'var(--cyan)', marginRight: '6px', fontSize: '10px' }}>&#9670;</span>
              Built by a Patterson Dental insider with 400+ practice accounts.
            </motion.p>

            {/* CTAs — tiered with scale entrance */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px', justifyContent: 'center' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <MagneticButton href="/free-audit" className="bp hero-cta-primary" strength={0.25}>
                  Get Your Free Website Audit
                </MagneticButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <MagneticButton href="#pricing" className="bs hero-cta-secondary" strength={0.2}>
                  See Pricing ↓
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Stats bar — staggered entrance */}
            <motion.div
              className="hero-stats"
              style={{
                display: 'flex',
                gap: '32px',
                paddingTop: '32px',
                borderTop: '1px solid var(--hr)',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {[
                { label: '7-Day Delivery', icon: '⚡' },
                { label: '2x More Bookings', icon: '📈' },
                { label: '100% Code Ownership', icon: '🔓' },
                { label: '$0 Lock-In Contracts', icon: '🛡️' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.5 + i * 0.15,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(40,135,204,.06)',
                    border: '1px solid rgba(93,196,232,.1)',
                    borderRadius: '40px',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{stat.icon}</span>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                  }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Geo subtext — local SEO signal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              style={{
                fontSize: '12px',
                color: 'rgba(222,224,231,.45)',
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.6 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="rgba(222,224,231,.5)"/>
              </svg>
              Serving dental practices in Austin, San Antonio &amp; the Texas Hill Country
            </motion.p>
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
          fontSize: '11px',
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
        @media (max-width: 768px) {
          .hero-content { padding-top: 100px !important; padding-bottom: 60px !important; }
        }
        @media (max-width: 640px) {
          .hero-content { padding-top: 88px !important; }
          .hero-stats { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; justify-items: center !important; }
          .hero-stats > div { font-size: 11px !important; padding: 6px 10px !important; }
          .hero-cta-primary, .hero-cta-secondary {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}} />
    </section>
  );
}
