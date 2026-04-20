import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Demos } from '@/components/Demos';
import { BookingHandler } from '@/components/BookingHandler';
import { InlineCTA } from '@/components/InlineCTA';

export const metadata: Metadata = {
  title: 'Case Studies — Live Demo Sites | Black Diamond Cyber',
  description:
    'See what BDC actually ships. Four full-industry demo sites — dental, HVAC, plumbing, med spa — built in Next.js, mobile-tested, all scoring 95+ on PageSpeed.',
  openGraph: {
    title: 'Case Studies — Live Demo Sites | Black Diamond Cyber',
    description:
      'Four live demo sites showing exactly what BDC ships for each vertical. All production-graded.',
    url: 'https://bd-cyber.com/case-studies',
    siteName: 'Black Diamond Cyber',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Black Diamond Cyber — Live Demo Portfolio',
      },
    ],
  },
  alternates: {
    canonical: 'https://bd-cyber.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BookingHandler />
      <Nav />
      <main style={{ minHeight: '100dvh', position: 'relative' }}>
        <div className="grain" />

        {/* Hero */}
        <section style={{ padding: '140px 24px 60px', position: 'relative', zIndex: 2 }}>
          <div className="c">
            <div style={{ maxWidth: 820, textAlign: 'center', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 18px',
                  borderRadius: 100,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  marginBottom: 24,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)' }} />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '2.2px',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                  }}
                >
                  Live Demo Portfolio
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 'clamp(36px, 5.5vw, 64px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.035em',
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                Not mockups. <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Real code.</em>
              </h1>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 17,
                  color: 'var(--t2)',
                  lineHeight: 1.7,
                  maxWidth: 640,
                  margin: '20px auto 0',
                }}
              >
                Every BDC demo is a full Next.js site you can click through today. Mobile-tested,
                production-graded, and all scoring 95+ on PageSpeed. This is what you&rsquo;ll ship with.
              </p>
            </div>
          </div>
        </section>

        {/* Live demos */}
        <Demos />

        <InlineCTA
          eyebrow="See yours next"
          headline="Your industry isn't listed? We still build for you."
          subhead="These four verticals are the ones we've already productized. Every other local service business follows the same playbook — start with a free audit or a 30-minute strategy call."
          primary={{ href: '/free-audit', label: 'Run My Free Audit' }}
          secondary={{ href: '#book', label: 'Book a Strategy Call' }}
        />
      </main>
      <Footer />
    </>
  );
}
