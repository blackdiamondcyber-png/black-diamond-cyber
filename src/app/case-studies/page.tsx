import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';

export const metadata: Metadata = {
  title: 'Our Work — Demo Sites Built by Black Diamond Cyber',
  description:
    'See real, functional demo sites built by Black Diamond Cyber for dental, HVAC, plumbing, and med spa businesses. Not mockups — real Next.js websites with 95+ PageSpeed scores.',
  openGraph: {
    title: 'Our Work — Demo Sites Built by Black Diamond Cyber',
    description: 'Real demo sites showcasing what BDC builds for local service businesses.',
    url: 'https://bd-cyber.com/case-studies',
    siteName: 'Black Diamond Cyber',
    type: 'website',
    images: [
      {
        url: '/images/erik-pearson-founder.png',
        width: 1200,
        height: 630,
        alt: 'Black Diamond Cyber — Demo Sites Portfolio',
      },
    ],
  },
  alternates: {
    canonical: 'https://bd-cyber.com/case-studies',
  },
};

const demos = [
  {
    name: 'Canyon Lake Family Dentistry',
    type: 'Dental Practice',
    gradient: 'linear-gradient(135deg, #1E3A5F, #4ECDC4)',
    color: '#4ECDC4',
    stack: ['Next.js', 'AI Chatbot', 'Online Booking', 'Local SEO'],
    features: [
      '95+ PageSpeed score on mobile and desktop',
      'HIPAA-compliant contact and appointment forms',
      'Automated review request system',
      'Google Business Profile schema markup',
      'Service area pages for 12 surrounding cities',
    ],
    note: 'Demo site showcasing what we build for dental practices.',
    href: '/demo/dental',
    pageSpeed: 97,
  },
  {
    name: 'Hill Country Heating & Air',
    type: 'HVAC Company',
    gradient: 'linear-gradient(135deg, #1B2A4A, #E8792F)',
    color: '#E8792F',
    stack: ['Next.js', 'Lead Capture', 'Service Area Pages', 'Flat-Rate Pricing'],
    features: [
      'Emergency CTA sticky on every page',
      '24/7 online booking with urgency selection',
      'Service area grid for 8 Hill Country cities',
      'Why Choose Us trust section with flat-rate pricing',
      'TACLA license and insurance trust badges',
    ],
    note: 'Demo site showcasing what we build for HVAC companies.',
    href: '/demo/hvac',
    pageSpeed: 96,
  },
  {
    name: 'Clearwater Plumbing Co.',
    type: 'Plumbing Contractor',
    gradient: 'linear-gradient(135deg, #1A365D, #3182CE)',
    color: '#3182CE',
    stack: ['Next.js', 'Before/After Gallery', 'Emergency Banner', 'SEO'],
    features: [
      'Service area targeting for 8+ cities',
      'Before/After project gallery with descriptions',
      '24/7 emergency banner with click-to-call',
      'Flat-rate pricing transparency in hero',
      'Mobile-first design with 48px+ touch targets',
    ],
    note: 'Demo site showcasing what we build for plumbing contractors.',
    href: '/demo/plumbing',
    pageSpeed: 95,
  },
  {
    name: 'Serenity Med Spa & Wellness',
    type: 'Med Spa',
    gradient: 'linear-gradient(135deg, #2D3748, #B8860B)',
    color: '#B8860B',
    stack: ['Next.js', 'Consultation Booking', 'Team Profiles', 'Gallery'],
    features: [
      'Luxury aesthetic with serif headings and rose gold accents',
      'Meet the Team section with credential badges',
      'Before/After transformation gallery',
      'New client special offer banner',
      'Board-certified provider trust signals',
    ],
    note: 'Demo site showcasing what we build for med spas and wellness clinics.',
    href: '/demo/medspa',
    pageSpeed: 98,
  },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://bd-cyber.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Our Work',
      item: 'https://bd-cyber.com/case-studies',
    },
  ],
};

export default function OurWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BookingHandler />
      <div className="amb">
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      <div className="grain"></div>
      <div className="pg">
        <Nav />

        {/* Hero */}
        <section style={{ padding: '140px 0 80px', textAlign: 'center' }}>
          <div className="c">
            <div className="tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>
              Our Work
            </div>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(36px, 6vw, 56px)',
                color: 'var(--text)',
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: '20px',
              }}
            >
              Demo Sites Built by <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Black Diamond Cyber</em>
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--t2)',
                maxWidth: '620px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              We build demo sites for every industry we serve. These are real, functional websites &mdash; not mockups. Each one is built with the same stack, speed, and attention we bring to every client project.
            </p>
          </div>
        </section>

        <div className="sep"></div>

        {/* Demo cards */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
              {demos.map((demo) => (
                <div
                  key={demo.name}
                  className="rv"
                  style={{
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--rr)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Gradient header with name */}
                  <div
                    style={{
                      background: demo.gradient,
                      padding: '40px 32px',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                      <div>
                        <span
                          style={{
                            fontSize: '9px',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,.9)',
                            background: 'rgba(0,0,0,.3)',
                            padding: '4px 12px',
                            borderRadius: '40px',
                            display: 'inline-block',
                            marginBottom: '12px',
                          }}
                        >
                          LIVE DEMO
                        </span>
                        <h2
                          style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontSize: 'clamp(24px, 4vw, 36px)',
                            color: '#fff',
                            fontWeight: 400,
                            lineHeight: 1.15,
                          }}
                        >
                          {demo.name}
                        </h2>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.7)', marginTop: '4px' }}>
                          {demo.type}
                        </p>
                      </div>
                      {/* PageSpeed badge */}
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: 'rgba(0,0,0,.3)',
                          border: '2px solid var(--green)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '22px', color: 'var(--green)', lineHeight: 1 }}>
                          {demo.pageSpeed}
                        </span>
                        <span style={{ fontSize: '6px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>
                          PageSpeed
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div style={{ padding: '16px 32px', borderBottom: '1px solid var(--hr)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {demo.stack.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '4px 12px',
                          borderRadius: '40px',
                          border: '1px solid var(--hr-b)',
                          color: 'var(--cyan)',
                          background: 'var(--blue-d)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div style={{ padding: '24px 32px' }}>
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'var(--t3)',
                        marginBottom: '12px',
                      }}
                    >
                      Key Features
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {demo.features.map((f) => (
                        <li key={f} style={{ fontSize: '14px', color: 'var(--t2)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '2px' }}>&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--t3)', fontStyle: 'italic', marginTop: '16px' }}>
                      {demo.note}
                    </p>
                  </div>

                  {/* View Demo CTA */}
                  <div style={{ padding: '0 32px 24px' }}>
                    <a
                      href={demo.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 28px',
                        background: 'var(--blue-d)',
                        border: '1px solid var(--hr-b)',
                        borderRadius: '40px',
                        color: 'var(--cyan)',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: '.4s var(--ease)',
                      }}
                    >
                      View Live Demo
                      <span style={{ fontSize: '14px' }}>&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* Bottom explanation + CTA */}
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="c" style={{ maxWidth: '680px' }}>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--t2)',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}
            >
              These demos represent the quality, speed, and features every BDC client receives.
              Your site will be custom-built for your business &mdash; these show our baseline.
            </p>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: 'var(--text)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              See What We Would Build <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>for You</em>
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--t2)',
                maxWidth: '500px',
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              Get a free competitive analysis of your current website. Takes 30 seconds.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/free-audit" className="bp">Get Your Free Audit</a>
              <a href="#book" className="bs">Book Free Strategy Call</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
