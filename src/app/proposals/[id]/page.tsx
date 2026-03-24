'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { SignaturePad } from '@/components/SignaturePad';
import type { Proposal } from '@/types';

export default function PublicProposalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [signerName, setSignerName] = useState('');
  const [signatureImage, setSignatureImage] = useState('');
  const [accepting, setAccepting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/proposals');
        const data = await res.json() as { proposals: Proposal[] };
        const found = (data.proposals || []).find((p) => p.id === id);
        if (found) {
          setProposal(found);
          if (found.status === 'accepted') setAccepted(true);
          // Mark as viewed if sent
          if (found.status === 'sent') {
            await fetch(`/api/proposals`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ _action: 'mark_viewed', id }),
            }).catch(() => { /* silent */ });
          }
        } else {
          setNotFound(true);
        }
      } catch {
        setNotFound(true);
      }
      setLoading(false);
    })();
  }, [id]);

  const handleAccept = useCallback(async () => {
    if (!signatureImage || !signerName) {
      setError('Please sign and enter your name to accept.');
      return;
    }
    setAccepting(true);
    setError('');
    try {
      const res = await fetch(`/api/proposals/${id}/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signature_image: signatureImage, signer_name: signerName }),
      });
      if (!res.ok) {
        const data = await res.json() as { error: string };
        throw new Error(data.error || 'Failed to accept');
      }
      setAccepted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to accept');
    } finally {
      setAccepting(false);
    }
  }, [id, signatureImage, signerName]);

  if (loading) {
    return (
      <main style={pageStyle}>
        <p style={{ color: '#7E8396', fontSize: 15 }}>Loading proposal...</p>
      </main>
    );
  }

  if (notFound || !proposal) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Proposal Not Found</h1>
          <p style={{ color: '#7E8396', marginTop: 8 }}>This proposal may have expired or been removed.</p>
        </div>
      </main>
    );
  }

  if (accepted) {
    return (
      <main style={pageStyle}>
        <div style={{ width: '100%', maxWidth: 600, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
          <h1 style={{ ...headingStyle, color: '#34D399' }}>Proposal Accepted</h1>
          <p style={{ color: '#7E8396', marginTop: 12, lineHeight: 1.8, fontSize: 15 }}>
            Thank you, {proposal.client_name}! Your proposal for {proposal.client_business} has been accepted.
            We&apos;ll be in touch shortly to get started.
          </p>
          <div style={{ ...cardStyle, marginTop: 24, textAlign: 'left' }}>
            <p style={metaLabel}>Investment</p>
            <p style={{ fontSize: 24, color: '#DEE0E7', fontWeight: 600 }}>
              ${Number(proposal.total_setup).toLocaleString()} setup + ${Number(proposal.monthly_recurring).toLocaleString()}/mo
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <div style={{ width: '100%', maxWidth: 700 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2887CC', marginBottom: 8 }}>
            PROPOSAL
          </p>
          <h1 style={{ ...headingStyle, fontSize: 'clamp(28px, 5vw, 42px)' }}>
            {proposal.client_business}
          </h1>
          <p style={{ color: '#7E8396', fontSize: 15, marginTop: 8 }}>
            Prepared for {proposal.client_name}
          </p>
        </div>

        {/* Investment */}
        <div style={{ ...cardStyle, textAlign: 'center', marginBottom: 16 }}>
          <p style={{ ...metaLabel, marginBottom: 12 }}>Your Investment</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 32, color: '#DEE0E7', fontWeight: 600, fontFamily: "'Instrument Serif', Georgia, serif" }}>
                ${Number(proposal.total_setup).toLocaleString()}
              </p>
              <p style={{ color: '#7E8396', fontSize: 12, marginTop: 4 }}>One-time setup</p>
            </div>
            <div>
              <p style={{ fontSize: 32, color: '#DEE0E7', fontWeight: 600, fontFamily: "'Instrument Serif', Georgia, serif" }}>
                ${Number(proposal.monthly_recurring).toLocaleString()}<span style={{ fontSize: 16, color: '#7E8396' }}>/mo</span>
              </p>
              <p style={{ color: '#7E8396', fontSize: 12, marginTop: 4 }}>Monthly recurring</p>
            </div>
          </div>
          {proposal.timeline && (
            <p style={{ color: '#5DC4E8', fontSize: 13, marginTop: 16 }}>
              Estimated delivery: {proposal.timeline}
            </p>
          )}
        </div>

        {/* Scope */}
        <div style={{ ...cardStyle, marginBottom: 16 }}>
          <p style={{ ...metaLabel, marginBottom: 16 }}>What&apos;s Included</p>
          {(proposal.scope_items || []).map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0',
              borderBottom: i < proposal.scope_items.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
            }}>
              <span style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                background: item.included ? 'rgba(52,211,153,0.1)' : 'rgba(239,68,68,0.1)',
                color: item.included ? '#34D399' : '#EF4444', fontSize: 12, fontWeight: 700,
              }}>
                {item.included ? '\u2713' : '\u2717'}
              </span>
              <div>
                <p style={{ color: '#DEE0E7', fontSize: 15, fontWeight: 600 }}>{item.title}</p>
                <p style={{ color: '#7E8396', fontSize: 13, marginTop: 2, lineHeight: 1.6 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accept Section */}
        {proposal.status !== 'expired' && proposal.status !== 'declined' && (
          <div style={{ ...cardStyle, marginTop: 24 }}>
            <p style={{ ...metaLabel, marginBottom: 16 }}>Accept This Proposal</p>

            {error && <div style={errorStyle}>{error}</div>}

            <label style={fieldLabel}>Your Full Name</label>
            <input
              type="text"
              value={signerName}
              onChange={(e) => setSignerName(e.target.value)}
              placeholder="John Smith"
              style={inputStyle}
            />

            <label style={{ ...fieldLabel, marginTop: 16 }}>Your Signature</label>
            <SignaturePad onSignature={setSignatureImage} />

            <button
              onClick={handleAccept}
              disabled={accepting || !signatureImage || !signerName}
              style={{
                ...btnStyle,
                marginTop: 20,
                opacity: (!signatureImage || !signerName) ? 0.5 : 1,
              }}
            >
              {accepting ? 'Processing...' : 'Accept Proposal'}
            </button>

            <p style={{ color: '#474C5E', fontSize: 11, marginTop: 12, textAlign: 'center' }}>
              By accepting, you agree to the scope and pricing outlined above.
            </p>
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 40, paddingBottom: 40 }}>
          <p style={{ color: '#474C5E', fontSize: 12 }}>
            Black Diamond Cyber &mdash; AI-Powered Websites & Growth Systems
          </p>
          <p style={{ color: '#474C5E', fontSize: 11, marginTop: 4 }}>
            blackdiamondcyber@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = { minHeight: '100dvh', background: 'var(--bg, #06080C)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '60px 24px 40px' };
const cardStyle: React.CSSProperties = { background: 'var(--bg1, #0C0F16)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 16, padding: '28px' };
const headingStyle: React.CSSProperties = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--text, #DEE0E7)', fontWeight: 400, lineHeight: 1.1 };
const metaLabel: React.CSSProperties = { fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#474C5E' };
const fieldLabel: React.CSSProperties = { display: 'block', fontSize: 12, fontWeight: 600, color: '#7E8396', marginBottom: 6 };
const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 14px', background: 'var(--bg2, #12151E)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 10, color: '#DEE0E7', fontSize: 14, fontFamily: 'inherit', outline: 'none' };
const btnStyle: React.CSSProperties = { width: '100%', padding: '16px 32px', background: '#34D399', color: '#06080C', border: 'none', borderRadius: 40, fontSize: 13, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' };
const errorStyle: React.CSSProperties = { padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 10, marginBottom: 16, fontSize: 13, color: '#EF4444' };
