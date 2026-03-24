import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { contractCreateSchema } from '@/lib/schemas';

export async function GET() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('contracts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ contracts: data });
}

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();
  const parsed = contractCreateSchema.safeParse(body);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json(
      { error: issue ? `${issue.path.join('.')}: ${issue.message}` : 'Validation failed' },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('contracts')
    .insert({
      proposal_id: parsed.data.proposal_id ?? null,
      client_name: parsed.data.client_name,
      client_email: parsed.data.client_email,
      contract_type: parsed.data.contract_type,
      terms: parsed.data.terms,
      start_date: parsed.data.start_date ?? null,
      end_date: parsed.data.end_date ?? null,
      status: 'draft',
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ contract: data }, { status: 201 });
}
