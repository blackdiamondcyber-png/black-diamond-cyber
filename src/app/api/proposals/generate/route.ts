import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { proposalGenerateSchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();
  const parsed = proposalGenerateSchema.safeParse(body);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json(
      { error: issue ? issue.message : 'Validation failed' },
      { status: 400 },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 500 });
  }

  const { client_business, industry, project_type, notes } = parsed.data;

  const tierDescriptions: Record<string, string> = {
    website: 'A custom website package including design, development, SEO, and ongoing hosting/maintenance.',
    growth: 'Growth system including a professional website, review automation, missed call text-back, appointment reminders, and Google Business Profile optimization.',
    dominate: 'Dominate system including everything in Growth plus AI chatbot, lead nurture, reputation management, Google Ads, competitor monitoring, and a dedicated Slack channel.',
  };

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1500,
    messages: [
      {
        role: 'user',
        content: `Generate a professional proposal for a ${industry} business called "${client_business}".

Project type: ${project_type} — ${tierDescriptions[project_type]}
${notes ? `Additional context: ${notes}` : ''}

Return a JSON object with these fields:
- scope_items: array of {title: string, description: string, included: boolean} — 6-10 items covering what's included
- timeline: string — realistic delivery estimate
- value_proposition: string — 2-3 sentences on why this is the right investment
- notes: string — any additional notes for the proposal

Be specific to the ${industry} industry. Use professional but approachable language. Return ONLY valid JSON, no markdown.`,
      },
    ],
  });

  const textBlock = message.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    return NextResponse.json({ error: 'No response from AI' }, { status: 500 });
  }

  try {
    const generated: unknown = JSON.parse(textBlock.text);
    return NextResponse.json({ generated });
  } catch {
    return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
  }
}
