'use client';

/*
 * CSS-only abstract visual — replaces R3F to avoid Turbopack incompatibility.
 * Dark, subtle, metallic-feeling gradient orbs with slow CSS animation.
 * Inspired by LeftClick's approach: depth without distraction.
 */
export function Hero3DScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Large dark gradient orb — upper right */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: '800px',
          maxHeight: '800px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(40,135,204,.06) 0%, rgba(40,135,204,.02) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'heroOrb1 25s ease-in-out infinite',
        }}
      />
      {/* Smaller orb — lower left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '40vw',
          height: '40vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(93,196,232,.04) 0%, rgba(93,196,232,.01) 40%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'heroOrb2 30s ease-in-out infinite',
        }}
      />
      {/* Subtle center glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50vw',
          height: '30vw',
          maxWidth: '700px',
          maxHeight: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(40,135,204,.03) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes heroOrb1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(-40px, 30px) scale(1.05); }
              66% { transform: translate(20px, -20px) scale(0.95); }
            }
            @keyframes heroOrb2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -40px) scale(1.08); }
              66% { transform: translate(-20px, 20px) scale(0.92); }
            }
          `,
        }}
      />
    </div>
  );
}
