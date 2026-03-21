import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
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

    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'BDC Notifications <notifications@blackdiamondcyber.dev>',
          to: 'blackdiamondcyber@gmail.com',
          subject: `New inquiry from ${name} — ${businessName || 'No business name'}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nBusiness: ${businessName || 'N/A'}\nIndustry: ${industry}\nMessage: ${message || 'N/A'}`,
        });
      } catch {
        // Email send failure should not block the form submission
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
