'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <motion.line
        x1="3" x2="17" y1="6" y2="6"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { y1: 10, y2: 10, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
        style={{ transformOrigin: 'center' }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="3" x2="17" y1="10" y2="10"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="3" x2="17" y1="14" y2="14"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { y1: 10, y2: 10, rotate: -45 } : { y1: 14, y2: 14, rotate: 0 }}
        style={{ transformOrigin: 'center' }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.04)'
            : '0 8px 40px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.03)',
          background: scrolled
            ? 'rgba(6,8,12,.85)'
            : 'rgba(11,14,22,.65)',
        }}
      >
        <a href="/" className="nw" style={{ textDecoration: 'none' }}>
          BLACK DIAMOND <span>CYBER</span>
        </a>
        <div className="nl nav-desktop-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <a href="#book" className="nc nav-cta-book">
          Book a Call
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            padding: '4px',
            lineHeight: 0,
          }}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="nav-backdrop"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 299,
                background: 'rgba(0,0,0,.6)',
                backdropFilter: 'blur(4px)',
              }}
            />

            <motion.div
              key="nav-mobile-menu"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                top: '72px',
                left: '16px',
                right: '16px',
                zIndex: 301,
                background: 'rgba(6,8,12,.95)',
                backdropFilter: 'blur(24px) saturate(1.5)',
                border: '1px solid rgba(255,255,255,.06)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase' as const,
                    color: 'var(--t2)',
                    padding: '14px 8px',
                    borderBottom: '1px solid rgba(255,255,255,.04)',
                    transition: 'color 0.3s ease',
                  }}
                  whileHover={{ color: '#5DC4E8' }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                style={{ display: 'flex', gap: '10px', marginTop: '12px' }}
              >
                <a
                  href="/free-audit"
                  onClick={() => setMobileOpen(false)}
                  className="nc"
                  style={{ flex: 1, textAlign: 'center' }}
                >
                  Free Audit
                </a>
                <a
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  className="nc"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,.1)',
                    color: 'var(--text)',
                  }}
                >
                  Book a Call
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-book { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
        }
      `}} />
    </>
  );
}
