import React from 'react';
import { ShoppingBag, Sparkles, Leaf } from 'lucide-react';

export default function Hero({ hero, onExploreClick, onProductsClick }) {
  const bgImage = hero?.bgImage || '/images/hero_ayurveda_bg.png';

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-[#071c10]">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Ayurveda Meditation Nature Background" className="w-full h-full object-cover object-center lg:object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06180e] via-[#06180e]/85 to-transparent hidden lg:block w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06180e] via-[#06180e]/80 to-[#06180e]/60 lg:hidden" />
        <div className="absolute inset-0 bg-[#06180e]/30 mix-blend-multiply" />
      </div>

      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4af37]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-2xl lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#d4af37]" />
            <span className="text-[#d4af37] font-semibold text-xs sm:text-sm tracking-widest uppercase">{hero?.tagline || 'ANCIENT WISDOM. MODERN WELLNESS.'}</span>
          </div>

          <h1 className="font-hindi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#faf5ea] leading-tight sm:leading-tight md:leading-snug mb-4 drop-shadow-md">
            {hero?.hindiHeading1 || 'प्रकृति की शक्ति के साथ,'}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7e28b] via-[#d4af37] to-[#eac866]">
              {hero?.hindiHeading2 || 'बेहतर स्वास्थ्य की ओर।'}
            </span>
          </h1>

          <div className="flex items-center gap-3 my-5">
            <div className="h-[2px] w-16 bg-gradient-to-r from-[#d4af37] to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-[#d4af37]" />
            <div className="h-[2px] w-32 bg-gradient-to-r from-[#d4af37]/80 to-transparent" />
          </div>

          <p className="text-base sm:text-lg text-[#e5dfd3] font-light leading-relaxed mb-8 max-w-xl">
            {hero?.subtitle || 'Ancient Ayurvedic wisdom for modern living. Discover natural ways to a healthier, happier you.'}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button onClick={onExploreClick} className="bg-[#0b2b18]/90 hover:bg-[#0e3820] text-[#f7e28b] border border-[#d4af37]/60 font-semibold px-6 py-3.5 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group">
              <Leaf size={18} className="text-[#d4af37] group-hover:rotate-12 transition-transform" />
              <span className="tracking-wider text-xs sm:text-sm uppercase">EXPLORE AYURVEDA</span>
            </button>
            <button onClick={onProductsClick} className="bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold px-6 py-3.5 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group">
              <ShoppingBag size={18} className="text-[#071c10] group-hover:scale-110 transition-transform" />
              <span className="tracking-wider text-xs sm:text-sm uppercase">OUR PRODUCTS</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#faf6ef] to-transparent pointer-events-none opacity-20 lg:opacity-100" />
    </section>
  );
}
