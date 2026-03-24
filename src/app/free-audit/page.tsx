'use client';

import { useState, useEffect, useCallback, type FormEvent } from 'react';
import {
  auditFormSchema,
  AUDIT_INDUSTRIES,
  type AuditResult,
} from '@/lib/audit';

type AuditState = 'form' | 'scanning' | 'results';

const SCAN_STEPS = [
  { icon: '\u2295', label: 'Checking Google rankings...' },
  { icon: '\u2605', label: 'Analyzing reputation...' },
  { icon: '\u26A1', label: 'Scanning website performance...' },
  { icon: '\u2630', label: 'Checking directory listings...' },
] as const;

function scoreColor(score: number): string {
  if (score >= 70) return 'score-good';
  if (score >= 40) return 'score-ok';
  return 'score-bad';
}

function ScoreRing({
  score,
  animated,
}: {
  score: number;
  animated: boolean;
}) {
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const offset = animated ? circumference - (score / 100) * circumference : circumference;

  return (
    <div className="score-ring">
      <svg viewBox="0 0 160 160" width="160" height="160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.04)"
          strokeWidth="6"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 2s cubic-bezier(.16,1,.3,1)' }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--blue)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ textAlign: 'center' }}>
        <div className="value">{animated ? score : 0}</div>
        <div className="label">Overall Score</div>
      </div>
    </div>
  );
}

function ScoreBar({
  score,
  animated,
}: {
  score: number;
  animated: boolean;
}) {
  return (
    <div className="score-bar">
      <div
        className={`score-bar-fill ${scoreColor(score)}`}
        style={{ width: animated ? `${score}%` : '0%' }}
      />
    </div>
  );
}

