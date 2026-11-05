/**
 * ARKA Technovation Private Limited
 * Custom Responsive HTML Email Templates for Form Submissions
 *
 * Each page and section has its own branded email template with customized
 * color palette, badges, field hierarchy, and direct response actions.
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

const BRAND_NAME = 'ARKA Technovation Private Limited';
const BRAND_HQ = 'Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, UP 201301';
const BRAND_WEBSITE = 'https://arkatechnovation.com';

/**
 * Base email layout wrapper with modern email client compatibility
 */
function emailLayout({
  preheader,
  headerBadge,
  headerBadgeBg,
  headerBadgeColor,
  title,
  subtitle,
  bodyContent,
  accentColor,
}: {
  preheader: string;
  headerBadge: string;
  headerBadgeBg: string;
  headerBadgeColor: string;
  title: string;
  subtitle: string;
  bodyContent: string;
  accentColor: string;
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
    body { margin: 0; padding: 0; width: 100% !important; background-color: #F4F4F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .email-container { max-width: 620px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #71717A; font-weight: 600; font-family: monospace; }
    .value { font-size: 14px; color: #09090B; font-weight: 500; line-height: 1.5; margin-top: 4px; }
    .pill { display: inline-block; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; margin: 2px 4px 2px 0; background-color: #F4F4F5; color: #18181B; border: 1px solid #E4E4E7; }
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; border-radius: 0 !important; }
      .responsive-padding { padding: 24px 18px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #F4F4F5;">
  <!-- Hidden preheader text for inbox preview -->
  <div style="display: none; font-size: 1px; color: #F4F4F5; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${preheader}
  </div>

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 12px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 620px; background-color: #FFFFFF; border: 1px solid #E4E4E7; border-radius: 16px; overflow: hidden;">
          
          <!-- BRAND TOP BAR -->
          <tr>
            <td style="background-color: #09090B; padding: 24px 32px; border-bottom: 3px solid ${accentColor}; text-align: left;" class="responsive-padding">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #FFFFFF; font-family: monospace;">
                      ARKA TECHNOVATION
                    </div>
                    <div style="font-size: 10px; color: #A1A1AA; letter-spacing: 0.08em; text-transform: uppercase; margin-top: 3px;">
                      Enterprise In-House Dispatch
                    </div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background-color: ${headerBadgeBg}; color: ${headerBadgeColor};">
                      ${headerBadge}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO HEADER -->
          <tr>
            <td style="padding: 32px 32px 20px 32px;" class="responsive-padding">
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #09090B; line-height: 1.3;">
                ${title}
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 13px; color: #71717A; line-height: 1.5;">
                ${subtitle}
              </p>
            </td>
          </tr>

          <!-- MAIN BODY CONTENT -->
          <tr>
            <td style="padding: 0 32px 32px 32px;" class="responsive-padding">
              ${bodyContent}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #FAFAFA; border-top: 1px solid #E4E4E7; padding: 24px 32px; text-align: center; font-size: 11px; color: #71717A; line-height: 1.6;" class="responsive-padding">
              <div style="font-weight: 600; color: #27272A; margin-bottom: 4px;">
                ${BRAND_NAME}
              </div>
              <div>${BRAND_HQ}</div>
              <div style="margin-top: 6px;">
                <a href="${BRAND_WEBSITE}" style="color: ${accentColor}; text-decoration: none; font-weight: 500;">arkatechnovation.com</a>
                &nbsp;·&nbsp;
                <a href="tel:+919711487316" style="color: #71717A; text-decoration: none;">+91 97114 87316</a>
              </div>
              <div style="margin-top: 12px; font-size: 10px; color: #A1A1AA;">
                Automated transmission via website form dispatch. Reply directly to this email to contact the submitter.
              </div>
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
 * 1. Contact / Project Inquiry Template (/contact, /contact-us)
 */
export function renderContactEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const subject = `[Project Inquiry] ${p.name}${p.company ? ` · ${p.company}` : ''} (${(p.services || []).join(', ') || 'General Scope'})`;
  const preheader = `New project inquiry from ${p.name}${p.company ? ` at ${p.company}` : ''}: "${(p.message || '').slice(0, 100)}..."`;

  const servicesHtml = (p.services && p.services.length > 0)
    ? p.services.map((s) => `<span class="pill" style="display:inline-block; padding:4px 10px; border-radius:9999px; font-size:11px; font-weight:600; margin:2px 4px 2px 0; background-color:#FEF3C7; color:#92400E; border:1px solid #FDE68A;">${s}</span>`).join(' ')
    : '<span style="font-size:13px; color:#71717A;">Not specified</span>';

  const bodyContent = `
    <!-- SENDER HIGHLIGHT BOX -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; margin-bottom:24px;">
      <tr>
        <td style="padding:20px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">CLIENT NAME</div>
                <div class="value" style="font-size:16px; font-weight:700; color:#0F172A;">${escapeHtml(p.name)}</div>
              </td>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">WORK EMAIL</div>
                <div class="value"><a href="mailto:${escapeHtml(p.email)}" style="color:#E8742C; text-decoration:none; font-weight:600;">${escapeHtml(p.email)}</a></div>
              </td>
            </tr>
            <tr>
              <td width="50%" valign="top">
                <div class="label">PHONE / WHATSAPP</div>
                <div class="value"><a href="tel:${escapeHtml(p.phone || '')}" style="color:#0F172A; text-decoration:none;">${escapeHtml(p.phone || 'Not provided')}</a></div>
              </td>
              <td width="50%" valign="top">
                <div class="label">COMPANY / ORGANIZATION</div>
                <div class="value">${escapeHtml(p.company || 'Not provided')}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- SERVICES REQUESTED -->
    <div style="margin-bottom:20px;">
      <div class="label" style="margin-bottom:8px;">CAPABILITIES & SERVICES REQUESTED</div>
      <div>${servicesHtml}</div>
    </div>

    <!-- PROJECT SCOPE -->
    <div style="margin-bottom:24px;">
      <div class="label" style="margin-bottom:6px;">PROJECT GOALS & TECHNICAL REQUIREMENTS</div>
      <div style="background-color:#FFFFFF; border:1px solid #E4E4E7; border-left:4px solid #E8742C; border-radius:8px; padding:16px; font-size:14px; line-height:1.6; color:#18181B; white-space:pre-wrap;">${escapeHtml(p.message || 'No description provided')}</div>
    </div>

    <!-- ACTION BUTTONS -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px; padding-top:20px; border-top:1px solid #E4E4E7;">
      <tr>
        <td>
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20ARKA%20Technovation%20Project%20Proposal" style="display:inline-block; padding:12px 24px; background-color:#09090B; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:600; border-radius:9999px; margin-right:10px;">
            Reply to ${escapeHtml(p.name)} &rarr;
          </a>
          ${p.phone ? `
          <a href="https://wa.me/${escapeHtml(p.phone.replace(/[^0-9]/g, ''))}" style="display:inline-block; padding:12px 20px; background-color:#25D366; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:600; border-radius:9999px;">
            Chat on WhatsApp
          </a>` : ''}
        </td>
      </tr>
    </table>

    <!-- METADATA FOOTNOTE -->
    <div style="margin-top:20px; font-size:11px; color:#A1A1AA; font-family:monospace;">
      Source Page: ${escapeHtml(p.pageUrl || '/contact')} · Time: ${p.submittedAt || new Date().toISOString()}${p.ip ? ` · IP: ${p.ip}` : ''}
    </div>
  `;

  const html = emailLayout({
    preheader,
    headerBadge: 'Project Inquiry',
    headerBadgeBg: '#FEF3C7',
    headerBadgeColor: '#B45309',
    title: 'New Client Project Inquiry & Proposal Request',
    subtitle: 'A prospective client has submitted a proposal request through the website.',
    bodyContent,
    accentColor: '#E8742C',
  });

  const text = `
NEW CLIENT PROJECT INQUIRY
ARKA Technovation Private Limited

Client Name: ${p.name}
Work Email: ${p.email}
Phone: ${p.phone || 'N/A'}
Company: ${p.company || 'N/A'}
Capabilities Needed: ${(p.services || []).join(', ') || 'N/A'}

Project Goals / Scope:
${p.message || 'N/A'}

Source Page: ${p.pageUrl || '/contact'}
Submitted At: ${p.submittedAt || new Date().toISOString()}
  `.trim();

  return { subject, html, text };
}

/**
 * 2. Career / Talent Application Template (/careers, /career)
 */
export function renderCareerEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const discipline = p.discipline || 'General Application';
  const subject = `[Career Application] ${p.name} — ${discipline}`;
  const preheader = `New application from ${p.name} for ${discipline}: Portfolio URL ${p.portfolio || ''}`;

  const bodyContent = `
    <!-- CANDIDATE HIGHLIGHT BOX -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F0FDF4; border:1px solid #BBF7D0; border-radius:12px; margin-bottom:24px;">
      <tr>
        <td style="padding:20px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">CANDIDATE NAME</div>
                <div class="value" style="font-size:16px; font-weight:700; color:#14532D;">${escapeHtml(p.name)}</div>
              </td>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">TARGET DISCIPLINE</div>
                <div class="value" style="color:#059669; font-weight:700;">${escapeHtml(discipline)}</div>
              </td>
            </tr>
            <tr>
              <td width="50%" valign="top">
                <div class="label">EMAIL ADDRESS</div>
                <div class="value"><a href="mailto:${escapeHtml(p.email)}" style="color:#059669; text-decoration:none; font-weight:600;">${escapeHtml(p.email)}</a></div>
              </td>
              <td width="50%" valign="top">
                <div class="label">PHONE NUMBER</div>
                <div class="value"><a href="tel:${escapeHtml(p.phone || '')}" style="color:#14532D; text-decoration:none;">${escapeHtml(p.phone || 'Not provided')}</a></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- PORTFOLIO / WORK URL -->
    <div style="margin-bottom:20px;">
      <div class="label" style="margin-bottom:6px;">PORTFOLIO / GITHUB / REEL LINK</div>
      <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 16px;">
        ${p.portfolio ? `
          <a href="${escapeHtml(p.portfolio)}" target="_blank" rel="noopener noreferrer" style="font-size:14px; font-weight:600; color:#2563EB; text-decoration:underline; word-break:break-all;">
            ${escapeHtml(p.portfolio)} &nearr;
          </a>
        ` : '<span style="font-size:13px; color:#71717A;">No portfolio link provided</span>'}
      </div>
    </div>

    <!-- HARDEST PROBLEM SOLVED / COVER NOTE -->
    <div style="margin-bottom:24px;">
      <div class="label" style="margin-bottom:6px;">HARDEST PROBLEM SOLVED & CRAFT HIGHLIGHTS</div>
      <div style="background-color:#FFFFFF; border:1px solid #E4E4E7; border-left:4px solid #10B981; border-radius:8px; padding:16px; font-size:14px; line-height:1.6; color:#18181B; white-space:pre-wrap;">${escapeHtml(p.message || 'No additional note provided')}</div>
    </div>

    <!-- ACTION BUTTONS -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px; padding-top:20px; border-top:1px solid #E4E4E7;">
      <tr>
        <td>
          ${p.portfolio ? `
          <a href="${escapeHtml(p.portfolio)}" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding:12px 24px; background-color:#10B981; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:600; border-radius:9999px; margin-right:10px;">
            Open Candidate Portfolio &nearr;
          </a>` : ''}
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20ARKA%20Technovation%20Engineering%20Opportunities" style="display:inline-block; padding:12px 20px; background-color:#09090B; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:600; border-radius:9999px;">
            Email Candidate
          </a>
        </td>
      </tr>
    </table>

    <div style="margin-top:20px; font-size:11px; color:#A1A1AA; font-family:monospace;">
      Source Page: ${escapeHtml(p.pageUrl || '/careers')} · Time: ${p.submittedAt || new Date().toISOString()}${p.ip ? ` · IP: ${p.ip}` : ''}
    </div>
  `;

  const html = emailLayout({
    preheader,
    headerBadge: 'Talent Network',
    headerBadgeBg: '#DCFCE7',
    headerBadgeColor: '#15803D',
    title: 'New Talent Application & Portfolio Submission',
    subtitle: 'A prospective engineer/specialist has submitted their profile for Noida HQ production roles.',
    bodyContent,
    accentColor: '#10B981',
  });

  const text = `
NEW TALENT APPLICATION
ARKA Technovation Private Limited

Candidate Name: ${p.name}
Discipline: ${discipline}
Email: ${p.email}
Phone: ${p.phone || 'N/A'}
Portfolio URL: ${p.portfolio || 'N/A'}

Hardest Problem Solved / Message:
${p.message || 'N/A'}

Source Page: ${p.pageUrl || '/careers'}
Submitted At: ${p.submittedAt || new Date().toISOString()}
  `.trim();

  return { subject, html, text };
}

/**
 * 3. Corporate World News & Editorial Pitch Template (/corporate-world-news)
 */
export function renderNewsPitchEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const company = p.company || 'Enterprise Leader';
  const subject = `[Editorial Pitch] ${p.name} · ${company}`;
  const preheader = `New editorial pitch from ${p.name} at ${company}: "${(p.topic || p.message || '').slice(0, 100)}..."`;

  const bodyContent = `
    <!-- SENDER HIGHLIGHT BOX -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FAF5FF; border:1px solid #E9D5FF; border-radius:12px; margin-bottom:24px;">
      <tr>
        <td style="padding:20px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">EXECUTIVE NAME</div>
                <div class="value" style="font-size:16px; font-weight:700; color:#581C87;">${escapeHtml(p.name)}</div>
              </td>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">COMPANY / ORGANIZATION</div>
                <div class="value" style="font-size:15px; font-weight:700; color:#09090B;">${escapeHtml(company)}</div>
              </td>
            </tr>
            <tr>
              <td width="50%" valign="top">
                <div class="label">CORPORATE EMAIL</div>
                <div class="value"><a href="mailto:${escapeHtml(p.email)}" style="color:#7C3AED; text-decoration:none; font-weight:600;">${escapeHtml(p.email)}</a></div>
              </td>
              <td width="50%" valign="top">
                <div class="label">ROUTING BUREAU</div>
                <div class="value" style="color:#6B21A8; font-weight:600;">Sector 63, Noida Editorial Desk</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- TOPIC / STORY ANNOUNCEMENT -->
    <div style="margin-bottom:24px;">
      <div class="label" style="margin-bottom:6px;">STORY ANNOUNCEMENT / INTERVIEW TOPIC</div>
      <div style="background-color:#FFFFFF; border:1px solid #E4E4E7; border-left:4px solid #7C3AED; border-radius:8px; padding:16px; font-size:14px; line-height:1.6; color:#18181B; white-space:pre-wrap;">${escapeHtml(p.topic || p.message || 'No description provided')}</div>
    </div>

    <!-- ACTION BUTTONS -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px; padding-top:20px; border-top:1px solid #E4E4E7;">
      <tr>
        <td>
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20Corporate%20World%20News%20Story%20Pitch%20-%20ARKA%20Technovation" style="display:inline-block; padding:12px 24px; background-color:#7C3AED; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:600; border-radius:9999px;">
            Reply to Executive &rarr;
          </a>
        </td>
      </tr>
    </table>

    <div style="margin-top:20px; font-size:11px; color:#A1A1AA; font-family:monospace;">
      Source Page: ${escapeHtml(p.pageUrl || '/corporate-world-news')} · Time: ${p.submittedAt || new Date().toISOString()}${p.ip ? ` · IP: ${p.ip}` : ''}
    </div>
  `;

  const html = emailLayout({
    preheader,
    headerBadge: 'Editorial Bureau',
    headerBadgeBg: '#F3E8FF',
    headerBadgeColor: '#7E22CE',
    title: 'Corporate World News Story Pitch',
    subtitle: 'An executive has submitted an industrial expansion, leadership interview, or press release pitch.',
    bodyContent,
    accentColor: '#7C3AED',
  });

  const text = `
CORPORATE WORLD NEWS STORY PITCH
ARKA Technovation Private Limited

Executive: ${p.name}
Company: ${company}
Email: ${p.email}

Story / Topic Description:
${p.topic || p.message || 'N/A'}

Source Page: ${p.pageUrl || '/corporate-world-news'}
Submitted At: ${p.submittedAt || new Date().toISOString()}
  `.trim();

  return { subject, html, text };
}

/**
 * 4. Service Audit & Consultation Request Template
 */
export function renderServiceAuditEmail(p: FormSubmissionPayload): { subject: string; html: string; text: string } {
  const service = p.serviceName || 'SEO & Technical Growth';
  const subject = `[Audit Request] ${p.name} · ${service}`;
  const preheader = `New audit request from ${p.name} for ${service}`;

  const bodyContent = `
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#EFF6FF; border:1px solid #BFDBFE; border-radius:12px; margin-bottom:24px;">
      <tr>
        <td style="padding:20px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">CLIENT NAME</div>
                <div class="value" style="font-size:16px; font-weight:700; color:#1E3A8A;">${escapeHtml(p.name)}</div>
              </td>
              <td width="50%" valign="top" style="padding-bottom:14px;">
                <div class="label">TARGET SERVICE</div>
                <div class="value" style="color:#2563EB; font-weight:700;">${escapeHtml(service)}</div>
              </td>
            </tr>
            <tr>
              <td width="50%" valign="top">
                <div class="label">EMAIL ADDRESS</div>
                <div class="value"><a href="mailto:${escapeHtml(p.email)}" style="color:#2563EB; text-decoration:none; font-weight:600;">${escapeHtml(p.email)}</a></div>
              </td>
              <td width="50%" valign="top">
                <div class="label">PHONE / WHATSAPP</div>
                <div class="value">${escapeHtml(p.phone || 'Not provided')}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <div style="margin-bottom:24px;">
      <div class="label" style="margin-bottom:6px;">AUDIT OBJECTIVES / CURRENT BENCHMARKS</div>
      <div style="background-color:#FFFFFF; border:1px solid #E4E4E7; border-left:4px solid #2563EB; border-radius:8px; padding:16px; font-size:14px; line-height:1.6; color:#18181B; white-space:pre-wrap;">${escapeHtml(p.message || 'No additional note provided')}</div>
    </div>

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px; padding-top:20px; border-top:1px solid #E4E4E7;">
      <tr>
        <td>
          <a href="mailto:${escapeHtml(p.email)}?subject=Re:%20ARKA%20Technovation%20Audit%20Consultation" style="display:inline-block; padding:12px 24px; background-color:#2563EB; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:600; border-radius:9999px;">
            Reply to Client &rarr;
          </a>
        </td>
      </tr>
    </table>

    <div style="margin-top:20px; font-size:11px; color:#A1A1AA; font-family:monospace;">
      Source Page: ${escapeHtml(p.pageUrl || '/seo-lead-generation')} · Time: ${p.submittedAt || new Date().toISOString()}
    </div>
  `;

  const html = emailLayout({
    preheader,
    headerBadge: 'Technical Audit',
    headerBadgeBg: '#DBEAFE',
    headerBadgeColor: '#1D4ED8',
    title: 'New Service Audit & Strategy Consultation',
    subtitle: 'A prospective client has requested an audit and technical consultation.',
    bodyContent,
    accentColor: '#2563EB',
  });

  const text = `
NEW SERVICE AUDIT REQUEST
ARKA Technovation Private Limited

Client: ${p.name}
Service: ${service}
Email: ${p.email}
Phone: ${p.phone || 'N/A'}

Message / Scope:
${p.message || 'N/A'}

Source Page: ${p.pageUrl || '/seo-lead-generation'}
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

