import { NextResponse } from 'next/server';
import { sendFormEmail, TARGET_EMAIL } from '@/lib/mailer';
import type { FormSubmissionPayload } from '@/lib/email-templates';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Spam bot protection via honeypot
    if (body._gotcha || body.fax_number || body.honeypot) {
      console.warn('[SPAM BOT BLOCKED] Honeypot triggered.');
      return NextResponse.json({ success: true, message: 'Received' });
    }

    // 2. Input validation
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide your full name.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // 3. Assemble typed payload
    const formType = (body.formType || body.type || 'contact') as FormSubmissionPayload['formType'];
    const payload: FormSubmissionPayload = {
      formType,
      name,
      email,
      phone: (body.phone || '').trim(),
      company: (body.company || '').trim(),
      message: (body.message || body.notes || body.scope || '').trim(),
      // Career
      discipline: (body.discipline || '').trim(),
      portfolio: (body.portfolio || body.reel || '').trim(),
      // Contact / Service
      services: Array.isArray(body.services) ? body.services : body.service ? [body.service] : [],
      serviceName: (body.serviceName || body.service || '').trim(),
      budget: (body.budget || '').trim(),
      timeline: (body.timeline || '').trim(),
      // Editorial
      topic: (body.topic || '').trim(),
      // Metadata
      pageUrl: body.pageUrl || req.headers.get('referer') || '/',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || undefined,
    };

    // 4. Send email
    const result = await sendFormEmail(payload);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to dispatch email.',
          targetRecipient: TARGET_EMAIL,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully delivered.',
      recipient: result.recipient,
      messageId: result.messageId,
      previewUrl: result.previewUrl,
    });
  } catch (error: any) {
    console.error('[API ERROR] Form submission failed:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Internal server error processing form.' },
      { status: 500 }
    );
  }
}

// Support GET for testing health / configuration check
export async function GET() {
  return NextResponse.json({
    status: 'online',
    endpoint: '/api/form-submit',
    targetRecipient: TARGET_EMAIL,
    supportedFormTypes: ['contact', 'career', 'news-pitch', 'service-audit', 'general'],
    hasSmtpConfigured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
  });
}

