'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers,
  ChevronDown,
  Cpu,
  Zap,
  Check,
  Phone,
  Mail,
  Award,
  Globe,
  TrendingUp,
  FileText,
  Compass,
} from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { SERVICES, COMPANY } from '../lib/data';

// Specialized core capabilities and tags per service discipline
const SERVICE_TECH_STACK: Record<string, string[]> = {
  'development': [
    'CRM',
    'ERP',
    'Mobile App',
    'E-Commerce Website',
    'Corporate Website',
    'Custom Software',
  ],
  'digital-marketing': [
    'Digital Marketing',
    'Social Media Marketing',
    'Content Marketing',
    'Performance Marketing',
    'Branding',
    'Google Ads',
    'Meta Ads',
    'PR Management',
  ],
  'seo-lead-generation': [
    'SEO',
    'GEO Services',
    'AEO Services',
    'On-Page Services',
    'Off-Page Services',
    'Local SEO (GMB)',
    'Google Marketplace Listing',
  ],
  'film-making': [
    'Film Production',
    'Digital Ads',
    'TV Ads',
    'Corporate Film Production',
    'Podcasts',
    'Personal Interviews',
    'AI Video Creation',
    'Product Photoshoot',
    'Model Shoot',
  ],
  'corporate-world-news': [
    'Corporate World News',
    'Interview & Press Releases',
    'Corporate News',
    'Market Update',
    'Industries Analysis',
    'Market Research',
  ],
  'digital-advertising': ['Google Ads PMax', 'LinkedIn Campaign Manager', 'Addressable Geofencing', 'The Trade Desk', 'DV360', 'ClickCease'],
  'crm-software': ['Custom SaaS Architecture', 'PostgreSQL & Redis', 'REST & GraphQL APIs', 'Twilio & RingCentral', 'Tally Integration', 'Role-Based Access'],
  'content-marketing': ['Original Editorial', 'SEO Copywriting', 'Motion Design', '2D/3D Kinetic Graphics', 'Content Calendering', 'Whitepaper Research'],
  'e-commerce': ['Shopify Plus', 'Custom Liquid & Headless', 'Magento 2', 'WooCommerce', 'Stripe & Razorpay', 'Inventory Sync Middleware'],
  'analytics-attribution': ['GA4 BigQuery Export', 'Looker Studio Enterprise', 'Multi-Touch Attribution', 'Dynamic Call Tracking', 'Data Lakehouse', 'SQL BI'],
  'ux-interactive': ['Figma Design Systems', 'Framer Motion', 'WCAG 2.2 AA Audit', 'FullStory Heatmaps', 'Multivariate CRO', 'Design Tokens'],
};

// Strategic value propositions per service
const SERVICE_STRATEGIC_BENEFITS: Record<string, { title: string; desc: string; metrics: string }[]> = {
  'corporate-world-news': [
    { title: 'Verified Executive Authority', desc: 'Elevate your C-suite leaders from participants to industry agenda-setters with broadcast-grade interviews and editorial features.', metrics: 'Tier-1 Syndication' },
    { title: 'Empirical Market Intelligence', desc: 'Gain proprietary competitive edges with primary-source research and deep sector benchmarks before they become common knowledge.', metrics: '100% Primary Data' },
    { title: 'Reputation & Narrative Control', desc: 'Command the conversation in your industry through proactive press releases and rapid-response corporate communications pods.', metrics: 'Zero Ambiguity' },
  ],
  'crm-software': [
    { title: 'Eliminate Disconnected Silos', desc: 'Sync marketing lead ingestion, sales pipelines, and customer support tickets into a single unified database with zero data duplication.', metrics: '100% Data Parity' },
    { title: 'Automated 1-to-1 Customer Journeys', desc: 'Deploy automated behavioral triggers that nurture leads, remind clients of expiring agreements, and trigger re-order workflows on autopilot.', metrics: '12h Saved Weekly' },
    { title: 'Full Intellectual Property Ownership', desc: 'We deliver complete production source code upon launch. No monthly vendor seat licensing fees or proprietary software lock-in.', metrics: 'Zero Seat Fees' },
  ],
  'seo-lead-generation': [
    { title: 'Page-One Organic Search Dominance', desc: 'Capture high-intent commercial buyers searching for your solutions on Google, turning organic search into your most profitable revenue engine.', metrics: '90%+ First-Page' },
    { title: 'Core Web Vitals Speed Engineering', desc: 'Sub-second load times and zero layout shift keep visitors engaged and satisfy Google’s strict page experience ranking signals.', metrics: '<1.2s LCP Score' },
    { title: 'Ethical High-Authority Backlink Assets', desc: 'High-authority digital PR and thought leadership editorial placements that compound domain authority year after year.', metrics: '85+ Domain Rank' },
  ],
  'film-making': [
    { title: 'In-House Cinema Production Crew', desc: 'From initial treatment and scriptwriting to on-location 4K/8K shooting and DaVinci color grading, executed 100% by our full-time crew.', metrics: '100% In-House' },
    { title: 'Broadcast-Grade Commercials & CSR', desc: 'Documentaries, plant factory tours, and TV commercials produced with cinema cameras, studio lighting, and licensed orchestral sound.', metrics: '4K/8K Cinema' },
    { title: 'High-Converting Video Assets', desc: '73% of product video viewers make a purchase. We produce multi-aspect cut-downs engineered specifically for high conversion.', metrics: '+144% Conversion' },
  ],
};

