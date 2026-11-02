import React, { useEffect } from 'react';
import ClientsShowcaseSection from './home/ClientsShowcaseSection';
import StatementSection from './home/StatementSection';
import ServicesStickySection from './home/ServicesStickySection';
import FeaturedWorkSection from './home/FeaturedWorkSection';
import StudioReelSection from './home/StudioReelSection';
import WhyUsSection from './home/WhyUsSection';
import IndustriesSection from './home/IndustriesSection';
import LatestNewsSection from './home/LatestNewsSection';
import ClientVoicesSection from './home/ClientVoicesSection';
import FaqSection from './home/FaqSection';
import FooterSection from './home/FooterSection';

export default function JuncaBody() {
  useEffect(() => {
    // Trigger Junca animation life-cycle events
    document.documentElement.classList.remove('is-preloading');
    document.documentElement.classList.remove('is-pre');

    const triggerAnimations = () => {
      document.dispatchEvent(new CustomEvent('preloader:done'));
      document.dispatchEvent(new CustomEvent('astro:page-load'));
    };

    const t1 = setTimeout(triggerAnimations, 80);
    const t2 = setTimeout(triggerAnimations, 350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.dispatchEvent(new CustomEvent('astro:before-swap'));
    };
  }, []);

  return (
    <div className="junca-body-root" id="home-content">
      <div className="page-white">
        {/* 1. Client Trust Showcase & Enterprise Validation */}
        <ClientsShowcaseSection />

        {/* 2. Agency Statement & 4-Column Capabilities */}
        <StatementSection />

        {/* 3. Sticky Interactive Portfolio / Services */}
        <ServicesStickySection />

        {/* 4. Selected Work Case Studies */}
        <FeaturedWorkSection />

        {/* 5. Studio Video Reel & Story */}
        <StudioReelSection />

        {/* 6. Why Work With Us Process Cards */}
        <WhyUsSection />

        {/* 7. Interactive Industries Sector Switcher */}
        <IndustriesSection />

        {/* 8. Latest News & Articles Strip */}
        <LatestNewsSection />

        {/* 9. Client Voices & Testimonials */}
        <ClientVoicesSection />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 11. Global Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
