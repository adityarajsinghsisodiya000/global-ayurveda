import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProvider, useData } from './dashboard/DataContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import AyurvedaWellness from './components/AyurvedaWellness';
import Products from './components/Products';
import KnowledgeCenter from './components/KnowledgeCenter';
import WhyGlobalAyurveda from './components/WhyGlobalAyurveda';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import AyurvedaModal from './components/AyurvedaModal';
import ArticleModal from './components/ArticleModal';
import LegalModal from './components/LegalModal';
import LoginPage from './dashboard/LoginPage';
import Dashboard from './dashboard/Dashboard';

function Website() {
  const { data } = useData();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAyurvedaCard, setSelectedAyurvedaCard] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  const scrollTo = (id) => {
    setActiveSection(id);
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
    <div className="min-h-screen bg-[#071c10] text-[#f4eee3] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#071c10]">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} contact={data.contact} logo={data.logo} />

      <main className="flex-grow">
        <Hero
          hero={data.hero}
          onExploreClick={() => scrollTo('ayurveda')}
          onProductsClick={() => scrollTo('products')}
        />

        <WhoWeAre about={data.about} onKnowMoreClick={() => scrollTo('ayurveda')} />

        <AyurvedaWellness
          cards={data.ayurvedaCards}
          onCardSelect={(card) => setSelectedAyurvedaCard(card)}
        />

        <Products
          productsList={data.products}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewAllClick={() => scrollTo('products')}
        />

        <KnowledgeCenter
          articles={data.articles}
          onArticleClick={(article) => setSelectedArticle(article)}
        />

        <WhyGlobalAyurveda items={data.whyUs} />
      </main>

      <Footer
        contact={data.contact}
        logo={data.logo}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          contact={data.contact}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {selectedAyurvedaCard && (
        <AyurvedaModal
          card={selectedAyurvedaCard}
          onClose={() => setSelectedAyurvedaCard(null)}
        />
      )}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {legalModalType && (
        <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DataProvider><Website /></DataProvider>} />
      <Route path="/dashboard/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
