'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DEMOS = [
  {
    type: 'General & Family Dentistry',
    name: 'Bright Smile Family Dental',
    features: [
      'Online appointment booking',
      'Insurance verification widget',
      'New patient forms (digital)',
      'Google Maps integration',
      'Before & after gallery',
    ],
    gradient: 'linear-gradient(135deg, #0A1828 0%, #0F2A3D 50%, #0A1828 100%)',
    accent: 'var(--cyan)',
    mockupSections: ['Hero with smile imagery', 'Services grid', 'Patient reviews carousel', 'Book Now sticky CTA'],
  },
  {
    type: 'Cosmetic & Implant Dentistry',
    name: 'Pinnacle Cosmetic Dentistry',
    features: [
      'Before/after case gallery',
      'Financing calculator widget',
      'Virtual consultation booking',
      'Video testimonials section',
      'Procedure education pages',
    ],
    gradient: 'linear-gradient(135deg, #0C0F16 0%, #1A1040 50%, #0C0F16 100%)',
    accent: '#8B5CF6',
    mockupSections: ['Cinematic hero with video', 'Smile transformations', 'Financing options', 'Doctor credentials'],
  },
  {
    type: 'Pediatric Dentistry',
    name: 'Little Stars Pediatric Dental',
    features: [
      'Kid-friendly animations',
      'Parent portal & forms',
      'Age-specific service pages',
      'Office tour virtual walkthrough',
      'Emergency contact quick-dial',
    ],
    gradient: 'linear-gradient(135deg, #0A1828 0%, #0A2818 50%, #0A1828 100%)',
    accent: 'var(--green)',
    mockupSections: ['Playful hero illustration', 'Meet the team', 'First visit guide', 'Parent resources'],
  },
] as const;

function MockupCard({
  demo,
  index,
}: {
  demo: (typeof DEMOS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{
        y: -8,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{
        background: 'var(--bg1)',
        border: '1px solid var(--hr)',
        borderRadius: 'var(--rr)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Browser mockup header */}
      <div
        style={{
          background: demo.gradient,
          padding: '20px 20px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#EF4444',
              opacity: 0.7,
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#F59E0B',
              opacity: 0.7,
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22C55E',
              opacity: 0.7,
            }}
          />
          <div
            style={{
              flex: 1,
              marginLeft: '8px',
              padding: '4px 12px',
              background: 'rgba(255,255,255,.05)',
              borderRadius: '6px',
              fontSize: '10px',
              color: 'var(--t3)',
              fontFamily: 'monospace',
            }}
          >
            {demo.name.toLowerCase().replace(/\s+/g, '')}.com
          </div>
        </div>

        {/* Page layout mockup */}
        <div
          style={{
            background: 'rgba(0,0,0,.3)',
            borderRadius: '8px 8px 0 0',
            padding: '16px',
            minHeight: '160px',
          }}
        >
          {demo.mockupSections.map((section, i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + index * 0.12 + i * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 10px',
                background:
                  i === 0
                    ? `linear-gradient(90deg, ${demo.accent}15, transparent)`
                    : 'rgba(255,255,255,.02)',
                borderRadius: '6px',
                marginBottom: '6px',
                borderLeft: i === 0 ? `2px solid ${demo.accent}` : '2px solid transparent',
              }}
            >
              <div
                style={{
                  width: i === 0 ? '100%' : `${70 - i * 12}%`,
                  height: '6px',
                  borderRadius: '3px',
                  background:
                    i === 0
                      ? `linear-gradient(90deg, ${demo.accent}40, ${demo.accent}10)`
                      : 'rgba(255,255,255,.06)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '24px 20px' }}>
        <div
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: demo.accent,
            marginBottom: '8px',
          }}
        >
          Demo Design
        </div>
        <h3
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: '20px',
            color: 'var(--text)',
            fontWeight: 400,
            marginBottom: '4px',
            lineHeight: 1.2,
          }}
        >
          {demo.name}
        </h3>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--t3)',
            marginBottom: '16px',
          }}
        >
          {demo.type}
        </p>

        {/* Feature list */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {demo.features.map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--t2)',
                lineHeight: 1.5,
                marginBottom: '6px',
              }}
            >
              <span style={{ color: demo.accent, fontSize: '12px', flexShrink: 0 }}>
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          <div className="tag" style={{ display: 'inline-flex' }}>
            Our Work
          </div>
          <h2 className="st">
            Demo Designs for <em>Dental Practices</em>
          </h2>
          <p className="sd">
            Every site is custom-built for the practice type. Here&rsquo;s what
            a BDC-built dental website looks like.
          </p>
        </motion.div>

        <div id="showcase-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {DEMOS.map((demo, i) => (
            <MockupCard key={demo.name} demo={demo} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '32px',
          }}
        >
          <a
            href="#pricing"
            className="bs"
            style={{ display: 'inline-flex' }}
          >
            See Pricing &amp; Get Started →
          </a>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:768px){#showcase-grid{grid-template-columns:1fr!important}}
      ` }} />
    </section>
  );
}
