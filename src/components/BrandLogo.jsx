import React from 'react';

export default function BrandLogo({ size = 'medium', lightMode = false, logo = '' }) {
  const isSmall = size === 'small';
  
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Logo Image or SVG Icon */}
      <div className="relative flex-shrink-0">
        {logo ? (
          <img 
            src={logo} 
            alt="Global Ayurveda Team India Logo" 
            className={isSmall ? "w-10 h-10 object-contain rounded-full" : "w-12 h-12 md:w-14 md:h-14 object-contain rounded-full"}
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className={isSmall ? "w-10 h-10" : "w-12 h-12 md:w-14 md:h-14"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 20 75 Q 50 95 80 75" stroke="#d4af37" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M 15 65 Q 50 90 85 65" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="2 3" fill="none" />
            <path d="M 50 20 C 38 40 45 65 50 72 C 55 65 62 40 50 20 Z" fill="url(#goldGradient)" stroke="#eac866" strokeWidth="1" />
            <path d="M 50 35 C 30 45 28 65 34 70 C 42 68 48 55 50 35 Z" fill="url(#goldGradient)" opacity="0.9" />
            <path d="M 50 35 C 70 45 72 65 66 70 C 58 68 52 55 50 35 Z" fill="url(#goldGradient)" opacity="0.9" />
            <path d="M 45 50 C 22 55 18 70 24 73 C 32 72 40 62 45 50 Z" fill="url(#goldGradient)" opacity="0.75" />
            <path d="M 55 50 C 78 55 82 70 76 73 C 68 72 60 62 55 50 Z" fill="url(#goldGradient)" opacity="0.75" />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7e28b" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#9a7b1c" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col items-center text-center">
        <span
          className={`font-serif-title font-bold tracking-wider leading-none ${
            lightMode ? 'text-[#092215]' : 'text-white'
          } ${isSmall ? 'text-base' : 'text-lg md:text-xl'}`}
        >
          GLOBAL AYURVEDA
        </span>
        
        {/* Team India Tagline */}
        <div className="flex items-center gap-1.5 my-0.5">
          <span className="h-[1px] w-3 bg-[#d4af37]"></span>
          <span className="text-[#d4af37] font-semibold text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
            TEAM INDIA
          </span>
          <span className="h-[1px] w-3 bg-[#d4af37]"></span>
        </div>

        <span
          className={`text-[9px] md:text-[10px] tracking-wide ${
            lightMode ? 'text-emerald-800' : 'text-emerald-200/80'
          }`}
        >
          NATURAL HEALING • GLOBAL WELLNESS
        </span>
      </div>
    </div>
  );
}
