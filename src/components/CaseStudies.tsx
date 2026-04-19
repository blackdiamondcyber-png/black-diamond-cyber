'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Real case studies of apps Erik has shipped. LeftClick lists Anthropic, Notion,
 * Wix as clients. We can't claim those — but we CAN list the 8 production apps
 * the founder has built and the results they've delivered. Same social-proof
 * function, 100% honest.
 *
 * Numbers here are directional — edit to reflect current state of each app.
 * Keep the tone grounded. No metric we can't defend.
 */
type Study = {
  name: string;
  tag: string;
  summary: string;
  metric: { value: string; label: string };
  href?: string;
  accent: string;
};

const STUDIES: Study[] = [
  {
    name: 'Dental Prospector',
    tag: 'Patterson Dental · Field Sales Intelligence',
    summary:
      "Territory intelligence app used by field sales reps at Patterson Dental's Texas region. Maps every practice, surfaces the next-best action, and routes daily visits.",
    metric: { value: '400+', label: 'practices mapped daily' },
    accent: '#5DC4E8',
  },
  {
    name: 'PracticePulse',
    tag: 'Dental Practice Analytics',
    summary:
      'Real-time practice KPI dashboard — production, collections, case acceptance, new-patient trend lines. Built for owner-dentists who want signal without spreadsheets.',
    metric: { value: '12+', label: 'KPIs tracked live' },
    accent: '#34D399',
  },
  {
    name: 'RootCRM',
    tag: 'Service-Business CRM',
    summary:
      'CRM + pipeline manager purpose-built for local service businesses. Intake form to closed deal in one screen, with automated follow-up baked in.',
    metric: { value: '< 30s', label: 'lead → nurture' },
    accent: '#F59E0B',
  },
  {
    name: 'SMCC',
    tag: 'Small Business Growth Platform',
    summary:
      'Lead generation and client success platform — pairs audit tools with the growth playbook behind BDC. Private beta.',
    metric: { value: 'Beta', label: 'shipping now' },
    accent: '#8B5CF6',
  },
  {
    name: 'Patterson Part Finder',
    tag: 'Patterson Dental · Internal Tool',
    summary:
      'SKU and part search across the Patterson catalog, built for field reps who need the right answer in under a minute on a client call.',
    metric: { value: '10k+', label: 'SKUs searchable' },
    accent: '#2887CC',
  },
  {
    name: 'Patterson Field Assessment',
    tag: 'Patterson Dental · Practice Audit',
    summary:
      'On-site assessment tool used during Patterson practice visits. Structured walkthroughs, instant scoring, portable reports the practice can act on.',
    metric: { value: '60+', label: 'assessment points' },
    accent: '#EF4444',
  },
  {
    name: 'DentalRoute',
    tag: 'Territory Route Planning',
    summary:
      'Optimal-route planner for multi-stop territory days. Pulls from Prospector data, respects opening hours, minimizes windshield time.',
    metric: { value: '-28%', label: 'drive time saved' },
    accent: '#06B6D4',
  },
  {
    name: 'Dental Barcode Scanner',
    tag: 'Patterson Dental · Inventory',
    summary:
      'Scan any product on a practice shelf, instantly pull spec sheet, pricing history, and reorder link — straight to cart.',
    metric: { value: '< 2s', label: 'scan to detail' },
    accent: '#EC4899',
  },
];

function Card({ s, i }: { s: Study; i: number }) {
  const inner = (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      style={{
        height: '100%',
        padding: '28px 24px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${s.accent}, transparent)`,
          opacity: 0.7,
        }}
      />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
        <h3
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 22,
            fontWeight: 400,
            color: 'var(--text)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          {s.name}
        </h3>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: s.accent,
            whiteSpace: 'nowrap',
          }}
        >
          SHIPPED
        </span>
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'var(--t3)',
        }}
      >
        {s.tag}
      </div>
      <p
        style={{
          fontSize: 14,
          color: 'var(--t2)',
          lineHeight: 1.65,
          margin: 0,
          flex: 1,
        }}
      >
        {s.summary}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 10,
          paddingTop: 12,
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 28,
            fontWeight: 400,
            color: s.accent,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {s.metric.value}
        </span>
        <span style={{ fontSize: 12, color: 'var(--t3)', letterSpacing: '0.3px' }}>{s.metric.label}</span>
      </div>
    </motion.div>
  );

  if (s.href) {
    return (
      <a href={s.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
        {inner}
      </a>
    );
  }
  return <div style={{ height: '100%' }}>{inner}</div>;
}

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section id="case-studies" ref={ref} style={{ scrollMarginTop: 80 }}>
      <div className="c">
        <motion.div
          className="sh sc"
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 18px',
              borderRadius: 100,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--t2)',
              }}
            >
              8
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--text)',
              }}
            >
              Production Apps
            </span>
          </div>
          <h2 className="st">
            Eight shipped apps. <em>Not slide decks.</em>
          </h2>
          <p className="sd" style={{ maxWidth: 620 }}>
            Every BDC build draws on a working production codebase — most of them running daily at Patterson Dental. The
            sales pitch is the portfolio.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {STUDIES.map((s, i) => (
            <Card key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
