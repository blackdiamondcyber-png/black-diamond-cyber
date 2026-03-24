'use client';

import { useState, useCallback } from 'react';
import { generateSiteSchema, type GenerateSiteInput } from '@/lib/schemas';

interface GeneratedContent {
  headline: string;
  subheadline: string;
  aboutTitle: string;
  aboutText: string;
  services: { name: string; description: string }[];
  ctaHeadline: string;
  ctaText: string;
  ctaButton: string;
  metaTitle: string;
  metaDescription: string;
}

const SERVICE_OPTIONS = [
  'General Dentistry',
  'Cosmetic Dentistry',
  'Orthodontics',
  'Teeth Whitening',
  'Dental Implants',
  'Emergency Dental',
  'Pediatric Dentistry',
  'Periodontics',
  'Oral Surgery',
  'HVAC Installation',
  'HVAC Repair',
  'AC Service',
  'Heating Service',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Landscaping',
];

export default function AdminGeneratePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [form, setForm] = useState<GenerateSiteInput>({
    practiceName: '',
    ownerName: '',
    services: [],
    location: '',
    phone: '',
    email: '',
    brandPrimary: '#2887CC',
    brandSecondary: '#5DC4E8',
    description: '',
  });

  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState('');

  const handleAuth = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setAuthError('');
      try {
        const res = await fetch('/api/admin/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        });
        if (res.ok) {
          setAuthenticated(true);
        } else {
          setAuthError('Incorrect password');
        }
      } catch {
        setAuthError('Failed to verify');
      }
    },
    [password],
  );

  const toggleService = useCallback((service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }, []);

  const updateField = useCallback(
    (field: keyof GenerateSiteInput, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = generateSiteSchema.safeParse(form);
    if (!result.success) {
      const issues = result.error.issues;
      const firstIssue = issues[0];
      setError(firstIssue ? `${firstIssue.path.join('.')}: ${firstIssue.message}` : 'Validation failed');
      return;
    }

    setGenerating(true);

    try {
      const res = await fetch('/api/admin/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        const data: unknown = await res.json();
        const msg =
          typeof data === 'object' &&
          data !== null &&
          'error' in data &&
          typeof (data as Record<string, unknown>).error === 'string'
            ? (data as Record<string, string>).error
            : 'Generation failed';
        throw new Error(msg);
      }

      const data = (await res.json()) as { generated: GeneratedContent };
      setGenerated(data.generated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setGenerating(false);
    }
  };

  // Password gate
  if (!authenticated) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Admin Access</h1>
          <p style={subStyle}>Enter the admin password to continue.</p>
          <form onSubmit={handleAuth} style={{ marginTop: 24 }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={inputStyle}
              autoFocus
            />
            {authError && (
              <p style={{ color: '#EF4444', fontSize: 13, marginTop: 8 }}>
                {authError}
              </p>
            )}
            <button type="submit" style={{ ...btnStyle, marginTop: 16 }}>
              Unlock
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <div style={{ width: '100%', maxWidth: 1100, display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
        {/* Intake Form */}
        <div style={{ ...cardStyle, flex: '1 1 460px' }}>
          <h1 style={headingStyle}>Website Generator</h1>
          <p style={subStyle}>Fill in client details to generate website content with AI.</p>

          <form onSubmit={handleGenerate} style={{ marginTop: 24 }}>
            {error && (
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: 10,
                  marginBottom: 20,
                  fontSize: 13,
                  color: '#EF4444',
                }}
              >
                {error}
              </div>
            )}

            <Label text="Practice / Business Name" required />
            <input
              type="text"
              value={form.practiceName}
              onChange={(e) => updateField('practiceName', e.target.value)}
              placeholder="Smith Family Dental"
              style={inputStyle}
            />

            <Label text="Owner Name" required />
            <input
              type="text"
              value={form.ownerName}
              onChange={(e) => updateField('ownerName', e.target.value)}
              placeholder="Dr. John Smith"
              style={inputStyle}
            />

            <Label text="Location" required />
            <input
              type="text"
              value={form.location}
              onChange={(e) => updateField('location', e.target.value)}
              placeholder="Austin, TX"
              style={inputStyle}
            />

            <Label text="Phone" required />
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="(555) 123-4567"
              style={inputStyle}
            />

            <Label text="Email" required />
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="info@smithdental.com"
              style={inputStyle}
            />

            <Label text="Services" required />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap' as const,
                gap: 8,
                marginBottom: 16,
              }}
            >
              {SERVICE_OPTIONS.map((svc) => {
                const selected = form.services.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleService(svc)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                      border: selected
                        ? '1px solid var(--cyan, #5DC4E8)'
                        : '1px solid var(--hr, rgba(255,255,255,0.04))',
                      background: selected
                        ? 'rgba(93, 196, 232, 0.1)'
                        : 'var(--bg2, #12151E)',
                      color: selected
                        ? 'var(--cyan, #5DC4E8)'
                        : 'var(--t2, #7E8396)',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {svc}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <Label text="Brand Primary" />
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input
                    type="color"
                    value={form.brandPrimary || '#2887CC'}
                    onChange={(e) => updateField('brandPrimary', e.target.value)}
                    style={{
                      width: 44,
                      height: 44,
                      border: 'none',
                      borderRadius: 8,
                      cursor: 'pointer',
                      background: 'transparent',
                    }}
                  />
                  <input
                    type="text"
                    value={form.brandPrimary || ''}
                    onChange={(e) => updateField('brandPrimary', e.target.value)}
                    placeholder="#2887CC"
                    style={{ ...inputStyle, marginBottom: 0 }}
                  />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <Label text="Brand Secondary" />
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input
                    type="color"
                    value={form.brandSecondary || '#5DC4E8'}
                    onChange={(e) => updateField('brandSecondary', e.target.value)}
                    style={{
                      width: 44,
                      height: 44,
                      border: 'none',
                      borderRadius: 8,
                      cursor: 'pointer',
                      background: 'transparent',
                    }}
                  />
                  <input
                    type="text"
                    value={form.brandSecondary || ''}
                    onChange={(e) => updateField('brandSecondary', e.target.value)}
                    placeholder="#5DC4E8"
                    style={{ ...inputStyle, marginBottom: 0 }}
                  />
                </div>
              </div>
            </div>

            <Label text="Additional Description" />
            <textarea
              value={form.description || ''}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Any additional context about the business..."
              rows={3}
              style={{ ...inputStyle, resize: 'vertical' as const, minHeight: 80 }}
            />

            <button type="submit" disabled={generating} style={btnStyle}>
              {generating ? 'Generating with AI...' : 'Generate Website Content'}
            </button>
          </form>
        </div>

        {/* Preview Panel */}
        <div style={{ ...cardStyle, flex: '1 1 460px' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(20px, 3vw, 28px)' }}>Preview</h2>

          {!generated ? (
            <div
              style={{
                padding: '60px 20px',
                textAlign: 'center',
                color: 'var(--t3, #474C5E)',
                fontSize: 14,
              }}
            >
              Generated content will appear here after you click Generate.
            </div>
          ) : (
            <div style={{ marginTop: 24 }}>
              <PreviewSection label="Headline">
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 28,
                    color: 'var(--text, #DEE0E7)',
                    fontWeight: 400,
                  }}
                >
                  {generated.headline}
                </h3>
                <p style={{ color: 'var(--t2, #7E8396)', fontSize: 14, marginTop: 8 }}>
                  {generated.subheadline}
                </p>
              </PreviewSection>

              <PreviewSection label="About">
                <h4
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 20,
                    color: 'var(--text, #DEE0E7)',
                    fontWeight: 400,
                    marginBottom: 8,
                  }}
                >
                  {generated.aboutTitle}
                </h4>
                <p
                  style={{
                    color: 'var(--t2, #7E8396)',
                    fontSize: 13,
                    lineHeight: 1.8,
                    whiteSpace: 'pre-wrap' as const,
                  }}
                >
                  {generated.aboutText}
                </p>
              </PreviewSection>

              <PreviewSection label="Services">
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                  {generated.services.map((svc, i) => (
                    <div key={i}>
                      <strong style={{ color: 'var(--cyan, #5DC4E8)', fontSize: 14 }}>
                        {svc.name}
                      </strong>
                      <p style={{ color: 'var(--t2, #7E8396)', fontSize: 13, marginTop: 2 }}>
                        {svc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </PreviewSection>

              <PreviewSection label="CTA">
                <h4
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 20,
                    color: 'var(--text, #DEE0E7)',
                    fontWeight: 400,
                  }}
                >
                  {generated.ctaHeadline}
                </h4>
                <p style={{ color: 'var(--t2, #7E8396)', fontSize: 13, marginTop: 4 }}>
                  {generated.ctaText}
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: 12,
                    padding: '10px 24px',
                    background: 'var(--blue, #2887CC)',
                    color: '#fff',
                    borderRadius: 40,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  {generated.ctaButton}
                </span>
              </PreviewSection>

              <PreviewSection label="SEO">
                <p style={{ color: 'var(--text, #DEE0E7)', fontSize: 14, fontWeight: 600 }}>
                  {generated.metaTitle}
                </p>
                <p style={{ color: 'var(--t2, #7E8396)', fontSize: 13, marginTop: 4 }}>
                  {generated.metaDescription}
                </p>
              </PreviewSection>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------- */
/* Sub-components & shared styles                      */
/* -------------------------------------------------- */

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label
      style={{
        display: 'block',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: 'var(--t2, #7E8396)',
        marginBottom: 6,
        marginTop: 12,
      }}
    >
      {text}
      {required && (
        <span style={{ color: 'var(--cyan, #5DC4E8)', marginLeft: 3 }}>*</span>
      )}
    </label>
  );
}

function PreviewSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: '16px 0',
        borderBottom: '1px solid var(--hr, rgba(255,255,255,0.04))',
      }}
    >
      <span
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--t3, #474C5E)',
          marginBottom: 8,
          display: 'block',
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: '100dvh',
  background: 'var(--bg, #06080C)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '80px 24px 40px',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--bg1, #0C0F16)',
  border: '1px solid var(--hr, rgba(255,255,255,0.04))',
  borderRadius: 20,
  padding: '32px 28px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontSize: 'clamp(24px, 4vw, 32px)',
  color: 'var(--text, #DEE0E7)',
  fontWeight: 400,
  lineHeight: 1.1,
};

const subStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'var(--t2, #7E8396)',
  lineHeight: 1.85,
  marginTop: 8,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  background: 'var(--bg2, #12151E)',
  border: '1px solid var(--hr, rgba(255,255,255,0.04))',
  borderRadius: 10,
  color: 'var(--text, #DEE0E7)',
  fontSize: 14,
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  marginBottom: 4,
};

const btnStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 32px',
  background: 'var(--blue, #2887CC)',
  color: '#fff',
  border: 'none',
  borderRadius: 40,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  boxShadow: '0 4px 20px rgba(40, 135, 204, 0.2)',
  marginTop: 20,
};
