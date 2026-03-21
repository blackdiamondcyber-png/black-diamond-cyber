# Session Handoff — 2026-03-21 3:15 PM

## Current Task
Building Black Diamond Cyber (BDC) — an AI-powered website design and hosting company for local service businesses. Converted from static HTML to full Next.js SaaS platform in a single session.

## Status

### Completed ✅
- [x] Task 1: Fix deployed site (script was already fixed, verified)
- [x] Task 2: Convert static HTML to Next.js 16 App Router (12 components)
- [x] Task 3: Stripe integration (checkout API + webhook handler — needs keys to activate)
- [x] Task 4: Supabase database (schema deployed, clients + contact_submissions tables live)
- [x] Task 5: Contact form (modal + standalone page + API route + Zod validation)
- [x] Task 6: Website generator admin pipeline (Claude API integration, intake form, preview)
- [x] Task 7: Cold email optimizer script skeleton (Instantly.ai + autoresearch pattern)
- [x] Task 8: SEO reporting admin page placeholder
- [x] Free practice audit tool at /free-audit (lead generation engine)
- [x] GitHub CLI installed and authenticated as blackdiamondcyber-png
- [x] Vercel CLI authenticated and project linked
- [x] Supabase project created (separate account: pearson_403@hotmail.com)
- [x] Database migration 001_initial_schema.sql executed successfully
- [x] All env vars added to Vercel (Supabase URL, anon key, service role key, Resend API key)
- [x] Multiple visual polish iterations (hero cards, portfolio fonts, founder section, audit page)

### Not Yet Started / Blocked
- [ ] Stripe account creation + API keys (Erik needs to create Stripe account)
- [ ] Anthropic API key for website generator (Erik needs to provide)
- [ ] Instantly.ai API key for cold email system (Erik needs to provide)
- [ ] AgencyAnalytics API for SEO reports (Erik needs to provide)
- [ ] Google CSE + Places API keys for real audit data (optional — simulated data works)
- [ ] Purchase blackdiamondcyber.dev domain ($13/yr on Vercel)
- [ ] Auto-email after audit (Resend key is set, code needs to be added to /api/audit/run)
- [ ] Expand site with service categories (Websites, Apps, Automation, SEO, AI Integration)
- [ ] Resend domain verification (currently can only send from onboarding@resend.dev)

## Decisions Made
- **Next.js 16** (not 15) — create-next-app installed 16.2.1, kept it
- **pnpm** as package manager (per global CLAUDE.md convention for new projects)
- **Zod v4** (4.3.6) — note: `.errors` is now `.issues` on ZodError
- **No default exports** except pages/layouts (per convention)
- **CSS in globals.css** not Tailwind utilities — the design system is too complex for inline Tailwind in v1
- **Progressive enhancement** for scroll reveals — `.js .rv{opacity:0}` pattern with IntersectionObserver in `<Script>` tag
- **Simulated audit data** when no API keys configured — deterministic hash-based scores so the tool works immediately
- **Founder section** uses "EP" monogram circle instead of the BD diamond logo (user felt logo was "cartoony")
- **Supabase on separate account** — pearson_403@hotmail.com org, project ID: yudxkwlceagkcerugatv (MCP tools can't access it since they're connected to the gmail org)
- **vercel.json** must include `"framework": "nextjs"` and `"outputDirectory": ".next"` — the project was originally static so Vercel cached the old settings

## Files Modified This Session

### Core Framework
- `src/app/layout.tsx` — Root layout with Outfit + Instrument Serif fonts, metadata, scroll reveal Script
- `src/app/page.tsx` — Home page composing all 12 sections + BookingHandler
- `src/app/globals.css` — Full dark luxe design system (~245 lines) extracted from original HTML + audit tool CSS

