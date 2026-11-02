import type { Metadata } from 'next';
import UxInteractivesPage from '@/views/UxInteractivesPage';

export const metadata: Metadata = {
  title: 'UX & Interactive Digital Experiences',
  description:
    'Design human-centric, high-converting digital products. Design systems, motion engineering, 3D WebGL, CRO audits, ADA WCAG 2.2 accessibility, and headless Shopify Plus.',
  alternates: {
    canonical: '/ux-interactives',
  },
  openGraph: {
    title: 'UX & Interactive Digital Experiences | ARKA Technovation Private Limited',
    description:
      'Human-centric interface design, design systems, WebGL interactions, and enterprise CRO engineering.',
    url: '/ux-interactives',
    type: 'website',
  },
};

export default function Page() {
  return <UxInteractivesPage />;
}
