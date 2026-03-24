'use client';

import { motion } from 'framer-motion';

export function HeroBrowserMockup() {
  return (
    <motion.div
      className="hero-mockup-wrap"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          perspective: '1200px',
        }}
      >
        <div
          style={{
            transform: 'rotateY(-5deg)',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#0E1218',
            border: '1px solid rgba(93,196,232,.12)',
            boxShadow:
              '0 24px 80px rgba(40,135,204,.12), 0 8px 32px rgba(0,0,0,.5), 0 0 0 1px rgba(93,196,232,.06)',
            position: 'relative',
          }}
        >
          {/* Browser chrome bar */}
          <div
            style={{
              height: '32px',
              background: 'rgba(0,0,0,.4)',
              borderBottom: '1px solid rgba(255,255,255,.04)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              gap: '6px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />
            <div
              style={{
                marginLeft: '12px',
                flex: 1,
                height: '18px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,.05)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                fontSize: '9px',
                color: 'var(--t3)',
                letterSpacing: '0.3px',
              }}
            >
              canyonlakefamilydentistry.com
            </div>
          </div>

          {/* Website mockup content */}
          <div style={{ padding: '0', position: 'relative' }}>
            {/* Nav bar */}
            <div
              style={{
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,.04)',
                background: 'rgba(255,255,255,.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#34D399" opacity="0.8" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#34D399" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.3px' }}>
                  Canyon Lake Family Dentistry
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['Services', 'About', 'Contact'].map((item) => (
                  <span
                    key={item}
                    style={{ fontSize: '8px', color: 'var(--t3)', fontWeight: 600, letterSpacing: '0.5px' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero area */}
            <div
              style={{
                padding: '28px 16px 24px',
                background: 'linear-gradient(180deg, rgba(26,107,63,.08) 0%, rgba(52,211,153,.04) 50%, transparent 100%)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '6px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#34D399',
                  marginBottom: '6px',
                }}
              >
                Your Family Deserves the Best Care
              </div>
              <div
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '16px',
                  color: 'var(--text)',
                  lineHeight: 1.15,
                  marginBottom: '6px',
                }}
              >
                Canyon Lake
                <br />
                <em style={{ color: '#34D399' }}>Family Dentistry</em>
              </div>
              <div
                style={{
                  fontSize: '7px',
                  color: 'var(--t2)',
                  marginBottom: '10px',
                  lineHeight: 1.5,
                }}
              >
                Gentle, modern dentistry for the whole family.
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  background: '#34D399',
                  color: '#06080C',
                  fontSize: '7px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                }}
              >
                Book Appointment
              </div>
            </div>

            {/* Services preview row */}
            <div
              style={{
                padding: '12px 16px 16px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '6px',
              }}
            >
              {[
                { name: 'General', color: 'rgba(40,135,204,.12)' },
                { name: 'Cosmetic', color: 'rgba(52,211,153,.1)' },
                { name: 'Implants', color: 'rgba(93,196,232,.1)' },
              ].map((svc) => (
                <div
                  key={svc.name}
                  style={{
                    padding: '8px 6px',
                    borderRadius: '6px',
                    background: svc.color,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,.06)',
                      margin: '0 auto 4px',
                    }}
                  />
                  <span style={{ fontSize: '7px', color: 'var(--t2)', fontWeight: 600 }}>{svc.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PageSpeed badge overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(6,8,12,.9)',
              border: '2px solid #34D399',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(52,211,153,.25)',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#34D399', lineHeight: 1 }}>97</span>
            <span style={{ fontSize: '5px', fontWeight: 700, color: 'var(--t3)', letterSpacing: '0.5px', marginTop: '1px' }}>
              PAGESPEED
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .hero-mockup-wrap { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-mockup-wrap { animation: none !important; }
        }
      `}} />
    </motion.div>
  );
}
