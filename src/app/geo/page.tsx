import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';

export const metadata: Metadata = {
  title:
    'AI Search Optimization (GEO) for Local Businesses | Black Diamond Cyber',
  description:
    'Get your business recommended by ChatGPT, Google AI Overviews, and Perplexity. AI Search Optimization (GEO) ensures you are the first answer when customers ask AI for help.',
  openGraph: {
    title: 'AI Search Optimization (GEO) | Black Diamond Cyber',
    description:
      'Be the answer when customers ask AI for help. GEO optimization for local businesses.',
    url: 'https://bd-cyber.com/geo',
    type: 'website',
  },
};

const WHAT_WE_DO = [
  {
    icon: '\uD83D\uDCCB',
    title: 'Structured Data & Schema Markup',
    desc: 'We implement comprehensive schema markup so AI can parse and cite your business information accurately.',
  },
  {
    icon: '\uD83D\uDCAC',
    title: 'Conversational Content',
    desc: 'FAQ-style content that matches how real customers ask AI questions about your services.',
  },
  {
    icon: '\uD83D\uDCCD',
    title: 'Google Business Profile Optimization',
    desc: 'Complete GBP optimization with categories, attributes, and posts that feed AI recommendations.',
  },
  {
    icon: '\u2B50',
    title: 'Review Strategy for AI Trust Signals',
    desc: 'Review volume and sentiment are key trust signals AI uses to decide who to recommend.',
  },
  {
    icon: '\uD83D\uDCCA',
    title: 'Monthly AI Visibility Monitoring',
    desc: 'We track your citations across ChatGPT, Google AI, Gemini, and Perplexity every month.',
  },
  {
    icon: '\uD83C\uDFE0',
    title: 'Topical Authority Content Hubs',
    desc: 'Content clusters that establish your business as the local expert AI engines trust.',
  },
];

export default function GeoPage() {
  return (
    <>
      <BookingHandler />
      <div className="grain"></div>
      <div className="pg">
        <Nav />

        {/* Hero */}
        <section
          style={{
            minHeight: '70dvh',
            display: 'flex',
            alignItems: 'center',
            padding: '130px 0 80px',
          }}
        >
          <div className="c">
            <div style={{ maxWidth: '720px' }}>
              <div
                className="tag"
                style={{
                  marginBottom: '22px',
                  display: 'inline-flex',
                  background: 'rgba(52,211,153,.06)',
                  borderColor: 'rgba(52,211,153,.15)',
                  color: 'var(--green)',
                }}
              >
                AI Search Optimization (GEO)
              </div>
              <h1
                style={{
                  fontSize: 'clamp(36px,5vw,56px)',
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                }}
              >
                Be the Answer When Customers Ask AI
                for&nbsp;
                <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>
                  Help
                </span>
              </h1>
              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--t2)',
                  maxWidth: '560px',
                  margin: '20px 0 38px',
                  lineHeight: 1.85,
                }}
              >
                Customers aren&apos;t just Googling anymore. They&apos;re asking
                ChatGPT, Google AI Overviews, and Perplexity: &ldquo;Who&apos;s
                the best dentist near me?&rdquo; If your business isn&apos;t
                optimized for AI search, you&apos;re invisible during the moment
                that matters most.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/free-audit" className="bp">
                  Get Your Free AI Visibility Audit &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* What We Do */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div className="sh sc">
              <div className="tag" style={{ display: 'inline-flex' }}>
                What We Do
              </div>
              <h2 className="st">
                How We Get AI to <em>Recommend</em> You
              </h2>
              <p className="sd">
                We restructure your online presence so AI search engines can
                find, understand, and cite your business.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                marginTop: '40px',
              }}
            >
              {WHAT_WE_DO.map((item) => (
                <div
                  key={item.title}
                  className="svc"
                >
                  <div style={{ fontSize: '24px', marginBottom: '12px' }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: '20px',
                      color: 'var(--text)',
                      fontWeight: 400,
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--t2)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* How It Works */}
        <section style={{ padding: '80px 0' }}>
          <div className="c">
            <div className="sh sc">
              <div className="tag" style={{ display: 'inline-flex' }}>
                Process
              </div>
              <h2 className="st">
                Three Steps to AI <em>Visibility</em>
              </h2>
            </div>
            <div className="steps">
              <div className="stp">
                <h3>AI Visibility Audit</h3>
                <p>
                  We check where you show up (and don&apos;t) across every major
                  AI platform. You get the report whether you hire us or not.
                </p>
              </div>
              <div className="stp">
                <h3>Optimization</h3>
                <p>
                  We restructure your content, schema, Google Business Profile,
                  and online presence so AI can find, understand, and recommend
                  you.
                </p>
              </div>
              <div className="stp">
                <h3>Monthly Monitoring</h3>
                <p>
                  We track your citations, answer share, and visibility across AI
                  platforms and report results every month.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="sep"></div>

        {/* CTA */}
        <section style={{ padding: '80px 0' }}>
          <div className="c" style={{ textAlign: 'center' }}>
            <h2
              className="st"
              style={{
                fontSize: 'clamp(28px,4vw,44px)',
                marginBottom: '16px',
              }}
            >
              Find Out If AI Is Recommending Your{' '}
              <em>Competitors</em> Instead
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--t2)',
                maxWidth: '500px',
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              Get a free audit of your AI search visibility across ChatGPT,
              Google AI, and Perplexity.
            </p>
            <a href="/free-audit" className="bp" style={{ fontSize: '15px' }}>
              Get Your Free AI Visibility Audit &rarr;
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
