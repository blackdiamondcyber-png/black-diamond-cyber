'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const TIER_NAMES: Record<string, { name: string; delivery: string }> = {
  starter: { name: 'Starter', delivery: '3-5 business days' },
  professional: { name: 'Professional', delivery: '5-7 business days' },
  premium: { name: 'Premium', delivery: '10-14 business days' },
  cinematic: { name: 'Cinematic', delivery: '10-14 business days' },
};

export function SuccessModal() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const success = searchParams.get('success');
  const tier = searchParams.get('tier') || 'starter';
  const tierInfo = TIER_NAMES[tier] || TIER_NAMES.starter;

  useEffect(() => {
    if (success === 'true') {
      setOpen(true);
      // Clean URL without reload
      window.history.replaceState({}, '', '/');
    }
  }, [success]);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(6,8,12,.85)',
        backdropFilter: 'blur(12px)',
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          background: 'var(--bg1)',
          border: '1px solid var(--hr)',
          borderRadius: 'var(--rr)',
          padding: '48px 40px',
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Checkmark */}
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(52,211,153,.08)',
            border: '2px solid var(--green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '32px',
          }}
        >
          ✓
        </div>

        <h2
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(24px, 3.5vw, 32px)',
            color: 'var(--text)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '8px',
          }}
        >
          Welcome to{' '}
          <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>
            Black Diamond
          </em>
        </h2>

        <p
          style={{
            fontSize: '15px',
            color: 'var(--t2)',
            lineHeight: 1.7,
            marginBottom: '28px',
          }}
        >
          Your <strong style={{ color: 'var(--text)' }}>{tierInfo.name}</strong>{' '}
          package is confirmed. We&apos;ll reach out within 24 hours to kick off
          your project.
        </p>

        <div
          style={{
            background: 'var(--blue-d)',
            border: '1px solid var(--hr-b)',
            borderRadius: 'var(--r)',
            padding: '16px 20px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase' as const,
                  color: 'var(--cyan)',
                  marginBottom: '4px',
                }}
              >
                What Happens Next
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--t2)',
                  lineHeight: 1.6,
                }}
              >
                ① Strategy call scheduled
                <br />
                ② Competitor research begins
                <br />
                ③ Live preview in {tierInfo.delivery}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 36px',
            borderRadius: '40px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase' as const,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            background: 'var(--blue)',
            color: '#fff',
            transition: '.4s',
          }}
        >
          Got It
        </button>

        <p
          style={{
            fontSize: '11px',
            color: 'var(--t3)',
            marginTop: '16px',
          }}
        >
          Check your email for a receipt from Stripe.
        </p>
      </div>
    </div>
  );
}
