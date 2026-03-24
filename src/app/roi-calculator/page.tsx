import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BookingHandler } from '@/components/BookingHandler';
import { ROICalculator } from '@/components/ROICalculator';

export const metadata: Metadata = {
  title: 'ROI Calculator | Black Diamond Cyber',
  description:
    'Calculate your potential return on investment with a high-performance website and growth automation from Black Diamond Cyber.',
  openGraph: {
    title: 'ROI Calculator | Black Diamond Cyber',
    description:
      'See how much revenue a custom website with AI-powered growth systems could generate for your local business.',
    url: 'https://bd-cyber.com/roi-calculator',
    siteName: 'Black Diamond Cyber',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bd-cyber.com/roi-calculator',
  },
};

export default function ROICalculatorPage() {
  return (
    <>
      <BookingHandler />
      <div className="amb">
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      <div className="grain"></div>
      <div className="pg">
        <Nav />
        <div style={{ paddingTop: '60px' }}>
          <ROICalculator />
        </div>
        <Footer />
      </div>
    </>
  );
}
