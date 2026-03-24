'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Proposal, ProposalStatus } from '@/types';

const STATUS_COLORS: Record<ProposalStatus, string> = {
  draft: '#7E8396',
  sent: '#2887CC',
  viewed: '#5DC4E8',
  accepted: '#34D399',
  declined: '#EF4444',
  expired: '#474C5E',
};

export default function AdminProposalsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<ProposalStatus | 'all'>('all');
  const [search, setSearch] = useState('');

  const handleAuth = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) setAuthenticated(true);
      else setAuthError('Incorrect password');
    } catch {
      setAuthError('Failed to verify');
    }
  }, [password]);

  useEffect(() => {
    if (!authenticated) return;
    (async () => {
      try {
        const res = await fetch('/api/proposals');
        const data = await res.json() as { proposals: Proposal[] };
        setProposals(data.proposals || []);
      } catch { /* empty */ }
      setLoading(false);
    })();
  }, [authenticated]);

  if (!authenticated) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Admin Access</h1>
          <p style={subStyle}>Enter password to view proposals.</p>
          <form onSubmit={handleAuth} style={{ marginTop: 24 }}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={inputStyle} autoFocus />
            {authError && <p style={{ color: '#EF4444', fontSize: 13, marginTop: 8 }}>{authError}</p>}
            <button type="submit" style={{ ...btnStyle, marginTop: 16 }}>Unlock</button>
          </form>
        </div>
      </main>
    );
  }

  const statuses: (ProposalStatus | 'all')[] = ['all', 'draft', 'sent', 'viewed', 'accepted', 'declined', 'expired'];

  const filtered = proposals.filter((p) => {
    if (filter !== 'all' && p.status !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return p.client_name.toLowerCase().includes(q)
        || p.client_business.toLowerCase().includes(q)
        || p.client_email.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <main style={pageStyle}>
      <div style={{ width: '100%', maxWidth: 1000 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <h1 style={headingStyle}>Proposals</h1>
          <a href="/admin/proposals/new" style={{ ...btnStyle, width: 'auto', padding: '10px 28px', textDecoration: 'none', fontSize: 12, marginTop: 0 }}>
            + New Proposal
          </a>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {statuses.map((s) => (
            <button key={s} onClick={() => setFilter(s)} style={{
              padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              background: filter === s ? 'rgba(40,135,204,0.15)' : 'var(--bg2, #12151E)',
              color: filter === s ? '#2887CC' : '#7E8396',
            }}>
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, business, or email..." style={{ ...inputStyle, marginBottom: 20 }} />

        {loading ? (
          <p style={{ color: '#7E8396', textAlign: 'center', padding: 40 }}>Loading...</p>
        ) : filtered.length === 0 ? (
          <p style={{ color: '#7E8396', textAlign: 'center', padding: 40 }}>No proposals found.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map((p) => (
              <a key={p.id} href={`/admin/proposals/${p.id}`} style={{
                ...cardStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                textDecoration: 'none', padding: '20px 24px', flexWrap: 'wrap', gap: 12,
                transition: 'border-color 0.2s ease',
              }}>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#DEE0E7' }}>{p.client_business}</p>
                  <p style={{ fontSize: 13, color: '#7E8396', marginTop: 4 }}>{p.client_name} &middot; {p.client_email}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    display: 'inline-block', padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.5px',
                    color: STATUS_COLORS[p.status], background: `${STATUS_COLORS[p.status]}15`,
                  }}>
                    {p.status}
                  </span>
                  <p style={{ fontSize: 13, color: '#7E8396', marginTop: 4 }}>
                    ${Number(p.total_setup).toLocaleString()} + ${Number(p.monthly_recurring).toLocaleString()}/mo
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
          <a href="/admin/contracts" style={{ color: '#5DC4E8', fontSize: 13, textDecoration: 'none' }}>View Contracts &rarr;</a>
          <a href="/admin/generate" style={{ color: '#7E8396', fontSize: 13, textDecoration: 'none' }}>Website Generator</a>
        </div>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = { minHeight: '100dvh', background: 'var(--bg, #06080C)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 24px 40px' };
const cardStyle: React.CSSProperties = { background: 'var(--bg1, #0C0F16)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 16, padding: '24px' };
const headingStyle: React.CSSProperties = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(24px, 4vw, 32px)', color: 'var(--text, #DEE0E7)', fontWeight: 400 };
const subStyle: React.CSSProperties = { fontSize: 14, color: 'var(--t2, #7E8396)', marginTop: 8 };
const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 14px', background: 'var(--bg2, #12151E)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 10, color: 'var(--text, #DEE0E7)', fontSize: 14, fontFamily: 'inherit', outline: 'none' };
const btnStyle: React.CSSProperties = { width: '100%', padding: '14px 32px', background: 'var(--blue, #2887CC)', color: '#fff', border: 'none', borderRadius: 40, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', marginTop: 20, display: 'inline-block', textAlign: 'center' };
