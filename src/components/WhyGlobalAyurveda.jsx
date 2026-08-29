import React from 'react';
import { Leaf, BookOpen, Heart, Award, Users, Landmark } from 'lucide-react';

const pillarIcons = [Leaf, BookOpen, Heart, Award, Users, Landmark];

export default function WhyGlobalAyurveda({ items }) {
  const pillars = (items && items.length > 0) ? items : [
    { title: 'Natural Approach', subtitle: '100% Pure & Organic' },
    { title: 'Ayurvedic Knowledge', subtitle: 'Ancient Classical Texts' },
    { title: 'Holistic Wellness', subtitle: 'Mind, Body & Soul' },
    { title: 'Quality Focus', subtitle: 'GMP & Lab Certified' },
    { title: 'Trusted Guidance', subtitle: 'Expert Practitioner Panel' },
    { title: 'Indian Ayurvedic Heritage', subtitle: '5000 Years of Wisdom' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#faf6ef] text-[#071c10] border-t border-[#e5dfd3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-10 bg-[#d4af37]" />
            <span className="w-2 h-2 rotate-45 bg-[#d4af37]" />
            <span className="h-[1px] w-10 bg-[#d4af37]" />
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#071c10] tracking-wider uppercase">WHY GLOBAL AYURVEDA?</h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {pillars.map((item, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-[#e8e2d5] shadow-sm hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-full bg-[#092215] border-2 border-[#d4af37] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="font-serif-title text-xs sm:text-sm font-bold text-[#071c10] leading-snug mb-1 group-hover:text-[#9a7b1c] transition-colors">{item.title}</h3>
                <span className="text-[10px] sm:text-xs text-[#5c7364] font-medium">{item.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
