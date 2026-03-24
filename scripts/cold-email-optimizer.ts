/**
 * Cold Email Optimizer — Black Diamond Cyber
 *
 * Automated cold email campaign optimizer that:
 * 1. Pulls campaign performance data from Instantly.ai
 * 2. Analyzes open rates, reply rates, and engagement patterns
 * 3. Uses Claude to generate optimized email variants
 * 4. Pushes winning variants back to Instantly.ai
 *
 * Prerequisites:
 * - INSTANTLY_API_KEY in .env
 * - ANTHROPIC_API_KEY in .env
 *
 * Usage:
 *   npx tsx scripts/cold-email-optimizer.ts
 */

import Anthropic from '@anthropic-ai/sdk';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CampaignData {
  campaignId: string;
  name: string;
  emails: EmailVariant[];
  stats: CampaignStats;
}

interface EmailVariant {
  id: string;
  subject: string;
  body: string;
  openRate: number;
  replyRate: number;
  sendCount: number;
}

interface CampaignStats {
  totalSent: number;
  totalOpens: number;
  totalReplies: number;
  overallOpenRate: number;
  overallReplyRate: number;
}

interface GeneratedVariant {
  subject: string;
  body: string;
  rationale: string;
}

// ---------------------------------------------------------------------------
// Instantly.ai Integration (placeholder)
// ---------------------------------------------------------------------------

/**
 * Pull campaign performance data from Instantly.ai API.
 *
 * Replace this with actual Instantly.ai API calls:
 *   GET https://api.instantly.ai/api/v1/campaign/list
 *   GET https://api.instantly.ai/api/v1/analytics/campaign/summary
 *
 * Requires: INSTANTLY_API_KEY environment variable
 */
async function pullCampaignData(): Promise<CampaignData[]> {
  const _apiKey = process.env.INSTANTLY_API_KEY;
  if (!_apiKey) {
    throw new Error('Missing INSTANTLY_API_KEY environment variable');
  }

  // TODO: Replace with actual API calls
  // const response = await fetch('https://api.instantly.ai/api/v1/campaign/list', {
  //   headers: { Authorization: `Bearer ${apiKey}` },
  // });
  // const campaigns = await response.json();

  // Placeholder return — replace with real data
  return [
    {
      campaignId: 'placeholder-campaign-001',
      name: 'Dental Practices — Website Redesign',
      emails: [
        {
          id: 'var-a',
          subject: 'Your dental website is costing you patients',
          body: 'Hi {{firstName}},\n\nI noticed your practice website might be turning away potential patients...',
          openRate: 0.42,
          replyRate: 0.03,
          sendCount: 500,
        },
        {
          id: 'var-b',
          subject: '{{firstName}}, quick question about {{companyName}}',
          body: 'Hi {{firstName}},\n\nI was looking at {{companyName}} online and had a thought...',
          openRate: 0.38,
          replyRate: 0.05,
          sendCount: 500,
        },
      ],
      stats: {
        totalSent: 1000,
        totalOpens: 400,
        totalReplies: 40,
        overallOpenRate: 0.4,
        overallReplyRate: 0.04,
      },
    },
  ];
}

/**
 * Analyze campaign performance and identify optimization opportunities.
 *
 * Uses Claude to evaluate what's working and what isn't based on
 * open rates, reply rates, and email content patterns.
 */
