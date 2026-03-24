import type { CompetitorData } from '@/lib/comparison-data';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';

export function ComparisonPage({ data }: { data: CompetitorData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.seoTitle,
    description: data.seoDescription,
    url: `https://bd-cyber.com/vs-${data.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Black Diamond Cyber',
      url: 'https://bd-cyber.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              VS {data.name.toUpperCase()}
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
              Black Diamond Cyber vs <em>{data.name}</em>
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--t2)',
                maxWidth: '600px',
                margin: '0 auto 40px',
                lineHeight: 1.7,
              }}
            >
              {data.tagline}
            </p>
            <a href="#book" className="bp">
              Book Free Strategy Call
            </a>
          </div>
        </section>

        <div className="sep"></div>

        {/* What they're known for */}
        <section style={{ padding: '80px 0' }}>
          <div className="c" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  color: 'var(--text)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: '12px',
                }}
              >
                What {data.name} is <em>Known For</em>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.6 }}>
                {data.name} has its strengths, but local businesses need more.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                marginBottom: '48px',
              }}
            >
              {data.knownFor.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--t2)',
                    background: 'var(--bg2)',
                    border: '1px solid var(--hr)',
                    borderRadius: '40px',
                    padding: '8px 20px',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Weaknesses */}
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: '#e05a5a',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              Where {data.name} Falls Short
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '12px',
              }}
            >
              {data.weaknesses.map((w) => (
                <div
                  key={w}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--r)',
                    fontSize: '13px',
                    color: 'var(--t2)',
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(224,90,90,.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#e05a5a" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  {w}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* Feature comparison table */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>
                Feature Comparison
              </div>
              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  color: 'var(--text)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                Side-by-Side <em>Breakdown</em>
              </h2>
            </div>

            <div
              id="comparison-table"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                borderRadius: 'var(--rr)',
                border: '1px solid var(--hr)',
                overflow: 'hidden',
                background: 'var(--bg1)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 1fr',
                  borderBottom: '1px solid var(--hr)',
                  background: 'var(--bg2)',
                }}
              >
                <div style={{ padding: '16px 20px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--t3)' }}>
                  Feature
                </div>
                <div style={{ padding: '16px 20px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--cyan)', textAlign: 'center', borderLeft: '2px solid var(--blue)' }}>
                  BD Cyber
                </div>
                <div style={{ padding: '16px 20px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--t3)', textAlign: 'center' }}>
                  {data.name}
                </div>
              </div>

              {/* Rows */}
              {data.features.map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr 1fr',
                    borderBottom: '1px solid var(--hr)',
                  }}
                >
                  <div style={{ padding: '14px 20px', fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
                    {row.label}
                  </div>
                  <div style={{ padding: '14px 20px', fontSize: '13px', fontWeight: 500, color: 'var(--green)', textAlign: 'center', borderLeft: '2px solid var(--blue)', background: 'rgba(40,135,204,.03)' }}>
                    {row.bd}
                  </div>
                  <div style={{ padding: '14px 20px', fontSize: '13px', color: 'var(--t2)', textAlign: 'center' }}>
                    {row.competitor}
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive override */}
            <style>{`
              @media (max-width: 640px) {
                #comparison-table > div {
                  grid-template-columns: 1.2fr 1fr 1fr !important;
                }
                #comparison-table > div > div {
                  padding: 10px 8px !important;
                  font-size: 11px !important;
                }
              }
            `}</style>
          </div>
        </section>

        <div className="sep"></div>

        {/* Stats callout */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '28px 24px',
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--rr)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: '12px' }}>
                    {stat.label}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
                    <div>
                      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', color: 'var(--green)', marginBottom: '4px' }}>
                        {stat.bd}
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--cyan)' }}>
                        BD Cyber
                      </div>
                    </div>
                    <div style={{ width: '1px', background: 'var(--hr)' }}></div>
                    <div>
                      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', color: 'var(--t3)', marginBottom: '4px' }}>
                        {stat.competitor}
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t3)' }}>
                        {data.name}
                      </div>
                    </div>
                  </div>
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
              Ready to Make the <em>Switch?</em>
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
              See what a custom-built, high-performance website can do for your business. No commitment required.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#book" className="bp">
                Book Free Strategy Call
              </a>
              <a href="/free-audit" className="bs">
                Get Free Site Audit
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
