import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#06080C',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Cyan accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '80px',
            right: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #5DC4E8, #2887CC)',
            borderRadius: '2px',
          }}
        />

        {/* Logo text */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#5DC4E8',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '40px',
            display: 'flex',
          }}
        >
          BLACK DIAMOND CYBER
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 400,
            color: '#DEE0E7',
            textAlign: 'center',
            lineHeight: 1.15,
            marginBottom: '32px',
            maxWidth: '900px',
            display: 'flex',
          }}
        >
          Dental Practice Websites That Fill Chairs
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: '#7E8396',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 600,
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <span>3-7 Day Delivery</span>
          <span style={{ color: '#5DC4E8' }}>|</span>
          <span>95+ PageSpeed</span>
          <span style={{ color: '#5DC4E8' }}>|</span>
          <span>You Own The Code</span>
        </div>

        {/* Bottom cyan accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '80px',
            right: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #2887CC, #5DC4E8)',
            borderRadius: '2px',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
