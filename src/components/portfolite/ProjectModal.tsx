'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Tag, User, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  description: string;
  deliverables: string[];
  results: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onBookCall?: () => void;
}

export default function ProjectModal({ project, onClose, onBookCall }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 font-framer">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-black/12 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.25)] flex flex-col z-10 text-black"
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-zinc-50/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-black/10 rounded-full">
                {project.category}
              </span>
              <span className="text-zinc-400 text-sm hidden sm:inline">•</span>
              <span className="text-zinc-600 text-sm hidden sm:inline">{project.client}</span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center text-zinc-600 hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content Scrollable */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Project Hero Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 bg-zinc-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl sm:text-4xl font-bold !text-white tracking-tight">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-zinc-50 border border-black/8 text-sm">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider">Client</p>
                <p className="text-black font-semibold mt-1">{project.client}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider">Timeline</p>
                <p className="text-black font-semibold mt-1">{project.year}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider">Services</p>
                <p className="text-black font-semibold mt-1">{project.category}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider">Impact</p>
                <p className="text-emerald-600 font-semibold mt-1">{project.results}</p>
              </div>
            </div>

            {/* Overview & Deliverables */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-lg font-semibold text-black">Project Overview</h3>
                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                  Every asset was crafted to maintain high fidelity across physical retail shelves, e-commerce stores, and digital marketing campaigns, resulting in measurable customer conversion and memorable brand equity.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-black">Deliverables</h3>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-zinc-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-zinc-600 text-sm text-center sm:text-left">
                Want a custom brand and packaging design like this?
              </p>
              <button
                onClick={() => {
                  onClose();
                  if (onBookCall) onBookCall();
                  else {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-black text-white font-semibold rounded-full text-sm inline-flex items-center justify-center gap-2 framer-btn-primary"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