export default function FreeAuditPage() {
  const [state, setState] = useState<AuditState>('form');
  const [businessName, setBusinessName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [cityState, setCityState] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [scanStep, setScanStep] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [animated, setAnimated] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const runScanAnimation = useCallback(() => {
    let step = 0;
    setScanStep(0);
    setScanProgress(0);

    const interval = setInterval(() => {
      step++;
      if (step < SCAN_STEPS.length) {
        setScanStep(step);
        setScanProgress(Math.round(((step + 1) / SCAN_STEPS.length) * 85));
      } else {
        setScanProgress(100);
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError('');

    const parsed = auditFormSchema.safeParse({
      businessName,
      websiteUrl: websiteUrl || '',
      cityState,
      industry,
      email,
    });

    if (!parsed.success) {
      const flat = parsed.error.flatten();
      const fieldErrors: Record<string, string> = {};
      for (const [key, messages] of Object.entries(flat.fieldErrors)) {
        if (messages && messages.length > 0) {
          fieldErrors[key] = messages[0];
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setState('scanning');
    const cleanup = runScanAnimation();

    try {
      const res = await fetch('/api/audit/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName,
          websiteUrl: websiteUrl || '',
          cityState,
          industry,
          email,
        }),
      });

      if (!res.ok) {
        throw new Error('Audit failed');
      }

      const data = (await res.json()) as AuditResult;

      // Ensure minimum animation time
      await new Promise((resolve) => setTimeout(resolve, 6500));
      cleanup();
      setScanProgress(100);

      setResult(data);
      setState('results');

      // Trigger score animations after mount
      requestAnimationFrame(() => {
        setTimeout(() => setAnimated(true), 100);
      });
    } catch {
      cleanup();
      setState('form');
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  // Auto-advance scan step visuals
  useEffect(() => {
    if (state !== 'scanning') return;
    const stepProg = Math.round(((scanStep + 1) / SCAN_STEPS.length) * 85);
    setScanProgress(Math.max(scanProgress, stepProg));
  }, [scanStep, state, scanProgress]);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--bg2)',
    border: '1px solid var(--hr)',
    borderRadius: 'var(--r)',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'inherit',
    fontWeight: 300,
    outline: 'none',
    transition: '.4s var(--ease)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase' as const,
    color: 'var(--t2)',
    marginBottom: '6px',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: '11px',
    color: '#EF4444',
    marginTop: '4px',
  };

  // FORM STATE
  if (state === 'form') {
    return (
      <div
        style={{
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="amb">
          <div className="orb" />
          <div className="orb" />
        </div>
        <div className="grain" />
        <div
          className="audit-card"
          style={{ maxWidth: '520px', width: '100%', position: 'relative', zIndex: 2 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(28px, 3.6vw, 42px)',
                color: 'var(--text)',
                lineHeight: 1.08,
                letterSpacing: '-.025em',
                fontWeight: 400,
                marginBottom: '10px',
              }}
            >
              Free Website <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Audit</em>
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--t2)',
                lineHeight: 1.85,
                maxWidth: '380px',
                margin: '0 auto',
              }}
            >
              See how your practice stacks up against competitors. Takes 30
              seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Bright Smile Dental"
                  style={inputStyle}
                />
                {errors.businessName && (
                  <p style={errorStyle}>{errors.businessName}</p>
                )}
              </div>

              <div>
                <label style={labelStyle}>Website URL (optional)</label>
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://brightsmile.com"
                  style={inputStyle}
                />
                {errors.websiteUrl && (
                  <p style={errorStyle}>{errors.websiteUrl}</p>
                )}
              </div>

              <div>
                <label style={labelStyle}>City, State</label>
                <input
                  type="text"
                  value={cityState}
                  onChange={(e) => setCityState(e.target.value)}
                  placeholder="Austin, TX"
                  style={inputStyle}
                />
                {errors.cityState && (
                  <p style={errorStyle}>{errors.cityState}</p>
                )}
              </div>

              <div>
                <label style={labelStyle}>Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none' as const,
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%237E8396\' d=\'M6 8L1 3h10z\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 14px center',
                    paddingRight: '36px',
                  }}
                >
                  <option value="">Select your industry</option>
                  {AUDIT_INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p style={errorStyle}>{errors.industry}</p>
                )}
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  style={inputStyle}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>

              {submitError && (
                <p style={{ ...errorStyle, textAlign: 'center' }}>
                  {submitError}
                </p>
              )}

              <button type="submit" className="bp" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                Run Free Audit
                <span style={{ fontSize: '14px' }}>{'\u2192'}</span>
              </button>
            </div>
          </form>

          <p
            style={{
              textAlign: 'center',
              fontSize: '11px',
              color: 'var(--t3)',
              marginTop: '20px',
            }}
          >
            No credit card required. Results delivered instantly.
          </p>
        </div>
      </div>
    );
  }

  // SCANNING STATE
  if (state === 'scanning') {
    return (
      <div
        style={{
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="amb">
          <div className="orb" />
          <div className="orb" />
        </div>
        <div className="grain" />
        <div
          className="audit-card"
          style={{ maxWidth: '520px', width: '100%', position: 'relative', zIndex: 2 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '28px',
                color: 'var(--text)',
                lineHeight: 1.08,
                letterSpacing: '-.025em',
                fontWeight: 400,
                marginBottom: '8px',
              }}
            >
              Scanning <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>{businessName}</em>
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--t2)' }}>
              Analyzing your web presence across multiple sources...
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {SCAN_STEPS.map((step, i) => {
              const isActive = i === scanStep;
              const isDone = i < scanStep;
              const className = `audit-step${isActive ? ' active' : ''}${isDone ? ' done' : ''}`;
              return (
                <div key={i} className={className}>
                  <div className="audit-dot" />
                  <span
                    style={{
                      fontSize: '16px',
                      lineHeight: 1,
                      opacity: isDone || isActive ? 1 : 0.3,
                      transition: '.4s',
                    }}
                  >
                    {step.icon}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      color:
                        isDone
                          ? 'var(--green)'
                          : isActive
                            ? 'var(--text)'
                            : 'var(--t3)',
                      fontWeight: isActive ? 500 : 300,
                      transition: '.4s',
                    }}
                  >
                    {isDone ? step.label.replace('...', ' \u2713') : step.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="audit-progress">
            <div
              className="audit-progress-fill"
              style={{ width: `${scanProgress}%` }}
            />
          </div>

          <p
            style={{
              textAlign: 'center',
              fontSize: '11px',
              color: 'var(--t3)',
            }}
          >
            {scanProgress}% complete
          </p>
        </div>
      </div>
    );
  }

  // RESULTS STATE
  if (!result) return null;

  return (
    <div
      style={{
        minHeight: '100dvh',
        padding: '100px 24px 80px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="amb">
        <div className="orb" />
        <div className="orb" />
      </div>
      <div className="grain" />
      <div className="c" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="tag" style={{ marginBottom: '16px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--green)',
                animation: 'p 2s infinite',
              }}
            />
            Audit Complete
          </div>
          <h1
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(28px, 3.6vw, 42px)',
              color: 'var(--text)',
              lineHeight: 1.08,
              letterSpacing: '-.025em',
              fontWeight: 400,
              marginBottom: '8px',
            }}
          >
            Results for{' '}
            <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>
              {businessName}
            </em>
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--t2)' }}>
            {cityState} &middot; {industry}
          </p>
        </div>

        {/* Overall Score */}
        <div className="audit-results-row" style={{ display: 'flex', alignItems: 'center', gap: '32px', padding: '40px', background: 'var(--bg1)', border: '1px solid var(--hr)', borderRadius: 'var(--rr)', marginBottom: '20px' }}>
          <ScoreRing score={result.overall} animated={animated} />
          <div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px', letterSpacing: 0, lineHeight: 1.3 }}>
              Overall Online Presence
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '400px' }}>
              {result.overall >= 70
                ? 'Your online presence is strong. Fine-tuning could unlock even more leads.'
                : result.overall >= 40
                  ? 'There are clear opportunities to improve your visibility and attract more customers.'
                  : 'Your online presence needs attention. Competitors are likely capturing your potential customers.'}
            </p>
          </div>
        </div>

        {/* Category Cards — stacked full-width for professional report feel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Google Ranking */}
          <div className="audit-card" style={{ padding: '36px 40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--text)', letterSpacing: 0, lineHeight: 1.3, marginBottom: '4px' }}>
                  Google Ranking
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--t3)' }}>
                  How you rank when customers search for &ldquo;{industry} in {cityState}&rdquo;
                </p>
              </div>
              <div style={{ textAlign: 'right' as const }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '42px', color: 'var(--text)', lineHeight: 1 }}>
                  {animated ? result.ranking.score : 0}<span style={{ fontSize: '18px', color: 'var(--t3)' }}>/100</span>
                </div>
              </div>
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.04)', overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: '4px', width: animated ? `${result.ranking.score}%` : '0%', transition: 'width 1.5s cubic-bezier(.16,1,.3,1)' }} className={scoreColor(result.ranking.score)} />
            </div>
            <div style={{ marginTop: '16px', display: 'flex', gap: '32px', fontSize: '14px' }}>
              <div>
                <span style={{ color: 'var(--t3)' }}>Position: </span>
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>
                  {result.ranking.position ? `#${result.ranking.position}` : 'Not found in top 20'}
                </span>
              </div>
              <div>
                <span style={{ color: 'var(--t3)' }}>Search phrase: </span>
                <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>{result.ranking.query}</span>
              </div>
            </div>
          </div>

          {/* Reputation Score */}
          <div className="audit-card" style={{ padding: '36px 40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--text)', letterSpacing: 0, lineHeight: 1.3, marginBottom: '4px' }}>
                  Reputation Score
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--t3)' }}>
                  Based on average star rating and total number of reviews
                </p>
              </div>
              <div style={{ textAlign: 'right' as const }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '42px', color: 'var(--text)', lineHeight: 1 }}>
                  {animated ? result.reputation.score : 0}<span style={{ fontSize: '18px', color: 'var(--t3)' }}>/100</span>
                </div>
              </div>
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.04)', overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: '4px', width: animated ? `${result.reputation.score}%` : '0%', transition: 'width 1.5s cubic-bezier(.16,1,.3,1)' }} className={scoreColor(result.reputation.score)} />
            </div>
            <div style={{ marginTop: '16px', display: 'flex', gap: '32px', fontSize: '14px' }}>
              {result.reputation.rating && (
                <div>
                  <span style={{ color: 'var(--t3)' }}>Average rating: </span>
                  <span style={{ color: '#F59E0B', fontWeight: 600 }}>{'★'.repeat(Math.round(result.reputation.rating))}</span>
                  <span style={{ color: 'var(--text)', fontWeight: 600, marginLeft: '6px' }}>{result.reputation.rating}</span>
                </div>
              )}
              {result.reputation.reviewCount !== null && (
                <div>
                  <span style={{ color: 'var(--t3)' }}>Total reviews: </span>
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>{result.reputation.reviewCount}</span>
                </div>
              )}
            </div>
          </div>

          {/* Website Performance */}
          <div className="audit-card" style={{ padding: '36px 40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--text)', letterSpacing: 0, lineHeight: 1.3, marginBottom: '4px' }}>
                  Website Performance
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--t3)' }}>
                  Speed, security, and mobile friendliness of your current website
                </p>
              </div>
              <div style={{ textAlign: 'right' as const }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '42px', color: 'var(--text)', lineHeight: 1 }}>
                  {animated ? result.performance.score : 0}<span style={{ fontSize: '18px', color: 'var(--t3)' }}>/100</span>
                </div>
              </div>
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.04)', overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: '4px', width: animated ? `${result.performance.score}%` : '0%', transition: 'width 1.5s cubic-bezier(.16,1,.3,1)' }} className={scoreColor(result.performance.score)} />
            </div>
            {result.performance.score > 0 ? (
              <div style={{ marginTop: '16px', display: 'flex', gap: '32px', fontSize: '14px' }}>
                {result.performance.loadTime && (
                  <div>
                    <span style={{ color: 'var(--t3)' }}>Load time: </span>
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{result.performance.loadTime}</span>
                  </div>
                )}
                {result.performance.mobileScore !== null && (
                  <div>
                    <span style={{ color: 'var(--t3)' }}>Mobile score: </span>
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{result.performance.mobileScore}/100</span>
                  </div>
                )}
                {result.performance.seoScore !== null && (
                  <div>
                    <span style={{ color: 'var(--t3)' }}>SEO score: </span>
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{result.performance.seoScore}/100</span>
                  </div>
                )}
              </div>
            ) : (
              <p style={{ fontSize: '14px', color: 'var(--t2)', marginTop: '16px' }}>
                No website URL provided. We can build you one.
              </p>
            )}
          </div>

          {/* Directory Presence */}
          <div className="audit-card" style={{ padding: '36px 40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--text)', letterSpacing: 0, lineHeight: 1.3, marginBottom: '4px' }}>
                  Directory Presence
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--t3)' }}>
                  Accuracy and completeness of your online business listings
                </p>
              </div>
              <div style={{ textAlign: 'right' as const }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '42px', color: 'var(--text)', lineHeight: 1 }}>
                  {animated ? result.directories.score : 0}<span style={{ fontSize: '18px', color: 'var(--t3)' }}>/100</span>
                </div>
              </div>
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.04)', overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: '4px', width: animated ? `${result.directories.score}%` : '0%', transition: 'width 1.5s cubic-bezier(.16,1,.3,1)' }} className={scoreColor(result.directories.score)} />
            </div>
            <p style={{ fontSize: '14px', color: 'var(--t2)', marginTop: '16px', marginBottom: '12px' }}>
              Found on {result.directories.found.length} of {result.directories.found.length + result.directories.missing.length} directories checked
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px' }}>
              {result.directories.found.map((dir) => (
                <div key={dir} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', padding: '4px 0', color: 'var(--green)' }}>
                  <span style={{ fontSize: '12px' }}>&#10003;</span> {dir}
                </div>
              ))}
              {result.directories.missing.map((dir) => (
                <div key={dir} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', padding: '4px 0', color: '#EF4444' }}>
                  <span style={{ fontSize: '12px' }}>&#10007;</span> {dir}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div style={{ marginTop: '56px' }}>
          <div className="cta-o">
            <div className="cta-i">
              <h2>
                Want to <em>improve</em> these scores?
              </h2>
              <p>
                We&apos;ll show you exactly how to fix every issue found and
                build a website that dominates local search.
              </p>
              <div className="cb">
                <a href="#book" className="bp">
                  Book Free Consultation
                  <span style={{ fontSize: '14px' }}>{'\u2192'}</span>
                </a>
                <button
                  type="button"
                  className="bs"
                  onClick={() => {
                    setState('form');
                    setResult(null);
                    setAnimated(false);
                  }}
                >
                  Run Another Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
