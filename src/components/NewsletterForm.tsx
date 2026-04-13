'use client';

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: 'flex',
        gap: '8px',
        flexShrink: 0,
      }}
    >
      <input
        type="email"
        name="newsletter-email"
        placeholder="you@business.com"
        aria-label="Email for newsletter"
        style={{
          padding: '10px 16px',
          background: 'rgba(255,255,255,.03)',
          border: '1px solid var(--hr)',
          borderRadius: '40px',
          color: 'var(--text)',
          fontSize: '13px',
          fontFamily: 'inherit',
          outline: 'none',
          width: '240px',
          transition: 'border-color .3s',
        }}
      />
      <button
        type="submit"
        className="nc"
        style={{ flexShrink: 0 }}
      >
        Subscribe
      </button>
    </form>
  );
}
