'use client';

import { useState, useEffect } from 'react';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media(min-width:769px){.sticky-mobile-cta{display:none!important}}
      ` }} />
      <div
        className="sticky-mobile-cta"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: '12px 16px',
          paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
          background: 'rgba(6,8,12,.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(93,196,232,.1)',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform .3s ease',
        }}
      >
        <a
          href="/free-audit"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
            padding: '14px 24px',
            background: 'var(--blue)',
            color: '#fff',
            borderRadius: '40px',
            fontSize: '14px',
            fontWeight: 700,
            textDecoration: 'none',
            letterSpacing: '0.3px',
          }}
        >
          Free Audit — 30 Seconds
          <span style={{ fontSize: '16px' }}>→</span>
        </a>
      </div>
    </>
  );
}
