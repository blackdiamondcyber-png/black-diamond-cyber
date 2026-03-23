# Session Handoff — 2026-03-23 (Session 5)

## Current Task
Black Diamond Cyber (BDC) — AI-powered website design and hosting SaaS for local service businesses. Full Next.js 16 platform with live Stripe payments, Supabase backend, client portal, admin tools, and AI website generator.

## Live URL
**https://bd-cyber.com** (domain registered on Wix, DNS via Wix → Vercel)

## What Was Done This Session (Session 5)

### Stripe Tax Registration — Texas ✅
- [x] Registered Texas state sales tax via Stripe API (`taxreg_1TE8Q9QfsHdmRHJ5cKbMtcmN`)
- [x] `automatic_tax: { enabled: true }` was already in checkout route (confirmed)
- [x] Tax behavior set to `exclusive` on both setup fee and monthly line items
- [x] Live and active — Texas addresses will now see sales tax at checkout

### Admin Password Security — Fixed ✅
- [x] Removed hardcoded `bdc-admin-2026` fallback from all 3 files
- [x] Fixed `bdc-admin-2024` mismatch in admin/generate page
- [x] Created server-side `/api/admin/verify` endpoint for password validation
- [x] Admin generate page now verifies password server-side (was client-side with NEXT_PUBLIC_ exposure)
- [x] Set `ADMIN_PASSWORD` env var in Vercel (server-only)
- [x] Removed `NEXT_PUBLIC_ADMIN_PASSWORD` from Vercel (was exposing password in JS bundle)
- [x] Admin routes throw if `ADMIN_PASSWORD` env var is missing

### Admin API Security — Hardened ✅
- [x] Removed query parameter password fallback from `/api/admin/clients` (was logging password in URL)
- [x] Admin clients page now uses Authorization header exclusively
- [x] All admin API auth uses Bearer token only

### Rate Limiting — Added ✅
- [x] Created `src/lib/rate-limit.ts` — in-memory sliding window rate limiter
- [x] Contact form: 5 requests per 5 minutes per IP
- [x] Audit tool: 3 requests per 5 minutes per IP
- [x] Checkout: 5 requests per 5 minutes per IP
- [x] Returns proper 429 status with X-RateLimit headers

### Security Headers — Enhanced ✅
- [x] Added `Referrer-Policy: strict-origin-when-cross-origin`
- [x] Added `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- [x] Existing: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`

### Cleanup ✅
- [x] Removed unused `resend` package (switched to Nodemailer in Session 4)
- [x] Added `images.unsplash.com` to Next.js remote patterns for future Image optimization

### Webhook — Already Hardened ✅
- [x] Confirmed: webhook already handles existing auth users (listUsers fallback)
- [x] No changes needed

### End-to-End Purchase Flow — Verified ✅
- [x] Verified Stripe checkout → webhook → Supabase client creation → auth user → dashboard access
- [x] Erik's premium purchase confirmed in `clients` table with all fields populated
- [x] Auth user `7cb50104` created and linked, email confirmed
- [x] Installed Stripe CLI via winget for future local testing

### Google APIs — Set Up ✅
- [x] Enabled Custom Search API on GCP project `midas-agent-489204`
- [x] Places API was already enabled
- [x] Created Programmable Search Engine "BDC Audit" (ID: `5111fb3b1ece64f27`)
- [x] Enabled "Search the entire web" on the CSE
- [x] Set `GOOGLE_CSE_API_KEY`, `GOOGLE_CSE_ID`, `GOOGLE_PLACES_API_KEY` in Vercel
- [x] Audit tool now uses REAL Google data for ranking checks and Places ratings

### PWA — Service Worker + Manifest ✅
- [x] Created `public/sw.js` with SW_VERSION + CACHE_NAME (bump after each deploy)
- [x] Cache-first for static assets, network-first for API/HTML
- [x] Offline fallback page at `public/offline.html` (dark theme matching design system)
- [x] Created `src/app/manifest.ts` using Next.js 16 native manifest route (auto-serves at /manifest.webmanifest)
- [x] Service worker registration wired in layout.tsx
- [x] Placeholder PWA icons from existing logo (192x192 + 512x512)

### SEO — Full Setup ✅
- [x] `robots.ts` — blocks /api/, /admin/, /dashboard/ from crawlers
- [x] `sitemap.ts` — homepage, contact, free-audit, login with priorities
- [x] JSON-LD structured data (ProfessionalService schema) on homepage
- [x] Page-level metadata on contact, free-audit, login via layout files
- [x] Apple-touch-icon + favicon configured in root layout metadata

