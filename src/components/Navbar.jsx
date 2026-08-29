import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ activeSection, setActiveSection, logo = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT US', id: 'about' },
    { name: 'AYURVEDA & WELLNESS', id: 'ayurveda' },
    { name: 'PRODUCTS', id: 'products' },
    { name: 'KNOWLEDGE', id: 'knowledge' },
    { name: 'CONTACT', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#06180e]/95 backdrop-blur-md py-2.5 shadow-xl border-b border-[#d4af37]/20' : 'bg-[#071c10] py-3.5 border-b border-[#d4af37]/15'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div onClick={() => scrollToSection('home')} className="cursor-pointer">
          <BrandLogo size="medium" logo={logo} />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative font-semibold text-xs xl:text-sm tracking-wider transition-colors duration-200 py-1 ${isActive ? 'text-[#d4af37]' : 'text-[#e5dfd3] hover:text-[#d4af37]'}`}>
                {item.name}
                {isActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37] rounded-full" />}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <button onClick={() => scrollToSection('contact')} className="bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-xs px-5 py-2.5 rounded shadow-md transition-all duration-200 transform hover:-translate-y-0.5 tracking-wider uppercase flex items-center gap-2">
            <span>GET IN TOUCH</span>
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button onClick={() => scrollToSection('contact')} className="sm:flex hidden bg-[#d4af37] text-[#071c10] font-bold text-[11px] px-3 py-1.5 rounded tracking-wider uppercase">
            TOUCH
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#d4af37] hover:text-white rounded-lg focus:outline-none" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#071c10] border-b border-[#d4af37]/30 shadow-2xl px-6 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-semibold tracking-wider transition-colors ${activeSection === item.id ? 'bg-[#0e301e] text-[#d4af37] border-l-4 border-[#d4af37]' : 'text-[#e5dfd3] hover:bg-[#0c2819] hover:text-[#d4af37]'}`}>
                <span>{item.name}</span>
                <ChevronRight size={16} className="text-[#d4af37]" />
              </button>
            ))}
            <div className="pt-4 border-t border-[#d4af37]/20">
              <button onClick={() => scrollToSection('contact')} className="w-full bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-sm py-3 rounded text-center tracking-wider uppercase shadow-lg flex items-center justify-center gap-2">
                <PhoneCall size={16} />
                <span>GET IN TOUCH</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
