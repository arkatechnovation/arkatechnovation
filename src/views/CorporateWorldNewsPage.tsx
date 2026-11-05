'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowRight,
  LineChart,
  BarChart3,
  Newspaper,
  Mic,
  ShieldCheck,
  Globe2,
  FileText,
  Clock,
  CheckCircle2,
  Video,
  Radio,
  Building2,
  TrendingUp,
  Share2,
  Sparkles,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';

const PILLARS = [
  {
    num: '01',
    icon: Newspaper,
    title: 'Corporate World News',
    tagline: 'Authoritative Corporate Journalism & Industry Reporting',
    desc: 'Authoritative corporate journalism and editorial publications that position enterprise organizations at the forefront of their sector. We research market verticals, track economic trends, and report on key technological breakthroughs.',
    img: '/images/disciplines/discipline-05-corporate-world-news.jpg',
    capabilities: [
      'In-depth corporate journalism covering enterprise technology, AI, and industry milestones',
      'Editorial governance compliant with international press standards and factual verification',
      'Executive thought leadership features and founder op-eds published across business portals',
      'Archived digital publication dossiers accessible to institutional analysts and investors',
    ],
  },
  {
    num: '02',
    icon: Mic,
    title: 'Interview & Press Releases',
    tagline: 'C-Suite Broadcast Interviews & Strategic Wire Syndication',
    desc: 'Broadcast-grade multi-camera 4K studio recordings, executive podcasts, and authoritative corporate press releases that command journalistic attention with verified Tier-1 financial media syndication.',
    img: '/images/blogs/blog-08-executive-broadcast-news.webp',
    capabilities: [
      'Multi-camera 4K cinematic recordings at our Noida soundstage with prime lenses and teleprompters',
      'Direct pitch syndication to Tier-1 financial dailies, tech publications, and trade magazines',
      'Full post-production: audio mastering, motion lower-thirds, and b-roll packaging',
      'Official media room setup, embargo scheduling, and press distribution telemetry',
    ],
  },
  {
    num: '03',
    icon: Building2,
    title: 'Corporate News',
    tagline: 'Breaking Enterprise Updates, M&A & Corporate Announcements',
    desc: 'Real-time coverage of enterprise milestones, mergers and acquisitions (M&A), strategic joint ventures, leadership transitions, and capital expenditure reporting delivered with journalistic precision.',
    img: '/images/services/ux/website-design.webp',
    capabilities: [
      'Breaking corporate news distribution and formal announcement structuring',
      'M&A transaction breakdowns and post-merger integration announcements',
      'Leadership appointment profiles and corporate governance notifications',
      'Direct liaison with news desks to ensure accurate media syndication',
    ],
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Market Update',
    tagline: 'Daily Business Intelligence & Macroeconomic Tracking',
    desc: 'Continuous tracking of regulatory shifts, ministry compliance updates, economic indicators, commodity trends, and technology deployments across emerging enterprise markets.',
    img: '/images/products/grid-08-kestrix-thermal.webp',
    capabilities: [
      'Daily curated executive briefing notes and regulatory digests',
      'Earnings report breakdowns and capital expenditure tracking',
      'Macroeconomic indicator alerts for commercial decision-makers',
      'Sector-specific quarterly trend retrospectives and economic outlooks',
    ],
  },
  {
    num: '05',
    icon: LineChart,
    title: 'Industries Analysis',
    tagline: 'Empirical Sector Deep-Dives & Valuation Metrics',
    desc: 'Deep-dive vertical research dossiers built on primary surveys, customs data, supply chain metrics, and economic modeling, providing actionable competitive intelligence for enterprise leadership.',
    img: '/images/industries/industries-manufacturing.webp',
    capabilities: [
      'Vertical TAM/SAM sizing and market share migration analysis',
      'Competitor feature matrices, pricing teardowns, and tech stack audits',
      'Supply chain vulnerability reports and vendor dependency benchmarks',
      'Custom research whitepapers published under your brand or co-authored',
    ],
  },
  {
    num: '06',
    icon: BarChart3,
    title: 'Market Research',
    tagline: 'Proprietary Market Sizing & Competitive Benchmarks',
    desc: 'Rigorous empirical market research, customer sentiment benchmarking, Total Addressable Market (TAM) feasibility studies, and competitor positioning matrices.',
    img: '/images/products/grid-05-plant-seo.webp',
    capabilities: [
      'Primary market research with surveyed customer and enterprise decision-maker cohorts',
      'Total Addressable Market (TAM), SAM, and SOM financial feasibility studies',
      'Brand perception audits and customer satisfaction (CSAT/NPS) benchmarks',
      'Executive board presentation slide decks backed by verified empirical datasets',
    ],
  },
];

