# Session Handoff — 2026-03-23 (Session 6)

## Current Task
Black Diamond Cyber website overhaul — restructured pricing, added automation/growth service tiers, updated all sections to position BD Cyber as a full growth system provider (not just a website builder). Competitive analysis against Nick Saraev (LeftClick), Wix, and 12+ dental marketing agencies informed all changes.

## Live URL
**https://bd-cyber.com** (deployed via `vercel --prod --force`)

## Status — Session 6

### Completed This Session
- [x] **Competitive analysis** — Researched 30+ AI website builders, 12 dental-specific agencies, Wix Harmony, and Nick Saraev's LeftClick/Maker School business model
- [x] **New service tiers** — Added Growth ($2,997 setup + $497/mo) and Dominate ($4,997 setup + $1,497/mo) with full automation feature sets
- [x] **Types & schemas** — Added `ServiceTier`, `AllTiers`, `ServiceTierConfig`, `SERVICE_TIERS` to types/index.ts
- [x] **Pricing rewrite** — Tabbed layout ("Websites" | "Growth Systems") with comparison table (BD Cyber vs. typical agency)
- [x] **Services rewrite** — 6 cards in 3x2 grid: AI Websites, AI Chatbots, Review Automation, Lead Nurture, Local SEO & GEO, Analytics
- [x] **WhyBDCyber section** — NEW component with 4-card competitive comparison (vs. Wix, agencies, templates, doing nothing)
- [x] **Hero update** — New headline "Websites & Growth Systems", cyan tagline, "Book Free Strategy Call" CTA
- [x] **CTA update** — "Ready to Stop Losing Customers to Competitors?", strategy call + free audit dual CTAs
- [x] **Portfolio update** — "Results That Speak" headline, industry filter tags, bolder metrics
- [x] **TrustBar update** — Added "Own Your Website Code" badge
- [x] **Reviews update** — Industry tags (Dental, HVAC, etc.) + "Verified" badge on all 6 reviews
- [x] **Founder update** — Updated badges (15+ Years, AI-Certified, 127+ Sites), tech stack logos row
- [x] **Nav update** — "Free Strategy Call" button, added "Growth" link
- [x] **Footer update** — Growth Systems column, AI Automation link, trust badges (No Contracts, Own Your Website, Cancel Anytime)
- [x] **CSS updates** — Services grid changed from 5-col to 3-col, responsive breakpoints updated
- [x] **JSON-LD update** — Added AI Automation, Lead Generation, Review Management to serviceType
- [x] **Build passed** — Zero TypeScript errors
- [x] **Deployed to production** — Live at https://bd-cyber.com

