import React from 'react';
import { ArrowRight, Feather, Sun, Heart, Sparkles } from 'lucide-react';

const cardIcons = { ayurveda: Feather, yoga: Sun, meditation: Heart, naturopathy: Sparkles };

const defaultCards = [
  { id: 'ayurveda', title: 'AYURVEDA', desc: 'Traditional Ayurvedic knowledge & wellness.' },
  { id: 'yoga', title: 'YOGA', desc: 'Mind-body balance & healthy lifestyle.' },
  { id: 'meditation', title: 'MEDITATION', desc: 'Mental calmness & inner wellness.' },
  { id: 'naturopathy', title: 'NATUROPATHY', desc: 'Natural lifestyle & wellness practices.' },
];

export default function AyurvedaWellness({ cards, onCardSelect }) {
  const displayCards = (cards && cards.length > 0) ? cards : defaultCards;

  return (
    <section id="ayurveda" className="py-16 md:py-24 bg-[#092215] text-[#f4eee3] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e482f_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="gold-line-ornament mb-3">
            <span className="text-[#d4af37] font-semibold text-xs uppercase tracking-widest">TRADITIONAL DISCIPLINES</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5ea] tracking-wide">AYURVEDA & WELLNESS</h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayCards.map((card) => {
            const Icon = cardIcons[card.id] || Feather;
            const cardImage = card.image || `/images/card_${card.id}.png`;
            return (
              <div key={card.id} onClick={() => onCardSelect && onCardSelect(card)} className="bg-[#0b2b19] border border-[#1d462d] rounded-2xl overflow-hidden shadow-xl hover:border-[#d4af37]/60 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img src={cardImage} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b19] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#071c10] border-2 border-[#d4af37] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#d4af37]" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif-title text-xl font-bold text-[#faf5ea] tracking-wider mb-2 group-hover:text-[#d4af37] transition-colors">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-[#c4d6cb] font-light leading-relaxed mb-4">{card.desc}</p>
                  </div>
                </div>
                <div className="pb-6 text-center border-t border-[#1a3d28] pt-4 mx-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#d4af37] group-hover:text-white transition-colors uppercase">
                    <span>EXPLORE</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
