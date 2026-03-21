export function Founder() {
  return (
    <section className="fdr" id="about">
      <div className="c">
        <div className="fp rv">
          {/* Clean monogram instead of the clip-art logo */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            color: '#fff',
            letterSpacing: '-1px',
            boxShadow: '0 8px 32px rgba(40,135,204,.25), inset 0 1px 0 rgba(255,255,255,.2)',
          }}>
            EP
          </div>
          <div className="fp-info">
            <h3>Erik Pearson</h3>
            <p>Founder &amp; CEO</p>
          </div>
          <div className="fp-badges">
            <span className="fp-badge">Industry Veteran</span>
            <span className="fp-badge">AI-Powered</span>
            <span className="fp-badge">127+ Sites</span>
          </div>
        </div>
        <div className="rv d1">
          <div className="sh">
            <div className="tag" style={{ marginBottom: '12px' }}>
              About
            </div>
            <h2 className="st">
              Built by Someone in
              <br />
              Your <em>Industry</em>
            </h2>
          </div>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--t2)',
              lineHeight: 1.85,
              marginBottom: '14px',
            }}
          >
            I didn&#39;t learn about local businesses from a textbook. I&#39;ve
            spent years working directly with dental practices, contractors, and
            service companies &mdash; learning what makes their customers call,
            what makes them bounce, and what turns a website from a cost into a
            revenue engine.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--t2)',
              lineHeight: 1.85,
              marginBottom: '14px',
            }}
          >
            Black Diamond Cyber exists because I watched too many good businesses
            overpay for mediocre websites. We use AI to deliver what agencies
            charge $10K&ndash;$15K for &mdash; at a fraction of the cost and
            time.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--t2)',
              lineHeight: 1.85,
            }}
          >
            The savings go directly to you. The results speak for themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
