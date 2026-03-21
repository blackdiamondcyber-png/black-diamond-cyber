'use client';

import { useState } from 'react';
import type { SubscriptionTier } from '@/types';

export function PricingButton({
  tier,
  featured,
}: {
  tier: SubscriptionTier;
  featured?: boolean;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={featured ? 'pb pb-ft' : 'pb'}
      style={{ width: '100%', opacity: loading ? 0.6 : 1 }}
    >
      {loading ? 'Loading...' : 'Get Started'}
    </button>
  );
}
