import React, { useState, useEffect } from 'react';
import { TECH_STACK } from '../constants';
import { Language } from '../types';

interface TechStackMarqueeProps {
  lang: Language;
}

const TechStackMarquee: React.FC<TechStackMarqueeProps> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Create the exact sequence as requested:
  // Automation → JavaScript → TypeScript → React → Vite → Node.js → n8n → Meta → Amazon → WooCommerce → Shopify → Python
  const exactSequence = [
    { name: 'Automation', color: 'text-white', bg: 'bg-white/10', logo: '/logos/automation.svg' },
    { name: 'JavaScript', color: 'text-white', bg: 'bg-white/10', logo: '/logos/javascript.svg' },
    { name: 'TypeScript', color: 'text-white', bg: 'bg-white/10', logo: '/logos/typescript.svg' },
    { name: 'React', color: 'text-white', bg: 'bg-white/10', logo: '/logos/react.svg' },
    { name: 'Vite', color: 'text-white', bg: 'bg-white/10', logo: '/logos/vite.svg' },
    { name: 'Node.js', color: 'text-white', bg: 'bg-white/10', logo: '/logos/nodejs.svg' },
    { name: 'n8n', color: 'text-white', bg: 'bg-white/10', logo: '/logos/n8n.svg' },
    { name: 'Meta', color: 'text-white', bg: 'bg-white/10', logo: '/logos/meta.svg' },
    { name: 'Amazon', color: 'text-white', bg: 'bg-white/10', logo: '/logos/amazon.svg' },
    { name: 'WooCommerce', color: 'text-white', bg: 'bg-white/10', logo: '/logos/woocommerce.svg' },
    { name: 'Shopify', color: 'text-white', bg: 'bg-white/10', logo: '/logos/shopify.svg' },
    { name: 'Python', color: 'text-white', bg: 'bg-white/10', logo: '/logos/python.svg' },
  ];
  
  // Auto-rotate through technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % exactSequence.length);
    }, 1500); // Change every 1.5 seconds
    
    return () => clearInterval(interval);
  }, [exactSequence.length]);
  
  const title = lang === 'en' 
    ? 'Technologies' 
    : lang === 'ku' 
      ? 'تەکنەلۆژیا' 
      : 'التقنيات';

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="h-1 w-24 bg-neon-red mx-auto"></div>
        </div>

        {/* Static Grid with Glow Effects */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {exactSequence.map((tech, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Tech Item Container */}
                <div className={`relative p-6 rounded-2xl transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-br from-black via-black to-neon-red/20 border-2 border-neon-red shadow-2xl shadow-neon-red/30' 
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-br from-neon-red/10 via-transparent to-neon-red/5' 
                      : 'opacity-0'
                  }`}></div>
                  
                  {/* Tech Name */}
                  <div className="relative z-10 text-center">
                    <div className={`text-xl font-bold transition-all duration-500 ${
                      activeIndex === index 
                        ? 'text-neon-red scale-110' 
                        : 'text-white opacity-80 group-hover:opacity-100'
                    }`}>
                      {tech.name}
                    </div>
                  </div>
                  
                  {/* Pulsing Dot Indicator */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-neon-red animate-pulse shadow-lg shadow-neon-red' 
                      : 'bg-white/20 opacity-0'
                  }`}></div>
                </div>
                
                {/* Subtle Glow Ring */}
                <div className={`absolute -inset-1 rounded-3xl blur transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-neon-red/30' 
                    : 'opacity-0 group-hover:bg-white/5'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Active Tech Display */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-black/50 rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 0 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 1 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 2 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 3 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 4 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 5 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 6 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 7 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 8 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 9 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 10 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
              <div className={`w-3 h-3 rounded-full ${activeIndex >= 11 ? 'bg-neon-red' : 'bg-white/20'}`}></div>
            </div>
            <div className="text-white/60 text-sm">
              {activeIndex + 1} / {exactSequence.length}
            </div>
          </div>
        </div>

        {/* Stats - Minimal Design */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-white font-mono mb-2">{exactSequence.length}</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">
                {lang === 'en' ? 'Technologies' : lang === 'ku' ? 'تەکنەلۆژیا' : 'تقنية'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white font-mono mb-2">100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">
                {lang === 'en' ? 'Professional' : lang === 'ku' ? 'پیشەیی' : 'احترافية'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white font-mono mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">
                {lang === 'en' ? 'Integration' : lang === 'ku' ? 'تەواوکاری' : 'تكامل'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
