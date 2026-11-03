import type { Metadata } from 'next';
import WhoWeArePage from '@/views/WhoWeArePage';

export const metadata: Metadata = {
  title: 'About Us — ARKA Technovation',
  description:
    'About ARKA Technovation Private Limited (formerly known as Jaikvik Technology India Pvt. Ltd.). 10 years of company experience, led by Mr. Kranti Parashar with 18+ years of craft. Engineering, SEO, and visual production pods based in Sector 63, Noida.',
  alternates: {
    canonical: '/about-us',
  },
};

export default function Page() {
  return <WhoWeArePage />;
}

