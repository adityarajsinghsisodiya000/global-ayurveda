import React from 'react';
import { X, ShieldCheck, Leaf, MessageSquare } from 'lucide-react';
import ProductCardIllustration from './ProductCardIllustration';

export default function ProductModal({ product, contact, onClose }) {
  if (!product) return null;

  const whatsapp = contact?.whatsapp || '8989656675';

  const handleInquire = () => {
    const message = `Hello Global Ayurveda Team India, I am interested in inquiring about ${product.name} (${product.subtitle}). Please send me details regarding pricing and ordering.`;
    window.open(`https://wa.me/91${whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#faf6ef] rounded-2xl shadow-2xl overflow-hidden border border-[#d4af37]/40 max-h-[90vh] flex flex-col">
        <div className="bg-[#092215] px-6 py-4 flex items-center justify-between border-b border-[#d4af37]/30">
          <div className="flex items-center gap-2">
            <Leaf size={18} className="text-[#d4af37]" />
            <span className="font-serif-title text-[#faf5ea] font-bold text-lg tracking-wider">{product.name}</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-[#123824] transition-colors">
            <X size={22} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-[#071c10]">
          <div className="bg-gradient-to-b from-[#0b2b19] to-[#06180e] rounded-xl p-4 shadow-inner">
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-56 object-contain" />
            ) : (
              <ProductCardIllustration productId={product.id} />
            )}
          </div>

          <div>
            <div className="inline-block bg-[#092215] text-[#d4af37] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2">{product.category}</div>
            <h3 className="font-serif-title text-2xl font-bold text-[#071c10]">{product.name}</h3>
            <p className="text-sm font-semibold text-[#9a7b1c]">{product.subtitle}</p>
            <p className="text-sm text-[#3b4e41] mt-2 leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#071c10] mb-2 flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-[#d4af37]" /> Key Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.keyIngredients?.map((ing, idx) => (
                <span key={idx} className="bg-white border border-[#e2d8c3] text-[#092215] text-xs font-semibold px-3 py-1 rounded-md shadow-sm">🌿 {ing}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-[#e5dfd3]">
            <div>
              <span className="text-[11px] font-bold text-gray-500 uppercase block">Bottle Volume</span>
              <span className="text-sm font-bold text-[#092215]">{product.volume}</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-500 uppercase block">Recommended Dosage</span>
              <span className="text-xs font-semibold text-[#092215]">{product.dosages}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#f0e9dc] px-6 py-4 border-t border-[#e2d8c3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#5c7364] font-medium text-center sm:text-left">Authentic 100% Herbal Formulation</span>
          <button onClick={handleInquire} className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider transition-all">
            <MessageSquare size={16} />
            <span>ORDER VIA WHATSAPP</span>
          </button>
        </div>
      </div>
    </div>
  );
}
