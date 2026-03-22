# Session Handoff — 2026-03-22

## Current Task
Black Diamond Cyber (BDC) — AI-powered website design and hosting SaaS for local service businesses. Full Next.js 16 platform with Stripe payments, Supabase backend, client portal, and admin tools.

## Live URL
**https://bd-cyber.com** (domain via Wix DNS → Vercel)

## What Was Built This Session (Session 2)

### Stripe Payments — FULLY WORKING
- [x] Stripe account created (sandbox/test mode)
- [x] All 3 keys deployed to Vercel: secret, publishable, webhook secret
- [x] Pricing buttons wired to Stripe Checkout (PricingButton.tsx)
- [x] Webhook endpoint updated to `https://bd-cyber.com/api/webhooks/stripe`
- [x] Test purchase completed successfully (Premium tier, $3,196 + $199/mo)
- [x] Webhook auto-creates Supabase Auth user after checkout

### Client Portal
- [x] Login page with Supabase Magic Link (OTP) auth (`/login`)
- [x] Auth callback handler (`/auth/callback`)
- [x] Middleware protecting `/dashboard/*` routes
- [x] Dashboard with 9 cards: status tracker, checklist, subscription, website, help, prep, timeline, features, photos
- [x] Status-driven UI (in_progress → review → live) with visual timeline
- [x] Photo upload page (`/dashboard/photos`) — drag-and-drop, Supabase Storage
- [x] LogoutButton component

### Admin Tools
- [x] Admin clients page (`/admin/clients`) — view all clients, update project status
- [x] Status update API (`/api/admin/update-status`) — sends branded email notifications
- [x] Auto-email on status change (review ready, site live)

### Homepage Enhancements
- [x] Services section — 5 categories (Websites, App Dev, Automation, SEO, AI Integration)
- [x] Services nav link added
- [x] Success modal after Stripe purchase (shows tier, next steps, "Got It" button)

### Email Automation
- [x] Auto-email after free audit — HTML results email to lead + admin notification
- [x] Status change emails — "Ready for Review" and "Your Site is Live" branded emails
- [x] Resend DNS records added to Wix (DKIM, SPF, DMARC) — pending verification

### Domain & Infrastructure
- [x] bd-cyber.com connected via Wix DNS (A record → 76.76.21.21, CNAME www → cname.vercel-dns.com)
- [x] NEXT_PUBLIC_SITE_URL updated to https://bd-cyber.com
- [x] STRIPE_WEBHOOK_SECRET added to Vercel
- [x] Mobile responsive polish (768px tablet breakpoint, 85vw viewport-relative cards)

### Database Changes (run via Supabase SQL Editor)
- [x] `project_status` column added to clients table
- [x] `project_status_updated_at` column added
- [x] `auth_user_id` column added (links to Supabase Auth)
- [x] `client-uploads` storage bucket created with RLS policies

## Files Added/Modified This Session

### New Components
- `src/components/Services.tsx` — 5 service category cards
- `src/components/PricingButton.tsx` — ('use client') Stripe checkout trigger
- `src/components/SuccessModal.tsx` — ('use client') Post-purchase thank you modal
- `src/components/LogoutButton.tsx` — ('use client') Dashboard logout

### New Pages
- `src/app/login/page.tsx` — Magic link login
- `src/app/auth/callback/route.ts` — Supabase auth callback
- `src/app/dashboard/page.tsx` — Client dashboard (9 cards, status-driven)
- `src/app/dashboard/layout.tsx` — Dashboard nav + auth guard
- `src/app/dashboard/photos/page.tsx` — Photo upload (drag-and-drop)
- `src/app/admin/clients/page.tsx` — Admin client management

### New API Routes
- `src/app/api/admin/clients/route.ts` — List all clients
- `src/app/api/admin/update-status/route.ts` — Update project status + email
- `src/app/api/photos/list/route.ts` — List client photos (signed URLs)
- `src/app/api/photos/delete/route.ts` — Delete client photo

### New Libraries
- `src/lib/supabase-server.ts` — createServerSupabase() for SSR auth
- `src/middleware.ts` — Auth protection for /dashboard routes

### Modified Files
- `src/app/page.tsx` — Added Services, SuccessModal
- `src/app/globals.css` — Services grid, 768px breakpoint, mobile card fixes
- `src/components/Nav.tsx` — Added Services link
- `src/components/Pricing.tsx` — PricingButton instead of anchor tags
- `src/app/api/checkout/route.ts` — bd-cyber.com URLs
- `src/app/api/webhooks/stripe/route.ts` — Auto-create auth user after checkout
- `src/app/api/audit/run/route.ts` — Auto-email results to lead + admin
- `src/app/free-audit/page.tsx` — Mobile audit-results-row class