const FEATURED_DOSSIERS = [
  {
    id: 'dossier-01',
    category: 'High-Tech Manufacturing',
    readTime: 'In-Depth Dossier',
    date: 'Executive Briefing',
    title: 'The Great Supply Chain Migration: Electronics & Precision Engineering Corridors in Delhi NCR',
    excerpt: 'An exhaustive empirical study examining how regional precision component fabricators transitioned into Tier-1 global exporters through modernization and international certifications.',
    badge: 'Research Paper',
    deliverable: 'Sector Sizing & Export Roadmaps',
    author: 'Editorial Research Pod',
  },
  {
    id: 'dossier-02',
    category: 'Enterprise AI & Governance',
    readTime: 'Special Report',
    date: 'Technology Intelligence',
    title: 'Sovereign Enterprise AI: How Indian Corporate Leaders Are Deploying Compliant In-House Systems',
    excerpt: 'Case study analysis of custom private LLM deployments inside manufacturing and financial enterprises, delivering on-premises data isolation without recurring token license penalties.',
    badge: 'Whitepaper',
    deliverable: 'Governance Frameworks & Audits',
    author: 'Technology Intelligence Desk',
  },
  {
    id: 'dossier-03',
    category: 'Corporate Finance & M&A',
    readTime: 'Intelligence Briefing',
    date: 'Capital Markets',
    title: 'Valuation Multiples in Mid-Market B2B: Why Proprietary Software Outperforms Generic Services',
    excerpt: 'A financial investigation into recent M&A transactions demonstrating how custom digital assets and automated CRM/ERP infrastructure unlock superior valuation multiples upon strategic exit.',
    badge: 'Transaction Analysis',
    deliverable: 'Multiple Benchmarks & Due Diligence',
    author: 'Capital Markets Desk',
  },
];

const STUDIO_SPECS = [
  {
    title: 'Acoustically Isolated Broadcast Studio',
    desc: 'Ultra-quiet soundstage engineered to NC-20 acoustic standards with floating floors and multi-layer diffusers in Sector 63, Noida.',
  },
  {
    title: 'Multi-Camera Sony Cinema Rigs',
    desc: 'Matched 4K full-frame cinema bodies equipped with prime lenses, robotic teleprompters, and calibrated wireless monitoring.',
  },
  {
    title: 'Broadcast Audio & Telemetry Feeds',
    desc: 'Sennheiser wireless lavaliers, studio boom microphones, and real-time lower-thirds with Bloomberg & market chart overlays.',
  },
  {
    title: 'Rapid 4K Color & Edit Turnaround',
    desc: 'Dedicated DaVinci Resolve Studio workstations with live grading pipelines capable of delivering broadcast masters within 24 hours.',
  },
];

