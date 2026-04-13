'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
];

const INDUSTRY_LINKS = [
  { href: '/demo/dental', label: 'Dental Practices' },
  { href: '/demo/hvac', label: 'HVAC Companies' },
  { href: '/demo/plumbing', label: 'Plumbing Services' },
  { href: '/demo/medspa', label: 'Med Spas' },
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

function ChevronDown({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ flexShrink: 0 }}
    >
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize past breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ y: -80, opacity: 0 }}
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
        <div className="nw">
          BLACK DIAMOND <span>CYBER</span>
        </div>
        <div className="nl nav-desktop-links">
          {/* Industries dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              onClick={() => setIndustriesOpen((v) => !v)}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: 0,
                fontSize: 'inherit',
                fontWeight: 'inherit',
                letterSpacing: 'inherit',
                textTransform: 'inherit' as CSSStyleDeclaration['textTransform'],
              }}
            >
              Industries <ChevronDown open={industriesOpen} />
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '12px',
                    background: 'rgba(6,8,12,.95)',
                    backdropFilter: 'blur(24px) saturate(1.5)',
                    border: '1px solid rgba(255,255,255,.08)',
                    borderRadius: '12px',
                    padding: '8px',
                    minWidth: '200px',
                    zIndex: 999,
                  }}
                >
                  {INDUSTRY_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      style={{
                        display: 'block',
                        padding: '10px 16px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--t2)',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'background .15s, color .15s',
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.3px',
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.background = 'rgba(93,196,232,.1)';
                        (e.target as HTMLElement).style.color = '#5DC4E8';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.background = 'transparent';
                        (e.target as HTMLElement).style.color = 'var(--t2)';
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div
                    style={{
                      padding: '10px 16px',
                      fontSize: '12px',
                      color: 'rgba(222,224,231,.3)',
                      fontWeight: 500,
                      letterSpacing: '0.3px',
                    }}
                  >
                    More Coming Soon
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <a href="/free-audit" className="nc nav-cta-audit">
          Free Audit
        </a>
        <a href="#book" className="nc nav-cta-book">
          Book a Call
        </a>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{
            display: 'none', // overridden by media query
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

      {/* Mobile menu overlay + drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="nav-backdrop"
              initial={{ opacity: 0 }}
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

            {/* Slide-down menu */}
            <motion.div
              key="nav-mobile-menu"
              initial={{ opacity: 0, y: -20 }}
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
              {/* Industries expandable section */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase' as const,
                    color: 'var(--t2)',
                    padding: '14px 8px',
                    borderBottom: '1px solid rgba(255,255,255,.04)',
                    background: 'none',
                    border: 'none',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'rgba(255,255,255,.04)',
                    cursor: 'pointer',
                  }}
                >
                  <span>Industries</span>
                  <ChevronDown open={mobileIndustriesOpen} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingLeft: '16px', paddingTop: '4px', paddingBottom: '8px' }}>
                        {INDUSTRY_LINKS.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: 'block',
                              fontSize: '14px',
                              fontWeight: 500,
                              color: 'var(--cyan)',
                              padding: '10px 8px',
                              textDecoration: 'none',
                              borderBottom: '1px solid rgba(255,255,255,.02)',
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                        <span
                          style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: 'rgba(222,224,231,.25)',
                            padding: '10px 8px',
                          }}
                        >
                          More Coming Soon
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.11 + i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '12px',
                }}
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
          .nav-cta-audit { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
          .nav-cta-audit { display: none !important; }
        }
      `}} />
    </>
  );
}
