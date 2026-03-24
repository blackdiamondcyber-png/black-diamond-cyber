'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    q: 'Why should I trust a new agency?',
    a: 'Fair question. Black Diamond Cyber is new, but its founder is not. Erik Pearson is a Patterson Dental territory sales rep who has worked inside 400+ dental practices across Austin and San Antonio. He is also a self-taught developer who has shipped 8 production web applications. The first 4 clients get founding pricing and Erik\u2019s personal attention on every detail. We succeed by delivering results \u2014 not by running ads.',
  },
  {
    q: 'What if I\u2019m not happy with the website?',
    a: 'If your site does not score 90+ on Google PageSpeed within 30 days, we rebuild it at no charge. We also offer unlimited revisions during the build process. No contracts means you can walk away anytime \u2014 but our clients don\u2019t.',
  },
  {
    q: 'How long does it take to build my website?',
    a: 'Most websites are delivered in 3-7 business days depending on the tier. Starter sites are ready in 3-5 days, Premium and Cinematic sites take 10-14 days.',
  },
  {
    q: 'Do I own my website if I cancel?',
    a: 'Yes, 100%. You own all the code, content, and design. We\u2019ll hand over everything \u2014 no hostage situations, no proprietary lock-in.',
  },
  {
    q: 'Are there any contracts?',
    a: 'No contracts, ever. Pay month-to-month for hosting and maintenance. Cancel anytime with 30 days notice. Your site is yours.',
  },
  {
    q: 'What\u2019s included in the monthly fee?',
    a: 'Hosting on Vercel\u2019s edge network, SSL certificate, CDN, security updates, uptime monitoring, and monthly content updates. Essentially, everything to keep your site fast and secure.',
  },
  {
    q: 'How is this different from Wix or Squarespace?',
    a: 'Night and day. We build with Next.js \u2014 the same framework used by Nike, Hulu, and TikTok. Your site loads in under 2 seconds (Wix averages 6-8s), ranks better on Google, and you own the code.',
  },
  {
    q: 'What are Growth Systems?',
    a: 'Growth Systems bundle your website with business automation: AI review requests, missed call text-back, appointment reminders, lead nurture sequences, and Google Business Profile optimization. It\u2019s your entire digital presence, managed.',
  },
  {
    q: 'Can you work with my existing website?',
    a: 'Yes. We can migrate your content, preserve your SEO rankings, and set up proper redirects. You\u2019ll get a faster, better-designed site without losing your Google juice.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work with dental practices, HVAC companies, plumbing contractors, electricians, roofing companies, med spas, and other local service businesses. Each industry gets tailored design and messaging.',
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
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div
            className="tag"
            style={{ display: 'inline-flex', marginBottom: '16px' }}
          >
            Got Questions?
          </div>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text)',
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions
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
