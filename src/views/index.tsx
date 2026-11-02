import { useEffect, useRef, useState } from 'react';
'use client';

import Link from '@/components/Link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import {
  STATS, PROCESS, TESTIMONIALS_LITE,
} from '../lib/data';
import { CircleArrow, Label, Words, Fade, Counter, EASE } from '../components/ui';
import HeroDeck from '../components/HeroDeck';

/* ── Page hero used by every inner page ───────────────────────── */
export function PageHero({ eyebrow, title, intro, img, crumb }: { eyebrow: string; title: string; intro?: string; img: string; crumb: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, .85], [1, 0]);

  return (
    <section ref={ref} className="relative h-[74svh] min-h-[520px] overflow-hidden border-b border-paper/12 flex items-end">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={img} alt="" className="h-full w-full object-cover grayscale-[38%]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/72 to-void/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(232,116,44,.18),transparent_58%)]" />

      <motion.div style={{ opacity: fade }} className="relative w-full xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 pb-14 lg:pb-20">
        <h1 className="mt-5 display text-[clamp(2rem,6vw,4.8rem)] leading-[1.02] max-w-4xl"><Words text={title} /></h1>
        {intro && <Fade delay={.25}><p className="mt-7 text-[15px] md:text-[17px] font-light text-paper/70 leading-[1.8] max-w-2xl">{intro}</p></Fade>}
      </motion.div>

      <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.2 }} className="absolute bottom-6 right-4 lg:right-10 hidden md:block">
        <CircleArrow size={44} dir="down" className="text-paper/50" />
      </motion.div>
    </section>
  );
}

