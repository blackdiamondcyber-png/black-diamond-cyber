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
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(40,135,204,.3)',
            border: '2px solid rgba(93,196,232,.2)',
            position: 'relative',
          }}>
            <Image
              src="/images/erik-pearson-founder.png"
              alt="Erik Pearson - Founder & CEO of Black Diamond Cyber"
              width={100}
              height={100}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              priority
            />
          </div>

          {/* Identity */}
          <div className="fp-info">
            <h3>Erik Pearson</h3>
            <p>Founder &amp; CEO</p>
          </div>

          {/* Stat row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            width: '100%',
            margin: '8px 0',
          }}>
            {[
              { value: '127+', label: 'Sites Built' },
              { value: '3 days', label: 'Avg Delivery' },
              { value: '$0', label: 'Contracts' },
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
            <span className="fp-badge">Patterson Dental — Sales</span>
            <span className="fp-badge">AI-Certified Developer</span>
            <span className="fp-badge">Full-Stack Engineer</span>
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
              Why This Exists
            </div>
            <h2 className="st">
              Built by Someone Who&nbsp;
              <em>Lives</em> Local Business
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '18px' }}>
            I&rsquo;m a territory sales rep at Patterson Dental covering 400+ accounts across Austin and San Antonio. Every week I walk into dental offices, HVAC shops, and local businesses and see the same thing: 
            <strong style={{ color: 'var(--text)' }}> great services, terrible websites.</strong>
          </p>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '18px' }}>
            I watched businesses lose patients to competitors with worse reviews and worse service &mdash; purely because their website was 
            <strong style={{ color: 'var(--text)' }}> faster, prettier, and easier to trust</strong>. So I built what I kept recommending but couldn&rsquo;t find anywhere: AI-powered websites that deliver agency quality at a price that makes sense for local business.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.9, marginBottom: '28px' }}>
            I&rsquo;m also a self-taught developer with 8 production apps shipped. When I say the code is yours, I mean it &mdash; because I built it that way on purpose. No platform lock-in. No hostage situation when you want to leave.
          </p>

          {/* Differentiators */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {[
              { icon: '⚡', title: 'AI-First Builder', desc: 'Ship sites in 72 hours with AI generation + human polish' },
              { icon: '🎯', title: 'Industry Insider', desc: '400+ dental & local business relationships' },
              { icon: '💎', title: 'Code Ownership', desc: 'You own everything. We just build it fast.' },
              { icon: '📈', title: 'Revenue Focus', desc: 'Every decision optimized for leads, not aesthetics' },
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
            {['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'n8n', 'Claude AI', 'Stripe'].map((tech) => (
              <span key={tech} className="ptg hi">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
