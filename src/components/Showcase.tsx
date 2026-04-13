'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const DEMOS = [
  {
    slug: 'dental',
    image: '/images/demo-dental.png',
    url: 'canyonlakefamilydentistry.com',
    href: '/demo/dental',
    name: 'Canyon Lake Family Dentistry',
    industry: 'Dental',
    description:
      'Full-service dental practice site with online booking, HIPAA-compliant forms, and local SEO.',
    features: ['Online Booking', 'HIPAA Forms', 'Patient Portal', 'Local SEO'],
    accent: '#5DC4E8',
  },
  {
    slug: 'hvac',
    image: '/images/demo-hvac.png',
    url: 'hillcountryheatingandair.com',
    href: '/demo/hvac',
    name: 'Hill Country Heating & Air',
    industry: 'HVAC',
    description:
      'Emergency-first HVAC site with service area pages, review integration, and mobile-optimized CTAs.',
    features: [
      'Emergency Service CTA',
      'Service Area Pages',
      'Review Integration',
      'Mobile-First',
    ],
    accent: '#F59E0B',
  },
  {
    slug: 'plumbing',
    image: '/images/demo-plumbing.png',
    url: 'clearwaterplumbingco.com',
    href: '/demo/plumbing',
    name: 'Clearwater Plumbing Co.',
    industry: 'Plumbing',
    description:
      'Trust-building plumbing site with flat-rate pricing, before/after gallery, and 24/7 emergency line.',
    features: [
      'Flat-Rate Pricing',
      'Emergency Line',
      'Before/After Gallery',
      'Booking Form',
    ],
    accent: '#2887CC',
  },
  {
    slug: 'medspa',
    image: '/images/demo-medspa.png',
    url: 'serenitymedspa.com',
    href: '/demo/medspa',
    name: 'Serenity Med Spa',
    industry: 'Med Spa',
    description:
      'Luxury med spa site with consultation booking, treatment gallery, and new client offers.',
    features: [
      'Consultation Booking',
      'Treatment Gallery',
      'New Client Offer',
      'Team Profiles',
    ],
    accent: '#8B5CF6',
  },
] as const;

function PortfolioCard({
  demo,
  index,
}: {
  demo: (typeof DEMOS)[number];
  index: number;
}) {
  return (
    <motion.a
      href={demo.href}
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
        boxShadow:
          '0 16px 48px rgba(0,0,0,.4), 0 0 40px rgba(93,196,232,.04)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#0D1117',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          background: '#1a1f2e',
          padding: '10px 14px',
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
            opacity: 0.8,
          }}
        />
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#F59E0B',
            opacity: 0.8,
          }}
        />
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#22C55E',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            flex: 1,
            marginLeft: '8px',
            padding: '4px 12px',
            background: 'rgba(255,255,255,.06)',
            borderRadius: '6px',
            fontSize: '11px',
            color: 'rgba(255,255,255,.5)',
            fontFamily: 'monospace',
          }}
        >
          {demo.url}
        </div>
      </div>

      {/* Screenshot */}
      <div style={{ position: 'relative', width: '100%', height: '380px' }}>
        <Image
          src={demo.image}
          alt={`${demo.name} website screenshot`}
          width={1280}
          height={700}
          priority={index < 2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </div>

      {/* Card info */}
      <div style={{ padding: '20px' }}>
        <span
          style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: demo.accent,
            marginBottom: '8px',
          }}
        >
          {demo.industry}
        </span>
        <h3
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: '20px',
            color: 'var(--text)',
            fontWeight: 600,
            marginBottom: '6px',
            lineHeight: 1.2,
          }}
        >
          {demo.name}
        </h3>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--t2)',
            lineHeight: 1.5,
            marginBottom: '14px',
          }}
        >
          {demo.description}
        </p>

        <span
          className="svc-link"
          style={{ display: 'inline-block', pointerEvents: 'none' }}
        >
          View Live Demo →
        </span>
      </div>
    </motion.a>
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--t2)' }}>5</span>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text)' }}>Our Work</span>
          </div>
          <h2 className="st">
            Some of our <em>work.</em>
          </h2>
        </motion.div>

        <div
          id="showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          {DEMOS.map((demo, i) => (
            <PortfolioCard key={demo.slug} demo={demo} index={i} />
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
