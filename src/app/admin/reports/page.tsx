export default function AdminReportsPage() {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <main
      style={{
        minHeight: '100dvh',
        background: 'var(--bg, #06080C)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 24px 40px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          background: 'var(--bg1, #0C0F16)',
          border: '1px solid var(--hr, rgba(255,255,255,0.04))',
          borderRadius: 20,
          padding: '36px 28px',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(24px, 4vw, 32px)',
              color: 'var(--text, #DEE0E7)',
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Client Reports
          </h1>
          <p
            style={{
              fontSize: 14,
              color: 'var(--t2, #7E8396)',
              lineHeight: 1.85,
              marginTop: 8,
            }}
          >
            Connect AgencyAnalytics API to view client SEO reports.
          </p>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse' as const,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                {['Client', 'Tier', 'Traffic', 'Rankings', 'Leads', 'Last Report'].map(
                  (col) => (
                    <th
                      key={col}
                      style={{
                        textAlign: 'left' as const,
                        padding: '12px 16px',
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase' as const,
                        color: 'var(--t3, #474C5E)',
                        borderBottom: '1px solid var(--hr, rgba(255,255,255,0.04))',
                        whiteSpace: 'nowrap' as const,
                      }}
                    >
                      {col}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {skeletonRows.map((_, i) => (
                <tr key={i}>
                  {Array.from({ length: 6 }).map((__, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid var(--hr, rgba(255,255,255,0.04))',
                      }}
                    >
                      <div
                        style={{
                          height: 14,
                          borderRadius: 6,
                          background: 'var(--bg2, #12151E)',
                          width: j === 0 ? '70%' : j === 1 ? '50%' : '40%',
                          animation: 'pulse 2s ease-in-out infinite',
                          animationDelay: `${i * 0.1 + j * 0.05}s`,
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Integration CTA */}
        <div
          style={{
            marginTop: 32,
            padding: '24px',
            background: 'var(--blue-d, rgba(40,135,204,0.08))',
            border: '1px solid var(--hr-b, rgba(40,135,204,0.12))',
            borderRadius: 12,
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: 'var(--t2, #7E8396)',
              lineHeight: 1.7,
            }}
          >
            To populate this dashboard, add your{' '}
            <span style={{ color: 'var(--cyan, #5DC4E8)', fontWeight: 600 }}>
              AgencyAnalytics API key
            </span>{' '}
            to your environment variables.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </main>
  );
}
