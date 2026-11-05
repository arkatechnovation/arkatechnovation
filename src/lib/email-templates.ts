/**
 * ARKA Technovation Private Limited
 * Minimalist, Subtle & Editorial HTML Email Templates
 *
 * Inspired by contemporary Dribbble & Pinterest design aesthetics:
 * - Clean Swiss-style typography with generous breathing room
 * - Soft neutral canvases, delicate hairline borders, and subtle status badges
 * - Calm, muted palettes (no loud or saturated marketing boxes)
 * - Clear, elegant data hierarchy with sleek pill actions
 */

export interface FormSubmissionPayload {
  formType: 'contact' | 'career' | 'news-pitch' | 'service-audit' | 'general';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  // Career-specific
  discipline?: string;
  portfolio?: string;
  // Contact/Services-specific
  services?: string[];
  serviceName?: string;
  budget?: string;
  timeline?: string;
  // News-pitch-specific
  topic?: string;
  announcementType?: string;
  // Metadata
  pageUrl?: string;
  submittedAt?: string;
  ip?: string;
}

const BRAND_NAME = 'ARKA Technovation';
const BRAND_WEBSITE = 'https://arkatechnovation.com';
const BRAND_LOCATION = 'Sector 63, Noida, India';

/**
 * Base layout: Minimalist, clean, and subtle (Dribbble / Pinterest aesthetic)
 */
