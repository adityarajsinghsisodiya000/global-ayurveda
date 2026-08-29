import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, HeartPulse, BookOpen, Smile } from 'lucide-react';

const featureIcons = [Leaf, ShieldCheck, HeartPulse, BookOpen, Smile];

export default function WhoWeAre({ about, onKnowMoreClick }) {
  const aboutImage = about?.image || '/images/who_we_are_mortar.png';

  return (
    <section id="about" className="py-16 md:py-24 bg-[#faf6ef] text-[#092215] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2 transform transition-transform hover:scale-[1.01] duration-500 max-w-md w-full">
              <img src={aboutImage} alt="Ayurvedic Mortar, Herbs and Traditional Oils" className="w-full h-auto object-cover rounded-xl" />
            </div>
            <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-[#d4af37]/40 -rotate-2 pointer-events-none" />
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#d4af37]" />
              <span className="text-[#9a7b1c] font-bold text-xs uppercase tracking-widest">WHO WE ARE</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#071c10] leading-tight mb-6">
              {about?.title || 'Ayurveda for a Better Way of Life'}
            </h2>

            <p className="text-[#2c4033] text-base md:text-lg leading-relaxed mb-8">
              {about?.description || 'Global Ayurveda Team India is dedicated to promoting authentic Ayurvedic knowledge, natural wellness, and healthy living through traditional wisdom, yoga, meditation and holistic lifestyle guidance.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {(about?.features || []).map((item, idx) => {
                const Icon = featureIcons[idx % featureIcons.length];
                return (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="p-2.5 rounded-xl bg-[#092215] flex-shrink-0 shadow-md group-hover:bg-[#d4af37] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#d4af37] group-hover:text-[#092215] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#071c10] text-sm md:text-base leading-snug mb-1">{item.title}</h3>
                      <p className="text-xs md:text-sm text-[#4a5f51] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={onKnowMoreClick} className="inline-flex items-center gap-2.5 bg-[#092215] hover:bg-[#0e3820] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase group">
              <span>KNOW MORE</span>
              <ArrowRight size={16} className="text-[#d4af37] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