### Not Done (Carried Forward)
- [ ] **Automation infrastructure** — n8n workflows, Twilio SMS, review automation (build when first Growth client signs)
- [ ] **Real visual assets** — All portfolio items still use Unsplash stock + fictional businesses. Swap in real client work as it comes
- [ ] **Erik's headshot** — Founder section still uses "EP" monogram
- [ ] **Video content** — No hero background video or case study videos yet
- [ ] **Industry landing pages** — /dental, /hvac, /plumbing (for SEO targeting)
- [ ] **Blog section** — Placeholder in footer links, not built
- [ ] **Domain transfer** — Still on Wix, Namecheap transfer pending (order #197806219)
- [ ] **Cold email system** — Needs Instantly.ai API key
- [ ] **SEO reports dashboard** — Needs AgencyAnalytics API key

## Decisions Made
- **Marketing pages first** — Sell Growth/Dominate tiers before building actual automation infrastructure (n8n, Twilio, etc.)
- **Keep website tiers + add automation tiers** — Existing 4 website tiers ($997-$4,997) kept as-is; Growth ($497/mo) and Dominate ($1,497/mo) added on top
- **Growth/Dominate use contact modal, not Stripe checkout** — These are consultation-first sales; checkout schema kept restricted to website tiers only
- **Generate all visual assets** — AI mockups and device frames rather than waiting for real client work
- **Inline grid styles for new components** — Tailwind v4 purges custom CSS classes not in its content scan; inline styles work reliably for new grid layouts (WhyBDCyber, Growth pricing grid)
- **Nick Saraev model adapted** — His LeftClick agency ($5K-50K projects for B2B) repackaged as lower-price-higher-volume for local businesses

## Files Modified This Session (18 files)
- `src/types/index.ts` — Added ServiceTier, AllTiers, ServiceTierConfig, SERVICE_TIERS (Growth/Dominate)
- `src/lib/schemas.ts` — Checkout schema kept at 4 website tiers only (Growth/Dominate use consultation flow)
- `src/components/Pricing.tsx` — **Major rewrite**: 'use client', tabbed layout, Growth Systems tab with comparison table
- `src/components/Services.tsx` — **Major rewrite**: 6 service cards with feature checklists, automation focus
- `src/components/WhyBDCyber.tsx` — **New file**: 4-card competitive comparison section
- `src/components/Hero.tsx` — Updated headline, added cyan tagline, changed CTA text
- `src/components/CTA.tsx` — Updated copy, dual CTAs (strategy call + free audit)
- `src/components/Portfolio.tsx` — Updated headline, added industry tags, bolder result metrics
- `src/components/TrustBar.tsx` — Added "Own Your Website Code" badge
- `src/components/Reviews.tsx` — Added industry + verified badges to all 6 reviews
- `src/components/Founder.tsx` — Updated badges, added tech stack row
- `src/components/Nav.tsx` — "Free Strategy Call" CTA, added "Growth" link
- `src/components/Footer.tsx` — Growth Systems column, updated description, trust badges
- `src/app/page.tsx` — Added WhyBDCyber import/placement, updated JSON-LD
- `src/app/globals.css` — Services grid 5→3 col, added why-grid/growth-grid classes, updated responsive breakpoints
- `src/app/layout.tsx` — Minor updates (scroll reveal script from earlier fix)

## New Pricing Structure

### Website Tiers (Stripe checkout)
| Tier | Setup | Monthly | Delivery |
|------|-------|---------|----------|
| Starter | $997 | $79/mo | 3-5 days |
| Professional | $1,997 | $129/mo | 5-7 days |
| Premium | $2,997 | $199/mo | 10-14 days |
| Cinematic | $4,997 | $249/mo | 10-14 days |

### Growth System Tiers (Consultation-first, no direct checkout)
| Tier | Setup | Monthly | Includes |
|------|-------|---------|----------|
| Growth | $2,997 | $497/mo | Professional website + review automation + missed call text-back + appointment reminders + GBP optimization |
| Dominate | $4,997 | $1,497/mo | Everything in Growth + AI chatbot + lead nurture + reputation mgmt + Google Ads + competitor monitoring + dedicated Slack |

## Competitive Intelligence Summary
Research documents were generated by subagents and stored in context. Key findings:
- **No dental agency uses AI for website generation** — BD Cyber is alone in this space
- **Wix sites**: 5.7-6.8s LCP vs. BD Cyber's sub-2s (major selling point)
- **Only Gargle and DocSites** offer no-contract dental marketing (BD Cyber's differentiator)
- **Nick Saraev's model**: YouTube → free courses → $184/mo Skool community → $5K-50K agency projects. BD Cyber adapts the agency side for local businesses at lower price points
- **Market gap**: No one offers AI website + AI automation bundled for local businesses at the $497-$1,497/mo price point

## Vercel Environment Variables (Production)
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

## Known Issues / Gotchas
1. **Tailwind v4 purges custom CSS classes** — New grid classes (.why-grid, .growth-grid) were purged by Tailwind v4's content scan. Switched to inline styles. Existing classes (.svcs, .pgrid, .steps) work because they were in the original CSS before Tailwind was added.
2. **vercel env add MUST use printf pipe** — echo/heredoc adds trailing \n that breaks API keys
3. **Stripe SDK v17 required** — v20 has connection issues with Vercel serverless
4. **Zod v4 uses `.issues` not `.errors`** on ZodError objects
5. **`vercel --prod --force`** needed for deploys (free tier queue issues)
6. **Supabase MCP tools can't access this project** — different org than gmail account
7. **Rate limiting is per-instance** — in-memory store resets on cold starts
8. **Growth/Dominate tiers have no Stripe products yet** — they use consultation flow (contact modal), not direct checkout
9. **All portfolio items are fictional** — 8 fake businesses with Unsplash photos. Need real client work ASAP
10. **WhyBDCyber 4-col grid** — Uses inline CSS, so it doesn't collapse to 2-col on tablet. Works fine visually but is always 4-col until viewport is very narrow and columns naturally compress.

## Remaining Work (Priority Order)
1. **Get 1-2 beta clients on Growth tier** — Use their results as case studies, swap out fictional portfolio
2. **Build automation demo stack** — One n8n instance with missed-call-textback + review request workflow for sales demos
3. **Erik's real headshot** — Replace EP monogram in Founder section
4. **Industry landing pages** — /dental, /hvac, /plumbing with targeted SEO copy
5. **Video content** — Screen recording of demo sites for hero background
6. **Complete domain transfer** — Wix → Namecheap → Cloudflare nameservers → Resend @bd-cyber.com emails
7. **Cold email system** — Apify lead scraping + AI personalized outreach (needs Instantly.ai key)

## Context the Next Session Needs
- **CLAUDE.md** at project root has full stack details, file structure, and conventions
- **Pricing.tsx is now 'use client'** — uses useState for tab switching
- **WhyBDCyber.tsx is a server component** — uses inline grid styles (not CSS classes) due to Tailwind v4 purging
- **SERVICE_TIERS in types/index.ts** — separate from TIERS (website tiers). Growth/Dominate don't have stripePriceId fields
- **The comparison table in Pricing.tsx** uses inline table styles — will need CSS class extraction if it grows
- **Scroll reveal** — layout.tsx has MutationObserver + IntersectionObserver for .rv elements, plus CSS fallback animation at 3s

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

## Key URLs
- **Live**: https://bd-cyber.com
- **GitHub**: https://github.com/blackdiamondcyber-png/black-diamond-cyber
- **Supabase**: https://yudxkwlceagkcerugatv.supabase.co
- **Vercel Team**: team_XkGY68ItT13s4sukxCnfllAg
- **Vercel Project**: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8

## Design System
- **BG**: #06080C | **BG1**: #0C0F16 | **BG2**: #12151E
- **Blue**: #2887CC | **Cyan**: #5DC4E8 | **Green**: #34D399
- **Text**: #DEE0E7 | **T2**: #7E8396 | **T3**: #474C5E
- **Fonts**: Outfit (sans, 300/500/600/700) + Instrument Serif (display, regular + italic)
- **Dark theme locked** — no light mode
