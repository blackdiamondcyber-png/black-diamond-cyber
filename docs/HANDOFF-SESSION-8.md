# Session Handoff — 2026-03-23 (For Session 8)

## Resume Command
```bash
cd "C:\Users\Eriks G7\Projects\black-diamond-cyber"
pnpm install
claude
# Say: "Read docs/HANDOFF-SESSION-8.md and docs/plans/2026-03-23-competitive-gap-implementation.md, then implement all the competitive gap features"
```

## What Was Completed in Sessions 6-7

### Session 6 (NUC machine)
- Full website overhaul: Growth/Dominate pricing tiers, competitive analysis of 30+ companies
- 18 files modified, all sections repositioned as growth system provider
- Deployed to bd-cyber.com

### Session 7 (G7 machine)
- Cloned repo to G7, set up environment (Vercel env pull, pnpm install)
- **3 industry landing pages**: /dental, /hvac, /plumbing (shared IndustryPage + industry-data.ts)
- **Automation demos page**: /admin/demos with 3 workflow visualizations
- **Premium redesign**: Installed taste-skill (7 sub-skills) + Framer Motion
  - Hero: scroll-linked parallax, staggered reveals, magnetic CTAs, animated counters, video bg slot
  - Services: 3D tilt cards with mouse-tracking, glare overlay
  - WhyBDCyber: counter animations, hover glow, responsive grid fix
  - HowItWorks: vertical scroll-linked progress line, step animations
  - CTA: Framer Motion entrance, magnetic buttons
- **New reusable components**: VideoBackground, AnimatedCounter, MagneticButton
- **Global**: prefers-reduced-motion a11y media query
- **Domain research**: bd-cyber.com on Wix DNS → Vercel IP (transfer pending at Namecheap)
- **Competitive gap analysis**: Scraped 6 competitors, wrote comprehensive feature matrix
- **Midas briefing**: Full status doc in Obsidian vault
- Committed and pushed to GitHub: `b1a5ab3`

## What Needs to Be Done (Session 8)

**Full implementation plan**: `docs/plans/2026-03-23-competitive-gap-implementation.md`

### Phase 1: Quick Wins (All Pure Code, No Dependencies)
1. **Rotating hero keywords** — Cycle through "Dental Practices", "HVAC Companies", etc. in headline
2. **FAQ accordion** — 8 expandable questions between Reviews and CTA
3. **Yearly/monthly pricing toggle** — 15% savings on yearly
4. **Cost comparison visual** — "Replace 7 tools with one plan" section
5. **Client/tech logo marquee** — Next.js, React, Vercel, Supabase, Stripe logos
6. **Feature comparison matrix** — BD Cyber vs Agency vs DIY builder grid
7. **Comparison landing pages** — /vs-wix, /vs-gargle, /vs-agencies (SEO)

### Phase 2: Interactive Conversion Tools
8. **ROI calculator** — Prospects enter numbers, see projected revenue increase
9. **Embedded calendar booking** — Cal.com embed (needs Erik's account)
10. **Live chat widget** — Crisp or Tawk.to (needs Erik's account)

### Phase 3: Content & Trust
11. **Trust badge section** — Tech logos + future certifications
12. **Blog infrastructure** — MDX or Supabase-backed blog with 5 initial articles
13. **Lead magnet PDF** — Email capture for downloadable guide
14. **Case study templates** — Ready for real client data

### Phase 4: Authority
15. **GEO optimization page** — Differentiation feature
16. **Template gallery** — Browsable designs by industry

## Key Architectural Decisions
- **Framer Motion everywhere** — All new interactive components use Framer Motion (already installed v12.38)
- **'use client' isolation** — Only components needing interactivity (FAQ, ROI calc, pricing toggle)
- **Inline styles for grids** — Tailwind v4 purges custom CSS classes
- **AnimatedCounter reuse** — Already built, use for ROI calc and pricing transitions
- **MagneticButton reuse** — Already built, use on all new CTAs

## Current File Structure (Key Files)
```
src/components/
├── Hero.tsx            # 'use client' — Framer Motion, parallax, magnetic CTAs
├── Services.tsx        # 'use client' — 3D tilt cards
├── WhyBDCyber.tsx      # 'use client' — Counter animations
├── HowItWorks.tsx      # 'use client' — Scroll progress line
├── CTA.tsx             # 'use client' — Framer entrance, magnetic buttons
├── Pricing.tsx         # 'use client' — Tabbed layout (modify for toggle)
├── Portfolio.tsx       # Server component — 8 mini-site cards
├── Reviews.tsx         # Server component — 6 testimonials
├── Founder.tsx         # Server component — Erik bio
├── Nav.tsx             # Server component — fixed navbar
├── Footer.tsx          # Server component — 5-column footer
├── ContactModal.tsx    # 'use client' — Zod-validated form
├── BookingHandler.tsx  # 'use client' — #book link interceptor
├── IndustryPage.tsx    # Server component — shared industry landing page
├── VideoBackground.tsx # 'use client' — video bg with gradient fallback
├── AnimatedCounter.tsx # 'use client' — count-up on scroll
├── MagneticButton.tsx  # 'use client' — cursor-following spring button
```

## Environment
- **Machine**: G7 (Windows 11)
- **Node**: Latest LTS
- **pnpm**: v10.30.3
- **Dev server**: port 3011 (launch.json name: "bdc")
- **Vercel team**: team_XkGY68ItT13s4sukxCnfllAg
- **Vercel project**: prj_30E6lpeSrJnp7iPlJz8n8Idbjip8
- **All env vars**: Pulled from Vercel production (15+ vars in .env.local)

## Things to Ask Erik For
- Cal.com account + embed URL (for embedded booking)
- Crisp/Tawk.to account + embed code (for live chat)
- Real client video testimonials (when available)
- Real client revenue/patient metrics (for case studies)
- Headshot photo (Founder section still uses EP monogram)
- Kling 3.0 / Higgsfield video outputs (drop into public/videos/hero.mp4)

## Gotchas
1. Tailwind v4 purges custom CSS classes — use inline styles or `<style>` tags with IDs
2. Framer Motion ease arrays need `as const` for TypeScript
3. Stripe SDK pinned to v17 (v20 breaks on Vercel serverless)
4. Zod v4 uses `.issues` not `.errors`
5. Growth/Dominate tiers use contact modal, not Stripe checkout
6. `vercel --prod --force` for deploys (free tier queue)
7. All portfolio items are fictional (Unsplash stock photos)
8. Domain still on Wix DNS (Namecheap transfer pending, order #197806219)
