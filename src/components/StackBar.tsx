'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Tech-stack trust bar. LeftClick shows client logos (Anthropic, Notion, Wix).
 * We can't claim those as clients without fabricating, so we show the
 * infrastructure we build on — the same stack powering those companies.
 * The claim "trusted by" is about the TOOLS, not BDC's clients. 100% honest.
 */
const PARTNERS: { name: string; node: React.ReactNode }[] = [
  {
    name: 'Next.js',
    node: (
      <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em' }}>
        <span style={{ fontStyle: 'italic', fontWeight: 900 }}>N</span>ext.js
      </span>
    ),
  },
  {
    name: 'Vercel',
    node: (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>
        <svg width="15" height="13" viewBox="0 0 76 65" fill="currentColor" aria-hidden="true"><path d="M37.59.25l36.95 64H.64l36.95-64z"/></svg>
        Vercel
      </span>
    ),
  },
  {
    name: 'Supabase',
    node: (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 3v7h7c1.1 0 1.7 1.3 1 2.2l-10 11c-.9.9-2.4.2-2.2-1l1.2-7H3c-1.1 0-1.7-1.3-1-2.2l10-11c.9-.9 2.4-.2 2.2 1l-1.2 7z"/></svg>
        Supabase
      </span>
    ),
  },
  {
    name: 'Stripe',
    node: (
      <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em', fontFamily: "'Outfit', system-ui, sans-serif" }}>stripe</span>
    ),
  },
  {
    name: 'Anthropic',
    node: (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 3h4l5 18h-4l-1-4H5l-1 4H0L6 3zm0 8h3L7.5 5.5 6 11z"/></svg>
        Anthropic
      </span>
    ),
  },
  {
    name: 'TypeScript',
    node: (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 18,
            height: 18,
            borderRadius: 3,
            background: 'currentColor',
            color: '#06080C',
            fontSize: 10,
            fontWeight: 900,
            letterSpacing: '-0.02em',
          }}
        >
          TS
        </span>
        TypeScript
      </span>
    ),
  },
];

export function StackBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section
      ref={ref}
      aria-label="Infrastructure stack"
      style={{
        padding: '56px 24px',
        borderTop: '1px solid var(--hr)',
        borderBottom: '1px solid var(--hr)',
        background: 'rgba(10,13,18,0.35)',
      }}
    >
      <div className="c">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 28 }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '2.2px',
              textTransform: 'uppercase',
              color: 'var(--t3)',
            }}
          >
            Enterprise-grade stack
          </span>
          <p
            style={{
              marginTop: 12,
              marginInline: 'auto',
              fontSize: 15,
              color: 'var(--t2)',
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            Built on the same infrastructure that powers{' '}
            <strong style={{ color: 'var(--text)' }}>OpenAI</strong>,{' '}
            <strong style={{ color: 'var(--text)' }}>Anthropic</strong>,{' '}
            <strong style={{ color: 'var(--text)' }}>Cal.com</strong>,{' '}
            <strong style={{ color: 'var(--text)' }}>Linear</strong>, and{' '}
            <strong style={{ color: 'var(--text)' }}>Vercel itself</strong>.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 24,
            alignItems: 'center',
            maxWidth: 1000,
            marginInline: 'auto',
          }}
        >
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 1, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--t2)',
                opacity: 0.85,
                transition: 'opacity .3s ease, color .3s ease',
                cursor: 'default',
              }}
              whileHover={{ opacity: 1, color: 'var(--text)' as string }}
            >
              {p.node}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
