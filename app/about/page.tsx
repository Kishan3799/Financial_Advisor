import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Target,
  BookOpen,
  Award,
  Search,
  Users,
  Compass,
  Cpu,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Bookmark,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';

const WHATSAPP_URL = 'https://wa.me/918750733329';

const certifications = [
  { title: 'IRDA Certified', org: 'Insurance Regulatory and Development Authority', icon: Award, color: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white' },
  { title: 'NISM Certified', org: 'National Institute of Securities Markets', icon: TrendingUp, color: 'text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white' },
  { title: 'Bima Gurukul Certified', org: 'Insurance Expert Certification', icon: Shield, color: 'text-amber-600 bg-amber-50 group-hover:bg-amber-600 group-hover:text-white' },
  { title: 'B.Com & MBA', org: 'Academic Foundation', icon: GraduationCap, color: 'text-rose-600 bg-rose-50 group-hover:bg-rose-600 group-hover:text-white' },
];

const mentors = [
  { name: 'Mr. Sumit Srivastava', org: 'Bima Gurukul' },
  { name: 'Mr. Crezi Kazim Raza', org: 'Ziadi Corporation' },
  { name: 'Mr. Yogender Malik', org: 'Digital Gyani' },
  { name: 'Mr. Krishna Lodhiyal', org: 'Krishna Lodhiyal Academy' },
];

const coreValues = [
  {
    icon: HeartHandshake,
    title: 'Trust',
    description: 'We believe long-term relationships are built on honesty, transparency, and absolute integrity.',
    accent: 'border-l-4 border-l-gold',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'The financial industry keeps changing. We continuously upgrade our knowledge through professional training, certifications, and industry experts.',
    accent: 'border-l-4 border-l-navy',
  },
  {
    icon: Search,
    title: 'Transparency',
    description: 'We believe customers should understand the product, its benefits, costs, risks, and terms before making any decision.',
    accent: 'border-l-4 border-l-gold',
  },
  {
    icon: Target,
    title: 'Customer First',
    description: 'Every customer has different financial goals. We focus on understanding individual requirements and providing suitable options.',
    accent: 'border-l-4 border-l-navy',
  },
  {
    icon: Cpu,
    title: 'Growth & Innovation',
    description: 'We use modern technology, digital tools, and updated financial knowledge to make the customer experience easier and more efficient.',
    accent: 'border-l-4 border-l-gold',
  },
];

const missionPoints = [
  'Understand the customer’s financial goals and requirements.',
  'Provide suitable solutions across Insurance, Investments, Loans and Credit Cards.',
  'Educate customers about financial products instead of simply selling products.',
  'Keep customers updated with the latest financial, insurance and market-related developments.',
  'Continuously upgrade our knowledge through professional training and industry learning.',
  'Build long-term relationships based on trust, transparency and customer satisfaction.',
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/15 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[580px] items-center justify-center overflow-hidden bg-navy pt-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/95 to-[#0b2b5c]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            About Our Platform
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Choudhary <span className="text-gold">Capital Crux</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 leading-relaxed sm:text-xl">
            A premier financial services and advisory platform dedicated to helping individuals, families, and businesses make informed, financially responsible decisions.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-20 rounded bg-gradient-to-r from-gold via-yellow-400 to-gold" />
          </div>
        </div>
      </section>

      {/* About Description Block */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white p-8 shadow-[0_20px_50px_rgba(0,30,80,0.08)] md:p-12">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7 space-y-5">
              <h2 className="text-2xl font-bold text-navy md:text-3xl">
                Our Objective
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We provide solutions across Insurance, Investments, Loans, Credit Cards, and other financial products, with a focus on understanding each customer’s financial needs before recommending suitable options.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our objective is not just to provide financial products, but to help customers understand their options, compare alternatives, and make financially responsible decisions.
              </p>
            </div>
            <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-navy to-[#0f2d59] p-6 text-white shadow-inner">
              <Compass className="h-8 w-8 text-gold mb-4" />
              <p className="text-sm font-semibold tracking-wide uppercase text-gold">Advisory Focus</p>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                We believe in understanding your goals first. We never sell products blindly; we empower you with comparison metrics and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-secondary/30 to-white overflow-hidden">
        {/* Subtle decorative background blur shapes */}
        <div className="absolute top-1/4 left-0 -translate-x-12 w-80 h-80 rounded-full bg-gold/5 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 translate-x-12 w-96 h-96 rounded-full bg-navy/5 blur-[120px] pointer-events-none" />

        {/* Background Subtle Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-45 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
              Founder Profile & Certifications
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
              Professional Expertise & Continuous Learning
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
              A commitment towards continuous learning and professional development ensures we stay at the cutting edge of the financial industry.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Certifications Shelf */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                <Award className="h-5 w-5 text-gold shrink-0" />
                Certifications & Education
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.title}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-secondary/15 p-5 shadow-soft transition-all duration-300 hover:border-gold/50 hover:shadow-card hover:-translate-y-1"
                    >
                      <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${cert.color} transition-colors duration-300 shadow-sm`}>
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      <h4 className="mt-4 text-base font-extrabold text-navy transition-colors group-hover:text-gold-dark">{cert.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{cert.org}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mentors & Training */}
            <div className="lg:col-span-6 rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-card flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy">Industry Training & Mentors</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To keep updated with the latest developments in the financial and insurance industry, we regularly participate in training and learning sessions conducted by seasoned professionals:
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.name}
                    className="group relative flex items-start gap-3 rounded-2xl border border-border bg-gradient-to-br from-white to-secondary/10 p-4 transition-all duration-300 hover:border-navy/30 hover:shadow-card hover:-translate-y-0.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                      <GraduationCap className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-navy">{mentor.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{mentor.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-24 border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Mission Card */}
            <div className="rounded-3xl border border-border bg-secondary/15 p-8 sm:p-10 shadow-soft">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                Our Mission
              </span>
              <h3 className="mt-4 text-2xl font-black text-navy sm:text-3xl">
                What We Aim to Achieve
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Making financial services simple, transparent, and accessible for everyone.
              </p>

              <ul className="mt-8 space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                    <span className="text-sm font-medium text-navy">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-navy p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.1),transparent)] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                  Our Vision
                </span>
                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  Building a Financially Aware Community
                </h3>
                <p className="mt-6 text-base leading-relaxed text-white/80">
                  Our vision is to become a trusted financial services platform where customers can find reliable guidance for their insurance, investment, loan and credit requirements under one roof.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  We aspire to build a community of financially aware customers who can make better decisions through proper information, education, and professional guidance.
                </p>
              </div>

              <div className="relative z-10 mt-12 rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">Core Motto</p>
                <p className="mt-2 text-lg font-black tracking-tight text-white md:text-xl">
                  “Your Financial Needs. Our Knowledge. Better Decisions.”
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-secondary/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
              Pillars of Our Practice
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
              These principles guide every decision we make and every client relationship we build.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className={`group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${val.accent}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 text-navy group-hover:bg-gold group-hover:text-navy transition-colors shrink-0">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{val.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-grow">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA & Commitment Section */}
      <section className="bg-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                Our Commitment
              </span>
              <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl leading-tight">
                Your Trusted Financial Partner
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                At Choudhary Capital Crux, we believe that financial planning is not just about buying a product—it is about making the right financial decision at the right time.
              </p>
              <p className="text-base text-white/80 leading-relaxed">
                We are committed to continuously learning, staying updated, and providing customers with information and solutions that can help them move towards their financial goals.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark hover:scale-105"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 hover:scale-105"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-white p-6 sm:p-8 text-navy shadow-2xl">
              <h3 className="text-xl font-bold text-navy mb-1">Get in Touch</h3>
              <p className="text-xs text-muted-foreground mb-6">Preparation of a personalized quote takes less than 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
