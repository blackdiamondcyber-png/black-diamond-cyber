import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Your Growth Plan | Black Diamond Cyber',
  description:
    'Choose a growth plan that fits your business. Custom website included free with every plan. No setup fees, no contracts, cancel anytime.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
