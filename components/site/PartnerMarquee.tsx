'use client';

import React from 'react';

export const partnerLogos = [
  {
    id: 'max-life',
    name: 'Max Life Insurance',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <svg width="36" height="36" className="h-9 w-9 shrink-0 inline-block drop-shadow-sm" viewBox="0 0 40 40" fill="none">
          <path d="M12 32C12 32 8 26 12 20C15 15.5 22 13 22 7C22 7 30 13 28 22C26.5 28.5 20 32 12 32Z" fill="#F58220" />
          <path d="M8 32C14 34 26 33 32 27C30 30 25 33 18 33C12 33 8 32 8 32Z" fill="#003A70" />
        </svg>
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black tracking-tight text-[#003A70]">MAX</span>
            <span className="text-2xl font-black text-[#F58220]">Life</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'kotak',
    name: 'Kotak Mahindra Group',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <svg width="36" height="36" className="h-9 w-9 shrink-0 inline-block drop-shadow-sm" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19" fill="#003366" />
          <path d="M13 14C16 14 18 16 18 19C18 23 13 25 13 25H27" stroke="#EE3124" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 26C24 26 22 24 22 21C22 17 27 15 27 15H13" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-black tracking-tight text-[#EE3124]">kotak</span>
          <span className="text-[10px] font-bold tracking-tight text-[#4A5568]">Kotak Mahindra Group</span>
        </div>
      </div>
    ),
  },
  {
    id: 'bajaj-allianz',
    name: 'Bajaj Allianz',
    component: (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <div className="flex items-center gap-1.5">
          <span className="text-2xl font-black tracking-tighter text-[#0055A5]">BAJAJ</span>
          <span className="text-2xl font-bold tracking-tight text-[#0055A5]">Allianz</span>
          <svg width="28" height="28" className="h-7 w-7 text-[#0055A5] shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.2"/>
            <rect x="8" y="7" width="2" height="10" rx="1"/>
            <rect x="11" y="7" width="2" height="10" rx="1"/>
            <rect x="14" y="7" width="2" height="10" rx="1"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 'tata-aia',
    name: 'Tata AIA Life',
    component: (
      <div className="flex flex-col leading-none whitespace-nowrap">
        <span className="text-2xl font-black tracking-wider text-[#003B71]">TATA AIA</span>
        <span className="text-xs font-bold tracking-widest text-[#0099C6] text-right">Life</span>
      </div>
    ),
  },
  {
    id: 'pnb-metlife',
    name: 'PNB MetLife',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A81B2D] p-1.5 shadow-sm shrink-0">
          <svg width="24" height="24" className="h-6 w-6 inline-block" viewBox="0 0 24 24" fill="none">
            <path d="M12 4C8 4 5 7 5 11C5 15 8 18 12 18C14 18 15 17 16 16V12H12V10H18V17C16.5 19 14.5 20 12 20C7 20 3 16 3 11C3 6 7 2 12 2" fill="#FFC72C"/>
          </svg>
        </div>
        <span className="text-2xl font-black tracking-tight text-[#111827]">PNB MetLife</span>
      </div>
    ),
  },
  {
    id: 'star-health',
    name: 'Star Health',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <svg width="36" height="36" className="h-9 w-9 text-[#1A3D8F] shrink-0 inline-block drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tight text-[#1A3D8F]">Star Health</span>
          <span className="text-[9px] font-bold text-[#1A3D8F]/80">Health and Allied Insurance</span>
        </div>
      </div>
    ),
  },
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="grid h-9 w-9 grid-cols-2 gap-0.5 rounded border-2 border-[#DA291C] p-0.5 shrink-0 bg-white shadow-sm">
          <div className="bg-[#DA291C]"></div>
          <div className="bg-[#002D62]"></div>
          <div className="bg-[#002D62]"></div>
          <div className="bg-[#DA291C]"></div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tight text-[#DA291C]">HDFC ERGO</span>
          <span className="text-[10px] font-bold tracking-tight text-[#1A1A1A]">General Insurance</span>
        </div>
      </div>
    ),
  },
  {
    id: 'sbi-life',
    name: 'SBI Life',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00A3E0] shadow-sm shrink-0">
          <div className="relative h-3.5 w-3.5 rounded-full bg-white">
            <div className="absolute bottom-0 left-1/2 h-2.5 w-1 -translate-x-1/2 translate-y-1 bg-[#00A3E0]"></div>
          </div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tight text-[#0C2340]">SBI Life</span>
          <span className="text-[9px] font-bold tracking-widest text-[#4A5568]">INSURANCE</span>
        </div>
      </div>
    ),
  },
  {
    id: 'icici-pru',
    name: 'ICICI Prudential',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8C1D40] text-sm font-black text-white shadow-sm shrink-0">
          i
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-[#8C1D40]">ICICI PRUDENTIAL</span>
          <span className="text-[9px] font-bold tracking-wider text-[#4A5568]">LIFE INSURANCE</span>
        </div>
      </div>
    ),
  },
];

export default function PartnerMarquee() {
  // Repeat array so marquee seamlessly loops
  const marqueeItems = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="w-full py-2">
      <div className="group overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_88%,transparent_100%)]">
        {/* Left and Right Blurred Edge Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-36 bg-gradient-to-r from-white via-white/80 to-transparent backdrop-blur-[3px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-36 bg-gradient-to-l from-white via-white/80 to-transparent backdrop-blur-[3px]" />

        {/* Scrolling track - pauses on hover over any logo */}
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="group/logo relative flex flex-col items-center justify-center px-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              {/* Main Logo Card with Drop Shadow under logo (as requested & shown in Image 2) */}
              <div className="relative z-10 flex h-12 items-center justify-center filter drop-shadow-[0_6px_8px_rgba(0,30,80,0.18)] transition-all duration-300 group-hover/logo:drop-shadow-[0_10px_14px_rgba(0,30,80,0.28)]">
                {logo.component}
              </div>

              {/* Mirror Reflection underneath logo (as in 2nd image) */}
              <div
                className="pointer-events-none select-none opacity-30 blur-[0.5px] transition-all duration-300 group-hover/logo:opacity-55 group-hover/logo:blur-[0.2px] -mt-1"
                style={{
                  transform: 'scaleY(-1)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 65%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 65%)',
                }}
                aria-hidden="true"
              >
                <div className="flex h-12 items-center justify-center">
                  {logo.component}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
