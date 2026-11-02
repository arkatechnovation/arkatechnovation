import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../../lib/data';

export default function PortfoliteFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-zinc-200/[0.4] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-solar" />
            <span>Answers &amp; Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 text-base max-w-lg mx-auto font-light">
            Clear, honest answers about working with ARKA Technovation Private Limited, timelines, pricing, and project governance.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-zinc-50 border-black/20 shadow-md'
                    : 'bg-white border-black/8 hover:border-black/20 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-black' : 'text-zinc-800'
                  }`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-solar text-white border-solar rotate-45'
                        : 'bg-zinc-100 text-zinc-600 border-black/10'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-zinc-600 font-light leading-relaxed border-t border-black/6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-zinc-50 border border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            Have a project or specific integration requirement?
          </p>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest font-semibold text-solar hover:underline inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Talk to Kranti &amp; Engineering</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
