import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
