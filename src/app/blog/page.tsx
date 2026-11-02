import type { Metadata } from 'next';
import NewsPage from '@/views/NewsPage';

export const metadata: Metadata = {
  title: 'Blog & Engineering Notes',
  description:
    'Our take on design, technology, and what makes a website convert. Practical notes, Core Web Vitals benchmarks, custom ERP/CRM case studies, and digital marketing insights from ARKA Technovation.',
  alternates: {
    canonical: '/blog',
  },
};

export default function Page() {
  return <NewsPage />;
}
