'use client';

import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';

// Each demo has a distinct visual identity, layout style, and color story
const DEMO_SITES = [
  {
    name: 'Dental Practice',
    domain: 'yourpractice.com',
    bg: '#0B1820',
    accent: '#2A9AB5',
    accentLight: 'rgba(42,154,181,.15)',
    headline: 'Your Smile,\nOur Passion',
    sub: 'Family & cosmetic dentistry. New patients welcome.',
    cta: 'Book Appointment',
    services: ['Cleanings', 'Implants', 'Whitening', 'Crowns'],
    layout: 'centered',
    badge: 'New Patient Special',
    rating: '4.9★  ·  127 reviews',
    glowColor: 'rgba(42,154,181,0.18)',
  },
  {
    name: 'HVAC Company',
    domain: 'yourhvac.com',
    bg: '#140A00',
    accent: '#D4893C',
    accentLight: 'rgba(212,137,60,.15)',
    headline: "24/7 Heating\n& Cooling Experts",
    sub: 'Licensed, insured & local. Same-day service.',
    cta: 'Get Free Estimate',
    services: ['AC Repair', 'Furnace', 'Tune-Up', 'Install'],
    layout: 'split',
    badge: 'Emergency Available',
    rating: 'Serving since 2008',
    glowColor: 'rgba(212,137,60,0.18)',
  },
  {
    name: 'Plumbing Company',
    domain: 'yourplumber.com',
    bg: '#041018',
    accent: '#2887CC',
    accentLight: 'rgba(40,135,204,.15)',
    headline: 'Fast. Reliable.\nGuaranteed.',
    sub: 'Same-day plumbing repair. No trip charge.',
    cta: 'Call Now — 24/7',
    services: ['Leak Repair', 'Drains', 'Water Heater', 'Emergency'],
    layout: 'phone',
    badge: 'No Trip Charge',
    rating: '500+ jobs completed',
    glowColor: 'rgba(40,135,204,0.18)',
  },
];

