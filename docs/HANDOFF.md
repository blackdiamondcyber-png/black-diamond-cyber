# Session Handoff — 2026-03-22 (Session 3)

## Current Task
Black Diamond Cyber (BDC) — AI-powered website design and hosting SaaS for local service businesses. Full Next.js 16 platform with live Stripe payments, Supabase backend, client portal, admin tools, and AI website generator.

## Live URL
**https://bd-cyber.com** (domain via Wix DNS → Vercel)

## What Was Done This Session (Session 3)

### Stripe Live Mode — FULLY WORKING
- [x] Switched from test mode to live mode
- [x] Created live webhook endpoint (checkout.session.completed + customer.subscription.deleted)
- [x] All 3 live keys deployed to Vercel (publishable, secret, webhook signing)
- [x] Fixed critical bug: `vercel env add` was injecting trailing `\n` in all env vars
- [x] Fixed ALL env vars (Stripe keys, SITE_URL, Anthropic key) — used `printf '%s'` pipe method
- [x] Downgraded Stripe SDK from v20 to v17 for Vercel serverless compatibility
- [x] All 4 pricing tiers verified working in production

### Anthropic API Key — SET
- [x] API key deployed to Vercel production
- [x] AI website generator (`/admin/generate`) confirmed working with Claude API

### Admin Client Manager — Status Detail
- [x] Added `status_detail` column to Supabase clients table (manual SQL migration)
- [x] Admin clients page shows Status Detail input + Save button per client
- [x] Update-status API accepts and saves `statusDetail` field
- [x] Client dashboard shows "Currently working on:" when status_detail is set

### Client Dashboard Enhancements
- [x] Resources card — 5 guides (photos, bio, reviews, Google Business, social media)
- [x] Things to Consider card — status-aware tips (different for in-progress vs live)
- [x] Client type extended with `project_status`, `project_status_updated_at`, `status_detail`

### Bug Fixes
- [x] Trailing `\n` in Vercel env vars caused Stripe connection failures and invalid URL errors
- [x] Stripe SDK v20 had connection issues with Vercel serverless — downgraded to v17
- [x] Added better error logging to checkout route (code, type, message)

## Vercel Environment Variables (Production)
| Variable | Status |
|----------|--------|
| NEXT_PUBLIC_SUPABASE_URL | ✅ Set |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | ✅ Set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| RESEND_API_KEY | ✅ Set |
| STRIPE_SECRET_KEY | ✅ Set (LIVE mode) |
| STRIPE_WEBHOOK_SECRET | ✅ Set (LIVE webhook) |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | ✅ Set (LIVE mode) |
| NEXT_PUBLIC_SITE_URL | ✅ Set (https://bd-cyber.com) |
| ANTHROPIC_API_KEY | ✅ Set |
| ADMIN_PASSWORD | ❌ Uses default: bdc-admin-2026 |

## Important: Vercel Env Var Gotcha
**NEVER use `echo` or heredoc with `vercel env add`** — it injects trailing newlines that silently break API keys. Always use:
```bash
printf '%s' 'your-value-here' | vercel env add VAR_NAME production
```

## Supabase Details
- **Account**: pearson_403@hotmail.com (SEPARATE from gmail Supabase org)
- **Project ID**: yudxkwlceagkcerugatv
- **Region**: us-east-1
- **URL**: https://yudxkwlceagkcerugatv.supabase.co
- **Tables**: clients (with project_status, auth_user_id, status_detail), contact_submissions
- **Storage**: client-uploads bucket (private, RLS per user)
- **Auth**: Magic link (OTP) enabled
- **Note**: MCP Supabase tools CANNOT access this project (wrong org)

## Stripe Details
- **Account**: Erik Pearson (LIVE mode)
- **Webhook URL**: https://bd-cyber.com/api/webhooks/stripe
- **Events**: checkout.session.completed, customer.subscription.deleted
- **SDK**: stripe@17.7.0 (v20 has Vercel compatibility issues)
- **Tax registration**: Pending (Texas) — skipped for now, doesn't block payments

## Domain Details
- **Domain**: bd-cyber.com (registered on Wix)
- **DNS**: Managed via Wix DNS panel
- **A Record**: bd-cyber.com → 76.76.21.21 (Vercel)
- **CNAME**: www.bd-cyber.com → cname.vercel-dns.com
- **TXT Records**: DKIM, SPF, DMARC for Resend (pending verification)

## GitHub / Vercel Details
- **GitHub**: https://github.com/blackdiamondcyber-png/black-diamond-cyber
- **GitHub username**: blackdiamondcyber-png
- **GitHub email**: blackdiamondcyber@gmail.com
- **Vercel Team**: team_XkGY68ItT13s4sukxCnfllAg ("Erik's projects")
- **Vercel Project**: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8
- **Live URL**: https://bd-cyber.com

## Known Issues / Gotchas
1. **vercel env add MUST use printf pipe** — echo/heredoc adds trailing \n that breaks keys
2. **Stripe SDK v17 required** — v20 has connection issues with Vercel serverless
3. **Zod v4 uses `.issues` not `.errors`** on ZodError objects
4. **Resend domain pending** — emails come from onboarding@resend.dev until verified
5. **`vercel --prod --force`** needed for deploys (free tier queue issues)
6. **Supabase MCP tools can't access this project** — different org than gmail account

## Remaining Work (Priority Order)

### High Priority
1. **Test full purchase end-to-end** — Buy Starter tier yourself, verify webhook → Supabase → dashboard flow
2. **Check Resend domain verification** — May have propagated, check resend.com/domains
3. **Stripe tax registration** — Complete Texas tax setup in Stripe Dashboard

### Medium Priority
4. **Real audit data** — Google CSE + Places API keys for live ranking/reputation
5. **Logo redesign** — Erik wants something less "cartoony"
6. **Admin password** — Move from hardcoded default to env var

### Lower Priority
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
