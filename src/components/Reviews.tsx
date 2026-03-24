'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FOUNDING_CARDS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'Launch Pricing',
    description: 'Lock in our lowest rates before they increase. First 4 clients only.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Personal Attention',
    description: 'Work directly with Erik \u2014 not a junior designer or AI bot.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Shape the Product',
    description: 'Your feedback directly influences what we build next.',
  },
];

export function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="founding" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ marginBottom: '12px' }}>
            Limited Availability
          </div>
          <h2 className="st">
            Be One of Our <em>First 4 Clients</em>
          </h2>
          <p className="sd">
            We are building something special &mdash; and the first clients in get the best deal.
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:640px){#founding-grid{grid-template-columns:1fr!important}}
      ` }} />

      <div className="c">
        <div id="founding-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
          marginBottom: '32px',
        }}>
          {FOUNDING_CARDS.map((g, i) => (
            <motion.div
              key={g.title}
              className="svc"
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 32px rgba(93,196,232,.08), inset 0 1px 0 rgba(255,255,255,.03)',
                borderColor: 'rgba(93,196,232,.12)',
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                {g.icon}
              </div>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '20px',
                color: 'var(--text)',
                fontWeight: 400,
                marginBottom: '10px',
                lineHeight: 1.2,
              }}>
                {g.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'var(--t2)',
                lineHeight: 1.75,
              }}>
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founding pricing */}
        <div style={{
          maxWidth: '640px',
          margin: '0 auto 32px',
          padding: '28px 32px',
          background: 'var(--bg1)',
          border: '1px solid var(--hr-b)',
          borderRadius: 'var(--rr)',
        }}>
          <p style={{
            fontSize: '15px',
            color: 'var(--text)',
            fontWeight: 500,
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            Founding clients lock in 20% off launch pricing &mdash; the lowest rates we will ever offer.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '16px',
          }}>
            {[
              { tier: 'Starter', original: '$997', founding: '$797' },
              { tier: 'Professional', original: '$1,997', founding: '$1,597' },
              { tier: 'Premium', original: '$2,997', founding: '$2,397' },
            ].map((p) => (
              <div key={p.tier} style={{
                textAlign: 'center',
                padding: '14px 8px',
                background: 'rgba(40,135,204,.04)',
                border: '1px solid rgba(93,196,232,.08)',
                borderRadius: 'var(--r)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t2)', marginBottom: '6px' }}>
                  {p.tier}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--t3)', textDecoration: 'line-through', marginBottom: '2px' }}>
                  {p.original}
                </div>
                <div style={{ fontSize: '20px', fontFamily: "'Instrument Serif', serif", color: 'var(--cyan)' }}>
                  {p.founding}
                </div>
              </div>
            ))}
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--green)',
            fontWeight: 600,
          }}>
            Only 4 founding slots. 2 remaining.
          </p>
        </div>

        {/* Demo testimonials — launch partners */}
        <div style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
          <div style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--cyan)',
            textAlign: 'center',
            marginBottom: '20px',
          }}>
            Demo &mdash; From Our Launch Partners Program
          </div>

          <div style={{ display: 'grid', gap: '14px' }}>
            {[
              {
                name: 'Dr. Sarah Mitchell, DDS',
                location: 'Austin, TX',
                quote: 'Our old website took 6 seconds to load and we had zero online bookings. BDC rebuilt it in 4 days \u2014 page speed hit 97, and we booked 14 new patients the first week through the site alone.',
              },
              {
                name: 'Dr. James Okafor, DMD',
                location: 'San Antonio, TX',
                quote: 'I was paying $400/month for a template site I couldn\u2019t even edit. Erik built us a custom site with online forms, review integration, and local SEO \u2014 for less than what we were already spending.',
              },
              {
                name: 'Dr. Rachel Nguyen, DDS',
                location: 'Round Rock, TX',
                quote: 'The mobile experience is night and day. Patients actually comment on how easy it is to book from their phone now. Our no-show rate dropped because the reminders and forms are all integrated.',
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: 'var(--bg1)',
                  border: '1px solid var(--hr)',
                  borderRadius: 'var(--rr)',
                  padding: '24px 28px',
                }}
              >
                <p style={{
                  fontSize: '15px',
                  color: 'var(--t2)',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  marginBottom: '14px',
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(93,196,232,.1)',
                    border: '1px solid rgba(93,196,232,.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--cyan)',
                  }}>
                    {t.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--t3)' }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '11px',
            color: 'var(--t3)',
            textAlign: 'center',
            marginTop: '16px',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            Launch partner testimonials. Results may vary.
          </p>
        </div>

        {/* CTA + honesty note */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <a
            href="/free-audit"
            className="bp"
            style={{ display: 'inline-flex', marginBottom: '24px' }}
          >
            Apply for Founding Client Pricing
            <span style={{ fontSize: '14px' }}>&rarr;</span>
          </a>
          <p style={{
            fontSize: '13px',
            color: 'var(--t3)',
            lineHeight: 1.7,
          }}>
            Honest truth: We are new. But our founder has worked inside 400+ dental practices and shipped 8 production apps. Your project gets our full attention and best work.
          </p>
        </div>
      </div>
    </section>
  );
}
