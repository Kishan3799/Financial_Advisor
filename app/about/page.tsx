'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Target,
  BookOpen,
  Award,
  Users,
  Cpu,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
  Star,
  Zap,
  Globe,
  ChevronRight,
  Medal,
  Lightbulb,
  BarChart3,
  HandHeart,
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';

const WHATSAPP_URL = 'https://wa.me/918750733329';

const credentials = [
  { title: 'Founder', subtitle: 'Choudhary Capital Crux', icon: Star, gradient: 'from-amber-500 to-yellow-400' },
  { title: 'MDRT, USA', subtitle: 'Achiever / Member', icon: Medal, gradient: 'from-blue-600 to-indigo-500' },
  { title: 'IRDA Certified', subtitle: 'Insurance Regulatory Authority', icon: Shield, gradient: 'from-emerald-500 to-teal-400' },
  { title: 'NISM Certified', subtitle: 'Securities Markets Institute', icon: TrendingUp, gradient: 'from-purple-600 to-violet-500' },
  { title: 'Bima Gurukul', subtitle: 'Insurance Expert Certified', icon: Award, gradient: 'from-rose-500 to-pink-400' },
  { title: 'B.Com Graduate', subtitle: 'Academic Foundation', icon: GraduationCap, gradient: 'from-orange-500 to-amber-400' },
  { title: 'Gold Medalist', subtitle: 'LIC of India Recognition', icon: Star, gradient: 'from-yellow-500 to-yellow-300' },
];

const approachSteps = [
  {
    step: '01',
    word: 'Educate',
    icon: BookOpen,
    desc: 'We educate customers about relevant financial concepts and solutions, empowering them with knowledge.',
    color: 'from-blue-600 to-indigo-500',
  },
  {
    step: '02',
    word: 'Understand',
    icon: Users,
    desc: 'We understand your goals, requirements, and priorities through in-depth conversations.',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    step: '03',
    word: 'Compare',
    icon: BarChart3,
    desc: 'We compare suitable options based on your specific needs and financial circumstances.',
    color: 'from-amber-500 to-yellow-400',
  },
  {
    step: '04',
    word: 'Decide',
    icon: Target,
    desc: 'You decide with greater clarity and confidence, backed by expert guidance and full transparency.',
    color: 'from-rose-600 to-pink-500',
  },
];

