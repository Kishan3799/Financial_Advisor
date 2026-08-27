'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  HeartPulse,
  Car,
  Home as HomeIcon,
  Ship,
  ShieldAlert,
  Flame,
  Plane,
  Users,
  HardHat,
  BadgeDollarSign,
  Laptop,
  Store,
  Cog,
  Construction,
  Wrench,
  Link as LinkIcon,
  Building2,
  TrendingUp,
  Briefcase,
  PiggyBank,
  Landmark,
  FileText,
  Baby,
  GraduationCap,
  Calculator,
  Phone,
  MessageCircle,
  PieChart,
  Gem,
  BarChart,
  User,
  RotateCcw,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const WHATSAPP_URL = 'https://wa.me/918750733329';

const personalInsuranceItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'Life Insurance Plan', icon: Shield, desc: 'Protect your family\'s future', href: '/insurance/life-insurance-plan' },
  { label: 'Health Insurance', icon: HeartPulse, desc: 'Cover medical expenses', href: '/insurance/health-insurance' },
  { label: 'Unit Link Insurance Plan', icon: LinkIcon, desc: 'Protection with market-linked growth', href: '/insurance/unit-link-insurance-plan' },
  { label: 'Accidental Insurance', icon: ShieldAlert, desc: 'Financial support after accidents', href: '/insurance/accidental-insurance' },
  { label: 'Travel Insurance', icon: Plane, desc: 'Travel with peace of mind', href: '/insurance/travel-insurance' },
  { label: 'Group Insurance', icon: Users, desc: 'Benefits for your entire team', href: '/insurance/group-insurance' },
];

const propertyInsuranceItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'Home Insurance', icon: HomeIcon, desc: 'Protect your home and belongings', href: '/insurance/home-insurance' },
  { label: 'Car Insurance', icon: Car, desc: 'Drive with complete confidence', href: '/insurance/car-insurance' },
  { label: 'Fire Insurance', icon: Flame, desc: 'Safeguard property from fire risks', href: '/insurance/fire-insurance' },
  { label: 'Marine Insurance', icon: Ship, desc: 'Cover goods in transit', href: '/insurance/marine-insurance' },
  { label: 'Shopkeepers Insurance', icon: Store, desc: 'Cover your shop and stock', href: '/insurance/shopkeepers-insurance' },
];

const businessInsuranceItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'Workmen Compensation Policy', icon: HardHat, desc: 'Protect your workforce', href: '/insurance/workmen-compensation-policy' },
  { label: 'Trade Credit Insurance', icon: BadgeDollarSign, desc: 'Secure your business receivables', href: '/insurance/trade-credit-insurance' },
  { label: 'Cyber Security Insurance', icon: Laptop, desc: 'Defend against digital threats', href: '/insurance/cyber-security-insurance' },
  { label: 'Plant & Machinery Insurance', icon: Cog, desc: 'Protect essential equipment', href: '/insurance/plant-machinery-insurance' },
  { label: "Contractor's All Risk Insurance (CAR)", icon: Construction, desc: 'Cover construction projects', href: '/insurance/contractors-all-risk-insurance' },
  { label: 'Erection All Risk Insurance (EAR)', icon: Wrench, desc: 'Protect installation projects', href: '/insurance/erection-all-risk-insurance' },
];

const lifeInsuranceItems = [
  ...personalInsuranceItems,
  ...propertyInsuranceItems,
  ...businessInsuranceItems,
];

const marketLinkedItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'Mutual Fund', icon: TrendingUp, desc: 'Systematic wealth creation', href: '/investments/mutual-fund' },
  { label: 'Portfolio Management Service', icon: PieChart, desc: 'Bespoke investment management', href: '/investments/portfolio-management-service' },
  { label: 'Alternate Investment Fund', icon: Gem, desc: 'Exclusive asset classes', href: '/investments/alternate-investment-fund' },
  { label: 'Demat Account', icon: Laptop, desc: 'Your gateway to markets', href: '/investments/demat-account' },
];

const fixedIncomeItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'Fixed Deposits', icon: Landmark, desc: 'Secure, guaranteed returns', href: '/investments/fixed-deposits' },
  { label: 'National Pension Scheme', icon: Shield, desc: 'Secure retirement planning', href: '/investments/national-pension-scheme' },
  { label: 'Non-Convertible Debentures', icon: Briefcase, desc: 'High-yield fixed income', href: '/investments/non-convertible-debentures' },
  { label: 'Capital Gain Bond', icon: BadgeDollarSign, desc: 'Save tax on capital gains', href: '/investments/capital-gain-bond' },
  { label: 'Secondary Market Bond', icon: BarChart, desc: 'Trade existing bonds', href: '/investments/secondary-market-bond' },
];

const retailLoanItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'Personal Loan', icon: User, desc: 'Collateral-free personal financing', href: '/loans/personal-loan' },
  { label: 'Home Loan', icon: HomeIcon, desc: 'Finance your dream home', href: '/loans/home-loan' },
  { label: 'Education Loan', icon: GraduationCap, desc: 'Fund higher education needs', href: '/loans/education-loan' },
];

const vehicleLoanItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'New Car Loan', icon: Car, desc: 'Finance new vehicle purchases', href: '/loans/new-car-loan' },
  { label: 'Used Car Loan', icon: Car, desc: 'Finance pre-owned vehicle purchases', href: '/loans/used-car-loan' },
  { label: 'Car Loan Refinance', icon: RotateCcw, desc: 'Lower EMIs or get top-up cash', href: '/loans/car-loan-refinance' },
];

const businessAssetLoanItems: { label: string; icon: LucideIcon; desc: string; href: string }[] = [
  { label: 'Business Loan', icon: Briefcase, desc: 'Capital for business expansion', href: '/loans/business-loan' },
  { label: 'Unsecured OD & CC Limit', icon: BadgeDollarSign, desc: 'Revolving working capital limits', href: '/loans/unsecured-od-cc-limit' },
  { label: 'Loan Against Securities', icon: TrendingUp, desc: 'Instant liquidity against portfolio', href: '/loans/loan-against-securities' },
  { label: 'Loan Against Properties', icon: Building2, desc: 'High-value property-backed loans', href: '/loans/loan-against-properties' },
];

const allLoanItems = [
  ...retailLoanItems,
  ...vehicleLoanItems,
  ...businessAssetLoanItems,
];

const secondaryLinks = [
  { label: 'Credits', href: '/credits' },
];

function MegaMenuColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; icon: LucideIcon; desc: string; href: string }[];
}) {
  return (
    <div className="w-full">
      <p className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-gold">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-secondary/70"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <item.icon className="h-4.5 w-4.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-navy group-hover:text-gold leading-tight">
                  {item.label}
                </span>
                <span className="block text-xs text-muted-foreground truncate">
                  {item.desc}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [openMega, setOpenMega] = useState(false);
  const [openLife, setOpenLife] = useState(false);
  const [openLoans, setOpenLoans] = useState(false);

  const lifeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loansTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLifeEnter = () => {
    if (lifeTimeoutRef.current) clearTimeout(lifeTimeoutRef.current);
    setOpenLife(true);
    setOpenMega(false);
    setOpenLoans(false);
  };

  const handleLifeLeave = () => {
    lifeTimeoutRef.current = setTimeout(() => {
      setOpenLife(false);
    }, 150);
  };

  const handleMegaEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setOpenMega(true);
    setOpenLife(false);
    setOpenLoans(false);
  };

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setOpenMega(false);
    }, 150);
  };

  const handleLoansEnter = () => {
    if (loansTimeoutRef.current) clearTimeout(loansTimeoutRef.current);
    setOpenLoans(true);
    setOpenLife(false);
    setOpenMega(false);
  };

  const handleLoansLeave = () => {
    loansTimeoutRef.current = setTimeout(() => {
      setOpenLoans(false);
    }, 150);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass relative flex w-full max-w-6xl items-center justify-between rounded-full border border-white/60 py-2.5 pl-5 pr-2.5 shadow-soft">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold">
            <Shield className="h-5 w-5" />
          </span>
          <span className="hidden text-[19px] font-bold leading-tight text-navy sm:block">
            Choudhary<span className="text-gold"> Capital Crux</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/about"
            className="rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
          >
            About Us
          </Link>

          {/* Life Insurance dropdown */}
          <div
            onMouseEnter={handleLifeEnter}
            onMouseLeave={handleLifeLeave}
          >
            <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy">
              Insurance
              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform',
                  openLife && 'rotate-180'
                )}
              />
            </button>
            {openLife && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="grid w-[min(1040px,calc(100vw-2rem))] grid-cols-3 gap-5 rounded-2xl border border-border bg-white p-5 shadow-card">
                  <MegaMenuColumn title="Personal Protection" items={personalInsuranceItems} />
                  <MegaMenuColumn title="Property & Vehicles" items={propertyInsuranceItems} />
                  <MegaMenuColumn title="Business Coverage" items={businessInsuranceItems} />
                </div>
              </div>
            )}
          </div>

          {/* Mutual Funds mega menu */}
          <div
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy">
              Investments
              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform',
                  openMega && 'rotate-180'
                )}
              />
            </button>
            {openMega && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="grid w-[min(720px,calc(100vw-2rem))] grid-cols-2 gap-6 rounded-2xl border border-border bg-white p-5 shadow-card">
                  <MegaMenuColumn title="Market Linked" items={marketLinkedItems} />
                  <MegaMenuColumn title="Fixed Income & Bonds" items={fixedIncomeItems} />
                </div>
              </div>
            )}
          </div>

          {/* Loans dropdown */}
          <div
            onMouseEnter={handleLoansEnter}
            onMouseLeave={handleLoansLeave}
          >
            <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy">
              Loans
              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform',
                  openLoans && 'rotate-180'
                )}
              />
            </button>
            {openLoans && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="grid w-[min(1040px,calc(100vw-2rem))] grid-cols-3 gap-5 rounded-2xl border border-border bg-white p-5 shadow-card">
                  <MegaMenuColumn title="Retail Loans" items={retailLoanItems} />
                  <MegaMenuColumn title="Vehicle Financing" items={vehicleLoanItems} />
                  <MegaMenuColumn title="Business & Assets" items={businessAssetLoanItems} />
                </div>
              </div>
            )}
          </div>

          {secondaryLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
            >
              {l.label}
            </a>
          ))}

          <Link
            href="/contact"
            className="rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
          >
            Contact Us
          </Link>
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark hover:shadow-lg sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Get a Free Quote
          </a>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88%] max-w-sm border-l-0 bg-white p-0"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="text-base font-bold text-navy">
                  Choudhary<span className="text-gold"> Capital Crux</span>
                </span>
                <SheetClose asChild>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                    <X className="h-4 w-4 text-navy" />
                  </span>
                </SheetClose>
              </div>
              <div className="overflow-y-auto px-5 py-4">
                <Accordion type="multiple" className="w-full">
                  <Link
                    href="/about"
                    className="block rounded-lg px-3 py-3 text-sm font-semibold text-navy hover:bg-secondary"
                  >
                    About Us
                  </Link>
                  <AccordionItem value="life" className="border-b border-border">
                    <AccordionTrigger className="px-3 text-sm font-semibold text-navy hover:no-underline">
                      Insurance
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <ul className="space-y-1">
                        {lifeInsuranceItems.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-secondary"
                            >
                              <item.icon className="h-4 w-4 shrink-0 text-gold" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="marketLinked" className="border-b border-border">
                    <AccordionTrigger className="px-3 text-sm font-semibold text-navy hover:no-underline">
                      Market Linked Investments
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <ul className="space-y-1">
                        {marketLinkedItems.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-secondary"
                            >
                              <item.icon className="h-4 w-4 shrink-0 text-gold" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fixedIncome" className="border-b border-border">
                    <AccordionTrigger className="px-3 text-sm font-semibold text-navy hover:no-underline">
                      Fixed Income & Bonds
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <ul className="space-y-1">
                        {fixedIncomeItems.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-secondary"
                            >
                              <item.icon className="h-4 w-4 shrink-0 text-gold" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="loans" className="border-b border-border">
                    <AccordionTrigger className="px-3 text-sm font-semibold text-navy hover:no-underline">
                      Loans
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <ul className="space-y-1">
                        {allLoanItems.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-secondary"
                            >
                              <item.icon className="h-4 w-4 shrink-0 text-gold" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-2 space-y-1">
                  {secondaryLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="block rounded-lg px-3 py-3 text-sm font-semibold text-navy hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  ))}
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-navy hover:bg-secondary"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    Contact Us
                  </Link>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-bold text-navy shadow-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get a Free Quote
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
