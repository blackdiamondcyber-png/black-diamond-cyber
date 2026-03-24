'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
    // Centered hero layout with trust badges
    layout: 'centered',
    badge: 'New Patient Special',
    rating: '4.9★  ·  127 reviews',
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
    // Left-aligned split layout with urgency bar
    layout: 'split',
    badge: '🔥 Emergency Available',
    rating: 'Serving since 2008',
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
    // Card-forward layout with phone number prominent
    layout: 'phone',
    badge: 'No Trip Charge',
    rating: '500+ jobs completed',
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
              <div className="mini-site" style={{ background: site.bg, height: '100%', overflow: 'hidden' }}>
                {/* Browser chrome */}
                <div className="ms-chrome">
                  <div className="ms-dot" />
                  <div className="ms-dot" />
                  <div className="ms-dot" />
                  <div className="ms-addr">
                    <span>{site.domain}</span>
                  </div>
                </div>

                {/* Nav bar */}
                <div className="ms-nav" style={{ borderBottom: `1px solid ${site.accent}22` }}>
                  <span className="ms-logo" style={{ color: site.accent }}>{site.name.split(' ')[0]}</span>
                  <span className="ms-links" style={{ color: `${site.accent}99` }}>Services · About · Contact</span>
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

                {site.layout === 'centered' && (
                  /* Centered layout — clean, trust-forward */
                  <div style={{ padding: '12px 10px', textAlign: 'center' }}>
                    <div style={{
                      fontSize: '6px',
                      color: site.accent,
                      fontWeight: 700,
                      letterSpacing: '1px',
                      marginBottom: '5px',
                      opacity: 0.8,
                    }}>{site.rating}</div>
                    <div style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '11px',
                      color: '#DEE0E7',
                      fontWeight: 400,
                      lineHeight: 1.3,
                      marginBottom: '5px',
                      whiteSpace: 'pre-line',
                    }}>{site.headline}</div>
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
                    }}>{site.cta}</div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '4px',
                      marginTop: '4px',
                    }}>
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
                        }}>{svc}</div>
                      ))}
                    </div>
                  </div>
                )}

                {site.layout === 'split' && (
                  /* Split layout — urgency/utility focus */
                  <div style={{ padding: '10px' }}>
                    <div style={{
                      background: site.accentLight,
                      borderRadius: '6px',
                      padding: '8px 10px',
                      marginBottom: '8px',
                    }}>
                      <div style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '10px',
                        color: '#DEE0E7',
                        fontWeight: 400,
                        lineHeight: 1.3,
                        whiteSpace: 'pre-line',
                        marginBottom: '4px',
                      }}>{site.headline}</div>
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
                      }}>{site.cta}</div>
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
                  /* Phone-forward layout — lead gen focus */
                  <div style={{ padding: '10px' }}>
                    <div style={{
                      textAlign: 'center',
                      background: site.accent,
                      borderRadius: '6px',
                      padding: '8px',
                      marginBottom: '8px',
                    }}>
                      <div style={{ fontSize: '7px', color: 'rgba(255,255,255,.8)', marginBottom: '2px' }}>CALL US NOW — 24/7</div>
                      <div style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '13px',
                        color: '#fff',
                        fontWeight: 400,
                        letterSpacing: '0.5px',
                      }}>(555) 000-0000</div>
                    </div>
                    <div style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '10px',
                      color: '#DEE0E7',
                      fontWeight: 400,
                      lineHeight: 1.3,
                      whiteSpace: 'pre-line',
                      marginBottom: '4px',
                    }}>{site.headline}</div>
                    <div style={{ fontSize: '6px', color: '#7E8396', marginBottom: '8px' }}>{site.sub}</div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '4px',
                    }}>
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
                    <div style={{ fontSize: '6px', color: `${site.accent}99`, textAlign: 'center', marginTop: '7px', fontWeight: 600 }}>{site.rating}</div>
                  </div>
                )}
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
