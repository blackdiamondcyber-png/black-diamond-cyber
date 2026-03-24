import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const supabase = getSupabaseAdmin();

  const { data: proposal, error } = await supabase
    .from('proposals')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !proposal) {
    return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-cyber.com';
  const proposalUrl = `${siteUrl}/proposals/${proposal.id}`;

  const emailSent = await sendEmail({
    to: proposal.client_email,
    subject: `Your Proposal from Black Diamond Cyber — ${proposal.client_business}`,
    html: `
      <div style="font-family: 'Outfit', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #06080C; color: #DEE0E7; padding: 40px 32px; border-radius: 16px;">
        <h1 style="font-size: 28px; color: #DEE0E7; margin-bottom: 8px;">Your Proposal is Ready</h1>
        <p style="color: #7E8396; font-size: 15px; line-height: 1.8; margin-bottom: 24px;">
          Hi ${proposal.client_name},<br><br>
          We've prepared a custom proposal for <strong>${proposal.client_business}</strong>.
          Review the details and accept when you're ready to get started.
        </p>
        <div style="background: #0C0F16; border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <p style="color: #5DC4E8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Investment</p>
          <p style="font-size: 24px; color: #DEE0E7; margin-bottom: 4px;">$${Number(proposal.total_setup).toLocaleString()} setup + $${Number(proposal.monthly_recurring).toLocaleString()}/mo</p>
          ${proposal.timeline ? `<p style="color: #7E8396; font-size: 13px;">Timeline: ${proposal.timeline}</p>` : ''}
        </div>
        <a href="${proposalUrl}" style="display: inline-block; padding: 14px 40px; background: #2887CC; color: #fff; text-decoration: none; border-radius: 40px; font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">
          View Proposal
        </a>
        <p style="color: #474C5E; font-size: 12px; margin-top: 32px;">
          Black Diamond Cyber &mdash; AI-Powered Websites & Growth Systems
        </p>
      </div>
    `,
  });

  if (!emailSent) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  await supabase
    .from('proposals')
    .update({ status: 'sent', sent_at: new Date().toISOString() })
    .eq('id', id);

  return NextResponse.json({ success: true });
}
