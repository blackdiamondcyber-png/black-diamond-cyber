'use client';

import { useState, useEffect, useCallback, use } from 'react';
import type { Proposal, ProposalStatus } from '@/types';

const STATUS_COLORS: Record<ProposalStatus, string> = {
  draft: '#7E8396',
  sent: '#2887CC',
  viewed: '#5DC4E8',
  accepted: '#34D399',
  declined: '#EF4444',
  expired: '#474C5E',
};

export default function AdminProposalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      if (res.ok) setAuthenticated(true);
      else setAuthError('Incorrect password');
    } catch { setAuthError('Failed to verify'); }
  }, [password]);

  useEffect(() => {
    if (!authenticated) return;
    (async () => {
      try {
        const res = await fetch('/api/proposals');
        const data = await res.json() as { proposals: Proposal[] };
        const found = (data.proposals || []).find((p) => p.id === id);
        setProposal(found ?? null);
      } catch { /* empty */ }
      setLoading(false);
    })();
  }, [authenticated, id]);

  const handleSend = async () => {
    if (!proposal) return;
    setSending(true);
    setMessage('');
    try {
      const res = await fetch(`/api/proposals/${proposal.id}/send`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to send');
      setMessage('Proposal sent to client!');
      setProposal({ ...proposal, status: 'sent', sent_at: new Date().toISOString() });
    } catch {
      setMessage('Failed to send proposal.');
    } finally {
      setSending(false);
    }
  };

  if (!authenticated) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Admin Access</h1>
          <form onSubmit={handleAuth} style={{ marginTop: 24 }}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={inputStyle} autoFocus />
            {authError && <p style={{ color: '#EF4444', fontSize: 13, marginTop: 8 }}>{authError}</p>}
            <button type="submit" style={{ ...btnStyle, marginTop: 16 }}>Unlock</button>
          </form>
        </div>
      </main>
    );
  }

  if (loading) {
    return <main style={pageStyle}><p style={{ color: '#7E8396' }}>Loading...</p></main>;
  }

  if (!proposal) {
    return <main style={pageStyle}><p style={{ color: '#EF4444' }}>Proposal not found.</p></main>;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-cyber.com';
  const publicUrl = `${siteUrl}/proposals/${proposal.id}`;

  return (
    <main style={pageStyle}>
      <div style={{ width: '100%', maxWidth: 800 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <a href="/admin/proposals" style={{ color: '#7E8396', fontSize: 13, textDecoration: 'none' }}>&larr; Back to proposals</a>
            <h1 style={{ ...headingStyle, marginTop: 8 }}>{proposal.client_business}</h1>
          </div>
          <span style={{
            padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
            color: STATUS_COLORS[proposal.status], background: `${STATUS_COLORS[proposal.status]}15`,
          }}>
            {proposal.status}
          </span>
        </div>

        {message && <div style={{ padding: '12px 16px', background: message.includes('Failed') ? 'rgba(239,68,68,0.1)' : 'rgba(52,211,153,0.1)', border: `1px solid ${message.includes('Failed') ? 'rgba(239,68,68,0.2)' : 'rgba(52,211,153,0.2)'}`, borderRadius: 10, marginBottom: 16, fontSize: 13, color: message.includes('Failed') ? '#EF4444' : '#34D399' }}>{message}</div>}

        <div style={cardStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <p style={metaLabel}>Client</p>
              <p style={metaValue}>{proposal.client_name}</p>
            </div>
            <div>
              <p style={metaLabel}>Email</p>
              <p style={metaValue}>{proposal.client_email}</p>
            </div>
            <div>
              <p style={metaLabel}>Project Type</p>
              <p style={metaValue}>{proposal.project_type.charAt(0).toUpperCase() + proposal.project_type.slice(1)}</p>
            </div>
            <div>
              <p style={metaLabel}>Timeline</p>
              <p style={metaValue}>{proposal.timeline || '—'}</p>
            </div>
            <div>
              <p style={metaLabel}>Setup Fee</p>
              <p style={{ ...metaValue, fontSize: 20, color: '#DEE0E7' }}>${Number(proposal.total_setup).toLocaleString()}</p>
            </div>
            <div>
              <p style={metaLabel}>Monthly</p>
              <p style={{ ...metaValue, fontSize: 20, color: '#DEE0E7' }}>${Number(proposal.monthly_recurring).toLocaleString()}/mo</p>
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginTop: 16 }}>
          <p style={{ ...metaLabel, marginBottom: 12 }}>Scope Items</p>
          {(proposal.scope_items || []).map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
              <span style={{ color: item.included ? '#34D399' : '#EF4444', fontSize: 14 }}>{item.included ? '\u2713' : '\u2717'}</span>
              <div>
                <p style={{ color: '#DEE0E7', fontSize: 14, fontWeight: 600 }}>{item.title}</p>
                <p style={{ color: '#7E8396', fontSize: 12, marginTop: 2 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {proposal.notes && (
          <div style={{ ...cardStyle, marginTop: 16 }}>
            <p style={metaLabel}>Notes</p>
            <p style={{ color: '#7E8396', fontSize: 13, lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{proposal.notes}</p>
          </div>
        )}

        {proposal.signature_data && (
          <div style={{ ...cardStyle, marginTop: 16 }}>
            <p style={metaLabel}>Signature</p>
            <img src={proposal.signature_data.image} alt="Client signature" style={{ maxWidth: 300, borderRadius: 8, marginTop: 8 }} />
            <p style={{ color: '#7E8396', fontSize: 12, marginTop: 8 }}>
              Signed by {proposal.signature_data.name} on {new Date(proposal.signature_data.date).toLocaleString()}
            </p>
          </div>
        )}

        <div style={{ ...cardStyle, marginTop: 16 }}>
          <p style={metaLabel}>Public Link</p>
          <p style={{ color: '#5DC4E8', fontSize: 13, wordBreak: 'break-all' }}>{publicUrl}</p>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          {proposal.status === 'draft' && (
            <button onClick={handleSend} disabled={sending} style={{ ...btnStyle, width: 'auto', padding: '12px 32px', marginTop: 0 }}>
              {sending ? 'Sending...' : 'Send to Client'}
            </button>
          )}
          {proposal.status === 'accepted' && (
            <a href={`/admin/contracts?proposal=${proposal.id}`} style={{ ...btnStyle, width: 'auto', padding: '12px 32px', marginTop: 0, textDecoration: 'none', background: '#34D399' }}>
              Create Contract
            </a>
          )}
        </div>

        <div style={{ marginTop: 16 }}>
          <p style={{ color: '#474C5E', fontSize: 11 }}>
            Created {new Date(proposal.created_at).toLocaleString()}
            {proposal.sent_at && ` · Sent ${new Date(proposal.sent_at).toLocaleString()}`}
            {proposal.viewed_at && ` · Viewed ${new Date(proposal.viewed_at).toLocaleString()}`}
            {proposal.accepted_at && ` · Accepted ${new Date(proposal.accepted_at).toLocaleString()}`}
          </p>
        </div>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = { minHeight: '100dvh', background: 'var(--bg, #06080C)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 24px 40px' };
const cardStyle: React.CSSProperties = { background: 'var(--bg1, #0C0F16)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 16, padding: '24px' };
const headingStyle: React.CSSProperties = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(24px, 4vw, 32px)', color: 'var(--text, #DEE0E7)', fontWeight: 400 };
const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 14px', background: 'var(--bg2, #12151E)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 10, color: '#DEE0E7', fontSize: 14, fontFamily: 'inherit', outline: 'none' };
const btnStyle: React.CSSProperties = { width: '100%', padding: '14px 32px', background: '#2887CC', color: '#fff', border: 'none', borderRadius: 40, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', marginTop: 20, display: 'inline-block', textAlign: 'center' };
const metaLabel: React.CSSProperties = { fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#474C5E', marginBottom: 4 };
const metaValue: React.CSSProperties = { fontSize: 15, color: '#7E8396' };
