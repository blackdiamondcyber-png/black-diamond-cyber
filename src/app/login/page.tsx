'use client';

import { createBrowserClient } from '@supabase/ssr';
import { useState, useCallback } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      try {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        );

        const { error: authError } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });

        if (authError) {
          setError(authError.message);
        } else {
          setSent(true);
        }
      } catch {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [email],
  );

  return (
    <>
      {/* Ambient background */}
      <div className="amb">
        <div className="orb" />
        <div className="orb" />
      </div>
      <div className="grain" />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '420px',
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: '48px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '.4px',
              color: 'var(--text)',
            }}
          >
            BLACK DIAMOND <span style={{ color: 'var(--cyan)' }}>CYBER</span>
          </a>

          {/* Card */}
          <div
            style={{
              background: 'var(--bg1)',
              border: '1px solid var(--hr)',
              borderRadius: 'var(--rr)',
              padding: '48px 36px',
            }}
          >
            {/* Tag */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span className="tag">Client Portal</span>
            </div>

            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '32px',
                textAlign: 'center',
                color: 'var(--text)',
                marginBottom: '8px',
                fontWeight: 400,
              }}
            >
              Sign In
            </h1>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--t2)',
                textAlign: 'center',
                marginBottom: '32px',
                lineHeight: 1.7,
              }}
            >
              Enter your email to receive a secure login link.
            </p>

            {sent ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'rgba(52,211,153,.06)',
                  border: '1px solid rgba(52,211,153,.15)',
                  borderRadius: 'var(--r)',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    marginBottom: '12px',
                  }}
                >
                  &#9993;
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--green)',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}
                >
                  Check your email
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--t2)',
                    lineHeight: 1.7,
                  }}
                >
                  We sent a login link to <strong style={{ color: 'var(--text)' }}>{email}</strong>.
                  Click the link to sign in.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1.6px',
                    textTransform: 'uppercase' as const,
                    color: 'var(--t2)',
                    marginBottom: '8px',
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: 'var(--bg)',
                    border: '1px solid var(--hr-b)',
                    borderRadius: 'var(--r)',
                    color: 'var(--text)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: '.3s ease',
                    marginBottom: '16px',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyan)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(93,196,232,.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--hr-b)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                {error && (
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#EF4444',
                      marginBottom: '12px',
                      textAlign: 'center',
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bp"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? 'wait' : 'pointer',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Login Link'}
                </button>
              </form>
            )}
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <a
              href="/"
              style={{
                fontSize: '12px',
                color: 'var(--t2)',
                transition: '.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--t2)';
              }}
            >
              &larr; Back to homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
