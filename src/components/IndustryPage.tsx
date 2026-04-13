import type { IndustryData } from '@/lib/industry-data';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';

export function IndustryPage({ data }: { data: IndustryData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.name} Website Design & Growth Systems`,
    description: data.seoDescription,
    url: `https://bd-cyber.com/${data.slug}`,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Black Diamond Cyber',
      url: 'https://bd-cyber.com',
    },
    areaServed: 'US',
    serviceType: [
      'Website Design',
      'SEO',
      'Lead Generation',
      'Review Automation',
    ],
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

        {/* Responsive overrides */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media(max-width:1024px){#ind-hero-grid{grid-template-columns:1fr!important;gap:40px!important}#ind-hero-img{height:300px!important}}
          @media(max-width:768px){#ind-pain-grid{grid-template-columns:1fr!important}}
        ` }} />

        {/* Hero */}
        <section style={{ minHeight: '80dvh', display: 'flex', alignItems: 'center', padding: '130px 0 80px' }}>
          <div className="c">
            <div id="ind-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '64px', alignItems: 'center' }}>
              <div className="rv">
                <div className="tag" style={{ marginBottom: '22px' }}>
                  {data.name}
                </div>
                <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--text)' }}>
                  {data.headline}
                  <br />
                  <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>{data.headlineEmphasis}</em>
                </h1>
                <p style={{ fontSize: '16px', color: 'var(--t2)', maxWidth: '440px', margin: '20px 0 38px', lineHeight: 1.85 }}>
                  {data.description}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="#book" className="bp">Book Free Strategy Call</a>
                  <a href="/#work" className="bs">See Our Work</a>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--hr)' }}>
                  <div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '38px', color: 'var(--text)', lineHeight: 1 }}>3<span style={{ color: 'var(--cyan)', fontSize: '28px' }}>-day</span></div>
                    <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'var(--t3)', marginTop: '4px' }}>Avg. Delivery</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '38px', color: 'var(--text)', lineHeight: 1 }}>$997</div>
                    <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'var(--t3)', marginTop: '4px' }}>Starting At</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '38px', color: 'var(--text)', lineHeight: 1 }}>$0</div>
                    <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'var(--t3)', marginTop: '4px' }}>Contracts</div>
                  </div>
                </div>
              </div>
              <div id="ind-hero-img" className="rv d2" style={{ position: 'relative', height: '400px', borderRadius: 'var(--r)', overflow: 'hidden', border: '1px solid var(--hr)', boxShadow: '0 20px 60px rgba(0,0,0,.5)' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${data.heroImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: data.heroBgColor,
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(6,8,12,.85) 0%, rgba(6,8,12,.3) 40%, rgba(6,8,12,.1) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px', zIndex: 1 }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '8px' }}>{data.portfolioName}</div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '24px', color: 'var(--text)', lineHeight: 1.15, marginBottom: '4px' }}>Demo Site</div>
                  <div style={{ fontSize: '12px', color: 'var(--t2)' }}>{data.portfolioLocation}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* Pain Points */}
        <section>
          <div className="c">
            <div className="sh sc rv">
              <div className="tag" style={{ display: 'inline-flex' }}>The Problem</div>
              <h2 className="st">Why Most {data.name} <em>Struggle Online</em></h2>
              <p className="sd">These are the exact problems we solve — every single day.</p>
            </div>
            <div id="ind-pain-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {data.painPoints.map((p, i) => (
                <div key={p.title} className={`svc rv${i > 0 ? ` d${i}` : ''}`}>
                  {p.stat && (
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '42px', color: data.accentColor, lineHeight: 1, marginBottom: '8px' }}>
                      {p.stat}
                    </div>
                  )}
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '22px', color: 'var(--text)', marginBottom: '10px', fontWeight: 400 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.8 }}>
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* Demo CTA (replaces fictional testimonial) */}
        <section>
          <div className="c">
            <div className="rv" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--text)', fontWeight: 400, lineHeight: 1.3, marginBottom: '16px' }}>
                See what we build for {data.testimonial.industry.toLowerCase()} businesses.
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.7, marginBottom: '28px' }}>
                Browse a live demo site built with our stack &mdash; custom design, online booking, and local SEO included.
              </p>
              <a href={`/demo/${data.slug}`} className="bp">View Live Demo &rarr;</a>
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* Pricing CTA */}
        <section>
          <div className="c">
            <div className="rv" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <div className="tag" style={{ display: 'inline-flex', marginBottom: '22px' }}>Pricing</div>
              <h2 className="st" style={{ marginBottom: '16px' }}>
                Ready to Grow Your <em>{data.name.replace(/ies$/, 'y').replace(/s$/, '')}?</em>
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.85, marginBottom: '32px' }}>
                Websites starting at $997. Growth systems starting at $497/mo. No contracts, no surprises, own your code.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/#pricing" className="bp">See All Plans</a>
                <a href="#book" className="bs">Book Free Strategy Call</a>
              </div>
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* FAQ */}
        <section>
          <div className="c">
            <div className="sh sc rv">
              <div className="tag" style={{ display: 'inline-flex' }}>FAQ</div>
              <h2 className="st">Common Questions from <em>{data.name}</em></h2>
            </div>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              {data.faqs.map((faq, i) => (
                <div key={faq.question} className={`rv${i > 0 ? ` d${Math.min(i, 4)}` : ''}`} style={{
                  padding: '28px 0',
                  borderBottom: '1px solid var(--hr)',
                }}>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '20px', color: 'var(--text)', marginBottom: '10px', fontWeight: 400 }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.85 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: '80px 0 100px' }}>
          <div className="c">
            <div className="rv" style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--text)', marginBottom: '16px', fontWeight: 400, lineHeight: 1.15 }}>
                Stop Losing Customers to <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Competitors with Better Websites</em>
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--t2)', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.85 }}>
                Get a free strategy call. We&apos;ll audit your current site, show you what your competitors are doing, and build a plan to dominate your market.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#book" className="bp">Book Free Strategy Call</a>
                <a href="/free-audit" className="bs">Get Free Site Audit</a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
