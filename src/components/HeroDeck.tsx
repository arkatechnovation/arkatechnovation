'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles, X } from 'lucide-react';
import { CircleArrow, EASE } from './ui';
import LiquidBackground, { PRESETS, PRESET_NAMES, PRESET_ACCENTS } from './LiquidBackground';

export type ScrollControls = { scrollTo?: (target: string) => void };

const INDUSTRIES = [
  {
    name: 'Manufacturing',
    line: 'Visibility, leads, trust',
    desc: 'Websites, SEO and corporate films for manufacturers selling to the world.',
    img: '/images/industries/industries-manufacturing.webp',
    to: '/work',
    preset: 1,
  },
  {
    name: 'E-Commerce',
    line: 'Headless, sales, growth',
    desc: 'High-performance stores and media that convert first-time visits into lasting customers.',
    img: '/images/industries/saas.webp',
    to: '/services/e-commerce',
    preset: 2,
  },
  {
    name: 'Enterprise Software',
    line: 'Efficiency, data, security',
    desc: 'Custom CRM and software that replace fragmented processes with one reliable system.',
    img: '/images/industries/robotics-hardware.webp',
    to: '/services/crm-software',
    preset: 3,
  },
  {
    name: 'Corporate Film',
    line: 'Concept, camera, craft',
    desc: 'Films that turn the people, products and places behind your brand into a story worth watching.',
    img: '/images/industries/deeptech.webp',
    to: '/services/film-making',
    preset: 5,
  },
] as const;

