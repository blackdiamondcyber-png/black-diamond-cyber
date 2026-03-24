'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AIBuildDemo } from '@/components/demos/AIBuildDemo';
import { DashboardDemo } from '@/components/demos/DashboardDemo';
import { ChatbotDemo } from '@/components/demos/ChatbotDemo';
import { BeforeAfterDemo } from '@/components/demos/BeforeAfterDemo';

type DemoId = 'ai-build' | 'dashboard' | 'chatbot' | 'before-after';

interface Demo {
  id: DemoId;
  label: string;
  title: string;
  desc: string;
  icon: string;
  duration: number; // ms before auto-advancing
}

const DEMOS: Demo[] = [
  {
    id: 'ai-build',
    label: 'AI Builder',
    title: 'Prompt to live site',
    desc: 'Describe your business. Watch your site appear.',
    icon: '⚡',
    duration: 12000,
  },
  {
    id: 'dashboard',
    label: 'Analytics',
    title: 'Real-time growth dashboard',
    desc: 'Track visitors, leads, and reviews live.',
    icon: '📊',
    duration: 10000,
  },
  {
    id: 'chatbot',
    label: 'AI Chat',
    title: 'AI books appointments for you',
    desc: 'Answers questions and schedules — 24/7.',
    icon: '💬',
    duration: 11000,
  },
  {
    id: 'before-after',
    label: 'Transformation',
    title: 'Before & after',
    desc: 'See the difference a BDC rebuild makes.',
    icon: '✦',
    duration: 9000,
  },
];

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
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Demo container with glass effect */}
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
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(239,68,68,0.6)' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(245,158,11,0.6)' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(52,211,153,0.6)' }} />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <span style={{ fontSize: 11 }}>{activeDemo.icon}</span>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{activeDemo.title}</span>
            </motion.div>
          </AnimatePresence>
          <div style={{
            fontSize: 8, color: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <span>{activeIdx + 1}</span>
            <span>/</span>
            <span>{DEMOS.length}</span>
          </div>
        </div>

        {/* Demo content area */}
        <div style={{ padding: '16px', height: 'calc(100% - 38px)', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              initial={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
        <div style={{
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
          transition: 'background 0.8s ease',
        }} />
      </div>

      {/* Tab nav below */}
      <div style={{
        display: 'flex',
        gap: 6,
        marginTop: 12,
        padding: '0 2px',
      }}>
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
                gap: 3,
              }}
            >
              {/* Progress fill on active tab */}
              {isActive && (
                <motion.div
                  style={{
                    position: 'absolute',
                    left: 0, bottom: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #2887CC, #5DC4E8)',
                    width: `${progress}%`,
                    borderRadius: '0 2px 0 0',
                  }}
                />
              )}
              <span style={{ fontSize: 12 }}>{demo.icon}</span>
              <span style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: 'uppercase',
                color: isActive ? '#5DC4E8' : 'rgba(255,255,255,0.25)',
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