function emailLayout({
  preheader,
  badgeText,
  title,
  subtitle,
  bodyContent,
}: {
  preheader: string;
  badgeText: string;
  title: string;
  subtitle: string;
  bodyContent: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #F8F9FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    .card { max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #EAEAEA; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
    .label { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: #8E8E93; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .value { font-size: 14px; font-weight: 500; color: #1C1C1E; line-height: 1.5; }
    .badge { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 500; letter-spacing: 0.04em; background-color: #F4F4F6; color: #52525B; border: 1px solid #E4E4E7; }
    .pill { display: inline-block; padding: 4px 11px; border-radius: 9999px; font-size: 11.5px; font-weight: 500; color: #3F3F46; background-color: #FAFAFA; border: 1px solid #E4E4E7; margin: 2px 4px 2px 0; }
    .quote-box { background-color: #FAFAFA; border: 1px solid #ECECEC; border-radius: 10px; padding: 16px 18px; font-size: 13.5px; line-height: 1.6; color: #27272A; white-space: pre-wrap; }
    .btn-primary { display: inline-block; background-color: #18181B; color: #FFFFFF !important; text-decoration: none; font-size: 13px; font-weight: 500; padding: 10px 22px; border-radius: 9999px; }
    .btn-secondary { display: inline-block; background-color: #FFFFFF; color: #27272A !important; text-decoration: none; font-size: 13px; font-weight: 500; padding: 10px 20px; border-radius: 9999px; border: 1px solid #E4E4E7; }
    @media only screen and (max-width: 600px) {
      .card { width: 100% !important; border-radius: 0 !important; border-left: none !important; border-right: none !important; }
      .px-responsive { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 36px 0; background-color: #F8F9FA;">
  <!-- Hidden preheader text -->
  <div style="display: none; font-size: 1px; color: #F8F9FA; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${preheader}
  </div>

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 12px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="card">
          
          <!-- SUBTLE MINIMALIST HEADER -->
          <tr>
            <td style="padding: 24px 32px 20px 32px; border-bottom: 1px solid #F0F0F2;" class="px-responsive">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="left" valign="middle">
                    <span style="font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #18181B; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                      ${BRAND_NAME}
                    </span>
                  </td>
                  <td align="right" valign="middle">
                    <span class="badge">
                      <span style="display: inline-block; width: 5px; height: 5px; border-radius: 50%; background-color: #10B981; margin-right: 6px;"></span>
                      ${badgeText}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TITLE & SUMMARY -->
          <tr>
            <td style="padding: 32px 32px 16px 32px;" class="px-responsive">
              <h1 style="margin: 0; font-size: 21px; font-weight: 600; color: #111827; letter-spacing: -0.02em; line-height: 1.35;">
                ${title}
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #6B7280; font-weight: 400; line-height: 1.5;">
                ${subtitle}
              </p>
            </td>
          </tr>

          <!-- MAIN CONTENT BODY -->
          <tr>
            <td style="padding: 12px 32px 32px 32px;" class="px-responsive">
              ${bodyContent}
            </td>
          </tr>

          <!-- SUBTLE MINIMALIST FOOTER -->
          <tr>
            <td style="background-color: #FAFAFA; border-top: 1px solid #F0F0F2; padding: 22px 32px; text-align: left;" class="px-responsive">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="left" style="font-size: 11.5px; color: #8E8E93; line-height: 1.6;">
                    <span style="color: #374151; font-weight: 500;">ARKA Technovation Private Limited</span>
                    &nbsp;·&nbsp; ${BRAND_LOCATION}
                    <br>
                    <a href="${BRAND_WEBSITE}" style="color: #6B7280; text-decoration: underline;">arkatechnovation.com</a>
                  </td>
                  <td align="right" valign="middle" style="font-size: 11px; color: #A1A1AA;">
                    Web Dispatch
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * 1. Contact / Project Proposal Template (Dribbble Minimalist Ref)
 */
export function renderContactEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const subject = `[Project Inquiry] ${p.name}${p.company ? ` · ${p.company}` : ''}`;
  const preheader = `Inquiry from ${p.name}${p.company ? ` (${p.company})` : ''}: ${(p.message || '').slice(0, 90)}`;

  const servicesHtml = (p.services && p.services.length > 0)
    ? p.services.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join('')
    : '<span style="font-size: 13px; color: #9CA3AF;">Not specified</span>';

  const bodyContent = `
    <!-- INFO ROW 1 -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px; border-bottom: 1px solid #F4F4F6; padding-bottom: 16px;">
      <tr>
        <td width="50%" valign="top" style="padding-right: 12px;">
          <div class="label">Client</div>
          <div class="value" style="font-size: 15px; font-weight: 600; color: #111827;">${escapeHtml(p.name)}</div>
          ${p.company ? `<div style="font-size: 12.5px; color: #6B7280; margin-top: 2px;">${escapeHtml(p.company)}</div>` : ''}
        </td>
        <td width="50%" valign="top">
          <div class="label">Work Email</div>
          <div class="value">
            <a href="mailto:${escapeHtml(p.email)}" style="color: #111827; text-decoration: underline; font-weight: 500;">
              ${escapeHtml(p.email)}
            </a>
          </div>
          ${p.phone ? `
          <div style="font-size: 12.5px; color: #6B7280; margin-top: 2px;">
            <a href="tel:${escapeHtml(p.phone)}" style="color: #6B7280; text-decoration: none;">${escapeHtml(p.phone)}</a>
          </div>` : ''}
        </td>
      </tr>
    </table>

    <!-- CAPABILITIES REQUIRED -->
    <div style="margin-bottom: 22px;">
      <div class="label" style="margin-bottom: 6px;">Requested Capabilities</div>
      <div>${servicesHtml}</div>
    </div>

    <!-- PROJECT SCOPE -->
    <div style="margin-bottom: 26px;">
      <div class="label" style="margin-bottom: 6px;">Project Notes & Goals</div>
      <div class="quote-box">${escapeHtml(p.message || 'No description provided')}</div>
    </div>

    <!-- ACTIONS -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 6px;">
      <tr>
        <td align="left">
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20ARKA%20Technovation%20Project%20Proposal" class="btn-primary" style="margin-right: 8px;">
            Reply to ${escapeHtml(p.name.split(' ')[0] || 'Client')} &rarr;
          </a>
          ${p.phone ? `
          <a href="https://wa.me/${escapeHtml(p.phone.replace(/[^0-9]/g, ''))}" class="btn-secondary">
            WhatsApp
          </a>` : ''}
        </td>
      </tr>
    </table>

    <!-- SUBTLE METADATA -->
    <div style="margin-top: 22px; font-size: 11px; color: #9CA3AF;">
      Source: ${escapeHtml(p.pageUrl || '/contact')} · ${p.submittedAt || new Date().toISOString()}
    </div>
  `;

  const html = emailLayout({
    preheader,
    badgeText: 'Project Inquiry',
    title: 'New Project Proposal Request',
    subtitle: 'A prospective client has submitted a proposal request through the website.',
    bodyContent,
  });

  const text = `
NEW PROJECT INQUIRY
Client: ${p.name}
Company: ${p.company || 'N/A'}
Email: ${p.email}
Phone: ${p.phone || 'N/A'}
Capabilities: ${(p.services || []).join(', ') || 'N/A'}

Project Notes:
${p.message || 'N/A'}

Source: ${p.pageUrl || '/contact'}
Time: ${p.submittedAt || new Date().toISOString()}
  `.trim();

  return { subject, html, text };
}

/**
 * 2. Career / Talent Application Template (Clean & Editorial)
 */
export function renderCareerEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const discipline = p.discipline || 'General Application';
  const subject = `[Talent Application] ${p.name} — ${discipline}`;
  const preheader = `New application from ${p.name} for ${discipline}`;

  const bodyContent = `
    <!-- SENDER ROW -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px; border-bottom: 1px solid #F4F4F6; padding-bottom: 16px;">
      <tr>
        <td width="50%" valign="top" style="padding-right: 12px;">
          <div class="label">Candidate</div>
          <div class="value" style="font-size: 15px; font-weight: 600; color: #111827;">${escapeHtml(p.name)}</div>
          <div style="font-size: 12.5px; color: #4B5563; margin-top: 2px;">${escapeHtml(discipline)}</div>
        </td>
        <td width="50%" valign="top">
          <div class="label">Contact</div>
          <div class="value">
            <a href="mailto:${escapeHtml(p.email)}" style="color: #111827; text-decoration: underline; font-weight: 500;">
              ${escapeHtml(p.email)}
            </a>
          </div>
          ${p.phone ? `
          <div style="font-size: 12.5px; color: #6B7280; margin-top: 2px;">
            <a href="tel:${escapeHtml(p.phone)}" style="color: #6B7280; text-decoration: none;">${escapeHtml(p.phone)}</a>
          </div>` : ''}
        </td>
      </tr>
    </table>

    <!-- PORTFOLIO LINK -->
    <div style="margin-bottom: 22px;">
      <div class="label" style="margin-bottom: 6px;">Portfolio & Craft Links</div>
      <div style="background-color: #FAFAFA; border: 1px solid #ECECEC; border-radius: 8px; padding: 12px 14px;">
        ${p.portfolio ? `
          <a href="${escapeHtml(p.portfolio)}" target="_blank" rel="noopener noreferrer" style="font-size: 13.5px; color: #111827; font-weight: 500; text-decoration: underline; word-break: break-all;">
            ${escapeHtml(p.portfolio)} &nearr;
          </a>
        ` : '<span style="font-size: 13px; color: #9CA3AF;">None provided</span>'}
      </div>
    </div>

    <!-- COVER / HARDEST PROBLEM -->
    <div style="margin-bottom: 26px;">
      <div class="label" style="margin-bottom: 6px;">Hardest Problem Solved</div>
      <div class="quote-box">${escapeHtml(p.message || 'No additional note provided')}</div>
    </div>

    <!-- ACTION BUTTONS -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 6px;">
      <tr>
        <td align="left">
          ${p.portfolio ? `
          <a href="${escapeHtml(p.portfolio)}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-right: 8px;">
            Open Portfolio &nearr;
          </a>` : ''}
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20ARKA%20Technovation%20Application" class="btn-secondary">
            Email Candidate
          </a>
        </td>
      </tr>
    </table>

    <div style="margin-top: 22px; font-size: 11px; color: #9CA3AF;">
      Source: ${escapeHtml(p.pageUrl || '/careers')} · ${p.submittedAt || new Date().toISOString()}
    </div>
  `;

  const html = emailLayout({
    preheader,
    badgeText: 'Talent Application',
    title: 'New Talent Application & Profile',
    subtitle: 'A prospective craft specialist has submitted their credentials for review.',
    bodyContent,
  });

  const text = `
NEW TALENT APPLICATION
Candidate: ${p.name}
Discipline: ${discipline}
Email: ${p.email}
Phone: ${p.phone || 'N/A'}
Portfolio: ${p.portfolio || 'N/A'}

Hardest Problem Solved / Message:
${p.message || 'N/A'}

Source: ${p.pageUrl || '/careers'}
Time: ${p.submittedAt || new Date().toISOString()}
  `.trim();

  return { subject, html, text };
}

/**
 * 3. Corporate World News & Story Pitch (Subtle Editorial Style)
 */
export function renderNewsPitchEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const company = p.company || 'Corporate Leader';
  const subject = `[Editorial Pitch] ${p.name} · ${company}`;
  const preheader = `Editorial story pitch from ${p.name} at ${company}`;

  const bodyContent = `
    <!-- SENDER ROW -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px; border-bottom: 1px solid #F4F4F6; padding-bottom: 16px;">
      <tr>
        <td width="50%" valign="top" style="padding-right: 12px;">
          <div class="label">Executive</div>
          <div class="value" style="font-size: 15px; font-weight: 600; color: #111827;">${escapeHtml(p.name)}</div>
          <div style="font-size: 12.5px; color: #4B5563; margin-top: 2px;">${escapeHtml(company)}</div>
        </td>
        <td width="50%" valign="top">
          <div class="label">Corporate Email</div>
          <div class="value">
            <a href="mailto:${escapeHtml(p.email)}" style="color: #111827; text-decoration: underline; font-weight: 500;">
              ${escapeHtml(p.email)}
            </a>
          </div>
          <div style="font-size: 12px; color: #8E8E93; margin-top: 2px;">Sector 63 Editorial Desk</div>
        </td>
      </tr>
    </table>

    <!-- STORY ANNOUNCEMENT -->
    <div style="margin-bottom: 26px;">
      <div class="label" style="margin-bottom: 6px;">Announcement / Topic Description</div>
      <div class="quote-box">${escapeHtml(p.topic || p.message || 'No description provided')}</div>
    </div>

    <!-- ACTIONS -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 6px;">
      <tr>
        <td align="left">
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20Corporate%20World%20News%20Story%20Pitch" class="btn-primary">
            Reply to Executive &rarr;
          </a>
        </td>
      </tr>
    </table>

    <div style="margin-top: 22px; font-size: 11px; color: #9CA3AF;">
      Source: ${escapeHtml(p.pageUrl || '/corporate-world-news')} · ${p.submittedAt || new Date().toISOString()}
    </div>
  `;

  const html = emailLayout({
    preheader,
    badgeText: 'Editorial Pitch',
    title: 'Corporate World News Story Pitch',
    subtitle: 'An executive has pitched an announcement or leadership interview.',
    bodyContent,
  });

  const text = `
CORPORATE WORLD NEWS STORY PITCH
Executive: ${p.name}
Company: ${company}
Email: ${p.email}

Story / Topic Description:
${p.topic || p.message || 'N/A'}

Source: ${p.pageUrl || '/corporate-world-news'}
Time: ${p.submittedAt || new Date().toISOString()}
  `.trim();

  return { subject, html, text };
}

/**
 * 4. Service Audit & Consultation Request Template
 */
export function renderServiceAuditEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const service = p.serviceName || 'Growth & Engineering';
  const subject = `[Audit Request] ${p.name} · ${service}`;
  const preheader = `Audit request from ${p.name} for ${service}`;

  const bodyContent = `
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px; border-bottom: 1px solid #F4F4F6; padding-bottom: 16px;">
      <tr>
        <td width="50%" valign="top" style="padding-right: 12px;">
          <div class="label">Inquirer</div>
          <div class="value" style="font-size: 15px; font-weight: 600; color: #111827;">${escapeHtml(p.name)}</div>
          <div style="font-size: 12.5px; color: #4B5563; margin-top: 2px;">${escapeHtml(service)}</div>
        </td>
        <td width="50%" valign="top">
          <div class="label">Contact</div>
          <div class="value">
            <a href="mailto:${escapeHtml(p.email)}" style="color: #111827; text-decoration: underline; font-weight: 500;">
              ${escapeHtml(p.email)}
            </a>
          </div>
          ${p.phone ? `<div style="font-size: 12.5px; color: #6B7280; margin-top: 2px;">${escapeHtml(p.phone)}</div>` : ''}
        </td>
      </tr>
    </table>

    <div style="margin-bottom: 26px;">
      <div class="label" style="margin-bottom: 6px;">Audit Scope & Benchmarks</div>
      <div class="quote-box">${escapeHtml(p.message || 'No additional note provided')}</div>
    </div>

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 6px;">
      <tr>
        <td align="left">
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20ARKA%20Technovation%20Audit%20Consultation" class="btn-primary">
            Reply to Client &rarr;
          </a>
        </td>
      </tr>
    </table>

    <div style="margin-top: 22px; font-size: 11px; color: #9CA3AF;">
      Source: ${escapeHtml(p.pageUrl || '/seo-lead-generation')} · ${p.submittedAt || new Date().toISOString()}
    </div>
  `;

  const html = emailLayout({
    preheader,
    badgeText: 'Technical Audit',
    title: 'New Service Audit Request',
    subtitle: 'A prospective client has requested a technical review or growth audit.',
    bodyContent,
  });

  const text = `
NEW SERVICE AUDIT REQUEST
Client: ${p.name}
Service: ${service}
Email: ${p.email}
Phone: ${p.phone || 'N/A'}

Message / Scope:
${p.message || 'N/A'}

Source: ${p.pageUrl || '/seo-lead-generation'}
Time: ${p.submittedAt || new Date().toISOString()}
  `.trim();

  return { subject, html, text };
}

/**
 * Dispatcher function to select the appropriate template
 */
export function buildEmailTemplate(payload: FormSubmissionPayload): { subject: string; html: string; text: string } {
  switch (payload.formType) {
    case 'career':
      return renderCareerEmail(payload);
    case 'news-pitch':
      return renderNewsPitchEmail(payload);
    case 'service-audit':
      return renderServiceAuditEmail(payload);
    case 'contact':
    case 'general':
    default:
      return renderContactEmail(payload);
  }
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
