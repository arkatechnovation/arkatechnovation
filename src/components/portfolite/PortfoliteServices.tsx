import { ArrowRight, Code2, Search, Film, TrendingUp } from 'lucide-react';

export default function PortfoliteServices() {
  const servicePills = [
    'Software Engineering',
    'Technical SEO & Growth',
    'Custom CRM & ERP',
    'Corporate Film Production',
    'Headless E-Commerce',
  ];

  const bentoCards = [
    {
      title: 'Search Engine Dominance',
      icon: Search,
      desc: 'Technical site architecture, product specification schema, multi-city footprint, and high-intent keyword ranking compounds that put manufacturers on page one.',
    },
    {
      title: 'Full-Stack Web Engineering',
      icon: Code2,
      desc: 'High-performance Next.js platforms, ultra-fast headless storefronts, and multi-tier CRM systems built to replace messy spreadsheets with reliable workflows.',
    },
    {
      title: 'Corporate Film & Production',
      icon: Film,
      desc: 'Four-minute cinematic factory films, customer video case studies, and high-converting commercial cuts that prove production capacity and build instant trust.',
    },
    {
      title: 'Paid Growth & Performance Ads',
      icon: TrendingUp,
      desc: 'Full-funnel Google Ads, LinkedIn account-based marketing, and Meta remarketing campaigns connected to live dashboards with 100% attribution transparency.',
    },
  ];

  const tickerRow1 = [
    'Technical SEO',
    'Full-Stack Next.js',
    'Corporate 4K Films',
    'Custom CRM Architecture',
    'Shopify Plus',
    'Factory Cinematography',
    'Tally & API Integrations',
    'B2B Intent Lead Gen',
  ];

  const tickerRow2 = [
    'Performance PPC',
    'Google Business Maps',
    'Role-Based Dashboards',
    'Headless Stores',
    'WhatsApp Automation',
    'Account-Based Ads',
    'Zero-Bloat Code',
    '100% Attribution Transparency',
  ];

  return (
    <section
      id="services"
      className="relative py-20 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-zinc-200/[0.4] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Layout (Exact Framer Structure) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle, Pills, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-solar" />
              <span>Comprehensive Digital Capabilities</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-none">
              Services
            </h2>

            <p className="mt-5 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Helping forward-thinking businesses and manufacturers stand out with digital products, search domination, and corporate films that captivate and convert effectively.
            </p>

            {/* Service Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {servicePills.map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-zinc-100 border border-black/10 text-zinc-700 hover:text-black hover:border-black/25 transition-colors cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-full inline-flex items-center gap-2 framer-btn-primary shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                className="px-6 py-2.5 bg-zinc-100 hover:bg-zinc-200 border border-black/10 text-zinc-800 text-xs sm:text-sm font-medium rounded-full transition-colors"
              >
                See Projects
              </a>
            </div>
          </div>

          {/* Right Column: Featured Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/12 bg-zinc-100 aspect-[4/3.4] min-h-[380px] sm:min-h-[440px] shadow-xl group">
              <img
                src="/portfolite/proj-5.png"
                alt="ARKA Technovation Private Limited Engineering Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
            </div>
          </div>
        </div>

        {/* 4 Bento Grid Cards (2x2 Layout Exactly Matching Framer) */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 sm:gap-8">
          {bentoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-black/10 hover:border-black/25 transition-all duration-300 flex flex-col justify-between group shadow-sm min-h-[300px]"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:text-solar transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Double Row Moving Ticker Marquee */}
        <div className="mt-14 pt-10 border-t border-black/8 overflow-hidden space-y-3">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex gap-3 shrink-0 whitespace-nowrap">
              {[...tickerRow1, ...tickerRow1, ...tickerRow1].map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-zinc-100 border border-black/8 text-zinc-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse flex gap-3 shrink-0 whitespace-nowrap">
              {[...tickerRow2, ...tickerRow2, ...tickerRow2].map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-zinc-100 border border-black/8 text-zinc-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
