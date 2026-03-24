import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Demos | Black Diamond Cyber Admin',
  robots: { index: false, follow: false },
};

const workflows = [
  {
    name: 'Missed Call Text-Back',
    tier: 'Growth',
    description: 'Automatically sends an SMS when a call is missed, keeping the lead warm until you can follow up.',
    steps: [
      { label: 'Missed Call Detected', detail: 'Twilio webhook fires when call goes unanswered', icon: '📱' },
      { label: 'Wait 30 Seconds', detail: 'Brief delay to avoid texting if they call right back', icon: '⏱' },
      { label: 'Send SMS', detail: '"Sorry we missed your call! Reply here or book online at [link]"', icon: '💬' },
      { label: 'Log to CRM', detail: 'Creates lead record in Supabase with phone, timestamp, status', icon: '📊' },
      { label: 'Notify Owner', detail: 'Slack/email alert: "Missed call from (555) 123-4567 — auto-text sent"', icon: '🔔' },
    ],
    stats: [
      { value: '67%', label: 'of missed calls convert with text-back' },
      { value: '< 1 min', label: 'average response time' },
      { value: '$800-2K', label: 'value per recovered lead' },
    ],
  },
  {
    name: 'Review Request Automation',
    tier: 'Growth',
    description: 'Sends personalized review requests after every appointment to build your Google rating on autopilot.',
    steps: [
      { label: 'Appointment Completed', detail: 'Triggered by PMS webhook or manual status update', icon: '✅' },
      { label: 'Wait 2 Hours', detail: 'Optimal timing — patient has left but experience is fresh', icon: '⏱' },
      { label: 'Send SMS + Email', detail: '"Thanks for visiting! Would you leave us a quick Google review?" + direct link', icon: '📩' },
      { label: 'Follow-Up (Day 3)', detail: 'If no review yet, gentle reminder: "Your feedback means the world to us"', icon: '🔄' },
      { label: 'Track Results', detail: 'Dashboard shows: sent, opened, clicked, reviewed — per patient', icon: '📈' },
    ],
    stats: [
      { value: '3-5x', label: 'more reviews per month' },
      { value: '4.2 → 4.8', label: 'average rating improvement' },
      { value: '22%', label: 'typical response rate' },
    ],
  },
  {
    name: 'AI Lead Nurture Sequence',
    tier: 'Dominate',
    description: 'Multi-touch AI-powered follow-up that converts website visitors into booked appointments over 14 days.',
    steps: [
      { label: 'Lead Captured', detail: 'Form submission, chat widget, or missed call creates lead', icon: '🎯' },
      { label: 'Instant Reply', detail: 'AI-generated personalized email within 60 seconds', icon: '⚡' },
      { label: 'Day 1: SMS Follow-Up', detail: '"Hi [Name], this is [Owner] from [Business]. How can we help?"', icon: '💬' },
      { label: 'Day 3: Value Email', detail: 'Educational content specific to their service interest', icon: '📧' },
      { label: 'Day 7: Offer', detail: 'Time-limited incentive to book: "$50 off first visit this week"', icon: '🎁' },
      { label: 'Day 14: Last Touch', detail: 'Final follow-up with social proof: reviews + before/after photos', icon: '📸' },
    ],
    stats: [
      { value: '35%', label: 'lead-to-appointment rate' },
      { value: '14 days', label: 'automated nurture sequence' },
      { value: '6 touches', label: 'multi-channel follow-ups' },
    ],
  },
];

export default function DemosPage() {
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-outfit, Outfit, system-ui, sans-serif)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: '60px' }}>
          <a href="/admin/clients" style={{ fontSize: '12px', color: 'var(--t2)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            &larr; Back to Admin
          </a>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, lineHeight: 1.08, marginBottom: '12px' }}>
            Automation <em style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Demos</em>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '600px' }}>
            Visual walkthrough of the automation workflows included in Growth and Dominate tiers. Use these during sales calls to show prospects exactly what they get.
          </p>
        </div>

        {workflows.map((wf) => (
          <div key={wf.name} style={{
            marginBottom: '60px',
            padding: '32px',
            background: 'var(--bg1)',
            border: '1px solid var(--hr)',
            borderRadius: 'var(--rr)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '28px', fontWeight: 400 }}>
                {wf.name}
              </h2>
              <span style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '40px',
                border: '1px solid',
                borderColor: wf.tier === 'Growth' ? 'var(--green)' : 'var(--cyan)',
                color: wf.tier === 'Growth' ? 'var(--green)' : 'var(--cyan)',
                background: wf.tier === 'Growth' ? 'rgba(52,211,153,.06)' : 'rgba(93,196,232,.06)',
              }}>
                {wf.tier} Tier
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '600px' }}>
              {wf.description}
            </p>

            {/* Workflow Steps */}
            <div style={{ position: 'relative', marginBottom: '28px' }}>
              {wf.steps.map((step, i) => (
                <div key={step.label} style={{ display: 'flex', gap: '16px', marginBottom: i < wf.steps.length - 1 ? '0' : '0' }}>
                  {/* Timeline */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px', flexShrink: 0 }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--bg2)',
                      border: '1px solid var(--hr)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      flexShrink: 0,
                    }}>
                      {step.icon}
                    </div>
                    {i < wf.steps.length - 1 && (
                      <div style={{ width: '1px', flex: 1, minHeight: '20px', background: 'var(--hr)' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ paddingBottom: i < wf.steps.length - 1 ? '20px' : '0', flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>
                      {step.label}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.6 }}>
                      {step.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--hr)', flexWrap: 'wrap' }}>
              {wf.stats.map((s) => (
                <div key={s.label} style={{ flex: 1, minWidth: '140px' }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', color: 'var(--cyan)', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--t2)', marginTop: '4px', lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', padding: '20px 0 40px' }}>
          <p style={{ fontSize: '12px', color: 'var(--t3)', marginBottom: '16px' }}>
            These workflows are powered by n8n + Twilio + Supabase. Live demos available on request.
          </p>
          <a href="#book" className="bp" style={{ display: 'inline-flex' }}>
            Book Demo Call
          </a>
        </div>
      </div>
    </div>
  );
}
