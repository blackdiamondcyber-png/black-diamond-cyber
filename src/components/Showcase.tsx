'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const DEMOS = [
  {
    slug: 'dental',
    image: '/images/demo-dental.png',
    href: '/demo/dental',
    name: 'Canyon Lake Family Dentistry',
    industry: 'Dental',
    accent: '#5DC4E8',
    stats: ['Lighthouse 98', '< 0.8s Load', 'Mobile-First'],
  },
  {
    slug: 'hvac',
    image: '/images/demo-hvac.png',
    href: '/demo/hvac',
    name: 'Hill Country Heating & Air',
    industry: 'HVAC',
    accent: '#F59E0B',
    stats: ['Lighthouse 96', '< 1s Load', 'Mobile-First'],
  },
  {
    slug: 'plumbing',
    image: '/images/demo-plumbing.png',
    href: '/demo/plumbing',
    name: 'Clearwater Plumbing Co.',
    industry: 'Plumbing',
    accent: '#2887CC',
    stats: ['Lighthouse 97', '< 0.9s Load', 'Mobile-First'],
  },
  {
    slug: 'medspa',
    image: '/images/demo-medspa.png',
    href: '/demo/medspa',
    name: 'Serenity Med Spa',
    industry: 'Med Spa',
    accent: '#8B5CF6',
    stats: ['Lighthouse 95', '< 1s Load', 'Mobile-First'],
  },
] as const;

/*
 * LeftClick case study pattern: clean image + name + one line.
 * No browser chrome, no fake URLs, no feature pills.
 * Image with rounded corners, hover scale, and subtle lift.
 */
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      style={{
        display: 'block',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {/* Image — clean, rounded, no browser chrome */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#111113',
          marginBottom: '16px',
        }}
      >
        <Image
          src={demo.image}
          alt={`${demo.name} website`}
          width={1280}
          height={960}
          priority={index < 2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'transform .5s cubic-bezier(.16,1,.3,1)',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLImageElement).style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLImageElement).style.transform = 'scale(1)';
          }}
        />
      </div>

      {/* Info — name + industry tag + stats */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <h3
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '17px',
                color: 'var(--text)',
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: '4px',
              }}
            >
              {demo.name}
            </h3>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: demo.accent,
              }}
            >
              {demo.industry}
            </span>
          </div>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--t2)',
              transition: 'color .2s',
            }}
          >
            View Demo &rarr;
          </span>
        </div>
        {/* Micro-stats */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {demo.stats.map((stat) => (
            <span
              key={stat}
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                color: 'var(--t3)',
                padding: '3px 10px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.05)',
              }}
            >
              {stat}
            </span>
          ))}
        </div>
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
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--t2)' }}>4</span>
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
            gap: '32px',
          }}
        >
          {DEMOS.map((demo, i) => (
            <PortfolioCard key={demo.slug} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
