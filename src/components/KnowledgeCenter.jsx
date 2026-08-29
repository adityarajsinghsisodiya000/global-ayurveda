import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function KnowledgeCenter({ articles, onArticleClick }) {
  const displayArticles = (articles && articles.length > 0) ? articles : [];

  return (
    <section id="knowledge" className="py-16 md:py-24 bg-[#092215] text-[#f4eee3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="gold-line-ornament justify-start mb-2">
              <span className="text-[#d4af37] font-semibold text-xs uppercase tracking-widest">ANCIENT WISDOM & INSIGHTS</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5ea] tracking-wide">AYURVEDA KNOWLEDGE CENTER</h2>
            <p className="text-sm md:text-base text-[#a3c2af] font-light mt-1">Learn, Heal & Live Better</p>
          </div>
          <button onClick={() => onArticleClick && onArticleClick()} className="self-start md:self-auto inline-flex items-center gap-2 bg-[#0c2f1d] hover:bg-[#124229] border border-[#d4af37]/40 text-[#f7e28b] text-xs font-bold px-5 py-2.5 rounded uppercase tracking-wider transition-all duration-300 shadow-md group">
            <span>VIEW ALL ARTICLES</span>
            <ArrowRight size={14} className="text-[#d4af37] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {displayArticles.map((article) => {
            const articleImage = article.image || '/images/card_ayurveda.png';
            return (
              <div key={article.id} onClick={() => onArticleClick && onArticleClick(article)} className="bg-[#0b2b19] border border-[#1b432b] rounded-xl overflow-hidden shadow-lg hover:border-[#d4af37] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img src={articleImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b19] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-2.5 left-2.5 bg-[#06180e]/90 backdrop-blur-sm border border-[#d4af37]/40 text-[#d4af37] text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase">{article.tag}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-hindi text-base font-bold text-[#faf5ea] mb-2 leading-snug group-hover:text-[#d4af37] transition-colors">{article.title}</h3>
                    <p className="text-xs text-[#b8d1c1] leading-relaxed line-clamp-3 font-light">{article.desc}</p>
                  </div>
                </div>
                <div className="p-4 pt-2 border-t border-[#163824] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] group-hover:text-white transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] text-[#7d9b87] flex items-center gap-1">
                    <Clock size={11} />
                    {article.readTime}
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
