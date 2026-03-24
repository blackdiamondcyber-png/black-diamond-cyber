'use client';

import { useState, useCallback } from 'react';
import { contactFormSchema, type ContactFormInput, INDUSTRIES } from '@/lib/schemas';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormInput, string>>
  >({});

  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: '',
    message: '',
  });

  const updateField = useCallback(
    (field: keyof ContactFormInput, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      setFieldErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    },
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setErrorMessage('');

    const result = contactFormSchema.safeParse(form);
    if (!result.success) {
      const flat = result.error.flatten();
      const errors: Partial<Record<keyof ContactFormInput, string>> = {};
      for (const [key, messages] of Object.entries(flat.fieldErrors)) {
        if (messages && messages.length > 0) {
          errors[key as keyof ContactFormInput] = messages[0];
        }
      }
      setFieldErrors(errors);
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
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
            : 'Something went wrong';
        throw new Error(msg);
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong',
      );
    }
  };

  return (
    <main
      style={{
        minHeight: '100dvh',
        background: 'var(--bg, #06080C)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 40px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 540,
          background: 'var(--bg1, #0C0F16)',
          border: '1px solid var(--hr, rgba(255,255,255,0.04))',
          borderRadius: 20,
          padding: '40px 28px',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <p
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px',
              borderRadius: 40,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '2.2px',
              textTransform: 'uppercase',
              border: '1px solid var(--hr-b, rgba(40,135,204,0.12))',
              color: 'var(--cyan, #5DC4E8)',
              background: 'var(--blue-d, rgba(40,135,204,0.08))',
              marginBottom: 16,
            }}
          >
            Free Consultation
          </p>
          <h1
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(28px, 5vw, 40px)',
              color: 'var(--text, #DEE0E7)',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Let&apos;s Build Something{' '}
            <em style={{ color: 'var(--cyan, #5DC4E8)' }}>Exceptional</em>
          </h1>
          <p
            style={{
              fontSize: 14,
              color: 'var(--t2, #7E8396)',
              lineHeight: 1.85,
              maxWidth: 400,
              margin: '0 auto',
            }}
          >
            Tell us about your business and we&apos;ll craft a custom website
            that converts visitors into clients.
          </p>
        </div>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(52, 211, 153, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--green, #34D399)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 24,
                color: 'var(--text, #DEE0E7)',
                marginBottom: 8,
                fontWeight: 400,
              }}
            >
              Thank You!
            </h2>
            <p
              style={{
                fontSize: 14,
                color: 'var(--t2, #7E8396)',
                lineHeight: 1.7,
              }}
            >
              We&apos;ll be in touch within 24 hours with your custom quote.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {status === 'error' && errorMessage && (
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
                {errorMessage}
              </div>
            )}

            <InputField
              label="Full Name"
              required
              error={fieldErrors.name}
            >
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="John Smith"
                style={inputStyle}
              />
            </InputField>

            <InputField label="Email" required error={fieldErrors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="john@business.com"
                style={inputStyle}
              />
            </InputField>

            <InputField label="Phone" error={fieldErrors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="(555) 123-4567"
                style={inputStyle}
              />
            </InputField>

            <InputField
              label="Business Name"
              error={fieldErrors.businessName}
            >
              <input
                type="text"
                value={form.businessName}
                onChange={(e) => updateField('businessName', e.target.value)}
                placeholder="Smith Dental"
                style={inputStyle}
              />
            </InputField>

            <InputField
              label="Industry"
              required
              error={fieldErrors.industry}
            >
              <select
                value={form.industry}
                onChange={(e) => updateField('industry', e.target.value)}
                style={{
                  ...inputStyle,
                  appearance: 'none' as const,
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%237E8396\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  paddingRight: 36,
                }}
              >
                <option value="" disabled>
                  Select your industry
                </option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </InputField>

            <InputField label="Message" error={fieldErrors.message}>
              <textarea
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Tell us about your project..."
                rows={4}
                style={{
                  ...inputStyle,
                  resize: 'vertical' as const,
                  minHeight: 100,
                }}
              />
            </InputField>

            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                width: '100%',
                padding: '14px 32px',
                background:
                  status === 'submitting'
                    ? 'var(--t3, #474C5E)'
                    : 'var(--blue, #2887CC)',
                color: '#fff',
                border: 'none',
                borderRadius: 40,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase' as const,
                cursor:
                  status === 'submitting' ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 20px rgba(40, 135, 204, 0.2)',
                marginTop: 8,
              }}
            >
              {status === 'submitting' ? 'Sending...' : 'Get Free Quote'}
            </button>

            <p
              style={{
                fontSize: 11,
                color: 'var(--t3, #474C5E)',
                textAlign: 'center',
                marginTop: 16,
                lineHeight: 1.6,
              }}
            >
              We respond within 24 hours. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </main>
  );
}

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
};

function InputField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: 'block',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'var(--t2, #7E8396)',
          marginBottom: 6,
        }}
      >
        {label}
        {required && (
          <span style={{ color: 'var(--cyan, #5DC4E8)', marginLeft: 3 }}>
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: 12, color: '#EF4444', marginTop: 4 }}>
          {error}
        </p>
      )}
    </div>
  );
}
