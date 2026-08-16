import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Phone,
  Clock,
  Award,
  Users,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';
import LoanMarquee from '@/components/site/LoanMarquee';

const WHATSAPP_URL = 'https://wa.me/918750733329';

export type LoanPlan = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  heroImage: string;
  overview: string;
  whyChoose: string[];
  eligibility: string[];
  benefits: string[];
  process: string[];
};

const stats = [
  { icon: Users, value: '2,500+', label: 'Happy Borrowers' },
  { icon: Award, value: '12+', label: 'Years of Expertise' },
  { icon: TrendingUp, value: '₹350Cr+', label: 'Loans Arranged' },
  { icon: ShieldCheck, value: '100%', label: 'Secure Verification' },
];

export default function LoanDetailPage({
  plan,
}: {
  plan: LoanPlan;
}) {
  const Icon = plan.icon;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-navy pt-28">
        <div className="absolute inset-0">
          <img
            src={plan.heroImage}
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <Icon className="h-8 w-8" />
            </span>
            <div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                Loans & Credit
              </span>
              <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {plan.title}
              </h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{plan.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
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
      </section>

      {/* Overview + Why Choose */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Overview
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy">
              About {plan.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {plan.overview}
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold-dark">
                Eligibility Criteria
              </h3>
              <ul className="mt-4 space-y-3">
                {plan.eligibility.map((el) => (
                  <li key={el} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm font-medium text-navy">{el}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Why Choose Us
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy">
              Why Choose RBM for Your {plan.title} Needs?
            </h2>
            <ul className="mt-6 space-y-3">
              {plan.whyChoose.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-navy">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
              Key Benefits
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Major Benefits & Advantages
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Designed to support your specific financial goals with transparency and convenience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {plan.benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/20 p-6 transition-all hover:bg-secondary/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold font-bold">
                  ✓
                </span>
                <p className="text-sm font-medium leading-relaxed text-navy">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
              Application Process
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              How to Apply for Your Loan
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              A simple, streamlined process designed to get you sanctioned without heavy paperwork.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {plan.process.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-border bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-lg font-bold text-gold">
                  {i + 1}
                </span>
                <p className="mt-4 text-sm font-medium leading-relaxed text-navy">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-border bg-white py-10">
        <div className="mx-auto max-w-7xl px-2">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-navy/40">
            Our Lending Partners
          </p>
          <LoanMarquee />
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="contact" className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Get Started
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Get Your {plan.title} Quote Today
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Share your details, and our lending advisor will analyze your profile and offer quotes within 24 hours — zero obligation.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition-colors hover:border-gold"
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
                href="tel:+918750733329"
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">Call Us Directly</p>
                  <p className="text-sm text-muted-foreground">+91 87507 33229</p>
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
