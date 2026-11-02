'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { ProjectData } from './ProjectModal';

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false });

export default function PortfoliteProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Parallax motion linked to continuous scroll (subtle and butter-smooth)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Staggered parallax offsets applied on outer wrapper
  const scrollYCol1 = useTransform(scrollYProgress, [0, 1], [40, -100]);
  const scrollYCol5 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const scrollYCol6 = useTransform(scrollYProgress, [0, 1], [60, -120]);

  // Col 1 Projects (Left Column)
  const projectsCol1: ProjectData[] = [
    {
      id: 'arka-1',
      title: 'Precision Engineering Co.',
      category: 'Manufacturing · Web & SEO',
      image: '/images/products/grid-01-precision-cad.webp',
      client: 'Rajesh Verma, Director',
      year: '2025',
      description: 'A forty-year-old exporter with world-class machinery rebuilt around product-line intent. Fixed technical foundations, published sixty specification pages, and shot a factory film that proved capacity on camera.',
      deliverables: ['SEO Intent Architecture', 'B2B Web Platform', 'Factory Film', 'Global Export Schema'],
      results: '+300% Organic Traffic in 9 Months',
    },
    {
      id: 'arka-2',
      title: 'Maison D2C Online Store',
      category: 'E-Commerce · Growth',
      image: '/images/products/grid-02-maison-d2c.webp',
      client: 'Priya Sharma, Founder',
      year: '2025',
      description: 'Rebuilt storefront to an ultra-fast 1.4s performance budget, restructured the checkout funnel with continuous testing, and shifted paid budget to full-funnel shopping and remarketing.',
      deliverables: ['Headless Storefront', 'Checkout Optimisation', 'Paid Search & Meta Ads', 'Attribution Model'],
      results: '+60% Revenue in 6 Months · 4.6× ROAS',
    },
    {
      id: 'arka-3',
      title: 'Northline Heavy Industries',
      category: 'Corporate Film & Campaigns',
      image: '/images/products/grid-03-northline-cinema.webp',
      client: 'Marketing Head, Northline',
      year: '2024',
      description: 'A four-minute cinematic brand film shot across two manufacturing plants, cut into eleven social assets, and distributed with an account-based campaign to 900 named institutional buyers.',
      deliverables: ['Cinematic Brand Film', 'Factory Cinematography', 'Social Cuts', 'Account-Based Distribution'],
      results: '2.1M Views · 480 Qualified Leads',
    },
  ];

  // Col 5 Projects (Center Elevated Column - Framer Flagship)
  const projectsCol5: ProjectData[] = [
    {
      id: 'arka-4',
      title: 'Enterprise Multi-Branch CRM',
      category: 'Enterprise Software & ERP',
      image: '/images/products/grid-04-enterprise-crm.webp',
      client: 'Amit Patel, CEO',
      year: '2025',
      description: 'Replaced six fragmented regional spreadsheets with a bespoke multi-tier CRM with role-based dashboards, automated approval matrices, WhatsApp and Tally accounting integrations, and executive pipeline views.',
      deliverables: ['Custom CRM Architecture', 'Tally & WhatsApp Sync', 'Role-Based Dashboard', 'Mobile Field App'],
      results: '12h Saved Per Team Weekly',
    },
    {
      id: 'arka-5',
      title: 'Industrial Plant Nationwide SEO',
      category: 'Manufacturing · Lead Gen',
      image: '/images/products/grid-05-plant-seo.webp',
      client: 'Business Head, Industrial Plant',
      year: '2024',
      description: 'A modular city-page architecture, product specification schema, Google Business profile optimisation across nine manufacturing zones, and technical intent marketing.',
      deliverables: ['Multi-City Architecture', 'Technical SEO Schema', 'Google Maps Optimisation', 'Lead Capture Engine'],
      results: '140+ Keywords Ranked on Page One',
    },
    {
      id: 'arka-6',
      title: 'Meridian Healthcare Network',
      category: 'UX / UI & Content Engine',
      image: '/images/products/grid-06-meridian-health.webp',
      client: 'Sneha Kulkarni, CMO',
      year: '2025',
      description: 'A patient-first digital ecosystem featuring seamless doctor appointment scheduling, cross-city hospital information architecture, and an always-on content marketing engine producing thirty original assets monthly.',
      deliverables: ['Patient Portal & Booking', 'Healthcare Design System', 'Content Production Engine', 'Local SEO'],
      results: '3.4× Engagement & Booking Lift',
    },
  ];

  // Col 6 Projects (Right Column)
  const projectsCol6: ProjectData[] = [
    {
      id: 'arka-7',
      title: 'BotBlox Robotics Hardware',
      category: 'Hardware & Web Portal',
      image: '/images/products/grid-07-botblox-robotics.webp',
      client: 'Engineering Team, BotBlox',
      year: '2024',
      description: 'High-performance interactive web experience for autonomous drone and robotics networking hardware, featuring technical datasheets and instant checkout.',
      deliverables: ['Hardware Landing Pages', 'Technical Documentation UI', 'Custom 3D Interactive View', 'Fast Checkout'],
      results: 'Global B2B Developer Adoption',
    },
    {
      id: 'arka-8',
      title: 'Kestrix Thermal AI Systems',
      category: 'AI Software & Dashboard',
      image: '/images/products/grid-08-kestrix-thermal.webp',
      client: 'Product Lead, Kestrix',
      year: '2025',
      description: 'Clean spatial thermal analytics interface, interactive GIS mapping overlays, and building energy retrofitting dashboard built with Next.js and Three.js.',
      deliverables: ['Analytics Dashboard', 'Interactive Heatmap Canvas', 'B2B Sales Portal', 'Framer Prototype'],
      results: 'Major European Municipal Rollout',
    },
    {
      id: 'arka-9',
      title: 'Skipper NDT Maritime Tech',
      category: 'Offshore Tech · 3D Visuals',
      image: '/images/products/grid-09-skipper-maritime.webp',
      client: 'Managing Director, Skipper NDT',
      year: '2024',
      description: 'Cinematic brand presence and interactive digital showcase for magnetic drone inspection of buried subsea pipelines.',
      deliverables: ['Cinematic Brand Presence', '3D Pipeline Visualisation', 'Multi-Language Architecture', 'Investor Deck'],
      results: 'Premier Maritime Tech Award',
    },
  ];

  // Curated sequence for mobile 2-column layout
  const mobileProjects: ProjectData[] = [
    projectsCol5[0], // Enterprise Multi-Branch CRM
    projectsCol1[0], // Precision Engineering Co.
    projectsCol6[0], // BotBlox Robotics Hardware
    projectsCol1[1], // Maison D2C Online Store
    projectsCol5[1], // Industrial Plant Nationwide SEO
    projectsCol6[1], // Kestrix Thermal AI Systems
    projectsCol1[2], // Northline Heavy Industries
    projectsCol5[2], // Meridian Healthcare Network
    projectsCol6[2], // Skipper Cloud Architecture (Full-width bottom banner)
  ];

  // Mobile Compact 2-Column Card Renderer (Static, Clean, Zero Scroll Jitter)
  const renderMobileCompactCard = (proj: ProjectData, isFullWidth = false) => {
    return (
      <div
        key={`m-${proj.id}`}
        onClick={() => setSelectedProject(proj)}
        className={`group relative overflow-hidden rounded-xl bg-white border border-black/10 hover:border-black/25 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.05)] ${
          isFullWidth ? 'col-span-2' : 'col-span-1'
        }`}
      >
        {/* Image Container with native aspect ratio */}
        <div className={`relative w-full overflow-hidden bg-zinc-100 ${isFullWidth ? 'aspect-[16/9]' : 'aspect-[4/4.5]'}`}>
          <img
            src={proj.image}
            alt={proj.title}
            loading="lazy"
            decoding="async"
            width={600}
            height={690}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      </div>
    );
  };

  const renderProjectCard = (proj: ProjectData, featured = false) => (
    <div
      key={proj.id}
      onClick={() => setSelectedProject(proj)}
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-[border-color,box-shadow] duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl ${
        featured ? 'ring-1 ring-black/15' : ''
      }`}
    >
      {/* Image Container with Framer-like Grayscale to Color & Subtle Scale */}
      <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/4.6] overflow-hidden bg-zinc-100">
        <img
          src={proj.image}
          alt={proj.title}
          loading="lazy"
          decoding="async"
          width={600}
          height={690}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative pt-0 sm:pt-2 pb-16 sm:pb-24 font-framer bg-white text-black overflow-hidden"
    >
      {/* Background Subtle Radial Light Pool (GPU Accelerated without heavy blur filter) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(228,228,231,0.45)_0%,rgba(228,228,231,0)_70%)] rounded-full pointer-events-none" style={{ transform: 'translate3d(-50%, -50%, 0)' }} />

      <div className="max-w-[1520px] mx-auto px-3 sm:px-6 relative">
        {/* Hardware-accelerated edge fades (0% GPU composite penalty) */}
        <div className="pointer-events-none absolute inset-x-3 sm:inset-x-6 top-0 h-12 bg-gradient-to-b from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-x-3 sm:inset-x-6 bottom-16 sm:bottom-20 h-12 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

        <div className="py-2">
          {/* Mobile View: Clean, Static 2-Column Grid (Zero Scroll Animation / Zero Jitter, Cuts Height by 70%) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:hidden">
            {mobileProjects.map((p, idx) =>
              renderMobileCompactCard(p, idx === mobileProjects.length - 1)
            )}
          </div>

          {/* Desktop Parallax Columns (100% UNTOUCHED) */}
          <div className="hidden md:flex flex-row items-start justify-center gap-2.5 sm:gap-3">
            {/* Column 1 (Left Column) */}
            <motion.div
              style={{ y: scrollYCol1 }}
              className="flex-1 w-full will-change-transform"
            >
              <div className="w-full flex flex-col gap-2.5 sm:gap-3">
                {projectsCol1.map((p) => renderProjectCard(p))}
              </div>
            </motion.div>

            {/* Column 5 (Center Column - Elevated Flagship Scale) */}
            <motion.div
              style={{ y: scrollYCol5 }}
              className="flex-[1.22] w-full z-10 will-change-transform"
            >
              <div className="w-full flex flex-col gap-2.5 sm:gap-3">
                {projectsCol5.map((p) => renderProjectCard(p, true))}
              </div>
            </motion.div>

            {/* Column 6 (Right Column) */}
            <motion.div
              style={{ y: scrollYCol6 }}
              className="flex-1 w-full will-change-transform"
            >
              <div className="w-full flex flex-col gap-2.5 sm:gap-3">
                {projectsCol6.map((p) => renderProjectCard(p))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Centered Action Buttons (Exact Framer Structure) */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4">
          <button
            onClick={() => setSelectedProject(projectsCol5[0])}
            className="px-6 py-2.5 text-xs sm:text-sm text-zinc-600 hover:text-black underline underline-offset-8 transition-colors font-medium"
          >
            All Projects
          </button>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-full inline-flex items-center justify-center framer-btn-primary shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          >
            <span>Book a Free Call</span>
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
