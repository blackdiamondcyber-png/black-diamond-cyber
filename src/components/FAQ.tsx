'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    q: 'What is GEO and why does it matter for my business?',
    a: 'GEO (Generative Engine Optimization) is how you show up when customers ask AI tools like ChatGPT, Google AI Overviews, or Perplexity for recommendations. Instead of scrolling Google results, more people now ask AI "who\u2019s the best dentist near me?" \u2014 and AI gives them a direct answer. GEO makes sure that answer is your business.',
  },
  {
    q: 'How is GEO different from regular SEO?',
    a: 'Traditional SEO gets you ranked on Google\u2019s search results page. GEO gets you recommended inside AI-generated answers. Both matter \u2014 but AI search is growing fast, and most agencies don\u2019t offer GEO at all. We optimize for both simultaneously.',
  },
  {
    q: 'How long does it take to build my website?',
    a: 'Most websites are delivered in 7 business days. Complex builds take 10-14 days.',
  },
  {
    q: 'Do I own my website?',
    a: 'Yes. You own all the code, content, and design. No lock-in, no proprietary platforms.',
  },
  {
    q: 'Are there any contracts?',
    a: 'No. Month-to-month. Cancel anytime.',
  },
  {
    q: 'What industries do you work with?',
    a: 'Dental practices, HVAC, plumbing, med spas, electricians, roofing, and other local service businesses.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const answerVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.25, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.15 },
    },
  },
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ padding: '100px 0', position: 'relative' }}
    >
      <div className="c">
        <div className="sh sc">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--t2)' }}>?</span>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text)' }}>FAQ</span>
          </div>
          <h2 className="st">
            Common <em>questions.</em>
          </h2>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{
                background: 'var(--bg1)',
                border: `1px solid ${open === i ? 'rgba(40,135,204,.18)' : 'var(--hr)'}`,
                borderRadius: 'var(--rr)',
                overflow: 'hidden',
                transition: 'border-color .3s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '20px 24px',
                  minHeight: '48px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(14px, 1.6vw, 16px)',
                    fontWeight: 600,
                    color: open === i ? 'var(--cyan)' : 'var(--text)',
                    transition: 'color .3s',
                    lineHeight: 1.5,
                  }}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                  style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: open === i ? 'rgba(40,135,204,.12)' : 'rgba(255,255,255,.04)',
                    color: open === i ? 'var(--blue)' : 'var(--t3)',
                    fontSize: '18px',
                    fontWeight: 300,
                    transition: 'background .3s, color .3s',
                  }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    variants={answerVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="exit"
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        padding: '0 24px 20px',
                        fontSize: 'clamp(13px, 1.4vw, 15px)',
                        color: 'var(--t2)',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
