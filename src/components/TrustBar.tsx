'use client';

import { useRef } from 'react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll('.trust-item');
      gsap.from(items, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div className="trust" ref={ref}>
      <div className="c">
        <div className="ti">
          <div className="nc2 trust-item">No Long-Term Contracts</div>
          <div className="tp trust-item"></div>
          <div className="ts trust-item">
            <div className="tn">
              <AnimatedCounter value={3} duration={1.5} /><span>-<AnimatedCounter value={7} duration={1.8} /></span>
            </div>
            <div className="tl">Day Delivery</div>
          </div>
          <div className="tp trust-item"></div>
          <div className="ts trust-item">
            <div className="tn">
              <AnimatedCounter value={95} duration={2} /><span>+</span>
            </div>
            <div className="tl">PageSpeed</div>
          </div>
          <div className="tp trust-item"></div>
          <div className="ts trust-item">
            <div className="tn">
              <AnimatedCounter value={100} duration={2} /><span>%</span>
            </div>
            <div className="tl">Code Ownership</div>
          </div>
          <div className="tp trust-item"></div>
          <div className="ts trust-item">
            <div className="tn">
              $<AnimatedCounter value={0} duration={0.5} /><span></span>
            </div>
            <div className="tl">Contracts</div>
          </div>
          <div className="tp trust-item"></div>
          <div className="nc2 trust-item" style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)', background: 'rgba(93,196,232,.04)' }}>Own Your Website Code</div>
          <div className="tp trust-item"></div>
          <div className="nc2 trust-item" style={{ borderColor: 'var(--green)', color: 'var(--green)', background: 'rgba(52,211,153,.04)', fontSize: '12px', gap: '4px', display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontSize: '14px' }}>🇺🇸</span> US-Based · Texas
          </div>
        </div>
      </div>
    </div>
  );
}
