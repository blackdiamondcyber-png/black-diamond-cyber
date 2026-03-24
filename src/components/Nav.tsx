'use client';

import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav" style={{
      boxShadow: scrolled
        ? '0 8px 40px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.04)'
        : '0 8px 40px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.03)',
      background: scrolled
        ? 'rgba(6,8,12,.85)'
        : 'rgba(11,14,22,.65)',
    }}>
      <div className="nw">
        BLACK DIAMOND <span>CYBER</span>
      </div>
      <div className="nl">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="/free-audit">Free Audit</a>
      </div>
      <a href="#book" className="nc">
        Free Strategy Call
      </a>
    </nav>
  );
}
