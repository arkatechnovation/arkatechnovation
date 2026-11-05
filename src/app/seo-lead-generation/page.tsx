import type { Metadata } from 'next';
import PortfoliteServiceDetail from '@/views/PortfoliteServiceDetail';
import { getServiceBySlug } from '@/lib/data';

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug('seo-lead-generation');
  const title = service ? `${service.title} | ARKA Technovation` : 'SEO, GEO & Lead Generation Services | High-Intent B2B Pipelines';
  const description =
    service?.short ||
    'Scale organic and generative search dominance and drive qualified enterprise pipeline with ARKA Technovation Private Limited. Technical audits, schema architecture, high-intent keyword mapping, and full-funnel CRO.';
  const url = '/seo-lead-generation';

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
    },
  };
}

export default function Page() {
  return <PortfoliteServiceDetail initialSlug="seo-lead-generation" />;
}
