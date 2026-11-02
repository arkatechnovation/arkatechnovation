import type { Metadata } from 'next';
import WhoWeArePage from '@/views/WhoWeArePage';

export const metadata: Metadata = {
  title: 'Who We Are — Heritage & Leadership',
  description:
    'Founded & led by Mr. Kranti Parashar. 15+ years of engineering craft, 100% in-house software, design, SEO, and cinema production teams in Sector 63, Noida.',
  alternates: {
    canonical: '/who-we-are',
  },
  openGraph: {
    title: 'Who We Are — Heritage & Leadership | ARKA Technovation Private Limited',
    description:
      'Learn about our 15+ year history, founder Mr. Kranti Parashar, our Centralized Content Library, and our 100% in-house execution pods in Sector 63, Noida.',
    url: '/who-we-are',
    type: 'website',
  },
};

export default function Page() {
  return <WhoWeArePage />;
}
