export function Reviews() {
  return (
    <section id="reviews">
      <div className="c">
        <div className="sh rv">
          <div className="tag" style={{ marginBottom: '12px' }}>
            Client Reviews
          </div>
          <h2 className="st">
            What Business Owners
            <br />
            Are <em>Saying</em>
          </h2>
        </div>
      </div>
      <div className="rs rv d1" style={{ padding: '0 24px' }}>
        {/* Review 1 */}
        <div className="rc">
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}><span className="ptg hi">Dental</span><span className="ptg" style={{ borderColor: 'rgba(52,211,153,.2)', color: 'var(--green)' }}>Verified</span></div>
          <blockquote>
            &ldquo;We had zero web presence before Erik stepped in. Four days
            later we had a site that looks like we spent $15K on it. Within 30
            days, 23 new patients booked directly through the website.&rdquo;
          </blockquote>
          <div className="met">+23 patients in month 1</div>
          <div className="ra">
            <div className="rav">RK</div>
            <div>
              <h4>Dr. Rachel Kwon, DDS</h4>
              <p>Bright Smile Dental &middot; Austin, TX</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="rc">
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}><span className="ptg hi">HVAC</span><span className="ptg" style={{ borderColor: 'rgba(52,211,153,.2)', color: 'var(--green)' }}>Verified</span></div>
          <blockquote>
            &ldquo;Our old GoDaddy site was embarrassing. BDC rebuilt it in 5
            days and within 6 weeks we were on page 1 of Google for &#39;HVAC
            repair Denver.&#39; We&#39;ve tracked $47K in jobs directly from the
            site this quarter.&rdquo;
          </blockquote>
          <div className="met">$47K attributed revenue in Q1</div>
          <div className="ra">
            <div className="rav">MT</div>
            <div>
              <h4>Mike Torres, Owner</h4>
              <p>Summit HVAC Services &middot; Denver, CO</p>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="rc">
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}><span className="ptg hi">Plumbing</span><span className="ptg" style={{ borderColor: 'rgba(52,211,153,.2)', color: 'var(--green)' }}>Verified</span></div>
          <blockquote>
            &ldquo;The monthly reports show exactly how many people visited,
            where they came from, and how many clicked &#39;Request
            Estimate.&#39; Last month: 89 estimate requests. That&#39;s insane
            for a plumbing company.&rdquo;
          </blockquote>
          <div className="met">89 estimate requests last month</div>
          <div className="ra">
            <div className="rav">JR</div>
            <div>
              <h4>James Ruiz, Owner</h4>
              <p>Apex Plumbing Co. &middot; Phoenix, AZ</p>
            </div>
          </div>
        </div>

        {/* Review 4 */}
        <div className="rc">
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}><span className="ptg hi">Electrical</span><span className="ptg" style={{ borderColor: 'rgba(52,211,153,.2)', color: 'var(--green)' }}>Verified</span></div>
          <blockquote>
            &ldquo;I was paying another company $350/month and my site looked
            like 2016. Erik rebuilt it for less than one month of my old
            contract. Three competitors have asked who designed it.&rdquo;
          </blockquote>
          <div className="met">3 competitors asked who built it</div>
          <div className="ra">
            <div className="rav">KW</div>
            <div>
              <h4>Kevin Walsh, Owner</h4>
              <p>Greenline Electrical &middot; Charlotte, NC</p>
            </div>
          </div>
        </div>

        {/* Review 5 */}
        <div className="rc">
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}><span className="ptg hi">Roofing</span><span className="ptg" style={{ borderColor: 'rgba(52,211,153,.2)', color: 'var(--green)' }}>Verified</span></div>
          <blockquote>
            &ldquo;We run a 4-location roofing company and needed proper SEO for
            each service area. BDC nailed it. We&#39;re ranking in 3 cities and
            the phone hasn&#39;t stopped. Best marketing money we&#39;ve ever
            spent.&rdquo;
          </blockquote>
          <div className="met">Ranking in 3 cities</div>
          <div className="ra">
            <div className="rav">BH</div>
            <div>
              <h4>Brandon Hicks, CEO</h4>
              <p>RedShield Roofing &middot; Nashville, TN</p>
            </div>
          </div>
        </div>

        {/* Review 6 */}
        <div className="rc">
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}><span className="ptg hi">Med Spa</span><span className="ptg" style={{ borderColor: 'rgba(52,211,153,.2)', color: 'var(--green)' }}>Verified</span></div>
          <blockquote>
            &ldquo;The Cinematic tier with the animated hero is absolutely
            stunning. Patients tell us they chose us specifically because of how
            professional our website looked compared to every other med spa in
            Scottsdale.&rdquo;
          </blockquote>
          <div className="met">22 new consults/week</div>
          <div className="ra">
            <div className="rav">SN</div>
            <div>
              <h4>Sarah Nguyen, Owner</h4>
              <p>Luxe Aesthetics &middot; Scottsdale, AZ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
