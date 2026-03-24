import type { Metadata } from 'next';
import { COMPETITOR_DATA } from '@/lib/comparison-data';
import { ComparisonPage } from '@/components/ComparisonPage';

const data = COMPETITOR_DATA.gargle;

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  openGraph: {
    title: data.seoTitle,
    description: data.seoDescription,
    url: `https://bd-cyber.com/vs-${data.slug}`,
    siteName: 'Black Diamond Cyber',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.seoTitle,
    description: data.seoDescription,
  },
  alternates: {
    canonical: `https://bd-cyber.com/vs-${data.slug}`,
  },
};

export default function VsGarglePage() {
  return <ComparisonPage data={data} />;
}
