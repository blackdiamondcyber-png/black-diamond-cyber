'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const TIME_OPTIONS = [
  'Weekday morning (9–11 AM CT)',
  'Weekday afternoon (1–4 PM CT)',
  'Weekday evening (5–7 PM CT)',
  'Saturday morning',
] as const;

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  background: 'rgba(255,255,255,.03)',
  border: '1px solid var(--hr)',
  borderRadius: '10px',
  color: 'var(--text)',
  fontSize: '14px',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color .3s',
};

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    practiceName: '',
    phone: '',
    preferredTime: '',
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <section className="cta" id="book" ref={ref}>
      <div className="c">
        <div className="cta-o">
          <div className="cta-i" style={{ padding: '56px 48px' }}>
            {/* Ambient glow */}
            <div style={{
              position: 'absolute',
              top: '-80px',
              left: '-80px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(40,135,204,.07), transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-60px',
              right: '-60px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(93,196,232,.05), transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }} />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <h2 style={{ marginBottom: '8px' }}>
                Book Your Free
                <br />
                <em>Strategy Call</em>
              </h2>
              <p style={{ marginBottom: '32px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
                30 minutes. No sales pressure. We&apos;ll audit your current website, show you what&apos;s costing you patients, and map out a plan to fix it.
              </p>

              {/* What you get */}
              <div style={{
                display: 'inline-flex',
                gap: '24px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '32px',
                padding: '12px 20px',
                background: 'rgba(255,255,255,.02)',
                border: '1px solid var(--hr)',
                borderRadius: '12px',
              }}>
                {['Free competitor analysis', 'Free website audit', 'Free content strategy', 'No commitment'].map((item) => (
                  <span key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    color: 'var(--t2)',
                    fontWeight: 500,
                  }}>
                    <span style={{ color: 'var(--green)', fontSize: '14px' }}>✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Booking form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '480px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {status === 'success' ? (
                <div style={{
                  textAlign: 'center',
                  padding: '32px 0',
                }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(52,211,153,.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: '24px',
                    color: 'var(--text)',
                    marginBottom: '8px',
                    fontWeight: 400,
                  }}>
                    You&apos;re Booked!
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--t2)',
                    lineHeight: 1.7,
                  }}>
                    We&apos;ll email you within 24 hours to confirm your strategy call time. Check your inbox for a message from blackdiamondcyber@gmail.com.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {status === 'error' && errorMsg && (
                    <div style={{
                      padding: '10px 14px',
                      background: 'rgba(239,68,68,.1)',
                      border: '1px solid rgba(239,68,68,.2)',
                      borderRadius: '10px',
                      marginBottom: '16px',
                      fontSize: '13px',
                      color: '#EF4444',
                    }}>
                      {errorMsg}
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t2)', marginBottom: '6px' }}>
                        Full Name <span style={{ color: 'var(--cyan)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Dr. Jane Smith"
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t2)', marginBottom: '6px' }}>
                        Email <span style={{ color: 'var(--cyan)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="jane@practice.com"
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t2)', marginBottom: '6px' }}>
                        Business Name <span style={{ color: 'var(--cyan)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.practiceName}
                        onChange={(e) => update('practiceName', e.target.value)}
                        placeholder="Smith Family Dental"
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t2)', marginBottom: '6px' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t2)', marginBottom: '6px' }}>
                      Preferred Call Time <span style={{ color: 'var(--cyan)' }}>*</span>
                    </label>
                    <select
                      value={form.preferredTime}
                      onChange={(e) => update('preferredTime', e.target.value)}
                      required
                      style={{
                        ...inputStyle,
                        appearance: 'none' as const,
                        backgroundImage:
                          'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%237E8396\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 14px center',
                        paddingRight: '36px',
                      }}
                    >
                      <option value="" disabled>Select a time slot</option>
                      {TIME_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                      width: '100%',
                      padding: '16px 32px',
                      background: status === 'submitting' ? 'var(--t3)' : 'var(--blue)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '40px',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all .4s cubic-bezier(.16,1,.3,1)',
                      boxShadow: '0 4px 20px rgba(40,135,204,.2)',
                    }}
                  >
                    {status === 'submitting' ? 'Booking...' : 'Book My Strategy Call'}
                  </button>

                  <p style={{
                    fontSize: '12px',
                    color: 'var(--t3)',
                    textAlign: 'center',
                    marginTop: '14px',
                    lineHeight: 1.6,
                  }}>
                    No commitment required. We&apos;ll show you exactly what&apos;s holding your online presence back.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media(max-width:640px){
          #book .cta-i{padding:36px 20px!important}
          #book form > div[style*="grid-template-columns"]{grid-template-columns:1fr!important}
        }
      `}} />
    </section>
  );
}
