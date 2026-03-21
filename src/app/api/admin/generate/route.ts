import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { generateSiteSchema } from '@/lib/schemas';

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const parsed = generateSiteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 },
      );
    }

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const prompt = `You are a premium website copywriter for local service businesses. Generate website content for this business:

Business: ${data.practiceName}
Owner: ${data.ownerName}
Services: ${data.services.join(', ')}
Location: ${data.location}
Phone: ${data.phone}
Industry context: Local service business targeting customers in their area.
${data.description ? `Additional context: ${data.description}` : ''}

Generate a JSON object with these exact keys:
- headline: A compelling 4-8 word headline
- subheadline: A 1-2 sentence subheadline
- aboutTitle: Section title for about (3-5 words)
- aboutText: 2-3 paragraph about section (use \\n\\n between paragraphs)
- services: Array of objects with {name, description} for each service (${data.services.length} services)
- ctaHeadline: Call-to-action headline (4-8 words)
- ctaText: CTA supporting text (1-2 sentences)
- ctaButton: CTA button text (2-4 words)
- metaTitle: SEO page title (50-60 chars)
- metaDescription: SEO meta description (150-160 chars)

Return ONLY valid JSON, no markdown fences.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 },
      );
    }

    const generated: unknown = JSON.parse(textBlock.text);
    return NextResponse.json({ generated, input: data });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Generation failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
