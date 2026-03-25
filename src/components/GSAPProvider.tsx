'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'play none none none',
});

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Refresh ScrollTrigger after content loads — multiple passes for safety
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 1200);

    // Safety net: after 2.5s, force-reveal any GSAP-animated elements still at opacity 0.
    // This catches race conditions where ScrollTrigger missed a trigger point.
    const safetyNet = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.gsap-svc-card, .hiw-step, .why-card').forEach((el) => {
        const opacity = parseFloat(getComputedStyle(el).opacity);
        if (opacity < 0.1) {
          gsap.set(el, { opacity: 1, y: 0, x: 0, filter: 'none', clearProps: 'all' });
        }
      });
      // Also check section headers and containers animated by gsap.from()
      document.querySelectorAll<HTMLElement>('[data-gsap-reveal]').forEach((el) => {
        const opacity = parseFloat(getComputedStyle(el).opacity);
        if (opacity < 0.1) {
          gsap.set(el, { opacity: 1, y: 0, x: 0, filter: 'none', clearProps: 'all' });
        }
      });
    }, 2500);

    // If user prefers reduced motion, kill all ScrollTrigger animations
    // and force everything visible immediately
    if (prefersReduced) {
      setTimeout(() => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        document.querySelectorAll<HTMLElement>('.gsap-svc-card, .hiw-step, .why-card, [data-gsap-reveal]').forEach((el) => {
          gsap.set(el, { opacity: 1, y: 0, x: 0, filter: 'none', clearProps: 'all' });
        });
      }, 50);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(safetyNet);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
