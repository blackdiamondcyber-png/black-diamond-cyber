import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { contractSignSchema } from '@/lib/schemas';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body: unknown = await req.json();
  const parsed = contractSignSchema.safeParse(body);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json(
      { error: issue ? issue.message : 'Validation failed' },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  const { data: contract, error } = await supabase
    .from('contracts')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !contract) {
    return NextResponse.json({ error: 'Contract not found' }, { status: 404 });
  }

  if (contract.status === 'signed' || contract.status === 'active') {
    return NextResponse.json({ error: 'Contract already signed' }, { status: 400 });
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
    .from('contracts')
    .update({
      status: 'signed',
      signed_at: now,
      signature_data: signatureData,
    })
    .eq('id', id);

  // Notify Erik
  await sendEmail({
    to: 'blackdiamondcyber@gmail.com',
    subject: `Contract SIGNED — ${contract.client_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px;">
        <h2 style="color: #34D399;">Contract Signed!</h2>
        <p><strong>Client:</strong> ${contract.client_name}</p>
        <p><strong>Email:</strong> ${contract.client_email}</p>
        <p><strong>Type:</strong> ${contract.contract_type}</p>
        <p><strong>Signed by:</strong> ${parsed.data.signer_name}</p>
        <p><strong>Signed at:</strong> ${now}</p>
        <p><strong>IP:</strong> ${ip}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
