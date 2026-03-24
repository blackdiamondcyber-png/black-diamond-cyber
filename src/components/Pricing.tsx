'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingButton } from '@/components/PricingButton';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const websitePrices = {
  monthly: { starter: 79, professional: 129, premium: 199, cinematic: 249 },
  yearly: { starter: 67, professional: 110, premium: 169, cinematic: 212 },
} as const;

const growthPrices = {
  monthly: { growth: 497, dominate: 1497 },
  yearly: { growth: 422, dominate: 1273 },
} as const;

export function Pricing() {
  const [tab, setTab] = useState<'websites' | 'growth'>('websites');
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const wp = websitePrices[billing];
  const gp = growthPrices[billing];

  return (
    <section id="pricing">
      <div className="c">
        <div className="sh sc rv">
          <div className="tag" style={{ display: 'inline-flex' }}>Transparent Pricing</div>
          <h2 className="st">Premium Sites &amp; Growth Systems,<br /><em>Honest Prices</em></h2>
          <p className="sd">No hidden fees. No contracts. Cancel anytime.</p>
        </div>

        {/* Billing toggle */}
        <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'inline-flex',
                background: 'var(--bg2)',
                border: '1px solid var(--hr)',
                borderRadius: '40px',
                padding: '3px',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setBilling('monthly')}
                style={{
                  padding: '8px 22px',
                  borderRadius: '36px',
                  fontSize: '12px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'color .3s',
                  background: billing === 'monthly' ? 'var(--blue)' : 'transparent',
                  color: billing === 'monthly' ? '#fff' : 'var(--t2)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('yearly')}
                style={{
                  padding: '8px 22px',
                  borderRadius: '36px',
                  fontSize: '12px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'color .3s',
                  background: billing === 'yearly' ? 'var(--blue)' : 'transparent',
                  color: billing === 'yearly' ? '#fff' : 'var(--t2)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Yearly
              </button>
            </div>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: 'var(--green)',
                background: 'rgba(52,211,153,.1)',
                padding: '4px 10px',
                borderRadius: '40px',
                whiteSpace: 'nowrap',
              }}
            >
              Save 15%
            </motion.span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="rv" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: '40px',
            padding: '4px',
          }}>
            <button
              onClick={() => setTab('websites')}
              style={{
                padding: '10px 28px',
                borderRadius: '36px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: '.3s',
                background: tab === 'websites' ? 'var(--blue)' : 'transparent',
                color: tab === 'websites' ? '#fff' : 'var(--t2)',
              }}
            >
              Websites
            </button>
            <button
              onClick={() => setTab('growth')}
              style={{
                padding: '10px 28px',
                borderRadius: '36px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: '.3s',
                background: tab === 'growth' ? 'var(--blue)' : 'transparent',
                color: tab === 'growth' ? '#fff' : 'var(--t2)',
              }}
            >
              Growth Systems
            </button>
          </div>
        </div>

        {/* Websites tab - same 4 tiers as before */}
        {tab === 'websites' && (
          <div className="pgrid">
            {/* Starter */}
            <div className="pri rv">
              <div className="pt">Starter</div>
              <div className="pa">$997</div>
              <div className="pmm">then <b>$<AnimatedCounter value={wp.starter} duration={0.6} />/mo</b></div>
              <ul className="pf">
                <li>5-7 page website</li>
                <li>Template-based design</li>
                <li>AI-generated copy</li>
                <li>Mobile responsive</li>
                <li>SSL &amp; CDN</li>
                <li>Basic SEO</li>
                <li>3-5 day delivery</li>
              </ul>
              <PricingButton tier="starter" />
            </div>

            {/* Professional */}
            <div className="pri ft rv d1">
              <div className="pt">Professional</div>
              <div className="pa">$1,997</div>
              <div className="pmm">then <b>$<AnimatedCounter value={wp.professional} duration={0.6} />/mo</b></div>
              <ul className="pf">
                <li>8-15 pages</li>
                <li>Semi-custom design</li>
                <li>Competitor analysis</li>
                <li>Local SEO setup</li>
                <li>Booking integration</li>
                <li>Monthly analytics</li>
                <li>5-7 day delivery</li>
              </ul>
              <PricingButton tier="professional" featured />
            </div>

            {/* Premium */}
            <div className="pri rv d2">
              <div className="pt">Premium</div>
              <div className="pa">$2,997</div>
              <div className="pmm">then <b>$<AnimatedCounter value={wp.premium} duration={0.6} />/mo</b></div>
              <ul className="pf">
                <li>15-25+ pages</li>
                <li>Fully custom design</li>
                <li>Custom copywriting</li>
                <li>Full SEO + GEO</li>
                <li>Lead capture forms</li>
                <li>Unlimited updates</li>
                <li>10-14 day delivery</li>
              </ul>
              <PricingButton tier="premium" />
            </div>

            {/* Cinematic */}
            <div className="pri rv d3">
              <div className="pt">Cinematic</div>
              <div className="pa">$4,997</div>
              <div className="pmm">then <b>$<AnimatedCounter value={wp.cinematic} duration={0.6} />/mo</b></div>
              <ul className="pf">
                <li>Everything in Premium</li>
                <li>AI 3D animated hero</li>
                <li>Scroll animations</li>
                <li>Video backgrounds</li>
                <li>Priority support</li>
                <li>Quarterly strategy call</li>
              </ul>
              <PricingButton tier="cinematic" />
            </div>
          </div>
        )}

        {/* Growth Systems tab */}
        {tab === 'growth' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', maxWidth: '800px', margin: '0 auto' }}>
              {/* Growth tier */}
              <div className="pri ft rv">
                <div style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)', background: 'var(--green)', color: '#fff', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 13px', borderRadius: '40px' }}>Most Popular</div>
                <div className="pt">Growth</div>
                <div className="pa">$2,997</div>
                <div className="pmm">setup, then <b>$<AnimatedCounter value={gp.growth} duration={0.6} />/mo</b></div>
                <div style={{ fontSize: '10px', color: 'var(--cyan)', fontWeight: 600, marginBottom: '16px', padding: '4px 10px', background: 'var(--blue-d)', borderRadius: '40px', display: 'inline-block' }}>Includes Professional Website</div>
                <ul className="pf">
                  <li>Professional website (8-15 pages)</li>
                  <li>AI review request system</li>
                  <li>Missed call text-back</li>
                  <li>Appointment reminder sequences</li>
                  <li>Monthly performance dashboard</li>
                  <li>Google Business Profile optimization</li>
                  <li>Hosting, SSL, CDN included</li>
                  <li>No contracts — cancel anytime</li>
                </ul>
                <a href="#book" className="pb" style={{ display: 'block', textAlign: 'center', width: '100%', background: 'var(--blue)', color: '#fff', borderColor: 'var(--blue)' }}>Book Strategy Call</a>
              </div>

              {/* Dominate tier */}
              <div className="pri rv d1">
                <div className="pt">Dominate</div>
                <div className="pa">$4,997</div>
                <div className="pmm">setup, then <b>$<AnimatedCounter value={gp.dominate} duration={0.6} />/mo</b></div>
                <div style={{ fontSize: '10px', color: 'var(--cyan)', fontWeight: 600, marginBottom: '16px', padding: '4px 10px', background: 'var(--blue-d)', borderRadius: '40px', display: 'inline-block' }}>Everything in Growth</div>
                <ul className="pf">
                  <li>Everything in Growth tier</li>
                  <li>AI chatbot — books 24/7</li>
                  <li>AI lead nurture (email + SMS)</li>
                  <li>Reputation management dashboard</li>
                  <li>Google Ads with AI optimization</li>
                  <li>Competitor monitoring alerts</li>
                  <li>Dedicated Slack channel with Erik</li>
                  <li>Priority support — same-day response</li>
                </ul>
                <a href="#book" className="pb" style={{ display: 'block', textAlign: 'center', width: '100%' }}>Book Strategy Call</a>
              </div>
            </div>

            {/* Comparison table */}
            <div className="rv d2" style={{ marginTop: '48px', maxWidth: '800px', margin: '48px auto 0' }}>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '24px', color: 'var(--text)', textAlign: 'center', marginBottom: '24px' }}>How We Compare</h3>
              <div style={{ background: 'var(--bg1)', border: '1px solid var(--hr)', borderRadius: 'var(--rr)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--hr)' }}>
                      <th style={{ padding: '14px 18px', textAlign: 'left', color: 'var(--t2)', fontWeight: 600, fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}></th>
                      <th style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--cyan)', fontWeight: 700, fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}>Black Diamond</th>
                      <th style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--t3)', fontWeight: 600, fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}>Typical Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Setup cost', '$997 – $4,997', '$3,000 – $15,000'],
                      ['Monthly cost', '$79 – $1,497', '$500 – $3,000'],
                      ['Contracts', 'None — cancel anytime', '12-24 month lock-in'],
                      ['Delivery time', '3-14 days', '4-8 weeks'],
                      ['AI automation', 'Built-in', 'Not offered'],
                      ['Code ownership', 'You own everything', 'They own your site'],
                      ['PageSpeed score', '95+ (Next.js)', '30-60 (WordPress)'],
                    ].map(([label, bd, agency], i) => (
                      <tr key={label} style={{ borderBottom: i < 6 ? '1px solid var(--hr)' : 'none' }}>
                        <td style={{ padding: '12px 18px', color: 'var(--t2)', fontWeight: 500 }}>{label}</td>
                        <td style={{ padding: '12px 18px', textAlign: 'center', color: 'var(--green)', fontWeight: 600 }}>{bd}</td>
                        <td style={{ padding: '12px 18px', textAlign: 'center', color: 'var(--t3)' }}>{agency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
