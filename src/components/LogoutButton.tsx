'use client';

import { createBrowserClient } from '@supabase/ssr';
import { useCallback, useState } from 'react';

export function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = useCallback(async () => {
    setLoading(true);
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
    await supabase.auth.signOut();
    window.location.href = '/';
  }, []);

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      style={{
        padding: '7px 18px',
        borderRadius: '40px',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '1.2px',
        textTransform: 'uppercase' as const,
        border: '1px solid rgba(255,255,255,.06)',
        background: 'rgba(255,255,255,.03)',
        color: '#7E8396',
        cursor: loading ? 'wait' : 'pointer',
        fontFamily: 'inherit',
        transition: '.3s ease',
        opacity: loading ? 0.5 : 1,
      }}
    >
      {loading ? 'Signing out...' : 'Sign Out'}
    </button>
  );
}
