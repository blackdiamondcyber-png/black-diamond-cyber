'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

/* ------------------------------------------------------------------ */
/*  Plan data                                                          */
/* ------------------------------------------------------------------ */

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  recommended?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 299,
    annualPrice: 249,
    features: [
      'Custom website included',
      'Hosting & maintenance',
      'Monthly analytics report',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: 599,
    annualPrice: 499,
    recommended: true,
    features: [
      'Everything in Starter',
      'GEO optimization',
      'Local SEO & Google Maps',
      'Monthly AI visibility report',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    monthlyPrice: 999,
    annualPrice: 833,
    features: [
      'Everything in Growth',
      'AI chatbot',
      'Review generation',
      'Missed call recovery',
      'Priority support',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatPrice(cents: number): string {
  return cents.toLocaleString('en-US');
}

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

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

function BillingToggle({
  annual,
  onToggle,
}: {
  annual: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        marginBottom: '48px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          background: 'rgba(255,255,255,.04)',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: '40px',
          padding: '3px',
        }}
      >
        <button
          onClick={() => annual && onToggle()}
          style={{
            padding: '8px 24px',
            borderRadius: '36px',
            fontSize: '13px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Outfit', sans-serif",
            transition: 'all .3s ease',
            background: !annual ? '#2887CC' : 'transparent',
            color: !annual ? '#fff' : 'rgba(222,224,231,.5)',
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => !annual && onToggle()}
          style={{
            padding: '8px 24px',
            borderRadius: '36px',
            fontSize: '13px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Outfit', sans-serif",
            transition: 'all .3s ease',
            background: annual ? '#2887CC' : 'transparent',
            color: annual ? '#fff' : 'rgba(222,224,231,.5)',
          }}
        >
          Annual
        </button>
      </div>
      <span
        style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.5px',
          color: '#34D399',
          background: 'rgba(52,211,153,.1)',
          padding: '4px 12px',
          borderRadius: '40px',
          whiteSpace: 'nowrap',
        }}
      >
        Save 2 months
      </span>
    </div>
  );
}

function PlanCard({
  plan,
  annual,
  loading,
  onSelect,
}: {
  plan: Plan;
  annual: boolean;
  loading: string | null;
  onSelect: (id: string) => void;
}) {
  const price = annual ? plan.annualPrice : plan.monthlyPrice;
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
          Recommended
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
            fontFamily: "'Instrument Serif', serif",
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          ${formatPrice(price)}
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

      {annual && (
        <div
          style={{
            fontSize: '12px',
            color: '#34D399',
            fontWeight: 500,
            marginBottom: '4px',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Billed annually (${formatPrice(price * 12)}/yr)
        </div>
      )}

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
          border: 'none',
          cursor: isLoading ? 'wait' : 'pointer',
          transition: 'all .3s ease',
          background: plan.recommended
            ? '#2887CC'
            : 'transparent',
          color: plan.recommended ? '#fff' : '#5DC4E8',
          ...(plan.recommended
            ? {}
            : {
                border: '1px solid rgba(93,196,232,.25)',
              }),
          opacity: isLoading ? 0.6 : 1,
        }}
        onMouseEnter={(e) => {
          if (plan.recommended) {
            e.currentTarget.style.background = '#3399DD';
          } else {
            e.currentTarget.style.background = 'rgba(93,196,232,.08)';
          }
        }}
        onMouseLeave={(e) => {
          if (plan.recommended) {
            e.currentTarget.style.background = '#2887CC';
          } else {
            e.currentTarget.style.background = 'transparent';
          }
        }}
      >
        {isLoading ? 'Loading...' : 'Get Started'}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CheckoutPage() {
  const [annual, setAnnual] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);

  async function handleSelect(planId: string) {
    setLoading(planId);

    try {
      /* Map checkout plan IDs to existing Stripe tier keys if available */
      const tierMap: Record<string, string> = {
        starter: 'starter',
        growth: 'professional',
        scale: 'premium',
      };

      const stripeTier = tierMap[planId];

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: stripeTier }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        /* Fallback: scroll to booking section or redirect */
        window.location.href = '/#book';
      }
    } catch {
      window.location.href = '/#book';
    } finally {
      setLoading(null);
    }
  }

  return (
    <main
      style={{
        minHeight: '100dvh',
        background: '#06080C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 20px 60px',
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          marginBottom: '16px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 400,
            color: '#DEE0E7',
            fontFamily: "'Instrument Serif', serif",
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
          Your custom website is included free with every plan.
        </p>
      </div>

      {/* Billing toggle */}
      <BillingToggle annual={annual} onToggle={() => setAnnual((a) => !a)} />

      {/* Plan cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          maxWidth: '1040px',
          width: '100%',
        }}
      >
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            annual={annual}
            loading={loading}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Footer note */}
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
        No setup fees. No contracts. Cancel anytime.
      </p>

      {/* Responsive overrides */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            main > div:nth-child(3) {
              grid-template-columns: 1fr !important;
              max-width: 420px !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            main > div:nth-child(3) {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `,
        }}
      />
    </main>
  );
}
