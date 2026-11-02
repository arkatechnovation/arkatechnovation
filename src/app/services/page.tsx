import type { Metadata } from 'next';
import PortfoliteServicesPage from '@/views/PortfoliteServicesPage';

export const metadata: Metadata = {
  title: 'Enterprise Services & Capabilities',
  description:
    '10 Disciplines: Full-Stack Web & Next.js, Search Authority & Technical SEO, Custom CRM & ERP, Corporate Cinema, UI/UX, and Performance Marketing.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Enterprise Services & Capabilities | ARKA Technovation Private Limited',
    description:
      'Explore our full suite of digital engineering, search authority, software development, and media production services.',
    url: '/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <PortfoliteServicesPage />;
}
