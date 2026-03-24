'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';
import { HeroBrowserMockup } from '@/components/HeroBrowserMockup';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ThreeHeroBackground = dynamic(
  () => import('@/components/ThreeHeroBackground').then((m) => ({ default: m.ThreeHeroBackground })),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, #06080C 0%, #0A1828 20%, #0C1420 40%, #12151E 60%, #0A1018 80%, #06080C 100%)',
        }}
      />
    ),
  }
);

const HERO_WORDS = ['General Dentists', 'HVAC Companies', 'Plumbing Services', 'Med Spas', 'Orthodontists', 'Chiropractors'] as const;

const HEADLINE_WORDS = ['Your', 'Patients', 'Are', 'Googling', 'You', 'Right', 'Now.'];
const HEADLINE_LINE2 = ['What', 'Do', 'They', 'Find?'];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
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

  // GSAP headline animation
  useGSAP(
    () => {
      if (!headlineRef.current) return;
      const words = headlineRef.current.querySelectorAll('.hero-word');
      gsap.from(words, {
        opacity: 0,
        y: 40,
        filter: 'blur(8px)',
        duration: 0.8,
        stagger: 0.07,
        delay: 0.3,
        ease: 'power4.out',
      });
    },
    { scope: sectionRef }
  );

  // GSAP stats stagger
  useGSAP(
    () => {
      if (!statsRef.current) return;
      const items = statsRef.current.querySelectorAll('.hero-stat');
      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        delay: 1.4,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef }
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.45, 0.85]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {/* Three.js particle background */}
      <ThreeHeroBackground />

      {/* Dark overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(6,8,12,.4) 0%, rgba(6,8,12,.7) 60%, var(--bg) 100%)',
          zIndex: 1,
        }}
      />

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
            zIndex: 2,
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
      </div>

      {/* Content with parallax offset */}
      <motion.div
        style={{ y: contentY, position: 'relative', zIndex: 3, width: '100%' }}
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Rotating industries */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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

            {/* Kinetic headline — GSAP word-by-word stagger */}
            <h1
              ref={headlineRef}
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
                <span
                  key={word + i}
                  className="hero-word"
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </span>
              ))}
              <br />
              {HEADLINE_LINE2.map((word, i) => (
                <span
                  key={'l2' + word + i}
                  className="hero-word"
                  style={{
                    display: 'inline-block',
                    marginRight: '0.25em',
                    color: 'var(--cyan)',
                    fontStyle: 'italic',
                  }}
                >
                  {word}
                </span>
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
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px', justifyContent: 'center' }}
            >
              <MagneticButton href="/free-audit" className="bp hero-cta-primary" strength={0.25}>
                Get Your Free Website Audit
              </MagneticButton>
              <MagneticButton href="#pricing" className="bs hero-cta-secondary" strength={0.2}>
                See Pricing ↓
              </MagneticButton>
            </motion.div>

            {/* Stats bar — GSAP staggered entrance */}
            <div
              ref={statsRef}
              className="hero-stats"
              style={{
                display: 'flex',
                gap: '12px',
                paddingTop: '32px',
                borderTop: '1px solid var(--hr)',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {[
                { label: '7-Day Delivery', icon: '⚡' },
                { label: '2x More Bookings', icon: '📈' },
                { label: '100% Code Ownership', icon: '🔓' },
                { label: '$0 Lock-In Contracts', icon: '🛡️' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="hero-stat"
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
                </div>
              ))}
            </div>

            {/* Browser mockup — visual proof */}
            <HeroBrowserMockup />

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
              <span style={{ fontSize: '13px', flexShrink: 0 }}>🇺🇸</span>
              US-Based · Texas · Canyon Lake
              <span style={{ opacity: 0.3, margin: '0 4px' }}>|</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.6 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="rgba(222,224,231,.5)"/>
              </svg>
              Serving Austin, San Antonio &amp; the Hill Country
            </motion.p>
          </div>

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
        @media (max-width: 768px) {
          .hero-stats { flex-wrap: wrap !important; }
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
