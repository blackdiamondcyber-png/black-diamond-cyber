'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="cta" id="book" ref={ref}>
      <div className="c">
        <div className="cta-o">
          <div className="cta-i">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div
                className="tag"
                style={{ display: 'inline-flex', marginBottom: '18px' }}
              >
                Limited Availability This Month
              </div>
              <h2>
                Ready to Stop Losing Customers
                <br />
                to <em>Competitors?</em>
              </h2>
              <p>
                Book a free strategy call with Erik. We&apos;ll audit your current
                web presence and show you exactly how AI-powered websites and
                automation can fill your schedule.
              </p>
            </motion.div>
            <motion.div
              className="cb"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <MagneticButton href="#book" className="bp" strength={0.25}>
                Book Free Strategy Call
              </MagneticButton>
              <MagneticButton href="/free-audit" className="bs" strength={0.2}>
                Run Free Audit
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
