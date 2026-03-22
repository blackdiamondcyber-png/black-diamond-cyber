import { createServerSupabase } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import { LogoutButton } from '@/components/LogoutButton';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <>
      {/* Ambient background */}
      <div className="amb">
        <div className="orb" />
        <div className="orb" />
      </div>
      <div className="grain" />

      <div style={{ position: 'relative', zIndex: 2, minHeight: '100dvh' }}>
        {/* Top nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid var(--hr)',
            background: 'rgba(12,15,22,.8)',
            backdropFilter: 'blur(16px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="/"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '.4px',
                color: 'var(--text)',
              }}
            >
              BLACK DIAMOND <span style={{ color: 'var(--cyan)' }}>CYBER</span>
            </a>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '1.2px',
                textTransform: 'uppercase' as const,
                color: 'var(--t3)',
                paddingLeft: '16px',
                borderLeft: '1px solid var(--hr)',
              }}
            >
              Dashboard
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontSize: '12px',
                color: 'var(--t2)',
              }}
            >
              {user.email}
            </span>
            <LogoutButton />
          </div>
        </nav>

        {/* Content */}
        <main className="c" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          {children}
        </main>
      </div>
    </>
  );
}
