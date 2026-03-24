'use client';

import { motion } from 'framer-motion';

const tools = [
  { name: 'Website Builder', price: 30 },
  { name: 'Hosting & SSL', price: 25 },
  { name: 'SEO Tools', price: 99 },
  { name: 'Review Software', price: 79 },
  { name: 'AI Chatbot', price: 49 },
  { name: 'Email Marketing', price: 30 },
  { name: 'Analytics Dashboard', price: 50 },
];

const total = tools.reduce((s, t) => s + t.price, 0);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const rightVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function CostComparison() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div className="c">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div
            className="tag"
            style={{ display: 'inline-flex', marginBottom: '16px' }}
          >
            All-In-One
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
            Replace 7 Tools with <em>One Plan</em>
          </h2>
        </div>

        <div
          id="cost-comparison-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
            alignItems: 'start',
          }}
        >
          {/* Left column — tool cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  background: 'var(--bg1)',
                  border: '1px solid var(--hr)',
                  borderRadius: 'var(--r)',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--t2)',
                  }}
                >
                  {tool.name}
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#e05a5a',
                  }}
                >
                  ${tool.price}/mo
                </span>
              </motion.div>
            ))}

            {/* Total row */}
            <motion.div
              custom={tools.length}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'var(--bg2)',
                border: '1px solid var(--hr)',
                borderRadius: 'var(--r)',
                marginTop: '4px',
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Total
              </span>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#e05a5a',
                  }}
                >
                  ${total}/mo
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  style={{
                    position: 'absolute',
                    left: '-4px',
                    right: '-4px',
                    top: '50%',
                    height: '2px',
                    background: '#e05a5a',
                    transformOrigin: 'left',
                  }}
                />
              </span>
            </motion.div>
          </div>

          {/* Right column — BD Cyber card */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            style={{
              position: 'relative',
              padding: '36px 28px',
              background: 'linear-gradient(135deg, var(--bg1), var(--bg2))',
              border: '1px solid var(--blue)',
              borderRadius: 'var(--rr)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-11px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--green)',
                color: '#fff',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '3px 13px',
                borderRadius: '40px',
                whiteSpace: 'nowrap',
              }}
            >
              All-In-One
            </div>

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(40,135,204,.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--blue)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>

            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                marginBottom: '8px',
              }}
            >
              Growth Plan
            </div>

            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '42px',
                color: 'var(--text)',
                lineHeight: 1.1,
                marginBottom: '4px',
              }}
            >
              $497
              <span style={{ fontSize: '16px', color: 'var(--t2)', fontFamily: 'Outfit, sans-serif' }}>/mo</span>
            </div>

            <div
              style={{
                fontSize: '12px',
                color: 'var(--t3)',
                marginBottom: '24px',
              }}
            >
              $2,997 one-time setup
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 28px',
                textAlign: 'left',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {[
                'Professional website included',
                'AI review requests',
                'Missed call text-back',
                'Appointment reminders',
                'Monthly analytics dashboard',
                'GBP optimization',
                'Dedicated support',
              ].map((feat) => (
                <li
                  key={feat}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13px',
                    color: 'var(--t2)',
                  }}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'rgba(52,211,153,.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href="#book"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '12px 24px',
                background: 'var(--blue)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                borderRadius: '40px',
                border: 'none',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Book Strategy Call
            </a>
          </motion.div>
        </div>

        {/* Responsive override for mobile — stack columns */}
        <style>{`
          @media (max-width: 768px) {
            #cost-comparison-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
