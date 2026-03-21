export function Pricing() {
  return (
    <section id="pricing">
      <div className="c">
        <div className="sh sc rv">
          <div className="tag" style={{ display: 'inline-flex' }}>
            Transparent Pricing
          </div>
          <h2 className="st">
            Premium Sites,
            <br />
            <em>Honest Prices</em>
          </h2>
          <p className="sd">
            No hidden fees. No contracts. Hosting, SSL, CDN, and support
            included.
          </p>
        </div>
        <div className="pgrid">
          {/* Starter */}
          <div className="pri rv">
            <div className="pt">Starter</div>
            <div className="pa">$997</div>
            <div className="pmm">
              then <b>$79/mo</b>
            </div>
            <ul className="pf">
              <li>5-7 page website</li>
              <li>Template-based design</li>
              <li>AI-generated copy</li>
              <li>Mobile responsive</li>
              <li>SSL &amp; CDN</li>
              <li>Basic SEO</li>
              <li>3-5 day delivery</li>
            </ul>
            <a href="#book" className="pb">
              Get Started
            </a>
          </div>

          {/* Professional (Featured) */}
          <div className="pri ft rv d1">
            <div className="pt">Professional</div>
            <div className="pa">$1,997</div>
            <div className="pmm">
              then <b>$129/mo</b>
            </div>
            <ul className="pf">
              <li>8-15 pages</li>
              <li>Semi-custom design</li>
              <li>Competitor analysis</li>
              <li>Local SEO setup</li>
              <li>Booking integration</li>
              <li>Monthly analytics</li>
              <li>5-7 day delivery</li>
            </ul>
            <a href="#book" className="pb">
              Get Started
            </a>
          </div>

          {/* Premium */}
          <div className="pri rv d2">
            <div className="pt">Premium</div>
            <div className="pa">$2,997</div>
            <div className="pmm">
              then <b>$199/mo</b>
            </div>
            <ul className="pf">
              <li>15-25+ pages</li>
              <li>Fully custom design</li>
              <li>Custom copywriting</li>
              <li>Full SEO + GEO</li>
              <li>Lead capture forms</li>
              <li>Unlimited updates</li>
              <li>10-14 day delivery</li>
            </ul>
            <a href="#book" className="pb">
              Get Started
            </a>
          </div>

          {/* Cinematic */}
          <div className="pri rv d3">
            <div className="pt">Cinematic</div>
            <div className="pa">$4,997</div>
            <div className="pmm">
              then <b>$249/mo</b>
            </div>
            <ul className="pf">
              <li>Everything in Premium</li>
              <li>AI 3D animated hero</li>
              <li>Scroll animations</li>
              <li>Video backgrounds</li>
              <li>Priority support</li>
              <li>Quarterly strategy call</li>
            </ul>
            <a href="#book" className="pb">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
