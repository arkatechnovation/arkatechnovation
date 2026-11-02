import Link from '@/components/Link';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black font-framer flex flex-col justify-between">
      <PortfoliteNav />
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 pt-28">
        <span className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-mono uppercase tracking-widest text-solar mb-6">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-tight">
          Page not found.
        </h1>
        <p className="mt-5 text-sm sm:text-base font-light text-zinc-600 max-w-md leading-relaxed">
          The requested page has been relocated or is currently undergoing restructuring. Explore our services catalog or return to the home screen.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="px-6 py-2.5 rounded-full bg-zinc-100 border border-black/10 text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Browse Services
          </Link>
        </div>
      </section>
      <PortfoliteFooter />
    </div>
  );
}
