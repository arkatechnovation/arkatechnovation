import { Star, ArrowRight, Quote } from 'lucide-react';

export default function PortfoliteTestimonials() {
  const testimonials = [
    {
      name: 'Rajesh Verma',
      role: 'Director, Precision Engineering',
      location: 'Delhi NCR',
      avatar: '/portfolite/avatar-1.png',
      quote:
        'They rebuilt our digital presence end-to-end — website, SEO and factory film. Inquiries did not just grow, they became the right kind of international buyers from Europe and North America.',
      metric: '+300% Organic Traffic',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, Maison D2C',
      location: 'D2C Brand',
      avatar: '/portfolite/avatar-2.jpg',
      quote:
        'Transparent reporting, real numbers, every month. Our organic traffic rose 150% in six months and revenue followed by sixty percent. The ROAS has completely transformed our margins.',
      metric: '4.6× ROAS Delivered',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'CEO, Industrial Solutions',
      location: 'Ahmedabad',
      avatar: '/portfolite/avatar-3.png',
      quote:
        'One team for software, marketing and film. Our custom multi-branch CRM saves each operational team twelve hours every week — and support actually picks up the phone immediately.',
      metric: '12h Saved Per Team/Wk',
      rating: 5,
    },
  ];

  const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '1,500+', label: 'Clients Scaled' },
    { value: '850+', label: 'Projects Shipped' },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-zinc-200/[0.4] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Client / Office Visual Frame (Exact Framer Structure) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/12 bg-zinc-100 aspect-[4/4.5] shadow-xl group">
              <img
                src="/images/industries/deeptech.webp"
                alt="ARKA Technovation Private Limited Client Partnership"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 inset-x-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white text-xs font-semibold">5.0 / 5.0</span>
                </div>
                <span className="text-zinc-300 text-xs font-mono">98.4% Retention</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pill, Title, Review Cards Stack & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-solar" />
              <span>Client Reviews &amp; Validation</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-none">
              Client Reviews
            </h2>

            <p className="mt-5 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Real validation from directors, enterprise leaders, and marketing heads across manufacturing, D2C, and SaaS who partner with ARKA.
            </p>

            {/* Testimonials Stack */}
            <div className="mt-8 w-full flex flex-col gap-4">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-black/10 hover:border-black/25 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-solar text-xs font-semibold font-mono">{t.metric}</span>
                  </div>

                  <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-black/6 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-8 h-8 rounded-full object-cover border border-black/10"
                    />
                    <div>
                      <p className="text-black text-xs font-semibold">{t.name}</p>
                      <p className="text-zinc-500 text-[11px]">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Stats Counters Row */}
            <div className="mt-8 pt-6 border-t border-black/10 w-full grid grid-cols-3 gap-4 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">{s.value}</p>
                  <p className="text-zinc-500 text-[11px] sm:text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
