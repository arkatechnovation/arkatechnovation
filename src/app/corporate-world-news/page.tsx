import type { Metadata } from 'next';
import PortfoliteServiceDetail from '@/views/PortfoliteServiceDetail';
import { getServiceBySlug } from '@/lib/data';

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug('corporate-world-news');
  const title = service ? `${service.title} | ARKA Technovation` : 'Corporate World News & Market Intelligence | ARKA Technovation';
  const description =
    service?.short ||
    'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, breaking business updates, and empirical market research produced in Sector 63, Noida.';
  const url = '/corporate-world-news';

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
  return <PortfoliteServiceDetail initialSlug="corporate-world-news" />;
}
