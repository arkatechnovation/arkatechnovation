import type { Metadata } from 'next';
import PortfoliteWork from '@/views/PortfoliteWork';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies',
  description:
    'Explore 850+ completed client deployments across enterprise software, organic search ranking, and cinematic brand films.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Our Work & Case Studies | ARKA Technovation Private Limited',
    description:
      'Case studies and verified results across 850+ projects for enterprise and mid-market organizations.',
    url: '/work',
    type: 'website',
  },
};

export default function WorkPage() {
  return <PortfoliteWork />;
}
