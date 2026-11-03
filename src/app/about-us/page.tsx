import type { Metadata } from 'next';
import WhoWeArePage from '@/views/WhoWeArePage';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Craft & Leadership | ARKA Technovation',
  description:
    'Learn about ARKA Technovation Private Limited (formerly known as Jaikvik Technology India Pvt. Ltd.), bringing 10 years of company experience and led by Mr. Kranti Parashar with 18+ years of industry craft. 100% in-house software, design, SEO, and cinema production teams in Sector 63, Noida.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us — Heritage, Craft & Leadership | ARKA Technovation Private Limited',
    description:
      'Learn about ARKA Technovation Private Limited (formerly known as Jaikvik Technology India Pvt. Ltd.). 10 years of company experience, founder Mr. Kranti Parashar with 18+ years of craft, 500+ delivered projects, and 100% in-house execution pods in Sector 63, Noida.',
    url: '/about-us',
    type: 'website',
  },
};

export default function Page() {
  return <WhoWeArePage />;
}

