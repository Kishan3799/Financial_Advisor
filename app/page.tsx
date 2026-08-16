'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';
import PartnerMarquee from '@/components/site/PartnerMarquee';
import MeteorCard from '@/components/site/MeteorCard';

const WHATSAPP_QUOTE = 'https://wa.me/918750733329';
const CALENDLY_URL =
  'https://calendly.com/choudharyavinashkumar6/one-to-one-meeting-for-child-education-planning?month=2026-07';
const LOAN_WHATSAPP =
  'https://wa.me/918750733329?text=Hi,%20I%20need%20assistance%20with%20a%20loan';

const heroSlides = [
  {
    image:
      'https://images.pexels.com/photos/8815888/pexels-photo-8815888.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
      'https://images.pexels.com/photos/8439737/pexels-photo-8439737.jpeg?auto=compress&cs=tinysrgb&w=1920',
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
  { icon: HomeIcon, title: 'Home Loan', desc: 'Competitive rates from 8.4%* p.a. with quick approval.' },
  { icon: Repeat, title: 'Balance Transfer', desc: 'Switch lenders and lower your EMI burden instantly.' },
  { icon: Building2, title: 'Business Loan', desc: 'Unsecured working capital up to ₹50 lakh, fast-track.' },
  { icon: Wallet, title: 'Personal Loan', desc: 'Collateral-free funds for any personal need.' },
  { icon: Landmark, title: 'Loan Against Assets', desc: 'Unlock liquidity against property, gold or shares.' },
  { icon: CreditCard, title: 'Credit Card', desc: 'Compare premium cards with rewards that suit you.' },
];

const insights = [
  {
    date: 'Jul 28, 2026',
    title: '5 SIP mistakes that quietly drain your returns',
    img: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'Jul 14, 2026',
    title: 'Term vs. whole life insurance: which do you need?',
    img: 'https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'Jun 30, 2026',
    title: 'How much will your child’s education cost in 2035?',
    img: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const stats = [
  { icon: Users, value: '1,200+', label: 'Families Served' },
  { icon: Award, value: '12+', label: 'Years of Expertise' },
  { icon: ShieldCheck, value: '₹450Cr+', label: 'Coverage Arranged' },
  { icon: Clock, value: '24h', label: 'Quote Turnaround' },
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

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

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
              Trusted since 2013
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
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xl font-bold text-navy">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
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
                  <a
                    href="#insights"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
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
    </>
  );
}
