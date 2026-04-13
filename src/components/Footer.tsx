import { NewsletterForm } from '@/components/NewsletterForm';

export function Footer() {
  return (
    <footer className="foot">
      <div className="c">
        {/* Newsletter capture */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            padding: '32px 0 40px',
            borderBottom: '1px solid var(--hr)',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '24px',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.2,
                marginBottom: '4px',
              }}
            >
              AI marketing insights, weekly.
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--t2)', margin: 0 }}>
              GEO tips, local SEO wins, and growth tactics for service businesses.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="fg" style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr' }}>
          <div>
            <div className="fw">
              BLACK DIAMOND <span>CYBER</span>
            </div>
            <p style={{ marginBottom: '12px' }}>
              AI growth systems for local businesses. Websites, GEO, and
              automation — built in 7 days. No contracts. Own your code.
            </p>
            {/* Trust pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {['No Contracts', 'Own Your Site', '7-Day Delivery'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: 'var(--cyan)',
                    border: '1px solid var(--hr-b)',
                    borderRadius: '40px',
                    padding: '4px 10px',
                    background: 'var(--blue-d)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
            {/* Live badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--green)', fontWeight: 700, letterSpacing: '1px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'p 2s infinite' }} />
              Taking New Clients
            </div>
          </div>

          <div>
            <div role="heading" aria-level={2} className="fh">Services</div>
            <ul className="fl">
              <li><a href="/dental">Dental Websites</a></li>
              <li><a href="/dental-website-design-texas">Dental Design — Texas</a></li>
              <li><a href="/hvac">HVAC Websites</a></li>
              <li><a href="/plumbing">Plumber Websites</a></li>
              <li><a href="/demo/dental">Live Demo</a></li>
              <li><a href="/geo">AI Search (GEO)</a></li>
              <li><a href="#services">All Services</a></li>
            </ul>
          </div>

          <div>
            <div role="heading" aria-level={2} className="fh">Resources</div>
            <ul className="fl">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/free-audit">Free Website Audit</a></li>
              <li><a href="/roi-calculator">ROI Calculator</a></li>
              <li><a href="/case-studies">Our Work</a></li>
              <li><a href="/vs-agencies">vs. Agencies</a></li>
              <li><a href="/vs-wix">vs. Wix &amp; DIY</a></li>
              <li><a href="/vs-gargle">vs. Gargle</a></li>
            </ul>
          </div>

          <div>
            <div role="heading" aria-level={2} className="fh">Company</div>
            <ul className="fl">
              <li><a href="#about">About Erik</a></li>
              <li><a href="#book">Get a Quote</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <div role="heading" aria-level={2} className="fh">Contact</div>
            <ul className="fl">
              <li>
                <a href="mailto:blackdiamondcyber@gmail.com">
                  blackdiamondcyber@gmail.com
                </a>
              </li>
              <li>
                <a href="#book" style={{ color: 'var(--cyan)' }}>
                  Book a Strategy Call →
                </a>
              </li>
              <li style={{ color: 'var(--t3)', fontSize: '12px', marginTop: '4px' }}>Canyon Lake, TX</li>
              <li style={{ color: 'var(--t3)', fontSize: '12px' }}>Serving all 50 states</li>
            </ul>
          </div>
        </div>

        {/* NAP line */}
        <div style={{
          textAlign: 'center',
          padding: '16px 0',
          borderTop: '1px solid var(--hr)',
          marginTop: '24px',
          fontSize: '13px',
          color: 'var(--t3)',
        }}>
          Black Diamond Cyber &middot; Canyon Lake, TX &middot;{' '}
          <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--t3)' }}>blackdiamondcyber@gmail.com</a>
          {' '}&middot;{' '}
          <a href="https://www.linkedin.com/in/erik-pearson-a1a2b2206/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)' }}>LinkedIn</a>
        </div>

        {/* Backlink note */}
        <div style={{ textAlign: 'center', padding: '12px 0 0', fontSize: '11px', color: 'var(--t3)' }}>
          All client websites include a subtle &ldquo;Powered by Black Diamond Cyber&rdquo; backlink &mdash; great for your SEO and ours.
        </div>

        {/* Bottom bar */}
        <div className="fb">
          <span>&copy; 2026 Black Diamond Cybersecurity Consulting LLC. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
