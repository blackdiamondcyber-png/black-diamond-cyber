'use client';

export function DiamondAccent({ size = 24 }: { size?: number }) {
  return (
    <div
      className="diamond-sep"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        position: 'relative',
      }}
    >
      {/* Gradient line left */}
      <div
        style={{
          flex: 1,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 5%, rgba(40,135,204,.08) 50%, rgba(93,196,232,.12) 100%)',
        }}
      />

      {/* Diamond SVG */}
      <div
        className="diamond-spin"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          margin: '0 16px',
          opacity: 0.18,
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 40 40"
          width={size}
          height={size}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Top facet */}
          <path d="M20 2 L32 16 L20 20 Z" fill="#5DC4E8" opacity="0.6" />
          {/* Right facet */}
          <path d="M32 16 L38 20 L20 20 Z" fill="#2887CC" opacity="0.5" />
          {/* Bottom facet */}
          <path d="M20 20 L38 20 L20 38 Z" fill="#5DC4E8" opacity="0.35" />
          {/* Left facet */}
          <path d="M2 20 L20 2 L20 20 Z" fill="#2887CC" opacity="0.45" />
          {/* Bottom-left facet */}
          <path d="M2 20 L20 20 L20 38 Z" fill="#5DC4E8" opacity="0.25" />
          {/* Top-right highlight */}
          <path d="M20 2 L38 20 L32 16 Z" fill="#A8E0F6" opacity="0.3" />
        </svg>
      </div>

      {/* Gradient line right */}
      <div
        style={{
          flex: 1,
          height: '1px',
          background:
            'linear-gradient(90deg, rgba(93,196,232,.12) 0%, rgba(40,135,204,.08) 50%, transparent 95%)',
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes diamondSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .diamond-spin {
          animation: diamondSpin 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .diamond-spin { animation: none !important; }
        }
      `}} />
    </div>
  );
}
