import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getSupabaseAdmin } from '@/lib/supabase';
import { checkRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  practiceName: z.string().min(1, 'Practice name is required'),
  phone: z.string().optional(),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
    const rl = checkRateLimit(`booking:${ip}`, { limit: 3, windowSeconds: 300 });
    if (!rl.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: getRateLimitHeaders(rl) },
      );
    }

    const body: unknown = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, practiceName, phone, preferredTime } = parsed.data;
    const supabase = getSupabaseAdmin();

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        phone: phone || null,
        business_name: practiceName,
        industry: 'Dental',
        message: `Strategy call booking — Preferred time: ${preferredTime}`,
        source: 'booking_form',
        status: 'new',
      });

    if (dbError) {
      return NextResponse.json(
        { error: 'Failed to save booking' },
        { status: 500 },
      );
    }

    try {
      const { sendEmail, isEmailConfigured } = await import('@/lib/email');
      if (isEmailConfigured()) {
        await sendEmail({
          to: 'blackdiamondcyber@gmail.com',
          subject: `New Strategy Call Booking — ${name} (${practiceName})`,
          html: `
            <h2>New Strategy Call Booking</h2>
            <table style="border-collapse:collapse;font-family:sans-serif;">
              <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || 'N/A'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Practice</td><td style="padding:8px;">${practiceName}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Preferred Time</td><td style="padding:8px;">${preferredTime}</td></tr>
            </table>
          `,
          fromName: 'BDC Bookings',
        });
      }
    } catch {
      // Email failure should not block booking
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