// 3D tilt card component
function DemoCard({
  site,
  idx,
  isInView,
}: {
  site: typeof DEMO_SITES[0];
  idx: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 0.8,
        delay: idx * 0.18,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{
        boxShadow: `0 20px 60px ${site.glowColor}, 0 0 0 1px rgba(93,196,232,.08), 0 40px 80px rgba(0,0,0,0.5)`,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        // Card sizing — larger, more presence
        flex: '0 0 360px',
        scrollSnapAlign: 'start',
        background: 'var(--bg1)',
        border: '1px solid rgba(93,196,232,.06)',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Browser preview — taller for more presence */}
      <div style={{ height: '264px', overflow: 'hidden', position: 'relative' }}>
        <div
          className="mini-site"
          style={{ background: site.bg, height: '100%', overflow: 'hidden' }}
        >
          {/* macOS-style chrome — more realistic */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '7px 10px',
            background: 'rgba(0,0,0,0.65)',
            gap: 6,
            borderBottom: `1px solid ${site.accent}18`,
          }}>
            {/* Traffic lights — proper macOS sizing */}
            <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF5F57', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3)' }} />
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#FFBD2E', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3)' }} />
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28C840', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3)' }} />
            </div>
            {/* Address bar */}
            <div style={{
              flex: 1,
              height: '14px',
              borderRadius: '7px',
              background: 'rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '7px',
              gap: 4,
            }}>
              {/* Lock icon */}
              <svg width="5" height="6" viewBox="0 0 5 6" fill="none">
                <rect x="0.5" y="2.5" width="4" height="3" rx="0.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
                <path d="M1.5 2.5V1.8a1 1 0 012 0v.7" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
              </svg>
              <span style={{ fontSize: '5px', color: 'rgba(255,255,255,0.3)', fontWeight: 500, letterSpacing: 0.2 }}>
                {site.domain}
              </span>
            </div>
          </div>

          {/* Nav bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '4px 10px',
            background: 'rgba(0,0,0,0.35)',
            borderBottom: `1px solid ${site.accent}22`,
          }}>
            <span style={{
              fontSize: '6.5px',
              fontWeight: 800,
              color: site.accent,
              letterSpacing: '.3px',
              textTransform: 'uppercase',
            }}>
              {site.name.split(' ')[0]}
            </span>
            <span style={{ fontSize: '4px', color: `${site.accent}88`, letterSpacing: '.3px' }}>
              Services · About · Contact
            </span>
          </div>

          {/* Urgent badge */}
          <div style={{
            background: site.accentLight,
            borderBottom: `1px solid ${site.accent}33`,
            padding: '4px 10px',
            fontSize: '7px',
            fontWeight: 700,
            color: site.accent,
            letterSpacing: '0.8px',
            textAlign: 'center',
          }}>
            {site.badge}
          </div>

          {/* Layout variants */}
          {site.layout === 'centered' && (
            <div style={{ padding: '12px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: '6px', color: site.accent, fontWeight: 700, letterSpacing: '1px', marginBottom: '5px', opacity: 0.8 }}>
                {site.rating}
              </div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#DEE0E7', fontWeight: 400, lineHeight: 1.3, marginBottom: '5px', whiteSpace: 'pre-line' }}>
                {site.headline}
              </div>
              <div style={{ fontSize: '6.5px', color: '#7E8396', marginBottom: '8px' }}>{site.sub}</div>
              <div style={{
                display: 'inline-block',
                background: site.accent,
                color: '#fff',
                fontSize: '6px',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '40px',
                letterSpacing: '0.5px',
                marginBottom: '10px',
              }}>
                {site.cta}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginTop: '4px' }}>
                {site.services.map((svc) => (
                  <div key={svc} style={{
                    background: site.accentLight,
                    border: `1px solid ${site.accent}33`,
                    borderRadius: '4px',
                    padding: '4px 6px',
                    fontSize: '6px',
                    color: site.accent,
                    fontWeight: 600,
                    textAlign: 'center',
                  }}>
                    {svc}
                  </div>
                ))}
              </div>
            </div>
          )}

          {site.layout === 'split' && (
            <div style={{ padding: '10px' }}>
              <div style={{
                background: site.accentLight,
                borderRadius: '6px',
                padding: '8px 10px',
                marginBottom: '8px',
              }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '10px', color: '#DEE0E7', fontWeight: 400, lineHeight: 1.3, whiteSpace: 'pre-line', marginBottom: '4px' }}>
                  {site.headline}
                </div>
                <div style={{ fontSize: '6px', color: '#7E8396', marginBottom: '6px' }}>{site.sub}</div>
                <div style={{
                  background: site.accent,
                  color: '#fff',
                  fontSize: '6px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  letterSpacing: '0.5px',
                }}>
                  {site.cta}
                </div>
              </div>
              <div style={{ fontSize: '6px', color: `${site.accent}99`, fontWeight: 700, marginBottom: '5px', letterSpacing: '0.5px' }}>OUR SERVICES</div>
              {site.services.map((svc) => (
                <div key={svc} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 0',
                  borderBottom: `1px solid ${site.accent}11`,
                  fontSize: '6.5px',
                  color: '#7E8396',
                }}>
                  <span style={{ color: site.accent, fontSize: '8px' }}>✓</span>
                  {svc}
                </div>
              ))}
            </div>
          )}

          {site.layout === 'phone' && (
            <div style={{ padding: '10px' }}>
              <div style={{
                textAlign: 'center',
                background: site.accent,
                borderRadius: '6px',
                padding: '8px',
                marginBottom: '8px',
              }}>
                <div style={{ fontSize: '7px', color: 'rgba(255,255,255,.8)', marginBottom: '2px' }}>CALL US NOW — 24/7</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#fff', fontWeight: 400, letterSpacing: '0.5px' }}>
                  (555) 000-0000
                </div>
              </div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '10px', color: '#DEE0E7', fontWeight: 400, lineHeight: 1.3, whiteSpace: 'pre-line', marginBottom: '4px' }}>
                {site.headline}
              </div>
              <div style={{ fontSize: '6px', color: '#7E8396', marginBottom: '8px' }}>{site.sub}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                {site.services.map((svc) => (
                  <div key={svc} style={{
                    background: site.accentLight,
                    border: `1px solid ${site.accent}33`,
                    borderRadius: '4px',
                    padding: '4px 6px',
                    fontSize: '6px',
                    color: '#DEE0E7',
                    fontWeight: 600,
                  }}>
                    <span style={{ color: site.accent }}>▸ </span>{svc}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '6px', color: `${site.accent}99`, textAlign: 'center', marginTop: '7px', fontWeight: 600 }}>
                {site.rating}
              </div>
            </div>
          )}
        </div>

        {/* Hover glow overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at 50% 100%, ${site.glowColor}, transparent 70%)`,
            pointerEvents: 'none',
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>

      {/* Card footer */}
      <div style={{
        padding: '18px 20px',
        borderTop: `1px solid rgba(93,196,232,.06)`,
      }}>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '15px',
          color: 'var(--text)',
          fontWeight: 700,
          marginBottom: '4px',
          letterSpacing: 0,
        }}>
          {site.name} Demo
        </h3>
        <p style={{
          fontSize: '11px',
          color: 'var(--cyan)',
          fontWeight: 600,
          letterSpacing: '0.3px',
          opacity: 0.8,
        }}>
          Custom-built &middot; 95+ PageSpeed &middot; Yours to own
        </p>
      </div>

      {/* Subtle bottom glow on the card itself */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${site.accent}44, transparent)`,
        pointerEvents: 'none',
      }} />
    </motion.div>
  );
}

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

      {/* Demo site previews — scrollable row, larger cards */}
      <div style={{
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        padding: '8px 24px 24px',
        scrollbarWidth: 'none',
        scrollSnapType: 'x mandatory',
        perspective: '1200px',
      }}
        className="rv d1"
      >
        <style dangerouslySetInnerHTML={{ __html: `
          ::-webkit-scrollbar { display: none; }
        ` }} />
        {DEMO_SITES.map((site, idx) => (
          <DemoCard
            key={site.name}
            site={site}
            idx={idx}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Founding client CTA */}
      <div className="c" style={{ marginTop: '32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
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
