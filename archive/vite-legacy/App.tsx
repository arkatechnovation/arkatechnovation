import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import PortfoliteHome from './pages/PortfoliteHome';
import PortfoliteServicesPage from './pages/PortfoliteServicesPage';
import PortfoliteServiceDetail from './pages/PortfoliteServiceDetail';
import PortfoliteWork from './pages/PortfoliteWork';
import PortfoliteCareers from './pages/PortfoliteCareers';
import PortfoliteContact from './pages/PortfoliteContact';
import PortfoliteNav from './components/portfolite/PortfoliteNav';
import PortfoliteFooter from './components/portfolite/PortfoliteFooter';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

function NotFound() {
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
            to="/"
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
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

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        document.querySelector(hash)?.scrollIntoView({ behavior, block: 'start' });
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function Shell() {
  const loc = useLocation();

  return (
    <>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <motion.div
          key={loc.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={loc}>
            <Route element={<Layout />}>
              <Route path="/" element={<PortfoliteHome />} />
              <Route path="/services" element={<PortfoliteServicesPage />} />
              <Route path="/services/:slug" element={<PortfoliteServiceDetail />} />
              <Route path="/work" element={<PortfoliteWork />} />
              <Route path="/careers" element={<PortfoliteCareers />} />
              <Route path="/contact" element={<PortfoliteContact />} />
              <Route path="/who-we-are" element={<PortfoliteHome />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
