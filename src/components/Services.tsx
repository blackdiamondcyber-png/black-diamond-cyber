'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { IconBolt, IconBot, IconStar, IconPhone, IconMapPin, IconBarChart } from '@/components/Icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type ServiceIconComponent = React.FC<{ size?: number; color?: string }>;

type Service = {
  Icon: ServiceIconComponent;
  title: string;
  badge?: string;
  description: string;
  tags: readonly string[];
  features: readonly string[];
  highlight?: boolean;
};

const SERVICES: Service[] = [
  {
    Icon: IconBolt,
    title: 'Dental Practice Websites',
    badge: 'Most Popular',
    description:
      'A website that makes patients feel confident before they ever walk in. Online booking, insurance info, emergency CTAs — all loading in under 2 seconds.',
    tags: ['Online Booking', '7-Day Delivery', 'PageSpeed 95+'],
    features: [
      'Rank in the top 3 when patients search "dentist near me"',
      'Let patients book online 24/7 — even when your front desk is closed',
      'Know exactly how many new patients your website brings in each month',
      'Load in under 2 seconds — before patients hit the back button',
      'Custom design that matches your practice brand',
    ],
    highlight: true,
  },
  {
    Icon: IconBot,
    title: 'AI Patient Concierge',
    description:
      'Your website answers patient questions and books appointments 24/7. When a nervous patient visits at 11pm, they get instant answers — not a voicemail.',
    tags: ['24/7 Booking', 'AI-Powered', 'HIPAA-Aware'],
    features: [
      'Answer patient questions instantly, even at 2am',
      'Convert website visitors into booked appointments automatically',
      'Reduce front desk call volume by up to 40%',
      'Smart routing — new patients vs. existing, emergency vs. routine',
    ],
  },
  {
    Icon: IconStar,
    title: 'Review Generation Engine',
    description:
      'After every appointment, patients get a friendly text asking for a Google review. Go from a handful of reviews to the most-reviewed practice in your zip code.',
    tags: ['Google Reviews', 'Automated', 'Post-Visit SMS'],
    features: [
      'Get 5-star reviews on autopilot after every appointment',
      'Respond to negative reviews before they hurt your reputation',
      'Climb to the top of Google Maps local pack',
      'Monitor what patients say about you across every platform',
    ],
  },
  {
    Icon: IconPhone,
    title: 'Missed Call Recovery',
    description:
      'Every missed call gets an instant text back: "Sorry we missed you! Book online or we\'ll call you back in 10 minutes." Recover patients who would\'ve called the next practice on Google.',
    tags: ['SMS Automation', '< 30sec', 'Patient Recovery'],
    features: [
      'Instant SMS when your front desk misses a call',
      'AI follows up until they book',
      'Appointment reminder sequences',
      'No-show recovery campaigns',
    ],
  },
  {
    Icon: IconMapPin,
    title: 'Local Dental SEO',
    description:
      'Dominate the Google Map Pack when patients search "dentist near me" or "emergency dentist [your city]." Show up first — not your competitor across the street.',
    tags: ['Google Maps', 'Google Business Profile', 'AI Search'],
    features: [
      'Google Business Profile optimization',
      'Dental-specific citation building',
      'AI search visibility (ChatGPT, Perplexity, Gemini)',
      'Monthly ranking reports by keyword',
    ],
  },
  {
    Icon: IconBarChart,
    title: 'New Patient Analytics',
    description:
      'Know exactly how many new patients your website generates each month. See which channels drive bookings and which marketing dollars are wasted.',
    tags: ['Dashboard', 'ROI Tracking', 'Monthly Reports'],
    features: [
      'New patient inquiry tracking',
      'Source attribution (Google, direct, referral)',
      'Monthly performance reports',
      'Cost-per-acquisition visibility',
    ],
  },
];

function TiltCard({
  children,
  highlight,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), {
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
        boxShadow: '0 16px 48px rgba(0,0,0,.4), 0 0 40px rgba(93,196,232,.06)',
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
        border: highlight ? '1px solid rgba(40,135,204,.25)' : undefined,
        boxShadow: highlight ? '0 0 40px rgba(40,135,204,.08)' : undefined,
      }}
      className="svc gsap-svc-card"
    >
      {/* Glare overlay */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(93,196,232,.07), transparent 60%)`
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
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header reveal
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

      // Staggered card reveals
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

      // Bottom CTA strip
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="services" ref={sectionRef} style={{ scrollMarginTop: '80px' }}>
      <div className="c">
        <div className="sh sc" ref={headerRef} data-gsap-reveal>
          <div className="tag" style={{ display: 'inline-flex' }}>
            What Your Practice Gets
          </div>
          <h2 className="st">
            Not Just a Website. A <em>Patient Booking Machine.</em>
          </h2>
          <p className="sd" style={{ maxWidth: '520px' }}>
            Everything a dental practice needs to fill chairs, grow reviews, and stop losing patients to the practice down the street.
          </p>
        </div>

        <div className="svcs" ref={gridRef} data-gsap-reveal>
          {SERVICES.map((svc) => (
            <TiltCard key={svc.title} highlight={svc.highlight}>
              {/* Badge area — fixed height so titles align across cards */}
              <div style={{ minHeight: '24px', marginBottom: '4px' }}>
                {svc.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--blue)',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: '0 0 8px 8px',
                    whiteSpace: 'nowrap',
                  }}>
                    {svc.badge}
                  </div>
                )}
              </div>
              <span className="svc-icon"><svc.Icon size={28} /></span>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '12px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {svc.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: '14px',
                      color: 'var(--t2)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      lineHeight: 1.55,
                    }}
                  >
                    <span style={{ color: 'var(--green)', fontSize: '14px', marginTop: '1px', flexShrink: 0 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="svc-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="ptg hi">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#pricing" className="svc-link">
                See Pricing →
              </a>
            </TiltCard>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          ref={ctaRef}
          style={{
            marginTop: '48px',
            padding: '24px 32px',
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: 'var(--rr)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
              Not sure what your practice needs?
            </div>
            <div style={{ fontSize: '14px', color: 'var(--t2)' }}>
              Book a free 30-min call. We&apos;ll audit your current online presence and show you exactly where you&apos;re losing patients.
            </div>
          </div>
          <a
            href="#book"
            className="bp"
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            Get Free Dental Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
