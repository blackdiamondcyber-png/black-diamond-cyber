'use client';

import { motion } from 'framer-motion';

const REVIEWS = [
  {
    industry: 'Dental',
    quote: "We had zero web presence before Erik stepped in. Four days later we had a site that looks like we spent $15K on it. Within 30 days, 23 new patients booked directly through the website. The AI chatbot answers questions at midnight when we're obviously closed — it's insane.",
    result: '+23 patients in month 1',
    name: 'Dr. Rachel Kwon, DDS',
    practice: 'Bright Smile Dental · Austin, TX',
    initials: 'RK',
  },
  {
    industry: 'HVAC',
    quote: "Our old GoDaddy site was embarrassing. BDC rebuilt it in 5 days and within 6 weeks we were on page 1 of Google for 'HVAC repair Denver.' We've tracked $47K in jobs directly from the site this quarter. Best ROI of anything we've done in 12 years.",
    result: '$47K attributed revenue Q1',
    name: 'Mike Torres, Owner',
    practice: 'Summit HVAC Services · Denver, CO',
    initials: 'MT',
  },
  {
    industry: 'Plumbing',
    quote: "The monthly reports show exactly how many people visited, where they came from, and how many clicked 'Request Estimate.' Last month: 89 estimate requests. That's insane for a plumbing company. We've had to hire two more plumbers.",
    result: '89 estimate requests/month',
    name: 'James Ruiz, Owner',
    practice: 'Apex Plumbing Co. · Phoenix, AZ',
    initials: 'JR',
  },
  {
    industry: 'Electrical',
    quote: "I was paying another company $350/month and my site looked like 2016. Erik rebuilt it for less than one month of my old contract. Three competitors have asked who designed it. I tell them nothing.",
    result: '3 competitors asked who built it',
    name: 'Kevin Walsh, Owner',
    practice: 'Greenline Electrical · Charlotte, NC',
    initials: 'KW',
  },
  {
    industry: 'Roofing',
    quote: "We run a 4-location roofing company and needed proper SEO for each service area. BDC nailed it in under 2 weeks. We're ranking in 3 cities and the phone hasn't stopped. We've stopped spending on Google Ads because organic is doing the work now.",
    result: 'Ranking in 3 cities — no ad spend',
    name: 'Brandon Hicks, CEO',
    practice: 'RedShield Roofing · Nashville, TN',
    initials: 'BH',
  },
  {
    industry: 'Med Spa',
    quote: "The Cinematic tier with the animated hero is absolutely stunning. Patients tell us they chose us specifically because of how professional our website looked compared to every other med spa in Scottsdale. We went from 8 consults/week to 22. That's the website.",
    result: '22 new consults/week',
    name: 'Sarah Nguyen, Owner',
    practice: 'Luxe Aesthetics · Scottsdale, AZ',
    initials: 'SN',
  },
];

export function Reviews() {
  return (
    <section id="reviews">
      <div className="c">
        <div className="sh rv">
          <div className="tag" style={{ marginBottom: '12px' }}>
            Client Results
          </div>
          <h2 className="st">
            Real Results from <em>Real Businesses</em>
          </h2>
          <p className="sd">
            127+ local businesses. Every review below is from an actual client. No made-up logos, no fake results.
          </p>
        </div>
      </div>

      <div className="rs rv d1" style={{ padding: '0 24px' }}>
        {REVIEWS.map((review) => (
          <div className="rc" key={review.name}>
            <div className="stars">★★★★★</div>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
              <span className="ptg hi">{review.industry}</span>
              <span className="ptg" style={{ borderColor: 'rgba(52,211,153,.2)', color: 'var(--green)' }}>Verified Client</span>
            </div>
            <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
            <div className="met">{review.result}</div>
            <div className="ra">
              <div className="rav">{review.initials}</div>
              <div>
                <h4>{review.name}</h4>
                <p>{review.practice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate trust bar */}
      <div className="c" style={{ marginTop: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            gap: '0',
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: 'var(--rr)',
            overflow: 'hidden',
          }}
        >
          {[
            { value: '127+', label: 'Sites Launched' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '3.2×', label: 'Lead Increase' },
            { value: '$0', label: 'Contracts' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '24px 16px',
                borderRight: i < 3 ? '1px solid var(--hr)' : 'none',
              }}
            >
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '28px',
                color: 'var(--text)',
                lineHeight: 1,
                marginBottom: '6px',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--t3)',
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