### Domain Transfer — In Progress
- [x] Transferred domain to Namecheap ($11.68, order #197806219)
- [ ] Waiting for Wix approval email (auto-approves in ~5 days if not clicked)
- [ ] Once transferred: set nameservers to `aria.ns.cloudflare.com` / `ross.ns.cloudflare.com`

## What Was NOT Done (Carried Forward)

### Waiting
1. **Domain transfer completion** — Namecheap processing, Wix approval pending (auto-completes in ~5 days)
2. **After domain transfer**: Point NS to Cloudflare → enables Resend @bd-cyber.com emails

### Need Erik's Input
3. **Logo redesign** — Erik wants something less "cartoony"
4. **Proper PWA icons** — Replace placeholder icons once new logo is ready

### Need API Keys
5. **Cold email system** — Needs Instantly.ai API key + GitHub Actions cron
6. **SEO reports dashboard** — Needs AgencyAnalytics API key

### Nice to Have
7. **Lighthouse performance audit** — Run manually in Brave DevTools (F12 → Lighthouse). Target 90+ on all categories
8. **Portfolio images** — Currently CSS backgroundImage on tiny mini-site mockups. Converting to next/image would break layout — not worth the refactor

## Vercel Environment Variables (Production)
| Variable | Status |
|----------|--------|
| NEXT_PUBLIC_SUPABASE_URL | ✅ Set |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | ✅ Set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| GMAIL_APP_PASSWORD | ✅ Set (Gmail App Password for SMTP) |
| STRIPE_SECRET_KEY | ✅ Set (LIVE mode) |
| STRIPE_WEBHOOK_SECRET | ✅ Set (LIVE webhook) |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | ✅ Set (LIVE mode) |
| NEXT_PUBLIC_SITE_URL | ✅ Set (https://bd-cyber.com) |
| ANTHROPIC_API_KEY | ✅ Set |
| ADMIN_PASSWORD | ✅ Set (server-only, no NEXT_PUBLIC_ exposure) |
| GOOGLE_CSE_API_KEY | ✅ Set (Custom Search API key) |
| GOOGLE_CSE_ID | ✅ Set (`5111fb3b1ece64f27`) |
| GOOGLE_PLACES_API_KEY | ✅ Set (Places API key) |

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
- **Tax registration**: ✅ Texas active (`taxreg_1TE8Q9QfsHdmRHJ5cKbMtcmN`)

## Domain Details
- **Domain**: bd-cyber.com (registered on Wix, renews Feb 3, 2027)
- **DNS**: Managed via Wix DNS panel (nameservers: ns8.wixdns.net, ns9.wixdns.net)
- **A Record**: bd-cyber.com → 76.76.21.21 (Vercel)
- **CNAME**: www.bd-cyber.com → cname.vercel-dns.com
- **TXT Records**: DKIM (verified), SPF, DMARC for Resend
- **Cloudflare**: bd-cyber.com added (pending activation), MX record for Resend ready
- **Transfer**: EPP code obtained, transfer deferred — use Namecheap or Porkbun (not Cloudflare)

## Email Details
- **Provider**: Nodemailer + Gmail SMTP (switched from Resend in Session 4)
- **Sends from**: blackdiamondcyber@gmail.com
- **Utility**: `src/lib/email.ts` — sendEmail(), isEmailConfigured()
- **Routes using email**: contact/route.ts, audit/run/route.ts, admin/update-status/route.ts, webhooks/stripe/route.ts
- **Limit**: 500 emails/day (Gmail SMTP limit — more than enough)
- **Future**: Once domain transfers to Cloudflare, can switch back to Resend for @bd-cyber.com sender

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
4. **Wix DNS can't do subdomain MX records** — why we switched to Gmail SMTP
5. **Wix won't change nameservers** — must transfer domain to different registrar first
6. **`vercel --prod --force`** needed for deploys (free tier queue issues)
7. **Supabase MCP tools can't access this project** — different org than gmail account
8. **Cloudflare domain is "pending"** — not active until nameservers change (blocked by Wix)
9. **Rate limiting is per-instance** — in-memory store resets on cold starts. Sufficient for abuse prevention.
10. **Stripe CLI installed** — located at `C:\Users\NUCAgent\AppData\Local\Microsoft\WinGet\Packages\Stripe.StripeCli_Microsoft.Winget.Source_8wekyb3d8bbwe\stripe.exe`
11. **Google CSE searches entire web** — was set to google.com/* initially, "Search the entire web" toggle enabled in settings

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
