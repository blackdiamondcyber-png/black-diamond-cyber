@AGENTS.md

# Black Diamond Cyber — Project CLAUDE.md

## Design Standards
Act as a senior UI designer and front-end developer. Prioritize visual quality, clean typography, smooth animations, and professional polish.

### Standard Toolkit (npm — use in all projects):
- Tailwind CSS + ShadCN UI — styling + components
- GSAP — scroll animations
- Framer Motion — hover effects
- Three.js — 3D background graphics
- Google Fonts — typography

### Standard Workflow:
1. Stitch 2.0 → design system + 3 variations from reference screenshot
2. Export → Claude Code builds full site
3. Add Spline 3D hero + GSAP animations
4. GitHub → Vercel auto-deploy

## Overview
AI-powered website design, automation, and growth systems for local service businesses.
Owner: Erik Pearson | LLC: Black Diamond Cyber LLC | Email: blackdiamondcyber@gmail.com

## Stack
- **Framework**: Next.js 16 App Router, React 19, TypeScript strict
- **Styling**: Tailwind CSS v4 + custom dark luxe CSS (globals.css)
- **Database**: Supabase (PostgreSQL + RLS)
- **Payments**: Stripe (checkout sessions + webhooks) — LIVE mode
- **AI**: Anthropic Claude API (website content generation) — key set
- **Email**: Nodemailer + Gmail SMTP (contact form + audit + status emails) — sends from blackdiamondcyber@gmail.com
- **Validation**: Zod v4
- **Package Manager**: pnpm
- **Deployment**: Vercel (deploy with `vercel --prod --force`)

## Colors
`#06080C` bg | `#2887CC` blue | `#5DC4E8` cyan | `#DEE0E7` text | `#34D399` green

## Fonts
Outfit (sans, weights 300/500/600/700) + Instrument Serif (display, regular + italic)

## Key URLs
- Live: https://bd-cyber.com
- GitHub: https://github.com/blackdiamondcyber-png/black-diamond-cyber
- Vercel Team: team_XkGY68ItT13s4sukxCnfllAg
- Vercel Project: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8
- Supabase: https://yudxkwlceagkcerugatv.supabase.co (pearson_403@hotmail.com org)

## Pricing Tiers

### Website Tiers (Stripe checkout)
| Tier | Setup | Monthly | Delivery |
|------|-------|---------|----------|
| Starter | $997 | $79/mo | 3-5 days |
| Professional | $1,997 | $129/mo | 5-7 days |
| Premium | $2,997 | $199/mo | 10-14 days |
| Cinematic | $4,997 | $249/mo | 10-14 days |

### Growth System Tiers (Consultation flow — contact modal, no Stripe checkout)
| Tier | Setup | Monthly | Key Features |
|------|-------|---------|--------------|
| Growth | $2,997 | $497/mo | Professional website + review automation + missed call text-back + appointment reminders + GBP optimization |
| Dominate | $4,997 | $1,497/mo | Everything in Growth + AI chatbot + lead nurture + reputation mgmt + Google Ads + competitor monitoring + dedicated Slack |

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, scroll reveal (MutationObserver + IntersectionObserver)
│   ├── page.tsx            # Home page composing all sections + JSON-LD
│   ├── globals.css         # Full dark luxe design system
│   ├── contact/page.tsx    # Standalone contact page
│   ├── free-audit/page.tsx # Free audit tool (lead gen engine)
│   ├── admin/
│   │   ├── generate/page.tsx  # AI website generator (password-protected)
│   │   └── reports/page.tsx   # SEO reports dashboard (placeholder)
│   └── api/
│       ├── checkout/route.ts         # Stripe checkout (website tiers only)
│       ├── contact/route.ts          # Contact form → Supabase + email
│       ├── audit/run/route.ts        # Audit tool + auto-email results
│       ├── admin/generate/route.ts   # Claude API content generation
│       └── webhooks/stripe/route.ts  # Stripe webhook handler
├── components/
│   ├── Nav.tsx              # Fixed navbar with Growth link + Free Strategy Call CTA
│   ├── Hero.tsx             # "Websites & Growth Systems" + 3 layered website cards
│   ├── Marquee.tsx          # Scrolling industries
│   ├── TrustBar.tsx         # Stats + "Own Your Website Code" badge
│   ├── Portfolio.tsx        # 8 client case studies with industry tags
│   ├── Services.tsx         # 6 service cards (3x2 grid): Websites, Chatbots, Reviews, Lead Nurture, SEO, Analytics
│   ├── WhyBDCyber.tsx       # NEW: 4-card competitive comparison (vs Wix, agencies, templates, doing nothing)
│   ├── HowItWorks.tsx       # 4-step process
│   ├── Pricing.tsx          # 'use client' — Tabbed: Websites (4 tiers) | Growth Systems (2 tiers + comparison table)
│   ├── PricingButton.tsx    # Client — Stripe checkout trigger (website tiers only)
│   ├── Founder.tsx          # Erik bio with tech stack row
│   ├── Reviews.tsx          # 6 testimonials with industry + verified badges
│   ├── CTA.tsx              # "Stop Losing Customers" + strategy call / free audit CTAs
│   ├── Footer.tsx           # 5-column: brand, services, growth systems, industries, contact + trust badges
│   ├── ContactModal.tsx     # Dark luxe contact form modal
│   └── BookingHandler.tsx   # Intercepts #book links → opens modal
├── lib/
│   ├── stripe.ts     # getStripe() factory
│   ├── email.ts      # sendEmail() via Nodemailer + Gmail SMTP
│   ├── supabase.ts   # getSupabaseAdmin() + getSupabaseBrowser()
│   ├── schemas.ts    # Zod validation schemas + INDUSTRIES constant
│   ├── rate-limit.ts # In-memory sliding window rate limiter
│   └── audit.ts      # Audit types, auditFormSchema, hashScore()
└── types/
    └── index.ts       # SubscriptionTier, TIERS, ServiceTier, SERVICE_TIERS, Client, ContactSubmission
