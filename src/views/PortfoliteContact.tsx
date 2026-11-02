'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { OFFICES, COMPANY } from '../lib/data';

export default function PortfoliteContact() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Technical SEO']);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const availableServices = [
    'SEO & Lead Generation',
    'Full-Stack Web & Next.js',
    'Custom CRM & Cloud ERP',
    'Corporate Film Production',
    'E-Commerce & Headless',
    'Paid Ads & Performance',
    'Technical Support & Retainer',
  ];

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08]"
          >
            Let's build something exceptional.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Whether you need an enterprise software audit, search engine dominance, corporate factory film, or immediate project support — our direct leadership is one call away.
          </motion.p>
        </div>
      </section>

      {/* Main Split Section: Offices on Left, Interactive Form on Right */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contacts & Regional Hubs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Contact Card */}
            <div className="p-7 rounded-3xl bg-white border border-black/10 shadow-sm space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block">
                Direct Communication
              </span>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-zinc-800 hover:text-black transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-zinc-100 border border-black/10 flex items-center justify-center text-solar group-hover:bg-solar group-hover:text-black transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">{COMPANY.phones[0]}</p>
                    <p className="text-[11px] text-zinc-500">Call / WhatsApp Support</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-zinc-800 hover:text-black transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-zinc-100 border border-black/10 flex items-center justify-center text-solar group-hover:bg-solar group-hover:text-black transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">{COMPANY.email}</p>
                    <p className="text-[11px] text-zinc-500">Written Proposals &amp; RFPs</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm text-zinc-800 pt-2 border-t border-black/8">
                  <div className="w-9 h-9 rounded-full bg-zinc-100 border border-black/10 flex items-center justify-center text-emerald-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-xs text-zinc-900">Mon – Sat: 10:00 – 19:00 IST</p>
                    <p className="text-[11px] text-zinc-500">2-Hour First Response SLA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices Stack */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block px-1">
                Regional Hubs
              </span>

              {OFFICES.map((off) => (
                <div
                  key={off.city}
                  className={`p-5 rounded-2xl border transition-all ${
                    off.primary
                      ? 'bg-zinc-50 border-solar/50 shadow-md'
                      : 'bg-white border-black/10 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-solar" />
                      <h4 className="font-bold text-black text-sm">{off.city}</h4>
                    </div>
                    {off.primary && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-solar text-black">
                        Corporate HQ
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed pl-6">
                    {off.lines.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-xl relative">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block">
                  Project Request / Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mt-1">
                  Tell us what you are building.
                </h3>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Multi-Select */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-2.5">
                      Select Capabilities Needed *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              isSelected
                                ? '!bg-black !text-white font-semibold shadow-md'
                                : '!bg-zinc-100 border border-black/10 !text-zinc-700 hover:!text-black hover:!bg-zinc-200'
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Inputs Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Rajesh Verma"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98xxxxxxxx"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Precision Engineering Ltd."
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Project Goals / Scope *
                    </label>
                    <textarea
                      rows={4}
                      id="contact-message"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your current challenge, target timeline, or what you want to achieve..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="site-button w-full py-3.5 rounded-full !bg-black !text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:!bg-zinc-800 shadow-xl"
                    >
                      <span>Submit Project Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-16 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-4 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-2">Inquiry Submitted</h4>
                  <p className="text-zinc-600 text-sm max-w-sm font-light">
                    Thank you. One of our technical directors will review your scope and provide a written estimate within 2 business hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
