import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';
import { getSupabaseAdmin } from '@/lib/supabase';
import { checkRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
    const rl = checkRateLimit(`contact:${ip}`, { limit: 5, windowSeconds: 300 });
    if (!rl.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: getRateLimitHeaders(rl) },
      );
    }
    const body: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, phone, businessName, industry, message } =
      parsed.data;
    const supabase = getSupabaseAdmin();

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        phone: phone || null,
        business_name: businessName || null,
        industry,
        message: message || null,
        source: 'website',
        status: 'new',
      });

    if (dbError) {
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 },
      );
    }

    try {
      const { sendEmail, isEmailConfigured } = await import('@/lib/email');
      if (isEmailConfigured()) {
        await sendEmail({
          to: 'blackdiamondcyber@gmail.com',
          subject: `New inquiry from ${name} — ${businessName || 'No business name'}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nBusiness: ${businessName || 'N/A'}\nIndustry: ${industry}\nMessage: ${message || 'N/A'}`,
          fromName: 'BDC Notifications',
        });
      }
    } catch {
      // Email send failure should not block the form submission
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
