import { getSupabaseAdmin } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'bdc-admin-2026';

interface UpdateStatusBody {
  clientId: string;
  status: string;
  password: string;
  statusDetail?: string;
}

function buildStatusEmail(status: string, businessName: string, siteUrl: string | null): { subject: string; html: string } | null {
  if (status === 'review') {
    return {
      subject: 'Your website is ready for review!',
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#06080C;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#DEE0E7">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#06080C;padding:40px 20px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0C0F16;border:1px solid rgba(255,255,255,.04);border-radius:16px;overflow:hidden">
        <!-- Header -->
        <tr><td style="padding:40px 40px 0;text-align:center">
          <p style="font-size:13px;font-weight:700;letter-spacing:.4px;color:#DEE0E7;margin:0 0 24px">
            BLACK DIAMOND <span style="color:#5DC4E8">CYBER</span>
          </p>
          <div style="width:56px;height:56px;border-radius:50%;background:rgba(93,196,232,.1);border:2px solid #5DC4E8;margin:0 auto 16px;line-height:56px;font-size:24px;text-align:center">
            &#128065;
          </div>
          <h1 style="font-size:26px;font-weight:400;color:#DEE0E7;margin:0 0 8px;font-family:Georgia,serif">
            Your Website is Ready for <span style="color:#5DC4E8">Review</span>
          </h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:20px 40px 40px">
          <p style="font-size:14px;color:#7E8396;line-height:1.8;text-align:center;margin:0 0 24px">
            Hi ${businessName},<br/><br/>
            Great news! Your website has been built and is ready for your review.
            Please take a look and let us know if you have any feedback or changes.
          </p>
          ${siteUrl ? `<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
            <a href="${siteUrl}" style="display:inline-block;padding:14px 36px;background:#2887CC;color:#fff;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;border-radius:40px;text-decoration:none">
              Review Your Site &rarr;
            </a>
          </td></tr></table>` : ''}
          <p style="font-size:12px;color:#474C5E;text-align:center;margin:24px 0 0;line-height:1.7">
            Reply to this email or reach us at blackdiamondcyber@gmail.com with any questions.
          </p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,.04);text-align:center">
          <p style="font-size:10px;color:#474C5E;margin:0">
            &copy; ${new Date().getFullYear()} Black Diamond Cyber LLC
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    };
  }

  if (status === 'live') {
    return {
      subject: 'Your website is live!',
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#06080C;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#DEE0E7">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#06080C;padding:40px 20px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0C0F16;border:1px solid rgba(255,255,255,.04);border-radius:16px;overflow:hidden">
        <!-- Header -->
        <tr><td style="padding:40px 40px 0;text-align:center">
          <p style="font-size:13px;font-weight:700;letter-spacing:.4px;color:#DEE0E7;margin:0 0 24px">
            BLACK DIAMOND <span style="color:#5DC4E8">CYBER</span>
          </p>
          <div style="width:56px;height:56px;border-radius:50%;background:rgba(52,211,153,.1);border:2px solid #34D399;margin:0 auto 16px;line-height:56px;font-size:24px;text-align:center">
            &#128640;
          </div>
          <h1 style="font-size:26px;font-weight:400;color:#DEE0E7;margin:0 0 8px;font-family:Georgia,serif">
            Your Website is <span style="color:#34D399">Live!</span>
          </h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:20px 40px 40px">
          <p style="font-size:14px;color:#7E8396;line-height:1.8;text-align:center;margin:0 0 24px">
            Hi ${businessName},<br/><br/>
            Your website is now live and ready for the world to see!
            Everything is set up and your site is performing beautifully.
          </p>
          ${siteUrl ? `<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
            <a href="${siteUrl}" style="display:inline-block;padding:14px 36px;background:#34D399;color:#06080C;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;border-radius:40px;text-decoration:none">
              Visit Your Live Site &rarr;
            </a>
          </td></tr></table>` : ''}
          <p style="font-size:12px;color:#474C5E;text-align:center;margin:24px 0 0;line-height:1.7">
            You can also track your project anytime at
            <a href="https://bd-cyber.com/login" style="color:#5DC4E8;text-decoration:none">bd-cyber.com/login</a>.
          </p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,.04);text-align:center">
          <p style="font-size:10px;color:#474C5E;margin:0">
            &copy; ${new Date().getFullYear()} Black Diamond Cyber LLC
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    };
  }

  return null;
}

export async function POST(request: NextRequest) {
  let body: UpdateStatusBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { clientId, status, password, statusDetail } = body;

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!clientId || !status) {
    return NextResponse.json({ error: 'Missing clientId or status' }, { status: 400 });
  }

  const validStatuses = ['in_progress', 'review', 'live'];
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // Update client status
  const updateData: Record<string, unknown> = {
    project_status: status,
    project_status_updated_at: new Date().toISOString(),
  };
  if (statusDetail !== undefined) {
    updateData.status_detail = statusDetail;
  }

  const { error: updateError } = await supabase
    .from('clients')
    .update(updateData)
    .eq('id', clientId);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  // Fetch client for email
  const { data: client } = await supabase.from('clients').select('*').eq('id', clientId).single();

  if (client?.email && process.env.RESEND_API_KEY) {
    const emailContent = buildStatusEmail(status, client.business_name, client.site_url);

    if (emailContent) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Black Diamond Cyber <onboarding@resend.dev>',
          to: client.email,
          subject: emailContent.subject,
          html: emailContent.html,
        });
      } catch {
        // Email sending failed — do not block the status update
      }
    }
  }

  return NextResponse.json({ success: true });
}