async function analyzePerformance(
  anthropic: Anthropic,
  campaigns: CampaignData[],
): Promise<string> {
  const campaignSummary = campaigns
    .map((c) => {
      const variants = c.emails
        .map(
          (e) =>
            `  - "${e.subject}" — Open: ${(e.openRate * 100).toFixed(1)}%, Reply: ${(e.replyRate * 100).toFixed(1)}%, Sent: ${e.sendCount}`,
        )
        .join('\n');
      return `Campaign: ${c.name}\nOverall: ${(c.stats.overallOpenRate * 100).toFixed(1)}% open, ${(c.stats.overallReplyRate * 100).toFixed(1)}% reply\nVariants:\n${variants}`;
    })
    .join('\n\n');

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1500,
    messages: [
      {
        role: 'user',
        content: `Analyze these cold email campaigns targeting local service businesses (dental, HVAC, etc.) for website design services. Identify what's working and suggest improvements.

${campaignSummary}

Provide:
1. Key performance insights (2-3 bullet points)
2. What's working well
3. What needs improvement
4. Specific recommendations for subject line and body copy changes`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  return textBlock?.type === 'text' ? textBlock.text : 'Analysis unavailable';
}

/**
 * Generate new email variants based on performance analysis.
 *
 * Creates 2-3 new subject/body variants that aim to improve
 * on the current best performers.
 */
async function generateVariants(
  anthropic: Anthropic,
  campaign: CampaignData,
  analysis: string,
): Promise<GeneratedVariant[]> {
  const bestVariant = campaign.emails.reduce((best, current) =>
    current.replyRate > best.replyRate ? current : best,
  );

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [
      {
        role: 'user',
        content: `Based on this campaign analysis, generate 3 new cold email variants for a website design agency (Black Diamond Cyber) targeting local service businesses.

Campaign: ${campaign.name}
Best performing variant:
  Subject: "${bestVariant.subject}"
  Reply Rate: ${(bestVariant.replyRate * 100).toFixed(1)}%

Analysis:
${analysis}

Requirements:
- Keep emails under 100 words
- Use personalization tokens: {{firstName}}, {{companyName}}, {{city}}
- Focus on pain points: outdated website, losing customers to competitors, poor mobile experience
- CTA should be soft (question, not hard sell)
- Professional but conversational tone

Return a JSON array of objects with: subject, body, rationale
Return ONLY valid JSON, no markdown fences.`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    return [];
  }

  const variants: unknown = JSON.parse(textBlock.text);
  return variants as GeneratedVariant[];
}

/**
 * Push optimized email variants back to Instantly.ai.
 *
 * Replace this with actual Instantly.ai API calls:
 *   POST https://api.instantly.ai/api/v1/campaign/email/add
 *
 * Requires: INSTANTLY_API_KEY environment variable
 */
async function pushVariants(
  _campaignId: string,
  variants: GeneratedVariant[],
): Promise<void> {
  const _apiKey = process.env.INSTANTLY_API_KEY;
  if (!_apiKey) {
    throw new Error('Missing INSTANTLY_API_KEY environment variable');
  }

  // TODO: Replace with actual API calls
  // for (const variant of variants) {
  //   await fetch('https://api.instantly.ai/api/v1/campaign/email/add', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       campaign_id: campaignId,
  //       subject: variant.subject,
  //       body: variant.body,
  //     }),
  //   });
  // }

  // Placeholder — log results for now
  for (const variant of variants) {
    process.stdout.write(
      `[PUSH] Would add variant: "${variant.subject}" — Rationale: ${variant.rationale}\n`,
    );
  }
}

// ---------------------------------------------------------------------------
// Main Optimization Loop
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  process.stdout.write('=== Black Diamond Cyber — Cold Email Optimizer ===\n\n');

  // Validate environment
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('Missing ANTHROPIC_API_KEY environment variable');
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Step 1: Pull current campaign data
  process.stdout.write('[1/4] Pulling campaign data from Instantly.ai...\n');
  const campaigns = await pullCampaignData();
  process.stdout.write(`      Found ${campaigns.length} active campaign(s)\n\n`);

  // Step 2: Analyze performance
  process.stdout.write('[2/4] Analyzing performance with Claude...\n');
  const analysis = await analyzePerformance(anthropic, campaigns);
  process.stdout.write(`      Analysis complete\n\n`);
  process.stdout.write(`--- Analysis ---\n${analysis}\n--- End ---\n\n`);

  // Step 3: Generate optimized variants
  process.stdout.write('[3/4] Generating optimized email variants...\n');
  for (const campaign of campaigns) {
    const variants = await generateVariants(anthropic, campaign, analysis);
    process.stdout.write(
      `      Generated ${variants.length} variants for "${campaign.name}"\n`,
    );

    // Step 4: Push back to Instantly
    process.stdout.write('[4/4] Pushing variants to Instantly.ai...\n');
    await pushVariants(campaign.campaignId, variants);
  }

  process.stdout.write('\nOptimization cycle complete.\n');
}

// Run
main().catch((err: unknown) => {
  process.stderr.write(
    `Fatal error: ${err instanceof Error ? err.message : String(err)}\n`,
  );
  process.exit(1);
});
