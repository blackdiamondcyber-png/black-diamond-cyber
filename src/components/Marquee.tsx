'use client';

import { useEffect, useRef } from 'react';

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.innerHTML += el.innerHTML;
    }
  }, []);

  return (
    <div className="mq">
      <div className="mt" id="mqt" ref={trackRef}>
        <span className="mi">Dental Practices</span>
        <span className="md"></span>
        <span className="mi">HVAC Companies</span>
        <span className="md"></span>
        <span className="mi">Plumbing Services</span>
        <span className="md"></span>
        <span className="mi">Med Spas</span>
        <span className="md"></span>
        <span className="mi">Chiropractors</span>
        <span className="md"></span>
        <span className="mi">Roofing Contractors</span>
        <span className="md"></span>
      </div>
    </div>
  );
}
