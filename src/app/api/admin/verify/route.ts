import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(request: NextRequest) {
  if (!ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: 'Admin password not configured' },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as { password?: string };
    if (body.password === ADMIN_PASSWORD) {
      return NextResponse.json({ authenticated: true });
    }
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