export default function CorporateWorldNewsPage() {
  const [pitchSent, setPitchSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'news-pitch',
          name,
          company,
          email,
          topic,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '/corporate-world-news',
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit pitch. Please try again.');
      }

      setPitchSent(true);
    } catch (err: any) {
      console.error('Editorial pitch submission error:', err);
      setErrorMessage(err.message || 'Unable to submit your story pitch. Please email our desk directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#E8742C] selection:text-white">
      {/* Navigation */}
      <PortfoliteNav />

      {/* ── Editorial Masthead Hero (NO BADGES) ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 border-b border-black/10 bg-[#FAF9F5] overflow-hidden">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-[#E8742C] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <Link href="/services" className="hover:text-[#E8742C] transition-colors">Services</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <span className="text-black font-medium">Corporate World News</span>
          </div>

          <div className="max-w-4xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-3">
              Editorial &amp; Executive Intelligence · Sector 63, Noida
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08] mb-6">
              Corporate World News &amp; Market Intelligence
            </h1>
            <p className="text-base sm:text-xl text-zinc-600 font-light leading-relaxed max-w-3xl">
              Authoritative corporate journalism, executive interview broadcasts, strategic press releases, breaking business updates, and empirical market research produced by our dedicated editorial pods in Sector 63, Noida.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white hover:bg-[#E8742C] text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Schedule Executive Interview</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-black/15 text-black hover:border-black text-sm font-medium transition-colors"
              >
                <span>Explore Editorial Pillars</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>

          {/* Qualitative Capabilities Strip (NO NUMBER CLAIMS) */}
          <div className="mt-14 pt-8 border-t border-black/10 grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <p className="font-bold text-sm text-black uppercase tracking-wider">Primary Sourced</p>
              <p className="text-zinc-500 mt-1">Rigorous Journalistic Fact-Checking</p>
            </div>
            <div>
              <p className="font-bold text-sm text-black uppercase tracking-wider">Executive Broadcasts</p>
              <p className="text-zinc-500 mt-1">In-House 4K Noida Soundstage</p>
            </div>
            <div>
              <p className="font-bold text-sm text-black uppercase tracking-wider">Wire Distribution</p>
              <p className="text-zinc-500 mt-1">Direct Tier-1 Press Syndication</p>
            </div>
            <div>
              <p className="font-bold text-sm text-[#E8742C] uppercase tracking-wider">Complete IP Rights</p>
              <p className="text-zinc-500 mt-1">Full Footage &amp; Media Handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial Pillars Section ── */}
      <section id="pillars" className="py-20 sm:py-28 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mb-14 sm:mb-20">
          <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
            Five Core Disciplines
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            How We Position Industry Leaders
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            In an era of generic AI summaries and noisy social feeds, corporate authority is built on verified empirical data, executive conviction, and direct journalistic relationships.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-10 lg:gap-14">
          {PILLARS.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={p.num}
                id={`pillar-${p.num}`}
                className={`scroll-mt-36 group rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-white border border-black/[0.08] hover:border-black/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } relative`}
              >
                {/* ── Visual Panel: Responsive image height on mobile, full editorial height on desktop ── */}
                <div className="w-full h-56 sm:h-72 lg:h-auto lg:min-h-[440px] lg:w-[42%] xl:w-[40%] shrink-0 relative overflow-hidden bg-zinc-100 self-stretch">
                  <img
                    src={p.img}
                    alt={`${p.title} — ARKA Technovation`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* ── Context & Deliverables Panel: Compact mobile spacing, expansive desktop typography ── */}
                <div className="w-full lg:w-[58%] xl:w-[60%] p-5 sm:p-8 lg:p-11 flex flex-col justify-between bg-zinc-50/50 group-hover:bg-zinc-50 transition-colors duration-300 flex-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black tracking-tight leading-snug font-display text-balance">
                      {p.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs lg:text-sm font-mono text-[#E8742C] font-semibold mt-1.5 leading-relaxed">
                      {p.tagline}
                    </p>

                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-600 leading-relaxed font-normal text-pretty">
                      {p.desc}
                    </p>

                    <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-black/8">
                      <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8742C]" />
                        Deliverables &amp; Technical Capabilities:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {p.capabilities.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8742C] shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 sm:mt-8 sm:pt-5 border-t border-black/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    {(() => {
                      const targetLink =
                        p.num === '01' ? '/corporate-world-news' :
                        p.num === '02' ? '/services/interview-press-releases' :
                        p.num === '03' ? '/services/corporate-news-ma' :
                        p.num === '04' ? '/services/market-update-briefs' :
                        p.num === '05' ? '/services/industries-analysis-reports' :
                        p.num === '06' ? '/services/market-research-tam' :
                        '/corporate-world-news';

                      return (
                        <Link
                          href={targetLink}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-black/15 text-xs font-semibold hover:border-black hover:bg-black hover:text-white transition-all shadow-xs w-fit group/sub"
                        >
                          <span>Explore Detailed Discipline</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/sub:translate-x-0.5 transition-transform" />
                        </Link>
                      );
                    })()}

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-[#E8742C] text-xs sm:text-sm font-semibold transition-[background-color,transform] duration-200 active:scale-[0.98] shadow-sm group/btn w-full sm:w-auto"
                    >
                      <span>Schedule Executive Interview</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Featured Intelligence Dossiers & Reports ── */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
                Empirical Market Intelligence
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Featured Executive Dossiers &amp; Research
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E8742C] hover:text-white transition-colors"
            >
              <span>Commission Custom Research</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_DOSSIERS.map((d) => (
              <div
                key={d.id}
                className="flex flex-col justify-between bg-zinc-900/90 border border-white/10 rounded-2xl p-7 sm:p-8 hover:border-white/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                    <span className="text-[#E8742C] uppercase tracking-wider font-semibold">{d.category}</span>
                    <span>{d.readTime}</span>
                  </div>

                  <p className="text-xs font-mono text-zinc-500 mb-2">{d.date}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#E8742C] transition-colors mb-3">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {d.excerpt}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 font-medium">{d.badge}</span>
                  <span className="text-[#E8742C] font-medium">{d.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Noida Sector 63 Broadcast Soundstage ── */}
      <section className="py-20 sm:py-28 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
              Physical Production Infrastructure
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black leading-tight mb-4">
              Sector 63, Noida Executive Broadcast Soundstage
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed mb-8">
              We do not outsource interviews to third-party spaces or rely on noisy remote webcams. Corporate leaders record directly at our dedicated facility in Rayos Business Park, equipped with acoustic isolation and cinema-grade imaging.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {STUDIO_SPECS.map((s, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/8">
                  <h4 className="text-sm font-bold text-black mb-1.5">{s.title}</h4>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-black/12 aspect-[4/3] bg-zinc-100 shadow-xl">
              <img
                src="/images/disciplines/discipline-05-corporate-world-news.jpg"
                alt="ARKA Technovation Corporate World News Broadcast Studio in Sector 63, Noida"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 inset-x-6 text-white">
                <p className="text-xs font-mono text-[#E8742C] uppercase tracking-wider font-semibold">Live Production Suite</p>
                <p className="text-lg font-bold">Rayos Business Park, Sector 63, Noida</p>
                <p className="text-xs text-zinc-300 font-light mt-0.5">Equipped with 4K multi-camera rigs, teleprompters &amp; live financial telemetry overlays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial Standards & Ethics Charter ── */}
      <section className="py-16 sm:py-20 border-t border-black/10 bg-[#FAF9F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
              Integrity &amp; Standards
            </p>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-black">
              The ARKA Technovation Editorial Charter
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-white border border-black/8">
              <span className="text-[#E8742C] font-bold text-sm block mb-2">01 / Primary Sources</span>
              <p className="text-zinc-600 leading-relaxed font-sans text-xs">
                Every market figure, export metric, and corporate transaction is cross-referenced with official filings, audited books, and direct stakeholder interviews.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/8">
              <span className="text-[#E8742C] font-bold text-sm block mb-2">02 / Strict Embargoes</span>
              <p className="text-zinc-600 leading-relaxed font-sans text-xs">
                We handle unreleased product specs, IPO schedules, and executive transitions under rigorous NDAs with coordinated time-lock release protocols.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/8">
              <span className="text-[#E8742C] font-bold text-sm block mb-2">03 / Zero Clickbait</span>
              <p className="text-zinc-600 leading-relaxed font-sans text-xs">
                Headlines and lead paragraphs are written for commercial accuracy and executive clarity, completely rejecting hyperbolic consumer clickbait.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-black/8">
              <span className="text-[#E8742C] font-bold text-sm block mb-2">04 / Complete IP Handover</span>
              <p className="text-zinc-600 leading-relaxed font-sans text-xs">
                Clients receive full raw footage, audio multitracks, transcripts, and unrestricted commercial rights to all syndicated assets upon release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Story Pitch & Consultation Strip ── */}
      <section className="py-20 sm:py-28 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-3">
          Pitch a Corporate Story or Book Studio
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
          Ready to Feature Your Leadership Story?
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you are announcing a major industrial expansion, launching a breakthrough enterprise product, or positioning your executive team as vertical thought leaders, our editorial desk is ready to review your story.
        </p>

        {pitchSent ? (
          <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-900 max-w-lg mx-auto">
            <CheckCircle2 size={32} className="text-emerald-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold">Story Pitch Submitted</h4>
            <p className="text-xs sm:text-sm text-emerald-700 mt-1 font-light leading-relaxed">
              Thank you, {name}. Our editorial director will review your inquiry within 4 business hours and contact you at {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-[#FAF9F5] border border-black/10 text-left max-w-2xl mx-auto shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">Executive / Contact Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Verma"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rajesh@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">Company / Organization *</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Precision Engineering Ltd."
                className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono text-zinc-600 mb-1.5 uppercase tracking-wider">Brief Announcement / Topic Description</label>
              <textarea
                rows={3}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Briefly describe your expansion, interview request, or research requirement..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:border-black resize-none"
              />
            </div>

            {/* Honeypot spam defense */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs font-mono text-zinc-500">
                Direct Desk: +91 97114 87316 · Sector 63, Noida
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white hover:bg-[#E8742C] text-sm font-semibold transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting to Desk...</span>
                  </>
                ) : (
                  <span>Submit to Editorial Desk</span>
                )}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Footer */}
      <PortfoliteFooter />
    </div>
  );
}
