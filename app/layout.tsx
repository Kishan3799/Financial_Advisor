import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ScanAndApplyFloatingButton from '@/components/site/ScanAndApplyFloatingButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Choudhary Capital Crux | Financial Advisor & Insurance Agent',
  description:
    'Trusted financial advisor offering life insurance, mutual funds, SIP planning, retirement and child education planning, and flexible loan solutions. 12+ years of expertise.',
  keywords: [
    'financial advisor',
    'life insurance',
    'mutual funds',
    'SIP calculator',
    'retirement planning',
    'child education planning',
    'loans',
    'Choudhary Capital Crux',
  ],
  openGraph: {
    title: 'Choudhary Capital Crux | Financial Advisor & Insurance Agent',
    description:
      'Protect your family, grow your wealth, and secure your tomorrow with 12+ years of trusted financial expertise.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <ScanAndApplyFloatingButton />
      </body>
    </html>
  );
}
