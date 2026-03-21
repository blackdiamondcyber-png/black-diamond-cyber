export function Portfolio() {
  return (
    <section id="work">
      <div className="c">
        <div className="sh rv">
          <div className="tag" style={{ marginBottom: '14px' }}>
            Our Work
          </div>
          <h2 className="st">
            Recent Client <em>Launches</em>
          </h2>
          <p className="sd">
            Every site custom-built from competitor research. Every result
            tracked and measured.
          </p>
        </div>
      </div>
      <div className="ps rv d1">
        {/* Card 1: Bright Smile Dental */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#0B1820' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>brightsmileaustin.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">Bright Smile Dental</span>
                <span className="ms-links">
                  Services &nbsp;&middot;&nbsp; About &nbsp;&middot;&nbsp;
                  Insurance
                </span>
                <span className="ms-phone">(512) 555-0147</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=640&h=360&fit=crop)',
                  backgroundColor: '#1B5E7A',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Your Smile,
                    <br />
                    Our Passion
                  </div>
                  <div className="ms-sub">
                    Family &amp; cosmetic dentistry in Austin, TX. New patients
                    welcome.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#2A9AB5' }}
                  >
                    Book Appointment
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9676;</div>
                  <div className="ms-svc-name">Cleanings</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9674;</div>
                  <div className="ms-svc-name">Implants</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9733;</div>
                  <div className="ms-svc-name">Whitening</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9670;</div>
                  <div className="ms-svc-name">Crowns</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <div className="ms-stat-lbl">4.9 Rating</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">15+</div>
                  <div className="ms-stat-lbl">Years</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">5K+</div>
                  <div className="ms-stat-lbl">Patients</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>Bright Smile Dental</h3>
            <p>General &amp; Cosmetic &middot; Austin, TX</p>
            <div className="res">+47 new patients/mo since launch</div>
            <div className="ptags">
              <span className="ptg hi">Dental</span>
              <span className="ptg">Custom</span>
              <span className="ptg">SEO</span>
            </div>
          </div>
        </div>

        {/* Card 2: Summit HVAC */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#1A0E04' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>summithvacdenver.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">Summit HVAC</span>
                <span className="ms-links">
                  Heating &nbsp;&middot;&nbsp; Cooling &nbsp;&middot;&nbsp;
                  Reviews
                </span>
                <span className="ms-phone">(720) 555-0389</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=640&h=360&fit=crop)',
                  backgroundColor: '#8B4D1A',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Denver&#39;s Trusted
                    <br />
                    Heating &amp; Cooling
                  </div>
                  <div className="ms-sub">
                    24/7 emergency service. Licensed &amp; insured since 2010.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#D4893C' }}
                  >
                    Get Free Estimate
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9728;</div>
                  <div className="ms-svc-name">AC Repair</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9832;</div>
                  <div className="ms-svc-name">Furnace</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#8634;</div>
                  <div className="ms-svc-name">Tune-Up</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9733;</div>
                  <div className="ms-svc-name">Install</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <div className="ms-stat-lbl">4.8 Rating</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">24/7</div>
                  <div className="ms-stat-lbl">Service</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">2K+</div>
                  <div className="ms-stat-lbl">Jobs Done</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>Summit HVAC Services</h3>
            <p>Heating &amp; Cooling &middot; Denver, CO</p>
            <div className="res">312% increase in web leads</div>
            <div className="ptags">
              <span className="ptg hi">HVAC</span>
              <span className="ptg">Premium</span>
              <span className="ptg">Analytics</span>
            </div>
          </div>
        </div>

        {/* Card 3: Apex Plumbing */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#061420' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>apexplumbingaz.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">Apex Plumbing</span>
                <span className="ms-links">
                  Residential &nbsp;&middot;&nbsp; Commercial &nbsp;&middot;&nbsp;
                  Emergency
                </span>
                <span className="ms-phone">(480) 555-0221</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=640&h=360&fit=crop)',
                  backgroundColor: '#1A5580',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Fast. Reliable.
                    <br />
                    Guaranteed.
                  </div>
                  <div className="ms-sub">
                    Same-day plumbing repair in Phoenix metro. No trip fee.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#2887CC' }}
                  >
                    Call Now - 24/7
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#128167;</div>
                  <div className="ms-svc-name">Leak Fix</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9676;</div>
                  <div className="ms-svc-name">Drains</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9670;</div>
                  <div className="ms-svc-name">Remodel</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9888;</div>
                  <div className="ms-svc-name">Emergency</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-stat-num">#1</div>
                  <div className="ms-stat-lbl">On Google</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">$0</div>
                  <div className="ms-stat-lbl">Trip Fee</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">100%</div>
                  <div className="ms-stat-lbl">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>Apex Plumbing Co.</h3>
            <p>Residential &amp; Commercial &middot; Phoenix, AZ</p>
            <div className="res">
              Ranking #1 for &quot;plumber near me&quot;
            </div>
            <div className="ptags">
              <span className="ptg hi">Plumbing</span>
              <span className="ptg">SEO</span>
              <span className="ptg">GEO</span>
            </div>
          </div>
        </div>

        {/* Card 4: Greenline Electric */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#071208' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>greenlineelectric.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">Greenline Electric</span>
                <span className="ms-links">
                  Residential &nbsp;&middot;&nbsp; Commercial &nbsp;&middot;&nbsp;
                  Contact
                </span>
                <span className="ms-phone">(704) 555-0863</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=640&h=360&fit=crop)',
                  backgroundColor: '#1A5530',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Licensed. Insured.
                    <br />
                    On Time.
                  </div>
                  <div className="ms-sub">
                    Charlotte&#39;s highest-rated electricians. Free estimates on
                    all work.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#2D8B4E' }}
                  >
                    Request Quote
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9889;</div>
                  <div className="ms-svc-name">Wiring</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9676;</div>
                  <div className="ms-svc-name">Panels</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9728;</div>
                  <div className="ms-svc-name">Lighting</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9670;</div>
                  <div className="ms-svc-name">Generators</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <div className="ms-stat-lbl">5.0 Rating</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">500+</div>
                  <div className="ms-stat-lbl">5-Star</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">Same</div>
                  <div className="ms-stat-lbl">Day Svc</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>Greenline Electrical</h3>
            <p>Licensed Electricians &middot; Charlotte, NC</p>
            <div className="res">84 booked jobs from website in Q1</div>
            <div className="ptags">
              <span className="ptg hi">Electrical</span>
              <span className="ptg">Cinematic</span>
            </div>
          </div>
        </div>

        {/* Card 5: RedShield Roofing */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#180808' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>redshieldroofing.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">RedShield Roofing</span>
                <span className="ms-links">
                  Services &nbsp;&middot;&nbsp; Gallery &nbsp;&middot;&nbsp;
                  Financing
                </span>
                <span className="ms-phone">(615) 555-0712</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=640&h=360&fit=crop)',
                  backgroundColor: '#7A1A10',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Protecting What
                    <br />
                    Matters Most
                  </div>
                  <div className="ms-sub">
                    Nashville&#39;s storm damage experts. Insurance claims
                    specialists.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#B03A2E' }}
                  >
                    Free Inspection
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#127968;</div>
                  <div className="ms-svc-name">Replace</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9670;</div>
                  <div className="ms-svc-name">Repair</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9888;</div>
                  <div className="ms-svc-name">Storm</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9676;</div>
                  <div className="ms-svc-name">Gutters</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-stat-num">4</div>
                  <div className="ms-stat-lbl">Locations</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">$0</div>
                  <div className="ms-stat-lbl">Down</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">GAF</div>
                  <div className="ms-stat-lbl">Certified</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>RedShield Roofing</h3>
            <p>Storm Damage &middot; Nashville, TN</p>
            <div className="res">$340K in attributed revenue</div>
            <div className="ptags">
              <span className="ptg hi">Roofing</span>
              <span className="ptg">Premium</span>
            </div>
          </div>
        </div>

        {/* Card 6: Luxe Aesthetics */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#100818' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>luxeaestheticsaz.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">Luxe Aesthetics</span>
                <span className="ms-links">
                  Treatments &nbsp;&middot;&nbsp; About &nbsp;&middot;&nbsp;
                  Gallery
                </span>
                <span className="ms-phone">(480) 555-0194</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=640&h=360&fit=crop)',
                  backgroundColor: '#4A2070',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Reveal Your
                    <br />
                    Best Self
                  </div>
                  <div className="ms-sub">
                    Botox, fillers &amp; body contouring in Scottsdale.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#7B4EA0' }}
                  >
                    Book Consultation
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#10024;</div>
                  <div className="ms-svc-name">Botox</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9676;</div>
                  <div className="ms-svc-name">Fillers</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9733;</div>
                  <div className="ms-svc-name">Facials</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9670;</div>
                  <div className="ms-svc-name">Laser</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <div className="ms-stat-lbl">5.0 Rating</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">Board</div>
                  <div className="ms-stat-lbl">Certified</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">VIP</div>
                  <div className="ms-stat-lbl">Rewards</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>Luxe Aesthetics Med Spa</h3>
            <p>Cosmetic Treatments &middot; Scottsdale, AZ</p>
            <div className="res">22 consults/week from organic search</div>
            <div className="ptags">
              <span className="ptg hi">Med Spa</span>
              <span className="ptg">3D Hero</span>
            </div>
          </div>
        </div>

        {/* Card 7: Crestwood Veterinary */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#061212' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>crestwoodvet.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">Crestwood Vet</span>
                <span className="ms-links">
                  Services &nbsp;&middot;&nbsp; Team &nbsp;&middot;&nbsp;
                  Emergency
                </span>
                <span className="ms-phone">(503) 555-0438</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=640&h=360&fit=crop)',
                  backgroundColor: '#12604A',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Compassionate
                    <br />
                    Pet Care
                  </div>
                  <div className="ms-sub">
                    Portland&#39;s trusted veterinary clinic. Walk-ins welcome.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#1A8B6B' }}
                  >
                    Book Visit
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#128054;</div>
                  <div className="ms-svc-name">Wellness</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9676;</div>
                  <div className="ms-svc-name">Surgery</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9888;</div>
                  <div className="ms-svc-name">Urgent</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9670;</div>
                  <div className="ms-svc-name">Dental</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-stat-num">20+</div>
                  <div className="ms-stat-lbl">Years</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">3</div>
                  <div className="ms-stat-lbl">Vets</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">Open</div>
                  <div className="ms-stat-lbl">7 Days</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>Crestwood Veterinary</h3>
            <p>Small Animal &amp; Emergency &middot; Portland, OR</p>
            <div className="res">2.8x more appointment requests</div>
            <div className="ptags">
              <span className="ptg hi">Veterinary</span>
              <span className="ptg">Booking</span>
            </div>
          </div>
        </div>

        {/* Card 8: Precision Lawn & Landscape */}
        <div className="pc">
          <div className="pp">
            <div className="mini-site" style={{ background: '#0A1206' }}>
              <div className="ms-chrome">
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-dot"></div>
                <div className="ms-addr">
                  <span>precisionlawncare.com</span>
                </div>
              </div>
              <div className="ms-nav">
                <span className="ms-logo">Precision Lawn</span>
                <span className="ms-links">
                  Services &nbsp;&middot;&nbsp; Gallery &nbsp;&middot;&nbsp;
                  Seasonal
                </span>
                <span className="ms-phone">(512) 555-0591</span>
              </div>
              <div
                className="ms-hero"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1558904541-efa843a96f01?w=640&h=360&fit=crop)',
                  backgroundColor: '#3A6820',
                }}
              >
                <div className="ms-hero-txt">
                  <div className="ms-h1">
                    Your Yard.
                    <br />
                    Perfected.
                  </div>
                  <div className="ms-sub">
                    Full-service landscaping, mowing &amp; design in Austin.
                  </div>
                  <div
                    className="ms-cta"
                    style={{ background: '#4A8A2E' }}
                  >
                    Get Free Quote
                  </div>
                </div>
              </div>
              <div className="ms-services">
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#127807;</div>
                  <div className="ms-svc-name">Mowing</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9676;</div>
                  <div className="ms-svc-name">Design</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#128167;</div>
                  <div className="ms-svc-name">Irrigation</div>
                </div>
                <div className="ms-svc">
                  <div className="ms-svc-icon">&#9670;</div>
                  <div className="ms-svc-name">Hardscape</div>
                </div>
              </div>
              <div className="ms-trust">
                <div className="ms-stat">
                  <div className="ms-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <div className="ms-stat-lbl">4.9 Rating</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">Page</div>
                  <div className="ms-stat-lbl">1 Google</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">Free</div>
                  <div className="ms-stat-lbl">Estimates</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pm">
            <h3>Precision Lawn &amp; Landscape</h3>
            <p>Full-Service Landscaping &middot; Austin, TX</p>
            <div className="res">First page Google in 6 weeks</div>
            <div className="ptags">
              <span className="ptg hi">Landscaping</span>
              <span className="ptg">SEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
