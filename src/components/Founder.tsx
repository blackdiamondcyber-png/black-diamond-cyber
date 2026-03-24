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
            <p>Founder &amp; CEO</p>
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
              { value: '400+', label: 'Dental Accounts' },
              { value: '8', label: 'Apps Shipped' },
              { value: '3 day', label: 'Avg Delivery' },
              { value: '95+', label: 'PageSpeed' },
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

          {/* Credential badges */}
          <div className="fp-badges">
            <span className="fp-badge">Patterson Dental Sales</span>
            <span className="fp-badge">Full-Stack Developer</span>
            <span className="fp-badge">8 Production Apps</span>
            <span className="fp-badge">Canyon Lake, TX</span>
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
              I Know Dental. I Build&nbsp;
              <em>Websites.</em>
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '18px' }}>
            I&rsquo;m a territory sales rep at Patterson Dental, covering <strong style={{ color: 'var(--text)' }}>400+ dental accounts</strong> across Austin and San Antonio. Every week I walk into practices and see the same problem:
            <strong style={{ color: 'var(--text)' }}> incredible dentistry, invisible online.</strong>
          </p>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '18px' }}>
            I watched practices lose patients to competitors with worse reviews and worse care &mdash; purely because the other practice had
            <strong style={{ color: 'var(--text)' }}> a faster, more trustworthy website</strong>. That&rsquo;s a problem I knew I could solve.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '18px' }}>
            I&rsquo;m also a self-taught full-stack developer with <strong style={{ color: 'var(--text)' }}>8 production applications shipped</strong>. I combined my dental industry knowledge with AI-powered development to build premium websites in days instead of weeks &mdash; at a price that actually makes sense for local practices.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '28px' }}>
            When I say the code is yours, I mean it &mdash; I built it that way on purpose. No platform lock-in. No hostage situation. Just a better website that brings in more patients.
          </p>

          {/* Differentiators */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {[
              { icon: '🦷', title: 'Dental Industry Insider', desc: '400+ accounts — I know what patients look for online' },
              { icon: '⚡', title: 'AI-Powered Speed', desc: 'Ship premium sites in 3-7 days with AI + human polish' },
              { icon: '💎', title: 'You Own Everything', desc: 'Your code, your domain, your Vercel account' },
              { icon: '📈', title: 'Revenue-First Design', desc: 'Every element optimized to convert visitors into patients' },
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

          {/* Tech stack */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--t3)' }}>Stack</span>
            {['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'Claude AI', 'Stripe'].map((tech) => (
              <span key={tech} className="ptg hi">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
