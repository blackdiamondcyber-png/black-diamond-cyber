'use client';

import { motion } from 'framer-motion';

export function HeroBrowserMockup() {
  return (
    <motion.div
      className="hero-mockup-wrap"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        marginTop: '48px',
        position: 'relative',
      }}
    >
      {/* Glow behind the mockup */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background:
            'radial-gradient(ellipse at center, rgba(40,135,204,.1) 0%, rgba(93,196,232,.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          perspective: '1200px',
          position: 'relative',
        }}
      >
        <motion.div
          whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          style={{
            transform: 'rotateY(-3deg) rotateX(2deg)',
            borderRadius: '14px',
            overflow: 'hidden',
            background: '#0E1218',
            border: '1px solid rgba(93,196,232,.15)',
            boxShadow:
              '0 32px 100px rgba(40,135,204,.15), 0 12px 40px rgba(0,0,0,.6), 0 0 0 1px rgba(93,196,232,.08)',
            position: 'relative',
          }}
        >
          {/* Browser chrome bar */}
          <div
            style={{
              height: '36px',
              background: 'rgba(0,0,0,.5)',
              borderBottom: '1px solid rgba(255,255,255,.06)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 14px',
              gap: '7px',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#EF4444',
                boxShadow: '0 0 0 0.5px rgba(0,0,0,.3)',
              }}
            />
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#F59E0B',
                boxShadow: '0 0 0 0.5px rgba(0,0,0,.3)',
              }}
            />
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#34D399',
                boxShadow: '0 0 0 0.5px rgba(0,0,0,.3)',
              }}
            />
            <div
              style={{
                marginLeft: '14px',
                flex: 1,
                height: '20px',
                borderRadius: '6px',
                background: 'rgba(255,255,255,.06)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                gap: '6px',
              }}
            >
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <rect
                  x="1"
                  y="4"
                  width="6"
                  height="4.5"
                  rx="1"
                  stroke="rgba(52,211,153,.5)"
                  strokeWidth="0.8"
                />
                <path
                  d="M2.5 4V2.5a1.5 1.5 0 013 0V4"
                  stroke="rgba(52,211,153,.5)"
                  strokeWidth="0.8"
                />
              </svg>
              <span
                style={{
                  fontSize: '10px',
                  color: 'var(--t3)',
                  letterSpacing: '0.3px',
                  fontWeight: 500,
                }}
              >
                canyonlakefamilydentistry.com
              </span>
            </div>
          </div>

          {/* Website mockup content */}
          <div style={{ position: 'relative' }}>
            {/* Nav bar */}
            <div
              style={{
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,.05)',
                background: 'rgba(255,255,255,.02)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    fill="#34D399"
                    opacity="0.8"
                  />
                  <path
                    d="M2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#34D399"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '0.3px',
                  }}
                >
                  Canyon Lake Family Dentistry
                </span>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                {['Services', 'About', 'Insurance'].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '9px',
                      color: 'var(--t3)',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item}
                  </span>
                ))}
                <span
                  style={{
                    fontSize: '8px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    background: '#34D399',
                    color: '#06080C',
                    borderRadius: '4px',
                    letterSpacing: '0.5px',
                  }}
                >
                  Book Now
                </span>
              </div>
            </div>

            {/* Hero area */}
            <div
              style={{
                padding: '32px 24px 28px',
                background:
                  'linear-gradient(180deg, rgba(26,107,63,.08) 0%, rgba(52,211,153,.04) 50%, transparent 100%)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '7px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#34D399',
                  marginBottom: '8px',
                }}
              >
                Accepting New Patients
              </div>
              <div
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '22px',
                  color: 'var(--text)',
                  lineHeight: 1.15,
                  marginBottom: '8px',
                }}
              >
                Canyon Lake
                <br />
                <em style={{ color: '#34D399' }}>Family Dentistry</em>
              </div>
              <div
                style={{
                  fontSize: '9px',
                  color: 'var(--t2)',
                  marginBottom: '14px',
                  lineHeight: 1.5,
                  maxWidth: '320px',
                  margin: '0 auto 14px',
                }}
              >
                Gentle, modern dentistry for the whole family. Same-day
                appointments available.
              </div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '5px 18px',
                    borderRadius: '20px',
                    background: '#34D399',
                    color: '#06080C',
                    fontSize: '8px',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  Book Appointment
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '5px 18px',
                    borderRadius: '20px',
                    border: '1px solid rgba(52,211,153,.3)',
                    color: '#34D399',
                    fontSize: '8px',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  Call Now
                </div>
              </div>
            </div>

            {/* Services preview row */}
            <div
              style={{
                padding: '14px 20px 18px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: '8px',
              }}
            >
              {[
                { name: 'General', icon: '🦷', color: 'rgba(40,135,204,.12)' },
                { name: 'Cosmetic', icon: '✨', color: 'rgba(52,211,153,.1)' },
                { name: 'Implants', icon: '🔩', color: 'rgba(93,196,232,.1)' },
                { name: 'Ortho', icon: '😁', color: 'rgba(139,92,246,.1)' },
              ].map((svc) => (
                <div
                  key={svc.name}
                  style={{
                    padding: '10px 6px',
                    borderRadius: '8px',
                    background: svc.color,
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,.04)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      marginBottom: '4px',
                    }}
                  >
                    {svc.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '7px',
                      color: 'var(--t2)',
                      fontWeight: 600,
                    }}
                  >
                    {svc.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust badges row */}
            <div
              style={{
                padding: '0 20px 16px',
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              {['HIPAA Compliant', '5-Star Rated', 'Same-Day Appts'].map(
                (badge) => (
                  <span
                    key={badge}
                    style={{
                      fontSize: '6px',
                      fontWeight: 700,
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      color: 'rgba(52,211,153,.6)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px',
                    }}
                  >
                    <span style={{ color: '#34D399', fontSize: '7px' }}>
                      ✓
                    </span>
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          {/* PageSpeed badge overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(6,8,12,.92)',
              border: '2px solid #34D399',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(52,211,153,.3)',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#34D399',
                lineHeight: 1,
              }}
            >
              97
            </span>
            <span
              style={{
                fontSize: '5px',
                fontWeight: 700,
                color: 'var(--t3)',
                letterSpacing: '0.5px',
                marginTop: '1px',
              }}
            >
              PAGESPEED
            </span>
          </div>

          {/* "Built by BDC" label */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'rgba(6,8,12,.85)',
              border: '1px solid rgba(93,196,232,.12)',
            }}
          >
            <span
              style={{
                fontSize: '6px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
              }}
            >
              ◆ Built by Black Diamond Cyber
            </span>
          </div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hero-mockup-wrap {
          margin-top: 48px;
        }
        @media (max-width: 640px) {
          .hero-mockup-wrap {
            margin-top: 32px;
            transform: scale(0.85);
            transform-origin: top center;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-mockup-wrap { animation: none !important; }
          .hero-mockup-wrap * { animation: none !important; transition: none !important; }
        }
      `,
        }}
      />
    </motion.div>
  );
}
