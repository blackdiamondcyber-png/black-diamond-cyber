export function Hero() {
  return (
    <section className="hero">
      <div className="c">
        <div className="rv">
          <div className="tag" style={{ marginBottom: '22px' }}>
            No Contracts &middot; Cancel Anytime
          </div>
          <h1>
            Websites &amp; Growth Systems
            <br />
            for Local <em>Businesses</em>
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--cyan)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '12px' }}>Websites &middot; Automation &middot; Growth &middot; No Contracts</p>
          <p className="hero-p">
            We build high-performance websites, AI chatbots, review automation,
            and lead nurture systems for dental practices, HVAC companies, and
            every local service business that wants more customers. Delivered in
            days. No contracts.
          </p>
          <div className="ha">
            <a href="#book" className="bp">
              Book Free Strategy Call
            </a>
            <a href="#work" className="bs">
              See Our Work
            </a>
          </div>
          <div className="hbar">
            <div>
              <div className="hv">
                3<span>-day</span>
              </div>
              <div className="hl">Avg. Delivery</div>
            </div>
            <div>
              <div className="hv">$997</div>
              <div className="hl">Starting At</div>
            </div>
            <div>
              <div className="hv">$0</div>
              <div className="hl">Contracts</div>
            </div>
          </div>
        </div>
        <div className="hero-vis rv d2">
          {/* Card 1 — Bright Smile Dental (front, largest) */}
          <div className="hc">
            <div className="hci">
              <div className="hcb">
                <div className="hcd"></div>
                <div className="hcd"></div>
                <div className="hcd"></div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Mini nav */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 8px', background: 'rgba(0,0,0,.4)', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                  <span style={{ fontSize: '5.5px', fontWeight: 800, color: 'rgba(255,255,255,.9)', letterSpacing: '.3px', textTransform: 'uppercase' as const }}>Bright Smile Dental</span>
                  <span style={{ fontSize: '4px', color: 'rgba(255,255,255,.35)' }}>Services &middot; About &middot; Insurance</span>
                </div>
                {/* Hero with photo */}
                <div style={{
                  height: '110px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#1B5E7A',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '8px 10px',
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.05) 100%)' }}></div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: '11px', color: '#fff', lineHeight: 1.15, marginBottom: '2px', textShadow: '0 1px 6px rgba(0,0,0,.5)' }}>Your Smile,<br/>Our Passion</div>
                    <div style={{ fontSize: '4px', color: 'rgba(255,255,255,.7)', marginBottom: '4px' }}>Family &amp; cosmetic dentistry in Austin, TX</div>
                    <div style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '8px', fontSize: '4px', fontWeight: 700, color: '#fff', background: '#2A9AB5', letterSpacing: '.3px', textTransform: 'uppercase' as const }}>Book Appointment</div>
                  </div>
                </div>
                {/* Service icons row */}
                <div style={{ display: 'flex', gap: '2px', padding: '4px 5px', background: 'rgba(0,0,0,.25)' }}>
                  {['◌ Cleanings', '◊ Implants', '★ Whitening', '◆ Crowns'].map((s) => (
                    <div key={s} style={{ flex: 1, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.03)', borderRadius: '2px', padding: '3px 2px', textAlign: 'center' as const }}>
                      <div style={{ fontSize: '3.5px', color: 'rgba(255,255,255,.4)', fontWeight: 600, letterSpacing: '.2px', textTransform: 'uppercase' as const }}>{s}</div>
                    </div>
                  ))}
                </div>
                {/* Trust stats row */}
                <div style={{ display: 'flex', gap: '2px', padding: '3px 5px', background: 'rgba(0,0,0,.15)', borderTop: '1px solid rgba(255,255,255,.03)' }}>
                  <div style={{ flex: 1, textAlign: 'center' as const }}><div style={{ fontSize: '4.5px', color: 'rgba(255,255,255,.35)', letterSpacing: '1px' }}>★★★★★</div><div style={{ fontSize: '2.5px', color: 'rgba(255,255,255,.2)', textTransform: 'uppercase' as const }}>4.9 Rating</div></div>
                  <div style={{ flex: 1, textAlign: 'center' as const }}><div style={{ fontSize: '5px', fontWeight: 800, color: 'rgba(255,255,255,.45)' }}>15+</div><div style={{ fontSize: '2.5px', color: 'rgba(255,255,255,.2)', textTransform: 'uppercase' as const }}>Years</div></div>
                  <div style={{ flex: 1, textAlign: 'center' as const }}><div style={{ fontSize: '5px', fontWeight: 800, color: 'rgba(255,255,255,.45)' }}>5K+</div><div style={{ fontSize: '2.5px', color: 'rgba(255,255,255,.2)', textTransform: 'uppercase' as const }}>Patients</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Summit HVAC (middle) */}
          <div className="hc">
            <div className="hci">
              <div className="hcb">
                <div className="hcd"></div>
                <div className="hcd"></div>
                <div className="hcd"></div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 8px', background: 'rgba(0,0,0,.4)', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                  <span style={{ fontSize: '5px', fontWeight: 800, color: 'rgba(255,255,255,.9)', letterSpacing: '.3px', textTransform: 'uppercase' as const }}>Summit HVAC</span>
                  <span style={{ fontSize: '3.5px', color: 'rgba(255,255,255,.3)' }}>Heating &middot; Cooling</span>
                </div>
                <div style={{
                  height: '95px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=250&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#8B4D1A',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '8px 10px',
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.05) 100%)' }}></div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: '10px', color: '#fff', lineHeight: 1.15, marginBottom: '2px', textShadow: '0 1px 6px rgba(0,0,0,.5)' }}>Denver&apos;s Trusted<br/>Heating &amp; Cooling</div>
                    <div style={{ fontSize: '3.5px', color: 'rgba(255,255,255,.65)', marginBottom: '3px' }}>24/7 emergency service. Licensed &amp; insured.</div>
                    <div style={{ display: 'inline-block', padding: '2px 7px', borderRadius: '8px', fontSize: '3.5px', fontWeight: 700, color: '#fff', background: '#D4893C', letterSpacing: '.3px', textTransform: 'uppercase' as const }}>Get Free Estimate</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '2px', padding: '3px 5px', background: 'rgba(0,0,0,.2)' }}>
                  {['☀ AC Repair', '♨ Furnace', '★ Install'].map((s) => (
                    <div key={s} style={{ flex: 1, background: 'rgba(255,255,255,.03)', borderRadius: '2px', padding: '3px 2px', textAlign: 'center' as const }}>
                      <div style={{ fontSize: '3px', color: 'rgba(255,255,255,.4)', fontWeight: 600, textTransform: 'uppercase' as const }}>{s}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '2px', padding: '2px 5px', background: 'rgba(0,0,0,.15)' }}>
                  <div style={{ flex: 1, textAlign: 'center' as const }}><div style={{ fontSize: '4px', color: 'rgba(255,255,255,.35)', letterSpacing: '1px' }}>★★★★★</div></div>
                  <div style={{ flex: 1, textAlign: 'center' as const }}><div style={{ fontSize: '4.5px', fontWeight: 800, color: 'rgba(255,255,255,.45)' }}>24/7</div></div>
                  <div style={{ flex: 1, textAlign: 'center' as const }}><div style={{ fontSize: '4.5px', fontWeight: 800, color: 'rgba(255,255,255,.45)' }}>2K+</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Greenline Electric (back, smallest) */}
          <div className="hc">
            <div className="hci">
              <div className="hcb">
                <div className="hcd"></div>
                <div className="hcd"></div>
                <div className="hcd"></div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 7px', background: 'rgba(0,0,0,.4)', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                  <span style={{ fontSize: '4.5px', fontWeight: 800, color: 'rgba(255,255,255,.9)', letterSpacing: '.3px', textTransform: 'uppercase' as const }}>Greenline Electric</span>
                  <span style={{ fontSize: '3px', color: 'rgba(255,255,255,.3)' }}>Residential &middot; Commercial</span>
                </div>
                <div style={{
                  height: '80px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#1A5530',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '6px 8px',
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.05) 100%)' }}></div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: '9px', color: '#fff', lineHeight: 1.15, textShadow: '0 1px 6px rgba(0,0,0,.5)' }}>Licensed. Insured.<br/>On Time.</div>
                    <div style={{ display: 'inline-block', padding: '2px 6px', borderRadius: '7px', fontSize: '3px', fontWeight: 700, color: '#fff', background: '#2D8B4E', marginTop: '3px', letterSpacing: '.3px', textTransform: 'uppercase' as const }}>Request Quote</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '2px', padding: '3px 4px', background: 'rgba(0,0,0,.2)' }}>
                  {['⚡ Wiring', '◌ Panels', '☀ Lighting'].map((s) => (
                    <div key={s} style={{ flex: 1, background: 'rgba(255,255,255,.03)', borderRadius: '2px', padding: '2px', textAlign: 'center' as const }}>
                      <div style={{ fontSize: '2.8px', color: 'rgba(255,255,255,.4)', fontWeight: 600, textTransform: 'uppercase' as const }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
