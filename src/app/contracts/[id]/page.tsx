'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { SignaturePad } from '@/components/SignaturePad';
import type { Contract } from '@/types';

export default function PublicContractPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [contract, setContract] = useState<Contract | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [signerName, setSignerName] = useState('');
  const [signatureImage, setSignatureImage] = useState('');
  const [signing, setSigning] = useState(false);
  const [signed, setSigned] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/contracts');
        const data = await res.json() as { contracts: Contract[] };
        const found = (data.contracts || []).find((c) => c.id === id);
        if (found) {
          setContract(found);
          if (found.status === 'signed' || found.status === 'active') setSigned(true);
        } else {
          setNotFound(true);
        }
      } catch {
        setNotFound(true);
      }
      setLoading(false);
    })();
  }, [id]);

  const handleSign = useCallback(async () => {
    if (!signatureImage || !signerName) {
      setError('Please sign and enter your name.');
      return;
    }
    setSigning(true);
    setError('');
    try {
      const res = await fetch(`/api/contracts/${id}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signature_image: signatureImage, signer_name: signerName }),
      });
      if (!res.ok) {
        const data = await res.json() as { error: string };
        throw new Error(data.error || 'Failed to sign');
      }
      setSigned(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign');
    } finally {
      setSigning(false);
    }
  }, [id, signatureImage, signerName]);

  if (loading) {
    return <main style={pageStyle}><p style={{ color: '#7E8396' }}>Loading contract...</p></main>;
  }

  if (notFound || !contract) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Contract Not Found</h1>
          <p style={{ color: '#7E8396', marginTop: 8 }}>This contract may have expired or been removed.</p>
        </div>
      </main>
    );
  }

  if (signed) {
    return (
      <main style={pageStyle}>
        <div style={{ width: '100%', maxWidth: 600, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
          <h1 style={{ ...headingStyle, color: '#34D399' }}>Contract Signed</h1>
          <p style={{ color: '#7E8396', marginTop: 12, lineHeight: 1.8, fontSize: 15 }}>
            Thank you, {contract.client_name}! Your contract has been signed successfully.
            We&apos;ll be in touch to kick things off.
          </p>
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
            SERVICE AGREEMENT
          </p>
          <h1 style={{ ...headingStyle, fontSize: 'clamp(28px, 5vw, 42px)' }}>
            {contract.contract_type}
          </h1>
          <p style={{ color: '#7E8396', fontSize: 15, marginTop: 8 }}>
            Prepared for {contract.client_name}
          </p>
        </div>

        {/* Terms */}
        <div style={{ ...cardStyle, marginBottom: 16 }}>
          <p style={{ ...metaLabel, marginBottom: 16 }}>Agreement Terms</p>

          <div style={{ marginBottom: 16 }}>
            <p style={{ color: '#DEE0E7', fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Description</p>
            <p style={{ color: '#7E8396', fontSize: 14, lineHeight: 1.8 }}>{contract.terms.description}</p>
          </div>

          <div style={{ marginBottom: 16 }}>
            <p style={{ color: '#DEE0E7', fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Payment Terms</p>
            <p style={{ color: '#7E8396', fontSize: 14, lineHeight: 1.8 }}>{contract.terms.paymentTerms}</p>
          </div>

          <div style={{ marginBottom: 16 }}>
            <p style={{ color: '#DEE0E7', fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Deliverables</p>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {contract.terms.deliverables.map((d, i) => (
                <li key={i} style={{ color: '#7E8396', fontSize: 14, lineHeight: 1.8, marginBottom: 4 }}>{d}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 16 }}>
            <p style={{ color: '#DEE0E7', fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Cancellation Policy</p>
            <p style={{ color: '#7E8396', fontSize: 14, lineHeight: 1.8 }}>{contract.terms.cancellationPolicy}</p>
          </div>

          {contract.terms.additionalTerms && (
            <div>
              <p style={{ color: '#DEE0E7', fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Additional Terms</p>
              <p style={{ color: '#7E8396', fontSize: 14, lineHeight: 1.8 }}>{contract.terms.additionalTerms}</p>
            </div>
          )}
        </div>

        {/* Dates */}
        {(contract.start_date || contract.end_date) && (
          <div style={{ ...cardStyle, marginBottom: 16 }}>
            <div style={{ display: 'flex', gap: 40 }}>
              {contract.start_date && (
                <div>
                  <p style={metaLabel}>Start Date</p>
                  <p style={{ color: '#DEE0E7', fontSize: 15, marginTop: 4 }}>{new Date(contract.start_date).toLocaleDateString()}</p>
                </div>
              )}
              {contract.end_date && (
                <div>
                  <p style={metaLabel}>End Date</p>
                  <p style={{ color: '#DEE0E7', fontSize: 15, marginTop: 4 }}>{new Date(contract.end_date).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sign Section */}
        {contract.status !== 'cancelled' && contract.status !== 'expired' && (
          <div style={{ ...cardStyle, marginTop: 24 }}>
            <p style={{ ...metaLabel, marginBottom: 16 }}>Sign This Agreement</p>

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

            <p style={{ color: '#7E8396', fontSize: 12, marginTop: 12 }}>
              Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <button
              onClick={handleSign}
              disabled={signing || !signatureImage || !signerName}
              style={{
                ...btnStyle,
                marginTop: 20,
                opacity: (!signatureImage || !signerName) ? 0.5 : 1,
              }}
            >
              {signing ? 'Processing...' : 'Sign Agreement'}
            </button>

            <p style={{ color: '#474C5E', fontSize: 11, marginTop: 12, textAlign: 'center' }}>
              By signing, you agree to the terms outlined in this service agreement.
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
