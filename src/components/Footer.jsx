import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

const defaultServices = [
  'Ayurvedic Consultation',
  'Yoga & Meditation',
  'Naturopathy',
  'Health Check-up Camps',
  'Wellness Programs',
  'Lifestyle Guidance',
];

export default function Footer({ contact, onOpenPrivacy, onOpenTerms }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const phone = contact?.phone || '8989656675';
  const whatsapp = contact?.whatsapp || '8989656675';
  const email = contact?.email || 'globalayurvedateamindia@gmail.com';
  const address = contact?.address || 'Freeganj Ujjain 456010 (M.P.)';
  const instagram = contact?.instagram || 'global_ayurveda_team_india';
  const services = contact?.services || defaultServices;
  const products = contact?.footerProducts || ['Arogya Active', 'Nari Active', 'Joint Active', 'Face Active', 'Hair Active', 'BetaCell Active'];

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
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#143621]">

          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-1">
            <BrandLogo size="medium" />
            <p className="text-xs text-[#9cb5a5] font-light leading-relaxed mt-4">
              We are here to help you on your journey towards better health and natural living through authentic Indian Ayurvedic wisdom and modern science.
            </p>
            <div className="mt-5">
              <span className="text-[10px] font-semibold text-[#d4af37] tracking-widest uppercase block mb-3">Follow Us</span>
              <div className="flex items-center gap-2.5">
                <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0a2617] border border-[#1b482d] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#05140c] transition-all" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <button onClick={openWhatsApp} className="w-8 h-8 rounded-full bg-[#0a2617] border border-[#1b482d] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all" aria-label="WhatsApp">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-serif-title font-bold text-xs tracking-widest text-[#faf5ea] uppercase mb-4 pb-2 border-b border-[#143621]">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'ayurveda' },
                { label: 'Products', id: 'products' },
                { label: 'Knowledge', id: 'knowledge' },
                { label: 'Contact Us', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-xs text-[#b5cbbe] hover:text-[#d4af37] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]/50"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-1">
            <h3 className="font-serif-title font-bold text-xs tracking-widest text-[#faf5ea] uppercase mb-4 pb-2 border-b border-[#143621]">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service, idx) => (
                <li key={idx}>
                  <span className="text-xs text-[#b5cbbe] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]/50"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Products */}
          <div className="lg:col-span-1">
            <h3 className="font-serif-title font-bold text-xs tracking-widest text-[#faf5ea] uppercase mb-4 pb-2 border-b border-[#143621]">Our Products</h3>
            <ul className="space-y-2.5">
              {products.map((product, idx) => (
                <li key={idx}>
                  <span className="text-xs text-[#b5cbbe] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]/50"></span>
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="font-serif-title font-bold text-xs tracking-widest text-[#faf5ea] uppercase mb-4 pb-2 border-b border-[#143621]">Contact Us</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-[#b5cbbe]">
                <MapPin size={14} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-[#b5cbbe]">
                <Phone size={14} className="text-[#d4af37] flex-shrink-0" />
                <a href={`tel:+91${phone}`} className="hover:text-[#d4af37] transition-colors">+91 {phone}</a>
              </li>
              <li className="flex items-center gap-2.5 text-[#b5cbbe]">
                <Mail size={14} className="text-[#d4af37] flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-[#d4af37] transition-colors break-all">{email}</a>
              </li>
              <li className="flex items-center gap-2.5 text-[#b5cbbe]">
                <svg className="w-3.5 h-3.5 flex-shrink-0 fill-current text-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <button onClick={openWhatsApp} className="text-[#25D366] hover:underline font-semibold">+91 {whatsapp}</button>
              </li>
              <li className="flex items-start gap-2.5 text-[#b5cbbe]">
                <span className="text-[#d4af37] flex-shrink-0 mt-0.5 text-[10px]">🕐</span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <button onClick={() => { const msg = `Namaste Global Ayurveda Team India 🙏%0A%0AI would like to book an Ayurvedic consultation.%0A%0APlease share the details for appointment scheduling.%0A%0ALooking forward to your guidance.`; window.open(`https://wa.me/91${whatsapp}?text=${msg}`, '_blank'); }} className="mt-4 w-full bg-[#092215] hover:bg-[#0e3820] border border-[#d4af37]/50 text-[#d4af37] font-bold text-[10px] py-2 rounded shadow tracking-widest uppercase transition-all flex items-center justify-center gap-2">
              <svg className="w-3 h-3 fill-current text-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>BOOK CONSULTATION</span>
            </button>
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
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="absolute right-16 bg-[#071c10] text-[#25D366] border border-[#25D366]/40 text-[11px] font-bold px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat with Us</span>
      </button>
    </footer>
  );
}
