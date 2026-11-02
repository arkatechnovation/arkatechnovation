import PortfoliteServiceDetail from '@/views/PortfoliteServiceDetail';
import { SERVICES } from '@/lib/data';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const title = service ? service.title : 'Service';
  const description = service?.short || 'Enterprise digital engineering, search authority, and custom software.';
  const url = `/services/${slug}`;

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

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PortfoliteServiceDetail initialSlug={slug} />;
}
