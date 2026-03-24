'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AIBuildDemo } from '@/components/demos/AIBuildDemo';
import { DashboardDemo } from '@/components/demos/DashboardDemo';
import { ChatbotDemo } from '@/components/demos/ChatbotDemo';
import { BeforeAfterDemo } from '@/components/demos/BeforeAfterDemo';
import { IconBolt, IconBarChart, IconMessageSquare, IconLayers } from '@/components/Icons';

type DemoId = 'ai-build' | 'dashboard' | 'chatbot' | 'before-after';

interface Demo {
  id: DemoId;
  label: string;
  title: string;
  desc: string;
  Icon: React.FC<{ size?: number; color?: string }>;
  duration: number; // ms before auto-advancing
}

const DEMOS: Demo[] = [
  {
    id: 'ai-build',
    label: 'AI Builder',
    title: 'Prompt to live site',
    desc: 'Describe your business. Watch your site appear.',
    Icon: IconBolt,
    duration: 12000,
  },
  {
    id: 'dashboard',
    label: 'Analytics',
    title: 'Real-time growth dashboard',
    desc: 'Track visitors, leads, and reviews live.',
    Icon: IconBarChart,
    duration: 10000,
  },
  {
    id: 'chatbot',
    label: 'AI Chat',
    title: 'AI books appointments for you',
    desc: 'Answers questions and schedules — 24/7.',
    Icon: IconMessageSquare,
    duration: 11000,
  },
  {
    id: 'before-after',
    label: 'Transformation',
    title: 'Before & after',
    desc: 'See the difference a BDC rebuild makes.',
    Icon: IconLayers,
    duration: 9000,
  },
];

// Smooth fade+blur cross-fade variants (~400ms ease-in-out)
const demoVariants = {
  enter: {
    opacity: 0,
    filter: 'blur(8px)',
    scale: 0.98,
  },
  center: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(8px)',
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const titleVariants = {
  enter: { opacity: 0, y: -6 },
  center: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: 6, transition: { duration: 0.2 } },
};

export function ProductDemoReel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIdx((i) => (i + 1) % DEMOS.length);
    setProgress(0);
  }, []);

  // Progress timer
  useEffect(() => {
    if (paused) return;
    const demo = DEMOS[activeIdx];
    const interval = 50;
    const step = (interval / demo.duration) * 100;
    const t = setInterval(() => {
      setProgress((p) => {
        if (p + step >= 100) {
          advance();
          return 0;
        }
        return p + step;
      });
    }, interval);
    return () => clearInterval(t);
  }, [activeIdx, paused, advance]);

  const activeDemo = DEMOS[activeIdx];

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Demo container */}
      <div style={{
        height: '440px',
        background: 'rgba(12,15,22,0.7)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 16,
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}>
        {/* Top chrome bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(0,0,0,0.3)',
          flexShrink: 0,
        }}>
          {/* macOS traffic lights */}
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(239,68,68,0.6)' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(245,158,11,0.6)' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(52,211,153,0.6)' }} />
          </div>

          {/* Active demo title — fades between demos */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              variants={titleVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <activeDemo.Icon size={12} color="rgba(255,255,255,0.45)" />
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                {activeDemo.title}
              </span>
            </motion.div>
          </AnimatePresence>

          <div style={{
            fontSize: 8,
            color: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}>
            <span>{activeIdx + 1}</span>
            <span>/</span>
            <span>{DEMOS.length}</span>
          </div>
        </div>

        {/* Demo content area — smooth fade+blur cross-fade */}
        <div style={{ padding: '16px', height: 'calc(100% - 38px)', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              variants={demoVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ height: '100%' }}
            >
              {activeDemo.id === 'ai-build' && <AIBuildDemo active={activeIdx === 0} />}
              {activeDemo.id === 'dashboard' && <DashboardDemo active={activeIdx === 1} />}
              {activeDemo.id === 'chatbot' && <ChatbotDemo active={activeIdx === 2} />}
              {activeDemo.id === 'before-after' && <BeforeAfterDemo active={activeIdx === 3} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient glow matching active demo */}
        <motion.div
          key={activeDemo.id + '-glow'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            background: activeDemo.id === 'dashboard'
              ? 'radial-gradient(ellipse at 80% 20%, rgba(52,211,153,0.04), transparent 60%)'
              : activeDemo.id === 'chatbot'
              ? 'radial-gradient(ellipse at 20% 80%, rgba(40,135,204,0.05), transparent 60%)'
              : activeDemo.id === 'before-after'
              ? 'radial-gradient(ellipse at 50% 100%, rgba(93,196,232,0.04), transparent 60%)'
              : 'radial-gradient(ellipse at 80% 0%, rgba(93,196,232,0.04), transparent 60%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      </div>

      {/* Tab nav below — with smooth progress indicator */}
      <div style={{ display: 'flex', gap: 6, marginTop: 12, padding: '0 2px' }}>
        {DEMOS.map((demo, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={demo.id}
              onClick={() => { setActiveIdx(i); setProgress(0); }}
              style={{
                flex: 1,
                padding: '8px 10px',
                background: isActive ? 'rgba(40,135,204,0.12)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${isActive ? 'rgba(40,135,204,0.3)' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: 10,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              {/* Progress fill bar at bottom of active tab */}
              {isActive && (
                <motion.div
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #2887CC, #5DC4E8)',
                    width: `${progress}%`,
                    borderRadius: '0 2px 0 0',
                  }}
                />
              )}

              {/* SVG icon */}
              <demo.Icon
                size={14}
                color={isActive ? '#5DC4E8' : 'rgba(255,255,255,0.25)'}
              />

              <span style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: 'uppercase',
                color: isActive ? '#5DC4E8' : 'rgba(255,255,255,0.25)',
                transition: 'color 0.3s ease',
              }}>
                {demo.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Pause indicator */}
      {paused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'absolute',
            top: 12,
            right: 16,
            fontSize: 8,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: 1,
          }}
        >
          PAUSED
        </motion.div>
      )}
    </div>
  );
}
