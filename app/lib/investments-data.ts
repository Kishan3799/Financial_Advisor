import {
  TrendingUp,
  Landmark,
  Shield,
  Briefcase,
  PieChart,
  Gem,
  BadgeDollarSign,
  Laptop,
  BarChart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { InvestmentPlan } from '@/components/site/InvestmentDetailPage';

export const investmentPlans: Record<string, InvestmentPlan> = {
  'mutual-fund': {
    slug: 'mutual-fund',
    title: 'Mutual Fund',
    icon: TrendingUp,
    tagline: 'Professional portfolio management for systematic wealth creation.',
    heroImage:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Mutual Funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer professional management and are ideal for long-term wealth creation through SIPs or lump-sum investments.',
    features: [
      'Diversification across asset classes',
      'Professional fund management',
      'High liquidity and easy tracking',
      'Flexible investment via SIPs or lump sum',
      'Tax-saving options via ELSS funds',
    ],
    whoNeeds:
      'Ideal for investors of all ages looking to build long-term wealth, save for specific goals like education or retirement, or looking for better returns than traditional savings.',
    process: [
      'Consult with our advisor to define your financial goals and risk appetite.',
      'We recommend a curated portfolio of funds tailored to your needs.',
      'Complete a quick digital KYC process.',
      'Start your SIP or make a lump-sum investment seamlessly.',
    ],
  },
  'fixed-deposits': {
    slug: 'fixed-deposits',
    title: 'Fixed Deposits',
    icon: Landmark,
    tagline: 'Secure, guaranteed returns for peace of mind.',
    heroImage:
      'https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'A Fixed Deposit (FD) provides investors a higher rate of interest than a regular savings account, until the given maturity date. It is one of the safest investment instruments available with guaranteed returns.',
    features: [
      'Guaranteed fixed returns on investment',
      'Flexible tenure ranging from 7 days to 10 years',
      'Loan facility available against FD',
      'Higher interest rates for senior citizens',
      'Tax-saving FD options available',
    ],
    whoNeeds:
      'Conservative investors who prioritize capital protection and assured returns, or those looking to park funds safely for short to medium-term goals.',
    process: [
      'Choose the tenure and investment amount.',
      'Compare FD interest rates across top banks and NBFCs.',
      'Submit the required KYC documents online.',
      'Receive your FD receipt and track interest payouts.',
    ],
  },
  'national-pension-scheme': {
    slug: 'national-pension-scheme',
    title: 'National Pension Scheme',
    icon: Shield,
    tagline: 'Build a secure retirement corpus with tax benefits.',
    heroImage:
      'https://images.pexels.com/photos/4386406/pexels-photo-4386406.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'The National Pension System (NPS) is a voluntary, long-term retirement savings scheme designed to enable systematic savings. It provides market-linked returns and an annuity pension post-retirement.',
    features: [
      'Additional tax deduction of up to ₹50,000 under Sec 80CCD(1B)',
      'Choice of investment mix (Equity, Corporate Bonds, Government Securities)',
      'Low fund management charges',
      'Portability across jobs and locations',
      'Partial withdrawal allowed for specific needs',
    ],
    whoNeeds:
      'Working professionals and self-employed individuals who want to build a retirement corpus while taking advantage of exclusive tax benefits.',
    process: [
      'Provide your basic details and PAN/Aadhaar.',
      'Choose your Pension Fund Manager and investment choice (Auto/Active).',
      'Complete the digital e-KYC and initial contribution.',
      'Receive your PRAN (Permanent Retirement Account Number) instantly.',
    ],
  },
  'non-convertible-debentures': {
    slug: 'non-convertible-debentures',
    title: 'Non-Convertible Debentures',
    icon: Briefcase,
    tagline: 'Fixed income instruments for regular, high-yield returns.',
    heroImage:
      'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Non-Convertible Debentures (NCDs) are fixed-income instruments issued by corporations to raise long-term funds. Unlike convertible debentures, they cannot be converted into equity shares but offer a higher fixed interest rate.',
    features: [
      'Higher interest rates compared to bank FDs',
      'Fixed tenure with regular interest payouts (Monthly/Annual)',
      'Listed on stock exchanges for liquidity',
      'Rated by credit rating agencies for safety assessment',
      'No tax deducted at source (TDS) for listed NCDs',
    ],
    whoNeeds:
      'Investors seeking higher regular income than FDs and are willing to take slightly more risk by investing in corporate debt.',
    process: [
      'Review ongoing NCD public issues and credit ratings.',
      'Apply online through your Demat account or ASBA.',
      'Allotment of NCDs is credited directly to your Demat.',
      'Receive regular interest payouts directly in your bank account.',
    ],
  },
  'portfolio-management-service': {
    slug: 'portfolio-management-service',
    title: 'Portfolio Management Service',
    icon: PieChart,
    tagline: 'Bespoke investment management for high net-worth individuals.',
    heroImage:
      'https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Portfolio Management Services (PMS) offer customized investment portfolios of stocks, fixed income, and other securities. They are managed by professional fund managers backed by dedicated research teams.',
    features: [
      'Customized portfolio based on individual risk profile',
      'Direct ownership of stocks in your Demat account',
      'Active professional management and rebalancing',
      'Transparent holding and performance tracking',
      'Dedicated relationship manager',
    ],
    whoNeeds:
      'High Net-worth Individuals (HNIs) with a minimum investment of ₹50 Lakhs looking for customized, concentrated portfolios beyond standard mutual funds.',
    process: [
      'Consultation with a wealth manager to assess your risk profile and goals.',
      'Sign the PMS agreement and open a dedicated Demat/Bank account.',
      'Transfer funds or existing shares into the PMS account.',
      'The fund manager begins building and actively managing your portfolio.',
    ],
  },
  'alternate-investment-fund': {
    slug: 'alternate-investment-fund',
    title: 'Alternate Investment Fund',
    icon: Gem,
    tagline: 'Exclusive access to unique asset classes.',
    heroImage:
      'https://images.pexels.com/photos/5412431/pexels-photo-5412431.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Alternate Investment Funds (AIF) pool capital from sophisticated investors to invest in asset classes beyond traditional stocks and bonds, such as private equity, venture capital, real estate, or hedge funds.',
    features: [
      'Access to non-traditional, high-growth asset classes',
      'Lower correlation to public stock markets',
      'Potential for high absolute returns',
      'Structured across three categories (I, II, and III)',
      'Expert management by specialized teams',
    ],
    whoNeeds:
      'Sophisticated investors and UHNIs with a higher risk appetite, looking to diversify beyond traditional assets, with a minimum investment of ₹1 Crore.',
    process: [
      'Review the offering documents (PPM) of various AIFs with our advisor.',
      'Complete the detailed sophisticated investor KYC.',
      'Sign the contribution agreement.',
      'Capital is called in tranches as the fund makes investments.',
    ],
  },
  'capital-gain-bond': {
    slug: 'capital-gain-bond',
    title: 'Capital Gain Bond',
    icon: BadgeDollarSign,
    tagline: 'Save tax on capital gains under Section 54EC.',
    heroImage:
      'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Capital Gain Bonds (54EC Bonds) allow you to claim tax exemption on long-term capital gains arising from the sale of property or land. By investing the gains in these specific government-backed bonds, you can save significant tax.',
    features: [
      '100% tax exemption on long-term capital gains under Sec 54EC',
      'AAA-rated safety (issued by NHAI, REC, PFC, IRFC)',
      '5-year lock-in period',
      'Fixed annual interest payout',
      'Maximum investment limit of ₹50 Lakhs per financial year',
    ],
    whoNeeds:
      'Individuals who have recently sold real estate or property and want to legally save on long-term capital gains tax.',
    process: [
      'Calculate your exact capital gains with our tax advisor.',
      'Choose the preferred bond issuer (REC, NHAI, etc.).',
      'Submit the physical or digital application with proof of capital gain.',
      'Receive the Bond Certificate within the stipulated time.',
    ],
  },
  'demat-account': {
    slug: 'demat-account',
    title: 'Demat Account',
    icon: Laptop,
    tagline: 'Your gateway to the stock market.',
    heroImage:
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'A Demat (Dematerialized) account holds your shares and securities electronically. It is mandatory for trading and investing in the Indian stock market, IPOs, ETFs, and bonds.',
    features: [
      'Safe and secure electronic holding of securities',
      'Seamless online trading platform integration',
      'Zero paperwork for transferring shares',
      'Easy tracking of portfolio valuation in real-time',
      'Corporate benefits like dividends credited directly to bank',
    ],
    whoNeeds:
      'Anyone who wants to directly invest or trade in equities, IPOs, bonds, and ETFs in the Indian financial markets.',
    process: [
      'Provide your PAN, Aadhaar, and Bank details.',
      'Complete the quick video IPV (In-Person Verification).',
      'E-sign the account opening form using Aadhaar OTP.',
      'Account activated within 24 hours to start trading.',
    ],
  },
  'secondary-market-bond': {
    slug: 'secondary-market-bond',
    title: 'Secondary Market Bond',
    icon: BarChart,
    tagline: 'Trade existing bonds for optimal yield.',
    heroImage:
      'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Secondary market bonds are previously issued bonds traded between investors. They allow you to buy corporate or government bonds at current market yields, offering opportunities for both fixed income and capital appreciation.',
    features: [
      'Access to a wide variety of previously issued bonds',
      'Ability to lock in yields higher than current fixed deposits',
      'High liquidity compared to holding till maturity',
      'Capital appreciation potential if interest rates fall',
      'Transparent pricing and execution',
    ],
    whoNeeds:
      'Savvy investors looking for predictable income, portfolio diversification, and those who want to actively manage their fixed-income returns.',
    process: [
      'Review available bond inventory and yields on our platform.',
      'Place a buy order through your Demat account.',
      'Funds are debited and bonds are credited to your Demat (T+1 settlement).',
      'Receive periodic interest payments directly to your bank account.',
    ],
  },
};

export function getInvestmentPlan(slug: string): InvestmentPlan | undefined {
  return investmentPlans[slug];
}