const techFeatures = [
  { icon: Globe, title: 'Digital Exploration', desc: 'Explore and compare financial services digitally from anywhere.' },
  { icon: Zap, title: 'AI-Driven Tools', desc: 'Modern AI tools for research and service efficiency.' },
  { icon: Cpu, title: 'Smart Processes', desc: 'Technology-enabled workflows that reduce paperwork.' },
  { icon: Lightbulb, title: 'Knowledge Platform', desc: 'Continuous learning through digital knowledge resources.' },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — matches reference image style
      ══════════════════════════════════════════ */}
      <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#0a1628] pt-24 pb-16">
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
        {/* Subtle grid — matches reference image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial gold glow at top */}
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(245,166,35,0.14),transparent)]" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center">
          {/* Pill badge — dark background style like reference */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1a2a45] px-4 py-2 mb-8 shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">About Us</span>
          </div>

          {/* Headline — bold white + gold accent */}
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Choudhary{' '}
            <span className="text-yellow-400">Capital Crux</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Founded in June 2014, we combine financial expertise, professional ethics,
            transparent guidance, and technology-enabled solutions — helping individuals,
            families, and businesses make informed financial decisions.
          </p>

          {/* Gold underline accent — like reference image */}
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-yellow-400" />

          {/* Stats strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-14">
            {[
              { num: '2014', label: 'Founded' },
              { num: '10+', label: 'Years Experience' },
              { num: 'MDRT', label: 'USA Member' },
              { num: '5+', label: 'Service Categories' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-yellow-400 sm:text-3xl">{stat.num}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STORY CARD — floating lift
      ══════════════════════════════════════════ */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 pb-0">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_25px_70px_rgba(0,20,60,0.13)] sm:rounded-3xl sm:p-10 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              {/* Left — story */}
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-[#0a192f]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#0a192f]">
                  Our Story
                </span>
                <h2 className="text-2xl font-black leading-tight text-[#0a192f] sm:text-3xl">
                  A decade of trusted<br className="hidden sm:block" /> financial guidance
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  Choudhary Capital Crux was founded by{' '}
                  <strong className="text-[#0a192f]">Avinash Kumar Choudhary</strong>, a
                  financial services professional focused on helping individuals, families,
                  and businesses make informed and responsible financial decisions.
                </p>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  Our journey began in <strong className="text-[#0a192f]">June 2014</strong>{' '}
                  with an IRDA licence and an association with LIC of India. Since then, the
                  practice has continuously evolved — combining expertise, ethics, transparency,
                  and technology.
                </p>
              </div>

              {/* Right — services */}
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-yellow-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-yellow-700">
                  What We Offer
                </span>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  Choudhary Capital Crux provides access to financial solutions across:
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {['Insurance', 'Investments', 'Loans', 'Credit Cards', 'Financial Services'].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-600" />
                      <span className="text-sm font-semibold text-[#0a192f]">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs italic text-slate-500">
                  "Making the customer journey simple, transparent, and convenient."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOUNDER SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0a192f]/6 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0a192f]/70">
              Leadership
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#0a192f] sm:text-4xl lg:text-5xl">
              Meet the Founder
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-5 lg:items-stretch">
            {/* Bio card */}
            <div className="lg:col-span-3 flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_40px_rgba(0,20,60,0.07)] sm:rounded-3xl sm:p-10">
              <div>
                {/* Avatar row */}
                <div className="flex flex-col gap-4 mb-7 sm:flex-row sm:items-center sm:gap-5">
                  <div className="relative self-start">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#0a192f] to-[#1d3557] flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-black text-yellow-400">AK</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#0a192f] sm:text-2xl">
                      Avinash Kumar Choudhary
                    </h3>
                    <p className="text-sm font-semibold text-yellow-600 mt-1">
                      Founder — Choudhary Capital Crux
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                        MDRT, USA
                      </span>
                      <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                        IRDA Certified
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  Avinash Kumar Choudhary has built his professional journey around{' '}
                  <strong className="text-[#0a192f]">
                    financial services, customer education, and responsible financial decision-making
                  </strong>
                  . He is an MDRT, USA achiever/member — a globally recognised standard of professional
                  excellence in the life insurance and financial services industry.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  Avinash believes that financial services should not be about simply selling products.
                  Customers should first <em>understand</em> their needs, evaluate suitable alternatives,
                  and make decisions with clarity and confidence.
                </p>
              </div>

              {/* Quote block */}
              <div className="mt-7 rounded-2xl bg-gradient-to-br from-[#0a192f] to-[#112240] p-5 sm:p-6">
                <p className="text-sm italic leading-relaxed text-white sm:text-base">
                  "Financial services should not be about simply selling products. Customers deserve
                  clarity, options, and confidence in every decision."
                </p>
                <p className="mt-3 text-sm font-bold text-yellow-400">— Avinash Kumar Choudhary</p>
              </div>
            </div>

            {/* Credentials list */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                Professional Credentials
              </h4>
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.title}
                    className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-200 sm:gap-4 sm:rounded-2xl sm:p-4"
                  >
                    <div
                      className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${cred.gradient} flex items-center justify-center shadow-sm sm:h-11 sm:w-11`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#0a192f]">{cred.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">{cred.subtitle}</p>
                    </div>
                    <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 group-hover:text-slate-500 transition-colors" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          APPROACH — dark section
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0a1628] py-20 px-4 sm:px-6 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(245,166,35,0.1),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1a2a45] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
              <Sparkles className="h-3 w-3" /> Our Methodology
            </span>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Our Approach
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Every financial decision should begin with understanding. We follow a proven
              4-step process centered entirely on your best interest.
            </p>
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-bold text-white sm:text-sm">
              Educate → Understand → Compare → Decide
            </div>
          </div>

          {/* Step cards */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {approachSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.word}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 sm:p-6"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-4xl font-black text-white/15 select-none">{step.step}</span>
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-2.5 text-lg font-black text-white sm:text-xl">{step.word}</h3>
                  <p className="flex-grow text-sm leading-relaxed text-slate-300">{step.desc}</p>
                  <div className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${step.color}`} />
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Our objective is to simplify financial decisions while keeping transparency,
            suitability, and customer interest at the center.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNOLOGY SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 sm:py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-yellow-400/6 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            {/* Text */}
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0a192f]/6 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0a192f]/70">
                <Cpu className="h-3.5 w-3.5" /> Technology & Innovation
              </span>
              <h2 className="text-3xl font-black leading-tight text-[#0a192f] sm:text-4xl lg:text-5xl">
                Technology-Enabled{' '}
                <span className="text-yellow-600">Financial Services</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Choudhary Capital Crux combines professional financial expertise with modern
                technology to create a more convenient customer experience.
              </p>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Where available, customers can explore, compare, and initiate financial services{' '}
                <strong className="text-[#0a192f]">digitally</strong>, helping reduce paperwork
                and make the overall process more convenient and accessible.
              </p>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                We continuously develop our knowledge and use modern{' '}
                <strong className="text-[#0a192f]">AI-driven and technology-enabled tools</strong>{' '}
                to support research, service efficiency, customer communication, and digital experiences.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {techFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-yellow-200 sm:gap-4 sm:p-6"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0a192f] to-[#1d3557] flex items-center justify-center shadow-sm transition-all duration-300 group-hover:from-yellow-500 group-hover:to-yellow-400">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0a192f] sm:text-base">{feat.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════ */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 px-4 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-12 text-center sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-yellow-700">
              Purpose & Direction
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#0a192f] sm:text-4xl lg:text-5xl">
              Mission & Vision
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_40px_rgba(0,20,60,0.06)] sm:rounded-3xl sm:p-10">
              <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-yellow-400/6 blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-400 flex items-center justify-center shadow-md">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                      Our Mission
                    </span>
                    <h3 className="text-xl font-black text-[#0a192f] sm:text-2xl">What We Aim</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  To make financial services{' '}
                  <strong className="text-[#0a192f]">
                    simple, transparent, accessible, and technology-enabled
                  </strong>{' '}
                  while building long-term relationships based on trust, knowledge, and customer
                  satisfaction.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Simplify financial decisions for every customer',
                    'Maintain full transparency in every interaction',
                    'Make services accessible to all segments',
                    'Build trust through knowledge and honesty',
                    'Leverage technology for better experiences',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                      <span className="text-sm text-slate-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#060d1a] via-[#0a192f] to-[#0f2240] p-6 shadow-2xl sm:rounded-3xl sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.12),transparent)]" />
              <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-blue-500/6 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">
                      Our Vision
                    </span>
                    <h3 className="text-xl font-black text-white sm:text-2xl">Where We're Headed</h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                  To become a <strong className="text-white">trusted financial partner</strong> for
                  individuals, families, and businesses by providing seamless guidance across
                  Insurance, Investments, Loans, and Credit Solutions under one roof.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    { icon: HandHeart, label: 'Trust' },
                    { icon: BookOpen, label: 'Knowledge' },
                    { icon: Shield, label: 'Protection' },
                    { icon: TrendingUp, label: 'Growth' },
                  ].map((v) => {
                    const Icon = v.icon;
                    return (
                      <div
                        key={v.label}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3"
                      >
                        <Icon className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">{v.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Tagline */}
                <div className="mt-8 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-center">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-yellow-400">
                    Our Promise
                  </p>
                  <p className="text-base font-black text-white leading-snug sm:text-lg">
                    "Your Goals. Your Choices. Our Guidance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#060d1a] via-[#0a192f] to-[#0d1f3c] py-20 px-4 text-white sm:px-6 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_0%,rgba(245,166,35,0.08),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            {/* Left */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1a2a45] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                Get Started
              </span>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Your Trusted{' '}
                <span className="text-yellow-400">Financial Partner</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                At Choudhary Capital Crux, we believe that financial planning is about making
                the right financial decision at the right time — not just buying a product.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                We are committed to continuously learning, staying updated, and providing
                solutions that help you move towards your financial goals with confidence.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-[#0a192f] shadow-[0_8px_30px_rgba(245,166,35,0.35)] transition-all hover:bg-yellow-300 hover:scale-105"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15 hover:scale-105"
                  style={{ backdropFilter: 'blur(4px)' }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-9">
              <h3 className="text-xl font-black text-[#0a192f]">Get in Touch</h3>
              <p className="mt-1 mb-6 text-xs text-slate-500">Personalised guidance within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
