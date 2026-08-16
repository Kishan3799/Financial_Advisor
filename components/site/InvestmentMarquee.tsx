'use client';

import React from 'react';

export const investmentLogos = [
  {
    id: 'sbi-mf',
    name: 'SBI Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00A3E0] shadow-sm shrink-0">
          <div className="relative h-3.5 w-3.5 rounded-full bg-white">
            <div className="absolute bottom-0 left-1/2 h-2.5 w-1 -translate-x-1/2 translate-y-1 bg-[#00A3E0]"></div>
          </div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-[#0C2340]">SBI</span>
          <span className="text-[9px] font-bold tracking-widest text-[#00A3E0]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'icici-pru-mf',
    name: 'ICICI Prudential Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8C1D40] text-sm font-black text-white shadow-sm shrink-0">
          i
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-tight text-[#8C1D40]">ICICI PRUDENTIAL</span>
          <span className="text-[9px] font-bold tracking-wider text-[#F58220]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'hdfc-mf',
    name: 'HDFC Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="grid h-9 w-9 grid-cols-2 gap-0.5 rounded border-2 border-[#DA291C] p-0.5 shrink-0 bg-white shadow-sm">
          <div className="bg-[#DA291C]"></div>
          <div className="bg-[#002D62]"></div>
          <div className="bg-[#002D62]"></div>
          <div className="bg-[#DA291C]"></div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-[#002D62]">HDFC</span>
          <span className="text-[9px] font-bold tracking-tight text-[#DA291C]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'nippon-india-mf',
    name: 'Nippon India Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E21A22] shadow-sm shrink-0">
          <span className="text-lg font-black text-white">N</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-tight text-[#003B71]">Nippon India</span>
          <span className="text-[9px] font-bold tracking-widest text-[#E21A22]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'kotak-mf',
    name: 'Kotak Mahindra Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <svg width="36" height="36" className="h-9 w-9 shrink-0 inline-block drop-shadow-sm" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19" fill="#003366" />
          <path d="M13 14C16 14 18 16 18 19C18 23 13 25 13 25H27" stroke="#EE3124" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 26C24 26 22 24 22 21C22 17 27 15 27 15H13" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-[#EE3124]">kotak</span>
          <span className="text-[9px] font-bold tracking-tight text-[#003366]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'axis-mf',
    name: 'Axis Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#861F41] text-white font-extrabold shadow-sm shrink-0">
          a
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-[#861F41]">AXIS</span>
          <span className="text-[9px] font-bold tracking-widest text-[#4A5568]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'absl-mf',
    name: 'Aditya Birla Sun Life Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E21B23] shadow-sm shrink-0">
          <div className="h-5 w-5 rounded-full bg-[#FFCC00]"></div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-black tracking-tight text-[#E21B23]">ADITYA BIRLA</span>
          <span className="text-[9px] font-bold tracking-tight text-[#003B71]">SUN LIFE MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'uti-mf',
    name: 'UTI Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#004A95] font-black text-white shadow-sm shrink-0">
          UTI
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-[#004A95]">UTI</span>
          <span className="text-[9px] font-bold tracking-widest text-[#E31B23]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'mirae-asset-mf',
    name: 'Mirae Asset Mutual Fund',
    component: (
      <div className="flex items-center gap-2.5 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#003A70] shadow-sm shrink-0">
          <span className="text-xs font-bold text-[#F58220]">MIRAE</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-base font-black tracking-tight text-[#003A70]">MIRAE ASSET</span>
          <span className="text-[9px] font-bold tracking-widest text-[#4A5568]">MUTUAL FUND</span>
        </div>
      </div>
    ),
  },
  {
    id: 'tata-mf',
    name: 'Tata Mutual Fund',
    component: (
      <div className="flex flex-col leading-none whitespace-nowrap">
        <span className="text-xl font-black tracking-wider text-[#003B71]">TATA</span>
        <span className="text-[9px] font-bold tracking-widest text-[#0099C6] text-right">MUTUAL FUND</span>
      </div>
    ),
  },
  {
    id: 'nj-wealth',
    name: 'NJ wealth',
    component: (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0052A3] text-sm font-black text-white shadow-sm shrink-0">
          NJ
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-tight text-[#0052A3]">NJ Wealth</span>
          <span className="text-[8px] font-bold tracking-widest text-[#E31B23]">PARTNER</span>
        </div>
      </div>
    ),
  },
];

export default function InvestmentMarquee() {
  // Repeat array so marquee seamlessly loops
  const marqueeItems = [...investmentLogos, ...investmentLogos, ...investmentLogos];

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
              {/* Main Logo Card with Drop Shadow under logo */}
              <div className="relative z-10 flex h-12 items-center justify-center filter drop-shadow-[0_6px_8px_rgba(0,30,80,0.18)] transition-all duration-300 group-hover/logo:drop-shadow-[0_10px_14px_rgba(0,30,80,0.28)]">
                {logo.component}
              </div>

              {/* Mirror Reflection underneath logo */}
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