export default function HeroDeck() {
  // Each time the website is opened, randomize the color animation palette
  const [presetIndex, setPresetIndex] = useState(() => Math.floor(Math.random() * PRESETS.length));
  const [industry, setIndustry] = useState<number | null>(null);
  const [mobileIndustries, setMobileIndustries] = useState(false);

  const shuffleColor = () => {
    setPresetIndex(prev => (prev + 1) % PRESETS.length);
  };

  const scrollToContent = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section id="home-hero" data-scr-skip
      className="arka-hero relative isolate min-h-screen h-svh w-full overflow-hidden bg-void text-paper select-none">
      {/* Liquid WebGL Background with randomized color animation */}
      <LiquidBackground preset={industry === null ? presetIndex : INDUSTRIES[industry].preset} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(0,0,0,.04)_20%,rgba(0,0,0,.6)_100%)]" />

      {/* Hero Center Content — Clean, Powerful, No Pillars */}
      <div className="arka-hero-center relative z-10 flex h-full flex-col items-center justify-center px-5 pb-16 pt-20 text-center sm:pt-24">

        <h1 className="arka-hero-brand mt-4 display text-[clamp(3.5rem,8.5vw,7.6rem)] leading-none tracking-tight sm:mt-5 text-paper">
          ARKA<span className="text-solar">.</span>
        </h1>

        {/* Dynamic Color Palette Badge with Interactive Shuffle */}
        <button
          onClick={shuffleColor} data-hover
          className="mt-5 flex h-[30px] items-center gap-2.5 rounded-full border border-paper/20 bg-void/35 px-4 backdrop-blur-md transition-all hover:border-paper/60 hover:bg-void/60 text-paper/85 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          title="Click to shuffle liquid color animation">
          <span className="h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: PRESET_ACCENTS[presetIndex] }} />
          <span className="mono text-[10px] uppercase tracking-[.2em] font-medium">Palette: {PRESET_NAMES[presetIndex]}</span>
          <span className="mono text-[9px] text-solar flex items-center gap-1 opacity-90 hover:opacity-100">
            <Sparkles className="h-2.5 w-2.5" /> Shuffle
          </span>
        </button>

        {/* Hero Mission Statement */}
        <p className="arka-hero-statement mt-6 max-w-[880px] text-balance text-[clamp(1.45rem,3.6vw,3.15rem)] font-light leading-[1.18] text-paper">
          We think, design and develop world-class digital products for forward-thinking brands.
        </p>

        <p className="mono mt-4 max-w-[680px] text-[10px] sm:text-[11px] uppercase tracking-[.22em] text-paper/65">
          Software Engineering • Search Domination • Brand Identity • Corporate Film
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
          <Link to="/contact" data-hover
            className="flex h-[42px] items-center gap-2 rounded-full bg-paper px-6 mono text-[11px] font-medium text-void transition-all duration-300 hover:bg-solar hover:shadow-[0_0_24px_rgba(232,116,44,.5)]">
            Start a project <CircleArrow size={16} />
          </Link>
          <button onClick={scrollToContent} data-hover
            className="flex h-[42px] items-center gap-2 rounded-full border border-paper/35 bg-void/30 px-5 mono text-[11px] text-paper backdrop-blur-sm transition-all duration-300 hover:border-paper hover:bg-paper/15">
            Explore showcase
          </button>
        </div>
      </div>

      {/* Industries sit at the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-4 px-4 pb-7 lg:px-10 lg:pb-9">
        <div className="hidden flex-col items-start lg:flex pointer-events-auto">
          <span className="mono mb-2 text-[9px] uppercase tracking-[.25em] text-paper/40">Industries</span>
          {INDUSTRIES.map((item, i) => (
            <Link key={item.name} to={item.to} onMouseEnter={() => setIndustry(i)} onMouseLeave={() => setIndustry(null)}
              className={`py-1 text-[10px] font-semibold uppercase tracking-[.15em] transition-all duration-300 ${industry === null || industry === i ? 'text-paper' : 'text-paper/35'} ${industry === i ? 'translate-x-2' : ''}`}
              data-hover>{item.name}</Link>
          ))}
        </div>

        <button onClick={() => setMobileIndustries(true)} className="pointer-events-auto flex h-[34px] items-center gap-2 rounded-full border border-paper/45 bg-void/20 px-4 mono text-[10px] backdrop-blur-sm lg:hidden" data-hover>
          Show industries <ChevronUp className="h-3 w-3" />
        </button>

        {/* Down Arrow — Smoothly Scrolls Down to Sub-Hero Strip */}
        <button onClick={scrollToContent}
          aria-label="Scroll down to content"
          className="pointer-events-auto absolute bottom-6 left-1/2 grid h-[52px] w-[52px] -translate-x-1/2 place-items-center rounded-full border border-paper/30 bg-void/25 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-solar hover:bg-void/50 lg:bottom-8" data-hover>
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="h-[20px] w-[20px] text-paper" />
          </motion.span>
        </button>

        <div className="pointer-events-auto flex flex-col items-end gap-2">
          <Link to="/contact" className="group flex h-[34px] items-center gap-2 rounded-full border border-paper/45 bg-void/20 px-3.5 mono text-[10px] backdrop-blur-sm transition-colors hover:border-paper hover:bg-paper hover:text-void sm:px-4" data-hover>
            <span className="hidden sm:inline">Are you the next?</span><span className="sm:hidden">Let's talk</span>
            <CircleArrow size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
          <button onClick={scrollToContent} className="mono text-[9px] uppercase tracking-[.16em] text-paper/55 transition-colors hover:text-paper" data-hover>Scroll down ↓</button>
        </div>
      </div>

      {/* Industry Preview Hover Modal on Desktop */}
      <AnimatePresence>
        {industry !== null && !mobileIndustries && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45 }}
            className="pointer-events-none absolute inset-0 z-20 hidden items-end justify-end bg-void/60 backdrop-blur-md lg:flex">
            <div className="grid h-[78%] w-[calc(100%-300px)] max-w-[1070px] grid-cols-2 grid-rows-2 gap-8 p-10">
              <motion.div key={`${industry}-title`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: EASE }} className="flex items-end justify-end">
                <h2 className="max-w-[440px] text-right font-mono text-4xl font-light leading-[1.1] xl:text-5xl">{INDUSTRIES[industry].name}</h2>
              </motion.div>
              <motion.div key={`${industry}-image`} initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, ease: EASE }} className="relative overflow-hidden self-end aspect-[4/3] rounded-md shadow-2xl">
                <img src={INDUSTRIES[industry].img} alt="" className="h-full w-full object-cover grayscale-[20%]" />
              </motion.div>
              <div />
              <motion.div key={`${industry}-desc`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .1, ease: EASE }} className="flex flex-col justify-center">
                <p className="mono text-xs tracking-widest text-solar">{INDUSTRIES[industry].line}</p>
                <p className="mt-7 max-w-[350px] border-l border-paper/50 pl-4 text-sm font-light leading-relaxed text-paper/80">{INDUSTRIES[industry].desc}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Industries Drawer */}
      <AnimatePresence>
        {mobileIndustries && (
          <motion.div data-hero-mobile-menu initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] flex flex-col justify-center overflow-y-auto bg-void/95 px-5 pb-14 pt-24 backdrop-blur-2xl lg:hidden"
            style={{ touchAction: 'pan-y' }}>
            <button onClick={() => { setMobileIndustries(false); setIndustry(null); }} className="absolute right-5 top-[82px] grid h-9 w-9 place-items-center border border-paper/30" aria-label="Close industries"><X className="h-4 w-4" /></button>
            <span className="mono text-[10px] uppercase tracking-[.2em] text-paper/45">Explore by industry</span>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {INDUSTRIES.map((item, i) => (
                <button key={item.name} onClick={() => setIndustry(i)} className={`min-h-20 border p-3 text-left text-[10px] font-semibold uppercase tracking-wider ${industry === i ? 'border-solar bg-solar text-void' : 'border-paper/30'}`}>
                  {item.name}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {industry !== null && (
                <motion.div key={industry} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5">
                  <img src={INDUSTRIES[industry].img} alt="" className="aspect-[16/8] w-full object-cover rounded" />
                  <p className="mono mt-3 text-[10px] text-solar">{INDUSTRIES[industry].line}</p>
                  <p className="mt-2 text-sm font-light leading-relaxed text-paper/70">{INDUSTRIES[industry].desc}</p>
                  <Link to={INDUSTRIES[industry].to} className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4">Explore {INDUSTRIES[industry].name}<CircleArrow size={20} /></Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}