## Vercel Environment Variables (Production)
| Variable | Status |
|----------|--------|
| NEXT_PUBLIC_SUPABASE_URL | ✅ Set |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | ✅ Set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| RESEND_API_KEY | ✅ Set |
| STRIPE_SECRET_KEY | ✅ Set (test mode) |
| STRIPE_WEBHOOK_SECRET | ✅ Set |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | ✅ Set (test mode) |
| NEXT_PUBLIC_SITE_URL | ✅ Set (https://bd-cyber.com) |
| ANTHROPIC_API_KEY | ❌ Not set |
| ADMIN_PASSWORD | ❌ Uses default: bdc-admin-2026 |

## Supabase Details
- **Account**: pearson_403@hotmail.com (SEPARATE from gmail Supabase org)
- **Project ID**: yudxkwlceagkcerugatv
- **Region**: us-east-1
- **URL**: https://yudxkwlceagkcerugatv.supabase.co
- **Tables**: clients (with project_status, auth_user_id), contact_submissions
- **Storage**: client-uploads bucket (private, RLS per user)
- **Auth**: Magic link (OTP) enabled
- **Note**: MCP Supabase tools CANNOT access this project (wrong org)

## Stripe Details
- **Account**: New business sandbox (test mode)
- **Webhook URL**: https://bd-cyber.com/api/webhooks/stripe
- **Events**: checkout.session.completed, customer.subscription.deleted
- **Test card**: 4242 4242 4242 4242, any expiry/CVC

## Domain Details
- **Domain**: bd-cyber.com (registered on Wix)
- **DNS**: Managed via Wix DNS panel
- **A Record**: bd-cyber.com → 76.76.21.21 (Vercel)
- **CNAME**: www.bd-cyber.com → cname.vercel-dns.com
- **TXT Records**: DKIM, SPF, DMARC for Resend (pending verification)
- **Note**: Wix doesn't support subdomain MX records — Resend SPF may not fully verify

## GitHub / Vercel Details
- **GitHub**: https://github.com/blackdiamondcyber-png/black-diamond-cyber
- **GitHub username**: blackdiamondcyber-png
- **GitHub email**: blackdiamondcyber@gmail.com
- **Vercel Team**: team_XkGY68ItT13s4sukxCnfllAg ("Erik's projects")
- **Vercel Project**: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8
- **Live URL**: https://bd-cyber.com
- **Old URL**: https://black-diamond-cyber.vercel.app (still works)

## Known Issues / Gotchas
1. **vercel.json MUST have framework + outputDirectory** — Vercel cached old static config
2. **Zod v4 uses `.issues` not `.errors`** on ZodError objects
3. **Resend domain pending** — emails come from onboarding@resend.dev until verified
4. **Wix doesn't support subdomain MX** — Resend SPF may not fully verify
5. **Stripe in test mode** — switch to live keys when ready for real payments
6. **`vercel --prod --force`** needed for deploys (free tier queue issues)
7. **Supabase MCP tools can't access this project** — different org than gmail account

## Remaining Work (Priority Order)

### High Priority — Revenue Ready
1. **Switch Stripe to live mode** — Get live keys from Stripe Dashboard, swap on Vercel
2. **Check Resend domain verification** — May have propagated by now, check resend.com/domains
3. **Dashboard enhancements** — More helpful resources, "things to consider" content, richer status details

### Medium Priority — Feature Expansion
4. **Anthropic API key** → Unlocks /admin/generate AI website builder
5. **Real audit data** — Google CSE + Places API keys for live ranking/reputation
6. **Logo redesign** — Erik wants something less "cartoony"

### Lower Priority — Scale
7. **Cold email system** — Instantly.ai API key + GitHub Actions cron
8. **SEO reports dashboard** — AgencyAnalytics API integration
9. **Lighthouse performance audit** — Target 90+ score

## How to Resume
```bash
cd "C:\Users\NUCAgent\OneDrive\Projects\black-diamond-cyber"
git pull
claude
# Say: "Read docs/HANDOFF.md and CLAUDE.md, then continue where we left off"
```

## Dev Server
```bash
pnpm dev  # port 3005
# Or via Claude Preview MCP — server name: "bdc"
```

## Deploy
```bash
pnpm run build
vercel --prod --force
```

## Pricing Reference
| Tier | Setup | Monthly | Delivery |
|------|-------|---------|----------|
| Starter | $997 | $79/mo | 3-5 days |
| Professional | $1,997 | $129/mo | 5-7 days |
| Premium | $2,997 | $199/mo | 10-14 days |
| Cinematic | $4,997 | $249/mo | 10-14 days |

## Design System
- **BG**: #06080C | **BG1**: #0C0F16 | **BG2**: #12151E
- **Blue**: #2887CC | **Cyan**: #5DC4E8 | **Green**: #34D399
- **Text**: #DEE0E7 | **T2**: #7E8396 | **T3**: #474C5E
- **Fonts**: Outfit (sans) + Instrument Serif (display)
- **Radius**: 1.125rem / 1.5rem
- **Easing**: cubic-bezier(.16,1,.3,1)
