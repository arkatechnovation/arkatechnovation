import { useRef, useState } from 'react';
'use client';

import Link from '@/components/Link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail, Check } from 'lucide-react';
import { SERVICES, WORKS, TEAM, VALUES, IMPACT, POSTS, ROLES, FAQS, CLIENTS, COMPANY, OFFICES } from '../lib/data';
import { CircleArrow, Label, Fade, Marquee, EASE } from '../components/ui';
import { PageHero, Section, StatBand, Accordion, CtaBand, Testimonials } from './index';

/* ═══ WHO WE ARE ═══════════════════════════════════════════════ */
export function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bandX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <>
      <PageHero crumb="Who We Are" eyebrow="Who we are — innovators in tech"
        title="Dedicated to helping businesses in all fields."
        intro="Arka Technovation helps businesses across every industry improve their marketing, build serious software and get ahead of the competition through full-service digital solutions. We have been helping clients and partners grow for almost fifteen years."
        img="https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800" />

      {/* STORY */}
      <Section id="story" eyebrow="Our story" title="A new name. The same standard.">
        <div className="mt-12 grid md:grid-cols-12 gap-10">
          <Fade className="md:col-span-5">
            <p className="text-[clamp(1.05rem,1.6vw,1.4rem)] font-light leading-[1.65] text-paper/90">
              {COMPANY.name} carries forward over 17 years of craft — the strategy, software, marketing and film that more than 1,500 brands across India and abroad already trust.
            </p>
            <p className="mt-6 text-[14.5px] font-light text-paper/55 leading-[1.85]">Founded by Kranti, the company operates from its corporate headquarters in Sector 63, Noida. Our team of creative professionals works toward creating perfection in order to achieve the best for our clients.</p>
            <div className="mt-8 grid grid-cols-3 gap-5 border-t border-paper/15 pt-7">
              {[['2016', 'Founded'], ['1', 'Corporate HQ'], ['45+', 'Team members']].map(([v, l], i) => (
                <Fade key={l} delay={i * .07} y={12}><div><p className="display text-2xl text-gold">{v}</p><p className="mt-1.5 mono text-[0.55rem] tracking-[0.18em] uppercase text-paper/40">{l}</p></div></Fade>
              ))}
            </div>
          </Fade>
          <div className="md:col-span-6 md:col-start-7">
            {VALUES.map((v, i) => (
              <Fade key={v.n} delay={i * .08} y={18}>
                <div className="group flex gap-5 border-t border-paper/15 py-6 hover:border-solar/60 transition-colors duration-500">
                  <span className="mono text-[11px] text-paper/35 pt-1.5 group-hover:text-solar transition-colors">{v.n}</span>
                  <div><p className="text-[17px] font-light transition-transform duration-500 group-hover:translate-x-1.5">{v.t}</p><p className="mt-2 text-[13.5px] font-light text-paper/55 leading-[1.8] max-w-md">{v.d}</p></div>
                </div>
              </Fade>
            ))}
            <div className="border-t border-paper/15" />
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <section className="bg-coal border-b border-paper/12">
        <div ref={ref} className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-20">
          <Label>Milestones</Label>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-3">
            {[['2016', 'The practice begins in Noida'], ['2018', 'Film production launched in-house'], ['2020', 'CRM & software division scaled'], ['2022', 'National enterprise expansion'], ['2024', '600th manufacturing client'], ['2026', 'Arka Technovation — new chapter']].map(([y, t], i) => (
              <Fade key={y} delay={i * .07} y={16}>
                <div className="group relative w-[210px] shrink-0 border-l border-paper/20 pl-5 hover:border-solar transition-colors duration-500">
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-solar group-hover:scale-150 transition-transform duration-500" />
                  <p className="display text-2xl leading-none">{y}</p>
                  <p className="mt-3 text-[13px] font-light text-paper/60 leading-relaxed">{t}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <div className="border-t border-paper/10 py-6 overflow-hidden"><motion.div style={{ x: bandX }}><Marquee items={CLIENTS} sep="star" className="display text-[13px] text-paper/20 tracking-[0.1em]" /></motion.div></div>
      </section>

      <StatBand />

      {/* LEADERSHIP */}
      <Section id="leadership" eyebrow="Leadership & team" title="Awesome team members." tone="light"
        aside={<p className="text-[15px] font-light text-void/65 leading-[1.8]">No account managers relaying messages to a team you never meet. You work directly with the people doing the work.</p>}>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-void/15">
          {TEAM.map((m, i) => (
            <Fade key={m.name} delay={(i % 3) * .07} y={18}>
              <div className="group relative h-full min-h-[228px] border-r border-b border-void/15 p-6 flex flex-col justify-between hover:bg-void transition-colors duration-500" data-hover>
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-void/20 mono text-[13px] tracking-widest group-hover:border-solar group-hover:text-solar transition-colors duration-500">{m.initials}</span>
                  <span className="mono text-[0.55rem] tracking-[0.16em] uppercase text-void/30 group-hover:text-paper/40 transition-colors">{m.focus}</span>
                </div>
                <div><p className="display text-[17px] group-hover:text-paper transition-colors duration-500">{m.name}</p><p className="mt-1.5 mono text-[0.55rem] tracking-[0.16em] uppercase text-void/45 group-hover:text-paper/50 transition-colors">{m.role}</p></div>
              </div>
            </Fade>
          ))}
          <Fade delay={.2} y={18}>
            <div className="group relative h-full min-h-[228px] border-r border-b border-void/15 p-6 flex flex-col justify-between bg-void text-paper">
              <span className="mono text-[0.55rem] tracking-[0.18em] uppercase text-solar">Founder</span>
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-full border border-solar/50 display text-2xl text-solar">K</span>
                <p className="mt-4 display text-[19px]">Kranti</p>
                <p className="mt-1.5 mono text-[0.55rem] tracking-[0.16em] uppercase text-paper/50">Founder & Managing Director</p>
                <p className="mt-3 text-[11.5px] font-light text-paper/40 border border-dashed border-paper/20 rounded-lg px-3 py-2">Portrait placeholder — official photograph to follow.</p>
              </div>
            </div>
          </Fade>
        </div>
      </Section>

      {/* COMMUNITY IMPACT */}
      <Section id="impact" eyebrow="Community impact" title="Invested in our communities.">
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-paper/15">
          {IMPACT.map((c, i) => (
            <Fade key={c.t} delay={i * .07} y={18}>
              <div className="group h-full min-h-[200px] border-r border-b border-paper/15 p-6 flex flex-col justify-between hover:bg-paper transition-colors duration-500" data-hover>
                <span className="mono text-[0.58rem] text-paper/30 group-hover:text-rust transition-colors">{String(i + 1).padStart(2, '0')}</span>
                <div><p className="display text-[16px] group-hover:text-void transition-colors duration-500">{c.t}</p><p className="mt-2.5 text-[12.5px] font-light text-paper/55 group-hover:text-void/70 leading-relaxed transition-colors duration-500">{c.d}</p></div>
              </div>
            </Fade>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

/* ═══ WORK ═════════════════════════════════════════════════════ */
export function WorkPage() {
  const [filter, setFilter] = useState('All');
  const sectors = ['All', ...Array.from(new Set(WORKS.map(w => w.sector)))];
  const list = filter === 'All' ? WORKS : WORKS.filter(w => w.sector === filter);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero crumb="Our Work" eyebrow="Our work — projects executed" title="Results our clients can measure."
        intro="Real engagements from twelve years of practice — manufacturing, e-commerce, industrial, software and healthcare. Open any case study to read the challenge, the approach and the outcome."
        img="https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800" />

      <Section pad="py-16 lg:py-20">
        <div className="flex flex-wrap gap-2.5 border-y border-paper/15 py-5">
          {sectors.map(s => (
            <button key={s} onClick={() => setFilter(s)} data-hover
              className={`mono text-[11px] min-h-[36px] px-5 rounded-full border transition duration-300 inline-flex items-center justify-center ${filter === s ? 'bg-paper text-void border-paper' : 'border-paper/25 text-paper/65 hover:border-paper hover:text-paper'}`}>{s}</button>
          ))}
        </div>

        <div className="mt-6 border-t border-paper/15">
          {list.map((w, i) => {
            const isOpen = open === i;
            return (
              <div key={w.name} className="border-b border-paper/15">
                <button onClick={() => setOpen(isOpen ? null : i)} data-cursor={isOpen ? 'Close' : 'Case'}
                  className="group w-full text-left grid grid-cols-[2.2rem_1fr_auto] md:grid-cols-[3.5rem_1.4fr_1fr_8rem_auto] items-center gap-3 md:gap-5 py-6 hover:px-3 transition-all duration-500">
                  <span className={`mono text-[11px] ${isOpen ? 'text-solar' : 'text-paper/35'}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={`text-[clamp(1.15rem,2.5vw,1.85rem)] font-light leading-tight transition-colors ${isOpen ? 'text-paper' : 'text-paper/85 group-hover:text-solar'}`}>
                    {w.name}<span className="hidden md:inline-block ml-3 mono text-[0.55rem] tracking-[0.2em] uppercase text-paper/30">{w.year}</span>
                  </span>
                  <span className="hidden md:block mono text-[0.58rem] tracking-[0.16em] uppercase text-paper/40">{w.services.join(' · ')}</span>
                  <span className="text-right"><span className={`block display text-xl md:text-2xl leading-none ${isOpen ? 'text-solar' : ''}`}>{w.result}</span><span className="block mono text-[0.52rem] tracking-[0.14em] uppercase text-paper/35 mt-1.5">{w.resultLabel}</span></span>
                  <span className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-500 ${isOpen ? 'rotate-45 border-solar text-solar' : 'border-paper/20 group-hover:border-paper'}`}><ArrowUpRight className="h-4 w-4" /></span>
                </button>
                <AnimatePresence initial={false}>{isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .65, ease: EASE }} className="overflow-hidden">
                    <div className="grid lg:grid-cols-12 gap-7 pb-10 md:pl-[4.5rem]">
                      <div className="lg:col-span-7 space-y-6">
                        <div><p className="mono text-[0.58rem] tracking-[0.24em] uppercase text-paper/35">The challenge</p><p className="mt-2.5 text-[14.5px] font-light text-paper/80 leading-[1.8] max-w-xl">{w.challenge}</p></div>
                        <div><p className="mono text-[0.58rem] tracking-[0.24em] uppercase text-solar">What we did</p><p className="mt-2.5 text-[14.5px] font-light text-paper/80 leading-[1.8] max-w-xl">{w.solution}</p></div>
                        <blockquote className="border-l border-paper/20 pl-5"><p className="text-[14.5px] font-light italic text-paper/70 leading-relaxed">“{w.quote}”</p><footer className="mt-2.5 mono text-[0.58rem] tracking-[0.2em] uppercase text-paper/40">{w.by} · {w.sector}</footer></blockquote>
                        <Link to="/contact" data-hover className="group inline-flex items-center gap-3 font-light text-base"><span className="hover-line">Start a project like this</span><CircleArrow size={26} className="text-solar transition-transform duration-500 group-hover:rotate-45" /></Link>
                      </div>
                      <div className="lg:col-span-5">
                        <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, ease: EASE }} className="relative overflow-hidden aspect-[4/3] bg-coal">
                          <img src={w.img} alt={w.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale-[22%]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-void/85 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between"><span className="mono text-[0.58rem] tracking-[0.2em] uppercase text-paper/70">{w.sector}</span><span className="display text-3xl text-solar leading-none">{w.result}</span></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>)}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="bg-coal border-b border-paper/12 py-10"><Marquee items={CLIENTS} sep="star" className="display text-[13px] text-paper/22 tracking-[0.1em]" slow /></div>
      <StatBand />
      <Testimonials />
      <CtaBand />
    </>
  );
}

/* ═══ INSIGHTS (BLOG + FAQ) ════════════════════════════════════ */
export function InsightsPage() {
  const [q, setQ] = useState('');
  const posts = POSTS.filter(p => (p.title + p.tag + p.excerpt).toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <PageHero crumb="Insights" eyebrow="News and blog" title="Notes from the floor."
        intro="What we are learning while building for manufacturers, D2C brands, healthcare groups and software companies across India."
        img="https://images.pexels.com/photos/1181305/pexels-photo-1181305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800" />

      <Section id="blog" pad="py-16 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/15 pb-5">
          <Label>Featured articles</Label>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search articles…" data-hover
            className="w-full sm:w-64 bg-transparent border-b border-paper/25 py-2 text-[14px] font-light outline-none focus:border-solar transition-colors placeholder:text-paper/30" />
        </div>

        <div className="mt-6 border-t border-paper/15">
          {posts.map((p, i) => (
            <Fade key={p.title} delay={i * .05} y={14}>
              <article className="group grid md:grid-cols-12 gap-3 md:gap-6 border-b border-paper/15 py-6 items-baseline hover:px-3 transition-all duration-500 cursor-pointer" data-cursor="Read">
                <span className="mono text-[11px] text-paper/35 md:col-span-1">{p.d}<span className="block text-[0.5rem] tracking-widest">{p.m} {p.y}</span></span>
                <div className="md:col-span-6"><p className="mono text-[0.55rem] tracking-[0.22em] uppercase text-solar">{p.tag} · {p.read}</p>
                  <h3 className="mt-2 text-[clamp(1.1rem,2.2vw,1.6rem)] font-light leading-snug transition-transform duration-500 group-hover:translate-x-2 group-hover:text-solar">{p.title}</h3></div>
                <p className="md:col-span-4 text-[13px] font-light text-paper/50 leading-relaxed">{p.excerpt}</p>
                <ArrowUpRight className="hidden md:block h-5 w-5 md:col-span-1 justify-self-end text-paper/30 group-hover:text-solar group-hover:rotate-45 transition-all duration-500" />
              </article>
            </Fade>
          ))}
          {!posts.length && <p className="py-12 text-center font-light text-paper/45">No articles match “{q}”.</p>}
        </div>
      </Section>

      <Section id="faq" eyebrow="Frequently asked questions" title="Good to know." tone="light"
        aside={<p className="text-[15px] font-light text-void/65 leading-[1.8]">Cannot find your answer? Write to <a href={`mailto:${COMPANY.email}`} className="hover-line text-rust">{COMPANY.email}</a> and we will reply within one business day.</p>}>
        <div className="mt-10 max-w-3xl"><Accordion items={FAQS} tone="light" /></div>
      </Section>

      <CtaBand />
    </>
  );
}

/* ═══ CAREERS ══════════════════════════════════════════════════ */
export function CareersPage() {
  const [team, setTeam] = useState('All');
  const [app, setApp] = useState({ name: '', email: '', phone: '', role: '', message: '' });
  const [sent, setSent] = useState(false);
  const teams = ['All', ...Array.from(new Set(ROLES.map(r => r.team)))];
  const list = team === 'All' ? ROLES : ROLES.filter(r => r.team === team);

  const fld = (k: keyof typeof app) => ({
    value: app[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setApp(p => ({ ...p, [k]: e.target.value })),
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <>
      <PageHero crumb="Careers" eyebrow="Careers — join the team" title="Come and build with us."
        intro="We hire for craft and curiosity. If you want to work on manufacturing, D2C, healthcare and software brands alongside senior people who will actually teach you — this is the place."
        img="https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800" />

      {/* TALENT NETWORK & SPONTANEOUS APPLICATION */}
      <Section id="open-roles" eyebrow="Talent Network" title="Spontaneous Opportunities." pad="py-16 lg:py-24">
        <div className="border border-paper/15 rounded-2xl p-8 sm:p-12 bg-void/5">
          <p className="text-paper/75 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            We are not actively listing open seats right now. Our core team in Noida is compact and craft-first. However, we regularly engage high-caliber engineers, SEO strategists, and filmmakers for upcoming enterprise productions. Send your portfolio and introduce yourself below.
          </p>
        </div>
      </Section>

      {/* APPLY */}
      <Section id="apply" eyebrow="Application" title="Send us your details." pad="py-16 lg:py-24">
        <div className="mt-10 max-w-2xl">
          {!sent ? (
            <form onSubmit={handleApply} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block border-b border-paper/20 py-4 focus-within:border-solar transition-colors">
                  <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">FULL NAME*</span>
                  <input {...fld('name')} required className="mt-2 w-full bg-transparent text-[16px] font-light outline-none" placeholder="Your name" />
                </label>
                <label className="block border-b border-paper/20 py-4 focus-within:border-solar transition-colors">
                  <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">EMAIL*</span>
                  <input type="email" {...fld('email')} required className="mt-2 w-full bg-transparent text-[16px] font-light outline-none" placeholder="you@example.com" />
                </label>
              </div>
              <label className="block border-b border-paper/20 py-4 focus-within:border-solar transition-colors">
                <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">PHONE*</span>
                <input {...fld('phone')} required className="mt-2 w-full bg-transparent text-[16px] font-light outline-none" placeholder="+91 9xxxxxxxx" />
              </label>
              <label className="block border-b border-paper/20 py-4 focus-within:border-solar transition-colors">
                <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">ROLE INTERESTED IN*</span>
                <select {...fld('role')} required className="mt-2 w-full bg-transparent text-[16px] font-light outline-none">
                  <option value="" className="bg-void">Select a role</option>
                  {ROLES.map(r => <option key={r.role} className="bg-void">{r.role}</option>)}
                </select>
              </label>
              <label className="block border-b border-paper/20 py-4 focus-within:border-solar transition-colors">
                <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">MESSAGE / LINKS*</span>
                <textarea rows={4} {...fld('message')} required className="mt-2 w-full bg-transparent text-[16px] font-light outline-none placeholder:text-paper/25" placeholder="Portfolio, GitHub, LinkedIn, why you…" />
              </label>
              <label className="mt-5 flex items-start gap-3 text-[12px] font-light text-paper/50">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#E8742C] shrink-0" />
                <span>I agree to be contacted about this application.</span>
              </label>
              <button data-hover className="group inline-flex items-center gap-3 font-light text-lg">
                <span className="hover-line">Send application</span><CircleArrow className="text-solar transition-transform duration-500 group-hover:rotate-45" />
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <p className="text-solar font-light">Application sent.</p>
              <p className="mt-3 text-[13px] text-paper/50">We’ll get back to you within a few business days.</p>
            </div>
          )}
        </div>
      </Section>

      <Section eyebrow="Why join" title="What we offer." tone="light">
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-void/15">
          {[['Learn from seniors', 'Every project reviewed by a director, not a peer.'], ['Real ownership', 'Your name on the work, from brief to delivery.'], ['Full-stack exposure', 'Move across marketing, tech and film.'], ['Hybrid, humane', 'Flexible hours, no performative overtime.']].map(([t, d], i) => (
            <Fade key={t} delay={i * .07} y={16}>
              <div className="group h-full min-h-[170px] border-r border-b border-void/15 p-6 flex flex-col justify-between hover:bg-void transition-colors duration-500" data-hover>
                <span className="mono text-[0.58rem] text-void/30 group-hover:text-solar transition-colors">{String(i + 1).padStart(2, '0')}</span>
                <div><p className="display text-[15.5px] group-hover:text-paper transition-colors duration-500">{t}</p><p className="mt-2 text-[12.5px] font-light text-void/60 group-hover:text-paper/65 leading-relaxed transition-colors duration-500">{d}</p></div>
              </div>
            </Fade>
          ))}
        </div>
      </Section>

      <StatBand tone="light" />
      <CtaBand />
    </>
  );
}

/* ═══ CONTACT ══════════════════════════════════════════════════ */
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: '', email: '', phone: '', type: '', budget: '', desc: '' });
  const [svcs, setSvcs] = useState<string[]>([]);
  const fld = (k: keyof typeof f) => ({ value: f[k], onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF(p => ({ ...p, [k]: e.target.value })) });
  const sel = (k: keyof typeof f) => ({ value: f[k], onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setF(p => ({ ...p, [k]: e.target.value })) });
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <PageHero crumb="Contact" eyebrow="Contact us — request a quote" title="Get in touch with us today."
        intro="At our company, we are committed to providing exceptional customer service and building long-lasting relationships. We look forward to hearing from you and working together to achieve your goals."
        img="https://images.pexels.com/photos/4345109/pexels-photo-4345109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800" />

      <Section pad="py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* offices */}
          <div className="lg:col-span-5">
            <Label>Our offices</Label>
            <div className="mt-8 space-y-6">
              {OFFICES.map((o, i) => (
                <Fade key={o.city} delay={i * .08} y={16}>
                  <div className={`border p-6 ${o.primary ? 'border-solar/45 bg-solar/[0.05]' : 'border-paper/15'}`}>
                    <div className="flex items-center justify-between">
                      <span className="mono text-[0.55rem] tracking-[0.22em] uppercase text-paper/45">{o.label}</span>
                      {o.primary && <span className="mono text-[0.5rem] tracking-[0.16em] uppercase bg-solar text-void px-2 py-1 rounded-full">HQ</span>}
                    </div>
                    <p className="mt-3 display text-xl">{o.city}</p>
                    <p className="mt-2.5 text-[13.5px] font-light text-paper/65 leading-relaxed">{o.lines.map(l => <span key={l} className="block">{l}</span>)}</p>
                  </div>
                </Fade>
              ))}
            </div>
            <Fade delay={.25} y={16}>
              <div className="mt-6 space-y-3 text-[14px] font-light">
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-solar transition-colors"><Mail className="h-4 w-4 text-solar" />{COMPANY.email}</a>
                {COMPANY.phones.map(p => <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-solar transition-colors"><Phone className="h-4 w-4 text-solar" />{p}</a>)}
                <p className="flex items-center gap-3 text-paper/60"><MapPin className="h-4 w-4 text-solar" />Monday – Saturday, 10:00 – 19:00 IST</p>
              </div>
            </Fade>
          </div>

          {/* form */}
          <div className="lg:col-span-7" ref={ref}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, ease: EASE }} className="border border-paper/20 bg-coal/60 p-8 md:p-12">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-solar text-void"><Check className="h-6 w-6" /></span>
                <p className="mono text-[0.58rem] tracking-[0.24em] uppercase text-paper/40 mt-7">Request received</p>
                <p className="mt-3 display text-3xl md:text-4xl">Thank you, {f.name.split(' ')[0] || 'friend'}.</p>
                <p className="mt-4 text-[14.5px] font-light text-paper/65 leading-relaxed">We will write to <span className="text-paper">{f.email}</span> within one business day.</p>
                <div className="mt-6 flex flex-wrap gap-2">{[f.type, f.budget, ...svcs].filter(Boolean).map(x => <span key={x} className="mono text-[0.58rem] tracking-[0.14em] uppercase px-3 py-1.5 border border-paper/20 rounded-full text-paper/60">{x}</span>)}</div>
                <button onClick={() => setSent(false)} data-hover className="mt-8 hover-line text-sm font-light">Send another request</button>
              </motion.div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (f.name && f.email.includes('@')) setSent(true); }} className="border border-paper/20 bg-coal/40 p-6 md:p-9">
                <Label>Request a quote</Label>
                <div className="mt-6 grid md:grid-cols-2 gap-x-8">
                  {([['name', 'NAME*', 'Your name', 'text'], ['email', 'EMAIL*', 'name@company.com', 'email'], ['phone', 'PHONE', '+91', 'tel']] as const).map(([k, l, ph, ty]) => (
                    <label key={k} className={`block border-b border-paper/20 py-4 focus-within:border-solar transition-colors ${k === 'phone' ? 'md:col-span-2' : ''}`}>
                      <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">{l}</span>
                      <input required={k !== 'phone'} type={ty} {...fld(k)} placeholder={ph} className="mt-2 w-full bg-transparent text-[16px] font-light outline-none placeholder:text-paper/25" />
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block border-b border-paper/20 py-4 focus-within:border-solar transition-colors">
                    <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">SERVICE REQUIRED*</span>
                    <select required {...sel('type')} className="mt-2 w-full bg-transparent text-[16px] font-light outline-none">
                      <option value="" className="bg-void">Select a service</option>
                      {SERVICES.map(s => <option key={s.slug} className="bg-void">{s.title}</option>)}
                    </select>
                  </label>
                </div>
                <div className="border-b border-paper/20 py-4">
                  <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">ALSO INTERESTED IN</span>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {SERVICES.filter(s => s.title !== f.type).map(s => (
                      <button type="button" key={s.slug} onClick={() => setSvcs(p => p.includes(s.title) ? p.filter(x => x !== s.title) : [...p, s.title])} data-hover
                        className={`px-3.5 h-[30px] mono text-[10px] rounded-full border transition duration-300 ${svcs.includes(s.title) ? 'bg-solar text-void border-solar' : 'border-paper/25 text-paper/65 hover:border-paper'}`}>{s.title}</button>
                    ))}
                  </div>
                </div>
                <label className="block border-b border-paper/20 py-4 focus-within:border-solar transition-colors">
                  <span className="mono text-[0.56rem] tracking-[0.22em] text-paper/45">PROJECT DETAILS</span>
                  <textarea rows={4} {...fld('desc')} placeholder="Goals, timeline, links…" className="mt-2 w-full bg-transparent text-[16px] font-light outline-none placeholder:text-paper/25" />
                </label>
                <label className="mt-5 flex items-start gap-3 text-[12px] font-light text-paper/50">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#E8742C] shrink-0" />
                  <span>I agree to be contacted about this enquiry. We never share your details.</span>
                </label>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                  <button data-hover className="group font-light text-lg md:text-xl flex gap-4 items-center"><span className="hover-line">Send request</span><CircleArrow className="text-solar transition-transform duration-500 group-hover:rotate-45" /></button>
                  <span className="mono text-[0.56rem] tracking-[0.18em] uppercase text-paper/35">Reply within 1 business day</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      <StatBand />
      <Testimonials />
      <CtaBand />
    </>
  );
}
