import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase-server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { fileName } = await request.json() as { fileName: string };
  if (!fileName) {
    return NextResponse.json({ error: 'Missing fileName' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();
  const { error } = await admin.storage
    .from('client-uploads')
    .remove([`${user.id}/${fileName}`]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
