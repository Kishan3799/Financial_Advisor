import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  MessageCircle,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { insights } from '@/lib/insights-data';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static pre-rendered routes at build time
export async function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO Headings
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = insights.find((item) => item.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Choudhary Capital Crux`,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const post = insights.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const WHATSAPP_LINK = `https://wa.me/918750733329?text=${encodeURIComponent(post.whatsappMsg)}`;

  return (
    <div className="flex min-h-screen flex-col bg-secondary/15 font-sans">
      <Navbar />

      {/* ─────────────── MAIN WRAPPER ─────────────── */}
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Back button */}
          <Link
            href="/#insights"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          {/* ─────────────── HERO HEADER ─────────────── */}
          <header className="animate-fade-up max-w-4xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-dark border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <Sparkles className="h-3 w-3" />
              {post.category}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl leading-[1.12]">
              {post.title}
            </h1>

            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              {post.subtitle}
            </p>

            {/* Author / Metadata Row */}
            <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 border-t border-b border-navy/5 py-4 text-sm text-navy/70">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 text-gold border border-navy/5">
                  <User className="h-4 w-4" />
                </span>
                <span className="font-semibold text-navy">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-navy/40" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-navy/40" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* ─────────────── FEATURED COVER IMAGE ─────────────── */}
          <div className="animate-fade-up delay-100 mt-8 overflow-hidden rounded-3xl border border-navy/5 shadow-card aspect-[21/10] md:aspect-[21/9] w-full">
            <img
              src={post.img}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02] select-none"
            />
          </div>

          {/* ─────────────── GRID CONTENT SECTION ─────────────── */}
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* MAIN ARTICLE BODY (Col span 8) */}
            <article className="lg:col-span-8 animate-fade-up delay-200">
              {post.content.map((block, index) => {
                if (block.type === 'p') {
                  return (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-navy-lighter/90 mb-6 font-normal text-justify"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === 'h2') {
                  return (
                    <h2
                      key={index}
                      className="text-xl md:text-2xl font-bold text-navy mt-10 mb-4 border-l-4 border-gold pl-3 tracking-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === 'takeaway') {
                  return (
                    <div
                      key={index}
                      className="my-8 rounded-2xl border border-gold/20 bg-gold/5 p-6 backdrop-blur-sm relative overflow-hidden group shadow-soft transition-all duration-300 hover:border-gold/40 hover:bg-gold/10"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" />
                        Key Takeaway
                      </h4>
                      <p className="text-sm font-semibold text-navy leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  );
                }

                if (block.type === 'list') {
                  return (
                    <ul
                      key={index}
                      className="space-y-3 my-6 pl-5 list-disc text-navy-lighter/90 text-base leading-relaxed font-normal"
                    >
                      {block.items.map((item, idx) => (
                        <li key={idx} className="marker:text-gold">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </article>

            {/* SIDEBAR (Col span 4) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6 animate-fade-up delay-300">

                {/* Custom WhatsApp CTA Trigger Card */}
                <div className="bg-navy text-white rounded-3xl p-6 shadow-card border border-white/10 relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
                  {/* Subtle glowing backlight circles */}
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/15 transition-colors" />
                  <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-2xl" />

                  <h3 className="relative z-10 text-lg font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    Consultation
                  </h3>

                  <p className="relative z-10 mt-3 text-base font-bold leading-snug">
                    Have questions about this article?
                  </p>

                  <p className="relative z-10 mt-2 text-xs text-white/70 leading-relaxed">
                    Discuss custom SIP plans, portfolio optimizations, or insurance coverage options directly with Avinash.
                  </p>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-3.5 text-sm font-bold text-navy shadow-gold transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    Ask on WhatsApp
                  </a>
                </div>

                {/* Profile Box */}
                <div className="bg-white/70 backdrop-blur-md border border-navy/5 rounded-3xl p-6 shadow-soft transition-all duration-300 hover:border-gold/20 hover:bg-white">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold shadow-soft">
                      <Award className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-navy leading-tight">
                        Avinash K. Choudhary
                      </h4>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase mt-0.5">
                        Financial Advisor & Agent
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                    IRDA and NISM certified financial advisor with 12+ years of expertise. Dedicated to offering zero-pressure, commission-transparent wealth and insurance planning.
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-navy/5 pt-4 text-[11px] font-semibold text-navy/80">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      1,200+ Families Served
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      ₹450Cr+ Coverage Arranged
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      Delhi-Based Certified Advisory
                    </li>
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