const DEFAULT_STRATEGIC_BENEFITS = [
  { title: 'Dedicated In-House Craft Leads', desc: 'Direct access to senior engineers, designers, and growth directors working together under one roof in Sector 63, Noida.', metrics: 'Zero Outsourcing' },
  { title: 'Agile Two-Week Milestone Sprints', desc: 'Demonstrable working deliverables every fortnight with direct staging server access and transparent sprint reviews.', metrics: '2-Week Milestones' },
  { title: 'Radical Reporting & ROI Governance', desc: 'Live client dashboards displaying the exact metrics and telemetry we see internally, connecting digital craft to revenue.', metrics: '100% Transparency' },
];

export default function PortfoliteServiceDetail({ initialSlug }: { initialSlug?: string } = {}) {
  const params = useParams();
  const slug = initialSlug || (params?.slug as string) || '';
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-black font-sans flex flex-col justify-between selection:bg-solar selection:text-white">
        <PortfoliteNav />
        <div className="py-44 text-center px-4 max-w-lg mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-solar mb-3 font-semibold">Service Not Found</p>
          <h1 className="text-4xl font-bold tracking-tight text-black">Discipline unavailable.</h1>
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-light">
            The service discipline you requested does not exist or has been renamed in our catalog.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-white">Back to All Services</span>
          </Link>
        </div>
        <PortfoliteFooter />
      </div>
    );
  }

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];
  const prevService = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];

  const techStack = SERVICE_TECH_STACK[service.slug] || [
    'Next.js 15 & React',
    'Enterprise Cloud APIs',
    'Custom Telemetry',
    'Automated CI/CD',
    'SQL Analytics',
    'SLA Monitoring',
  ];

  const benefits = SERVICE_STRATEGIC_BENEFITS[service.slug] || DEFAULT_STRATEGIC_BENEFITS;

  const faqs = [
    {
      q: `How long does an engagement in ${service.title} typically take to ship?`,
      a: `Initial architecture, setup, and discovery milestones run 2 to 3 weeks. Production deliverables roll out in staged 2-week agile sprints, with live staging access throughout. Ongoing growth and retainer programs provide continuous weekly optimization.`,
    },
    {
      q: 'Will our company own 100% of the intellectual property, code, and media assets?',
      a: 'Yes. Upon final delivery and sign-off, full intellectual property ownership, source code repositories, raw video footage, and design tokens are transferred to your company. We never lock clients into proprietary hosting or license fees.',
    },
    {
      q: 'How does your Noida engineering and creative team coordinate with our internal staff?',
      a: 'You receive direct access to dedicated craft directors and technical leads via Slack, Microsoft Teams, weekly sprint video calls, or in-person meetings at our corporate headquarters in Sector 63, Noida. No junior account coordinators in between.',
    },
    {
      q: 'What ongoing maintenance and Service Level Agreements (SLAs) are available?',
      a: 'We provide structured monthly retainers covering 24/7 server uptime monitoring, security patching, Core Web Vitals optimization, database maintenance, and guaranteed emergency response times within 2 hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Hero Section ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left"
            >
              {service.title}
            </motion.h1>

            {/* Deep Overview Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left"
            >
              {service.desc}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Speak with Lead Engineer</span>
              </a>
            </motion.div>
          </div>

          {/* Tech Ecosystem Strip */}
          <div className="mt-8 pt-6 border-t border-black/10 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3 font-medium">
              Core Capabilities &amp; Key Focus Areas:
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-zinc-100 border border-black/8 text-xs font-mono text-zinc-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of Engagement: Rich Split Card Structure (matching SEO Lead Generation) ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div id="scope" className="scroll-mt-36 text-left max-w-3xl mb-12 sm:mb-16">
          <span id="erp" className="block scroll-mt-36" />
          <span id="crm" className="block scroll-mt-36" />
          <span id="lms" className="block scroll-mt-36" />
          <span id="mobile" className="block scroll-mt-36" />
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Scope of Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            What is included in this discipline.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Every submodule is executed 100% in-house with dedicated craft leads, strict QA benchmarks, and guaranteed deliverables.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-10 lg:gap-14">
          {service.subs.map((sub, i) => {
            const isEven = i % 2 === 0;
            const subLower = sub.name.toLowerCase();
            const cardId = subLower.includes('erp')
              ? 'erp-module'
              : subLower.includes('crm')
              ? 'crm-module'
              : subLower.includes('lead management') || subLower.includes('lms') || subLower.includes('sales pipeline')
              ? 'lms-module'
              : subLower.includes('mobile') || subLower.includes('responsive web design')
              ? 'mobile-module'
              : subLower.includes('ecommerce') || subLower.includes('e-commerce')
              ? 'ecommerce-module'
              : subLower.replace(/[^a-z0-9]+/g, '-');

            const moduleImg = sub.img || service.img;
            const highlights = sub.highlights && sub.highlights.length > 0
              ? sub.highlights
              : [
                  'Dedicated in-house craft pod in Sector 63, Noida',
                  'Enterprise QA benchmarking and automated unit testing',
                  'Role-based permissions and high-throughput architecture',
                  'Guaranteed SLAs, complete IP rights & full source code handover',
                ];

            return (
              <article
                key={sub.name}
                id={cardId}
                className={`scroll-mt-36 group rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-white border border-black/[0.08] hover:border-black/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } relative`}
              >
                {/* ── Visual Panel: Responsive image height on mobile, full editorial height on desktop ── */}
                <div className="w-full h-48 sm:h-64 lg:h-auto lg:min-h-[440px] lg:w-[42%] xl:w-[40%] shrink-0 relative overflow-hidden bg-zinc-100">
                  <img
                    src={moduleImg}
                    alt={`${sub.name} — ARKA Technovation`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-solar font-mono text-xs font-bold border border-white/10 tracking-wider">
                    MODULE {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* ── Context & Deliverables Panel: Compact mobile spacing, expansive desktop typography ── */}
                <div className="w-full lg:w-[58%] xl:w-[60%] p-5 sm:p-8 lg:p-11 flex flex-col justify-between bg-zinc-50/50 group-hover:bg-zinc-50 transition-colors duration-300">
                  <div>
                    {/* Module pill badge */}
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs text-solar font-semibold uppercase tracking-wider">
                      <span>MODULE {String(i + 1).padStart(2, '0')}</span>
                      <span>•</span>
                      <span>In-House Craft Pod</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black tracking-tight leading-snug font-display text-balance">
                      {sub.name}
                    </h3>

                    {/* Punchy Subtitle */}
                    {sub.subtitle && (
                      <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-solar font-semibold mt-1.5 leading-relaxed">
                        {sub.subtitle}
                      </p>
                    )}

                    {/* Editorial Context Description */}
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-600 leading-relaxed font-normal text-pretty">
                      {sub.desc}
                    </p>

                    {/* Deliverables & Technical Capabilities Grid */}
                    <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-black/8">
                      <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                        Deliverables &amp; Technical Capabilities:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {highlights.map((pt, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-solar shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Action Bar */}
                  <div className="mt-5 pt-4 sm:mt-8 sm:pt-5 border-t border-black/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>100% In-House · Noida Craft Pod</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-solar text-xs sm:text-sm font-semibold transition-[background-color,transform] duration-200 active:scale-[0.98] shadow-sm group/btn w-full sm:w-auto"
                    >
                      <span>Request Custom Strategy</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── High-Contrast Strategic Benefits Matrix (Theming Focus) ── */}
      <section className="py-20 sm:py-28 bg-zinc-950 text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Strategic Commercial Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Why Enterprise Leaders Partner With Us
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              We eliminate traditional agency layers, guaranteeing complete technical rigor, radical reporting transparency, and direct specialist collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-900/90 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-solar font-semibold uppercase tracking-wider">
                      Advantage 0{idx + 1}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-xs font-mono text-zinc-300">
                      {b.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Execution Roadmap & Deliverables Split ── */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
              Step-by-Step Engineering Roadmap
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              A disciplined, staged engineering lifecycle ensuring predictable delivery milestones.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Execution Roadmap */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-4">
                {service.process.map(([phase, desc], i) => (
                  <div
                    key={phase}
                    className="p-6 rounded-2xl bg-white border border-black/10 flex gap-5 items-start shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-black/10 flex items-center justify-center text-solar font-mono text-xs shrink-0 font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-black">{phase}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Deliverables List & Quick Action Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-black/10 shadow-xl space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-1">
                  Guaranteed Output
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  What you receive
                </h3>
              </div>

              <ul className="space-y-3 pt-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-black/10 space-y-3">
                <Link
                  to="/contact"
                  className="site-button w-full py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                  style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
                >
                  <span style={{ color: '#FFFFFF' }}>Start this Project</span>
                  <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
                </Link>
                <p className="text-center text-[11px] text-zinc-500 font-mono">
                  Kickoff timeline: 3–5 business days · Noida HQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive FAQ Accordion ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Discipline FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Everything you need to know about our engineering standards, deployment cadences, and service-level agreements.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-black leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-solar' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-600 font-light leading-relaxed border-t border-black/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Navigation between adjacent services ── */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <Link
            to={`/services/${prevService.slug}`}
            className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Previous Discipline</span>
              <span className="font-semibold text-black">{prevService.title}</span>
            </div>
          </Link>

          <Link
            to="/services"
            className="px-5 py-2.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-semibold text-zinc-800 hover:text-black hover:bg-zinc-200 transition-colors"
          >
            All 10 Disciplines Directory
          </Link>

          <Link
            to={`/services/${nextService.slug}`}
            className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition-colors group text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Next Discipline</span>
              <span className="font-semibold text-black">{nextService.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
