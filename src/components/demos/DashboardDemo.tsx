'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tiny inline SVG icons for the activity feed (no deps)
function IconUser({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function IconClipboard({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}
function IconStarSmall({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconChat({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

interface Metric {
  label: string;
  value: number;
  unit: string;
  color: string;
  trend: number; // positive = up
}

const METRICS: Metric[] = [
  { label: 'Monthly Visitors', value: 2847, unit: '', color: '#5DC4E8', trend: 34 },
  { label: 'New Leads', value: 63, unit: '', color: '#34D399', trend: 18 },
  { label: 'Avg. Page Speed', value: 97, unit: '/100', color: '#2887CC', trend: 12 },
  { label: 'Review Score', value: 4.9, unit: '★', color: '#F59E0B', trend: 8 },
];

const CHART_BARS = [38, 52, 44, 61, 58, 72, 67, 81, 75, 88, 84, 96];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const LIVE_EVENTS = [
  { text: 'New visitor — Google Search', Icon: IconUser, color: '#5DC4E8' },
  { text: 'Lead submitted — contact form', Icon: IconClipboard, color: '#34D399' },
  { text: '5-star review published', Icon: IconStarSmall, color: '#F59E0B' },
  { text: 'Chat conversation started', Icon: IconChat, color: '#2887CC' },
];

function useAnimatedValue(target: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) { setVal(0); return; }
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(parseFloat((target * eased).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

function MetricCard({ m, active, delay }: { m: Metric; active: boolean; delay: number }) {
  const val = useAnimatedValue(m.value, active, 1600);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 10,
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>
        {m.label}
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: m.color, lineHeight: 1 }}>
          {m.value % 1 !== 0 ? val.toFixed(1) : Math.round(val)}
        </span>
        <span style={{ fontSize: 11, color: m.color, opacity: 0.7 }}>{m.unit}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontSize: 9, color: '#34D399' }}>↑ {m.trend}%</span>
        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)' }}>vs last month</span>
      </div>
    </motion.div>
  );
}

export function DashboardDemo({ active }: { active: boolean }) {
  const [visibleBars, setVisibleBars] = useState(0);
  const [eventIdx, setEventIdx] = useState(-1);
  const [events, setEvents] = useState<typeof LIVE_EVENTS>([]);

  useEffect(() => {
    if (!active) {
      setVisibleBars(0);
      setEventIdx(-1);
      setEvents([]);
      return;
    }

    // Animate bars in sequence
    const barTimers: ReturnType<typeof setTimeout>[] = [];
    CHART_BARS.forEach((_, i) => {
      barTimers.push(setTimeout(() => setVisibleBars(i + 1), 200 + i * 80));
    });

    // Start live events feed
    const eventsDelay = setTimeout(() => {
      setEventIdx(0);
    }, 1800);

    return () => {
      barTimers.forEach(clearTimeout);
      clearTimeout(eventsDelay);
    };
  }, [active]);

  useEffect(() => {
    if (eventIdx < 0) return;
    if (eventIdx >= LIVE_EVENTS.length) return;
    setEvents((prev) => [LIVE_EVENTS[eventIdx], ...prev].slice(0, 3));
    const t = setTimeout(() => setEventIdx((i) => i + 1), 900);
    return () => clearTimeout(t);
  }, [eventIdx]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 10 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#DEE0E7', letterSpacing: 0.3 }}>Analytics Dashboard</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>Canyon Lake Family Dentistry · Live</div>
        </div>
        <motion.div
          animate={{ opacity: [1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '3px 10px', borderRadius: 20,
            background: 'rgba(52,211,153,0.08)',
            border: '1px solid rgba(52,211,153,0.2)',
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#34D399' }} />
          <span style={{ fontSize: 8, color: '#34D399', fontWeight: 700 }}>LIVE</span>
        </motion.div>
      </motion.div>

      {/* Metric cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {METRICS.map((m, i) => (
          <MetricCard key={m.label} m={m} active={active} delay={0.1 + i * 0.08} />
        ))}
      </div>

      {/* Bar chart */}
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: 10,
        padding: '10px 12px',
        flex: '0 0 auto',
      }}>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>
          MONTHLY TRAFFIC
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 44 }}>
          {CHART_BARS.map((h, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <motion.div
                initial={{ height: 0 }}
                animate={i < visibleBars ? { height: `${(h / 100) * 44}px` } : { height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  background: i === visibleBars - 1
                    ? 'linear-gradient(180deg, #5DC4E8, #2887CC)'
                    : `rgba(40,135,204,${0.25 + (h / 100) * 0.4})`,
                  borderRadius: '2px 2px 0 0',
                  minHeight: 2,
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          {MONTHS.map((m) => (
            <span key={m} style={{ fontSize: 6, color: 'rgba(255,255,255,0.2)', flex: 1, textAlign: 'center' }}>{m}</span>
          ))}
        </div>
      </div>

      {/* Live events feed */}
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: 10,
        padding: '10px 12px',
        flex: 1,
        overflow: 'hidden',
      }}>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>
          LIVE ACTIVITY
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <AnimatePresence>
            {events.map((e, i) => (
              <motion.div
                key={`${e.text}-${i}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1 - i * 0.25, x: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <e.Icon color={i === 0 ? e.color : 'rgba(255,255,255,0.3)'} />
                <span style={{ fontSize: 9, color: i === 0 ? e.color : 'rgba(255,255,255,0.35)' }}>{e.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
