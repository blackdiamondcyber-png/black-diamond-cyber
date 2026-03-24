'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

// Glow colors for each pricing tier
const TIER_GLOWS = {
  starter: 'rgba(222,224,231,.12)',
  professional: 'rgba(40,135,204,.15)',
  premium: 'rgba(93,196,232,.12)',
  cinematic: 'rgba(245,158,11,.12)',
} as const;

function PricingCard({
  children,
  featured,
  tierGlow,
  delay = 0,
}: {
  children: React.ReactNode;
  featured?: boolean;
  tierGlow: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={`pri rv${featured ? ' ft' : ''}`}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: `0 0 30px ${tierGlow}, 0 20px 56px rgba(0,0,0,.3)`,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      style={{
        position: 'relative',
        ...(featured ? { boxShadow: `0 0 20px ${tierGlow}, 0 20px 56px rgba(40,135,204,.08)` } : {}),
      }}
    >
      {/* Animated gradient border for featured card */}
      {featured && (
        <div
          style={{
            position: 'absolute',
            inset: '-1px',
            borderRadius: 'var(--rr)',
            padding: '1px',
            background: 'conic-gradient(from var(--border-angle, 0deg), var(--cyan), var(--blue), #8B5CF6, var(--cyan))',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            animation: 'rotateBorder 4s linear infinite',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}

export function Pricing() {
  const [tab, setTab] = useState<'websites' | 'growth'>('websites');
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const wp = websitePrices[billing];
  const gp = growthPrices[billing];

  return (
    <section id="pricing" ref={sectionRef}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="tag" style={{ display: 'inline-flex' }}>Transparent Pricing</div>
          <h2 className="st">Premium Sites &amp; Growth Systems,<br /><em>Honest Prices</em></h2>
          <p className="sd">No hidden fees. No contracts. Cancel anytime.</p>
        </motion.div>

        {/* Performance Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '720px',
            margin: '0 auto 32px',
            padding: '28px 32px',
            background: 'rgba(245,158,11,.04)',
            border: '1px solid rgba(245,158,11,.2)',
            borderRadius: 'var(--rr)',
            textAlign: 'center',
          }}
        >
          <div style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#F59E0B',
            marginBottom: '10px',
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-0.01em',
          }}>
            The BDC Performance Guarantee
          </div>
          <p style={{
            fontSize: '15px',
            color: 'var(--text)',
            lineHeight: 1.7,
            marginBottom: '10px',
          }}>
            If your new site does not score 90+ on Google PageSpeed and rank for your primary service keyword within 60 days &mdash; we rebuild it free. Zero arguments.
          </p>
          <p style={{
            fontSize: '12px',
            color: 'var(--t3)',
            lineHeight: 1.6,
          }}>
            We ship 95+ PageSpeed on every build. This guarantee costs us nothing &mdash; but it means everything for your confidence.
          </p>
        </motion.div>

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

        {/* Websites tab */}
        {tab === 'websites' && (
          <div className="pgrid">
            <PricingCard tierGlow={TIER_GLOWS.starter} delay={0}>
              <div className="pt">Starter</div>
              <div className="pa">$997</div>
              <div className="pmm" title="Hosting + SSL + CDN, monthly performance monitoring, content updates (up to 2/mo), priority support">then <b>$<AnimatedCounter value={wp.starter} duration={0.6} />/mo</b> <span style={{ fontSize: '10px', color: 'var(--t3)', fontWeight: 400 }}>Growth Maintenance</span></div>
              <ul className="pf">
                <li>Professional 5-7 page website</li>
                <li>Turn visitors into booked appointments</li>
                <li>Look great on every device</li>
                <li>Fast loading with SSL &amp; CDN</li>
                <li>Show up in &ldquo;dentist near me&rdquo; searches</li>
                <li>Live in 3-5 business days</li>
              </ul>
              <PricingButton tier="starter" />
            </PricingCard>

            <PricingCard featured tierGlow={TIER_GLOWS.professional} delay={0.08}>
              <div style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)', background: 'var(--blue)', color: '#fff', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 13px', borderRadius: '40px', whiteSpace: 'nowrap', zIndex: 2 }}>Most Popular</div>
              <div className="pt">Professional</div>
              <div className="pa">$1,997</div>
              <div className="pmm" title="Hosting + SSL + CDN, monthly performance monitoring, content updates (up to 2/mo), priority support">then <b>$<AnimatedCounter value={wp.professional} duration={0.6} />/mo</b> <span style={{ fontSize: '10px', color: 'var(--t3)', fontWeight: 400 }}>Growth Maintenance</span></div>
              <ul className="pf">
                <li>8-15 pages</li>
                <li>Semi-custom design</li>
                <li>Competitor analysis</li>
                <li>Rank for &ldquo;dentist near me&rdquo; searches</li>
                <li>Let patients book online 24/7</li>
                <li>Know exactly how many new patients come in each month</li>
                <li>5-7 day delivery</li>
              </ul>
              <PricingButton tier="professional" featured />
            </PricingCard>

            <PricingCard tierGlow={TIER_GLOWS.premium} delay={0.16}>
              <div className="pt">Premium</div>
              <div className="pa">$2,997</div>
              <div className="pmm" title="Hosting + SSL + CDN, monthly performance monitoring, unlimited content updates, priority support">then <b>$<AnimatedCounter value={wp.premium} duration={0.6} />/mo</b> <span style={{ fontSize: '10px', color: 'var(--t3)', fontWeight: 400 }}>Growth Maintenance</span></div>
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
            </PricingCard>

            <PricingCard tierGlow={TIER_GLOWS.cinematic} delay={0.24}>
              <div className="pt">Cinematic</div>
              <div className="pa">$4,997</div>
              <div className="pmm" title="Hosting + SSL + CDN, monthly performance monitoring, unlimited content updates, priority support, quarterly strategy call">then <b>$<AnimatedCounter value={wp.cinematic} duration={0.6} />/mo</b> <span style={{ fontSize: '10px', color: 'var(--t3)', fontWeight: 400 }}>Growth Maintenance</span></div>
              <ul className="pf">
                <li>Everything in Premium</li>
                <li>AI 3D animated hero</li>
                <li>Scroll animations</li>
                <li>Video backgrounds</li>
                <li>Priority support</li>
                <li>Quarterly strategy call</li>
              </ul>
              <PricingButton tier="cinematic" />
            </PricingCard>
          </div>
        )}

        {/* Growth Systems tab */}
        {tab === 'growth' && (
          <div>
            <div className="growth-grid">
              <PricingCard featured tierGlow="rgba(52,211,153,.12)">
                <div style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)', background: 'var(--green)', color: '#fff', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 13px', borderRadius: '40px', zIndex: 2 }}>Most Popular</div>
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
              </PricingCard>

              <PricingCard tierGlow="rgba(40,135,204,.1)" delay={0.08}>
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
              </PricingCard>
            </div>

            {/* CTA below growth tiers */}
            <div className="rv d2" style={{ marginTop: '48px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: 'var(--t2)', marginBottom: '16px' }}>
                Not sure which tier? Start with a free audit and we&apos;ll recommend the best fit.
              </p>
              <a href="/free-audit" style={{
                display: 'inline-block',
                padding: '12px 28px',
                background: 'transparent',
                border: '1px solid var(--hr)',
                borderRadius: '40px',
                color: 'var(--cyan)',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'border-color .3s',
              }}>
                Get Your Free Site Audit
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Animated border rotation keyframe */}
      <style dangerouslySetInnerHTML={{ __html: `
        @property --border-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rotateBorder {
          to { --border-angle: 360deg; }
        }
      `}} />
    </section>
  );
}
