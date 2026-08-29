import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCardIllustration from './ProductCardIllustration';

export default function Products({ productsList, onSelectProduct, onViewAllClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = productsList || [];

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  return (
    <section id="products" className="py-16 md:py-24 bg-[#faf6ef] text-[#071c10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#d4af37]" />
              <span className="text-[#9a7b1c] font-bold text-xs uppercase tracking-widest">PREMIUM FORMULATIONS</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#071c10] tracking-wide">OUR PRODUCTS</h2>
            <p className="text-sm md:text-base text-[#4a5f51] font-light mt-1">Pure Ayurveda formulations for a healthier you and your family.</p>
          </div>
          <button onClick={onViewAllClick} className="self-start md:self-auto inline-flex items-center gap-2 bg-[#092215] hover:bg-[#0e3820] text-white text-xs font-bold px-5 py-2.5 rounded uppercase tracking-wider transition-all duration-300 shadow-md group">
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight size={14} className="text-[#d4af37] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <button onClick={handlePrev} className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#d4af37] text-[#092215] items-center justify-center shadow-lg hover:bg-[#092215] hover:text-[#d4af37] transition-all" aria-label="Previous product">
            <ChevronLeft size={22} />
          </button>
          <button onClick={handleNext} className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#d4af37] text-[#092215] items-center justify-center shadow-lg hover:bg-[#092215] hover:text-[#d4af37] transition-all" aria-label="Next product">
            <ChevronRight size={22} />
          </button>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} onClick={() => onSelectProduct(product)} className="bg-white border border-[#e5dfd3] rounded-2xl p-5 shadow-md hover:shadow-2xl hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="bg-[#faf6ef] rounded-xl mb-4 overflow-hidden group-hover:bg-[#f5eedf] transition-colors">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-48 object-contain p-2" />
                    ) : (
                      <ProductCardIllustration productId={product.id} />
                    )}
                  </div>
                  <h3 className="font-serif-title text-lg font-bold text-[#071c10] text-center mb-1 group-hover:text-[#9a7b1c] transition-colors">{product.name}</h3>
                  <p className="text-xs text-[#5c7364] text-center font-medium mb-4">{product.subtitle}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9a7b1c] group-hover:text-[#092215] transition-colors uppercase tracking-wider">
                    <span>VIEW PRODUCT</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="lg:hidden">
            {products.length > 0 && (
              <div className="bg-white border border-[#e5dfd3] rounded-2xl p-6 shadow-xl max-w-sm mx-auto">
                <div className="bg-[#faf6ef] rounded-xl mb-4 p-2">
                  {products[currentIndex]?.image ? (
                    <img src={products[currentIndex].image} alt={products[currentIndex].name} className="w-full h-48 object-contain" />
                  ) : (
                    <ProductCardIllustration productId={products[currentIndex]?.id} />
                  )}
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#071c10] text-center mb-1">{products[currentIndex]?.name}</h3>
                <p className="text-xs text-[#5c7364] text-center font-medium mb-3">{products[currentIndex]?.subtitle}</p>
                <p className="text-xs text-[#4a5f51] text-center leading-relaxed mb-5">{products[currentIndex]?.description}</p>
                <button onClick={() => onSelectProduct(products[currentIndex])} className="w-full bg-[#092215] hover:bg-[#0e3820] text-white text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-2 uppercase tracking-wider shadow">
                  <span>VIEW PRODUCT DETAILS</span>
                  <ArrowRight size={14} className="text-[#d4af37]" />
                </button>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <button onClick={handlePrev} className="p-2 rounded-full bg-[#faf6ef] text-[#092215] border border-[#d4af37]"><ChevronLeft size={18} /></button>
                  <div className="flex items-center gap-2">
                    {products.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === idx ? 'bg-[#d4af37] w-6' : 'bg-gray-300 hover:bg-gray-400'}`} />
                    ))}
                  </div>
                  <button onClick={handleNext} className="p-2 rounded-full bg-[#faf6ef] text-[#092215] border border-[#d4af37]"><ChevronRight size={18} /></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
