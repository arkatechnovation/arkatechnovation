import type { Metadata } from 'next';
import PortfoliteHome from '@/views/PortfoliteHome';

export const metadata: Metadata = {
  title: 'ARKA Technovation Private Limited — Digital Products, Software & Growth',
  description:
    'ARKA Technovation Private Limited designs and builds enterprise software, high-performance web platforms, and growth systems for ambitious brands. Corporate HQ in Sector 63, Noida.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <PortfoliteHome />;
}
