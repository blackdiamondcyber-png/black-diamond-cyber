'use client';

import { useState, useEffect, useCallback, use } from 'react';
import type { Contract, ContractStatus } from '@/types';

const STATUS_COLORS: Record<ContractStatus, string> = {
  draft: '#7E8396',
  sent: '#2887CC',
  signed: '#34D399',
  active: '#5DC4E8',
  cancelled: '#EF4444',
  expired: '#474C5E',
};

export default function AdminContractDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [contract, setContract] = useState<Contract | null>(null);
  const [loading, setLoading] = useState(true);

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
        const res = await fetch('/api/contracts');
        const data = await res.json() as { contracts: Contract[] };
        const found = (data.contracts || []).find((c) => c.id === id);
        setContract(found ?? null);
      } catch { /* empty */ }
      setLoading(false);
    })();
  }, [authenticated, id]);

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

  if (loading) return <main style={pageStyle}><p style={{ color: '#7E8396' }}>Loading...</p></main>;
  if (!contract) return <main style={pageStyle}><p style={{ color: '#EF4444' }}>Contract not found.</p></main>;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-cyber.com';

  return (
    <main style={pageStyle}>
      <div style={{ width: '100%', maxWidth: 800 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <a href="/admin/contracts" style={{ color: '#7E8396', fontSize: 13, textDecoration: 'none' }}>&larr; Back to contracts</a>
            <h1 style={{ ...headingStyle, marginTop: 8 }}>{contract.client_name}</h1>
          </div>
          <span style={{
            padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
            color: STATUS_COLORS[contract.status], background: `${STATUS_COLORS[contract.status]}15`,
          }}>
            {contract.status}
          </span>
        </div>

        <div style={cardStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <p style={metaLabel}>Client</p>
              <p style={metaValue}>{contract.client_name}</p>
            </div>
            <div>
              <p style={metaLabel}>Email</p>
              <p style={metaValue}>{contract.client_email}</p>
            </div>
            <div>
              <p style={metaLabel}>Contract Type</p>
              <p style={metaValue}>{contract.contract_type}</p>
            </div>
            <div>
              <p style={metaLabel}>Dates</p>
              <p style={metaValue}>
                {contract.start_date ? new Date(contract.start_date).toLocaleDateString() : '—'}
                {' '}&rarr;{' '}
                {contract.end_date ? new Date(contract.end_date).toLocaleDateString() : 'Ongoing'}
              </p>
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginTop: 16 }}>
          <p style={{ ...metaLabel, marginBottom: 12 }}>Terms</p>
          <div style={{ color: '#7E8396', fontSize: 13, lineHeight: 1.8 }}>
            <p><strong style={{ color: '#DEE0E7' }}>Description:</strong> {contract.terms.description}</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: '#DEE0E7' }}>Payment Terms:</strong> {contract.terms.paymentTerms}</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: '#DEE0E7' }}>Cancellation:</strong> {contract.terms.cancellationPolicy}</p>
            {contract.terms.deliverables.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <strong style={{ color: '#DEE0E7' }}>Deliverables:</strong>
                <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                  {contract.terms.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            )}
            {contract.terms.additionalTerms && (
              <p style={{ marginTop: 8 }}><strong style={{ color: '#DEE0E7' }}>Additional:</strong> {contract.terms.additionalTerms}</p>
            )}
          </div>
        </div>

        {contract.signature_data && (
          <div style={{ ...cardStyle, marginTop: 16 }}>
            <p style={metaLabel}>Signature</p>
            <img src={contract.signature_data.image} alt="Client signature" style={{ maxWidth: 300, borderRadius: 8, marginTop: 8 }} />
            <p style={{ color: '#7E8396', fontSize: 12, marginTop: 8 }}>
              Signed by {contract.signature_data.name} on {new Date(contract.signature_data.date).toLocaleString()}
            </p>
          </div>
        )}

        <div style={{ ...cardStyle, marginTop: 16 }}>
          <p style={metaLabel}>Public Signing Link</p>
          <p style={{ color: '#5DC4E8', fontSize: 13, wordBreak: 'break-all' }}>{siteUrl}/contracts/{contract.id}</p>
        </div>

        <p style={{ color: '#474C5E', fontSize: 11, marginTop: 16 }}>
          Created {new Date(contract.created_at).toLocaleString()}
          {contract.signed_at && ` · Signed ${new Date(contract.signed_at).toLocaleString()}`}
        </p>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = { minHeight: '100dvh', background: 'var(--bg, #06080C)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 24px 40px' };
const cardStyle: React.CSSProperties = { background: 'var(--bg1, #0C0F16)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 16, padding: '24px' };
const headingStyle: React.CSSProperties = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(24px, 4vw, 32px)', color: 'var(--text, #DEE0E7)', fontWeight: 400 };
const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 14px', background: 'var(--bg2, #12151E)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 10, color: '#DEE0E7', fontSize: 14, fontFamily: 'inherit', outline: 'none' };
const btnStyle: React.CSSProperties = { width: '100%', padding: '14px 32px', background: '#2887CC', color: '#fff', border: 'none', borderRadius: 40, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', marginTop: 20 };
const metaLabel: React.CSSProperties = { fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#474C5E', marginBottom: 4 };
const metaValue: React.CSSProperties = { fontSize: 15, color: '#7E8396' };
