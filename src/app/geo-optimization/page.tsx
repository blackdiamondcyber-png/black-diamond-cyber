import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';

export const metadata: Metadata = {
  title: 'GEO — Generative Engine Optimization | Black Diamond Cyber',
  description:
    'Learn how Generative Engine Optimization (GEO) helps your business get recommended by AI assistants like ChatGPT, Gemini, and Perplexity. Future-proof your local presence.',
  openGraph: {
    title: 'GEO — Generative Engine Optimization | Black Diamond Cyber',
    description:
      'Get recommended by AI assistants. GEO is the next evolution of SEO for local businesses.',
    url: 'https://bd-cyber.com/geo-optimization',
    siteName: 'Black Diamond Cyber',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bd-cyber.com/geo-optimization',
  },
};

export default function GEOPage() {
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
              GEO
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
              Generative Engine <em>Optimization</em>
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--t2)',
                maxWidth: '620px',
                margin: '0 auto 40px',
                lineHeight: 1.7,
              }}
            >
              SEO gets you found on Google. GEO gets you <strong style={{ color: 'var(--cyan)' }}>recommended</strong> by AI assistants like ChatGPT, Gemini, and Perplexity. The future of search is here.
            </p>
            <a href="#book" className="bp">
              See If AI Recommends Your Business
            </a>
          </div>
        </section>

        <div className="sep"></div>

        {/* What is GEO */}
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
                  marginBottom: '16px',
                }}
              >
                What is <em>GEO?</em>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                Generative Engine Optimization is the practice of structuring your website content so AI-powered search engines and assistants cite and recommend your business in their answers.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                {
                  title: 'Traditional SEO',
                  desc: 'Optimizes for Google\'s ranking algorithm. Users click blue links and browse.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--t3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  ),
                  color: 'var(--t3)',
                },
                {
                  title: 'GEO',
                  desc: 'Optimizes for AI engines. AI reads your site and recommends you directly in conversations.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  ),
                  color: 'var(--cyan)',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    padding: '28px 24px',
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--rr)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: `color-mix(in srgb, ${card.color} 10%, transparent)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: card.color, marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.6 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* Why it matters */}
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
                }}
              >
                Why It <em>Matters</em>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { stat: '40%', desc: 'of consumers now use AI assistants to find local businesses' },
                { stat: '65%', desc: 'of AI-recommended businesses see a click-through rate boost vs organic listings' },
                { stat: '2026', desc: 'is when Gartner predicts AI search will handle 25% of all queries' },
              ].map((item) => (
                <div
                  key={item.stat}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px 24px',
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--r)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: '32px',
                      color: 'var(--cyan)',
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: '80px',
                      textAlign: 'center',
                    }}
                  >
                    {item.stat}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* AI mockup section */}
        <section style={{ padding: '80px 0' }}>
          <div className="c" style={{ maxWidth: '700px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>
                The Vision
              </div>
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
                What AI Recommendations <em>Look Like</em>
              </h2>
            </div>

            {/* Chat mockup */}
            <div
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--hr)',
                borderRadius: 'var(--rr)',
                padding: '28px',
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              {/* User message */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--bg1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '14px',
                  }}
                >
                  U
                </div>
                <div
                  style={{
                    padding: '12px 16px',
                    background: 'var(--bg1)',
                    borderRadius: '12px 12px 12px 4px',
                    fontSize: '14px',
                    color: 'var(--text)',
                    lineHeight: 1.5,
                  }}
                >
                  What&apos;s the best dental office in Canyon Lake, TX?
                </div>
              </div>

              {/* AI message */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(93,196,232,.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <div
                  style={{
                    padding: '12px 16px',
                    background: 'rgba(93,196,232,.06)',
                    border: '1px solid rgba(93,196,232,.12)',
                    borderRadius: '12px 12px 12px 4px',
                    fontSize: '14px',
                    color: 'var(--t2)',
                    lineHeight: 1.6,
                  }}
                >
                  Based on reviews and website quality, I&apos;d recommend <strong style={{ color: 'var(--green)' }}>Sunny Smiles Dental</strong> in Canyon Lake. They have a 4.9 rating with 112 Google reviews, offer same-day appointments, and their website loads in under 2 seconds with detailed service information.
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--t3)', marginTop: '16px', fontStyle: 'italic' }}>
              Simulated AI conversation for illustration purposes
            </p>
          </div>
        </section>

        <div className="sep"></div>

        {/* How BD Cyber does it */}
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
                }}
              >
                How We <em>Optimize for AI</em>
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                {
                  step: '01',
                  title: 'Structured Data',
                  desc: 'JSON-LD schema markup that AI engines can parse and cite accurately.',
                },
                {
                  step: '02',
                  title: 'Authority Signals',
                  desc: 'Review volume, consistent NAP data, and topical depth that AI trusts.',
                },
                {
                  step: '03',
                  title: 'Semantic Content',
                  desc: 'Natural, question-answer content structure that matches how people ask AI.',
                },
                {
                  step: '04',
                  title: 'Fast & Crawlable',
                  desc: 'Sub-2s load times and clean HTML that AI crawlers can index efficiently.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    padding: '28px 24px',
                    background: 'var(--bg1)',
                    border: '1px solid var(--hr)',
                    borderRadius: 'var(--rr)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      letterSpacing: '1px',
                      marginBottom: '12px',
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
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
              Is AI Recommending <em>Your Business?</em>
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
              Find out where you stand with AI search engines. Book a free strategy call and we will run a GEO audit for your business.
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
