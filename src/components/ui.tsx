import { useEffect, useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from 'react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform, type MotionValue } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ── LOUD circle arrow (1px stroke) ──────────────── */
export function CircleArrow({ size = 32, dir = 'right', className = '' }: { size?: number; dir?: 'right' | 'down' | 'up' | 'left'; className?: string }) {
  const rot = dir === 'down' ? 90 : dir === 'up' ? -90 : dir === 'left' ? 180 : 0;
  return (
    <svg viewBox="0 0 50 50" width={size} height={size} className={`fill-none stroke-current shrink-0 ${className}`} aria-hidden>
      <circle cx="25" cy="25" r="24" strokeWidth="1" />
      <g transform={`rotate(${rot} 25 25) translate(7 10)`}>
        <path d="M 9 15 L 27.45 15" strokeWidth="1" /><path d="M 27 15 L 21 9" strokeWidth="1" /><path d="M 27 15 L 21 21" strokeWidth="1" />
      </g>
    </svg>
  );
}

/* ── Magnetic wrapper ────────────────────────────── */
export function Magnetic({ children, strength = .3, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 170, damping: 14 }), sy = useSpring(y, { stiffness: 170, damping: 14 });
  const move = (e: ReactMouseEvent) => { const r = ref.current!.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * strength); y.set((e.clientY - r.top - r.height / 2) * strength); };
  return <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} className={`inline-block ${className}`}>{children}</motion.div>;
}

/* ── Reveal primitives ───────────────────────────── */
export function Fade({ children, delay = 0, className = '', y = 26 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ duration: 1, delay, ease: EASE }} className={className}>{children}</motion.div>;
}

export function Words({ text, className = '', delay = 0, stagger = .04 }: { text: string; className?: string; delay?: number; stagger?: number }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.26em]">
          <motion.span className="inline-block" initial={{ y: '105%', opacity: 0, filter: 'blur(7px)' }} whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-8%' }} transition={{ duration: .85, delay: delay + i * stagger, ease: EASE }}>{w}</motion.span>
        </span>
      ))}
    </span>
  );
}

/* line-masked reveal for long headlines */
export function Lines({ text, className = '', delay = 0 }: { text: string[]; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[.1em] -mb-[.1em]">
          <motion.span className="block" initial={{ y: '112%' }} whileInView={{ y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ duration: 1.05, delay: delay + i * .1, ease: EASE }}>{l}</motion.span>
        </span>
      ))}
    </span>
  );
}


/* ── Label + scramble ────────────────────────────── */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·—/';
export function Scramble({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!inView) return;
    let frame = 0, raf = 0;
    const run = () => {
      frame++;
      setOut(text.split('').map((c, i) => c === ' ' ? ' ' : i < frame / 2.2 ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join(''));
      if (frame / 2.2 < text.length) raf = requestAnimationFrame(run);
      else setOut(text);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [inView, text]);
  return <span ref={ref} className={className}>{out}</span>;
}

export function Label({ children, tone = 'dark', className = '' }: { children: ReactNode; tone?: 'dark' | 'light'; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${tone === 'dark' ? 'bg-solar pulse-dot' : 'bg-rust'}`} />
      <span className={`mono text-[0.625rem] tracking-[0.22em] uppercase ${tone === 'dark' ? 'text-paper/45' : 'text-void/50'}`}><Scramble text={String(children)} /></span>
    </div>
  );
}

export function SectionHead({ eyebrow, title, aside, tone = 'dark', id }: { eyebrow: string; title: string | string[]; aside?: ReactNode; tone?: 'dark' | 'light'; id?: string }) {
  const isArr = Array.isArray(title);
  const ink = tone === 'dark' ? 'text-paper' : 'text-void';
  return (
    <div id={id} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
      <div className="lg:col-span-7 xl:col-span-8">
        <Label tone={tone}>{eyebrow}</Label>
        <h2 className={`mt-6 display text-[clamp(1.7rem,4.4vw,3.6rem)] leading-[1.08] ${ink}`}>
          {isArr ? <Lines text={title as string[]} /> : <Words text={title as string} />}
        </h2>
      </div>
      {aside && <div className="lg:col-span-5 xl:col-span-4 lg:pb-2">{aside}</div>}
    </div>
  );
}

/* ── Counter ─────────────────────────────────────── */
export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => { const p = Math.min(1, (t - t0) / 1900); setV(Math.round(to * (1 - Math.pow(1 - p, 4)))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString('en-IN')}{suffix}</span>;
}

/* ── Marquee ─────────────────────────────────────── */
export function Marquee({ items, reverse = false, slow = false, className = '', sep = 'dot' }: { items: string[]; reverse?: boolean; slow?: boolean; className?: string; sep?: 'dot' | 'star' | 'none' }) {
  const set = [...items, ...items];
  return (
    <div className={`mask-fade overflow-hidden ${className}`}>
      <div className={`flex w-max whitespace-nowrap ${reverse ? 'marquee-rev' : slow ? 'marquee-slow' : 'marquee'}`}>
        {set.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="px-5">{it}</span>
            {sep === 'dot' && <span className="h-1 w-1 rounded-full bg-current opacity-40" />}
            {sep === 'star' && <span className="opacity-40 text-lg leading-none">✦</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Parallax image ──────────────────────────────── */
export function ParallaxImg({ src, alt, className = '', range = 55, imgClass = '' }: { src: string; alt: string; className?: string; range?: number; imgClass?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img style={{ y, scale: 1.22 }} src={src} alt={alt} loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${imgClass}`} />
    </div>
  );
}

