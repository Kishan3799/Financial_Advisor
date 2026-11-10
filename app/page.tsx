'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"
import {
  ChevronDown,
  ChevronRight,
  Handshake,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  LineChart,
  ArrowRight,
  Landmark,
  GraduationCap,
  Home as HomeIcon,
  Building2,
  CreditCard,
  Wallet,
  Repeat,
  Calendar,
  MessageCircle,
  Award,
  Users,
  Clock,
  CheckCircle2,
  PiggyBank,
  Star,
  Quote,
  Trophy,
  Medal,
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';
import PartnerMarquee from '@/components/site/PartnerMarquee';
import MeteorCard from '@/components/site/MeteorCard';
import { insights } from '@/lib/insights-data';

const WHATSAPP_QUOTE = 'https://wa.me/918750733329';
const CALENDLY_URL =
  'https://calendly.com/choudharyavinashkumar6/one-to-one-meeting-for-child-education-planning?month=2026-07';
const LOAN_WHATSAPP =
  'https://wa.me/918750733329?text=Hi,%20I%20need%20assistance%20with%20a%20loan';

const heroSlides = [
  {
    image:
      'https://images.pexels.com/photos/5119595/pexels-photo-5119595.jpeg?auto=compress&cs=tinysrgb&w=1920',
    headline: 'Get Your Life Insurance Quote Fast, Simple, Same Day',
    subtext:
      'Protect your family’s future with tailored coverage that fits your life and budget — approved the same day you apply.',
  },
  {
    image:
      'https://images.pexels.com/photos/4308013/pexels-photo-4308013.jpeg?auto=compress&cs=tinysrgb&w=1920',
    headline: 'Plan Today. Prosper Tomorrow.',
    subtext:
      'From SIPs to retirement planning, we help your money work as hard as you do — with transparent, jargon-free advice.',
  },
  {
    image:
      'https://img.magnific.com/premium-photo/indian-family-father-mother-son-daughter-holding-3d-paper-model-home-real-istate-concept-india_466689-8074.jpg?auto=compress&cs=tinysrgb&w=1920',
    headline: 'Your Family’s Security, Our Promise',
    subtext:
      '12+ years of trusted financial expertise guiding thousands of families toward lifelong financial confidence.',
  },
];

const partners = [
  'SBI Life',
  'ICICI Prudential',
  'Max Life',
  'Kotak',
  'Bajaj Allianz',
  'Tata AIA',
  'PNB MetLife',
  'Star Health',
  'HDFC ERGO',
];

const investmentCards = [
  {
    icon: PiggyBank,
    title: 'SIP / STP / SWP',
    desc: 'Build wealth systematically with flexible monthly plans that adapt to every life stage and goal.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    badgeColor: 'emerald' as const,
  },
  {
    icon: TrendingUp,
    title: 'ELSS & Equity',
    desc: 'Grow your corpus faster with tax-saving equity funds handpicked for consistent long-term outperformance.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    badgeColor: 'blue' as const,
  },
  {
    icon: LineChart,
    title: 'Portfolio Review',
    desc: 'A quarterly rebalancing service that keeps your investments aligned with your evolving financial goals.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    badgeColor: 'gold' as const,
  },
];

const loanCards = [
  { icon: HomeIcon, title: 'Home Loan', desc: 'Competitive rates with quick approval.' },
  { icon: Repeat, title: 'Balance Transfer', desc: 'Switch lenders and lower your EMI burden instantly.' },
  { icon: Building2, title: 'Business Loan', desc: 'Unsecured working capital up to ₹50 lakh, fast-track.' },
  { icon: Wallet, title: 'Personal Loan', desc: 'Collateral-free funds for any personal need.' },
  { icon: Landmark, title: 'Loan Against Assets', desc: 'Unlock liquidity against property, gold or shares.' },
  { icon: CreditCard, title: 'Credit Card', desc: 'Compare premium cards with rewards that suit you.' },
];

const stats = [
  { icon: Trophy, value: 'MDRT, USA', label: 'Achiever / Member', gradient: 'from-amber-400 to-yellow-500', glow: 'shadow-[0_0_18px_rgba(251,191,36,0.5)]', textColor: 'text-amber-600' },
  { icon: Award, value: '12+', label: 'Years of Expertise', gradient: 'from-blue-500 to-indigo-600', glow: 'shadow-[0_0_18px_rgba(99,102,241,0.45)]', textColor: 'text-indigo-600' },
  { icon: Medal, value: 'Gold Medalist', label: 'LIC of India Recognition', gradient: 'from-yellow-400 to-orange-500', glow: 'shadow-[0_0_18px_rgba(249,115,22,0.45)]', textColor: 'text-orange-600' },
  { icon: Clock, value: '24h', label: 'Quote Turnaround', gradient: 'from-emerald-400 to-teal-500', glow: 'shadow-[0_0_18px_rgba(20,184,166,0.45)]', textColor: 'text-teal-600' },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Choudhary Capital Crux transformed how I look at my business finances. Their loan restructuring saved me lakhs in interest. Truly professional and trustworthy.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    content: "The SIP calculator and their guided investment approach helped me plan for my daughter's education without stressing my monthly budget. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Retiree",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    content: "I was worried about my retirement corpus, but Avinash and his team created a withdrawal strategy that gives me peace of mind and regular income.",
    rating: 5,
  },
  {
    name: "Rajesh",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Choudhary Capital Crux transformed how I look at my business finances. Their loan restructuring saved me lakhs in interest. Truly professional and trustworthy.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "IT Professional",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    content: "The SIP calculator and their guided investment approach helped me plan for my daughter's education without stressing my monthly budget. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit",
    role: "Retiree",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    content: "I was worried about my retirement corpus, but Avinash and his team created a withdrawal strategy that gives me peace of mind and regular income.",
    rating: 5,
  }
];

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const [isTestiHovered, setIsTestiHovered] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (isTestiHovered) return;
    const t = setInterval(() => {
      // Move from left to right (decrease index)
      setTestiIndex((prev) => (prev + 1 + testimonials.length) % testimonials.length);
    }, 3500);
    return () => clearInterval(t);
  }, [isTestiHovered]);

  return (
    <>
      <Navbar />

      {/* ─────────────── 2. HERO ─────────────── */}
      <section className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" />
              Trusted since 2014
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {heroSlides[slide].headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {heroSlides[slide].subtext}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark"
              >
                Get A Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/calculator/sipcalculator"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Try SIP Calculator
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="mt-12 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === slide ? 'w-10 bg-gold' : 'w-5 bg-white/40'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#partners"
          className="absolute bottom-8 left-6 z-10 flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-white sm:left-10"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-float-bounce" />
        </a>
      </section>

      {/* ─────────────── 3. TRUSTED PARTNERS ─────────────── */}
      <section id="partners" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
              <Handshake className="h-3.5 w-3.5" />
              Our Partners
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Trusted Insurance &amp; Banking Partners
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              We work only with India’s most trusted, IRDAI-licensed insurers
              and banks so your money and coverage are always in safe hands.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-2 mt-8">
          <PartnerMarquee />
        </div>
      </section>

      {/* ─────────────── 4. TRUST & AUTHORITY (ABOUT) ─────────────── */}
      <section id="about" className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src="/IMG_Web.png"
                alt="Choudhary Capital Crux founder"
                className="h-[520px] w-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy p-6 text-white shadow-card sm:block lg:-right-8">
              <p className="text-4xl font-extrabold text-gold">12+</p>
              <p className="mt-1 text-sm text-white/70">Years guiding<br />Indian families</p>
            </div>
            <div className="absolute -left-4 -top-4 hidden rounded-2xl bg-gold p-5 text-navy shadow-gold sm:block lg:-left-8">
              <Award className="h-8 w-8" />
            </div>
          </div>

          <div>
            <SectionBadge>About Us</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              12+ Years of Trusted Financial Expertise
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At Choudhary Capital Crux, we believe financial freedom begins with
              the right advice. For over a decade we’ve helped families and
              businesses across India protect what matters, invest with clarity,
              and plan for life’s biggest milestones — all under one roof.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              As a licensed insurance agent and financial advisor, Avinash Kumar
              Choudhary brings personalised, commission-transparent guidance to
              every client, with no jargon and no pressure.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} ${s.glow} text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <s.icon className="h-6 w-6 drop-shadow-sm" />
                  </span>
                  <div>
                    <p className={`text-lg font-extrabold ${s.textColor} leading-tight`}>{s.value}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-light"
            >
              Know More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── 5. INVESTMENTS SERVICES GRID ─────────────── */}
      <section id="investments" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionBadge>Investments</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Grow Your Wealth Smartly
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Disciplined, goal-based investing built around your risk profile and
              life aspirations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {investmentCards.map((card) => (
              <MeteorCard key={card.title} badgeColor={card.badgeColor}>
                <span
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg} ${card.color}`}
                >
                  <card.icon className="h-7 w-7" />
                </span>
                <h3 className="text-xl font-bold text-navy">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {['Goal-based planning', 'Transparent reporting', 'Low-cost funds'].map(
                    (f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-navy/80"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                        {f}
                      </li>
                    )
                  )}
                </ul>
              </MeteorCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/calculator/sipcalculator"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark"
            >
              Start SIP / Calculate Investment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── 6. FUTURE PLANNING ─────────────── */}
      <section id="future" className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionBadge>Future Planning</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Secure Your Tomorrow
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Two of life’s biggest goals, planned with care and numbers you
              can trust.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Navy card */}
            <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white shadow-card">
              <Landmark className="absolute -right-4 -top-4 h-32 w-32 text-white/5" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold">
                <Landmark className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Retirement Planning</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                Build a retirement corpus that keeps pace with inflation and
                lifestyle — so your golden years are truly golden. We model
                your expenses, map income sources, and craft a withdrawal
                strategy that never runs dry.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition-all hover:bg-gold-light"
              >
                Plan Retirement
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Gold card */}
            <div className="relative overflow-hidden rounded-3xl bg-gold p-10 text-navy shadow-gold">
              <GraduationCap className="absolute -right-4 -top-4 h-32 w-32 text-navy/5" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/10 text-navy">
                <GraduationCap className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Child Education &amp; Marriage</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-navy/80">
                From first school fees to a dream wedding, we project the future
                cost of your child’s milestones and build a step-by-step
                investment plan to reach them — no matter what markets do.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-all hover:bg-navy-light"
              >
                Plan Future
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-gold" />
            Book a free 1-on-1 planning session on Calendly
          </p>
        </div>
      </section>

      {/* ─────────────── 7. LOANS & CREDIT ─────────────── */}
      <section id="loans" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionBadge>Loans &amp; Credit</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Flexible Financing Solutions
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Compare and access the best credit products in the market — with
              end-to-end assistance from application to disbursal.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {loanCards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-2xl border border-border border-l-4 border-l-gold bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <card.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">{card.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={LOAN_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── TESTIMONIALS ─────────────── */}
      <section id="testimonials" className="bg-navy py-20 sm:py-28 relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gold blur-[120px]"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-white/10">
              <Star className="h-3.5 w-3.5 fill-gold" />
              Testimonials
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              What our Customers are saying
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Don&apos;t just take our word for it. Hear from families and businesses who have secured their financial future with us.
            </p>
          </div>

          <div
            className="relative mt-14 sm:mt-18 flex h-[400px] sm:h-[420px] w-full items-center justify-center overflow-hidden sm:overflow-visible"
            onMouseEnter={() => setIsTestiHovered(true)}
            onMouseLeave={() => setIsTestiHovered(false)}
          >
            {testimonials.map((testimonial, idx) => {
              const diff = (idx - testiIndex + testimonials.length) % testimonials.length;
              let positionClass = "";

              if (diff === 0) {
                // Center
                positionClass = "translate-x-0 scale-100 opacity-100 z-30 shadow-2xl";
              } else if (diff === 1) {
                // Right
                positionClass = "max-md:opacity-0 max-md:pointer-events-none md:translate-x-[85%] lg:translate-x-[100%] scale-95 opacity-80 z-20 cursor-pointer";
              } else if (diff === testimonials.length - 1) {
                // Left
                positionClass = "max-md:opacity-0 max-md:pointer-events-none md:-translate-x-[85%] lg:-translate-x-[100%] scale-95 opacity-80 z-20 cursor-pointer";
              } else if (diff >= 2 && diff <= Math.ceil(testimonials.length / 2)) {
                // Off-screen Right
                positionClass = "translate-x-[80%] md:translate-x-[150%] lg:translate-x-[200%] scale-95 opacity-0 z-0 pointer-events-none";
              } else {
                // Off-screen Left
                positionClass = "-translate-x-[80%] md:-translate-x-[150%] lg:-translate-x-[200%] scale-95 opacity-0 z-0 pointer-events-none";
              }

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (diff !== 0) setTestiIndex(idx);
                  }}
                  className={`absolute w-full max-w-[90%] sm:max-w-md transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${positionClass}`}
                >
                  <div className="group relative rounded-3xl bg-white/5 p-6 sm:p-8 backdrop-blur-md border border-white/10 hover:border-gold/30 shadow-2xl flex flex-col min-h-[350px] sm:min-h-[380px]">
                    <div className="absolute -top-5 right-8 rounded-full bg-gradient-to-br from-gold to-gold-dark p-3 text-navy shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Quote className="h-5 w-5 fill-navy" />
                    </div>

                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold drop-shadow-sm" />
                      ))}
                    </div>

                    <p className="mb-6 text-sm sm:text-base leading-relaxed text-white/90 font-light flex-grow">
                      {testimonial.content}
                    </p>

                    <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-5">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-gold/30 transition-all duration-300 group-hover:ring-gold"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white tracking-wide text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs text-gold/80 font-medium uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center items-center gap-2 relative z-20">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setTestiIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${dotIdx === testiIndex
                    ? 'w-7 bg-gold'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to testimonial ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 8. LATEST INSIGHTS (BLOG) ─────────────── */}
      <section id="insights" className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionBadge>Insights</SectionBadge>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
                Latest Insights
              </h2>
            </div>
            <a
              href="#insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              View all articles
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {insights.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {post.date}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold leading-snug text-navy">
                    {post.title}
                  </h3>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CONTACT ─────────────── */}
      <section id="contact" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionBadge>Contact Us</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Let’s Plan Your Financial Future Together
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Have a question about insurance, investments, or loans? Send us a
              message and we’ll get back within 24 hours — no obligation,
              no jargon.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">Chat on WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+91 87507 33229</p>
                </div>
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Calendar className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">Book a Meeting</p>
                  <p className="text-sm text-muted-foreground">
                    Schedule a free 1-on-1 on Calendly
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <Analytics />
    </>
  );
}
