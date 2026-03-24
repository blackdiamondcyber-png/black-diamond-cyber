export function Footer() {
  return (
    <footer className="foot">
      <div className="c">
        <div className="fg">
          <div>
            <div className="fw">
              BLACK DIAMOND <span>CYBER</span>
            </div>
            <p>
              AI-powered websites and growth systems for local service
              businesses. No contracts. Own your code.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="fl">
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Hosting &amp; CDN</a>
              </li>
              <li>
                <a href="#">SEO &amp; Analytics</a>
              </li>
              <li>
                <a href="#">AI Automation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Growth Systems</h4>
            <ul className="fl">
              <li>
                <a href="#">AI Chatbots</a>
              </li>
              <li>
                <a href="#">Review Automation</a>
              </li>
              <li>
                <a href="#">Lead Nurture</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul className="fl">
              <li>
                <a href="/dental">Dental</a>
              </li>
              <li>
                <a href="/hvac">HVAC</a>
              </li>
              <li>
                <a href="/plumbing">Plumbing</a>
              </li>
              <li>
                <a href="#">Electrical</a>
              </li>
              <li>
                <a href="#">Roofing</a>
              </li>
              <li>
                <a href="#">Med Spa</a>
              </li>
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
            </ul>
          </div>
        </div>
        {/* Trust badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {['No Contracts', 'Own Your Website', 'Cancel Anytime'].map((badge) => (
            <span
              key={badge}
              style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                border: '1px solid var(--hr)',
                borderRadius: '40px',
                padding: '6px 16px',
                background: 'var(--bg1)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="fb">
          <span>&copy; 2026 Black Diamond Cybersecurity Consulting LLC</span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
