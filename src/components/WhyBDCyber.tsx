export function WhyBDCyber() {
  const comparisons = [
    {
      vs: 'vs. Wix & DIY Builders',
      stat: '6.8s → 1.8s',
      statLabel: 'Page Load Time',
      point: 'Their sites load in 6.8 seconds. Ours load in under 2. Google notices — and so do your customers.',
    },
    {
      vs: 'vs. Dental Agencies',
      stat: '$0',
      statLabel: 'Contracts Required',
      point: 'No 12-month contracts. No $5K setup fees. No 6-week timelines. Cancel anytime, own your website.',
    },
    {
      vs: 'vs. Template Companies',
      stat: '100%',
      statLabel: 'Custom Built',
      point: 'Your competitor down the street has the same template. We build every site from scratch — your brand, your way.',
    },
    {
      vs: 'vs. Doing Nothing',
      stat: '15-30',
      statLabel: 'Patients Lost/Month',
      point: 'Every month without a great website costs you 15-30 potential patients. At $800-$2,000 per patient, that adds up fast.',
    },
  ];

  return (
    <section id="why">
      <div className="c">
        <div className="sh sc rv">
          <div className="tag" style={{ display: 'inline-flex' }}>Why Switch</div>
          <h2 className="st">Why Local Businesses Switch to<br /><em>Black Diamond</em></h2>
          <p className="sd">We compared ourselves to every alternative so you don&apos;t have to.</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '14px',
        }}>
          {comparisons.map((c, i) => (
            <div
              key={c.vs}
              className={`svc rv${i > 0 ? ` d${i}` : ''}`}
            >
              <div style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                marginBottom: '14px',
              }}>
                {c.vs}
              </div>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '36px',
                color: 'var(--text)',
                lineHeight: 1,
                marginBottom: '2px',
              }}>
                {c.stat}
              </div>
              <div style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--t3)',
                marginBottom: '16px',
              }}>
                {c.statLabel}
              </div>
              <p style={{
                fontSize: '12px',
                color: 'var(--t2)',
                lineHeight: 1.7,
              }}>
                {c.point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