```

## Environment Variables (Vercel Production)
| Variable | Status |
|----------|--------|
| NEXT_PUBLIC_SUPABASE_URL | Set |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Set |
| SUPABASE_SERVICE_ROLE_KEY | Set |
| GMAIL_APP_PASSWORD | Set |
| STRIPE_SECRET_KEY | Set (LIVE) |
| STRIPE_WEBHOOK_SECRET | Set (LIVE) |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | Set (LIVE) |
| NEXT_PUBLIC_SITE_URL | Set (https://bd-cyber.com) |
| ANTHROPIC_API_KEY | Set |
| ADMIN_PASSWORD | Set (server-only) |
| GOOGLE_CSE_API_KEY | Set |
| GOOGLE_CSE_ID | Set (5111fb3b1ece64f27) |
| GOOGLE_PLACES_API_KEY | Set |

## Conventions
- Named exports only (except pages/layouts)
- 'use client' only where needed (Pricing.tsx, PricingButton.tsx, ContactModal.tsx, BookingHandler.tsx)
- No console.log in committed code
- Commit style: feat:, fix:, chore:, docs:
- Pre-commit: pnpm run build && npx tsc --noEmit
- Deploy: vercel --prod --force

## Gotchas
- **Tailwind v4 purges custom CSS classes** — Use inline styles for new grid layouts, not CSS classes
- **vercel env add MUST use printf pipe** — echo/heredoc adds trailing \n that breaks API keys
- **Stripe SDK v17** — v20 has Vercel serverless connection issues
- **Zod v4** uses `.issues` not `.errors` on ZodError objects
- **Growth/Dominate tiers** have no Stripe products — they use consultation flow (contact modal)
- **Supabase MCP tools** can't access this project (different org)
- **All portfolio items are fictional** — 8 fake businesses with Unsplash stock photos

## Responsive Breakpoints
- 1024px: tablet landscape (2-col grids, hide hero visual, hide nav links 5+)
- 768px: tablet portrait (card sizing, audit stacking)
- 640px: mobile (single column, 85vw cards, hidden nav links)

## Page Section Order
Nav → Hero → Marquee → TrustBar → Portfolio → Services → WhyBDCyber → HowItWorks → Pricing → Founder → Reviews → CTA → Footer

---

## Memory System Integration

When you complete a session, you MUST save a summary. This keeps Midas (the main AI agent) informed about what changed and what needs follow-up.

### 1. Session Summary (REQUIRED)
Write a summary file to the Midas vault:
```bash
mkdir -p ~/midas-vault/sessions/claude-code
cat > ~/midas-vault/sessions/claude-code/bdc_YYYY_MM_DD.md << 'EOF'
---
type: session-summary
project: black-diamond-cyber
tags: [bdc, web-agency, next.js, stripe, supabase]
created: YYYY-MM-DD
parent: "[[knowledge/business/BDC-WEB-AGENCY]]"
---
# Session Title

## What Changed
- [bullet list of changes made]

## Why
[context for why these changes were made]

## Verification
- Build: pnpm run build passed? (yes/no)
- Type check: npx tsc --noEmit passed? (yes/no)
- Deployed to Vercel? (yes/no — URL if yes)

## Files Modified/Created
- src/components/... 
- src/app/...

## Follow-up for Midas
[anything the main agent should know or action next — client leads, bugs found, feature requests]
EOF
```

### 2. Git Commit + Push (REQUIRED)
```bash
git add -A
git commit -m "feat/fix/docs: descriptive message"
git push origin main
```

### 3. Deploy to Vercel (if applicable)
```bash
vercel --prod --force
```

### 4. Notify Midas (OPTIONAL but recommended)
```bash
# Post to Slack #midas-coding channel
curl -s -X POST https://slack.com/api/chat.postMessage \
  -H "Authorization: Bearer $(cat ~/.openclaw/credentials/slack-default-allowFrom.json | python3 -c 'import sys,json; print(json.load(sys.stdin)["token"])')" \
  -H "Content-Type: application/json" \
  -d '{"channel":"C0ALL94L7GR","text":"BDC session complete: [brief summary]"}'
```

## Coding Standards
- TypeScript strict mode — no `any` types
- Tailwind for styling — inline styles only for dynamic grid layouts (Tailwind v4 purge issue)
- pnpm as package manager
- Run `pnpm run build && npx tsc --noEmit` before committing
- Named exports only (except pages/layouts)
- No `console.log` in committed code
- Never commit secrets or API keys
