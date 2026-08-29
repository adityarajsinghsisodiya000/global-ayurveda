import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

const defaultData = {
  logo: '/images/logo.png',
  contact: {
    phone: '8989656675',
    whatsapp: '8989656675',
    email: 'globalayurvedateamindia@gmail.com',
    address: 'Freeganj Ujjain 456010 (M.P.)',
    instagram: 'global_ayurveda_team_india',
    services: [
      'Ayurvedic Consultation',
      'Yoga & Meditation',
      'Naturopathy',
      'Health Check-up Camps',
      'Wellness Programs',
      'Lifestyle Guidance',
    ],
    footerProducts: ['Arogya Active', 'Nari Active', 'Joint Active', 'Face Active', 'Hair Active', 'BetaCell Active'],
  },
  hero: {
    tagline: 'ANCIENT WISDOM. MODERN WELLNESS.',
    hindiHeading1: 'प्रकृति की शक्ति के साथ,',
    hindiHeading2: 'बेहतर स्वास्थ्य की ओर।',
    subtitle: 'Ancient Ayurvedic wisdom for modern living. Discover natural ways to a healthier, happier you.',
    bgImage: '',
  },
  about: {
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
  },
  products: [
    {
      id: 'arogya',
      name: 'Arogya Active',
      subtitle: 'Ayurvedic Wellness Syrup',
      category: 'Immunity & General Vitality',
      description: 'Comprehensive daily wellness syrup crafted with Ashwagandha, Giloy, and Amla for immunity, stamina, and whole-body vitality.',
      volume: '200 ml',
      dosages: '10-15 ml twice daily with warm water after meals',
      keyIngredients: ['Ashwagandha', 'Giloy (Guduchi)', 'Amla', 'Shatavari', 'Tulsi'],
      image: '',
    },
    {
      id: 'nari',
      name: 'Nari Active',
      subtitle: "Women's Wellness Support",
      category: "Women's Hormonal & Energy Balance",
      description: "Specialized Ayurvedic formulation with Shatavari, Lodhra, and Ashoka to support women's hormonal balance, energy, and overall health.",
      volume: '200 ml',
      dosages: '10-15 ml twice daily after meals',
      keyIngredients: ['Ashoka Bark', 'Shatavari', 'Lodhra', 'Dashmool', 'Nagkesar'],
      image: '',
    },
    {
      id: 'joint',
      name: 'Joint Active',
      subtitle: 'Joint & Mobility Wellness',
      category: 'Joint Flexibility & Pain Relief',
      description: 'Herbal syrup enriched with Shallaki, Guggulu, and Nirgundi to ease joint stiffness, promote cartilage strength, and restore painless mobility.',
      volume: '200 ml',
      dosages: '10-15 ml twice daily with warm water',
      keyIngredients: ['Shallaki (Boswellia)', 'Shuddha Guggulu', 'Nirgundi', 'Rasna', 'Ginger'],
      image: '',
    },
    {
      id: 'betacell',
      name: 'BetaCell Active',
      subtitle: 'Ayurvedic Sugar Support',
      category: 'Metabolic & Glycemic Wellness',
      description: 'Synergistic botanical formula featuring Vijaysar, Karela, Jamun, and Gudmar for healthy blood sugar management and pancreatic wellness.',
      volume: '200 ml',
      dosages: '10 ml twice daily before meals',
      keyIngredients: ['Gudmar (Gymnema)', 'Vijaysar', 'Karela', 'Jamun Seed', 'Methi'],
      image: '',
    },
  ],
  ayurvedaCards: [
    {
      id: 'ayurveda',
      title: 'AYURVEDA',
      desc: 'Traditional Ayurvedic knowledge & wellness.',
      details: 'Comprehensive natural healing solutions based on Tridosha balance (Vata, Pitta, Kapha), herbal formulations, and personalized health restoration.',
      image: '',
    },
    {
      id: 'yoga',
      title: 'YOGA',
      desc: 'Mind-body balance & healthy lifestyle.',
      details: 'Ancient posture practices, pranayama breathing exercises, and dynamic body awareness designed to align physical strength and vital energy.',
      image: '',
    },
    {
      id: 'meditation',
      title: 'MEDITATION',
      desc: 'Mental calmness & inner wellness.',
      details: 'Mindful stillness practices to reduce stress, sharpen mental focus, achieve deep sleep, and foster emotional serenity in daily life.',
      image: '',
    },
    {
      id: 'naturopathy',
      title: 'NATUROPATHY',
      desc: 'Natural lifestyle & wellness practices.',
      details: 'Drugless natural therapy using the five elements of nature (Earth, Water, Fire, Air, Ether), hydrotherapy, mud therapy, and clean nutrition.',
      image: '',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'सुबह की healthy habits',
      desc: 'स्वस्थ दिनचर्या आपके जीवन को ऊर्जावान और खुशहाल बनाती है।',
      fullText: 'आयुर्वेद के अनुसार सुबह जल्दी उठना, ताजा हवा में सांस लेना, और हल्का व्यायाम करना शरीर को स्वस्थ रखता है। प्रातःकाल का समय प्रकृति से जुड़ने का सबसे अच्छा समय होता है। इससे मन शांत रहता है और दिनभर ऊर्जा बनी रहती है।',
      tag: 'Healthy Habits',
      readTime: '4 min read',
      image: '',
    },
    {
      id: 2,
      title: 'Ayurveda में दिनचर्या का महत्व',
      desc: 'जानिये कैसे daily routine आपकी immunity और energy को बढ़ाता है।',
      fullText: 'आयुर्वेद में दिनचर्या का विशेष महत्व है। सही समय पर खाना, सोना, और व्यायाम करने से शरीर के दोष संतुलित रहते हैं। नियमित दिनचर्या से पाचन शक्ति मजबूत होती है, रोग प्रतिरोधक क्षमता बढ़ती है, और मानसिक स्वास्थ्य अच्छा रहता है।',
      tag: 'Ayurvedic Life',
      readTime: '5 min read',
      image: '',
    },
    {
      id: 3,
      title: 'योग और शरीर का संतुलन',
      desc: 'शरीर और मन के संतुलन के लिए योग और प्राणायाम के अद्भुत लाभ।',
      fullText: 'योग केवल शारीरिक व्यायाम नहीं है, यह मन और शरीर का संतुलन है। प्राणायाम से सांसों की गति सुधरती है, ध्यान से मन शांत होता है। नियमित योग से तनाव कम होता है, लचीलापन बढ़ता है, और शरीर स्वस्थ रहता है।',
      tag: 'Yoga & Mind',
      readTime: '6 min read',
      image: '',
    },
    {
      id: 4,
      title: 'रात में अच्छी नींद क्यों जरूरी है?',
      desc: 'अच्छी नींद के आयुर्वेदिक उपाय और निद्रा का स्वास्थ्य पर सकारात्मक प्रभाव।',
      fullText: 'आयुर्वेद के अनुसार रात 10 बजे से पहले सोना बहुत जरूरी है। अच्छी नींद से शरीर की मरम्मत होती है, याददाश्त बढ़ती है, और हार्मोन संतुलित रहते हैं। सोने से पहले गर्म दूध या हल्दी वाला दूध पीना नींद को बेहतर बनाता है।',
      tag: 'Rest & Sleep',
      readTime: '4 min read',
      image: '',
    },
    {
      id: 5,
      title: 'भारतीय herbs के traditional uses',
      desc: 'तुलसी, नीम, हल्दी, और अश्वगंधा के प्राचीन गुण व औषधीय प्रयोग।',
      fullText: 'तुलसी रोग प्रतिरोधक क्षमता बढ़ाती है, नीम रक्त शुद्ध करता है, हल्दी सूजन कम करती है, और अश्वगंधा तनाव दूर करता है। ये सभी herbs भारतीय आयुर्वेद की धरोहर हैं और सदियों से स्वास्थ्य के लिए उपयोग की जा रही हैं।',
      tag: 'Herbal Wisdom',
      readTime: '5 min read',
      image: '',
    },
  ],
  whyUs: [
    { title: 'Natural Approach', subtitle: '100% Pure & Organic' },
    { title: 'Ayurvedic Knowledge', subtitle: 'Ancient Classical Texts' },
    { title: 'Holistic Wellness', subtitle: 'Mind, Body & Soul' },
    { title: 'Quality Focus', subtitle: 'GMP & Lab Certified' },
    { title: 'Trusted Guidance', subtitle: 'Expert Practitioner Panel' },
    { title: 'Indian Ayurvedic Heritage', subtitle: '5000 Years of Wisdom' },
  ],
};

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('globalAyurveda_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...defaultData, ...parsed, contact: { ...defaultData.contact, ...(parsed.contact || {}) } };
      } catch {
        return defaultData;
      }
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem('globalAyurveda_data', JSON.stringify(data));
  }, [data]);

  const updateData = (path, value) => {
    setData((prev) => {
      const keys = path.split('.');
      const newData = JSON.parse(JSON.stringify(prev));
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        if (current[keys[i]] === undefined) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.setItem('globalAyurveda_data', JSON.stringify(defaultData));
  };

  return (
    <DataContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
