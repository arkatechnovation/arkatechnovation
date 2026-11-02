import { useState } from 'react';
'use client';

import Link from '@/components/Link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { SERVICES, COMPANY } from '../lib/data';
import { CircleArrow, Label, Fade, EASE } from '../components/ui';
import { PageHero, Section, StatBand, ProcessRail, CtaBand, Testimonials } from './index';

import ArtcraftGalaxySection from '../components/ArtcraftGalaxySection';

/* ── SERVICES INDEX ─────────────────────────────────────────── */
export function ServicesPage() {
  const [cat, setCat] = useState<'All' | 'Marketing' | 'Technology' | 'Creative'>('All');
  const list = cat === 'All' ? SERVICES : SERVICES.filter(s => s.cat === cat);
  const cats = ['All', 'Marketing', 'Technology', 'Creative'] as const;

  return (
    <>
      <PageHero crumb="Services" eyebrow="Our services — 10 disciplines" title="How can we be of assistance to you?"
        intro="Our ultimate goal is to provide the best possible service and assistance, which is why we maintain a highly skilled team dedicated to providing customised solutions across marketing, technology and creative."
        img="https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800" />

      <Section pad="py-16 lg:py-20" tone="light">
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-void/15 py-5">
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} data-hover
                className={`mono text-[11px] h-[34px] px-4 rounded-full border transition duration-300 ${cat === c ? 'bg-void text-paper border-void' : 'border-void/25 text-void/65 hover:border-void hover:text-void'}`}>
                {c} <span className={cat === c ? 'text-paper/45' : 'text-void/30'}>{String(c === 'All' ? SERVICES.length : SERVICES.filter(s => s.cat === c).length).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
          <span className="mono text-[0.58rem] tracking-[0.2em] uppercase text-void/35">Marketing · Technology · Creative</span>
        </div>

        <div className="mt-6 border-t border-void/15">
          <AnimatePresence mode="popLayout">
            {list.map((s, i) => (
              <motion.div key={s.slug} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .45, ease: EASE, delay: i * .03 }}>
                <Link to={`/services/${s.slug}`} data-cursor="Open"
                  className="group grid grid-cols-[2.4rem_1fr_auto] md:grid-cols-[4.5rem_1.3fr_1fr_auto] items-center gap-3 md:gap-6 border-b border-void/15 py-5 md:py-6 hover:px-3 transition-all duration-500">
                  <span className="mono text-[11px] text-void/35 group-hover:text-rust transition-colors">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[clamp(1.2rem,2.6vw,2rem)] font-light tracking-[-0.02em] leading-none transition-all duration-500 group-hover:translate-x-2 group-hover:text-rust">{s.title}</h3>
                    <p className="md:hidden mt-2 text-[12.5px] font-light text-void/55">{s.short}</p>
                  </div>
                  <p className="hidden md:block text-[13px] font-light text-void/55">{s.short}</p>
                  <span className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full border border-void/25 group-hover:bg-void group-hover:text-paper group-hover:border-void transition-all duration-500"><ArrowUpRight className="h-4 w-4" /></span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* ── INTERACTIVE TECH STACK & ECOSYSTEM ─────────────────── */}
      <section className="bg-[#FAF9F5] text-void pt-20 border-t border-void/12">
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <Label tone="light">Ecosystem & Capabilities</Label>
              <h2 className="mt-5 display text-[clamp(1.6rem,4.4vw,3.4rem)] leading-[1.06]">
                The engine behind every delivery.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-[15px] font-light text-void/65 leading-[1.8]">
                Interactive architecture matrix spanning modern engineering frameworks, cloud infrastructure, AI models, and real-time CGI engines. Hover or click any node to inspect contract specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Celestial Galaxy Wheel */}
      <ArtcraftGalaxySection />

      <Section eyebrow="How we work" title="Six steps, every project." tone="light"
        aside={<p className="text-[15px] font-light text-void/65 leading-[1.8]">The same disciplined process runs under every service — so you always know what happens next and who is doing it.</p>}>
        <ProcessRail tone="light" />
      </Section>

      <StatBand tone="light" />
      <CtaBand />
    </>
  );
}

