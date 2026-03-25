'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DEMOS = [
  {
    type: 'General & Family Dentistry',
    name: 'Bright Smile Family Dental',
    href: '/demo/dental',
    features: [
      'Online appointment booking',
      'Insurance verification widget',
      'New patient forms (digital)',
      'Google Maps integration',
      'Before & after gallery',
    ],
    accent: 'var(--cyan)',
    accentRaw: '#5DC4E8',
    navItems: ['Services', 'About', 'Insurance', 'Book Now'],
    heroHeadline: 'Your Family Deserves a Healthy Smile',
    heroSub: 'Accepting new patients \u2014 book your visit today',
    services: ['Cleanings & Exams', 'Fillings & Crowns', 'Pediatric Care'],
  },
  {
    type: 'HVAC Services',
    name: 'Summit Air Comfort',
    href: '/demo/hvac',
    features: [
      'Emergency service scheduling',
      'Seasonal maintenance plans',
      'Financing options displayed',
      'Service area map',
      'Customer testimonials',
    ],
    accent: '#F59E0B',
    accentRaw: '#F59E0B',
    navItems: ['Services', 'Areas', 'Financing', 'Call Now'],
    heroHeadline: 'Stay Comfortable Year-Round',
    heroSub: 'AC repair \u2022 Heating \u2022 Installation',
    services: ['AC Repair', 'Furnace Install', 'Maintenance Plans'],
  },
  {
    type: 'Plumbing Services',
    name: 'Iron Flow Plumbing',
    href: '/demo/plumbing',
    features: [
      '24/7 emergency booking',
      'Upfront pricing estimates',
      'Licensed & insured badges',
      'Service area coverage',
      'Before & after project gallery',
    ],
    accent: 'var(--blue)',
    accentRaw: '#2887CC',
    navItems: ['Services', 'Emergency', 'Reviews', 'Book Now'],
    heroHeadline: 'Fast, Reliable Plumbing You Can Trust',
    heroSub: 'Emergency \u2022 Repairs \u2022 Installation',
    services: ['Emergency Repair', 'Water Heaters', 'Drain Cleaning'],
  },
  {
    type: 'Med Spa & Aesthetics',
    name: 'Glow Luxe Med Spa',
    href: '/demo/medspa',
    features: [
      'Online treatment booking',
      'Before/after photo gallery',
      'Treatment menu with pricing',
      'Virtual consultation option',
      'Loyalty program integration',
    ],
    accent: '#8B5CF6',
    accentRaw: '#8B5CF6',
    navItems: ['Treatments', 'Gallery', 'Specials', 'Book'],
    heroHeadline: 'Reveal Your Best Self',
    heroSub: 'Botox \u2022 Fillers \u2022 Laser \u2022 Facials',
    services: ['Botox & Fillers', 'Laser Treatments', 'Facials & Peels'],
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
        y: -6,
        boxShadow: '0 16px 48px rgba(0,0,0,.4), 0 0 40px rgba(93,196,232,.04)',
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
      {/* Browser chrome */}
      <div
        style={{
          background: 'rgba(255,255,255,.03)',
          padding: '10px 14px',
          borderBottom: '1px solid var(--hr)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
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
            padding: '3px 10px',
            background: 'rgba(255,255,255,.04)',
            borderRadius: '4px',
            fontSize: '9px',
            color: 'var(--t3)',
            fontFamily: 'monospace',
          }}
        >
          {demo.name.toLowerCase().replace(/\s+/g, '')}.com
        </div>
      </div>

      {/* Website preview */}
      <div style={{ padding: '0', background: '#060A10' }}>
        {/* Nav bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 14px',
            borderBottom: '1px solid rgba(255,255,255,.06)',
          }}
        >
          <div
            style={{
              fontSize: '9px',
              fontWeight: 700,
              color: demo.accent,
              letterSpacing: '0.5px',
            }}
          >
            {demo.name.split(' ').slice(0, 2).join(' ')}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {demo.navItems.map((item, i) => (
              <span
                key={item}
                style={{
                  fontSize: '7px',
                  color:
                    i === demo.navItems.length - 1
                      ? '#060A10'
                      : 'rgba(222,224,231,.5)',
                  fontWeight: i === demo.navItems.length - 1 ? 700 : 400,
                  background:
                    i === demo.navItems.length - 1
                      ? demo.accent
                      : 'transparent',
                  padding:
                    i === demo.navItems.length - 1 ? '2px 6px' : '2px 0',
                  borderRadius: '3px',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Hero section */}
        <div
          style={{
            padding: '20px 14px 16px',
            position: 'relative',
            background: `linear-gradient(135deg, ${demo.accentRaw}08, transparent)`,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '48px',
              borderRadius: '6px',
              background: `linear-gradient(135deg, ${demo.accentRaw}12, ${demo.accentRaw}04)`,
              border: `1px solid ${demo.accentRaw}15`,
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={demo.accentRaw}
              strokeWidth="1.2"
              opacity={0.4}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--text)',
              lineHeight: 1.3,
              marginBottom: '4px',
            }}
          >
            {demo.heroHeadline}
          </div>
          <div
            style={{
              fontSize: '8px',
              color: 'var(--t3)',
              marginBottom: '10px',
            }}
          >
            {demo.heroSub}
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span
              style={{
                fontSize: '7px',
                fontWeight: 700,
                padding: '3px 10px',
                background: demo.accent,
                color: '#060A10',
                borderRadius: '3px',
              }}
            >
              Book Appointment
            </span>
            <span
              style={{
                fontSize: '7px',
                fontWeight: 600,
                padding: '3px 10px',
                border: `1px solid ${demo.accentRaw}40`,
                color: demo.accent,
                borderRadius: '3px',
              }}
            >
              Call Now
            </span>
          </div>
        </div>

        {/* Services grid */}
        <div style={{ padding: '10px 14px 14px' }}>
          <div
            style={{
              fontSize: '7px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: demo.accent,
              marginBottom: '8px',
            }}
          >
            Our Services
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '6px',
            }}
          >
            {demo.services.map((svc) => (
              <div
                key={svc}
                style={{
                  padding: '8px 6px',
                  background: 'rgba(255,255,255,.02)',
                  border: '1px solid rgba(255,255,255,.05)',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: `${demo.accentRaw}15`,
                    margin: '0 auto 4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '7px', color: demo.accent }}>
                    +
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '6.5px',
                    color: 'var(--t2)',
                    lineHeight: 1.3,
                  }}
                >
                  {svc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card content below mockup */}
      <div style={{ padding: '20px' }}>
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
          {demo.type}
        </div>
        <h3
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: '18px',
            color: 'var(--text)',
            fontWeight: 600,
            marginBottom: '4px',
            lineHeight: 1.2,
          }}
        >
          {demo.name}
        </h3>

        {/* Feature list */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 16px' }}>
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
                marginBottom: '5px',
              }}
            >
              <span
                style={{
                  color: demo.accent,
                  fontSize: '12px',
                  flexShrink: 0,
                }}
              >
                &#10003;
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Live demo link */}
        <a
          href={demo.href}
          className="svc-link"
          style={{ display: 'inline-block' }}
        >
          View Live Demo →
        </a>
      </div>
    </motion.div>
  );
}

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

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
          <h2
            className="st"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 700,
            }}
          >
            Demo Sites for <em>Every Industry</em>
          </h2>
          <p className="sd" style={{ maxWidth: '520px' }}>
            Every site is custom-built for your industry. Click any demo to see
            it live.
          </p>
        </motion.div>

        <div
          id="showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
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
            href="#book"
            className="bp"
            style={{ display: 'inline-flex' }}
          >
            Get Started &mdash; Book a Free Call →
          </a>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media(max-width:768px){#showcase-grid{grid-template-columns:1fr!important}}
      `,
        }}
      />
    </section>
  );
}
