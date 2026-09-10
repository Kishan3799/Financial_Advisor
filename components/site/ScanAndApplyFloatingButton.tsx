'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  QrCode,
  X,
  Shield,
  TrendingUp,
  CreditCard,
  Building2,
  Landmark,
  Home,
  Car,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Smartphone,
  Check,
  ExternalLink,
} from 'lucide-react';

const accessProducts = [
  {
    icon: Shield,
    title: 'Insurance Plans',
    desc: 'Life, Health, Motor & Commercial protection',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: TrendingUp,
    title: 'Mutual Funds & Investments',
    desc: 'Goal-based wealth creation & SIPs',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: CreditCard,
    title: 'Credit Cards',
    desc: 'Compare & apply for top reward cards',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Building2,
    title: 'Bank Accounts',
    desc: 'Eligible digital savings & salary accounts',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Landmark,
    title: 'Fixed Deposits',
    desc: 'Guaranteed high-yield FD interest returns',
    color: 'from-rose-500 to-red-500',
    bgColor: 'bg-rose-500/10 text-rose-600',
  },
  {
    icon: Home,
    title: 'Loans',
    desc: 'Home, Personal, Business & LAP loans',
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-500/10 text-cyan-600',
  },
  {
    icon: Car,
    title: 'Car Offers',
    desc: 'New/used vehicle finance & instant offers',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: Briefcase,
    title: 'Other Financial Solutions',
    desc: 'Bespoke financial products & tax planning',
    color: 'from-indigo-500 to-violet-600',
    bgColor: 'bg-indigo-500/10 text-indigo-600',
  },
];

const steps = [
  {
    step: '1',
    title: 'Scan',
    desc: 'Scan the QR code using your smartphone camera.',
  },
  {
    step: '2',
    title: 'Select',
    desc: 'Choose the financial product or service you need.',
  },
  {
    step: '3',
    title: 'Apply Online',
    desc: 'Complete application & upload documents digitally.',
  },
  {
    step: '4',
    title: 'Submit & Track',
    desc: 'Submit application and follow digital process.',
  },
];

