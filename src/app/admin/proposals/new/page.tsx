'use client';

import { useState, useCallback } from 'react';
import type { ScopeItem, ProposalProjectType } from '@/types';
import { TIERS, SERVICE_TIERS } from '@/types';

const PROJECT_TYPES: { value: ProposalProjectType; label: string }[] = [
  { value: 'website', label: 'Website' },
  { value: 'growth', label: 'Growth System' },
  { value: 'dominate', label: 'Dominate System' },
];

interface GeneratedContent {
  scope_items: ScopeItem[];
  timeline: string;
  value_proposition: string;
  notes: string;
}

export default function NewProposalPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientBusiness, setClientBusiness] = useState('');
  const [projectType, setProjectType] = useState<ProposalProjectType>('website');
  const [industry, setIndustry] = useState('');
  const [scopeItems, setScopeItems] = useState<ScopeItem[]>([]);
  const [totalSetup, setTotalSetup] = useState(0);
  const [monthlyRecurring, setMonthlyRecurring] = useState(0);
  const [timeline, setTimeline] = useState('');
  const [notes, setNotes] = useState('');
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAuth = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      if (res.ok) setAuthenticated(true);
      else setAuthError('Incorrect password');
    } catch { setAuthError('Failed to verify'); }
  }, [password]);

  // Auto-fill pricing when project type changes
  const handleProjectTypeChange = useCallback((type: ProposalProjectType) => {
    setProjectType(type);
    if (type === 'website') {
      setTotalSetup(TIERS.professional.setupFee);
      setMonthlyRecurring(TIERS.professional.monthlyPrice);
    } else if (type === 'growth') {
      setTotalSetup(SERVICE_TIERS.growth.setupFee);
      setMonthlyRecurring(SERVICE_TIERS.growth.monthlyPrice);
    } else {
      setTotalSetup(SERVICE_TIERS.dominate.setupFee);
      setMonthlyRecurring(SERVICE_TIERS.dominate.monthlyPrice);
    }
  }, []);

  const handleAIGenerate = async () => {
    if (!clientBusiness || !industry) {
      setError('Business name and industry are required for AI generation');
      return;
    }
    setGenerating(true);
    setError('');
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_business: clientBusiness, industry, project_type: projectType, notes }),
      });
      if (!res.ok) throw new Error('AI generation failed');
      const data = await res.json() as { generated: GeneratedContent };
      const gen = data.generated;
      if (gen.scope_items) setScopeItems(gen.scope_items);
      if (gen.timeline) setTimeline(gen.timeline);
      if (gen.notes) setNotes(gen.notes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'AI generation failed');
    } finally {
      setGenerating(false);
    }
  };

  const addScopeItem = () => {
    setScopeItems([...scopeItems, { title: '', description: '', included: true }]);
  };

  const updateScopeItem = (index: number, field: keyof ScopeItem, value: string | boolean) => {
    const updated = [...scopeItems];
    updated[index] = { ...updated[index], [field]: value };
    setScopeItems(updated);
  };

  const removeScopeItem = (index: number) => {
    setScopeItems(scopeItems.filter((_, i) => i !== index));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);
    try {
      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_name: clientName,
          client_email: clientEmail,
          client_business: clientBusiness,
          project_type: projectType,
          scope_items: scopeItems,
          total_setup: totalSetup,
          monthly_recurring: monthlyRecurring,
          timeline: timeline || undefined,
          notes: notes || undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json() as { error: string };
        throw new Error(data.error || 'Failed to create proposal');
      }
      const data = await res.json() as { proposal: { id: string } };
      setSuccess('Proposal created!');
      window.location.href = `/admin/proposals/${data.proposal.id}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
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

  return (
    <main style={pageStyle}>
      <div style={{ width: '100%', maxWidth: 800 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={headingStyle}>New Proposal</h1>
          <a href="/admin/proposals" style={{ color: '#7E8396', fontSize: 13, textDecoration: 'none' }}>&larr; Back</a>
        </div>

        {error && <div style={errorStyle}>{error}</div>}
        {success && <div style={{ ...errorStyle, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', color: '#34D399' }}>{success}</div>}

        <form onSubmit={handleSave}>
          <div style={cardStyle}>
            <h2 style={{ ...labelStyle, fontSize: 14, marginBottom: 16, marginTop: 0 }}>Client Info</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <Label text="Client Name" required />
                <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="John Smith" style={inputStyle} required />
              </div>
              <div>
                <Label text="Email" required />
                <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="john@business.com" style={inputStyle} required />
              </div>
              <div>
                <Label text="Business Name" required />
                <input type="text" value={clientBusiness} onChange={(e) => setClientBusiness(e.target.value)} placeholder="Smith Family Dental" style={inputStyle} required />
              </div>
              <div>
                <Label text="Industry" />
                <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Dental" style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={{ ...cardStyle, marginTop: 16 }}>
            <h2 style={{ ...labelStyle, fontSize: 14, marginBottom: 16, marginTop: 0 }}>Project Details</h2>
            <Label text="Project Type" required />
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              {PROJECT_TYPES.map((t) => (
                <button key={t.value} type="button" onClick={() => handleProjectTypeChange(t.value)} style={{
                  padding: '8px 20px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  background: projectType === t.value ? 'rgba(40,135,204,0.15)' : 'var(--bg2, #12151E)',
                  color: projectType === t.value ? '#2887CC' : '#7E8396',
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div>
                <Label text="Setup Fee ($)" required />
                <input type="number" value={totalSetup} onChange={(e) => setTotalSetup(Number(e.target.value))} style={inputStyle} min={0} />
              </div>
              <div>
                <Label text="Monthly ($)" required />
                <input type="number" value={monthlyRecurring} onChange={(e) => setMonthlyRecurring(Number(e.target.value))} style={inputStyle} min={0} />
              </div>
              <div>
                <Label text="Timeline" />
                <input type="text" value={timeline} onChange={(e) => setTimeline(e.target.value)} placeholder="5-7 business days" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Label text="Scope Items" required />
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" onClick={handleAIGenerate} disabled={generating} style={{
                  padding: '6px 16px', borderRadius: 20, fontSize: 11, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  background: 'rgba(93,196,232,0.1)', color: '#5DC4E8', letterSpacing: '0.5px',
                }}>
                  {generating ? 'Generating...' : 'AI Generate'}
                </button>
                <button type="button" onClick={addScopeItem} style={{
                  padding: '6px 16px', borderRadius: 20, fontSize: 11, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  background: 'var(--bg2, #12151E)', color: '#7E8396',
                }}>
                  + Add Item
                </button>
              </div>
            </div>

            {scopeItems.map((item, i) => (
              <div key={i} style={{ background: 'var(--bg2, #12151E)', borderRadius: 10, padding: 12, marginBottom: 8, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <input type="checkbox" checked={item.included} onChange={(e) => updateScopeItem(i, 'included', e.target.checked)} style={{ marginTop: 6, accentColor: '#34D399' }} />
                <div style={{ flex: 1 }}>
                  <input type="text" value={item.title} onChange={(e) => updateScopeItem(i, 'title', e.target.value)} placeholder="Feature title" style={{ ...inputStyle, marginBottom: 4, padding: '8px 10px', fontSize: 13 }} />
                  <input type="text" value={item.description} onChange={(e) => updateScopeItem(i, 'description', e.target.value)} placeholder="Description" style={{ ...inputStyle, padding: '6px 10px', fontSize: 12, color: '#7E8396' }} />
                </div>
                <button type="button" onClick={() => removeScopeItem(i)} style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: 16, padding: '4px 8px' }}>
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, marginTop: 16 }}>
            <Label text="Notes (internal)" />
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Internal notes..." rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 70 }} />
          </div>

          <button type="submit" disabled={saving} style={{ ...btnStyle, marginTop: 20 }}>
            {saving ? 'Saving...' : 'Create Proposal'}
          </button>
        </form>
      </div>
    </main>
  );
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label style={labelStyle}>
      {text}
      {required && <span style={{ color: '#5DC4E8', marginLeft: 3 }}>*</span>}
    </label>
  );
}

const pageStyle: React.CSSProperties = { minHeight: '100dvh', background: 'var(--bg, #06080C)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 24px 40px' };
const cardStyle: React.CSSProperties = { background: 'var(--bg1, #0C0F16)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 16, padding: '24px' };
const headingStyle: React.CSSProperties = { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(24px, 4vw, 32px)', color: 'var(--text, #DEE0E7)', fontWeight: 400 };
const labelStyle: React.CSSProperties = { display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#7E8396', marginBottom: 6, marginTop: 12 };
const inputStyle: React.CSSProperties = { width: '100%', padding: '10px 12px', background: 'var(--bg2, #12151E)', border: '1px solid var(--hr, rgba(255,255,255,0.04))', borderRadius: 8, color: '#DEE0E7', fontSize: 14, fontFamily: 'inherit', outline: 'none' };
const btnStyle: React.CSSProperties = { width: '100%', padding: '14px 32px', background: '#2887CC', color: '#fff', border: 'none', borderRadius: 40, fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', marginTop: 20 };
const errorStyle: React.CSSProperties = { padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 10, marginBottom: 16, fontSize: 13, color: '#EF4444' };
