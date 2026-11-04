'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users2,
  Building2,
  ShieldCheck,
  Zap,
  Code2,
  Video,
  Search,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  HeartHandshake,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Globe,
  TrendingUp,
  Newspaper,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

export default function WhoWeArePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const teamPods = [
    {
      role: 'Full-Stack Software & Cloud Architecture',
      icon: Code2,
      members: 'Next.js, React, Node.js, Python, PostgreSQL, and cloud architecture specialists',
      desc: 'We develop bespoke ERP systems, custom operational CRMs, relational database schemas, and authenticated API architectures, transferring full intellectual property and source code ownership to your organization.',
      deliverables: ['Custom CRM & ERP Platforms', 'High-Performance Frontends', 'Relational Database Engineering', 'Cloud CI/CD & Infrastructure'],
    },
    {
      role: 'Search Optimization & Performance Media',
      icon: Search,
      members: 'Technical crawl architects, Schema.org modelers, and media performance leads',
      desc: 'We resolve crawl architecture bottlenecks, construct semantic knowledge graphs, and deploy targeted acquisition campaigns across Google and Meta, tying marketing spend directly to verified commercial pipeline.',
      deliverables: ['Technical Crawl Governance', 'Core Web Vitals Engineering', 'Entity Schema & AI Citations', 'Closed-Loop Revenue Telemetry'],
    },
    {
      role: 'Product Design & Design Systems',
      icon: Layers,
      members: 'Design system leads, accessibility specialists, and interaction engineers',
      desc: 'We craft tokenized Figma component libraries, accessible web interfaces compliant with WCAG accessibility standards, and high-converting user journeys validated through behavioral analysis.',
      deliverables: ['Figma Tokenized UI Kits', 'Interactive Application Prototypes', 'WCAG Accessibility Audits', 'Conversion Heatmap Optimization'],
    },
    {
      role: 'Cinematography & Commercial Production',
      icon: Video,
      members: 'Directors, cinematographers, DaVinci Resolve colorists, and sound designers',
      desc: 'Operating our own soundstage in Sector 63, Noida, our crew writes, films, and post-produces corporate documentaries, television commercials, industrial plant walkthroughs, and executive interview series.',
      deliverables: ['Corporate Cinema & Documentaries', 'Broadcast Commercial Production', 'Executive Leadership Series', 'Multi-Platform Video Formats'],
    },
    {
      role: 'Corporate Journalism & Market Intelligence',
      icon: Newspaper,
      members: 'Financial journalists, sector research analysts, and editorial leads',
      desc: 'We research industry verticals, conduct executive broadcast interviews, draft AP-compliant corporate press releases, and syndicate verified announcements across national media networks.',
      deliverables: ['Executive Broadcast Interviews', 'Media Wire Syndication', 'Empirical Sector Whitepapers', 'Curated Market Intelligence'],
    },
  ];

  const methodology = [
    {
      num: '01',
      title: 'Unified In-House Execution',
      desc: 'Our software engineers, search marketers, interface designers, and commercial cinematographers work collaboratively under direct supervision. By eliminating third-party contractors and unvetted handoffs, we protect client source code, uphold strict architectural benchmarks, and maintain complete accountability for every production release.',
    },
    {
      num: '02',
      title: 'Milestone-Driven Staged Sprints',
      desc: 'Engagements are structured into focused iterative delivery cycles. At each sprint milestone, stakeholders review functional deployments on isolated staging environments, maintaining clear velocity, transparent progress, and close alignment with commercial outcomes.',
    },
    {
      num: '03',
      title: 'Direct Access to Craft Leads',
      desc: 'Clients communicate directly with the software engineers architecting their databases, the technical leads managing their search frameworks, and the directors producing their commercial media. Removing non-technical intermediary layers prevents misinterpretation and accelerates strategic decisions.',
    },
    {
      num: '04',
      title: 'Shared Telemetry & Dashboards',
      desc: 'We grant client stakeholders direct access to the same analytics telemetry, server performance metrics, and search visibility data that our internal leads monitor, providing complete transparency into infrastructure reliability and pipeline growth.',
    },
  ];

  const faqs = [
    {
      q: 'Who leads the company?',
      a: 'The company is led by Founder & Director Mr. Kranti Parashar, who brings over 18+ years of industry experience across enterprise software development, digital marketing strategy, and corporate film production. The firm has a 10-year operating history, having been formerly known as Jaikvik Technology India Pvt. Ltd., with related corporate ventures including Ibem Solutions LLP.',
    },
    {
      q: 'Where is your corporate headquarters located?',
      a: 'Our facility is located at Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India. Our office houses our engineering bays, design workstations, broadcast video editing and color grading suites, and consultation rooms.',
    },
    {
      q: 'What is your track record in enterprise deployments?',
      a: 'Our team delivers custom ERP platforms, web applications, commercial search engines, and corporate cinema productions for mid-market enterprises and regional manufacturers, backed by verified client reviews and ongoing technical partnerships.',
    },
    {
      q: 'Why do you keep all project work in-house instead of outsourcing?',
      a: 'Outsourcing introduces communication bottlenecks, uneven code quality, and security vulnerabilities. By employing our developers, SEO analysts, designers, and film crew on staff in Sector 63, Noida, we maintain quality standards, protect client data, and provide direct accountability.',
    },
    {
      q: 'Can we schedule an in-person meeting at your Noida office?',
      a: 'Yes. We welcome prospective clients and partners to visit our office at Rayos Business Park in Sector 63, Noida. You can meet our team, review work on staging servers, and discuss your roadmap in detail.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#B85014] mb-3">
              Leadership &amp; Heritage
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left">
              About Us
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed font-light text-left">
              Operating as ARKA Technovation Private Limited (formerly known as Jaikvik Technology India Pvt. Ltd.), our studio unifies full-stack software development, technical search optimization, and commercial film production under direct engineering leadership. Directed by Founder Mr. Kranti Parashar, we build mission-critical digital systems and growth engines for established mid-market enterprises, regional manufacturers, and institutional partners across India and overseas.
            </p>

            {/* Verified Statistics Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-black/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-black font-mono">10+ Years</p>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mt-1">Company Operations</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-black font-mono">500+</p>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-black font-mono">100+</p>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mt-1">Client Testimonials</p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Speak with Leadership</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Call Noida Office: {COMPANY.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Heritage & Executive Leadership ── */}
      <section id="story" className="scroll-mt-36 py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Company Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
              Engineering Discipline Backed by Executive Experience
            </h2>
            <p className="mt-5 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Our operating philosophy has remained straightforward: build systems directly, eliminate intermediary layers, and take undivided responsibility for software quality, search visibility, and visual assets. Rather than dividing client projects across disparate freelance contractors or third-party vendors, every system architecture and creative deliverable is developed by our full-time specialists.
            </p>
            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              The firm is directed by Founder Mr. Kranti Parashar, whose professional career spans more than 18 years across enterprise technology consulting, systems engineering, and commercial growth. Today, he works directly with our craft leads to ensure every engagement meets rigorous technical standards and drives measurable commercial value.
            </p>

            {/* Corporate pedigree tags */}
            <div className="mt-6 pt-5 border-t border-black/10">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                Executive Career Background:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Tata Teleservices Ltd',
                  'Kotak Mahindra Bank',
                  'Aegon Religare',
                  'Indiamart Intermesh Ltd.',
                  'Care Ratings Ltd.',
                  'Ibem Solutions LLP',
                  'Jaikvik Technology India Pvt Ltd',
                ].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 border border-black/8 text-zinc-800"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Founder Executive Card */}
          <div className="md:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-black/12 bg-zinc-100 aspect-[4/5] shadow-xl group">
              <img
                src="/portfolite/kranti-parashar.webp"
                alt="Mr. Kranti Parashar — Founder & Director"
                loading="lazy"
                decoding="async"
                width="768"
                height="1024"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-95 pointer-events-none" />

              <div className="absolute bottom-6 inset-x-6 flex items-end justify-between z-10">
                <div>
                  <p className="text-white font-bold text-lg">Mr. Kranti Parashar</p>
                  <p className="text-zinc-300 text-xs">Founder &amp; Director</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold shrink-0">
                  18+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Working Methodology Pillars ── */}
      <section id="methodology" className="scroll-mt-36 py-20 sm:py-28 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Delivery Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3">
              How Projects Run Inside Our Studio
            </h2>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-light">
              Disciplined milestone engineering cycles with verified staging reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {methodology.map((m) => (
              <div
                key={m.num}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-black/10 hover:border-black/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-black tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── In-House Specialist Pods ── */}
      <section className="py-20 sm:py-28 bg-zinc-950 text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Specialized Pods
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Cross-Functional Craft Under One Roof
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Engineers, designers, marketers, and filmmakers collaborating side by side in Sector 63, Noida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {teamPods.map((pod) => {
              const Icon = pod.icon;
              return (
                <div key={pod.role} className="p-8 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-solar mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{pod.role}</h3>
                    <p className="text-xs font-mono text-zinc-400 mt-2">{pod.members}</p>
                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-light">{pod.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {pod.deliverables.map((item, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ── Corporate Headquarters & Contact Information ── */}
      <section id="leadership" className="scroll-mt-36 py-16 bg-zinc-50 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-zinc-700 mb-4">
                <Building2 className="w-3.5 h-3.5 text-solar" />
                <span>Engineering Center</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Visit Us in Sector 63, Noida
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                Our facility is located at {COMPANY.hq}. The space houses our full-stack development bays, design review workstations, broadcast video editing and color grading suites, and client consultation suites.
              </p>
              <div className="mt-6 space-y-2.5 text-sm text-zinc-700">
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-solar shrink-0" />
                  <span>{COMPANY.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-solar shrink-0" />
                  <span>{COMPANY.phone} · Mon–Sat 9:30 AM – 6:30 PM IST</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-solar shrink-0" />
                  <span>{COMPANY.email}</span>
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
                Direct Leadership Access
              </span>
              <h4 className="text-xl font-bold text-black mt-2">
                Meet With Our Leadership Team
              </h4>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-light">
                We believe executive leadership should be accessible. When evaluating an enterprise software development build, corporate film campaign, or search marketing engagement, you will meet directly with Mr. Kranti Parashar and our discipline directors to align on goals and deliverables.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-solar">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-black">Sector 63, Noida HQ Consultation</p>
                  <p className="text-xs text-zinc-500">In-person &amp; virtual discovery sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive FAQ Accordion ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Direct Answers on Operations, Leadership &amp; Facility
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Clear responses regarding our history, ownership, in-house team structure, and facility.
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

      {/* ── Bottom CTA ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-zinc-900 text-white border border-black shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="mb-6 flex justify-center">
              <img
                src="/images/logo/arka-logo-white.webp"
                alt="ARKA Technovation"
                width={200}
                height={110}
                className="h-10 sm:h-12 w-auto object-contain opacity-95"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Project Planning
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Plan Your Next Build With Our Noida Team
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Speak directly with Mr. Kranti Parashar and our lead engineers in Sector 63, Noida. We provide an honest technical assessment, realistic delivery schedules, and clear milestone costs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-solar text-white hover:bg-orange-600 font-semibold text-sm transition-all shadow-md"
              >
                <span>Schedule a Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-zinc-800 text-white hover:bg-zinc-700 font-semibold text-sm transition-all"
              >
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
