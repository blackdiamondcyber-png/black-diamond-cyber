import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { chatMessageSchema } from '@/lib/schemas';
import { getSupabaseAdmin } from '@/lib/supabase';
import { checkRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

const SYSTEM_PROMPT = `You are the AI assistant for Black Diamond Cyber (bd-cyber.com), a premium web agency that builds AI-powered websites and growth systems for local service businesses.

ABOUT BLACK DIAMOND CYBER:
- Founded by Erik Pearson, a full-stack developer with deep AI expertise
- We build premium websites for dental practices, HVAC, plumbing, electrical, roofing, med spas, veterinary, landscaping, auto repair, chiropractic, law firms, and real estate
- Every site is custom-built with Next.js, React, and AI — not templates
- Websites are delivered in days, not months

WEBSITE TIERS:
- Starter ($997 setup + $79/mo): 3-5 day delivery, 5-page site, mobile responsive, basic SEO
- Professional ($1,997 setup + $129/mo): 5-7 day delivery, 10-page site, advanced SEO, contact forms, analytics
- Premium ($2,997 setup + $199/mo): 10-14 day delivery, unlimited pages, AI chatbot, review automation, priority support
- Cinematic ($4,997 setup + $249/mo): 10-14 day delivery, cinematic design, custom animations, full growth integration

GROWTH SYSTEM TIERS (require consultation):
- Growth ($2,997 setup + $497/mo): Professional website + review automation + missed call text-back + appointment reminders + GBP optimization
- Dominate ($4,997 setup + $1,497/mo): Everything in Growth + AI chatbot + lead nurture + reputation management + Google Ads + competitor monitoring + dedicated Slack channel

KEY DIFFERENTIATORS:
- AI-powered: We use AI to generate content, optimize SEO, and automate customer engagement
- Speed: Websites delivered in days, not weeks or months
- You OWN your code — no proprietary lock-in like Wix or Squarespace
- Built by a real developer, not a drag-and-drop builder

YOUR BEHAVIOR:
- Be friendly, professional, and concise
- Answer questions about pricing, process, timeline, and services confidently
- When someone shows interest, encourage them to book a free strategy call or get a free website audit
- Collect their name, email, business type, and optionally phone when they express interest
- Never make up features or pricing that doesn't exist above
- Keep responses under 150 words unless more detail is specifically requested
- Use a conversational, approachable tone — not salesy or pushy
- If asked about competitors, be respectful but highlight BDC's advantages
- For technical questions outside your scope, suggest they book a call to discuss specifics`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
    const rl = checkRateLimit(`chatbot:${ip}`, { limit: 30, windowSeconds: 300 });
    if (!rl.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a moment.' },
        { status: 429, headers: getRateLimitHeaders(rl) },
      );
    }

    const body: unknown = await request.json();
    const parsed = chatMessageSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid message', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { message, conversationId, visitorName, visitorEmail, businessType, visitorPhone } = parsed.data;

    const supabase = getSupabaseAdmin();
    let convId = conversationId;
    let history: ChatMessage[] = [];

    // Load existing conversation or create new one
    if (convId) {
      const { data: conv } = await supabase
        .from('chatbot_conversations')
        .select('messages')
        .eq('id', convId)
        .single();

      if (conv?.messages) {
        history = conv.messages as ChatMessage[];
      }
    } else {
      const { data: newConv, error: insertErr } = await supabase
        .from('chatbot_conversations')
        .insert({
          visitor_name: visitorName || null,
          visitor_email: visitorEmail || null,
          business_type: businessType || null,
          visitor_phone: visitorPhone || null,
          messages: [],
        })
        .select('id')
        .single();

      if (insertErr || !newConv) {
        return NextResponse.json(
          { error: 'Failed to create conversation' },
          { status: 500 },
        );
      }
      convId = newConv.id;
    }

    // Build message history for Claude
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = [
      ...history.slice(-20), // Keep last 20 messages for context
      { role: 'user', content: message },
    ];

    const anthropic = new Anthropic();

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    });

    const assistantMessage =
      response.content[0].type === 'text' ? response.content[0].text : '';

    // Update conversation in DB
    const updatedMessages: ChatMessage[] = [
      ...history,
      { role: 'user', content: message },
      { role: 'assistant', content: assistantMessage },
    ];

    const updateData: Record<string, unknown> = {
      messages: updatedMessages,
      updated_at: new Date().toISOString(),
    };

    // Update visitor info if provided
    if (visitorName) updateData.visitor_name = visitorName;
    if (visitorEmail) updateData.visitor_email = visitorEmail;
    if (businessType) updateData.business_type = businessType;
    if (visitorPhone) updateData.visitor_phone = visitorPhone;

    await supabase
      .from('chatbot_conversations')
      .update(updateData)
      .eq('id', convId);

    return NextResponse.json({
      reply: assistantMessage,
      conversationId: convId,
    });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
