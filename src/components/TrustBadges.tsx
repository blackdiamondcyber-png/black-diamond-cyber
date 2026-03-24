const techStack = [
  { name: 'Next.js', icon: 'N' },
  { name: 'React', icon: 'R' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Tailwind CSS', icon: 'TW' },
  { name: 'Vercel', icon: 'V' },
  { name: 'Supabase', icon: 'SB' },
  { name: 'Stripe', icon: 'S' },
];

export function TrustBadges() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="c">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--t3)',
            }}
          >
            Built With Enterprise Tech
          </h3>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'var(--bg1)',
                border: '1px solid var(--hr)',
                borderRadius: '40px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--t2)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  background: 'rgba(40,135,204,.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'var(--blue)',
                  letterSpacing: '0.5px',
                }}
              >
                {tech.icon}
              </span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
