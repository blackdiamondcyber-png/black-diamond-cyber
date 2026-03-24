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
        <span className="mi">General Dentistry</span>
        <span className="md"></span>
        <span className="mi">Cosmetic Dentistry</span>
        <span className="md"></span>
        <span className="mi">Pediatric Dentistry</span>
        <span className="md"></span>
        <span className="mi">Orthodontics</span>
        <span className="md"></span>
        <span className="mi">Oral Surgery</span>
        <span className="md"></span>
        <span className="mi">Periodontics</span>
        <span className="md"></span>
        <span className="mi">Endodontics</span>
        <span className="md"></span>
        <span className="mi">Prosthodontics</span>
        <span className="md"></span>
        <span className="mi">Implant Centers</span>
        <span className="md"></span>
        <span className="mi">Multi-Location Practices</span>
        <span className="md"></span>
        <span className="mi">DSO Groups</span>
        <span className="md"></span>
        <span className="mi">Dental Startups</span>
        <span className="md"></span>
      </div>
    </div>
  );
}
