'use client';

import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollReveal } from '@/components/ScrollReveal';

export function TrustBar() {
  return (
    <div className="trust">
      <div className="c">
        <ScrollReveal>
          <div className="ti">
            <div className="nc2">No Long-Term Contracts</div>
            <div className="tp"></div>
            <div className="ts">
              <div className="tn">
                <AnimatedCounter value={3} duration={1.5} /><span>-<AnimatedCounter value={7} duration={1.8} /></span>
              </div>
              <div className="tl">Day Delivery</div>
            </div>
            <div className="tp"></div>
            <div className="ts">
              <div className="tn">
                <AnimatedCounter value={95} duration={2} /><span>+</span>
              </div>
              <div className="tl">PageSpeed</div>
            </div>
            <div className="tp"></div>
            <div className="ts">
              <div className="tn">
                <AnimatedCounter value={100} duration={2} /><span>%</span>
              </div>
              <div className="tl">Code Ownership</div>
            </div>
            <div className="tp"></div>
            <div className="ts">
              <div className="tn">
                $<AnimatedCounter value={0} duration={0.5} /><span></span>
              </div>
              <div className="tl">Contracts</div>
            </div>
            <div className="tp"></div>
            <div className="nc2" style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)', background: 'rgba(93,196,232,.04)' }}>Own Your Website Code</div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
