import { NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase-server';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function GET() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = getSupabaseAdmin();
  const { data: files, error } = await admin.storage
    .from('client-uploads')
    .list(user.id, { sortBy: { column: 'created_at', order: 'desc' } });

  if (error || !files) {
    return NextResponse.json({ photos: [] });
  }

  const photos = await Promise.all(
    files
      .filter(f => !f.name.startsWith('.'))
      .map(async (f) => {
        const { data } = await admin.storage
          .from('client-uploads')
          .createSignedUrl(`${user.id}/${f.name}`, 3600);
        return {
          name: f.name,
          url: data?.signedUrl || '',
          size: f.metadata?.size || 0,
          created_at: f.created_at,
        };
      })
  );

  return NextResponse.json({ photos });
}
