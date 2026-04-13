'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// "Before" — generic template-y old site
function BeforeSite() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f5f5f5', borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
      {/* Clunky nav */}
      <div style={{
        background: '#1a5276', padding: '8px 12px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: 9, fontWeight: 900, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase' }}>SMILE DENTAL</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Home', 'About', 'Services', 'Contact'].map((t) => (
            <span key={t} style={{ fontSize: 7, color: 'rgba(255,255,255,0.7)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Dated hero - solid blue block */}
      <div style={{
        background: 'linear-gradient(#1a5276, #2874a6)',
        padding: '16px 12px 12px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Welcome to Our Dental Office!</div>
        <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.6)', marginBottom: 8, lineHeight: 1.5 }}>
          We provide quality dental care for your entire family.<br />Call us today to schedule your appointment!
        </div>
        <div style={{
          display: 'inline-block', padding: '4px 12px',
          background: '#e74c3c', borderRadius: 2,
          fontSize: 7, fontWeight: 700, color: '#fff',
        }}>
          CALL NOW: (555) 123-4567
        </div>
      </div>

      {/* Cluttered content */}
      <div style={{ padding: '8px 10px', flex: 1, background: '#f9f9f9' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          {['Cleanings', 'Whitening', 'Implants'].map((s, i) => (
            <div key={i} style={{
              flex: 1, background: '#fff', border: '1px solid #ddd',
              borderRadius: 2, padding: '6px 4px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 2, color: '#666' }}>{'+'}</div>
              <div style={{ fontSize: 6, fontWeight: 700, color: '#333' }}>{s}</div>
            </div>
          ))}
        </div>

        {/* Tiny paragraph text walls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {[100, 90, 95, 70].map((w, i) => (
            <div key={i} style={{ height: 4, width: `${w}%`, background: '#ddd', borderRadius: 1 }} />
          ))}
        </div>

        {/* Slow badge row */}
        <div style={{ marginTop: 8, display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            padding: '3px 8px', background: '#fff8e1',
            border: '1px solid #f39c12', borderRadius: 2,
            fontSize: 7, color: '#e67e22',
          }}>
            ⚠️ Page speed: 42/100
          </div>
          <div style={{
            padding: '3px 8px', background: '#ffebee',
            border: '1px solid #e74c3c', borderRadius: 2,
            fontSize: 7, color: '#c0392b',
          }}>
            ⚠️ Not mobile-friendly
          </div>
        </div>
      </div>
    </div>
  );
}

// "After" — BDC premium site
function AfterSite() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#06080C', borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
      {/* Clean floating nav */}
      <div style={{
        padding: '6px 12px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(11,14,22,0.8)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <span style={{ fontSize: 8, fontWeight: 700, color: '#DEE0E7', letterSpacing: 0.5 }}>
          SMILE<span style={{ color: '#5DC4E8' }}>.</span>
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Services', 'About', 'Blog'].map((t) => (
            <span key={t} style={{ fontSize: 6, color: 'rgba(255,255,255,0.4)', letterSpacing: 0.5 }}>{t}</span>
          ))}
        </div>
        <div style={{
          padding: '3px 10px', background: '#2887CC',
          borderRadius: 20, fontSize: 6, fontWeight: 700, color: '#fff', letterSpacing: 0.8,
        }}>
          BOOK NOW
        </div>
      </div>

      {/* Cinematic hero */}
      <div style={{
        position: 'relative', height: 80, overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A1828 0%, #0C1E2E 50%, #0A1020 100%)',
        display: 'flex', alignItems: 'center', padding: '0 12px',
      }}>
        {/* Glow orb */}
        <div style={{
          position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
          width: 80, height: 80, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(40,135,204,0.2), transparent 70%)',
          filter: 'blur(20px)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 13, fontFamily: 'Georgia, serif', color: '#DEE0E7', lineHeight: 1.2, marginBottom: 4 }}>
            Your Best Smile<br />
            <span style={{ color: '#5DC4E8', fontStyle: 'italic' }}>Starts Here.</span>
          </div>
          <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.45)', marginBottom: 6, lineHeight: 1.5 }}>
            Premium dental care · Canyon Lake, TX
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{
              padding: '3px 10px', background: '#2887CC',
              borderRadius: 20, fontSize: 6, fontWeight: 700, color: '#fff',
            }}>
              Book Appointment
            </div>
            <div style={{
              padding: '3px 10px', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, fontSize: 6, color: 'rgba(255,255,255,0.5)',
            }}>
              Our Services
            </div>
          </div>
        </div>
      </div>

      {/* Clean service cards */}
      <div style={{ padding: '6px 8px', background: '#0C0F16', flex: 1 }}>
        <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
          {[
            { name: 'Cleanings', color: '#2887CC' },
            { name: 'Whitening', color: '#5DC4E8' },
            { name: 'Implants', color: '#34D399' },
          ].map((s) => (
            <div key={s.name} style={{
              flex: 1, background: '#12151E',
              border: `1px solid ${s.color}22`,
              borderRadius: 6, padding: '6px 4px', textAlign: 'center',
            }}>
              <div style={{ height: 3, width: 20, background: s.color, borderRadius: 2, margin: '0 auto 4px' }} />
              <div style={{ fontSize: 6, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>{s.name}</div>
            </div>
          ))}
        </div>

        {/* Speed & mobile badges */}
        <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
          <div style={{
            padding: '3px 8px', background: 'rgba(52,211,153,0.08)',
            border: '1px solid rgba(52,211,153,0.2)', borderRadius: 20,
            fontSize: 6.5, color: '#34D399', fontWeight: 700,
          }}>
            ✓ PageSpeed 97
          </div>
          <div style={{
            padding: '3px 8px', background: 'rgba(52,211,153,0.08)',
            border: '1px solid rgba(52,211,153,0.2)', borderRadius: 20,
            fontSize: 6.5, color: '#34D399', fontWeight: 700,
          }}>
            ✓ Mobile-First
          </div>
          <div style={{
            padding: '3px 8px', background: 'rgba(40,135,204,0.08)',
            border: '1px solid rgba(40,135,204,0.2)', borderRadius: 20,
            fontSize: 6.5, color: '#5DC4E8', fontWeight: 700,
          }}>
            ✓ AI Chat
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterDemo({ active }: { active: boolean }) {
  const [phase, setPhase] = useState<'before' | 'transitioning' | 'after'>('before');
  const [sliderX, setSliderX] = useState(50);

  useEffect(() => {
    if (!active) {
      setPhase('before');
      setSliderX(50);
      return;
    }

    // Show "before" for 2s then animate slider to reveal "after"
    const t1 = setTimeout(() => setPhase('transitioning'), 1600);
    return () => clearTimeout(t1);
  }, [active]);

  useEffect(() => {
    if (phase !== 'transitioning') return;
    // Animate slider from 50 → 5 (nearly full after)
    const start = performance.now();
    const duration = 1200;
    let raf: number;

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const newX = 50 - eased * 45;
      setSliderX(newX);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase('after');
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 10 }}>
      {/* Label bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div style={{
          padding: '4px 12px', borderRadius: 20,
          background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.2)',
          fontSize: 9, fontWeight: 700, color: '#EF4444',
        }}>
          BEFORE · Old Website
        </div>
        <div style={{ fontSize: 16 }}>→</div>
        <div style={{
          padding: '4px 12px', borderRadius: 20,
          background: 'rgba(52,211,153,0.08)',
          border: '1px solid rgba(52,211,153,0.2)',
          fontSize: 9, fontWeight: 700, color: '#34D399',
        }}>
          AFTER · BDC Rebuild
        </div>
      </motion.div>

      {/* Split comparison */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          position: 'relative',
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Before layer (full width underneath) */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {/* Browser chrome */}
          <div style={{
            background: '#e8e8e8', padding: '6px 10px',
            display: 'flex', alignItems: 'center', gap: 4, borderBottom: '1px solid #ccc',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399' }} />
            <div style={{
              flex: 1, height: 12, borderRadius: 6, marginLeft: 6,
              background: '#d0d0d0', display: 'flex', alignItems: 'center', padding: '0 6px',
            }}>
              <span style={{ fontSize: 7, color: '#999' }}>smileclinic.com</span>
            </div>
          </div>
          <BeforeSite />
        </div>

        {/* After layer (clips from left) */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0, bottom: 0, left: 0,
            width: `${100 - sliderX}%`,
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, minWidth: 300 }}>
            {/* Browser chrome */}
            <div style={{
              background: '#0C0F16', padding: '6px 10px',
              display: 'flex', alignItems: 'center', gap: 4,
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399' }} />
              <div style={{
                flex: 1, height: 12, borderRadius: 6, marginLeft: 6,
                background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 6px',
              }}>
                <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.3)' }}>smileclinic.bd-cyber.com</span>
              </div>
            </div>
            <AfterSite />
          </div>
        </motion.div>

        {/* Slider handle */}
        <div
          style={{
            position: 'absolute',
            top: 0, bottom: 0,
            left: `${100 - sliderX}%`,
            width: 2,
            background: 'linear-gradient(180deg, #5DC4E8, #2887CC)',
            zIndex: 10,
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 24, height: 24, borderRadius: '50%',
            background: 'linear-gradient(135deg, #2887CC, #5DC4E8)',
            boxShadow: '0 0 16px rgba(93,196,232,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, color: '#fff', fontWeight: 700,
          }}>
            ⟺
          </div>
        </div>
      </motion.div>

      {/* Bottom improvement stats */}
      <AnimatePresence>
        {phase === 'after' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: 8 }}
          >
            {[
              { label: 'Speed Score', before: '42', after: '97', color: '#34D399' },
              { label: 'Leads / Mo', before: '3', after: '63+', color: '#5DC4E8' },
              { label: 'Delivery', before: '6–8 wks', after: '3 days', color: '#2887CC' },
            ].map((stat) => (
              <div key={stat.label} style={{
                flex: 1,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 8, padding: '8px 10px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', marginBottom: 3 }}>{stat.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  <span style={{ fontSize: 9, color: '#EF4444', textDecoration: 'line-through' }}>{stat.before}</span>
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)' }}>→</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: stat.color }}>{stat.after}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
