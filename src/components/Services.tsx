'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: 'High-Performance Websites',
    tags: ['Custom Design', '7-Day Build', 'Code Ownership'],
  },
  {
    title: 'AI Search Optimization',
    tags: ['ChatGPT', 'Google AI', 'Perplexity'],
    badge: 'GEO',
  },
  {
    title: 'Local SEO & Maps',
    tags: ['Map Pack', 'Google Business', 'Citations'],
  },
  {
    title: 'AI Patient Concierge',
    tags: ['24/7 Booking', 'Smart Routing', 'HIPAA-Aware'],
  },
  {
    title: 'Review Generation',
    tags: ['Google Reviews', 'Automated', 'Post-Visit SMS'],
  },
  {
    title: 'Missed Call Recovery',
    tags: ['Instant SMS', 'AI Follow-Up', 'No-Show Recovery'],
  },
] as const;

type ServiceItem = (typeof SERVICES)[number];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), {
    stiffness: 200,
    damping: 20,
  });
  const glareX = useTransform(x, [0, 1], ['0%', '100%']);
  const glareY = useTransform(y, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -6,
        boxShadow:
          '0 16px 48px rgba(0,0,0,.4), 0 0 40px rgba(93,196,232,.06)',
        borderColor: 'rgba(93,196,232,.15)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="svc gsap-svc-card"
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(93,196,232,.07), transparent 60%)`,
          ),
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </motion.div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 40,
          filter: 'blur(6px)',
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
          },
        });
      }
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.gsap-svc-card');
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          filter: 'blur(6px)',
          duration: 0.8,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ scrollMarginTop: '80px', padding: '140px 0' }}
    >
      <div className="c">
        {/* Numbered section badge */}
        <div className="sh sc" ref={headerRef}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.06)',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--t2)',
              }}
            >
              1
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--text)',
              }}
            >
              Our Services
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              marginBottom: '16px',
            }}
          >
            What we specialize in.
          </h2>
        </div>

        <div
          className="svcs"
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {SERVICES.map((svc: ServiceItem) => (
            <TiltCard key={svc.title}>
              {'badge' in svc && svc.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: 'var(--cyan)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(93,196,232,.2)',
                    background: 'rgba(93,196,232,.06)',
                    zIndex: 3,
                  }}
                >
                  {svc.badge}
                </div>
              )}
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {svc.title}
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginTop: 'auto',
                }}
              >
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--t2)',
                      background: 'rgba(255,255,255,.04)',
                      border: '1px solid rgba(255,255,255,.06)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Single CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a href="#book" className="bp">
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
