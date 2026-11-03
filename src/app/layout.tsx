import type { Metadata, Viewport } from 'next';
import '../index.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const BASE_URL = 'https://arkatechnovation.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ARKA Technovation Private Limited — Digital Products, Software & Growth',
    template: '%s | ARKA Technovation Private Limited',
  },
  description:
    'ARKA Technovation Private Limited designs and builds enterprise software, high-performance web platforms, and growth systems for ambitious brands. Corporate HQ in Sector 63, Noida.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'ARKA Technovation Private Limited',
    'ARKA Technovation',
    'Enterprise Software Development',
    'SEO & Lead Generation',
    'Custom CRM Software',
    'Corporate Film Production',
    'Digital Marketing Agency Noida',
    'Next.js Web Applications',
    'Mr. Kranti Parashar',
  ],
  authors: [{ name: 'ARKA Technovation Private Limited', url: BASE_URL }],
  creator: 'ARKA Technovation Private Limited',
  publisher: 'ARKA Technovation Private Limited',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ARKA Technovation Private Limited — Digital Products, Software & Growth',
    description:
      'Enterprise software, high-performance web platforms, and growth systems for ambitious brands. Headquartered in Sector 63, Noida.',
    url: BASE_URL,
    siteName: 'ARKA Technovation Private Limited',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo/arka-logo-black.png',
        width: 1024,
        height: 562,
        alt: 'ARKA Technovation Private Limited Corporate Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARKA Technovation Private Limited — Digital Products, Software & Growth',
    description:
      'Enterprise software, high-performance web platforms, and growth systems for ambitious brands.',
    images: ['/images/logo/arka-logo-black.png'],
  },
  verification: {
    google: 'sw5bZM3CPpcFf3Ud0TAd9lY2HTfLRnZ0-fhJ3ueDR_w',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'ARKA Technovation Private Limited',
      legalName: 'ARKA Technovation Private Limited',
      url: BASE_URL,
      logo: `${BASE_URL}/images/logo/arka-logo-black.png`,
      image: `${BASE_URL}/images/logo/arka-logo-black.png`,
      telephone: '+91 97114 87316',
      email: 'info@arkatechnovation.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rayos Business Park, Office No- 202, C-4, Sector 63',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201301',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.6280',
        longitude: '77.3790',
      },
      founder: {
        '@type': 'Person',
        name: 'Mr. Kranti Parashar',
        jobTitle: 'Founder & Managing Director',
      },
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/arkatechnovationpvtltd/',
        'https://www.linkedin.com/company/arka-technovation-private-limited/',
        'https://www.instagram.com/arkatechnovationpvtltd/',
        'https://youtube.com',
        'https://x.com',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Enterprise Digital Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Software Development',
              url: `${BASE_URL}/services/development`,
              description: 'Bespoke enterprise software, modular backend architectures, scalable ERP systems, and custom CRMs.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Marketing',
              url: `${BASE_URL}/services/digital-marketing`,
              description: 'Full-funnel acquisition campaigns, multi-touch attribution telemetry, and precision conversion optimization.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO, GEO & AEO Services',
              url: `${BASE_URL}/seo-lead-generation`,
              description: 'Technical crawl architecture, high-intent keyword mapping, structured Schema.org entity graphs, and generative & answer engine dominance.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Film Production & Media',
              url: `${BASE_URL}/services/film-making`,
              description: 'Broadcast-quality corporate films, digital & TV commercials, executive interview pods, and next-gen AI video creation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Corporate World News',
              url: `${BASE_URL}/corporate-world-news`,
              description: 'Authoritative corporate journalism, executive interview broadcasts, strategic press releases, and empirical market research.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'ARKA Technovation Private Limited',
      description: 'Enterprise software engineering, search authority, performance marketing, and corporate cinema.',
      publisher: {
        '@id': `${BASE_URL}/#organization`,
      },
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="sw5bZM3CPpcFf3Ud0TAd9lY2HTfLRnZ0-fhJ3ueDR_w"
        />
        <meta
          name="description"
          content="ARKA Technovation Private Limited designs and builds enterprise software, high-performance web platforms, and growth systems for ambitious brands. Corporate HQ in Sector 63, Noida."
        />
        <link
          rel="preload"
          href="/images/hero/hero-main-mobile.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/hero/hero-main.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        {/* Speculation Rules API for instant same-origin client navigation (conservative to prevent bandwidth/CPU contention on load) */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: '/*' },
                  eagerness: 'conservative',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased selection:bg-solar selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
