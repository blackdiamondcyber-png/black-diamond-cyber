'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { contactFormSchema, type ContactFormInput } from '@/lib/schemas';
import { INDUSTRIES } from '@/lib/schemas';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactModal({ open, onClose }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
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

  // Focus first input when modal opens
  useEffect(() => {
    if (open) {
      // Small delay to allow animation to start
      const timer = setTimeout(() => firstInputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Escape key handler
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose],
  );

  const updateField = (
    field: keyof ContactFormInput,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

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
      setForm({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        industry: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong',
      );
    }
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 540,
          maxHeight: '90dvh',
          overflowY: 'auto',
          background: 'var(--bg1, #0C0F16)',
          border: '1px solid var(--hr, rgba(255,255,255,0.04))',
          borderBottom: 'none',
          borderRadius: '20px 20px 0 0',
          padding: '36px 28px 40px',
          animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 28,
          }}
        >
          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(24px, 4vw, 32px)',
              color: 'var(--text, #DEE0E7)',
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Get Your <em style={{ color: 'var(--cyan, #5DC4E8)' }}>Free</em>{' '}
            Quote
          </h2>
          <button
            onClick={onClose}
            aria-label="Close contact form"
            style={{
              background: 'none',
              border: '1px solid var(--hr, rgba(255,255,255,0.04))',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--t2, #7E8396)',
              fontSize: 18,
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                'var(--cyan, #5DC4E8)';
              e.currentTarget.style.color = 'var(--cyan, #5DC4E8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                'var(--hr, rgba(255,255,255,0.04))';
              e.currentTarget.style.color = 'var(--t2, #7E8396)';
            }}
          >
            &times;
          </button>
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background:
                  'rgba(52, 211, 153, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: 28,
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
            <h3
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 24,
                color: 'var(--text, #DEE0E7)',
                marginBottom: 8,
                fontWeight: 400,
              }}
            >
              Message Sent
            </h3>
            <p
              style={{
                fontSize: 14,
                color: 'var(--t2, #7E8396)',
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              We&apos;ll get back to you within 24 hours with a custom
              quote for your project.
            </p>
            <button
              onClick={onClose}
              style={{
                padding: '12px 32px',
                background: 'var(--blue, #2887CC)',
                color: '#fff',
                border: 'none',
                borderRadius: 40,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '1.4px',
                textTransform: 'uppercase' as const,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Error Banner */}
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

            {/* Name */}
            <FieldGroup
              label="Full Name"
              error={fieldErrors.name}
              required
            >
              <input
                ref={firstInputRef}
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="John Smith"
                required
                style={inputStyle}
              />
            </FieldGroup>

            {/* Email */}
            <FieldGroup
              label="Email"
              error={fieldErrors.email}
              required
            >
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="john@business.com"
                required
                style={inputStyle}
              />
            </FieldGroup>

            {/* Phone */}
            <FieldGroup label="Phone" error={fieldErrors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="(555) 123-4567"
                style={inputStyle}
              />
            </FieldGroup>

            {/* Business Name */}
            <FieldGroup
              label="Business Name"
              error={fieldErrors.businessName}
            >
              <input
                type="text"
                value={form.businessName}
                onChange={(e) =>
                  updateField('businessName', e.target.value)
                }
                placeholder="Smith Dental"
                style={inputStyle}
              />
            </FieldGroup>

            {/* Industry */}
            <FieldGroup
              label="Industry"
              error={fieldErrors.industry}
              required
            >
              <select
                value={form.industry}
                onChange={(e) =>
                  updateField('industry', e.target.value)
                }
                required
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
            </FieldGroup>

            {/* Message */}
            <FieldGroup label="Message" error={fieldErrors.message}>
              <textarea
                value={form.message}
                onChange={(e) =>
                  updateField('message', e.target.value)
                }
                placeholder="Tell us about your project..."
                rows={3}
                style={{
                  ...inputStyle,
                  resize: 'vertical' as const,
                  minHeight: 80,
                }}
              />
            </FieldGroup>

            {/* Submit */}
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
              {status === 'submitting'
                ? 'Sending...'
                : 'Get Free Quote'}
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------- */
/* Shared styles & sub-components                      */
/* -------------------------------------------------- */

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

function FieldGroup({
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
        <p
          style={{
            fontSize: 12,
            color: '#EF4444',
            marginTop: 4,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