/* ── SERVICE DETAIL — one designed page per service ──────────── */
export function ServiceDetail() {
  const { slug } = useParams();
  const s = SERVICES.find(x => x.slug === slug);
  if (!s) return <div className="pt-40 pb-32 text-center"><p className="display text-3xl">Service not found.</p><Link to="/services" className="mt-4 inline-block hover-line">Back to services</Link></div>;
  const idx = SERVICES.indexOf(s);
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      <PageHero crumb={s.title} eyebrow={`Service — ${s.kicker}`} title={s.title} intro={s.short}
        img={s.img.replace('h=900&w=1400', 'h=1100&w=1900')} />

      {/* INTRO + SUB-SERVICES */}
      <Section eyebrow="What is included" title="Scope of work." tone="light"
        aside={<div><p className="text-[15px] font-light text-void/70 leading-[1.8]">{s.desc}</p>
          <div className="mt-6 p-5 border-l-2 border-rust bg-bone"><p className="display text-2xl text-rust leading-none">{s.stat}</p><p className="mono text-[0.58rem] tracking-[0.18em] uppercase text-void/50 mt-2">{s.statLabel}</p></div></div>}>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-void/15">
          {s.subs.map((sub, i) => (
            <Fade key={sub.name} delay={(i % 3) * .07} y={18}>
              <div className="group relative h-full min-h-[190px] border-r border-b border-void/15 p-6 lg:p-7 flex flex-col justify-between hover:bg-void transition-colors duration-500" data-hover>
                <span className="mono text-[0.58rem] text-void/30 group-hover:text-solar transition-colors">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="display text-[16px] lg:text-[17px] leading-tight group-hover:text-paper transition-colors duration-500">{sub.name}</h3>
                  <p className="mt-2.5 text-[12.5px] font-light text-void/60 group-hover:text-paper/65 leading-relaxed transition-colors duration-500">{sub.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Section>

      {/* DELIVERABLES + PROCESS */}
      <Section eyebrow="How it runs" title="Process and deliverables.">
        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            {s.process.map(([t, d], i) => (
              <Fade key={t} delay={i * .08} y={16}>
                <div className="group flex gap-5 border-t border-paper/15 py-6">
                  <span className="mono text-[11px] text-solar pt-1.5 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-[17px] font-light transition-transform duration-500 group-hover:translate-x-1.5">{t}</p>
                    <p className="mt-2 text-[13.5px] font-light text-paper/55 leading-relaxed max-w-lg">{d}</p>
                  </div>
                </div>
              </Fade>
            ))}
            <div className="border-t border-paper/15" />
          </div>
          <div className="lg:col-span-5">
            <div className="border border-paper/15 p-6 lg:p-7 bg-coal/50">
              <Label>What you receive</Label>
              <ul className="mt-6 space-y-3.5">
                {s.deliverables.map(d => (
                  <li key={d} className="flex items-start gap-3 text-[14px] font-light text-paper/80">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-solar/15 border border-solar/40 mt-0.5"><Check className="h-3 w-3 text-solar" /></span>{d}
                  </li>
                ))}
              </ul>
              <Link to="/contact" data-hover className="mt-7 mono text-[11px] h-[40px] px-6 inline-flex items-center bg-paper text-void rounded-full hover:bg-solar transition-colors duration-500">Request a quote</Link>
            </div>
            <div className="mt-5 border border-paper/15 p-6">
              <p className="mono text-[0.58rem] tracking-[0.22em] uppercase text-paper/40">Prefer to talk?</p>
              <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="mt-3 flex items-center gap-3 text-lg font-light hover:text-solar transition-colors"><Phone className="h-4 w-4 text-solar" />{COMPANY.phones[0]}</a>
            </div>
          </div>
        </div>
      </Section>

      <StatBand />
      <Testimonials />

      {/* NEXT SERVICE */}
      <section className="bg-void border-b border-paper/12">
        <Link to={`/services/${next.slug}`} data-cursor="Next" className="group block xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-16 lg:py-20">
          <p className="mono text-[0.58rem] tracking-[0.26em] uppercase text-solar">Next service</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
            <h3 className="display text-[clamp(1.6rem,4.4vw,3.2rem)] leading-none group-hover:text-solar transition-colors">{next.title}</h3>
            <CircleArrow size={54} className="text-solar transition-transform duration-500 group-hover:rotate-45" />
          </div>
        </Link>
      </section>

      <CtaBand />
    </>
  );
}
