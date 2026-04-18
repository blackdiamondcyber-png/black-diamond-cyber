'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

function WixPanel() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#f5f4f0',
        color: '#1a1a1a',
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: '"Times New Roman", Times, serif',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.4em',
            color: '#9a9a9a',
            marginBottom: 20,
            textTransform: 'uppercase',
          }}
        >
          Established 1998
        </div>
        <h3
          style={{
            fontSize: 'clamp(22px, 2.6vw, 34px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: '#2a2a2a',
            margin: '0 0 18px',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          Welcome to our dental office
        </h3>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            color: '#6a6a6a',
            margin: 0,
            maxWidth: 360,
          }}
        >
          We are a family-owned dental practice serving the community for over 25 years. Please
          call to schedule an appointment with our friendly staff.
        </p>
      </div>

      <div
        style={{
          display: 'inline-block',
          padding: '12px 28px',
          border: '1px solid #bfbab0',
          background: 'transparent',
          color: '#4a4a4a',
          fontSize: 11,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          alignSelf: 'flex-start',
          marginTop: 18,
        }}
      >
        Call Now
      </div>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 10, color: '#a8a8a8' }}>
        <span
          style={{
            padding: '3px 8px',
            background: '#e9e5db',
            color: '#8a8070',
            letterSpacing: '0.15em',
          }}
        >
          WIX
        </span>
        <span>Loads in 6.8s · PageSpeed 24</span>
      </div>
    </div>
  );
}

function BdcPanel() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--bg)',
        color: 'var(--text)',
        padding: '44px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(1200px 300px at 80% 0%, rgba(93,196,232,0.08), transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative' }}>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.25em',
            color: 'var(--cyan)',
            marginBottom: 20,
            textTransform: 'uppercase',
          }}
        >
          Canyon Lake · Accepting New Patients
        </div>
        <h3
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(24px, 2.9vw, 38px)',
            fontWeight: 400,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            margin: '0 0 16px',
          }}
        >
          Gentle, Modern Dentistry for Your{' '}
          <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Whole Family</em>
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.7,
            color: 'var(--t2)',
            margin: 0,
            maxWidth: 380,
          }}
        >
          Same-week appointments. Transparent pricing. Now accepting new patients in the Canyon
          Lake and Spring Branch area.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 22, position: 'relative' }}>
        <div
          style={{
            padding: '12px 22px',
            borderRadius: 999,
            background: 'var(--cyan)',
            color: '#04131c',
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: '0.02em',
          }}
        >
          Book Online →
        </div>
        <div
          style={{
            padding: '12px 22px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'var(--text)',
            fontSize: 13,
          }}
        >
          (830) 555-0142
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'var(--t3)',
          position: 'relative',
          marginTop: 18,
        }}
      >
        <span
          style={{
            padding: '3px 8px',
            background: 'rgba(93,196,232,0.1)',
            color: 'var(--cyan)',
            letterSpacing: '0.15em',
            borderRadius: 4,
          }}
        >
          BDC
        </span>
        <span>Loads in 0.8s · PageSpeed 97</span>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!draggingRef.current) return;
      if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
    };
    const stop = () => {
      draggingRef.current = false;
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stop);
    };
  }, [updateFromClientX]);

  const startDrag = (clientX: number) => {
    draggingRef.current = true;
    document.body.style.userSelect = 'none';
    updateFromClientX(clientX);
  };

  return (
    <section
      ref={sectionRef}
      className="rv"
      style={{ padding: '100px 24px', position: 'relative' }}
    >
      <div className="c" style={{ maxWidth: 1180, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              display: 'block',
              marginBottom: 16,
            }}
          >
            Before · After
          </span>
          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(28px, 3.6vw, 46px)',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: 780,
              margin: '0 auto 12px',
            }}
          >
            Drag to see what{' '}
            <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>modern</em> looks like
          </h2>
          <p style={{ fontSize: 14, color: 'var(--t3)', margin: 0 }}>
            Same practice. One website is losing patients. The other is booking them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          ref={sliderRef}
          onMouseDown={(e) => startDrag(e.clientX)}
          onTouchStart={(e) => {
            if (e.touches[0]) startDrag(e.touches[0].clientX);
          }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(360px, 52vw, 520px)',
            borderRadius: 18,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
            cursor: 'ew-resize',
            userSelect: 'none',
            touchAction: 'none',
          }}
        >
          <div style={{ position: 'absolute', inset: 0 }}>
            <BdcPanel />
          </div>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              clipPath: `inset(0 ${100 - position}% 0 0)`,
              WebkitClipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <WixPanel />
          </div>

          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${position}%`,
              width: 2,
              background: 'var(--cyan)',
              transform: 'translateX(-1px)',
              boxShadow: '0 0 24px rgba(93,196,232,0.45)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${position}%`,
              transform: 'translate(-50%, -50%)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'var(--cyan)',
              color: '#04131c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 600,
              boxShadow: '0 10px 30px rgba(93,196,232,0.35), 0 0 0 4px rgba(6,8,12,0.9)',
              pointerEvents: 'none',
            }}
          >
            ⇆
          </div>

          <div
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              padding: '5px 10px',
              borderRadius: 999,
              background: 'rgba(26,26,26,0.75)',
              color: '#e9e5db',
              fontFamily: 'var(--mono)',
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
              pointerEvents: 'none',
            }}
          >
            Before · Wix
          </div>
          <div
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              padding: '5px 10px',
              borderRadius: 999,
              background: 'rgba(93,196,232,0.12)',
              color: 'var(--cyan)',
              fontFamily: 'var(--mono)',
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              border: '1px solid rgba(93,196,232,0.3)',
              backdropFilter: 'blur(8px)',
              pointerEvents: 'none',
            }}
          >
            After · BDC
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="ba-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            marginTop: 28,
            padding: '20px 24px',
            background: 'var(--bg2)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 14,
          }}
        >
          {[
            { v: '< 1s', l: 'Load Time' },
            { v: '97', l: 'PageSpeed' },
            { v: '100%', l: 'Code Ownership' },
            { v: '7-Day', l: 'Delivery' },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 'clamp(22px, 2.4vw, 30px)',
                  fontWeight: 400,
                  color: 'var(--cyan)',
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: 'var(--t3)',
                  textTransform: 'uppercase',
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 640px) {
            .ba-stats { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          }
        `,
        }}
      />
    </section>
  );
}
