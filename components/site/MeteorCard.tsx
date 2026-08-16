'use client';

import React from 'react';

interface MeteorCardProps {
  children: React.ReactNode;
  className?: string;
  badgeColor?: 'emerald' | 'blue' | 'gold';
  speedSeconds?: number;
}

export default function MeteorCard({
  children,
  className = '',
  badgeColor = 'gold',
  speedSeconds = 4.5,
}: MeteorCardProps) {
  // Theme configurations for meteor head and tail
  const themes = {
    emerald: {
      head: '#ffffff',
      bright: '#34d399',
      tail: '#059669',
      borderDefault: 'border-emerald-200/60',
      glowShadow: 'shadow-[0_12px_32px_-10px_rgba(16,185,129,0.18)]',
    },
    blue: {
      head: '#ffffff',
      bright: '#60a5fa',
      tail: '#2563eb',
      borderDefault: 'border-blue-200/60',
      glowShadow: 'shadow-[0_12px_32px_-10px_rgba(37,99,235,0.18)]',
    },
    gold: {
      head: '#ffffff',
      bright: '#fbbf24',
      tail: '#d97706',
      borderDefault: 'border-amber-200/60',
      glowShadow: 'shadow-[0_12px_32px_-10px_rgba(245,166,35,0.2)]',
    },
  };

  const currentTheme = themes[badgeColor] || themes.gold;

  // Conic Gradients:
  // 1. Sharp Tapered Tail: Starts thin/transparent (200deg), gets stronger (320deg), peaks at head (360deg)
  const sharpConic = `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 200deg, ${currentTheme.tail}15 240deg, ${currentTheme.tail} 310deg, ${currentTheme.bright} 350deg, ${currentTheme.head} 360deg)`;
  
  // 2. Wide Glowing Head: Short, concentrated angle (340deg - 360deg) with blur layer for a wider head aura
  const wideHeadConic = `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 335deg, ${currentTheme.bright} 350deg, ${currentTheme.head} 360deg)`;

  return (
    <div
      className={`group relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-1.5 ${currentTheme.glowShadow} ${className}`}
    >
      {/* Base border outline */}
      <div className={`absolute inset-0 rounded-3xl border ${currentTheme.borderDefault}`} />

      {/* Outer Wide Glowing Head (creates wider glowing head flare) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute -inset-[100%] animate-[spin_4.5s_linear_infinite] blur-[6px] opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          style={{
            background: wideHeadConic,
            animationDuration: `${speedSeconds}s`,
          }}
        />
      </div>

      {/* Inner Tapered Meteor Beam (crisp tail & head) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute -inset-[100%] animate-[spin_4.5s_linear_infinite] opacity-100"
          style={{
            background: sharpConic,
            animationDuration: `${speedSeconds}s`,
          }}
        />
      </div>

      {/* Card Content Container */}
      <div className="relative z-10 h-full w-full rounded-[22px] bg-white p-8">
        {children}
      </div>
    </div>
  );
}
