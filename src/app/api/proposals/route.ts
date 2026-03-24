import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { proposalCreateSchema } from '@/lib/schemas';

export async function GET() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('proposals')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ proposals: data });
}

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();
  const parsed = proposalCreateSchema.safeParse(body);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json(
      { error: issue ? `${issue.path.join('.')}: ${issue.message}` : 'Validation failed' },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('proposals')
    .insert({
      client_name: parsed.data.client_name,
      client_email: parsed.data.client_email,
      client_business: parsed.data.client_business,
      project_type: parsed.data.project_type,
      scope_items: parsed.data.scope_items,
      total_setup: parsed.data.total_setup,
      monthly_recurring: parsed.data.monthly_recurring,
      timeline: parsed.data.timeline ?? null,
      notes: parsed.data.notes ?? null,
      status: 'draft',
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ proposal: data }, { status: 201 });
}
