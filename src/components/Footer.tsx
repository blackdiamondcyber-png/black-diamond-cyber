export function Footer() {
  return (
    <footer className="foot">
      <div className="c">
        <div className="fg" style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr' }}>
          <div>
            <div className="fw">
              BLACK DIAMOND <span>CYBER</span>
            </div>
            <p style={{ marginBottom: '12px' }}>
              AI-powered websites and growth systems for local service
              businesses. 3-day delivery. No contracts. Own your code.
            </p>
            {/* Trust pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {['No Contracts', 'Own Your Site', '3-Day Delivery'].map((badge) => (
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
            <h4>Services</h4>
            <ul className="fl">
              <li><a href="#services">Website Design</a></li>
              <li><a href="#services">Hosting &amp; CDN</a></li>
              <li><a href="#services">SEO &amp; Analytics</a></li>
              <li><a href="#services">AI Automation</a></li>
              <li><a href="#services">AI Chatbots</a></li>
              <li><a href="#services">Review Automation</a></li>
            </ul>
          </div>

          <div>
            <h4>Industries</h4>
            <ul className="fl">
              <li><a href="/dental">Dental Practices</a></li>
              <li><a href="/dental-website-design-texas">Dental — Texas</a></li>
              <li><a href="/hvac">HVAC Companies</a></li>
              <li><a href="/plumbing">Plumbers</a></li>
              <li><a href="#">Electricians</a></li>
              <li><a href="#">Roofers</a></li>
              <li><a href="#">Med Spas</a></li>
            </ul>
          </div>

          <div>
            <h4>Compare</h4>
            <ul className="fl">
              <li><a href="/vs-agencies">vs. Agencies</a></li>
              <li><a href="/vs-wix">vs. Wix &amp; DIY</a></li>
              <li><a href="/vs-templates">vs. Templates</a></li>
              <li><a href="/free-audit">Free Audit</a></li>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
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

        {/* Bottom bar */}
        <div className="fb">
          <span>&copy; 2026 Black Diamond Cyber LLC. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
