import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Black Diamond Cyber',
  description: 'Terms of Service for Black Diamond Cybersecurity Consulting LLC. Understand your rights, code ownership, payment terms, and service agreements.',
  alternates: {
    canonical: 'https://bd-cyber.com/terms',
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--t2)', lineHeight: 1.7 }}>
            Last updated: March 24, 2026
          </p>
        </div>

        {/* Ownership callout — BDC differentiator, prominent */}
        <div
          style={{
            background: 'rgba(52,211,153,.04)',
            border: '1px solid rgba(52,211,153,.15)',
            borderRadius: '12px',
            padding: '20px 24px',
            marginBottom: '48px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '24px', lineHeight: 1, flexShrink: 0 }}>💎</div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#34D399', letterSpacing: '0.5px', marginBottom: '6px' }}>
              You Own Your Code — Always
            </p>
            <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.7 }}>
              Upon receipt of full payment, you receive complete ownership of all website code, design assets, and content created for your project. No lock-in. No proprietary platforms. If you ever leave, you take everything with you.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent)', marginBottom: '48px' }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <TermsSection title="1. Agreement to Terms">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo; or &ldquo;you&rdquo;) and Black Diamond Cybersecurity Consulting LLC (&ldquo;Black Diamond Cyber,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a limited liability company based in Canyon Lake, TX.
            </p>
            <p>
              By purchasing services, submitting a contact form, or otherwise engaging with our services at{' '}
              <a href="https://bd-cyber.com" style={{ color: 'var(--cyan)' }}>bd-cyber.com</a>,
              you agree to be bound by these Terms. If you do not agree, do not use our services.
            </p>
            <p>
              Questions? Contact us at{' '}
              <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--cyan)' }}>blackdiamondcyber@gmail.com</a>.
            </p>
          </TermsSection>

          <TermsSection title="2. Services">
            <p>
              Black Diamond Cyber provides the following services to local and small businesses:
            </p>
            <ul>
              <li><strong style={{ color: 'var(--text)' }}>Website Design & Development:</strong> Custom and semi-custom websites built on Next.js, deployed to Vercel.</li>
              <li><strong style={{ color: 'var(--text)' }}>AI Chatbot Integration:</strong> AI-powered chatbots designed to handle customer inquiries and bookings.</li>
              <li><strong style={{ color: 'var(--text)' }}>Analytics & Reporting:</strong> Monthly performance dashboards and SEO reporting.</li>
              <li><strong style={{ color: 'var(--text)' }}>Growth Systems:</strong> Review automation, missed call text-back, appointment reminders, and lead nurture sequences.</li>
              <li><strong style={{ color: 'var(--text)' }}>Ongoing Hosting & Support:</strong> Monthly hosting, maintenance, and update services.</li>
            </ul>
            <p>
              Specific deliverables, timelines, and pricing for each engagement are defined in the applicable service tier or project scope communicated at time of purchase.
            </p>
          </TermsSection>

          <TermsSection title="3. Service Delivery">
            <TermsSubsection title="Timeline">
              <p>
                Estimated delivery timelines are provided for each service tier (e.g., 3-5 days for Starter, 5-7 days for Professional). These are good-faith estimates. Timelines may be affected by:
              </p>
              <ul>
                <li>Delays in receiving required client materials (logos, copy, images, credentials)</li>
                <li>Scope changes requested after project initiation</li>
                <li>Third-party service outages</li>
              </ul>
              <p>
                We will communicate proactively if a deadline cannot be met and work with you to establish a revised timeline.
              </p>
            </TermsSubsection>
            <TermsSubsection title="Client Responsibilities">
              <p>To ensure timely delivery, you agree to:</p>
              <ul>
                <li>Provide all required materials (brand assets, content, account access) within 5 business days of project kickoff</li>
                <li>Review and provide feedback on drafts within 3 business days</li>
                <li>Designate a single point of contact for project communications</li>
              </ul>
            </TermsSubsection>
            <TermsSubsection title="Revisions">
              <p>
                Each project includes two rounds of revisions within the original project scope. Additional revisions or scope changes will be quoted and billed separately.
              </p>
            </TermsSubsection>
          </TermsSection>

          <TermsSection title="4. Payment Terms">
            <TermsSubsection title="Setup Fees">
              <p>
                One-time setup fees are charged at the time of purchase. Payments are processed securely through Stripe. All prices are listed in USD.
              </p>
              <p>
                Setup fees are non-refundable once project work has commenced (i.e., once we have begun design, development, or content creation for your project).
              </p>
            </TermsSubsection>
            <TermsSubsection title="Monthly Recurring Fees">
              <p>
                Monthly hosting, maintenance, and support fees are billed on the same date each month following project delivery. These services are provided on a month-to-month basis with no long-term contract.
              </p>
              <p>
                You may cancel monthly services at any time with 30 days&rsquo; written notice to{' '}
                <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--cyan)' }}>blackdiamondcyber@gmail.com</a>.
                No cancellation penalties apply.
              </p>
            </TermsSubsection>
            <TermsSubsection title="Late Payments">
              <p>
                If a monthly payment is 15 or more days past due, we reserve the right to suspend hosting and support services until the account is brought current. We will provide reasonable notice before any suspension.
              </p>
            </TermsSubsection>
          </TermsSection>

          <TermsSection title="5. Code & Intellectual Property Ownership">
            <div
              style={{
                background: 'rgba(40,135,204,.06)',
                border: '1px solid rgba(93,196,232,.1)',
                borderRadius: '10px',
                padding: '16px 20px',
              }}
            >
              <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '14px' }}>
                Upon receipt of full payment of all setup fees, Client receives full ownership of all custom code, design files, and content created specifically for the Client&rsquo;s project.
              </p>
            </div>
            <p>
              This includes:
            </p>
            <ul>
              <li>All website source code (HTML, CSS, JavaScript, TypeScript, React components)</li>
              <li>Custom design assets and graphics created for the project</li>
              <li>Written copy and content authored specifically for the Client</li>
              <li>Database schema and configuration specific to the Client&rsquo;s project</li>
            </ul>
            <TermsSubsection title="What We Retain">
              <p>
                Black Diamond Cyber retains ownership of:
              </p>
              <ul>
                <li>Proprietary internal tools, frameworks, and boilerplate code not specific to the Client&rsquo;s project</li>
                <li>Pre-existing design templates and component libraries that may be licensed for use in your project</li>
                <li>The Black Diamond Cyber brand, name, logo, and trade dress</li>
              </ul>
            </TermsSubsection>
            <TermsSubsection title="Portfolio Rights">
              <p>
                Unless you request otherwise in writing, we reserve the right to display your project in our portfolio as an example of our work. We will not share confidential business information.
              </p>
            </TermsSubsection>
            <TermsSubsection title="Third-Party Assets">
              <p>
                Any third-party assets (stock photos, fonts, icons, plugins) used in your project may have their own licensing terms. We will disclose any assets with usage restrictions and ensure you have appropriate licenses.
              </p>
            </TermsSubsection>
          </TermsSection>

          <TermsSection title="6. No Lock-In Guarantee">
            <p>
              We do not use proprietary hosting platforms or website builders that would prevent you from migrating your website. Your website is built on industry-standard open-source technology (Next.js, React) and can be self-hosted or migrated to any hosting provider.
            </p>
            <p>
              If you cancel our monthly services, we will:
            </p>
            <ul>
              <li>Provide all source code and project files within 5 business days of cancellation</li>
              <li>Assist with migration to your own hosting setup (one-time, 2-hour limit, at no charge)</li>
              <li>Not interfere with your domain or DNS settings</li>
            </ul>
          </TermsSection>

          <TermsSection title="7. Confidentiality">
            <p>
              Both parties may share confidential information in the course of the engagement. We agree to:
            </p>
            <ul>
              <li>Keep all non-public business information, credentials, and project details confidential</li>
              <li>Use your information only to deliver the agreed services</li>
              <li>Not disclose confidential information to third parties without your written consent</li>
            </ul>
          </TermsSection>

          <TermsSection title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Black Diamond Cyber&rsquo;s total liability to you for any claims arising from or related to these Terms or our services shall not exceed the total amount paid by you to Black Diamond Cyber in the 12 months preceding the claim.
            </p>
            <p>
              We are not liable for:
            </p>
            <ul>
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Search engine ranking changes or algorithm updates outside our control</li>
              <li>Downtime or outages attributable to third-party providers (Vercel, Supabase, Stripe, etc.)</li>
              <li>Data loss caused by third-party services or Client-initiated actions</li>
            </ul>
          </TermsSection>

          <TermsSection title="9. Warranties & Disclaimers">
            <p>
              We warrant that services will be performed in a professional and workmanlike manner. We do not guarantee specific outcomes, including but not limited to: search engine rankings, conversion rates, revenue increases, or business results.
            </p>
            <p>
              Except as expressly stated in these Terms, all services are provided &ldquo;AS IS&rdquo; without warranties of any kind, express or implied.
            </p>
          </TermsSection>

          <TermsSection title="10. Termination">
            <p>
              Either party may terminate ongoing services with 30 days&rsquo; written notice. Upon termination:
            </p>
            <ul>
              <li>All outstanding invoices become immediately due and payable</li>
              <li>We will deliver all owned project files within 5 business days</li>
              <li>Monthly services will be discontinued at the end of the notice period</li>
            </ul>
            <p>
              We reserve the right to terminate services immediately if the Client engages in unlawful activity, abusive behavior toward our team, or material breach of these Terms.
            </p>
          </TermsSection>

          <TermsSection title="11. Governing Law">
            <p>
              These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Comal County, Texas, or through binding arbitration if mutually agreed.
            </p>
          </TermsSection>

          <TermsSection title="12. Changes to Terms">
            <p>
              We may update these Terms from time to time. We will notify active clients of material changes via email. Continued use of our services after updates constitutes acceptance of the revised Terms. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
            </p>
          </TermsSection>

          <TermsSection title="13. Contact">
            <div
              style={{
                background: 'var(--bg1)',
                border: '1px solid rgba(255,255,255,.06)',
                borderRadius: '12px',
                padding: '20px 24px',
              }}
            >
              <p style={{ marginBottom: '4px' }}><strong style={{ color: 'var(--text)' }}>Black Diamond Cybersecurity Consulting LLC</strong></p>
              <p style={{ marginBottom: '4px' }}>Canyon Lake, TX</p>
              <p>
                Email:{' '}
                <a href="mailto:blackdiamondcyber@gmail.com" style={{ color: 'var(--cyan)' }}>blackdiamondcyber@gmail.com</a>
              </p>
            </div>
          </TermsSection>

        </div>

        {/* Footer nav */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent)', margin: '48px 0 32px' }} />
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--t2)', textDecoration: 'none' }}>
            ← Back to Home
          </a>
          <a href="/privacy" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--cyan)', textDecoration: 'none' }}>
            Privacy Policy →
          </a>
        </div>
      </div>
    </main>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
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

function TermsSubsection({ title, children }: { title: string; children: React.ReactNode }) {
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
