'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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
      <div className="nl">
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="/blog">Blog</a>
        <a href="/free-audit">Free Audit</a>
      </div>
      <a href="/free-audit" className="nc nav-cta-audit">
        Free Audit
      </a>
      <a href="#book" className="nc nav-cta-book">
        Book a Call
      </a>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 767px) {
          .nav-cta-book { display: none !important; }
        }
        @media (min-width: 768px) {
          .nav-cta-audit { display: none !important; }
        }
      `}} />
    </motion.nav>
  );
}
