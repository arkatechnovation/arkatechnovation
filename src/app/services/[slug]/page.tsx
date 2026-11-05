import PortfoliteServiceDetail from '@/views/PortfoliteServiceDetail';
import { SERVICES, getServiceBySlug } from '@/lib/data';

export async function generateStaticParams() {
  const slugs = new Set<string>();
  SERVICES.forEach((service) => {
    slugs.add(service.slug);
    service.aliases?.forEach((alias) => slugs.add(alias));
  });
  return Array.from(slugs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const title = service ? `${service.title} | ARKA Technovation` : 'Service Discipline | ARKA Technovation';
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