### Components (all in src/components/)
- `Nav.tsx` — Floating island nav with Work/Pricing/Audit/About links + CTA
- `Hero.tsx` — Hero with realistic mini-site preview cards (Unsplash photos, nav bars, services)
- `Marquee.tsx` — ('use client') Kinetic industry scroll with innerHTML duplication
- `TrustBar.tsx` — Stats row (127+ Sites, 99.9% Uptime, etc.)
- `Portfolio.tsx` — 8 horizontally-scrolling cards with full mini-site renders
- `HowItWorks.tsx` — 4-step process cards with CSS counter numbering
- `Pricing.tsx` — 4 glassmorphism tier cards (Starter→Cinematic)
- `Founder.tsx` — EP monogram + about section
- `Reviews.tsx` — 6 testimonial cards with ratings and metrics
- `CTA.tsx` — Double-bezel booking card
- `Footer.tsx` — 4-column footer
- `ScrollReveal.tsx` — ('use client') IntersectionObserver (unused, logic moved to layout)
- `ContactModal.tsx` — ('use client') Full contact form modal with Zod validation, dark styling
- `BookingHandler.tsx` — ('use client') Intercepts all #book links to open ContactModal

### API Routes
- `src/app/api/checkout/route.ts` — Stripe checkout session creation (4 tiers)
- `src/app/api/webhooks/stripe/route.ts` — Stripe webhook (checkout.completed, subscription.deleted)
- `src/app/api/contact/route.ts` — Contact form → Supabase + Resend email
- `src/app/api/admin/generate/route.ts` — Claude API website content generation
- `src/app/api/audit/run/route.ts` — Free audit tool (PageSpeed API + simulated ranking/reputation/directories)

### Pages
- `src/app/contact/page.tsx` — Standalone contact page
- `src/app/admin/generate/page.tsx` — Password-protected AI website generator
- `src/app/admin/reports/page.tsx` — SEO reports placeholder
- `src/app/free-audit/page.tsx` — ('use client') Full audit tool with form→scanning→results states

### Libraries
- `src/lib/stripe.ts` — getStripe() factory
- `src/lib/supabase.ts` — getSupabaseAdmin() + getSupabaseBrowser()
- `src/lib/schemas.ts` — Zod schemas (contactForm, checkout, generateSite) + INDUSTRIES constant
- `src/lib/audit.ts` — Audit types, auditFormSchema, hashScore(), calculateOverall()
- `src/types/index.ts` — SubscriptionTier, TIERS config, Client, ContactSubmission types

### Other
- `scripts/cold-email-optimizer.ts` — Instantly.ai autoresearch skeleton
- `supabase/migrations/001_initial_schema.sql` — clients + contact_submissions tables
- `.env.local` — Local env vars (Supabase + Resend configured, Stripe/Anthropic commented out)
- `.env.local.example` — Template for all env vars
- `CLAUDE.md` — Project documentation with file structure, stack, conventions
- `vercel.json` — Framework: nextjs, outputDirectory: .next
- `.claude/launch.json` — Dev server config (port 3005)

## Vercel Environment Variables (Production)
| Variable | Status |
|----------|--------|
| NEXT_PUBLIC_SUPABASE_URL | ✅ Set |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | ✅ Set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| RESEND_API_KEY | ✅ Set |
| STRIPE_SECRET_KEY | ❌ Not set |
| STRIPE_WEBHOOK_SECRET | ❌ Not set |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | ❌ Not set |
| ANTHROPIC_API_KEY | ❌ Not set |
| ADMIN_PASSWORD | ❌ Not set (defaults in code) |

## Supabase Details
- **Account**: pearson_403@hotmail.com (SEPARATE from gmail Supabase org)
- **Project ID**: yudxkwlceagkcerugatv
- **Region**: us-east-1
- **URL**: https://yudxkwlceagkcerugatv.supabase.co
- **Tables**: clients, contact_submissions (both with RLS enabled, service role full access)
- **Note**: MCP Supabase tools CANNOT access this project (wrong org). Manual SQL Editor or new MCP connection needed.

## GitHub / Vercel Details
- **GitHub**: https://github.com/blackdiamondcyber-png/black-diamond-cyber
- **GitHub username**: blackdiamondcyber-png
- **GitHub email**: blackdiamondcyber@gmail.com
- **Vercel Team**: team_XkGY68ItT13s4sukxCnfllAg ("Erik's projects")
- **Vercel Project**: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8
- **Live URL**: https://black-diamond-cyber.vercel.app
- **gh CLI**: Authenticated on this machine
- **Vercel CLI**: Authenticated, project linked

