import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Black Diamond Cyber',
  description: 'Privacy Policy for Black Diamond Cybersecurity Consulting LLC. Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://bd-cyber.com/privacy',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="c" style={{ maxWidth: '760px' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'var(--t2)',
              textDecoration: 'none',
              marginBottom: '32px',
            }}
          >
            ← Back to Home
          </a>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 14px',
              borderRadius: '40px',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '2.2px',
              textTransform: 'uppercase',
              border: '1px solid rgba(40,135,204,.12)',
              color: 'var(--cyan)',
              background: 'rgba(40,135,204,.08)',
              marginBottom: '20px',
            }}
          >
            Legal
          </div>
          <h1
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '12px',
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.7 }}>
            Last updated: March 24, 2026
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent)', marginBottom: '48px' }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <PolicySection title="1. Introduction">
            <p>
              Black Diamond Cybersecurity Consulting LLC (&ldquo;Black Diamond Cyber,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{' '}
              <a href="https://bd-cyber.com" style={{ color: 'var(--cyan)' }}>bd-cyber.com</a>{' '}
              and provides web design, AI chatbot integration, and analytics services to local businesses.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By using our website, you consent to the practices described in this policy.
            </p>
            <p>
              If you have questions or concerns, contact us at:{' '}
              <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--cyan)' }}>blackdiamondcyber@gmail.com</a>
            </p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <PolicySubsection title="Information You Provide Directly">
              <ul>
                <li><strong style={{ color: 'var(--text)' }}>Contact form submissions:</strong> Name, email address, phone number, business name, industry, and message content.</li>
                <li><strong style={{ color: 'var(--text)' }}>Free site audit requests:</strong> Business website URL, business name, and contact details.</li>
                <li><strong style={{ color: 'var(--text)' }}>Service purchases:</strong> Payment and billing information processed securely through Stripe. We do not store raw payment card data on our servers.</li>
                <li><strong style={{ color: 'var(--text)' }}>Strategy call bookings:</strong> Name, email, and scheduling preferences.</li>
              </ul>
            </PolicySubsection>
            <PolicySubsection title="Information Collected Automatically">
              <ul>
                <li><strong style={{ color: 'var(--text)' }}>Usage data:</strong> Pages visited, time spent on pages, referring URLs, and browser type via Vercel Analytics.</li>
                <li><strong style={{ color: 'var(--text)' }}>Device information:</strong> IP address, operating system, and screen resolution.</li>
                <li><strong style={{ color: 'var(--text)' }}>Cookies:</strong> Session cookies necessary for site functionality. See Section 6 for details.</li>
              </ul>
            </PolicySubsection>
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to inquiries, contact form submissions, and service requests</li>
              <li>Process payments and deliver purchased services</li>
              <li>Send project status updates, invoices, and service-related communications</li>
              <li>Perform free website audits you have requested</li>
              <li>Improve our website and services based on usage patterns</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and protect the security of our website</li>
            </ul>
            <p>
              We will never sell your personal information to third parties. We do not use your data for behavioral advertising or profile building.
            </p>
          </PolicySection>

          <PolicySection title="4. Third-Party Services">
            <p>We use the following third-party services to operate our business. Each has its own privacy practices:</p>
            <ul>
              <li>
                <strong style={{ color: 'var(--text)' }}>Vercel</strong> — Our hosting provider. Handles site deployment, edge network delivery, and web analytics. Privacy Policy:{' '}
                <a href="https://vercel.com/legal/privacy-policy" style={{ color: 'var(--cyan)' }} target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Supabase</strong> — Our database provider. Stores contact submissions and service records. Privacy Policy:{' '}
                <a href="https://supabase.com/privacy" style={{ color: 'var(--cyan)' }} target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Stripe</strong> — Payment processing for website and service purchases. We never see or store your full card number. Privacy Policy:{' '}
                <a href="https://stripe.com/privacy" style={{ color: 'var(--cyan)' }} target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>
              </li>
              <li>
                <strong style={{ color: 'var(--text)' }}>Google (Gmail SMTP)</strong> — Transactional email delivery for contact confirmations and audit reports. Privacy Policy:{' '}
                <a href="https://policies.google.com/privacy" style={{ color: 'var(--cyan)' }} target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <p>
              We retain contact form submissions and service records for up to 3 years for business and tax purposes. Payment records are retained as required by applicable law. You may request deletion of your data at any time by contacting us (see Section 9).
            </p>
          </PolicySection>

          <PolicySection title="6. Cookies">
            <p>
              Our website uses cookies and similar tracking technologies. Cookies we use include:
            </p>
            <ul>
              <li><strong style={{ color: 'var(--text)' }}>Strictly necessary cookies:</strong> Required for the website to function. These cannot be disabled. Examples include session state and CSRF protection tokens.</li>
              <li><strong style={{ color: 'var(--text)' }}>Analytics cookies:</strong> Vercel Analytics collects anonymized usage data to help us understand how visitors use our site. This data does not identify individuals.</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences. Disabling strictly necessary cookies may affect site functionality.
            </p>
          </PolicySection>

          <PolicySection title="7. California Privacy Rights (CCPA)">
            <p>
              If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul>
              <li><strong style={{ color: 'var(--text)' }}>Right to Know:</strong> You may request a list of the personal information we have collected about you, the categories of sources, and the purposes for collection.</li>
              <li><strong style={{ color: 'var(--text)' }}>Right to Delete:</strong> You may request deletion of personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong style={{ color: 'var(--text)' }}>Right to Opt-Out of Sale:</strong> We do not sell personal information. This right is not applicable.</li>
              <li><strong style={{ color: 'var(--text)' }}>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
            </ul>
            <p>
              To exercise your rights, contact us at{' '}
              <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--cyan)' }}>blackdiamondcyber@gmail.com</a>{' '}
              with the subject line &ldquo;CCPA Privacy Request.&rdquo; We will respond within 45 days.
            </p>
          </PolicySection>

          <PolicySection title="8. Data Security">
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul>
              <li>HTTPS encryption for all data in transit</li>
              <li>Row-level security policies on our database</li>
              <li>Third-party payment processing through PCI-compliant Stripe</li>
              <li>Access controls limiting who can access stored data</li>
            </ul>
            <p>
              No method of transmission over the internet is 100% secure. We cannot guarantee absolute security, but we take commercially reasonable precautions to protect your information.
            </p>
          </PolicySection>

          <PolicySection title="9. Your Rights & Contact">
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at:
            </p>
            <div
              style={{
                background: 'var(--bg1)',
                border: '1px solid rgba(255,255,255,.06)',
                borderRadius: '12px',
                padding: '20px 24px',
                marginTop: '12px',
              }}
            >
              <p style={{ marginBottom: '4px' }}><strong style={{ color: 'var(--text)' }}>Black Diamond Cybersecurity Consulting LLC</strong></p>
              <p style={{ marginBottom: '4px' }}>Canyon Lake, TX</p>
              <p>
                Email:{' '}
                <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--cyan)' }}>blackdiamondcyber@gmail.com</a>
              </p>
            </div>
          </PolicySection>

          <PolicySection title="10. Children's Privacy">
            <p>
              Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </PolicySection>

          <PolicySection title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </PolicySection>

        </div>

        {/* Footer nav */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent)', margin: '48px 0 32px' }} />
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--t2)', textDecoration: 'none' }}>
            ← Back to Home
          </a>
          <a href="/terms" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--cyan)', textDecoration: 'none' }}>
            Terms of Service →
          </a>
        </div>
      </div>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: '24px',
          fontWeight: 400,
          color: 'var(--text)',
          marginBottom: '16px',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          color: 'var(--t2)',
          lineHeight: 1.85,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function PolicySubsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.5px',
          color: 'var(--text)',
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>
    </div>
  );
}
