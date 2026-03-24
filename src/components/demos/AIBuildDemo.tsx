'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROMPT_TEXT = 'Build me a modern dental practice website for Canyon Lake Family Dentistry with appointment booking and AI chat';

const SITE_SECTIONS = [
  { label: 'Rendering hero section...', progress: 22 },
  { label: 'Adding appointment widget...', progress: 45 },
  { label: 'Wiring AI chatbot...', progress: 68 },
  { label: 'Optimizing for mobile...', progress: 85 },
  { label: 'Deploying to CDN...', progress: 100 },
];

const MINI_SITE_BLOCKS = [
  { w: '100%', h: 8, color: 'rgba(40,135,204,0.9)', radius: 2, label: 'NAV' },
  { w: '100%', h: 40, color: 'rgba(40,135,204,0.12)', radius: 4, label: 'HERO' },
  { w: '65%', h: 5, color: 'rgba(255,255,255,0.12)', radius: 2, label: '' },
  { w: '45%', h: 4, color: 'rgba(255,255,255,0.07)', radius: 2, label: '' },
  { w: '30%', h: 14, color: 'rgba(40,135,204,0.8)', radius: 8, label: 'CTA' },
];

export function AIBuildDemo({ active }: { active: boolean }) {
  const [typedChars, setTypedChars] = useState(0);
  const [buildPhase, setBuildPhase] = useState<'idle' | 'typing' | 'building' | 'done'>('idle');
  const [sectionIdx, setSectionIdx] = useState(0);
  const [showSite, setShowSite] = useState(false);
  const [visibleBlocks, setVisibleBlocks] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active) {
      setTypedChars(0);
      setBuildPhase('idle');
      setSectionIdx(0);
      setShowSite(false);
      setVisibleBlocks(0);
      return;
    }

    // Start typing after a short delay
    const startDelay = setTimeout(() => {
      setBuildPhase('typing');
    }, 600);

    return () => clearTimeout(startDelay);
  }, [active]);

  // Typing animation
  useEffect(() => {
    if (buildPhase !== 'typing') return;
    if (typedChars >= PROMPT_TEXT.length) {
      timerRef.current = setTimeout(() => setBuildPhase('building'), 500);
      return;
    }
    const speed = 28 + Math.random() * 22;
    timerRef.current = setTimeout(() => setTypedChars((c) => c + 1), speed);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [buildPhase, typedChars]);

  // Build progress animation
  useEffect(() => {
    if (buildPhase !== 'building') return;
    if (sectionIdx >= SITE_SECTIONS.length) {
      timerRef.current = setTimeout(() => {
        setBuildPhase('done');
        setShowSite(true);
      }, 400);
      return;
    }
    timerRef.current = setTimeout(() => setSectionIdx((i) => i + 1), 600);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [buildPhase, sectionIdx]);

  // Reveal site blocks one by one
  useEffect(() => {
    if (!showSite) return;
    if (visibleBlocks >= MINI_SITE_BLOCKS.length) return;
    const t = setTimeout(() => setVisibleBlocks((b) => b + 1), 160);
    return () => clearTimeout(t);
  }, [showSite, visibleBlocks]);

  const progress = buildPhase === 'building' && sectionIdx < SITE_SECTIONS.length
    ? SITE_SECTIONS[sectionIdx - 1]?.progress ?? 0
    : buildPhase === 'done' ? 100 : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 12 }}>
      {/* Terminal prompt box */}
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        border: '1px solid rgba(40,135,204,0.2)',
        borderRadius: 10,
        padding: '14px 16px',
        fontFamily: "'Outfit', monospace",
        flex: '0 0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399' }} />
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', marginLeft: 6, letterSpacing: 1 }}>BDC AI BUILDER</span>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <span style={{ color: '#5DC4E8', fontSize: 11, flexShrink: 0, marginTop: 1 }}>›</span>
          <div style={{ flex: 1, minHeight: 44 }}>
            <span style={{ fontSize: 11, color: '#DEE0E7', lineHeight: 1.6 }}>
              {PROMPT_TEXT.slice(0, typedChars)}
            </span>
            {buildPhase === 'typing' && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                style={{ display: 'inline-block', width: 2, height: 14, background: '#5DC4E8', marginLeft: 2, verticalAlign: 'middle' }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Build progress */}
      <AnimatePresence>
        {(buildPhase === 'building' || buildPhase === 'done') && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: 10,
              padding: '12px 14px',
              flex: '0 0 auto',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {SITE_SECTIONS.slice(0, sectionIdx).map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ width: 5, height: 5, borderRadius: '50%', background: i < sectionIdx - 1 ? '#34D399' : '#5DC4E8', flexShrink: 0 }}
                  />
                  <span style={{ fontSize: 10, color: i < sectionIdx - 1 ? '#34D399' : '#5DC4E8' }}>{s.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ marginTop: 10, height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #2887CC, #5DC4E8)', borderRadius: 2 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generated site preview */}
      <AnimatePresence>
        {showSite && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: 1, minHeight: 0 }}
          >
            <div style={{
              height: '100%',
              background: 'rgba(6,8,12,0.8)',
              border: '1px solid rgba(93,196,232,0.2)',
              borderRadius: 10,
              overflow: 'hidden',
              boxShadow: '0 0 30px rgba(93,196,232,0.06)',
            }}>
              {/* Browser chrome */}
              <div style={{
                background: 'rgba(0,0,0,0.5)',
                padding: '7px 10px',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#34D399' }} />
                <div style={{
                  flex: 1, marginLeft: 6, height: 12, borderRadius: 6,
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', padding: '0 8px'
                }}>
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)' }}>canyonlakefamilydentistry.com</span>
                </div>
              </div>

              {/* Site render area */}
              <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {MINI_SITE_BLOCKS.slice(0, visibleBlocks).map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleX: 0.6 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    style={{ transformOrigin: 'left' }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{
                      width: block.w,
                      height: block.h,
                      background: block.color,
                      borderRadius: block.radius,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {block.label && (
                        <span style={{ fontSize: 5, fontWeight: 700, letterSpacing: 1, color: 'rgba(255,255,255,0.6)' }}>
                          {block.label}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
                {visibleBlocks >= MINI_SITE_BLOCKS.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      marginTop: 4,
                      padding: '6px 10px',
                      background: 'rgba(52,211,153,0.08)',
                      border: '1px solid rgba(52,211,153,0.2)',
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#34D399' }} />
                    <span style={{ fontSize: 9, color: '#34D399', fontWeight: 700 }}>Site live — deployed in 3 minutes 12 seconds</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
