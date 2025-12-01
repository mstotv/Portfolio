import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';
import { Language } from '../types';

interface TechStackMarqueeProps {
  lang: Language;
}

const TechStackMarquee: React.FC<TechStackMarqueeProps> = ({ lang }) => {
  const isRTL = lang === 'ar' || lang === 'ku';
  
  // Duplicate the array for seamless infinite loop
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK];
  
  const title = lang === 'en' 
    ? 'Technologies I Work With' 
    : lang === 'ku' 
      ? 'تەکنەلۆژیاکانی کارکردنم' 
      : 'التقنيات التي أعمل بها';

  return (
    <section className="py-16 bg-black border-y border-zinc-800 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-neon-red mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Cutting-edge technologies powering modern digital solutions' 
              : lang === 'ku'
                ? 'تەکنەلۆژیای پێشکەوتوو بۆ چارەسەری دیجیتاڵی مۆدێرن'
                : 'أحدث التقنيات التي تدعم الحلول الرقمية الحديثة'}
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Marquee Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: isRTL ? [0, -1920] : [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedStack.map((tech, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 mx-4 px-8 py-6
                    rounded-2xl border border-zinc-800
                    ${tech.bg}
                    backdrop-blur-sm
                    flex flex-col items-center justify-center
                    min-w-[180px] h-[140px]
                    transition-all duration-300
                    hover:scale-105 hover:border-neon-red hover:shadow-neon
                    group
                  `}
                >
                  {/* Tech Name */}
                  <div className={`text-2xl font-bold mb-3 ${tech.color} font-mono`}>
                    {tech.name}
                  </div>
                  
                  {/* Animated Dots */}
                  <div className="flex gap-1">
                    <div className={`w-2 h-2 rounded-full ${tech.color} opacity-70 group-hover:opacity-100 animate-pulse`}></div>
                    <div className={`w-2 h-2 rounded-full ${tech.color} opacity-70 group-hover:opacity-100 animate-pulse delay-75`}></div>
                    <div className={`w-2 h-2 rounded-full ${tech.color} opacity-70 group-hover:opacity-100 animate-pulse delay-150`}></div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="mt-4 w-0 h-0.5 bg-neon-red group-hover:w-12 transition-all duration-300"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="text-4xl font-bold text-neon-red font-mono">12+</div>
            <div className="text-gray-400 mt-2">
              {lang === 'en' ? 'Technologies' : lang === 'ku' ? 'تەکنەلۆژیا' : 'تقنية'}
            </div>
          </div>
          <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="text-4xl font-bold text-neon-red font-mono">100%</div>
            <div className="text-gray-400 mt-2">
              {lang === 'en' ? 'Modern Stack' : lang === 'ku' ? 'ستاکی مۆدێرن' : 'تقنيات حديثة'}
            </div>
          </div>
          <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <div className="text-4xl font-bold text-neon-red font-mono">24/7</div>
            <div className="text-gray-400 mt-2">
              {lang === 'en' ? 'Integration Ready' : lang === 'ku' ? 'ئامادەی تەواوکاری' : 'جاهز للتكامل'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
