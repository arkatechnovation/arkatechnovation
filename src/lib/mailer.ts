import nodemailer from 'nodemailer';
import { buildEmailTemplate, type FormSubmissionPayload } from './email-templates';

/**
 * Primary recipient email configured as requested by user.
 * Can be overridden via NOTIFICATION_EMAIL environment variable.
 * Default: gouravdon518@gmail.com (to be switched to info@arkatechnovation.com later)
 */
export const TARGET_EMAIL = process.env.NOTIFICATION_EMAIL || 'gouravdon518@gmail.com';

export interface SendResult {
  success: boolean;
  messageId?: string;
  previewUrl?: string;
  recipient: string;
  error?: string;
}

/**
 * Creates the appropriate nodemailer transporter based on environment
 */
async function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  // 1. Live SMTP credentials provided (Gmail, Hostinger, Zoho, Brevo, AWS SES, etc.)
  if (host && user && pass) {
    return {
      transporter: nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      }),
      isTest: false,
      from: process.env.SMTP_FROM || `"${process.env.SMTP_FROM_NAME || 'ARKA Technovation'}" <${user}>`,
    };
  }

  // 2. Gmail service shortcut (if GMAIL_USER and GMAIL_APP_PASSWORD are provided)
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (gmailUser && gmailPass) {
    return {
      transporter: nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass },
      }),
      isTest: false,
      from: `"ARKA Technovation" <${gmailUser}>`,
    };
  }

  // 3. Development / Sandbox fallback using Ethereal Email
  // Automatically creates a temporary test account so the user can preview the exact email in browser
  try {
    const testAccount = await nodemailer.createTestAccount();
    return {
      transporter: nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
      isTest: true,
      from: `"ARKA Technovation Form Bot" <${testAccount.user}>`,
    };
  } catch (err) {
    console.warn('[MAILER] Could not create Ethereal test account, using json transport:', err);
    return {
      transporter: nodemailer.createTransport({ jsonTransport: true }),
      isTest: true,
      from: '"ARKA Technovation" <info@arkatechnovation.com>',
    };
  }
}

/**
 * Dispatches a form submission email to TARGET_EMAIL
 */
export async function sendFormEmail(payload: FormSubmissionPayload): Promise<SendResult> {
  try {
    const { subject, html, text } = buildEmailTemplate(payload);
    const { transporter, isTest, from } = await getTransporter();

    const mailOptions = {
      from,
      to: TARGET_EMAIL,
      replyTo: payload.email,
      subject,
      html,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    let previewUrl: string | undefined;

    if (isTest && info) {
      previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
      console.log('────────────────────────────────────────────────────────────────────');
      console.log(`[FORM SUBMISSION RECEIVED] -> Target: ${TARGET_EMAIL}`);
      console.log(`Subject: ${subject}`);
      console.log(`From Client: ${payload.name} <${payload.email}>`);
      if (previewUrl) {
        console.log(`📧 View Live Email Preview (Ethereal): ${previewUrl}`);
      }
      console.log('────────────────────────────────────────────────────────────────────');
    } else {
      console.log(`[FORM DISPATCH] Email successfully sent to ${TARGET_EMAIL} (Message ID: ${info.messageId})`);
    }

    return {
      success: true,
      messageId: info.messageId,
      previewUrl,
      recipient: TARGET_EMAIL,
    };
  } catch (error: any) {
    console.error('[MAILER ERROR] Failed to send form email:', error);
    return {
      success: false,
      recipient: TARGET_EMAIL,
      error: error?.message || 'Failed to dispatch email',
    };
  }
}

