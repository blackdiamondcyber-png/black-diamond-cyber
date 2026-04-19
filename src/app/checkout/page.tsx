'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

interface Plan {
  id: 'starter' | 'professional' | 'premium' | 'cinematic';
  name: string;
  setupPrice: number;
  monthlyPrice: number;
  features: string[];
  recommended?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    setupPrice: 997,
    monthlyPrice: 79,
    features: [
      'Professional 5-7 page website',
      'Mobile-first responsive design',
      'Hosting, SSL & CDN included',
      'Priority support',
      'Live in 3-5 business days',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    setupPrice: 1997,
    monthlyPrice: 129,
    recommended: true,
    features: [
      'Everything in Starter',
      '8-15 page semi-custom build',
      'Competitor analysis',
      'Online booking integration',
      'Monthly performance reporting',
      '5-7 day delivery',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    setupPrice: 2997,
    monthlyPrice: 199,
    features: [
      'Everything in Professional',
      '15-25+ pages, fully custom',
      'Custom copywriting',
      'Full SEO + GEO optimization',
      'Lead-capture forms',
      'Unlimited content updates',
      '10-14 day delivery',
    ],
  },
  {
    id: 'cinematic',
    name: 'Cinematic',
    setupPrice: 4997,
    monthlyPrice: 249,
    features: [
      'Everything in Premium',
      'AI 3D animated hero',
      'Scroll-driven animations',
      'Video backgrounds',
      'Quarterly strategy call',
    ],
  },
];

function formatPrice(n: number): string {
  return n.toLocaleString('en-US');
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{ flexShrink: 0, marginTop: '2px' }}
    >
      <circle cx="9" cy="9" r="9" fill="rgba(93,196,232,.12)" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 6.5"
        stroke="#5DC4E8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({
  plan,
  loading,
  onSelect,
}: {
  plan: Plan;
  loading: string | null;
  onSelect: (id: Plan['id']) => void;
}) {
  const isLoading = loading === plan.id;

  return (
    <div
      style={{
        position: 'relative',
        background: plan.recommended
          ? 'linear-gradient(170deg, rgba(40,135,204,.08) 0%, rgba(93,196,232,.04) 100%)'
          : 'rgba(255,255,255,.02)',
        border: plan.recommended
          ? '1px solid rgba(93,196,232,.25)'
          : '1px solid rgba(255,255,255,.06)',
        borderRadius: '16px',
        padding: '36px 28px 32px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = plan.recommended
          ? '0 0 40px rgba(93,196,232,.12), 0 20px 60px rgba(0,0,0,.3)'
          : '0 20px 60px rgba(0,0,0,.25)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      {plan.recommended && (
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#2887CC',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            padding: '4px 16px',
            borderRadius: '40px',
            whiteSpace: 'nowrap',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Most Popular
        </div>
      )}

      <div
        style={{
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: plan.recommended ? '#5DC4E8' : 'rgba(222,224,231,.5)',
          marginBottom: '16px',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {plan.name}
      </div>

      <div style={{ marginBottom: '8px' }}>
        <span
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#DEE0E7',
            fontFamily: "'DM Serif Display', serif",
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          ${formatPrice(plan.monthlyPrice)}
        </span>
        <span
          style={{
            fontSize: '14px',
            color: 'rgba(222,224,231,.4)',
            fontFamily: "'Outfit', sans-serif",
            marginLeft: '4px',
          }}
        >
          /mo
        </span>
      </div>

      <div
        style={{
          fontSize: '13px',
          color: 'rgba(222,224,231,.55)',
          fontFamily: "'Outfit', sans-serif",
          marginBottom: '4px',
        }}
      >
        + ${formatPrice(plan.setupPrice)} one-time setup
      </div>
      <div
        style={{
          fontSize: '11px',
          color: 'rgba(222,224,231,.35)',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        No contracts · Cancel anytime
      </div>

      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,.06)',
          margin: '20px 0',
        }}
      />

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 auto 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {plan.features.map((feature) => (
          <li
            key={feature}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '14px',
              color: 'rgba(222,224,231,.75)',
              lineHeight: 1.5,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelect(plan.id)}
        disabled={isLoading}
        style={{
          marginTop: '32px',
          width: '100%',
          padding: '14px 24px',
          borderRadius: '10px',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: "'Outfit', sans-serif",
          border: plan.recommended ? 'none' : '1px solid rgba(93,196,232,.25)',
          cursor: isLoading ? 'wait' : 'pointer',
          transition: 'all .3s ease',
          background: plan.recommended ? '#2887CC' : 'transparent',
          color: plan.recommended ? '#fff' : '#5DC4E8',
          opacity: isLoading ? 0.6 : 1,
          minHeight: '44px',
        }}
        onMouseEnter={(e) => {
          if (plan.recommended) {
            e.currentTarget.style.background = '#3399DD';
          } else {
            e.currentTarget.style.background = 'rgba(93,196,232,.08)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = plan.recommended
            ? '#2887CC'
            : 'transparent';
        }}
      >
        {isLoading ? 'Loading...' : 'Get Started'}
      </button>
    </div>
  );
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleSelect(planId: Plan['id']) {
    setLoading(planId);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: planId }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        window.location.href = '/#book';
      }
    } catch {
      window.location.href = '/#book';
    } finally {
      setLoading(null);
    }
  }

  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: '100dvh',
          background: '#06080C',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '120px 20px 60px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            marginBottom: '48px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 400,
              color: '#DEE0E7',
              fontFamily: "'DM Serif Display', serif",
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Start Your Growth Plan
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(222,224,231,.55)',
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.6,
            }}
          >
            Your custom website is included with every plan. Monthly growth maintenance keeps it fast, ranking, and ahead of the AI era.
          </p>
        </div>

        <div
          className="checkout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            maxWidth: '1240px',
            width: '100%',
          }}
        >
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              loading={loading}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <p
          style={{
            marginTop: '48px',
            fontSize: '13px',
            color: 'rgba(222,224,231,.35)',
            fontFamily: "'Outfit', sans-serif",
            textAlign: 'center',
            letterSpacing: '0.02em',
          }}
        >
          One-time setup fee billed at checkout. Monthly maintenance auto-renews. Cancel anytime.
        </p>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 1024px) {
              .checkout-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                max-width: 720px !important;
              }
            }
            @media (max-width: 640px) {
              .checkout-grid {
                grid-template-columns: 1fr !important;
                max-width: 420px !important;
              }
            }
          `,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
