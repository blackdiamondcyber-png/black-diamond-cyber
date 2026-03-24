'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';

const DEMO_SITES = [
  {
    name: 'Dental Practice',
    domain: 'yourpractice.com',
    bg: '#0B1820',
    accent: '#2A9AB5',
    headline: 'Your Smile,\nOur Passion',
    sub: 'Family & cosmetic dentistry. New patients welcome.',
    cta: 'Book Appointment',
    services: ['Cleanings', 'Implants', 'Whitening', 'Crowns'],
  },
  {
    name: 'HVAC Company',
    domain: 'yourhvac.com',
    bg: '#1A0E04',
    accent: '#D4893C',
    headline: "Your City's Trusted\nHeating & Cooling",
    sub: '24/7 emergency service. Licensed & insured.',
    cta: 'Get Free Estimate',
    services: ['AC Repair', 'Furnace', 'Tune-Up', 'Install'],
  },
  {
    name: 'Plumbing Company',
    domain: 'yourplumber.com',
    bg: '#061420',
    accent: '#2887CC',
    headline: 'Fast. Reliable.\nGuaranteed.',
    sub: 'Same-day plumbing repair. No trip fee.',
    cta: 'Call Now - 24/7',
    services: ['Leak Fix', 'Drains', 'Remodel', 'Emergency'],
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh rv"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ marginBottom: '14px' }}>
            What We Build
          </div>
          <h2 className="st">
            Premium Sites, Built in <em>Days</em>
          </h2>
          <p className="sd">
            Every site is custom-built from competitor research, optimized for conversions,
            and delivered with code you own. Here&apos;s what yours could look like.
          </p>
        </motion.div>
      </div>

      {/* Demo site previews */}
      <div className="ps rv d1">
        {DEMO_SITES.map((site, idx) => (
          <motion.div
            className="pc"
            key={site.name}
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{
              duration: 0.7,
              delay: idx * 0.15,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <div className="pp">
              <div className="mini-site" style={{ background: site.bg }}>
                <div className="ms-chrome">
                  <div className="ms-dot"></div>
                  <div className="ms-dot"></div>
                  <div className="ms-dot"></div>
                  <div className="ms-addr">
                    <span>{site.domain}</span>
                  </div>
                </div>
                <div className="ms-nav">
                  <span className="ms-logo">{site.name}</span>
                  <span className="ms-links">Services &middot; About &middot; Contact</span>
                </div>
                <div
                  className="ms-hero"
                  style={{ backgroundColor: site.accent, opacity: 0.85 }}
                >
                  <div className="ms-hero-txt">
                    <div className="ms-h1" style={{ whiteSpace: 'pre-line' }}>{site.headline}</div>
                    <div className="ms-sub">{site.sub}</div>
                    <div className="ms-cta" style={{ background: site.accent }}>{site.cta}</div>
                  </div>
                </div>
                <div className="ms-services">
                  {site.services.map((svc) => (
                    <div className="ms-svc" key={svc}>
                      <div className="ms-svc-name">{svc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pm">
              <h3>{site.name} Demo</h3>
              <p>Custom-built &middot; 95+ PageSpeed &middot; Yours to own</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Founding client CTA */}
      <div className="c" style={{ marginTop: '48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: 'var(--rr)',
            padding: '48px 32px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(40,135,204,.06), transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '40px',
            background: 'rgba(52,211,153,.08)',
            border: '1px solid rgba(52,211,153,.2)',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: 'var(--green)',
            marginBottom: '20px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'p 2s infinite' }} />
            Founding Client Program
          </div>

          <h3 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(24px, 3vw, 36px)',
            color: 'var(--text)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '12px',
          }}>
            We&apos;re Selectively Onboarding <em>Founding Clients</em>
          </h3>
          <p style={{
            fontSize: '15px',
            color: 'var(--t2)',
            lineHeight: 1.8,
            maxWidth: '560px',
            margin: '0 auto 28px',
          }}>
            As a new agency, we&apos;re building our portfolio with real businesses who want premium results at founding-member pricing. Apply with a free site audit &mdash; no commitment, no pressure.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton href="/free-audit" className="bp" strength={0.25}>
              Get Your Free Site Audit
            </MagneticButton>
            <MagneticButton href="#book" className="bs" strength={0.2}>
              Book a Strategy Call
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