/* ── Section shell ────────────────────────────────────────────── */
export function Section({ id, eyebrow, title, aside, tone = 'dark', children, pad = 'py-24 lg:py-32' }: any) {
  const dark = tone === 'dark';
  return (
    <section id={id} className={`${dark ? 'bg-void text-paper' : 'bg-paper text-void'} ${dark ? 'border-b border-paper/12' : 'border-b border-void/12'}`}>
      <div className={`xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 ${pad}`}>
        {(eyebrow || title) && (
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              {eyebrow && <Label tone={dark ? 'dark' : 'light'}>{eyebrow}</Label>}
              {title && <h2 className={`mt-5 display text-[clamp(1.6rem,4.4vw,3.4rem)] leading-[1.06]`}><Words text={title} /></h2>}
            </div>
            {aside && <div className="lg:col-span-5 lg:pb-2">{aside}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ── Animated number band ─────────────────────────────────────── */
export function StatBand({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const dark = tone === 'dark';
  return (
    <div className={`${dark ? 'bg-coal text-paper' : 'bg-bone text-void'} border-b ${dark ? 'border-paper/12' : 'border-void/12'}`}>
      <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-14 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {STATS.map((s, i) => (
          <Fade key={s.l} delay={i * .08} y={18}>
            <div className={`border-l pl-5 lg:pl-7 ${dark ? 'border-paper/15' : 'border-void/15'}`}>
              <p className="display text-[clamp(2rem,4.4vw,3.4rem)] leading-none"><Counter to={s.v} suffix={s.s} /></p>
              <p className="mt-3 text-[14px] font-medium">{s.l}</p>
              <p className={`mt-1 mono text-[0.58rem] tracking-[0.16em] uppercase ${dark ? 'text-paper/40' : 'text-void/45'}`}>{s.d}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

/* ── Accordion (FAQ / sub-services) ───────────────────────────── */
export function Accordion({ items, tone = 'dark' }: { items: { q: string; a: string }[]; tone?: 'dark' | 'light' }) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === 'dark';
  return (
    <div className={`border-t ${dark ? 'border-paper/15' : 'border-void/15'}`}>
      {items.map((f, i) => (
        <div key={f.q} className={`border-b ${dark ? 'border-paper/15' : 'border-void/15'}`}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} data-hover className="group flex w-full items-start justify-between gap-5 py-5 text-left">
            <span className={`text-[15px] font-light leading-snug transition-colors ${open === i ? (dark ? 'text-solar' : 'text-rust') : dark ? 'text-paper/90 group-hover:text-paper' : 'text-void/90'}`}>{f.q}</span>
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ${open === i ? (dark ? 'rotate-45 bg-solar border-solar text-void' : 'rotate-45 bg-void border-void text-paper') : dark ? 'border-paper/25 text-paper/60' : 'border-void/25'}`}><Plus className="h-3.5 w-3.5" /></span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .5, ease: EASE }} className="overflow-hidden">
                <p className={`pb-6 pr-12 text-[13.5px] font-light leading-[1.85] ${dark ? 'text-paper/60' : 'text-void/60'}`}>{f.a}</p>
              </motion.div>)}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ── Process rail ─────────────────────────────────────────────── */
export function ProcessRail({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const dark = tone === 'dark';
  return (
    <div className={`mt-10 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l ${dark ? 'border-paper/15' : 'border-void/15'}`}>
      {PROCESS.map((s, i) => (
        <Fade key={s.n} delay={i * .06} y={18}>
          <div className={`group relative border-r border-b ${dark ? 'border-paper/15 hover:bg-paper' : 'border-void/15 hover:bg-void'} p-6 lg:p-7 h-full min-h-[172px] flex flex-col justify-between transition-colors duration-500`} data-hover>
            <div className="flex items-start justify-between">
              <span className={`mono text-[11px] ${dark ? 'text-paper/35 group-hover:text-rust' : 'text-void/35 group-hover:text-solar'} transition-colors`}>{s.n}</span>
              <span className={`h-1.5 w-1.5 rounded-full border ${dark ? 'border-paper/30 group-hover:border-rust' : 'border-void/30 group-hover:border-solar'} group-hover:bg-current transition`} />
            </div>
            <div>
              <p className={`display text-lg lg:text-xl ${dark ? 'group-hover:text-void' : 'group-hover:text-paper'} transition-colors duration-500`}>{s.t}</p>
              <p className={`mt-2 text-[12.5px] font-light leading-relaxed ${dark ? 'text-paper/55 group-hover:text-void/70' : 'text-void/60 group-hover:text-paper/70'} transition-colors duration-500`}>{s.d}</p>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}

/* ── Testimonial carousel ─────────────────────────────────────── */
export function Testimonials() {
  const [t, setT] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (hold) return;
    const id = setInterval(() => setT(v => (v + 1) % TESTIMONIALS_LITE.length), 6400);
    return () => clearInterval(id);
  }, [hold]);

  return (
    <section className="bg-paper text-void border-b border-void/12" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
      <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7"><Label tone="light">Clients testimonial</Label>
            <h2 className="mt-5 display text-[clamp(1.6rem,4.2vw,3.2rem)] leading-[1.06]"><Words text="What happens after the launch." /></h2></div>
          <div className="lg:col-span-5 flex lg:justify-end gap-3">
            <button onClick={() => setT((t - 1 + TESTIMONIALS_LITE.length) % TESTIMONIALS_LITE.length)} aria-label="Previous" data-hover className="grid h-12 w-12 place-items-center rounded-full border border-void/25 hover:bg-void hover:text-paper transition-colors duration-500"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={() => setT((t + 1) % TESTIMONIALS_LITE.length)} aria-label="Next" data-hover className="grid h-12 w-12 place-items-center rounded-full bg-void text-paper hover:bg-solar hover:text-void transition-colors duration-500"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="mt-12 min-h-[290px]">
          <AnimatePresence mode="wait">
            <motion.figure key={t} initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0)' }} exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }} transition={{ duration: .65, ease: EASE }}>
              <div className="flex gap-1">{[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-4 w-4 fill-solar text-solar" />)}</div>
              <blockquote className="mt-6 display text-[clamp(1.15rem,2.7vw,2.1rem)] leading-[1.28] max-w-4xl">“{TESTIMONIALS_LITE[t].quote}”</blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="grid h-[50px] w-[50px] place-items-center rounded-full bg-void text-paper display text-lg">{TESTIMONIALS_LITE[t].name[0]}</span>
                <span><b className="block text-[15px] font-semibold">{TESTIMONIALS_LITE[t].name}</b><span className="block text-[13px] font-light text-void/55">{TESTIMONIALS_LITE[t].role}</span></span>
                <span className="mono text-[0.6rem] tracking-[0.16em] uppercase bg-rust/10 text-rust px-3.5 py-2 rounded-full">{TESTIMONIALS_LITE[t].metric}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="flex gap-2">{TESTIMONIALS_LITE.map((_, i) => (
          <button key={i} onClick={() => setT(i)} aria-label={`Story ${i + 1}`} data-hover className={`h-[3px] rounded-full transition-all duration-500 ${i === t ? 'w-14 bg-solar' : 'w-6 bg-void/20 hover:bg-void/45'}`} />
        ))}</div>
      </div>
    </section>
  );
}

/* ── CTA band ─────────────────────────────────────────────────── */
export function CtaBand() {
  return (
    <section className="relative bg-void border-b border-paper/12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_140%_at_50%_120%,rgba(232,116,44,.22),transparent_62%)]" />
      <div className="relative xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-20 lg:py-24 text-center">
        <Label className="justify-center">Get in touch with us today</Label>
        <h2 className="mt-6 display text-[clamp(1.8rem,5vw,3.8rem)] leading-[1.05]"><Words text="Committed to exceptional service." /></h2>
        <p className="mt-6 text-[15px] font-light text-paper/65 leading-[1.8] max-w-2xl mx-auto">We are committed to providing exceptional customer service and building long-lasting relationships. We look forward to hearing from you and working together to achieve your goals.</p>
        <div className="mt-9 flex flex-wrap gap-3 justify-center">
          <Link to="/contact" data-hover className="mono text-[11px] h-[44px] px-7 inline-flex items-center bg-paper text-void rounded-full hover:bg-solar transition-colors duration-500">Start a project</Link>
          <Link to="/work" data-hover className="mono text-[11px] h-[44px] px-7 inline-flex items-center gap-2 border border-paper/30 rounded-full hover:border-paper transition-colors duration-500"><Play className="h-3.5 w-3.5" /> See our work</Link>
        </div>
      </div>
    </section>
  );
}

import PortfoliteHome from './PortfoliteHome';

/* ── HOME PAGE ────────────────────────────────────────────────── */
export default function Home() {
  return <PortfoliteHome />;
}


