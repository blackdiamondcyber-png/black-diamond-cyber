import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <div className="grain"></div>
      <div className="pg">
        <Nav />
        <section
          style={{
            minHeight: '70dvh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '160px 24px 80px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '500px' }}>
            <div
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 400,
                color: 'var(--cyan)',
                lineHeight: 1,
                marginBottom: '16px',
                letterSpacing: '-0.04em',
                opacity: 0.4,
              }}
            >
              404
            </div>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 400,
                color: 'var(--text)',
                marginBottom: '16px',
                letterSpacing: '-0.03em',
              }}
            >
              Page not found.
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--t2)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              The page you are looking for does not exist or has been moved.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/" className="bp">
                Back to Home
              </a>
              <a href="#book" className="bs">
                Book a Call
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