## Known Issues / Gotchas
1. **vercel.json MUST have framework + outputDirectory** — without these, Vercel serves 404 (legacy static config cached)
2. **Zod v4 uses `.issues` not `.errors`** on ZodError objects
3. **Resend requires domain verification** to send from custom domain — currently can only send from onboarding@resend.dev
4. **Audit tool uses simulated data** without Google API keys — scores are deterministic (hash-based), not random
5. **ScrollReveal.tsx exists but is unused** — scroll reveal logic is in layout.tsx Script tag instead
6. **`vercel --prod --force`** is needed for deploys — git-triggered deploys were queuing/failing on free tier
7. **Portfolio card business names** use Outfit sans-serif (override in CSS) not the default Instrument Serif
8. **Hero cards** have inline-styled mini-site renders with Unsplash photos — complex JSX
9. **Hobby plan limits**: Vercel free tier, Supabase free tier (2 project limit on gmail org)

## Remaining Work (Priority Order)

### High Priority — Revenue Enablers
1. **Stripe setup** — Erik creates Stripe account, provides keys, add to Vercel env vars. Code is 100% ready.
2. **Auto-email after audit** — Add Resend email to `/api/audit/run` with personalized results. Key is already set.
3. **Resend domain verification** — Verify blackdiamondcyber.dev (or gmail) so emails don't come from resend.dev

### Medium Priority — Feature Expansion
4. **Service categories on homepage** — Erik wants sections for: Websites, App Development (Dental Divas proof), Automation (n8n/AI chatbots), SEO & Analytics, AI Integration
5. **Website generator activation** — Add ANTHROPIC_API_KEY to Vercel, test the /admin/generate flow
6. **Real audit data** — Add GOOGLE_CSE_API_KEY + GOOGLE_CSE_ID + GOOGLE_PLACES_API_KEY for live ranking/reputation checks
7. **Purchase blackdiamondcyber.dev** — $13/yr in Vercel Project Settings → Domains

### Lower Priority — Polish & Scale
8. **Cold email system** — Get Instantly.ai API key, set up GitHub Actions cron
9. **SEO reports dashboard** — AgencyAnalytics API integration
10. **Mobile polish** — Test all pages on 375px width, fix any layout issues
11. **Lighthouse audit** — Target 90+ performance score
12. **Logo redesign** — Erik expressed dissatisfaction with current BD diamond logo

## Pricing Reference
| Tier | Setup Fee | Monthly | Delivery |
|------|----------|---------|----------|
| Starter | $997 | $79/mo | 3-5 days |
| Professional | $1,997 | $129/mo | 5-7 days |
| Premium | $2,997 | $199/mo | 10-14 days |
| Cinematic | $4,997 | $249/mo | 10-14 days |

## Design System Quick Reference
- **BG**: #06080C | **BG1**: #0C0F16 | **BG2**: #12151E
- **Blue**: #2887CC | **Cyan**: #5DC4E8 | **Green**: #34D399
- **Text**: #DEE0E7 | **T2**: #7E8396 | **T3**: #474C5E
- **Fonts**: Outfit (sans, 200-800) + Instrument Serif (display)
- **Border radius**: 1.125rem (--r) / 1.5rem (--rr)
- **Easing**: cubic-bezier(.16,1,.3,1)

## How to Resume
```bash
cd "C:\Users\NUCAgent\OneDrive\Projects\black-diamond-cyber"
git pull
claude
# Then say: "Read docs/HANDOFF.md and CLAUDE.md, then continue where we left off"
```

## Dev Server
```bash
# Local dev (port 3005)
pnpm dev

# Or via Claude Preview MCP
# Server name: "bdc" in global .claude/launch.json
```

## Deploy
```bash
# Build check
pnpm run build

# Deploy (use --force due to free tier queue issues)
vercel --prod --force
```
