'use client';

import React from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Gift,
  Plane,
  Fuel,
  ShoppingBag,
  Utensils,
  Crown,
  Briefcase,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Phone,
  Layers,
  Search,
  Compass,
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';

const WHATSAPP_URL = 'https://wa.me/918750733329';

const cardCategories = [
  {
    id: 'cashback',
    title: 'Cashback Credit Cards',
    suit: 'Everyday spending & savings',
    desc: 'Get flat cashback on groceries, utility bills, and daily transactions.',
    icon: CreditCard,
    color: 'text-emerald-500 bg-emerald-50 border-emerald-100'
  },
  {
    id: 'rewards',
    title: 'Rewards Credit Cards',
    suit: 'Regular purchases & reward points',
    desc: 'Earn accelerated reward points on shopping, dining, and online spends.',
    icon: Gift,
    color: 'text-indigo-500 bg-indigo-50 border-indigo-100'
  },
  {
    id: 'travel',
    title: 'Travel Credit Cards',
    suit: 'Frequent travellers',
    desc: 'Enjoy free airport lounge access, air miles, and complimentary hotel stays.',
    icon: Plane,
    color: 'text-sky-500 bg-sky-50 border-sky-100'
  },
  {
    id: 'fuel',
    title: 'Fuel Credit Cards',
    suit: 'Regular fuel expenses',
    desc: 'Save on monthly vehicle fuel with surcharge waivers and reward points.',
    icon: Fuel,
    color: 'text-amber-500 bg-amber-50 border-amber-100'
  },
  {
    id: 'shopping',
    title: 'Shopping Credit Cards',
    suit: 'Online & offline shopping',
    desc: 'Unlock exclusive shopping vouchers, discounts, and brand-partner rewards.',
    icon: ShoppingBag,
    color: 'text-pink-500 bg-pink-50 border-pink-100'
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Dining Cards',
    suit: 'Dining, entertainment & benefits',
    desc: 'Get discount vouchers at top restaurants and complimentary movie tickets.',
    icon: Utensils,
    color: 'text-rose-500 bg-rose-50 border-rose-100'
  },
  {
    id: 'premium',
    title: 'Premium & Super-Premium',
    suit: 'Luxury & exclusive privileges',
    desc: 'Indulge in 24/7 concierge assistance, golf courses, and club memberships.',
    icon: Crown,
    color: 'text-yellow-600 bg-yellow-50 border-yellow-100'
  },
  {
    id: 'business',
    title: 'Business Credit Cards',
    suit: 'Business-related expenses',
    desc: 'Simplify working capital management, corporate travels, and employee spends.',
    icon: Briefcase,
    color: 'text-navy bg-blue-50 border-blue-100'
  },
];

const compareFeatures = [
  'Annual & joining fees',
  'Reward points rate',
  'Cashback benefits',
  'Interest rates (APR)',
  'Fuel surcharge benefits',
  'Lounge access privileges',
  'EMI conversion facilities',
  'Welcome benefits & vouchers',
  'Eligibility requirements',
];

const steps = [
  {
    num: '01',
    title: 'Share Requirement',
    desc: 'Tell us about your income status, spending habits, and preferred card categories.'
  },
  {
    num: '02',
    title: 'Explore Options',
    desc: 'We map your details against top-tier card portfolios from leading banks.'
  },
  {
    num: '03',
    title: 'Compare Details',
    desc: 'Deep-dive into features, reward models, and yearly fees to find matching values.'
  },
  {
    num: '04',
    title: 'Apply Responsibly',
    desc: 'Initiate application directly with the issuer, backed by clear fee disclosures.'
  }
];

