@AGENTS.md

# Black Diamond Cyber — Project CLAUDE.md

## Overview
AI-powered website design/hosting company for local service businesses.
Owner: Erik Pearson | LLC: Black Diamond Cyber LLC | Email: blackdiamondcyber@gmail.com

## Stack
- **Framework**: Next.js 16 App Router, React 19, TypeScript strict
- **Styling**: Tailwind CSS v4 + custom dark luxe CSS (globals.css)
- **Database**: Supabase (PostgreSQL + RLS)
- **Payments**: Stripe (checkout sessions + webhooks) — LIVE mode
- **AI**: Anthropic Claude API (website content generation) — key set
- **Email**: Resend (contact form + audit result emails)
- **Validation**: Zod v4
- **Package Manager**: pnpm
- **Deployment**: Vercel (deploy with `vercel --prod --force`)

## Colors
`#06080C` bg | `#2887CC` blue | `#5DC4E8` cyan | `#DEE0E7` text | `#34D399` green

## Fonts
Outfit (sans, weights 300/500/600/700) + Instrument Serif (display, regular + italic)

## Key URLs
- Live: https://black-diamond-cyber.vercel.app
- GitHub: https://github.com/blackdiamondcyber-png/black-diamond-cyber
- Vercel Team: team_XkGY68ItT13s4sukxCnfllAg
- Vercel Project: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8
- Supabase: https://yudxkwlceagkcerugatv.supabase.co (pearson_403@hotmail.com org)

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, scroll reveal
│   ├── page.tsx            # Home page composing all sections
│   ├── globals.css         # Full dark luxe design system (~260 lines)
│   ├── contact/page.tsx    # Standalone contact page
│   ├── free-audit/page.tsx # Free audit tool (lead gen engine)
│   ├── admin/
│   │   ├── generate/page.tsx  # AI website generator (password-protected)
│   │   └── reports/page.tsx   # SEO reports dashboard (placeholder)
│   └── api/
│       ├── checkout/route.ts         # Stripe checkout sessions
│       ├── contact/route.ts          # Contact form → Supabase + email
│       ├── audit/run/route.ts        # Audit tool + auto-email results
│       ├── admin/generate/route.ts   # Claude API content generation
│       └── webhooks/stripe/route.ts  # Stripe webhook handler
├── components/
│   ├── Nav.tsx, Hero.tsx, Marquee.tsx, TrustBar.tsx
│   ├── Portfolio.tsx, Services.tsx, HowItWorks.tsx
│   ├── Pricing.tsx, PricingButton.tsx (client — Stripe checkout)
│   ├── Founder.tsx, Reviews.tsx, CTA.tsx, Footer.tsx
│   ├── ContactModal.tsx     # Dark luxe contact form modal
│   └── BookingHandler.tsx   # Intercepts #book links → opens modal
├── lib/
│   ├── stripe.ts     # getStripe() factory
│   ├── supabase.ts   # getSupabaseAdmin() + getSupabaseBrowser()
│   ├── schemas.ts    # Zod validation schemas + INDUSTRIES constant
│   └── audit.ts      # Audit types, auditFormSchema, hashScore()
└── types/
    └── index.ts       # SubscriptionTier, TIERS config, Client, ContactSubmission
scripts/
└── cold-email-optimizer.ts  # Instantly.ai autoresearch skeleton
supabase/
└── migrations/001_initial_schema.sql
```

## Environment Variables (Vercel Production)
| Variable | Status |
|----------|--------|
| NEXT_PUBLIC_SUPABASE_URL | ✅ Set |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | ✅ Set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| RESEND_API_KEY | ✅ Set |
| STRIPE_SECRET_KEY | ✅ Set (LIVE mode) |
| STRIPE_WEBHOOK_SECRET | ✅ Set (LIVE webhook) |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | ✅ Set (LIVE mode) |
| ANTHROPIC_API_KEY | ✅ Set |
| ADMIN_PASSWORD | ❌ Uses default in code |

## Conventions
- Named exports only (except pages/layouts)
- 'use client' only where needed
- No console.log in committed code
- Commit style: feat:, fix:, chore:
- Pre-commit: pnpm run build && npx tsc --noEmit
- Deploy: vercel --prod --force (needed due to free tier queue issues)

## Responsive Breakpoints
- 1024px: tablet landscape (2-col grids, hide hero visual)
- 768px: tablet portrait (card sizing, audit stacking)
- 640px: mobile (single column, 85vw cards, hidden nav links)
