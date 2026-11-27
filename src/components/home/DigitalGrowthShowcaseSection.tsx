'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  slug: string;
  highlight: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'software-dev',
    name: 'Software Development',
    category: 'Software Engineering',
    slug: '/services/development',
    highlight: 'Custom CRM, ERP platforms, mobile apps & modular microservices',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Full-Funnel Growth',
    slug: '/services/digital-marketing',
    highlight: 'Revenue attribution, Google Ads, Meta Ads & ROAS acceleration',
  },
  {
    id: 'seo-services',
    name: 'SEO, GEO & AEO Services',
    category: 'Search & AI Engines',
    slug: '/seo-lead-generation',
    highlight: 'Technical crawl architecture, Schema.org entity graphs & AI answers',
  },
  {
    id: 'film-making',
    name: 'Film Production & Media',
    category: 'Production Studio',
    slug: '/services/film-making',
    highlight: 'Broadcast 4K corporate films, studio podcasts & AI video creation',
  },
  {
    id: 'corporate-news',
    name: 'Corporate World News',
    category: 'Editorial & Intelligence',
    slug: '/corporate-world-news',
    highlight: 'Executive broadcast interviews, wire press releases & market research',
  },
  {
    id: 'crm-erp',
    name: 'Enterprise CRM & ERP Systems',
    category: 'Enterprise Infrastructure',
    slug: '/services/crm-software',
    highlight: 'Centralized supply chain logistics, inventory & zero per-seat fees',
  },
  {
    id: 'geo-ai',
    name: 'Generative Engine Optimization',
    category: 'AI Answer Engines',
    slug: '/seo-lead-generation#geo-services',
    highlight: 'Entity graph modeling for ChatGPT, Perplexity & Gemini citations',
  },
];

export default function DigitalGrowthShowcaseSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="digital-services-showcase"
      className="relative py-14 sm:py-20 lg:py-24 font-framer bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden"
      aria-labelledby="services-showcase-heading"
    >
      {/* Subtle Golden Warmth Glow Pools */}
      <div
        className="absolute -top-10 left-0 w-[540px] h-[540px] bg-gradient-to-br from-amber-200/25 via-orange-100/15 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-gradient-to-tl from-amber-100/30 via-orange-100/15 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid lg:grid-cols-[1.12fr_1fr] gap-8 lg:gap-4 xl:gap-8 items-center">

          {/* ======================================================== */}
          {/* LEFT COLUMN: Dominant Freestanding MacBook Growth Visual */}
          {/* Transparent background, no card box, no badges          */}
          {/* ======================================================== */}
          <div className="flex items-center justify-center relative py-2 lg:py-0 overflow-visible">
            {/* Ambient Solar Warmth Glow Pool */}
            <div
              className="absolute inset-0 max-w-[580px] max-h-[440px] m-auto bg-gradient-to-tr from-solar/20 via-amber-200/25 to-transparent rounded-full blur-3xl pointer-events-none opacity-80"
              aria-hidden="true"
            />

            {/* Freestanding Floating Visual */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full lg:w-[114%] lg:-ml-[10%] flex items-center justify-center select-none"
            >
              <Image
                src="/images/home/arka-growth-tech-showcase-transparent.webp"
                alt="ARKA Technovation - Software Development, GenAI Workflows, Revenue Growth & Analytics"
                width={978}
                height={656}
                className="w-full h-auto max-w-[700px] lg:max-w-none lg:max-[1680px]:w-[90%] object-contain select-none pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Editorial Content, 7 Capabilities & Stats  */}
          {/* ======================================================== */}
          <div className="flex flex-col items-start">
            
            {/* Section Heading */}
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#B85014] mb-1.5 sm:mb-2">
              Overview
            </p>
            <h2
              id="services-showcase-heading"
              className="text-2xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-black leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Digital Growth &amp; Technology
            </h2>

            {/* Strategic Mission Paragraph */}
            <p
              className="mt-3 sm:mt-4 text-zinc-600 text-sm sm:text-[15px] font-light leading-relaxed max-w-xl"
              style={{ textWrap: 'pretty' }}
            >
              Operating from our engineering hub in Sector 63, Noida, <strong className="font-semibold text-black">ARKA Technovation</strong> deploys 100% in-house specialist craft pods. We modernize enterprise cloud software, build search engine and AI authority, and scale revenue through verified performance media and corporate cinema.
            </p>

            {/* 7 Capabilities Interactive List (Clean, no pills, matching reference) */}
            <div className="mt-5 sm:mt-6 w-full">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-solar" />
                <span>Core Capabilities &amp; Execution Verticals</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICES_LIST.map((srv) => {
                  const isHovered = hoveredService === srv.id;
                  return (
                    <Link
                      key={srv.id}
                      href={srv.slug}
                      onMouseEnter={() => setHoveredService(srv.id)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`group relative flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all duration-200 ${
                        isHovered
                          ? 'bg-white border-solar/40 shadow-sm translate-x-1'
                          : 'bg-white/80 hover:bg-white border-zinc-200/80 hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Double Arrow Chevron Accent (matching reference » mark with solar flair) */}
                        <div className="flex items-center text-solar group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                          <ChevronRight className="w-3.5 h-3.5 -mr-2" strokeWidth={3} />
                          <ChevronRight className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>

                        <div className="truncate">
                          <span className="text-sm font-semibold text-zinc-900 group-hover:text-solar transition-colors block truncate">
                            {srv.name}
                          </span>
                          <span className="text-[11px] text-zinc-600 block truncate font-light">
                            {srv.highlight}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 2 Core Performance Metrics (500+ Projects, 100+ Testimonials) */}
            <div className="mt-6 w-full pt-5 border-t border-zinc-200/90">
              <div className="grid grid-cols-2 gap-4 sm:gap-10 max-w-md">
                
                {/* Stat 1: 500+ Projects Delivered */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-0.5 sm:gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      500
                    </span>
                    <span className="text-solar font-bold text-xl sm:text-2xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 mt-0.5">
                    Projects Delivered
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-600 font-light mt-0.5">
                    Web, ERP &amp; media deliverables
                  </span>
                </div>

                {/* Stat 2: 100+ Client Testimonials */}
                <div className="flex flex-col border-l border-zinc-200/80 pl-4 sm:pl-10">
                  <div className="flex items-baseline gap-0.5 sm:gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      100
                    </span>
                    <span className="text-solar font-bold text-xl sm:text-2xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 mt-0.5">
                    Client Testimonials
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-600 font-light mt-0.5">
                    Verified enterprise reviews
                  </span>
                </div>

              </div>
            </div>

            {/* CTA Buttons (Let's Connect + Learn More) */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA: Let's Connect */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 min-h-[44px] rounded-full bg-gradient-to-r from-solar via-orange-600 to-amber-600 text-white font-semibold text-sm shadow-[0_8px_20px_rgba(232,116,44,0.28)] hover:shadow-[0_12px_28px_rgba(232,116,44,0.38)] hover:brightness-105 active:scale-[0.98] transition-all group"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Learn More */}
              <Link
                href="/services"
                aria-label="Learn more about ARKA digital and enterprise services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-white text-zinc-900 border border-zinc-300 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 active:scale-[0.98] transition-all shadow-sm group"
              >
                <span>Learn More</span>
                <span className="sr-only"> about ARKA digital services</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
