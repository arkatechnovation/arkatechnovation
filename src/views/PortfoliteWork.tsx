'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Quote, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import ProjectModal, { ProjectData } from '../components/portfolite/ProjectModal';
import { WORKS, CLIENTS, COMPANY } from '../lib/data';

export default function PortfoliteWork() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const sectors = ['All', 'Manufacturing', 'E-Commerce', 'Industrial', 'Software', 'Healthcare'];

  const filteredWorks =
    selectedSector === 'All'
      ? WORKS
      : WORKS.filter((w) => w.sector === selectedSector);

  const openProjectModal = (w: typeof WORKS[0]) => {
    setActiveModalProject({
      id: w.name.toLowerCase().replace(/\s+/g, '-'),
      title: w.name,
      category: `${w.sector} · ${w.services.join(' · ')}`,
      image: w.img,
      client: w.name,
      year: w.year,
      description: `${w.challenge} ${w.solution}`,
      deliverables: w.services,
      results: `${w.result} ${w.resultLabel}`,
    });
  };

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08]"
          >
            Case studies that speak in revenue.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Real production systems and marketing campaigns executed over twelve years of craft across manufacturing exporters, high-volume D2C stores, healthcare institutions, and enterprise software.
          </motion.p>

          {/* Sector Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {sectors.map((sector) => {
              const count = sector === 'All' ? WORKS.length : WORKS.filter((w) => w.sector === sector).length;
              const active = selectedSector === sector;
              return (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  data-dock-btn
                  className={`segmented-dock-btn px-3 py-1 rounded-full text-xs font-medium transition-all inline-flex items-center gap-1.5 ${
                    active
                      ? '!bg-black !text-white shadow-md shadow-black/20'
                      : '!bg-zinc-100 !text-zinc-700 hover:!text-black hover:!bg-zinc-200 !border !border-black/10'
                  }`}
                >
                  <span className="tracking-tight">{sector}</span>
                  <span
                    className={`px-1.5 py-0.2 min-w-[18px] rounded-full text-[10px] font-mono font-semibold inline-flex items-center justify-center ${
                      active ? '!bg-white/20 !text-white' : '!bg-black/10 !text-zinc-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Bento Grid */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div layout className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, idx) => (
              <motion.div
                key={work.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-black/10 hover:border-black/25 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] cursor-pointer"
                onClick={() => openProjectModal(work)}
              >
                <div>
                  {/* Image Card Container */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 border border-black/10 mb-6">
                    <img
                      src={work.img}
                      alt={work.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Sector & Year Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-zinc-200 border border-white/15">
                        {work.sector}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
                        {work.year}
                      </span>
                    </div>

                    {/* Result Banner in Image Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none block">
                          {work.result}
                        </span>
                        <span className="text-xs text-zinc-300 font-light mt-0.5 block">
                          {work.resultLabel}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-bold tracking-tight text-black group-hover:text-zinc-800 transition-colors">
                    {work.name}
                  </h3>

                  {/* Services pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {work.services.map((svc) => (
                      <span
                        key={svc}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 border border-black/8 text-xs text-zinc-700 font-light"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>

                  {/* Challenge & Solution Preview */}
                  <p className="mt-4 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed line-clamp-3">
                    <strong className="text-black font-normal">Challenge:</strong> {work.challenge}
                  </p>
                </div>

                {/* Client Quote Card */}
                <div className="mt-6 pt-5 border-t border-black/[0.08] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-zinc-100 border border-black/10 flex items-center justify-center text-solar shrink-0 mt-0.5">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs text-zinc-600 italic">
                    <span>"{work.quote}"</span>
                    <p className="not-italic text-[11px] text-zinc-500 font-mono mt-1 font-normal">
                      — {work.by}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-14 sm:py-20 border-y border-black/10 bg-zinc-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block">
            Partnered with 1,500+ Enterprises &amp; Fast-Growing Brands
          </span>
        </div>
        <div className="flex gap-8 overflow-hidden select-none whitespace-nowrap">
          <div className="flex shrink-0 gap-8 items-center animate-marquee">
            {CLIENTS.concat(CLIENTS).map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-black/8 text-zinc-700 text-xs sm:text-sm font-mono uppercase tracking-widest shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.06)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
            Let's evaluate your challenge and determine how our full-stack engineering and marketing disciplines can deliver similar measurable returns.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="site-button px-7 py-3 rounded-full !bg-black !text-white text-sm font-semibold hover:!bg-zinc-800 transition-colors flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/services"
              className="px-7 py-3 rounded-full !bg-zinc-100 !border !border-black/15 !text-black text-sm font-medium hover:!bg-zinc-200 transition-colors"
            >
              Explore All Disciplines
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <PortfoliteFooter />
    </div>
  );
}