export default function ScanAndApplyFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* ─────────────── FIXED CIRCULAR FLOATING BUTTON ─────────────── */}
      <div className="fixed bottom-6 right-5 sm:bottom-7 sm:right-7 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-gold/60 bg-gradient-to-br from-navy via-[#0d2242] to-navy text-gold shadow-[0_10px_25px_rgba(10,25,47,0.6)] transition-all duration-300 hover:scale-110 hover:border-gold hover:shadow-[0_15px_35px_rgba(212,175,55,0.45)] active:scale-95 cursor-pointer"
          aria-label="Scan and Apply - Quick QR Financial Access"
        >
          {/* Animated Gold Aura Background */}
          <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* QR Icon */}
          <QrCode className="h-6 w-6 sm:h-7 sm:w-7 text-gold transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 drop-shadow-sm" />

          {/* Live Ping Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-black text-navy shadow-sm">
              ⚡
            </span>
          </span>

          {/* Micro Curved Tagline Pill Below Button */}
          <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-navy via-[#0d2242] to-navy px-2.5 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wider text-gold shadow-md border border-gold/50 group-hover:border-gold group-hover:scale-105 transition-all">
            Scan &amp; Apply
          </span>
        </button>
      </div>

      {/* ─────────────── MODAL OVERLAY ─────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-navy/80 backdrop-blur-md animate-in fade-in-0 duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-gold/30 bg-white shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-gradient-to-r from-navy via-[#0d2242] to-navy px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold border border-gold/30">
                  <QrCode className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white sm:text-2xl leading-tight">
                    Scan &amp; Apply
                  </h2>
                  <p className="text-xs text-gold font-medium mt-0.5">
                    Your Financial Solutions, Just One Scan Away
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-7 bg-slate-50/60">
              {/* HERO SECTION: QR CODE & QUICK VALUE PROP */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl border border-gold/20 bg-gradient-to-br from-navy/95 via-navy to-[#0f284e] p-5 sm:p-6 text-white shadow-card">
                {/* QR Code Frame */}
                <div className="md:col-span-5 flex flex-col items-center justify-center">
                  <div className="group relative rounded-2xl border-2 border-gold/40 bg-white p-3 shadow-gold transition-all duration-300 hover:border-gold">
                    {/* Scanner corner brackets visual effect */}
                    <div className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-gold" />
                    <div className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-gold" />
                    <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-gold" />
                    <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-gold" />

                    <img
                      src="/QR Code.jpeg"
                      alt="Choudhary Capital Crux Scan & Apply QR Code"
                      className="h-44 w-44 rounded-xl object-contain sm:h-48 sm:w-48"
                    />
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold border border-gold/30">
                    <Smartphone className="h-3.5 w-3.5" />
                    Scan with camera
                  </span>
                </div>

                {/* Text Context */}
                <div className="md:col-span-7 space-y-3 text-left">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    100% Digital &amp; Paperless
                  </span>
                  <h3 className="text-xl font-extrabold text-white sm:text-2xl leading-snug">
                    One QR Code. Multiple Financial Solutions.
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Looking for the right Insurance, Mutual Funds, Investments, Credit Cards, Bank Accounts, Fixed Deposits, Loans, or Car Offers? Explore &amp; apply online — anytime, anywhere, directly from your mobile.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs text-white/90">
                    <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg">
                      <Check className="h-3.5 w-3.5 text-gold" /> No Branch Visits
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg">
                      <Check className="h-3.5 w-3.5 text-gold" /> Instant Online Form
                    </span>
                  </div>
                </div>
              </div>

              {/* WHAT CAN YOU ACCESS GRID */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base sm:text-lg font-bold text-navy flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gold/20 text-gold-dark text-xs">✨</span>
                    What Can You Access?
                  </h4>
                  <span className="text-xs text-muted-foreground font-medium">Scan QR to apply</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {accessProducts.map((p) => (
                    <div
                      key={p.title}
                      className="group flex items-start gap-3.5 rounded-xl border border-border bg-white p-3.5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-card"
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${p.bgColor} font-bold transition-transform group-hover:scale-110`}>
                        <p.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h5 className="text-sm font-bold text-navy group-hover:text-gold-dark transition-colors leading-tight">
                          {p.title}
                        </h5>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-normal">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HOW IT WORKS STEPPER */}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                <h4 className="text-base font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-navy text-white text-xs">🚀</span>
                  How It Works
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {steps.map((st) => (
                    <div
                      key={st.step}
                      className="relative rounded-xl border border-border/70 bg-slate-50/70 p-3.5 text-left"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold mb-2">
                        {st.step}
                      </span>
                      <h5 className="text-xs font-extrabold text-navy uppercase tracking-wider">
                        {st.title}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-gold/10 border border-gold/30 p-3 text-center text-xs text-navy font-semibold">
                  💡 <span className="font-bold">No Need to Visit Multiple Places</span> — Start from one convenient digital access point. <span className="text-gold-dark font-extrabold">Scan. Explore. Apply. Go Digital.</span>
                </div>
              </div>

              {/* FOOTER DISCLAIMER */}
              <div className="rounded-xl border border-border bg-slate-100/70 p-4 text-left text-[11px] leading-relaxed text-muted-foreground">
                <div className="flex items-center justify-between mb-1 text-navy font-bold text-xs">
                  <span>Choudhary Capital Crux</span>
                  <span className="text-gold-dark">Your Financial Solutions Partner</span>
                </div>
                <p>
                  Product availability, eligibility, approval and applicable terms are subject to the respective financial institution/product provider and regulatory requirements.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex shrink-0 items-center justify-between border-t border-border bg-white px-6 py-4">
              <span className="text-xs font-semibold text-navy">
                Ready to Get Started?
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-navy-light"
              >
                Close &amp; Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
