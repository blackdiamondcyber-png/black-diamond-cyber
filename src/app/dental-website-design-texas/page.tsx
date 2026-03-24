import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const BASE = 'https://bd-cyber.com';

export const metadata: Metadata = {
  title: 'Dental Website Design Texas | AI-Powered Sites for Dental Practices',
  description:
    'Custom dental practice websites built in 7 days by a Patterson Dental insider. Serving Austin, San Antonio, and Central Texas. Starting at $797. Free audit.',
  keywords: [
    'dental website design Texas',
    'dental practice website design Austin',
    'dental website design San Antonio',
    'dentist website builder Texas',
    'dental office website Texas',
    'dental marketing Texas',
    'dental SEO Austin',
    'dental SEO San Antonio',
  ],
  openGraph: {
    title: 'Dental Website Design Texas | AI-Powered Sites for Dental Practices',
    description:
      'Custom dental practice websites built in 7 days by a Patterson Dental insider. Serving Austin, San Antonio, and Central Texas.',
    url: `${BASE}/dental-website-design-texas`,
    siteName: 'Black Diamond Cyber',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Website Design Texas | AI-Powered Sites for Dental Practices',
    description:
      'Custom dental practice websites built in 7 days by a Patterson Dental insider. Serving Austin, San Antonio, and Central Texas.',
  },
  alternates: {
    canonical: `${BASE}/dental-website-design-texas`,
  },
};

const CITIES = [
  'Austin',
  'San Antonio',
  'New Braunfels',
  'Canyon Lake',
  'Round Rock',
  'Cedar Park',
  'Georgetown',
  'San Marcos',
  'Kyle',
  'Buda',
  'Pflugerville',
  'Leander',
];

const FEATURES = [
  {
    title: 'Conversion-Optimized Design',
    desc: 'Every element is built to turn visitors into booked appointments — not just look pretty.',
    icon: '◆',
  },
  {
    title: 'Online Booking Integration',
    desc: 'Compatible with OpenDental, Dentrix, and Eaglesoft. Patients book directly from your site.',
    icon: '◆',
  },
  {
    title: 'Local SEO for Your City',
    desc: 'Google Maps optimization, local schema markup, and city-specific content that ranks.',
    icon: '◆',
  },
  {
    title: 'Review Automation',
    desc: 'Automated post-visit review requests that build your Google rating on autopilot.',
    icon: '◆',
  },
  {
    title: 'Mobile-First Design',
    desc: '68% of dental searches happen on mobile. Your site will be fast and flawless on every device.',
    icon: '◆',
  },
  {
    title: 'HIPAA-Compliant Forms',
    desc: 'Secure contact and intake forms that protect patient data and keep you compliant.',
    icon: '◆',
  },
];

export default function DentalWebsiteDesignTexasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Black Diamond Cyber',
        url: BASE,
        telephone: '',
        email: 'blackdiamondcyber@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Canyon Lake',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: CITIES.map((city) => ({
          '@type': 'City',
          name: city,
          containedInPlace: { '@type': 'State', name: 'Texas' },
        })),
        description:
          'AI-powered dental website design for practices across Central Texas.',
      },
      {
        '@type': 'Service',
        serviceType: 'Dental Website Design',
        provider: { '@type': 'LocalBusiness', name: 'Black Diamond Cyber' },
        areaServed: {
          '@type': 'State',
          name: 'Texas',
        },
        description:
          'Custom dental practice websites built in 7 days with AI-powered design, local SEO, and HIPAA-compliant forms.',
        offers: {
          '@type': 'Offer',
          price: '797',
          priceCurrency: 'USD',
          description: 'Founding client pricing — limited availability',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pg">
        <Nav />

        {/* ─── HERO ─── */}
        <section
          style={{
            paddingTop: '160px',
            paddingBottom: '80px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div className="c">
            <div className="rv">
              <span
                className="tag"
                style={{ marginBottom: '16px', display: 'inline-block' }}
              >
                Texas Dental Practices
              </span>
            </div>
            <h1
              className="rv d1"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Dental Website Design in Texas
              <br />
              <span style={{ color: 'var(--cyan)' }}>
                Built by an Industry Insider
              </span>
            </h1>
            <p
              className="rv d2"
              style={{
                fontSize: '1.15rem',
                color: 'var(--t2)',
                maxWidth: '680px',
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              We build AI-powered websites for dental practices across Austin,
              San Antonio, and Central Texas. Fast, affordable, and built by
              someone who actually knows your business.
            </p>
            <div
              className="rv d3"
              style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a href="/free-audit" className="bp">
                Get Your Free Audit →
              </a>
              <a href="#book" className="bs">
                Book a Strategy Call
              </a>
            </div>
          </div>
        </section>

        <div className="sep" />

        {/* ─── THE PROBLEM ─── */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div className="rv" style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  fontWeight: 700,
                  marginBottom: '20px',
                  lineHeight: 1.2,
                }}
              >
                Most Dental Websites in Texas{' '}
                <span style={{ color: 'var(--cyan)' }}>Look the Same</span>
              </h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--t2)',
                  lineHeight: 1.8,
                }}
              >
                Stock photos of smiling patients. Generic copy. Load times that
                send new patients to your competitor down the street. Your
                website should be your best employee — working 24/7 to book
                appointments. Instead, most dental sites in Austin and San
                Antonio are glorified business cards that cost $5,000+ and take
                months to launch.
              </p>
            </div>
          </div>
        </section>

        <div className="sep" />

        {/* ─── WHY BDC ─── */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div className="rv" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                Why Texas Dentists{' '}
                <span style={{ color: 'var(--cyan)' }}>Choose Us</span>
              </h2>
              <p style={{ color: 'var(--t2)', maxWidth: '600px', margin: '0 auto' }}>
                We&apos;re not a generic marketing agency. We live in your world.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                {
                  title: 'Built by a Patterson Dental Rep',
                  desc: 'Erik Pearson manages 400+ dental accounts across Austin and San Antonio. He has walked into hundreds of Texas dental offices and knows what patients look for.',
                },
                {
                  title: '7-Day Delivery. No Contracts.',
                  desc: 'Your site goes live in a week — not months. No long-term contracts. No hidden fees. And you own every line of code.',
                },
                {
                  title: '95+ Google PageSpeed Guaranteed',
                  desc: 'A slow website bleeds patients. We guarantee a 95+ PageSpeed score or we fix it for free. Period.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rv"
                  style={{
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--rr)',
                    padding: '32px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      marginBottom: '10px',
                      color: 'var(--text)',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: 'var(--t2)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep" />

        {/* ─── WHAT YOU GET ─── */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div className="rv" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                What You Get
              </h2>
              <p style={{ color: 'var(--t2)', maxWidth: '600px', margin: '0 auto' }}>
                Everything your dental practice needs to dominate online in
                Texas.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '20px',
              }}
            >
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rv"
                  style={{
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--r)',
                    padding: '28px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--cyan)',
                      fontSize: '12px',
                      flexShrink: 0,
                      marginTop: '5px',
                    }}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        marginBottom: '6px',
                        color: 'var(--text)',
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--t2)',
                        fontSize: '0.9rem',
                        lineHeight: 1.65,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep" />

        {/* ─── CITIES WE SERVE ─── */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div className="rv" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                Texas Cities{' '}
                <span style={{ color: 'var(--cyan)' }}>We Serve</span>
              </h2>
              <p style={{ color: 'var(--t2)', maxWidth: '600px', margin: '0 auto' }}>
                Based in Canyon Lake, serving dental practices across Central
                Texas and beyond.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '12px',
                maxWidth: '860px',
                margin: '0 auto',
              }}
            >
              {CITIES.map((city) => (
                <div
                  key={city}
                  className="rv"
                  style={{
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--r)',
                    padding: '16px 20px',
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                  }}
                >
                  📍 {city}, TX
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep" />

        {/* ─── PRICING PREVIEW ─── */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div
              className="rv"
              style={{
                textAlign: 'center',
                maxWidth: '640px',
                margin: '0 auto',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                Founding Client Pricing
              </h2>
              <p
                style={{
                  color: 'var(--t2)',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  marginBottom: '12px',
                }}
              >
                We&apos;re taking on a limited number of founding dental clients
                in Texas at reduced rates. Lock in pricing before it goes up.
              </p>
              <p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--cyan)',
                  marginBottom: '8px',
                }}
              >
                Starting at $797
              </p>
              <p
                style={{
                  color: 'var(--t3)',
                  fontSize: '0.9rem',
                  marginBottom: '28px',
                }}
              >
                Setup fee · No contracts · You own the code
              </p>
              <a href="/pricing" className="bp">
                See All Pricing Tiers →
              </a>
            </div>
          </div>
        </section>

        <div className="sep" />

        {/* ─── FINAL CTA ─── */}
        <section className="cta">
          <div className="cta-o">
            <div className="cta-i rv">
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                Get Your Free Website Audit
              </h2>
              <p
                style={{
                  color: 'var(--t2)',
                  fontSize: '1.1rem',
                  maxWidth: '540px',
                  margin: '0 auto 28px',
                  lineHeight: 1.7,
                }}
              >
                See how your dental practice stacks up against competitors in
                your city. Takes 30 seconds. No credit card required.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <a href="/free-audit" className="bp">
                  Run My Free Audit →
                </a>
                <a href="#book" className="bs">
                  Book a Strategy Call
                </a>
              </div>
              <div
                style={{
                  marginTop: '32px',
                  display: 'flex',
                  gap: '24px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  fontSize: '0.85rem',
                  color: 'var(--t3)',
                }}
              >
                <span>✓ No credit card</span>
                <span>✓ Results in 30 seconds</span>
                <span>✓ 100% free</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTERNAL LINKS (SEO) ─── */}
        <section style={{ padding: '40px 0 0' }}>
          <div className="c" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--t3)' }}>
              <a href="/dental" style={{ color: 'var(--t3)', textDecoration: 'underline' }}>
                Dental Website Design
              </a>
              {' · '}
              <a href="/free-audit" style={{ color: 'var(--t3)', textDecoration: 'underline' }}>
                Free Website Audit
              </a>
              {' · '}
              <a href="/pricing" style={{ color: 'var(--t3)', textDecoration: 'underline' }}>
                Pricing
              </a>
              {' · '}
              <a href="/blog" style={{ color: 'var(--t3)', textDecoration: 'underline' }}>
                Blog
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
