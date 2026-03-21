@AGENTS.md

# Black Diamond Cyber — Project CLAUDE.md

## Overview
AI-powered website design/hosting company for local service businesses.
Owner: Erik Pearson | LLC: Black Diamond Cyber LLC | Email: blackdiamondcyber@gmail.com

## Stack
- **Framework**: Next.js 16 App Router, React 19, TypeScript strict
- **Styling**: Tailwind CSS v4 + custom dark luxe CSS (globals.css)
- **Database**: Supabase (PostgreSQL + RLS)
- **Payments**: Stripe (checkout sessions + webhooks)
- **AI**: Anthropic Claude API (website content generation)
- **Email**: Resend (contact form notifications)
- **Validation**: Zod v4
- **Package Manager**: pnpm
- **Deployment**: Vercel (auto-deploy on push to main)

## Colors
`#06080C` bg | `#2887CC` blue | `#5DC4E8` cyan | `#DEE0E7` text | `#34D399` green

## Fonts
Outfit (sans, weights 200-800) + Instrument Serif (display, regular + italic)

## Key URLs
- Live: https://black-diamond-cyber.vercel.app
- GitHub: https://github.com/blackdiamondcyber-png/black-diamond-cyber
- Vercel Team: team_XkGY68ItT13s4sukxCnfllAg
- Vercel Project: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, scroll reveal
│   ├── page.tsx            # Home page composing all sections
│   ├── globals.css         # Full dark luxe design system
│   ├── contact/page.tsx    # Standalone contact page
│   ├── admin/
│   │   ├── generate/page.tsx  # AI website generator (password-protected)
│   │   └── reports/page.tsx   # SEO reports dashboard (placeholder)
│   └── api/
│       ├── checkout/route.ts         # Stripe checkout sessions
│       ├── contact/route.ts          # Contact form → Supabase + email
│       ├── admin/generate/route.ts   # Claude API content generation
│       └── webhooks/stripe/route.ts  # Stripe webhook handler
├── components/
│   ├── Nav.tsx, Hero.tsx, Marquee.tsx, TrustBar.tsx
│   ├── Portfolio.tsx, HowItWorks.tsx, Pricing.tsx
│   ├── Founder.tsx, Reviews.tsx, CTA.tsx, Footer.tsx
│   ├── ContactModal.tsx     # Dark luxe contact form modal
│   ├── BookingHandler.tsx   # Intercepts #book links → opens modal
│   └── ScrollReveal.tsx     # IntersectionObserver (unused, logic in layout)
├── lib/
│   ├── stripe.ts     # getStripe() factory
│   ├── supabase.ts   # getSupabaseAdmin() + getSupabaseBrowser()
│   └── schemas.ts    # Zod validation schemas + INDUSTRIES constant
└── types/
    └── index.ts       # SubscriptionTier, TIERS config, Client, ContactSubmission
scripts/
└── cold-email-optimizer.ts  # Instantly.ai autoresearch skeleton
supabase/
└── migrations/001_initial_schema.sql
```

## Setup Checklist
- [ ] Push to GitHub (needs auth configured)
- [ ] Create Supabase project + run 001_initial_schema.sql
- [ ] Add env vars to Vercel (see .env.local.example)
- [ ] Create Stripe products/prices in dashboard
- [ ] Set up Stripe webhook endpoint → /api/webhooks/stripe
- [ ] Purchase blackdiamondcyber.dev domain ($13/yr on Vercel)

## Conventions
- Named exports only (except pages/layouts)
- 'use client' only where needed
- No console.log in committed code
- Commit style: feat:, fix:, chore:
- Pre-commit: pnpm run build && npx tsc --noEmit
