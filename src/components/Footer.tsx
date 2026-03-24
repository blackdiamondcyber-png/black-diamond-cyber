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
                    fontSize: '8px',
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: 'var(--green)', fontWeight: 700, letterSpacing: '1px' }}>
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
              <li><a href="/hvac">HVAC Companies</a></li>
              <li><a href="/plumbing">Plumbing</a></li>
              <li><a href="#">Electricians</a></li>
              <li><a href="#">Roofing</a></li>
              <li><a href="#">Med Spas</a></li>
            </ul>
          </div>

          <div>
            <h4>Compare</h4>
            <ul className="fl">
              <li><a href="/vs-agencies">vs. Agencies</a></li>
              <li><a href="/vs-wix">vs. Wix &amp; DIY</a></li>
              <li><a href="/vs-gargle">vs. Gargle</a></li>
              <li><a href="/roi-calculator">ROI Calculator</a></li>
              <li><a href="/free-audit">Free Audit</a></li>
              <li><a href="#work">Our Work</a></li>
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
              <li style={{ color: 'var(--t3)', fontSize: '10px', marginTop: '4px' }}>Canyon Lake, TX</li>
              <li style={{ color: 'var(--t3)', fontSize: '10px' }}>Serving all 50 states</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="fb">
          <span>&copy; 2026 Black Diamond Cybersecurity Consulting LLC. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
