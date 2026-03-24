# Black Diamond Cyber LLC — Full Status Briefing for Midas

**Date**: 2026-03-23
**Prepared by**: Claude Code (Session 7, G7 machine)
**Owner**: Erik Pearson
**Entity**: Black Diamond Cybersecurity Consulting LLC (Texas)
**Email**: blackdiamondcyber@gmail.com

---

## 1. What Black Diamond Cyber Is

Black Diamond Cyber (BDC) is an AI-powered web design and growth systems agency targeting local service businesses — dental practices, HVAC companies, plumbers, electricians, roofers, med spas, and similar trades. Erik runs it as a solo operator using AI (Claude API) to generate website content, cutting delivery time from weeks to days.

The business model has two revenue streams:

1. **Website Design** — One-time setup fee + monthly hosting/maintenance retainer
2. **Growth Systems** — Higher-ticket recurring revenue combining websites with automation (review requests, missed call text-back, lead nurture, AI chatbots)

**Live site**: https://bd-cyber.com
**GitHub**: https://github.com/blackdiamondcyber-png/black-diamond-cyber
**Supabase**: https://yudxkwlceagkcerugatv.supabase.co

---

## 2. Current State of the Business

### Revenue: $0 (Pre-Revenue)

BDC has zero paying clients as of today. The business is in the **marketing infrastructure** phase — the website, pricing, positioning, SEO landing pages, and automation demos are built. The next milestone is signing the first paying client.

### What's Built and Live

| Asset | Status | URL |
|-------|--------|-----|
| Marketing website | Live, deployed on Vercel | https://bd-cyber.com |
| Dental landing page | Live | https://bd-cyber.com/dental |
| HVAC landing page | Live | https://bd-cyber.com/hvac |
| Plumbing landing page | Live | https://bd-cyber.com/plumbing |
| Free site audit tool | Live (lead gen engine) | https://bd-cyber.com/free-audit |
| Contact form | Live → Supabase + email notification | https://bd-cyber.com/contact |
| Stripe checkout | Live (LIVE keys, 4 website tiers) | Integrated on pricing page |
| AI website generator | Live (admin-only, password-protected) | https://bd-cyber.com/admin/generate |
| Client dashboard | Live (magic link auth) | https://bd-cyber.com/dashboard |
| Automation demos page | Live (admin, for sales calls) | https://bd-cyber.com/admin/demos |
| Sitemap + robots.txt | Live | https://bd-cyber.com/sitemap.xml |

### What's NOT Built Yet

| Item | Dependency | Priority |
|------|-----------|----------|
| Actual automation workflows | Twilio account + n8n instance | Build when first Growth client signs |
| Cold email outreach system | Instantly.ai API key | High — primary acquisition channel |
| Blog / content marketing | None — just needs content | Medium |
| SEO reports dashboard | AgencyAnalytics API key | Low — nice-to-have for client retention |
| Real portfolio / case studies | Need 1-2 real clients | Critical — replaces fictional portfolio |
| Erik's headshot | Erik provides photo | Low |
| Video content | Screen recordings | Low |

### Domain & Infrastructure

