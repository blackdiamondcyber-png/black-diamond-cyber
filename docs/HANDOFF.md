# Session Handoff — 2026-03-23 (Session 4)

## Current Task
Black Diamond Cyber (BDC) — AI-powered website design and hosting SaaS for local service businesses. Full Next.js 16 platform with live Stripe payments, Supabase backend, client portal, admin tools, and AI website generator.

## Live URL
**https://bd-cyber.com** (domain registered on Wix, DNS via Wix → Vercel)

## What Was Done This Session (Session 4)

### Email Provider Switch — Resend → Gmail SMTP ✅
- [x] Resend domain verification was blocked (Wix doesn't support subdomain MX records)
- [x] Explored all Wix DNS options — confirmed MX on subdomains is impossible
- [x] Investigated Cloudflare as alternative DNS — added bd-cyber.com to Cloudflare (Free plan)
- [x] All 6 DNS records set up in Cloudflare (A, CNAME, 3x TXT, MX for send subdomain)
- [x] Discovered Wix doesn't allow changing nameservers for Wix-registered domains
- [x] **Switched email from Resend to Nodemailer + Gmail SMTP** — works immediately, no DNS needed
- [x] Created shared `src/lib/email.ts` utility (sendEmail + isEmailConfigured)
- [x] Updated all 3 email-sending routes: contact, audit/run, admin/update-status
- [x] Installed nodemailer + @types/nodemailer
- [x] Set GMAIL_APP_PASSWORD env var in Vercel
- [x] Deployed and tested — emails arrive instantly from blackdiamondcyber@gmail.com ✅

### Domain Transfer — Started, Deferred
- [x] Obtained EPP/authorization code from Wix (sent to person.6.611@gmail.com)
- [x] EPP Code: `]E8Os{~mb@0t` (valid for 7 days from 2026-03-23)
- [ ] Cloudflare requires domain to be "Active" before registrar transfer — chicken-and-egg with Wix
- [ ] **Deferred**: Can transfer to Namecheap or Porkbun later (they don't require pre-activation)
- [ ] Once transferred, point nameservers to Cloudflare → Resend MX record already configured there

### Cloudflare Setup (Partial — Not Active)
- bd-cyber.com added to Cloudflare Free plan
- All DNS records imported + MX record added for Resend
- Nameservers assigned: `javier.ns.cloudflare.com` / `sloan.ns.cloudflare.com`
- Status: **Pending** (nameservers not pointed yet — Wix blocks this)
- Account: blackdiamondcyber@gmail.com

## What Was NOT Done (Carried Forward)

### High Priority — Next Session
1. **Test full purchase end-to-end** — Buy Starter tier, verify: Stripe checkout → webhook → Supabase client creation → dashboard access
2. **Stripe tax registration (Texas)** — Register in Stripe Dashboard → Settings → Tax → Registrations. Also add `automatic_tax: { enabled: true }` to checkout route (`src/app/api/checkout/route.ts`)
3. **Domain transfer to Namecheap/Porkbun** — EPP code expires ~2026-03-30. Transfer from Wix, then point NS to Cloudflare for full DNS control + Resend @bd-cyber.com emails

### Medium Priority
4. **Real audit data** — Google CSE + Places API keys for live ranking/reputation checks
5. **Logo redesign** — Erik wants something less "cartoony"
6. **Admin password** — Move from hardcoded default (`bdc-admin-2026`) to env var

### Lower Priority
7. **Cold email system** — Instantly.ai API key + GitHub Actions cron
8. **SEO reports dashboard** — AgencyAnalytics API integration
9. **Lighthouse performance audit** — Target 90+ score

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
- **Tax registration**: Pending (Texas) — next session priority

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
- **Routes using email**: contact/route.ts, audit/run/route.ts, admin/update-status/route.ts
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
