import React from 'react';
import { X, Feather, Sun, Heart, Sparkles } from 'lucide-react';

const cardIcons = { ayurveda: Feather, yoga: Sun, meditation: Heart, naturopathy: Sparkles };

export default function AyurvedaModal({ card, onClose }) {
  if (!card) return null;

  const Icon = cardIcons[card.id] || Feather;
  const cardImage = card.image || `/images/card_${card.id}.png`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#faf6ef] rounded-2xl shadow-2xl overflow-hidden border border-[#d4af37]/40 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#092215] px-6 py-4 flex items-center justify-between border-b border-[#d4af37]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0b2b19] border border-[#d4af37] flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#d4af37]" />
            </div>
            <span className="font-serif-title text-[#faf5ea] font-bold text-lg tracking-wider">{card.title}</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-[#123824] transition-colors">
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#071c10]">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={cardImage} alt={card.title} className="w-full h-56 object-cover" />
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-serif-title text-2xl font-bold text-[#071c10] mb-2">{card.title}</h3>
            <p className="text-sm text-[#4a5f51] leading-relaxed">{card.desc}</p>
          </div>

          {/* Full Details */}
          {card.details && (
            <div className="bg-white rounded-xl p-5 border border-[#e5dfd3]">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#9a7b1c] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                About {card.title}
              </h4>
              <p className="text-sm text-[#2c4033] leading-relaxed">{card.details}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#f0e9dc] px-6 py-4 border-t border-[#e2d8c3] flex justify-end">
          <button onClick={onClose} className="bg-[#092215] hover:bg-[#0e3820] text-[#d4af37] font-bold text-xs px-6 py-2.5 rounded-lg shadow transition-all uppercase tracking-wider">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