export default function CreditsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/15 font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-navy pt-28">
        {/* Abstract background mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/95 to-[#092247]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(212,175,55,0.18),transparent)]" />
          {/* Subtle line layout overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold shadow-[0_0_20px_rgba(212,175,55,0.12)] backdrop-blur-md border border-gold/10">
            <Sparkles className="h-3 w-3" />
            Credit Card Advisory
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Find the Right <span className="text-gold">Credit Card</span> <br />
            for Your Lifestyle
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed sm:text-xl">
            A credit card can be more than just a payment instrument—it can help you manage expenses, earn rewards, and enjoy exclusive benefits when used responsibly.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 rounded bg-gradient-to-r from-gold via-yellow-400 to-gold" />
          </div>
        </div>
      </section>

      {/* Introduction Highlight Card */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white p-8 shadow-[0_25px_50px_rgba(0,30,80,0.09)] md:p-12">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7 space-y-5">
              <h2 className="text-2xl font-black text-navy md:text-3xl">
                Personalised Credit Card Assistance
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                At Choudhary Capital Crux, we help customers understand different credit card options and identify cards based on their eligibility, spending patterns, lifestyle, and financial requirements.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Whether you are looking for Cashback, Rewards, Travel Benefits, Fuel Benefits, Shopping Offers, or Premium Privileges, we help you explore suitable options from leading banks and financial institutions.
              </p>
            </div>

            <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-navy to-[#0f2d59] p-6 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/5" />
              <Compass className="h-8 w-8 text-gold mb-4" />
              <p className="text-sm font-semibold tracking-wide uppercase text-gold">Card Selection Goal</p>
              <h4 className="mt-2 text-lg font-bold">Compare Before You Apply</h4>
              <p className="mt-2 text-xs text-white/70 leading-relaxed">
                Evaluating annual fees, lounge entries, reward structures, interest rates, and welcome offers ensures no surprises later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature & Assist Cards Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Left Box: Why Choose & Compare Features */}
            <div className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Card Parameters
                </span>
                <h3 className="mt-4 text-2xl font-black text-navy sm:text-3xl">
                  Key Metrics to Compare
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  We look beyond the marketing banner. We help you scrutinize the key details of the card structure:
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {compareFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
                      <span className="text-sm font-medium text-navy">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-6 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                  <Search className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-navy">Compare Side-by-Side</h4>
                  <p className="text-xs text-muted-foreground">Detailed evaluations of card rewards, joining terms, and monthly waiver caps.</p>
                </div>
              </div>
            </div>

            {/* Right Box: Guidance & Assistance */}
            <div className="rounded-3xl border border-border bg-gradient-to-br from-navy to-[#0c2445] p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-white/5" />
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                  Card Assistance
                </span>
                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  Guidance You Can Count On
                </h3>
                <p className="mt-6 text-base text-white/80 leading-relaxed">
                  We match you with credit card portfolios suited to your monthly spending parameters. Discover cards designed specifically for fuel surcharge waivers, premium airport lounge entries, or high-value online store cashback.
                </p>
                <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-sm font-bold text-gold flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4" />
                    Responsible Credit Guidance
                  </h4>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">
                    We advocate responsible borrowing. We detail exact billing cycles, interest charges, late payment terms, and charge factors before assisting with any application.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                  <Compass className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Target Card Selection</h4>
                  <p className="text-xs text-white/60">Matching card designs directly with individual income brackets and categories.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Credit Card Categories Showcase */}
      <section className="relative py-24 bg-gradient-to-b from-white via-secondary/35 to-white overflow-hidden border-y border-border">
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-navy/5 blur-[120px] pointer-events-none" />
        {/* Background Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
              Available Card Categories
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
              Popular Credit Card Categories
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Select card categories custom-tuned for specific life purposes, online shopping rewards, or luxury privileges.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cardCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:border-gold/50 hover:shadow-card hover:-translate-y-1"
                >
                  <div>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${cat.color} shadow-sm shrink-0 transition-all duration-300`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="mt-5 text-base font-extrabold text-navy">{cat.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-secondary flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gold-dark">{cat.suit}</span>
                    <ArrowUpRight className="h-4 w-4 text-navy/30 group-hover:text-gold transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works (Stepper) */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
              Clear Path Forward
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
              How the Process Works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
              A structured step-by-step assistance path designed to secure card sanctions responsibly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((st, i) => (
              <div
                key={st.num}
                className="relative rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:border-gold/30 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-secondary-foreground/20 tracking-tighter">{st.num}</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                </div>
                <h3 className="mt-4 text-base font-extrabold text-navy">{st.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{st.desc}</p>
                {i < 3 && (
                  <div className="absolute top-1/2 -right-3 hidden md:flex translate-y-[-50%] z-20">
                    <ChevronRight className="h-5 w-5 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choudhary Capital Crux */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Why Choudhary Capital Crux?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
            We continuously upgrade our knowledge through certifications and training to keep customers informed about changing financial products and market developments.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { title: 'Knowledge', desc: 'Expert Certifications' },
              { title: 'Transparency', desc: 'No Hidden Terms' },
              { title: 'Choice', desc: 'Top Bank Portfolios' },
              { title: 'Customer Focus', desc: 'Custom Spend Matching' }
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                <p className="text-base font-bold text-gold">{item.title}</p>
                <p className="mt-1 text-xs text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-6 py-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Advisory Process</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <p className="text-sm font-black tracking-tight">
              Understand <span className="text-gold">→</span> Compare <span className="text-gold">→</span> Choose <span className="text-gold">→</span> Apply Responsibly
            </p>
          </div>
        </div>
      </section>

      {/* Important Disclaimer Card */}
      <section className="py-16 bg-secondary/15">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-red-200/50 bg-red-50/30 p-6 sm:p-8 flex gap-4 items-start shadow-soft">
            <ShieldAlert className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-red-950 uppercase tracking-wider">Important Disclaimer</h4>
              <div className="mt-3 text-xs leading-relaxed text-red-900/80 space-y-2">
                <p>
                  Credit card approval, credit limit, interest rate, fees, rewards, and other benefits are determined solely by the respective card issuer based on its internal policies and eligibility criteria.
                </p>
                <p>
                  Choudhary Capital Crux does not guarantee card approval or any specific credit limit. Customers should carefully read the card’s terms, conditions, fees, and charges before initiating any application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Contact Form */}
      <section id="contact" className="bg-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                Start Your Journey
              </span>
              <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl leading-tight">
                Start Your Credit Card Journey Today
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Looking for a credit card that matches your needs? Connect with Choudhary Capital Crux to explore and compare suitable credit card options.
              </p>
              <div className="relative z-10 pt-4 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark hover:scale-105"
                >
                  Chat on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="tel:+918750733329"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 hover:scale-105"
                >
                  Call Us Directly
                  <Phone className="h-4 w-4" />
                </a>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-gold">Choudhary Capital Crux</p>
                <p className="text-sm italic text-white/60 mt-1">“Your Financial Needs. Our Knowledge. Better Decisions.”</p>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-white p-6 sm:p-8 text-navy shadow-2xl">
              <h3 className="text-xl font-bold text-navy mb-1">Inquire for Credit Cards</h3>
              <p className="text-xs text-muted-foreground mb-6 font-medium">Preparation of card comparison suggestions takes less than 24 hours.</p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
