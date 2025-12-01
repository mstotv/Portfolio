
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { getFAQs, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface FAQProps {
  lang: Language;
}

const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = getFAQs(lang);
  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar' || lang === 'ku';

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-900 border-b border-zinc-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 opacity-50"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-neon-red blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <div className="p-3 bg-zinc-800 rounded-full border border-zinc-700">
               <HelpCircle size={32} className="text-neon-red" />
             </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {t.sections.faq_title}
          </h2>
          <div className="h-1 w-20 bg-neon-red mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {t.sections.faq_subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index}
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                activeIndex === index 
                  ? 'border-neon-red bg-black shadow-[0_0_15px_rgba(255,0,51,0.1)]' 
                  : 'border-zinc-800 bg-zinc-950/50 hover:border-zinc-600'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-6 text-start focus:outline-none group"
              >
                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-neon-red' : 'text-white group-hover:text-gray-200'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transition-colors shrink-0 ${activeIndex === index ? 'bg-neon-red text-white' : 'bg-zinc-900 text-gray-400 group-hover:text-white'}`}>
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className={`px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-zinc-800/50 mt-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
