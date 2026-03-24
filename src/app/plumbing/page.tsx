import type { Metadata } from 'next';
import { INDUSTRY_DATA } from '@/lib/industry-data';
import { IndustryPage } from '@/components/IndustryPage';

const data = INDUSTRY_DATA.plumbing;

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  keywords: data.keywords,
  openGraph: {
    title: data.seoTitle,
    description: data.seoDescription,
    url: `https://bd-cyber.com/${data.slug}`,
    siteName: 'Black Diamond Cyber',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.seoTitle,
    description: data.seoDescription,
  },
  alternates: {
    canonical: `https://bd-cyber.com/${data.slug}`,
  },
};

export default function PlumbingPage() {
  return <IndustryPage data={data} />;
}
