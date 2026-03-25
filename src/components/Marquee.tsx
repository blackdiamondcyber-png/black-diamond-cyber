'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const INDUSTRIES = [
  'Dental Practices',
  'HVAC Companies',
  'Plumbing Services',
  'Med Spas',
  'Chiropractors',
  'Roofing Companies',
  'Electricians',
  'Orthodontists',
  'Veterinary Clinics',
  'Auto Repair Shops',
  'Landscaping Companies',
  'Law Firms',
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Duplicate content for seamless loop
    el.innerHTML += el.innerHTML;

    tweenRef.current = gsap.to(el, {
      xPercent: -50,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });

    const handleEnter = () => tweenRef.current?.timeScale(0.3);
    const handleLeave = () => tweenRef.current?.timeScale(1);

    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      tweenRef.current?.kill();
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="mq">
      <div className="mt" ref={trackRef} style={{ animation: 'none' }}>
        {INDUSTRIES.map((name, i) => (
          <span key={i}>
            <span className="mi">{name}</span>
            <span className="md"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
