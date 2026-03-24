import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { proposalAcceptSchema } from '@/lib/schemas';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body: unknown = await req.json();
  const parsed = proposalAcceptSchema.safeParse(body);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json(
      { error: issue ? issue.message : 'Validation failed' },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  const { data: proposal, error } = await supabase
    .from('proposals')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !proposal) {
    return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
  }

  if (proposal.status === 'accepted') {
    return NextResponse.json({ error: 'Proposal already accepted' }, { status: 400 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = new Date().toISOString();

  const signatureData = {
    image: parsed.data.signature_image,
    name: parsed.data.signer_name,
    date: now,
    ip,
  };

  await supabase
    .from('proposals')
    .update({
      status: 'accepted',
      accepted_at: now,
      signature_data: signatureData,
    })
    .eq('id', id);

  // Notify Erik
  await sendEmail({
    to: 'blackdiamondcyber@gmail.com',
    subject: `Proposal ACCEPTED — ${proposal.client_business}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px;">
        <h2 style="color: #34D399;">Proposal Accepted!</h2>
        <p><strong>Client:</strong> ${proposal.client_name}</p>
        <p><strong>Business:</strong> ${proposal.client_business}</p>
        <p><strong>Email:</strong> ${proposal.client_email}</p>
        <p><strong>Setup:</strong> $${Number(proposal.total_setup).toLocaleString()}</p>
        <p><strong>Monthly:</strong> $${Number(proposal.monthly_recurring).toLocaleString()}/mo</p>
        <p><strong>Signed by:</strong> ${parsed.data.signer_name}</p>
        <p><strong>Signed at:</strong> ${now}</p>
        <p><strong>IP:</strong> ${ip}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
