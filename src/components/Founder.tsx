'use client';

import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="fdr" id="about" ref={sectionRef}>
      <div className="c">
        {/* Left: Founder card */}
        <motion.div
          className="fp"
          initial={{ opacity: 0, x: -32, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Photo */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(40,135,204,.3)',
            border: '2px solid rgba(93,196,232,.2)',
            position: 'relative',
          }}>
            <Image
              src="/images/erik-pearson-founder.png"
              alt="Erik Pearson - Founder of Black Diamond Cyber"
              width={120}
              height={120}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              priority
            />
          </div>

          {/* Identity */}
          <div className="fp-info">
            <h3>Erik Pearson</h3>
            <p>Founder</p>
          </div>

          {/* Stat row — real, verifiable stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            width: '100%',
            margin: '8px 0',
          }}>
            {[
              { value: '400+', label: 'Local Business Accounts' },
              { value: '3-7', label: 'Day Delivery' },
              { value: '95+', label: 'PageSpeed' },
              { value: '$0', label: 'Contracts' },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: 'rgba(40,135,204,.06)',
                border: '1px solid rgba(93,196,232,.1)',
                borderRadius: '8px',
                padding: '10px 8px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '20px', color: 'var(--text)', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--t3)', marginTop: '3px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <a href="#book" className="fcr" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
            <span style={{ color: 'var(--green)', fontSize: '9px' }}>●</span>
            Book a Free Call with Erik
          </a>
        </motion.div>

        {/* Right: Story */}
        <motion.div
          initial={{ opacity: 0, x: 32, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sh">
            <div className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              Meet the Founder
            </div>
            <h2 className="st">
              Built by Someone Who&nbsp;
              <em>Gets It.</em>
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '18px' }}>
            I&rsquo;ve worked directly with <strong style={{ color: 'var(--text)' }}>400+ local service businesses</strong> across Texas. I know the problem intimately: <strong style={{ color: 'var(--text)' }}>great businesses, invisible online.</strong>
          </p>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '18px' }}>
            I watched business after business lose customers to competitors with worse service &mdash; purely because the competitor had
            <strong style={{ color: 'var(--text)' }}> a faster, more credible website</strong>. That&rsquo;s a solvable problem, and I built Black Diamond Cyber to solve it.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '28px' }}>
            When I say the code is yours, I mean it &mdash; built that way on purpose. No platform lock-in. No hostage situation. Just a better website that brings in more customers.
          </p>

          {/* Differentiators */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {[
              { icon: '🏆', title: 'Local Business Expert', desc: 'I\'ve worked with 400+ service businesses. I know what your customers expect online.' },
              { icon: '⚡', title: 'Built in Days, Not Months', desc: 'Most agencies take 6-8 weeks. We deliver in 3-7 business days.' },
              { icon: '💎', title: 'You Own Everything', desc: 'Your website, your domain, your hosting account. No lock-in. Ever.' },
              { icon: '📈', title: 'More Bookings, More Calls', desc: 'Every element designed to turn visitors into paying customers.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'var(--bg1)',
                border: '1px solid var(--hr)',
                borderRadius: '12px',
                padding: '16px',
                transition: '.4s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--hr-b)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--hr)'; }}
              >
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{item.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '11px', color: 'var(--t3)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Enterprise tech note */}
          <p style={{ fontSize: '11px', color: 'var(--t3)', letterSpacing: '0.5px' }}>
            Built with enterprise-grade technology — the same stack powering Fortune 500 sites.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
