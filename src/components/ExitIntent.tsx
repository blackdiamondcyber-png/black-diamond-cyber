'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ExitIntent() {
  const [show, setShow] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY > 10) return;
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('bdc-exit-shown')) return;
    sessionStorage.setItem('bdc-exit-shown', '1');
    setShow(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('bdc-exit-shown')) return;
    // Only on desktop (no touch)
    if ('ontouchstart' in window) return;
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 400,
            padding: '14px 24px',
            background: 'rgba(12,15,22,.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--hr-b)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: '14px', color: 'var(--text)', margin: 0 }}>
            Before you go &mdash; get your free competitive analysis. Takes 30 seconds.
          </p>
          <a
            href="/free-audit"
            style={{
              padding: '8px 20px',
              background: 'var(--blue)',
              color: '#fff',
              borderRadius: '40px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Free Audit
          </a>
          <button
            onClick={() => setShow(false)}
            aria-label="Close banner"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--t3)',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px 8px',
              lineHeight: 1,
            }}
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
