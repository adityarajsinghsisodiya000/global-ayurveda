import React from 'react';
import { X, Shield } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#faf6ef] rounded-2xl shadow-2xl overflow-hidden border border-[#d4af37]/40 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#092215] px-6 py-4 flex items-center justify-between border-b border-[#d4af37]/30">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-[#d4af37]" />
            <span className="font-serif-title text-[#faf5ea] font-bold text-lg tracking-wider">
              {isPrivacy ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-[#123824] transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#2c4033] leading-relaxed">
          {isPrivacy ? (
            <>
              <h3 className="font-bold text-sm text-[#071c10] uppercase">1. Information Collection</h3>
              <p>
                Global Ayurveda Team India collects information you voluntarily provide when inquiring about our Ayurvedic wellness products, subscribing to our newsletter, or contacting our Vaidyas.
              </p>

              <h3 className="font-bold text-sm text-[#071c10] uppercase">2. Use of Information</h3>
              <p>
                We use your contact details strictly to respond to inquiries, send wellness guidance, and process product orders. We do not sell or share personal data with unauthorized third parties.
              </p>

              <h3 className="font-bold text-sm text-[#071c10] uppercase">3. Data Protection</h3>
              <p>
                We maintain robust technical security measures to safeguard your personal details against unauthorized access, disclosure, or misuse.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-bold text-sm text-[#071c10] uppercase">1. General Terms</h3>
              <p>
                By accessing Global Ayurveda Team India website and purchasing our wellness products, you agree to comply with our terms and guidelines.
              </p>

              <h3 className="font-bold text-sm text-[#071c10] uppercase">2. Product Disclaimer</h3>
              <p>
                Our Ayurvedic syrups and natural wellness products are intended to support general health and lifestyle wellness. Information provided is for educational purposes and does not replace medical consultation.
              </p>

              <h3 className="font-bold text-sm text-[#071c10] uppercase">3. Intellectual Property</h3>
              <p>
                All trademarks, brand logos, product names (Arogya Active, Nari Active, Joint Active, BetaCell Active), images, and content on this platform are owned by Global Ayurveda Team India.
              </p>
            </>
          )}
        </div>

        <div className="bg-[#f0e9dc] px-6 py-3 border-t border-[#e2d8c3] text-right">
          <button
            onClick={onClose}
            className="bg-[#092215] text-[#d4af37] font-bold text-xs px-5 py-2 rounded shadow"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
