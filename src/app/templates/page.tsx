import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';

export const metadata: Metadata = {
  title: 'Industry Templates | Black Diamond Cyber',
  description:
    'Browse industry-specific website templates for dental, HVAC, plumbing, electrical, roofing, and med spa businesses. Custom-built with Next.js for maximum speed and conversions.',
  openGraph: {
    title: 'Industry Templates | Black Diamond Cyber',
    description: 'High-performance website templates built for local service businesses.',
    url: 'https://bd-cyber.com/templates',
    siteName: 'Black Diamond Cyber',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bd-cyber.com/templates',
  },
};

const templates = [
  {
    name: 'Dental',
    slug: 'dental',
    color: '#5DC4E8',
    description: 'Clean, trust-building design optimized for patient conversions. Online booking, team bios, and insurance info built-in.',
  },
  {
    name: 'HVAC',
    slug: 'hvac',
    color: '#E8792F',
    description: 'Bold, action-oriented layout for heating and cooling companies. Emergency service CTA, service area maps, and financing options.',
  },
  {
    name: 'Plumbing',
    slug: 'plumbing',
    color: '#2887CC',
    description: 'Professional design that converts emergency callers into booked jobs. Click-to-call, service pages, and review widgets.',
  },
  {
    name: 'Electrical',
    slug: 'electrical',
    color: '#FBBF24',
    description: 'Modern, safety-focused design for electricians. License badges, service galleries, and instant quote request forms.',
  },
  {
    name: 'Roofing',
    slug: 'roofing',
    color: '#34D399',
    description: 'High-impact design built for storm season. Before/after galleries, insurance claim help, and free inspection CTAs.',
  },
  {
    name: 'Med Spa',
    slug: 'med-spa',
    color: '#C084FC',
    description: 'Elegant, luxury aesthetic for medical spas. Treatment menus, before/after results, and online booking integration.',
  },
];

export default function TemplatesPage() {
  return (
    <>
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
              Templates
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
              Industry-Specific <em>Starting Points</em>
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--t2)',
                maxWidth: '580px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Every template is custom-built with Next.js for your industry. Pick a starting point — we customize everything for your brand.
            </p>
          </div>
        </section>

        <div className="sep"></div>

        {/* Template grid */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div
              id="template-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                maxWidth: '960px',
                margin: '0 auto',
              }}
            >
              {templates.map((t) => (
                <div
                  key={t.slug}
                  style={{
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--rr)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.3s',
                  }}
                >
                  {/* Placeholder thumbnail */}
                  <div
                    style={{
                      height: '180px',
                      background: `linear-gradient(135deg, ${t.color}18, ${t.color}08)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom: '1px solid var(--hr)',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: '28px',
                        color: t.color,
                        opacity: 0.6,
                      }}
                    >
                      {t.name}
                    </span>
                    {/* Speed badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'var(--bg)',
                        border: '1px solid var(--hr)',
                        borderRadius: '40px',
                        padding: '4px 10px',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: 'var(--green)',
                        letterSpacing: '0.5px',
                      }}
                    >
                      90+ Speed
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                      {t.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                      {t.description}
                    </p>
                    <a
                      href="#book"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        padding: '10px 20px',
                        background: 'transparent',
                        border: `1px solid ${t.color}40`,
                        borderRadius: '40px',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: t.color,
                        textDecoration: 'none',
                        transition: 'background 0.2s, border-color 0.2s',
                      }}
                    >
                      Start With This Design
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive override */}
            <style>{`
              @media (max-width: 900px) {
                #template-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
              @media (max-width: 540px) {
                #template-grid {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>
          </div>
        </section>

        <div className="sep"></div>

        {/* CTA */}
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="c">
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
              Don&apos;t See Your <em>Industry?</em>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--t2)',
                maxWidth: '500px',
                margin: '0 auto 32px',
                lineHeight: 1.6,
              }}
            >
              We build custom websites for any local service business. Tell us what you need and we will design something unique for you.
            </p>
            <a href="#book" className="bp">Book Free Strategy Call</a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
