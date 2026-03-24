# Domain & Email Setup — bd-cyber.com

## Current State (2026-03-23)

- **Domain**: bd-cyber.com
- **Registrar**: Wix (Namecheap transfer pending, order #197806219)
- **Nameservers**: Wix DNS (ns8.wixdns.net, ns9.wixdns.net)
- **A Record**: 76.76.21.21 (Vercel) — site is live and working
- **Email**: blackdiamondcyber@gmail.com via Gmail SMTP (Nodemailer)

## Domain Transfer Steps

### Step 1: Complete Namecheap Transfer
- Check order status: https://www.namecheap.com/myaccount/orders/
- Order #197806219
- Wix may require unlocking the domain and providing an auth/EPP code
- Transfer typically takes 5-7 days after approval

### Step 2: Switch Nameservers to Cloudflare
Once domain is at Namecheap:
1. Create free Cloudflare account (or use existing)
2. Add bd-cyber.com to Cloudflare
3. Cloudflare will assign 2 nameservers (e.g., `adam.ns.cloudflare.com`)
4. Update nameservers at Namecheap dashboard → Domain List → bd-cyber.com → Custom DNS
5. Wait for propagation (up to 48 hours, usually < 4 hours)

### Step 3: Configure Cloudflare DNS Records
```
A     @           76.76.21.21        (Vercel - proxied)
CNAME www         cname.vercel-dns.com (Vercel - proxied)
```

### Step 4: Verify Vercel Domain
In Vercel Dashboard → Settings → Domains:
- bd-cyber.com should already be configured
- After nameserver change, verify it still resolves correctly

## Email Setup (Resend)

### Why Switch from Gmail SMTP?
- Gmail SMTP has rate limits (500/day)
- No custom domain emails (currently sends from @gmail.com)
- Resend provides: @bd-cyber.com emails, higher limits, better deliverability

### Resend Setup Steps
1. Sign up at https://resend.com
2. Add domain: bd-cyber.com
3. Add DNS records to Cloudflare:
   ```
   TXT   resend._domainkey    (provided by Resend)
   TXT   @                    v=spf1 include:resend.dev ~all
   CNAME resend-dkim          (provided by Resend)
   ```
4. Verify domain in Resend dashboard
5. Create API key
6. Update Vercel env: `vercel env add RESEND_API_KEY production`
7. Update `src/lib/email.ts` to use Resend SDK instead of Nodemailer

### Resend Code Migration
Replace Nodemailer with:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Black Diamond Cyber <hello@bd-cyber.com>',
  to: recipientEmail,
  subject: 'Your Subject',
  html: htmlContent,
});
```

## Notes
- Do NOT change nameservers until Namecheap transfer is complete
- Keep Gmail SMTP as fallback until Resend is verified
- RESEND_API_KEY is already set in Vercel production (but not yet used in code)
