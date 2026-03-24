import nodemailer from 'nodemailer';

const GMAIL_USER = process.env.GMAIL_USER || 'blackdiamondcyber@gmail.com';
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

function getTransporter() {
  if (!GMAIL_APP_PASSWORD) {
    throw new Error('GMAIL_APP_PASSWORD not configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
}

export interface SendEmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  fromName?: string;
}

export async function sendEmail({
  to,
  subject,
  text,
  html,
  fromName = 'Black Diamond Cyber',
}: SendEmailOptions): Promise<boolean> {
  if (!GMAIL_APP_PASSWORD) {
    return false;
  }

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `${fromName} <${GMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });
    return true;
  } catch {
    return false;
  }
}

export function isEmailConfigured(): boolean {
  return Boolean(GMAIL_APP_PASSWORD);
}
