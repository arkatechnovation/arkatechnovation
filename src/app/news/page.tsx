import type { Metadata } from 'next';
import NewsPage from '@/views/NewsPage';

export const metadata: Metadata = {
  title: 'Latest News & Engineering Blog',
  description:
    'Our take on design, technology, and what makes a website convert. Practical notes, Core Web Vitals benchmarks, custom ERP/CRM case studies, and digital marketing insights from ARKA Technovation.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'Latest News & Engineering Blog | ARKA Technovation Private Limited',
    description:
      'In-depth articles and engineering case studies from ARKA Technovation Private Limited.',
    url: '/news',
    type: 'website',
  },
};

export default function Page() {
  return <NewsPage />;
}

