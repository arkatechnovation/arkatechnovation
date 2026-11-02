import type { Metadata } from 'next';
import SeoLeadGenerationPage from '@/views/SeoLeadGenerationPage';

export const metadata: Metadata = {
  title: 'SEO & Lead Generation Services | High-Intent B2B Pipelines',
  description:
    'Scale organic search dominance and drive qualified enterprise pipeline with ARKA Technovation Private Limited. Technical audits, schema architecture, high-intent keyword mapping, and full-funnel CRO.',
  alternates: {
    canonical: '/seo-lead-generation',
  },
  openGraph: {
    title: 'SEO & Lead Generation Services | ARKA Technovation Private Limited',
    description:
      'Technical audits, semantic schema, high-intent B2B keywords, and conversion-optimized landing page architecture.',
    url: '/seo-lead-generation',
    type: 'website',
  },
};

export default function Page() {
  return <SeoLeadGenerationPage />;
}
