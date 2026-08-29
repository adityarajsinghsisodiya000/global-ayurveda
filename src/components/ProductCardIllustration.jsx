import React from 'react';

export default function ProductCardIllustration({ productId }) {
  // Define custom luxury theme colors for each product box
  const theme = {
    'arogya': {
      bgGrad: ['#5a1c12', '#2a0a05'],
      accent: '#d4af37',
      label: 'AROGYA ACTIVE',
      subLabel: 'Ayurvedic Wellness Syrup',
      motifColor: '#f7e28b',
    },
    'nari': {
      bgGrad: ['#6b1d42', '#360920'],
      accent: '#f2a6c8',
      label: 'NARI ACTIVE',
      subLabel: "Women's Wellness",
      motifColor: '#ffd1e4',
    },
    'joint': {
      bgGrad: ['#123b5c', '#081c2d'],
      accent: '#56ccf2',
      label: 'JOINT ACTIVE',
      subLabel: 'Joint & Mobility Support',
      motifColor: '#97e0f8',
    },
    'betacell': {
      bgGrad: ['#174d2b', '#0a2614'],
      accent: '#6fcf97',
      label: 'BETACELL ACTIVE',
      subLabel: 'Ayurvedic Sugar Support',
      motifColor: '#b7ebcb',
    },
  }[productId] || {
    bgGrad: ['#5a1c12', '#2a0a05'],
    accent: '#d4af37',
    label: 'AYURVEDIC ACTIVE',
    subLabel: 'Natural Wellness Syrup',
    motifColor: '#f7e28b',
  };

  return (
    <div className="relative w-full h-52 sm:h-56 flex items-center justify-center p-4">
      {/* Background Soft Shadow Studio Surface */}
      <div className="absolute bottom-2 w-3/4 h-4 bg-black/10 rounded-full blur-md" />

      {/* Product Display Group: Bottle on left, Box on right */}
      <div className="relative flex items-end justify-center gap-2 sm:gap-4 z-10">
        
        {/* Amber Glass Syrup Bottle */}
        <div className="relative w-14 sm:w-16 h-36 sm:h-40 flex flex-col items-center filter drop-shadow-xl transform -translate-x-1 group-hover:scale-105 transition-transform">
          {/* Black Cap */}
          <div className="w-6 h-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 rounded-t-sm shadow-sm" />
          <div className="w-7 h-1.5 bg-gray-900 border-b border-gray-700" />
          
          {/* Neck */}
          <div className="w-5 h-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950" />

          {/* Bottle Body */}
          <div className="w-full flex-1 bg-gradient-to-r from-amber-950 via-amber-800 to-amber-950 rounded-t-lg rounded-b-md relative overflow-hidden border border-amber-900/40">
            {/* Glass Shine Overlay */}
            <div className="absolute inset-y-0 left-1 w-2 bg-white/20 transform skew-x-12" />
            <div className="absolute inset-y-0 right-1 w-1 bg-white/10 transform skew-x-12" />

            {/* Bottle Label */}
            <div className="absolute inset-x-1 top-4 bottom-4 bg-[#fbf6ec] border border-[#d4af37] p-1 flex flex-col items-center justify-between text-center rounded-[2px]">
              <div className="w-3 h-3 rounded-full bg-[#092215] flex items-center justify-center text-[7px] text-[#d4af37]">
                🌿
              </div>
              <div>
                <span className="block text-[8px] sm:text-[9px] font-bold text-[#092215] leading-none uppercase">
                  {theme.label.split(' ')[0]}
                </span>
                <span className="block text-[6px] text-amber-900 font-semibold uppercase mt-0.5">
                  ACTIVE
                </span>
              </div>
              <span className="text-[5px] text-gray-600 tracking-tighter uppercase">200 ml</span>
            </div>
          </div>
        </div>

        {/* Premium Product Packaging Box */}
        <div className="relative w-20 sm:w-24 h-40 sm:h-44 rounded-md filter drop-shadow-2xl overflow-hidden border border-[#d4af37]/40 flex flex-col justify-between p-2 group-hover:scale-105 transition-transform"
             style={{ background: `linear-gradient(135deg, ${theme.bgGrad[0]}, ${theme.bgGrad[1]})` }}>
          
          {/* Top Gold Foil Stripe */}
          <div className="w-full h-1 bg-gradient-to-r from-[#f7e28b] via-[#d4af37] to-[#f7e28b]" />

          {/* Center Product Graphics */}
          <div className="flex flex-col items-center text-center my-auto">
            {/* Botanical/Meditation Emblem */}
            <div className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center mb-1.5 bg-black/20">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" style={{ color: theme.motifColor }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6 0 2.97 2.16 5.43 5 5.91V14h-2v-2h2v-1.5c0-1.93 1.57-3.5 3.5-3.5H16v2h-1.5c-.83 0-1.5.67-1.5 1.5V12h3v2h-3v3.91c2.84-.48 5-2.94 5-5.91 0-3.31-2.69-6-6-6z" fill={theme.motifColor}/>
              </svg>
            </div>

            <h4 className="font-serif-title font-bold text-[10px] sm:text-[11px] tracking-wider text-white uppercase leading-tight">
              {theme.label}
            </h4>
            <span className="text-[7px] sm:text-[8px] text-amber-200/90 font-light mt-0.5 leading-tight">
              {theme.subLabel}
            </span>
          </div>

          {/* Bottom Gold Foil Badge & Seal */}
          <div className="border-t border-[#d4af37]/30 pt-1 flex items-center justify-between">
            <span className="text-[6px] text-amber-300 font-semibold tracking-wider">100% HERBAL</span>
            <span className="text-[6px] text-white font-mono bg-[#d4af37]/30 px-1 py-0.5 rounded">AYURVEDIC</span>
          </div>
        </div>

      </div>
    </div>
  );
}
