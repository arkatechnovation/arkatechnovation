import type { Metadata } from 'next';
import OurTechnologyPage from '@/views/OurTechnologyPage';

export const metadata: Metadata = {
  title: 'Our Technology Stack & Enterprise Systems',
  description:
    'Custom CRM engineering, Marketing Cloud architectures, Customer Data Platforms (CDP), Dynamic Number Insertion (DNI), and automated lifecycle pipelines.',
  alternates: {
    canonical: '/our-technology',
  },
  openGraph: {
    title: 'Our Technology Stack & Enterprise Systems | ARKA Technovation Private Limited',
    description:
      'Proprietary CRM platforms, automated lead-tracking engines, multi-touch attribution, and secure cloud pipelines.',
    url: '/our-technology',
    type: 'website',
  },
};

export default function Page() {
  return <OurTechnologyPage />;
}
