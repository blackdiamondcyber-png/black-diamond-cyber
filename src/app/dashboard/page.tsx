import { createServerSupabase } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import type { Client, SubscriptionTier } from '@/types';
import { TIERS } from '@/types';

const STATUS_STEPS = [
  { key: 'in_progress', label: 'In Progress', icon: '\u26A1' },
  { key: 'review', label: 'Review', icon: '\uD83D\uDC41' },
  { key: 'live', label: 'Live', icon: '\uD83D\uDE80' },
] as const;

function getStepIndex(status: string | null): number {
  const idx = STATUS_STEPS.findIndex((s) => s.key === status);
  return idx === -1 ? 0 : idx;
}

export default async function DashboardPage() {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: client } = await supabase
    .from('clients')
    .select('*')
    .eq('auth_user_id', user.id)
    .single<Client & { auth_user_id: string; project_status: string | null; project_status_updated_at: string | null }>();

  if (!client) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '80px' }}>
        <h1
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '28px',
            color: 'var(--text)',
            marginBottom: '12px',
            fontWeight: 400,
          }}
        >
          Welcome
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>
          Your account is being set up. If you recently signed up, your dashboard will appear
          shortly. Contact us at{' '}
          <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--cyan)' }}>
            blackdiamondcyber@gmail.com
          </a>{' '}
          if you need help.
        </p>
      </div>
    );
  }

  const currentStep = getStepIndex(client.project_status);
  const tierConfig = client.subscription_tier ? TIERS[client.subscription_tier as SubscriptionTier] : null;

  const cardStyle: React.CSSProperties = {
    background: 'var(--bg1)',
    border: '1px solid var(--hr)',
    borderRadius: 'var(--rr)',
    padding: '32px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '1.8px',
    textTransform: 'uppercase',
    color: 'var(--t3)',
    marginBottom: '8px',
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <span className="tag" style={{ marginBottom: '12px', display: 'inline-flex' }}>
          Client Portal
        </span>
        <h1
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(28px, 3.6vw, 42px)',
            color: 'var(--text)',
            fontWeight: 400,
            marginTop: '12px',
          }}
        >
          Welcome, <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>{client.business_name}</em>
        </h1>
      </div>

      {/* Status Tracker */}
      <div style={{ ...cardStyle, marginBottom: '24px' }}>
        <p style={labelStyle}>Project Status</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            marginTop: '24px',
          }}
        >
          {STATUS_STEPS.map((step, i) => {
            const isCompleted = i < currentStep;
            const isCurrent = i === currentStep;
            const isPending = i > currentStep;

            let circleBackground = 'var(--bg2)';
            let circleBorder = '2px solid var(--t3)';
            let circleGlow = 'none';
            let labelColor = 'var(--t3)';

            if (isCompleted) {
              circleBackground = 'rgba(52,211,153,.12)';
              circleBorder = '2px solid var(--green)';
              labelColor = 'var(--green)';
            } else if (isCurrent) {
              circleBackground = 'rgba(93,196,232,.08)';
              circleBorder = '2px solid var(--cyan)';
              circleGlow = '0 0 20px rgba(93,196,232,.25), 0 0 40px rgba(93,196,232,.1)';
              labelColor = 'var(--cyan)';
            }

            return (
              <div key={step.key} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: circleBackground,
                      border: circleBorder,
                      boxShadow: circleGlow,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      transition: '.4s ease',
                    }}
                  >
                    {isCompleted ? (
                      <span style={{ color: 'var(--green)', fontSize: '18px' }}>&#10003;</span>
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '.5px',
                      color: labelColor,
                      marginTop: '10px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connector line */}
                {i < STATUS_STEPS.length - 1 && (
                  <div
                    style={{
                      width: '80px',
                      height: '2px',
                      background: isCompleted ? 'var(--green)' : 'var(--t3)',
                      marginBottom: '28px',
                      opacity: isPending ? 0.3 : 1,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Subscription Card */}
        <div style={cardStyle}>
          <p style={labelStyle}>Your Subscription</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '26px',
                color: 'var(--text)',
                fontWeight: 400,
              }}
            >
              {tierConfig?.name || client.subscription_tier || 'N/A'}
            </h2>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: '40px',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                background:
                  client.subscription_status === 'active'
                    ? 'rgba(52,211,153,.1)'
                    : 'rgba(239,68,68,.1)',
                color:
                  client.subscription_status === 'active' ? 'var(--green)' : '#EF4444',
                border: `1px solid ${
                  client.subscription_status === 'active'
                    ? 'rgba(52,211,153,.2)'
                    : 'rgba(239,68,68,.2)'
                }`,
              }}
            >
              {client.subscription_status}
            </span>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', gap: '32px' }}>
            <div>
              <p style={{ fontSize: '10px', color: 'var(--t3)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
                Monthly
              </p>
              <p style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text)', marginTop: '2px' }}>
                ${client.monthly_price ?? 0}
                <span style={{ fontSize: '12px', color: 'var(--t2)', fontWeight: 300 }}>/mo</span>
              </p>
            </div>
            <div>
              <p style={{ fontSize: '10px', color: 'var(--t3)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
                Setup Fee
              </p>
              <p style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text)', marginTop: '2px' }}>
                ${client.setup_fee ?? 0}
              </p>
            </div>
          </div>
        </div>

        {/* Website Card */}
        <div style={cardStyle}>
          <p style={labelStyle}>Your Website</p>
          {client.site_url ? (
            <>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--cyan)',
                  marginTop: '8px',
                  wordBreak: 'break-all',
                }}
              >
                {client.site_url}
              </p>
              <div style={{ marginTop: '20px' }}>
                <a
                  href={client.site_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bp"
                  style={{ fontSize: '10px', padding: '12px 28px' }}
                >
                  Visit Site &rarr;
                </a>
              </div>
            </>
          ) : (
            <div
              style={{
                marginTop: '12px',
                padding: '20px',
                background: 'rgba(93,196,232,.04)',
                border: '1px solid rgba(93,196,232,.08)',
                borderRadius: 'var(--r)',
              }}
            >
              <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.7 }}>
                We&apos;re building your website. You&apos;ll be notified when it&apos;s ready for
                review.
              </p>
            </div>
          )}
        </div>

        {/* Need Help Card */}
        <div style={cardStyle}>
          <p style={labelStyle}>Need Help?</p>
          <h3
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: '20px',
              color: 'var(--text)',
              fontWeight: 400,
              marginTop: '4px',
            }}
          >
            Questions about your project?
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--t2)', marginTop: '12px', lineHeight: 1.7 }}>
            We&apos;re here to help. Reach out anytime and we&apos;ll get back to you within 24
            hours.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a
              href="mailto:blackdiamondcyber@gmail.com"
              style={{
                fontSize: '13px',
                color: 'var(--cyan)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              &#9993; blackdiamondcyber@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