- **Domain**: bd-cyber.com — currently on **Wix DNS** (nameservers: ns8.wixdns.net, ns9.wixdns.net), A record pointing to Vercel (76.76.21.21)
- **Domain transfer**: Pending at Namecheap (order #197806219). Once complete, plan is: Namecheap → Cloudflare nameservers → Resend for @bd-cyber.com email
- **Hosting**: Vercel (free tier, team: team_XkGY68ItT13s4sukxCnfllAg)
- **Database**: Supabase (pearson_403@hotmail.com org, project yudxkwlceagkcerugatv)
- **Payments**: Stripe LIVE mode (4 website tier products configured)
- **Email**: Gmail SMTP via Nodemailer (blackdiamondcyber@gmail.com) — will migrate to Resend once domain transfer completes

---

## 3. Pricing Structure & Revenue Model

### Website Tiers (Stripe checkout — direct purchase)

| Tier | Setup Fee | Monthly | Delivery | Target Client |
|------|-----------|---------|----------|---------------|
| Starter | $997 | $79/mo | 3-5 days | Solo practitioners, new businesses |
| Professional | $1,997 | $129/mo | 5-7 days | Established practices wanting growth |
| Premium | $2,997 | $199/mo | 10-14 days | Multi-location or competitive markets |
| Cinematic | $4,997 | $249/mo | 10-14 days | High-end practices wanting wow factor |

### Growth System Tiers (Consultation-first — contact modal, no direct checkout)

| Tier | Setup Fee | Monthly | Includes |
|------|-----------|---------|----------|
| Growth | $2,997 | $497/mo | Professional website + review automation + missed call text-back + appointment reminders + GBP optimization |
| Dominate | $4,997 | $1,497/mo | Everything in Growth + AI chatbot + lead nurture sequences + reputation management + Google Ads management + competitor monitoring + dedicated Slack channel |

### Passive Income Projections

**Website-only clients (lower touch, more scalable):**

| Scenario | Clients | Monthly Recurring | Annual |
|----------|---------|-------------------|--------|
| Conservative | 10 clients @ avg $129/mo | $1,290/mo | $15,480/yr |
| Moderate | 25 clients @ avg $149/mo | $3,725/mo | $44,700/yr |
| Aggressive | 50 clients @ avg $149/mo | $7,450/mo | $89,400/yr |

Setup fees on top: 25 clients = ~$50K in one-time revenue.

**Growth system clients (higher touch, much higher revenue):**

| Scenario | Clients | Monthly Recurring | Annual |
|----------|---------|-------------------|--------|
| Conservative | 3 Growth clients | $1,491/mo | $17,892/yr |
| Moderate | 5 Growth + 2 Dominate | $5,479/mo | $65,748/yr |
| Target (12 months) | 10 Growth + 3 Dominate | $9,461/mo | $113,532/yr |

**Combined target at 12 months**: 25 website clients + 10 Growth + 3 Dominate = **$13,186/mo recurring ($158,232/yr)** + ~$80K in setup fees.

The real passive income play is the **website hosting retainer** ($79-$249/mo per client). Once a site is built and delivered, maintenance is minimal — hosting costs are pennies, and most months require zero touch. Growth system clients require more active management but at $497-$1,497/mo, even 2-3 hours/month per client is highly profitable.

---

## 4. Competitive Positioning

### BDC's Market Position

BDC sits in a gap no one else occupies: **AI-generated custom websites + automation systems for local businesses at mid-market pricing with no contracts.**

### Competitive Landscape

#### vs. DIY Builders (Wix, Squarespace, GoDaddy)
- **Their model**: $16-$159/mo self-service templates
- **BDC advantage**: Custom-built sites load in under 2 seconds vs. Wix's 5.7-6.8s LCP. Client owns the code. No template sameness. Includes SEO from day one.
- **Key stat**: Wix sites average 6.8s page load — Google penalizes anything over 2.5s

#### vs. Traditional Dental/Local Marketing Agencies
- **Their model**: $3K-$10K setup, 12-month contracts, 6-8 week delivery, $500-$2,500/mo retainers
- **Competitors researched**: Gargle, DocSites, ProSites, Dental Intelligence, Practice by Numbers, Sesame Communications, Officite, PBHS
- **BDC advantage**: No contracts (only Gargle and DocSites among dental agencies offer this). Faster delivery (3-7 days vs 6-8 weeks). Lower setup fees. AI-generated content means higher margins.
- **Key finding**: No dental agency uses AI for website generation — BDC is alone in this specific niche

#### vs. AI Website Builders (10Web, Durable, Mixo, Bookmark)
- **Their model**: $10-$50/mo automated site generation, templates with AI content fill
- **BDC advantage**: Human oversight on every site. Custom design, not template-with-AI-text. Includes ongoing SEO, hosting, and growth services. Premium positioning vs. their commodity play.

#### vs. Nick Saraev / LeftClick Model
- **His model**: YouTube content → free courses → $184/mo Skool community → $5K-$50K B2B agency projects
- **BDC adaptation**: Same AI-powered agency concept but targeting local businesses (not B2B SaaS). Lower price point, higher volume. Erik doesn't need the YouTube funnel — direct outreach + SEO landing pages.

#### vs. Doing Nothing (The Real Competitor)
- Most local businesses don't have a marketing agency. Their competitor is inertia.
- **Key stat**: A dental practice without a good website loses an estimated 15-30 new patients per month. At $800-$2,000 lifetime value per patient, that's $12K-$60K/yr in lost revenue.

### BDC's Unique Differentiators

1. **No contracts** — cancel anytime, own your code (almost no competitor offers both)
2. **AI-powered delivery** — 3-7 day turnaround vs. industry standard 6-8 weeks
3. **Code ownership** — client gets full source code if they leave (agencies typically hold sites hostage)
4. **Bundled growth systems** — website + automation in one provider (most agencies specialize in one or the other)
5. **Sub-2s page load** — Next.js on Vercel CDN vs. Wix/WordPress bloat
6. **Mid-market pricing** — cheaper than agencies ($997-$4,997 setup vs. $3K-$10K), premium vs. DIY ($79-$249/mo vs. $16-$50/mo)

---

## 5. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 App Router, React 19, TypeScript strict |
| Styling | Tailwind CSS v4 + custom dark luxe design system |
| Database | Supabase (PostgreSQL + Auth + RLS) |
| Payments | Stripe (live mode, checkout sessions + webhooks) |
| AI | Anthropic Claude API (website content generation) |
| Email | Nodemailer + Gmail SMTP (migrating to Resend) |
| Validation | Zod v4 |
| Deployment | Vercel |
| Package Manager | pnpm |

---

## 6. Immediate Priorities (Next 30 Days)

1. **Sign first paying client** — Use the dental/HVAC/plumbing landing pages + free audit tool for lead gen. Consider offering first 1-2 clients at a discount in exchange for case studies.

2. **Cold email outreach system** — Set up Apify for lead scraping (Google Maps → local business data) + Instantly.ai for automated personalized outreach. This is the primary acquisition channel.

3. **Complete domain transfer** — Wix → Namecheap → Cloudflare → Resend email (@bd-cyber.com). Professional email domain matters for cold outreach credibility.

4. **Build automation demo** — When first Growth client signs, deploy the n8n missed-call-textback and review request workflows (templates already created at `src/lib/workflows/`).

5. **Replace fictional portfolio** — Every client delivered becomes a real case study replacing the current Unsplash stock photos.

---

## 7. Risk Factors

| Risk | Mitigation |
|------|-----------|
| Zero revenue / no clients yet | Free audit tool captures leads; industry landing pages target SEO; cold email planned |
| All portfolio items are fictional | Acknowledged on site as "sample builds"; replace with real work ASAP |
| Growth/Dominate automation not built | Workflow templates designed; actual Twilio/n8n integration deferred until first client signs |
| Domain still on Wix DNS | Site works fine via A record; transfer is cosmetic/email priority, not a blocker |
| Solo operator / no team | AI handles content generation; automation reduces per-client maintenance; Erik handles sales + strategy |
| Stripe webhook on free tier | Vercel free tier has cold start latency; upgrade when revenue justifies it |

---

## 8. Key Accounts & Credentials Context

| Service | Account | Notes |
|---------|---------|-------|
| Vercel | Erik's account | Team: team_XkGY68ItT13s4sukxCnfllAg |
| Supabase | pearson_403@hotmail.com | Project: yudxkwlceagkcerugatv |
| Stripe | Live mode | 4 website tier products configured |
| GitHub | blackdiamondcyber-png | Public repo |
| Domain | Wix → Namecheap (pending) | Order #197806219 |
| Gmail SMTP | blackdiamondcyber@gmail.com | App password in Vercel env |
| Claude API | Anthropic | Key in Vercel env |
| Google CSE | Google Cloud | Custom search for audit tool |
| Google Places | Google Cloud | Business lookup for audit tool |

---

## 9. Session History

| Session | Date | Key Accomplishments |
|---------|------|-------------------|
| 1 | Early March | Initial website build, dark luxe design system, Stripe integration, contact form |
| 2 | Mid March | Client portal with magic link auth, photo upload, dashboard enhancements |
| 3 | Mid March | Stripe live mode, Gmail SMTP email, status tracking |
| 4 | Mid March | Security hardening, rate limiting, PWA, Google APIs for audit tool |
| 5 | Late March | SEO (sitemap, robots.txt, structured data, metadata), Apple touch icon |
| 6 | 2026-03-23 | Major overhaul: Growth/Dominate tiers, competitive analysis (30+ competitors), 18 files modified, full repositioning |
| 7 | 2026-03-23 | Industry landing pages (/dental, /hvac, /plumbing), automation demos, WhyBDCyber responsive fix, domain/email documentation |

---

## 10. Bottom Line

Black Diamond Cyber is a fully built, deployed, and operational marketing website for a one-man AI-powered web agency. The tech is solid, the positioning is differentiated, and the pricing captures a genuine market gap. What it needs now is **customers**. Every hour spent on further polish has diminishing returns compared to an hour spent on outreach. The critical path is: cold email system → first client → real case study → credibility flywheel.
