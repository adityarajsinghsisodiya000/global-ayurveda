import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ contact, onOpenPrivacy, onOpenTerms }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const phone = contact?.phone || '8989656675';
  const whatsapp = contact?.whatsapp || '8989656675';
  const email = contact?.email || 'globalayurvedateamindia@gmail.com';
  const address = contact?.address || 'Freeganj Ujjain 456010 (M.P.)';
  const instagram = contact?.instagram || 'global_ayurveda_team_india';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    const msg = `Namaste Global Ayurveda Team India 🙏%0A%0AI would like to get in touch.%0A%0A👤 *Name:* ${encodeURIComponent(formData.name)}%0A📧 *Email:* ${encodeURIComponent(formData.email)}%0A📱 *Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A💬 *Message:* ${encodeURIComponent(formData.message)}%0A%0ALooking forward to hearing from you.`;
    window.open(`https://wa.me/91${whatsapp}?text=${msg}`, '_blank');

    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }, 4000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/91${whatsapp}?text=Hello%20Global%20Ayurveda%20Team%20India,%20I%20would%20like%20to%20know%20more%20about%20your%20wellness%20products.`, '_blank');
  };

  return (
    <footer id="contact" className="bg-[#05140c] text-[#e5dfd3] pt-16 pb-8 border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#143621]">
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <BrandLogo size="medium" />
              <p className="text-xs sm:text-sm text-[#9cb5a5] font-light leading-relaxed mt-5 max-w-sm">
                We are here to help you on your journey towards better health and natural living through authentic Indian Ayurvedic wisdom and modern science.
              </p>
            </div>
            <div className="mt-6">
              <span className="text-[11px] font-semibold text-[#d4af37] tracking-widest uppercase block mb-3">FOLLOW US</span>
              <div className="flex items-center gap-3">
                <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#0a2617] border border-[#1b482d] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#05140c] transition-all" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <button onClick={openWhatsApp} className="w-9 h-9 rounded-full bg-[#0a2617] border border-[#1b482d] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all" aria-label="WhatsApp">
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Connect With Us */}
          <div className="lg:col-span-3">
            <h3 className="font-serif-title font-bold text-sm tracking-widest text-[#faf5ea] uppercase mb-5 pb-2 border-b border-[#143621]">CONNECT WITH US</h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3 text-[#b5cbbe]">
                <MapPin size={18} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">ADDRESS</strong>
                  <span>{address}</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[#b5cbbe]">
                <Phone size={18} className="text-[#d4af37] flex-shrink-0" />
                <div>
                  <strong className="block text-white font-semibold">PHONE</strong>
                  <a href={`tel:+91${phone}`} className="hover:text-[#d4af37] transition-colors">+91 {phone}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[#b5cbbe]">
                <Mail size={18} className="text-[#d4af37] flex-shrink-0" />
                <div>
                  <strong className="block text-white font-semibold">EMAIL</strong>
                  <a href={`mailto:${email}`} className="hover:text-[#d4af37] transition-colors">{email}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[#b5cbbe]">
                <MessageSquare size={18} className="text-[#25D366] flex-shrink-0" />
                <div>
                  <strong className="block text-white font-semibold">WHATSAPP</strong>
                  <button onClick={openWhatsApp} className="text-[#25D366] hover:underline font-semibold">+91 {whatsapp}</button>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Form */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif-title font-bold text-sm tracking-widest text-[#faf5ea] uppercase mb-5 pb-2 border-b border-[#143621]">SEND US A MESSAGE</h3>
              {submitted ? (
                <div className="bg-[#0b2d1c] border border-[#25d366]/40 rounded-lg p-5 text-center my-4">
                  <CheckCircle2 size={36} className="text-[#25d366] mx-auto mb-2" />
                  <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-[#a3c2af] mt-1">Our Ayurvedic consultant will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`w-full bg-[#0a2315] border ${errors.name ? 'border-red-500' : 'border-[#1b482d]'} rounded px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] transition-colors`} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`w-full bg-[#0a2315] border ${errors.email ? 'border-red-500' : 'border-[#1b482d]'} rounded px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] transition-colors`} />
                      {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input type="tel" name="phone" placeholder="Your Phone" maxLength={10} inputMode="numeric" value={formData.phone} onChange={(e) => { if (/^\d{0,10}$/.test(e.target.value)) handleChange(e); }} className={`w-full bg-[#0a2315] border ${errors.phone ? 'border-red-500' : 'border-[#1b482d]'} rounded px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] transition-colors`} />
                      {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <textarea name="message" rows={3} placeholder="Your Message" value={formData.message} onChange={handleChange} className={`w-full bg-[#0a2315] border ${errors.message ? 'border-red-500' : 'border-[#1b482d]'} rounded px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] transition-colors resize-none`} />
                  </div>
                  <button type="submit" className="w-full bg-[#d4af37] hover:bg-[#e6c24d] text-[#05140c] font-bold text-xs py-2.5 rounded shadow tracking-widest uppercase transition-all flex items-center justify-center gap-2">
                    <span>SEND MESSAGE</span><Send size={14} />
                  </button>
                </form>
              )}
            </div>
            <div className="mt-5 relative h-20 rounded-lg overflow-hidden border border-[#1b482d] bg-[#071c10] flex items-center justify-center p-3">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:12px_12px]" />
              <div className="relative z-10 flex items-center gap-2 bg-[#092215]/90 backdrop-blur-sm border border-[#d4af37]/40 px-3 py-1.5 rounded-full">
                <MapPin size={14} className="text-[#d4af37] animate-bounce" />
                <span className="text-[11px] font-semibold text-white tracking-wider">Global Ayurveda Team India — {address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d9b87]">
          <div>&copy; 2026 Global Ayurveda Team India. All Rights Reserved.</div>
          <div className="flex items-center space-x-4">
            <button onClick={onOpenPrivacy} className="hover:text-[#d4af37] transition-colors">Privacy Policy</button>
            <span>|</span>
            <button onClick={onOpenTerms} className="hover:text-[#d4af37] transition-colors">Terms & Conditions</button>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-6 border-t border-[#143621]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#5c7364]">Designed & Developed by</span>
              <a href="https://github.com/adityarajsinghsisodiya000" target="_blank" rel="noreferrer" className="text-[#d4af37] hover:text-white font-semibold text-xs transition-colors">
                Aditya Raj Singh Sisodiya
              </a>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-[#5c7364]">
              <a href="https://github.com/adityarajsinghsisodiya000" target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition-colors flex items-center gap-1">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <span>|</span>
              <a href="tel:+919352107870" className="hover:text-[#d4af37] transition-colors">+91 93521 07870</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button onClick={openWhatsApp} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group" aria-label="Chat on WhatsApp">
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <MessageSquare size={28} className="fill-current" />
        <span className="absolute right-16 bg-[#071c10] text-[#25D366] border border-[#25D366]/40 text-[11px] font-bold px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat with Us</span>
      </button>
    </footer>
  );
}