/* ── Scroll-linked opacity/scale for section art ─── */
export function useSectionParallax(ref: React.RefObject<HTMLElement | null>): { p: MotionValue<number>; y: MotionValue<number>; s: MotionValue<number> } {
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  return { p, y: useTransform(p, [0, 1], [40, -40]), s: useTransform(p, [0, .5, 1], [1.06, 1, 1.06]) };
}

/* ── Cursor ──────────────────────────────────────── */
export function Cursor() {
  const x = useMotionValue(-300), y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 380, damping: 34, mass: .45 }), sy = useSpring(y, { stiffness: 380, damping: 34, mass: .45 });
  const [mode, setMode] = useState<'idle' | 'link' | 'label'>('idle');
  const [label, setLabel] = useState('');
  useEffect(() => {
    const mv = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const c = (e.target as HTMLElement).closest?.('[data-cursor]') as HTMLElement | null;
      if (c) { setMode('label'); setLabel(c.getAttribute('data-cursor') || ''); return; }
      setMode((e.target as HTMLElement).closest?.('a,button,[data-hover],input,textarea,select') ? 'link' : 'idle');
    };
    window.addEventListener('mousemove', mv, { passive: true });
    return () => window.removeEventListener('mousemove', mv);
  }, []);
  const size = mode === 'label' ? 100 : mode === 'link' ? 18 : 60;
  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[1200] hidden md:block">
      <motion.div
        animate={{ width: size, height: size, backgroundColor: mode === 'label' ? '#E8742C' : mode === 'link' ? '#F1EEE7' : 'rgba(241,238,231,0.14)' }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-[2px] flex items-center justify-center">
        {mode === 'label' && <span className="mono text-[9.5px] tracking-[0.18em] uppercase text-void font-medium text-center leading-tight px-2">{label}</span>}
      </motion.div>
    </motion.div>
  );
}

/* ── Pill button ─────────────────────────────────── */
export function Pill({ children, onClick, tone = 'outline', className = '', type = 'button' }: { children: ReactNode; onClick?: () => void; tone?: 'outline' | 'solid' | 'ghost'; className?: string; type?: 'button' | 'submit' }) {
  const base = 'mono text-[11px] h-[34px] px-5 rounded-full transition duration-500 border inline-flex items-center gap-2';
  const tones = {
    outline: 'border-current/35 hover:bg-paper hover:text-void hover:border-paper',
    solid: 'bg-paper text-void border-paper hover:bg-solar hover:border-solar',
    ghost: 'border-transparent text-paper/60 hover:text-paper',
  };
  return <button type={type} onClick={onClick} className={`${base} ${tones[tone]} ${className}`} data-hover>{children}</button>;
}
