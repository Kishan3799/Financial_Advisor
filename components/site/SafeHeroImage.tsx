'use client';

import { useState } from 'react';

interface SafeHeroImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function SafeHeroImage({
  src,
  alt = '',
  className = 'h-full w-full object-cover opacity-35',
}: SafeHeroImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-navy via-[#112240] to-navy opacity-90 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.15),transparent_50%)]" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
