import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataProvider, useData } from './DataContext';
import {
  LogOut, LayoutDashboard, Phone,
  Image, FileText, Settings, Save, RotateCcw,
  Plus, Trash2, Eye, EyeOff, Lock, Menu, X,
  Package, BookOpen, Award, Edit3, Upload, Leaf
} from 'lucide-react';

function ImageUploader({ label, currentImage, onUpload, onRemove }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => onUpload(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-1.5">{label}</label>
      {currentImage ? (
        <div className="relative inline-block">
          <img src={currentImage} alt="" className="w-full h-32 object-contain bg-[#071c10] rounded-lg border border-[#1d462d]" />
          <button onClick={onRemove} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600">×</button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-32 bg-[#071c10] border-2 border-dashed border-[#1d462d] rounded-lg cursor-pointer hover:border-[#d4af37]/50 transition-colors">
          <Upload size={20} className="text-[#7d9b87] mb-2" />
          <span className="text-xs text-[#7d9b87]">Click to upload image</span>
          <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </label>
      )}
    </div>
  );
}

function DashboardInner() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data, updateData, resetData } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('globalAyurveda_auth')) {
      navigate('/dashboard/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('globalAyurveda_auth');
    navigate('/dashboard/login');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
    { id: 'contact', label: 'Contact Info', icon: <Phone size={18} /> },
    { id: 'hero', label: 'Hero Section', icon: <Image size={18} /> },
    { id: 'about', label: 'About Us', icon: <FileText size={18} /> },
    { id: 'ayurveda', label: 'Ayurveda Cards', icon: <Leaf size={18} /> },
    { id: 'products', label: 'Products', icon: <Package size={18} /> },
    { id: 'articles', label: 'Articles', icon: <BookOpen size={18} /> },
    { id: 'whyus', label: 'Why Us', icon: <Award size={18} /> },
    { id: 'account', label: 'Account', icon: <Settings size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#071c10] text-[#f4eee3] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#040f09]/95 backdrop-blur-md border-r border-[#1d462d]/60 fixed h-full z-30">
        <div className="p-5 border-b border-[#1d462d]">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#0b2b19] border border-[#d4af37] flex items-center justify-center">
              <span className="text-[#d4af37] font-serif-title font-bold text-sm">GA</span>
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-wider">GLOBAL AYURVEDA</h1>
              <p className="text-[9px] text-[#d4af37] tracking-widest uppercase">Admin Dashboard</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-5 py-3 text-sm transition-all ${activeTab === tab.id ? 'bg-[#0b2b19] text-[#d4af37] border-r-2 border-[#d4af37]' : 'text-[#7d9b87] hover:text-white hover:bg-[#0a1f14]'}`}>
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-[#1d462d]">
          <a href="/" className="flex items-center gap-2 text-xs text-[#7d9b87] hover:text-[#d4af37] transition-colors mb-3"><Eye size={14} /><span>View Website</span></a>
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 bg-[#1a0a0a] border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-semibold py-2.5 rounded-lg transition-all">
            <LogOut size={14} /> LOGOUT
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#05140c] border-b border-[#1d462d] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0b2b19] border border-[#d4af37] flex items-center justify-center">
            <span className="text-[#d4af37] font-serif-title font-bold text-xs">GA</span>
          </div>
          <span className="text-sm font-bold text-white tracking-wider">DASHBOARD</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#d4af37] hover:bg-[#0b2b19] rounded-lg transition-colors">
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-64 h-full bg-[#05140c] border-r border-[#1d462d] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-5 border-b border-[#1d462d] flex items-center justify-between">
              <span className="text-sm font-bold text-white tracking-wider">MENU</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
            </div>
            <nav className="flex-1 py-3 overflow-y-auto">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-5 py-3 text-sm transition-all ${activeTab === tab.id ? 'bg-[#0b2b19] text-[#d4af37] border-r-2 border-[#d4af37]' : 'text-[#7d9b87] hover:text-white hover:bg-[#0a1f14]'}`}>
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-[#1d462d] space-y-2">
              <a href="/" className="flex items-center gap-2 text-xs text-[#7d9b87] hover:text-[#d4af37] transition-colors"><Eye size={14} /><span>View Website</span></a>
              <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 bg-[#1a0a0a] border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-semibold py-2.5 rounded-lg transition-all"><LogOut size={14} /> LOGOUT</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 min-h-screen relative overflow-hidden">
        {/* Ayurveda Background */}
        <div className="fixed inset-0 lg:left-64 -z-10">
          <div className="absolute inset-0 bg-[#06180e]" />
          <img src="/images/hero_ayurveda_bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15]" style={{ filter: 'blur(2px)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071c10]/90 via-[#06180e]/70 to-[#0a2e1a]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,#0e3820_0%,transparent_50%)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,#1a5c35_0%,transparent_45%)] opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,#0b2b19_0%,transparent_50%)] opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e482f_1px,transparent_1px)] [background-size:18px_18px] opacity-25" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4af37]/[0.03] blur-[100px] rounded-full" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/[0.05] blur-[80px] rounded-full" />
        </div>

        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
          {activeTab === 'overview' && <OverviewTab data={data} />}
          {activeTab === 'contact' && <ContactTab data={data} updateData={updateData} />}
          {activeTab === 'hero' && <HeroTab data={data} updateData={updateData} />}
          {activeTab === 'about' && <AboutTab data={data} updateData={updateData} />}
          {activeTab === 'ayurveda' && <AyurvedaTab data={data} updateData={updateData} />}
          {activeTab === 'products' && <ProductsTab data={data} updateData={updateData} />}
          {activeTab === 'articles' && <ArticlesTab data={data} updateData={updateData} />}
          {activeTab === 'whyus' && <WhyUsTab data={data} updateData={updateData} />}
          {activeTab === 'account' && <AccountTab resetData={resetData} />}
        </div>
      </main>
    </div>
  );
}

function Card({ children, className = '' }) {
  return <div className={`bg-[#0b2b19] border border-[#1d462d] rounded-xl p-4 sm:p-6 ${className}`}>{children}</div>;
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#d4af37]">{icon}</span>
        <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest">{subtitle}</span>
      </div>
      <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-white tracking-wider">{title}</h2>
    </div>
  );
}

function InputField({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-1.5">{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full bg-[#071c10] border border-[#1d462d] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all" />
    </div>
  );
}

function TextareaField({ label, value, onChange, rows = 3 }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-1.5">{label}</label>
      <textarea value={value} onChange={onChange} rows={rows} className="w-full bg-[#071c10] border border-[#1d462d] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all resize-none" />
    </div>
  );
}

function SaveButton({ onClick, label = 'Save Changes' }) {
  const [saved, setSaved] = useState(false);
  const handleClick = () => { onClick(); setSaved(true); setTimeout(() => setSaved(false), 2000); };
  return (
    <button onClick={handleClick} className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-xs px-5 py-2.5 rounded-lg shadow-lg transition-all duration-300 uppercase tracking-wider">
      {saved ? (<><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Saved!</>) : (<><Save size={14} /> {label}</>)}
    </button>
  );
}

function OverviewTab({ data }) {
  return (
    <div>
      <SectionTitle icon={<LayoutDashboard size={20} />} title="Dashboard Overview" subtitle="Welcome back" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center"><Package size={18} className="text-[#d4af37]" /></div><div><p className="text-2xl font-bold text-white">{data.products?.length || 0}</p><p className="text-xs text-[#7d9b87]">Products</p></div></div></Card>
        <Card><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center"><BookOpen size={18} className="text-[#d4af37]" /></div><div><p className="text-2xl font-bold text-white">{data.articles?.length || 0}</p><p className="text-xs text-[#7d9b87]">Articles</p></div></div></Card>
        <Card><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center"><Award size={18} className="text-[#d4af37]" /></div><div><p className="text-2xl font-bold text-white">{data.whyUs?.length || 0}</p><p className="text-xs text-[#7d9b87]">Why Us Points</p></div></div></Card>
      </div>
    </div>
  );
}

function ContactTab({ data, updateData }) {
  return (
    <div>
      <SectionTitle icon={<Phone size={20} />} title="Contact Information" subtitle="Manage contact details" />
      <Card>
        <div className="space-y-4">
          <InputField label="Phone Number" value={data.contact?.phone || ''} onChange={(e) => updateData('contact.phone', e.target.value)} />
          <InputField label="WhatsApp Number" value={data.contact?.whatsapp || ''} onChange={(e) => updateData('contact.whatsapp', e.target.value)} />
          <InputField label="Email Address" type="email" value={data.contact?.email || ''} onChange={(e) => updateData('contact.email', e.target.value)} />
          <InputField label="Address" value={data.contact?.address || ''} onChange={(e) => updateData('contact.address', e.target.value)} />
          <InputField label="Instagram Username" value={data.contact?.instagram || ''} onChange={(e) => updateData('contact.instagram', e.target.value)} />
        </div>
        <div className="mt-6"><SaveButton onClick={() => {}} /></div>
      </Card>
    </div>
  );
}

function HeroTab({ data, updateData }) {
  const [confirmReset, setConfirmReset] = useState(false);
  const handleReset = () => {
    updateData('hero', {
      tagline: 'ANCIENT WISDOM. MODERN WELLNESS.',
      hindiHeading1: 'प्रकृति की शक्ति के साथ,',
      hindiHeading2: 'बेहतर स्वास्थ्य की ओर।',
      subtitle: 'Ancient Ayurvedic wisdom for modern living. Discover natural ways to a healthier, happier you.',
      bgImage: '',
    });
    setConfirmReset(false);
  };

  return (
    <div>
      <SectionTitle icon={<Image size={20} />} title="Hero Section" subtitle="Homepage banner content" />
      <Card>
        <div className="space-y-4">
          <InputField label="Tagline" value={data.hero?.tagline || ''} onChange={(e) => updateData('hero.tagline', e.target.value)} />
          <InputField label="Hindi Heading Line 1" value={data.hero?.hindiHeading1 || ''} onChange={(e) => updateData('hero.hindiHeading1', e.target.value)} />
          <InputField label="Hindi Heading Line 2" value={data.hero?.hindiHeading2 || ''} onChange={(e) => updateData('hero.hindiHeading2', e.target.value)} />
          <TextareaField label="Subtitle" value={data.hero?.subtitle || ''} onChange={(e) => updateData('hero.subtitle', e.target.value)} />
          <ImageUploader label="Hero Background Image" currentImage={data.hero?.bgImage} onUpload={(img) => updateData('hero.bgImage', img)} onRemove={() => updateData('hero.bgImage', '')} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <SaveButton onClick={() => {}} />
          {confirmReset ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-red-400 font-semibold">Reset to default?</span>
              <button onClick={handleReset} className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-3 py-2 rounded-lg transition-all">Yes</button>
              <button onClick={() => setConfirmReset(false)} className="bg-[#1d462d] hover:bg-[#2a5a3e] text-white font-bold text-xs px-3 py-2 rounded-lg transition-all">No</button>
            </div>
          ) : (
            <button onClick={() => setConfirmReset(true)} className="inline-flex items-center gap-2 bg-[#1a0a0a] border border-red-500/30 text-red-400 hover:bg-red-500/10 font-bold text-xs px-4 py-2.5 rounded-lg transition-all uppercase tracking-wider">
              <RotateCcw size={14} /> Reset to Default
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}

function AboutTab({ data, updateData }) {
  const [confirmReset, setConfirmReset] = useState(false);
  const addFeature = () => { updateData('about.features', [...(data.about?.features || []), { title: 'New Feature', desc: 'Description' }]); };
  const removeFeature = (idx) => { updateData('about.features', data.about.features.filter((_, i) => i !== idx)); };
  const updateFeature = (idx, key, value) => { const features = [...data.about.features]; features[idx] = { ...features[idx], [key]: value }; updateData('about.features', features); };

  const handleReset = () => {
    updateData('about', {
      title: 'Ayurveda for a Better Way of Life',
      description: 'Global Ayurveda Team India is dedicated to promoting authentic Ayurvedic knowledge, natural wellness, and healthy living through traditional wisdom, yoga, meditation and holistic lifestyle guidance.',
      image: '',
      features: [
        { title: 'Authentic Ayurvedic Approach', desc: 'Based on classical Ayurvedic principles & time-tested traditions.' },
        { title: 'Natural Wellness', desc: 'Pure, natural & safe solutions for everyday wellness.' },
        { title: 'Yoga & Meditation', desc: 'For physical health, mental peace & emotional balance.' },
        { title: 'Traditional Knowledge', desc: 'Rooted in ancient wisdom, practiced for modern lives.' },
        { title: 'Healthy Lifestyle Guidance', desc: 'Daily routines, diet & habits for holistic well-being.' },
      ],
    });
    setConfirmReset(false);
  };

  return (
    <div>
      <SectionTitle icon={<FileText size={20} />} title="About Us Section" subtitle="About section content" />
      <Card>
        <div className="space-y-4">
          <InputField label="Title" value={data.about?.title || ''} onChange={(e) => updateData('about.title', e.target.value)} />
          <TextareaField label="Description" value={data.about?.description || ''} onChange={(e) => updateData('about.description', e.target.value)} />
          <ImageUploader label="About Section Image" currentImage={data.about?.image} onUpload={(img) => updateData('about.image', img)} onRemove={() => updateData('about.image', '')} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <SaveButton onClick={() => {}} />
          {confirmReset ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-red-400 font-semibold">Reset to default?</span>
              <button onClick={handleReset} className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-3 py-2 rounded-lg transition-all">Yes</button>
              <button onClick={() => setConfirmReset(false)} className="bg-[#1d462d] hover:bg-[#2a5a3e] text-white font-bold text-xs px-3 py-2 rounded-lg transition-all">No</button>
            </div>
          ) : (
            <button onClick={() => setConfirmReset(true)} className="inline-flex items-center gap-2 bg-[#1a0a0a] border border-red-500/30 text-red-400 hover:bg-red-500/10 font-bold text-xs px-4 py-2.5 rounded-lg transition-all uppercase tracking-wider">
              <RotateCcw size={14} /> Reset to Default
            </button>
          )}
        </div>
      </Card>
      <Card className="mt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm text-white uppercase tracking-wider">Features</h3>
          <button onClick={addFeature} className="flex items-center gap-1 text-xs text-[#d4af37] hover:text-white transition-colors font-semibold"><Plus size={14} /> Add</button>
        </div>
        <div className="space-y-3">
          {data.about?.features?.map((feat, idx) => (
            <div key={idx} className="bg-[#071c10] border border-[#1d462d] rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#7d9b87]">Feature {idx + 1}</span>
                <button onClick={() => removeFeature(idx)} className="text-red-400 hover:text-red-300 transition-colors"><Trash2 size={14} /></button>
              </div>
              <input value={feat.title} onChange={(e) => updateFeature(idx, 'title', e.target.value)} className="w-full bg-[#0b2b19] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Title" />
              <input value={feat.desc} onChange={(e) => updateFeature(idx, 'desc', e.target.value)} className="w-full bg-[#0b2b19] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Description" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function AyurvedaTab({ data, updateData }) {
  const addCard = () => {
    updateData('ayurvedaCards', [...(data.ayurvedaCards || []), { id: 'card_' + Date.now(), title: 'NEW CARD', desc: 'Description', details: 'Details', image: '' }]);
  };
  const removeCard = (idx) => { updateData('ayurvedaCards', data.ayurvedaCards.filter((_, i) => i !== idx)); };
  const updateCard = (idx, key, value) => { const cards = [...data.ayurvedaCards]; cards[idx] = { ...cards[idx], [key]: value }; updateData('ayurvedaCards', cards); };

  return (
    <div>
      <SectionTitle icon={<Leaf size={20} />} title="Ayurveda & Wellness Cards" subtitle="Manage wellness discipline cards" />
      <div className="mb-4">
        <button onClick={addCard} className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-xs px-4 py-2.5 rounded-lg shadow transition-all uppercase tracking-wider"><Plus size={14} /> Add Card</button>
      </div>
      <div className="space-y-3">
        {data.ayurvedaCards?.map((card, idx) => (
          <Card key={card.id}>
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InputField label="Title" value={card.title} onChange={(e) => updateCard(idx, 'title', e.target.value)} />
                <InputField label="Short Description" value={card.desc} onChange={(e) => updateCard(idx, 'desc', e.target.value)} />
              </div>
              <TextareaField label="Full Details" value={card.details || ''} onChange={(e) => updateCard(idx, 'details', e.target.value)} rows={2} />
              <ImageUploader label="Card Image" currentImage={card.image} onUpload={(img) => updateCard(idx, 'image', img)} onRemove={() => updateCard(idx, 'image', '')} />
              <div className="flex justify-end">
                <button onClick={() => removeCard(idx)} className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors"><Trash2 size={14} /> Remove</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProductsTab({ data, updateData }) {
  const [editingIdx, setEditingIdx] = useState(null);
  const addProduct = () => {
    const newProduct = { id: 'product_' + Date.now(), name: 'New Product', subtitle: 'Subtitle', category: 'Category', description: 'Description', volume: '200 ml', dosages: '10-15 ml twice daily', keyIngredients: [], image: '' };
    updateData('products', [...(data.products || []), newProduct]);
    setEditingIdx((data.products || []).length);
  };
  const removeProduct = (idx) => { updateData('products', data.products.filter((_, i) => i !== idx)); setEditingIdx(null); };
  const updateProduct = (idx, key, value) => { const products = [...data.products]; products[idx] = { ...products[idx], [key]: value }; updateData('products', products); };

  return (
    <div>
      <SectionTitle icon={<Package size={20} />} title="Products" subtitle="Manage your products" />
      <div className="mb-4">
        <button onClick={addProduct} className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-xs px-4 py-2.5 rounded-lg shadow transition-all uppercase tracking-wider"><Plus size={14} /> Add Product</button>
      </div>
      <div className="space-y-3">
        {data.products?.map((product, idx) => (
          <Card key={product.id}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-sm text-white">{product.name}</h3>
                <p className="text-xs text-[#7d9b87]">{product.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setEditingIdx(editingIdx === idx ? null : idx)} className="p-2 text-[#d4af37] hover:bg-[#071c10] rounded-lg transition-colors"><Edit3 size={14} /></button>
                <button onClick={() => removeProduct(idx)} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"><Trash2 size={14} /></button>
              </div>
            </div>
            {editingIdx === idx && (
              <div className="space-y-3 pt-3 border-t border-[#1d462d]">
                <ImageUploader label="Product Image" currentImage={product.image} onUpload={(img) => updateProduct(idx, 'image', img)} onRemove={() => updateProduct(idx, 'image', '')} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input value={product.name} onChange={(e) => updateProduct(idx, 'name', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Product Name" />
                  <input value={product.subtitle} onChange={(e) => updateProduct(idx, 'subtitle', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Subtitle" />
                </div>
                <input value={product.category} onChange={(e) => updateProduct(idx, 'category', e.target.value)} className="w-full bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Category" />
                <textarea value={product.description} onChange={(e) => updateProduct(idx, 'description', e.target.value)} rows={2} className="w-full bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none" placeholder="Description" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input value={product.volume} onChange={(e) => updateProduct(idx, 'volume', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Volume" />
                  <input value={product.dosages} onChange={(e) => updateProduct(idx, 'dosages', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Dosage" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-1.5">Ingredients (comma separated)</label>
                  <input value={product.keyIngredients?.join(', ') || ''} onChange={(e) => updateProduct(idx, 'keyIngredients', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} className="w-full bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Ashwagandha, Giloy, Amla" />
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

function ArticlesTab({ data, updateData }) {
  const addArticle = () => { updateData('articles', [...(data.articles || []), { id: Date.now(), title: 'New Article Title', desc: 'Article description', fullText: 'Full article content here...', tag: 'General', readTime: '4 min read', image: '' }]); };
  const removeArticle = (idx) => { updateData('articles', data.articles.filter((_, i) => i !== idx)); };
  const updateArticle = (idx, key, value) => { const articles = [...data.articles]; articles[idx] = { ...articles[idx], [key]: value }; updateData('articles', articles); };

  return (
    <div>
      <SectionTitle icon={<BookOpen size={20} />} title="Knowledge Center" subtitle="Manage articles" />
      <div className="mb-4">
        <button onClick={addArticle} className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-xs px-4 py-2.5 rounded-lg shadow transition-all uppercase tracking-wider"><Plus size={14} /> Add Article</button>
      </div>
      <div className="space-y-3">
        {data.articles?.map((article, idx) => (
          <Card key={article.id}>
            <div className="space-y-3">
              <ImageUploader label="Article Image" currentImage={article.image} onUpload={(img) => updateArticle(idx, 'image', img)} onRemove={() => updateArticle(idx, 'image', '')} />
              <input value={article.title} onChange={(e) => updateArticle(idx, 'title', e.target.value)} className="w-full bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white font-semibold focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Title" />
              <textarea value={article.desc} onChange={(e) => updateArticle(idx, 'desc', e.target.value)} rows={2} className="w-full bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none" placeholder="Description" />
              <div className="grid grid-cols-2 gap-2">
                <input value={article.tag} onChange={(e) => updateArticle(idx, 'tag', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Tag" />
                <input value={article.readTime} onChange={(e) => updateArticle(idx, 'readTime', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Read Time" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-1.5">Full Article Content</label>
                <textarea value={article.fullText || ''} onChange={(e) => updateArticle(idx, 'fullText', e.target.value)} rows={3} className="w-full bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none" placeholder="Full article content for the modal..." />
              </div>
              <div className="flex justify-end">
                <button onClick={() => removeArticle(idx)} className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors"><Trash2 size={14} /> Remove</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function WhyUsTab({ data, updateData }) {
  const addItem = () => { updateData('whyUs', [...(data.whyUs || []), { title: 'New Point', subtitle: 'Subtitle' }]); };
  const removeItem = (idx) => { updateData('whyUs', data.whyUs.filter((_, i) => i !== idx)); };
  const updateItem = (idx, key, value) => { const items = [...data.whyUs]; items[idx] = { ...items[idx], [key]: value }; updateData('whyUs', items); };

  return (
    <div>
      <SectionTitle icon={<Award size={20} />} title="Why Global Ayurveda" subtitle="Trust pillars section" />
      <div className="mb-4">
        <button onClick={addItem} className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-xs px-4 py-2.5 rounded-lg shadow transition-all uppercase tracking-wider"><Plus size={14} /> Add Point</button>
      </div>
      <div className="space-y-3">
        {data.whyUs?.map((item, idx) => (
          <Card key={idx}>
            <div className="flex items-center gap-3">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input value={item.title} onChange={(e) => updateItem(idx, 'title', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white font-semibold focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Title" />
                <input value={item.subtitle} onChange={(e) => updateItem(idx, 'subtitle', e.target.value)} className="bg-[#071c10] border border-[#1d462d] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Subtitle" />
              </div>
              <button onClick={() => removeItem(idx)} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors flex-shrink-0"><Trash2 size={14} /></button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AccountTab({ resetData }) {
  const [showPass, setShowPass] = useState(false);
  const [currentPass, setCurrentPass] = useState('');
  const [newUser, setNewUser] = useState('');
  const [newPass, setNewPass] = useState('');
  const [msg, setMsg] = useState('');
  const [resetConfirm, setResetConfirm] = useState(false);

  const handleChangeCredentials = () => {
    const savedPass = localStorage.getItem('globalAyurveda_pass') || 'globalayurveda@6675';
    if (currentPass !== savedPass) { setMsg({ type: 'error', text: 'Current password is incorrect' }); return; }
    if (newUser) localStorage.setItem('globalAyurveda_user', newUser);
    if (newPass) localStorage.setItem('globalAyurveda_pass', newPass);
    setMsg({ type: 'success', text: 'Credentials updated! Login again.' });
    setCurrentPass(''); setNewUser(''); setNewPass('');
    setTimeout(() => { localStorage.removeItem('globalAyurveda_auth'); window.location.href = '/dashboard/login'; }, 2000);
  };

  const handleResetData = () => { resetData(); setResetConfirm(false); setMsg({ type: 'success', text: 'Website data reset to defaults.' }); };

  return (
    <div>
      <SectionTitle icon={<Settings size={20} />} title="Account Settings" subtitle="Manage your account" />
      <Card className="mb-4">
        <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wider flex items-center gap-2"><Lock size={16} className="text-[#d4af37]" /> Change Login Credentials</h3>
        {msg && (<div className={`text-xs text-center py-2.5 px-4 rounded-lg mb-4 ${msg.type === 'error' ? 'bg-red-500/10 border border-red-500/40 text-red-400' : 'bg-green-500/10 border border-green-500/40 text-green-400'}`}>{msg.text}</div>)}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-1.5">Current Password</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} value={currentPass} onChange={(e) => setCurrentPass(e.target.value)} className="w-full bg-[#071c10] border border-[#1d462d] rounded-lg px-3.5 py-2.5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all" placeholder="Enter current password" />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors">{showPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="New Username" value={newUser} onChange={(e) => setNewUser(e.target.value)} placeholder="Leave blank to keep current" />
            <div>
              <label className="block text-xs font-semibold text-[#a3c2af] uppercase tracking-wider mb-1.5">New Password</label>
              <input type={showPass ? 'text' : 'password'} value={newPass} onChange={(e) => setNewPass(e.target.value)} className="w-full bg-[#071c10] border border-[#1d462d] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all" placeholder="Leave blank to keep current" />
            </div>
          </div>
          <button onClick={handleChangeCredentials} className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#e6c24d] text-[#071c10] font-bold text-xs px-5 py-2.5 rounded-lg shadow-lg transition-all duration-300 uppercase tracking-wider"><Save size={14} /> Update Credentials</button>
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-sm text-white mb-3 uppercase tracking-wider flex items-center gap-2"><RotateCcw size={16} className="text-[#d4af37]" /> Reset Website Data</h3>
        <p className="text-xs text-[#7d9b87] mb-4">This will reset all website content to default values. This cannot be undone.</p>
        {resetConfirm ? (
          <div className="flex items-center gap-3">
            <span className="text-xs text-red-400 font-semibold">Are you sure?</span>
            <button onClick={handleResetData} className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all uppercase tracking-wider">Yes, Reset</button>
            <button onClick={() => setResetConfirm(false)} className="bg-[#1d462d] hover:bg-[#2a5a3e] text-white font-bold text-xs px-4 py-2 rounded-lg transition-all uppercase tracking-wider">Cancel</button>
          </div>
        ) : (
          <button onClick={() => setResetConfirm(true)} className="inline-flex items-center gap-2 bg-[#1a0a0a] border border-red-500/30 text-red-400 hover:bg-red-500/10 font-bold text-xs px-5 py-2.5 rounded-lg transition-all uppercase tracking-wider"><RotateCcw size={14} /> Reset to Defaults</button>
        )}
      </Card>
    </div>
  );
}

export default function Dashboard() {
  return (
    <DataProvider>
      <DashboardInner />
    </DataProvider>
  );
}
