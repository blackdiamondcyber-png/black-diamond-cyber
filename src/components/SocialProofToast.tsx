'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SocialProofToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('bdc-toast-shown')) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem('bdc-toast-shown', '1');
      setShow(true);
    }, 8000);
    const dismiss = setTimeout(() => setShow(false), 13000);
    return () => {
      clearTimeout(timer);
      clearTimeout(dismiss);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setShow(false)}
          className="social-proof-toast"
          style={{
            position: 'fixed',
            bottom: '90px',
            left: '16px',
            zIndex: 350,
            maxWidth: '320px',
            padding: '14px 18px',
            background: 'rgba(12,15,22,.92)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(52,211,153,.15)',
            borderRadius: 'var(--r)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--green)',
              flexShrink: 0,
              animation: 'p 2s infinite',
            }}
          />
          <p style={{ fontSize: '13px', color: 'var(--text)', margin: 0, lineHeight: 1.5 }}>
            Erik just completed a free audit for a practice in San Antonio
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 640px) {
              .social-proof-toast {
                bottom: 100px !important;
                left: 8px !important;
                right: 8px !important;
                max-width: none !important;
                font-size: 12px !important;
              }
            }
          `}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
