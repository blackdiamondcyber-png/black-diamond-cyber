import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';

export const metadata: Metadata = {
  title: 'Case Studies | Black Diamond Cyber',
  description:
    'See how local service businesses grew their leads, revenue, and online presence with Black Diamond Cyber websites and growth systems.',
  openGraph: {
    title: 'Case Studies | Black Diamond Cyber',
    description: 'Real results from local businesses using Black Diamond Cyber.',
    url: 'https://bd-cyber.com/case-studies',
    siteName: 'Black Diamond Cyber',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bd-cyber.com/case-studies',
  },
};

const caseStudies = [
  {
    name: 'Sunny Smiles Dental',
    industry: 'Dental',
    color: '#5DC4E8',
    challenge:
      'Outdated WordPress site with 4-second load times, zero review automation, and declining new patient bookings.',
    results: [
      { label: 'Page Speed', before: '42/100', after: '97/100' },
      { label: 'New Patients/Mo', before: '18', after: '47' },
      { label: 'Google Reviews', before: '23', after: '112' },
      { label: 'Revenue Growth', before: '', after: '+161%' },
    ],
  },
  {
    name: 'Summit HVAC',
    industry: 'HVAC',
    color: '#E8792F',
    challenge:
      'No web presence beyond a basic Wix page. Relied entirely on word-of-mouth and Angi leads at $80+ per lead.',
    results: [
      { label: 'Page Speed', before: '38/100', after: '95/100' },
      { label: 'Monthly Leads', before: '12', after: '54' },
      { label: 'Cost per Lead', before: '$82', after: '$14' },
      { label: 'Revenue Growth', before: '', after: '+220%' },
    ],
  },
  {
    name: 'Cascade Plumbing',
    industry: 'Plumbing',
    color: '#34D399',
    challenge:
      'Paying an agency $1,800/mo for a WordPress site with no automation, no review requests, and mediocre SEO rankings.',
    results: [
      { label: 'Page Speed', before: '51/100', after: '96/100' },
      { label: 'Monthly Calls', before: '30', after: '78' },
      { label: 'Monthly Cost', before: '$1,800', after: '$497' },
      { label: 'Revenue Growth', before: '', after: '+185%' },
    ],
  },
];

export default function CaseStudiesPage() {
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
              Case Studies
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
              Real Results for <em>Real Businesses</em>
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--t2)',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              See how local service businesses transformed their online presence and grew revenue with Black Diamond Cyber.
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'var(--t3)',
                marginTop: '16px',
                fontStyle: 'italic',
              }}
            >
              * Fictional case studies for illustration purposes. Results reflect typical outcomes based on industry benchmarks.
            </p>
          </div>
        </section>

        <div className="sep"></div>

        {/* Case study cards */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
              {caseStudies.map((study) => (
                <div
                  key={study.name}
                  style={{
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--rr)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      padding: '28px 32px',
                      borderBottom: '1px solid var(--hr)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${study.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: '20px', fontWeight: 700, color: study.color }}>
                        {study.name.charAt(0)}
                      </span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>
                        {study.name}
                      </h3>
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '1.2px',
                          textTransform: 'uppercase',
                          color: study.color,
                          background: `${study.color}12`,
                          padding: '3px 10px',
                          borderRadius: '40px',
                        }}
                      >
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--hr)' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: 'var(--t3)',
                        marginBottom: '8px',
                      }}
                    >
                      The Challenge
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.6 }}>
                      {study.challenge}
                    </p>
                  </div>

                  {/* Results grid */}
                  <div
                    id={`results-${study.industry.toLowerCase()}`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '0',
                    }}
                  >
                    {study.results.map((r, i) => (
                      <div
                        key={r.label}
                        style={{
                          padding: '24px 20px',
                          textAlign: 'center',
                          borderRight: i < study.results.length - 1 ? '1px solid var(--hr)' : 'none',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            color: 'var(--t3)',
                            marginBottom: '12px',
                          }}
                        >
                          {r.label}
                        </div>
                        {r.before && (
                          <div
                            style={{
                              fontSize: '14px',
                              color: 'var(--t3)',
                              textDecoration: 'line-through',
                              marginBottom: '4px',
                            }}
                          >
                            {r.before}
                          </div>
                        )}
                        <div
                          style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontSize: '24px',
                            color: 'var(--green)',
                            lineHeight: 1.1,
                          }}
                        >
                          {r.after}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Responsive override */}
                  <style>{`
                    @media (max-width: 640px) {
                      #results-${study.industry.toLowerCase()} {
                        grid-template-columns: repeat(2, 1fr) !important;
                      }
                      #results-${study.industry.toLowerCase()} > div {
                        border-bottom: 1px solid var(--hr);
                      }
                    }
                  `}</style>
                </div>
              ))}
            </div>
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
              Want Results Like <em>These?</em>
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
              Book a free strategy call and we will show you exactly what we can do for your business.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#book" className="bp">Book Free Strategy Call</a>
              <a href="/free-audit" className="bs">Get Free Site Audit</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
