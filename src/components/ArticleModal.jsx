import React from 'react';
import { X, Clock, BookOpen } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  const articleImage = article.image || '/images/card_ayurveda.png';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#faf6ef] rounded-2xl shadow-2xl overflow-hidden border border-[#d4af37]/40 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#092215] px-6 py-4 flex items-center justify-between border-b border-[#d4af37]/30">
          <div className="flex items-center gap-3">
            <BookOpen size={18} className="text-[#d4af37]" />
            <span className="font-serif-title text-[#faf5ea] font-bold text-lg tracking-wider">Knowledge Center</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-[#123824] transition-colors">
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#071c10]">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg relative">
            <img src={articleImage} alt={article.title} className="w-full h-52 object-cover" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#092215]/90 backdrop-blur-sm border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-semibold px-3 py-1 rounded-full uppercase">
                {article.tag}
              </span>
            </div>
          </div>

          {/* Title */}
          <div>
            <h3 className="font-hindi text-xl font-bold text-[#071c10] mb-2 leading-snug">{article.title}</h3>
            <div className="flex items-center gap-2 text-[10px] text-[#7d9b87]">
              <Clock size={12} />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-5 border border-[#e5dfd3]">
            <p className="text-sm text-[#2c4033] leading-relaxed">{article.desc}</p>
          </div>

          {/* Full Article Content */}
          {article.fullText && (
            <div className="bg-white rounded-xl p-5 border border-[#e5dfd3]">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#9a7b1c] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                Full Article
              </h4>
              <p className="text-sm text-[#2c4033] leading-relaxed">{article.fullText}</p>
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
