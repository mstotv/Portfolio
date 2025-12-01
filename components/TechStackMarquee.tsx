
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';
import { Language } from '../types';
import { 
  Database, Cloud, Cpu, FileCode, Container, Layers, Zap, 
  Server, CreditCard, PenTool, Layout, Code2 
} from 'lucide-react';

interface TechStackMarqueeProps {
  lang: Language;
}

// Map tech names to Lucide icons
const ICONS: Record<string, React.ElementType> = {
  'Next.js': Cpu,
  'TypeScript': FileCode,
  'Docker': Container,
  'PostgreSQL': Database,
  'AWS': Cloud,
  'GraphQL': Layers,
  'n8n': Zap,
  'Kubernetes': Server,
  'Prisma': Database,
  'Stripe': CreditCard,
  'Tailwind': Layout,
  'Figma': PenTool,
};

const TechStackMarquee: React.FC<TechStackMarqueeProps> = ({ lang }) => {
  const title = lang === 'en' 
    ? 'Enterprise Technologies' 
    : lang === 'ku' 
      ? 'تەکنەلۆژیای پێشکەوتوو' 
      : 'تقنيات المؤسسات';

  return (
    <section className="py-24 bg-black border-y border-zinc-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-900/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>
          <div className="h-1 w-24 bg-neon-red mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {lang === 'en' 
              ? 'We use the most advanced, scalable, and secure technologies to build your digital future.' 
              : lang === 'ku'
                ? 'ئێمە پێشکەوتووترین و پارێزراوترین تەکنەلۆژیا بەکاردەهێنین بۆ بنیادنانی داهاتووی دیجیتاڵیت.'
                : 'نستخدم أحدث التقنيات الآمنة والقابلة للتوسع لبناء مستقبلك الرقمي.'}
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {TECH_STACK.map((tech, index) => {
            const IconComponent = ICONS[tech.name] || Code2;
            
            return (
              <div
                key={index}
                className="group relative bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-neon-red hover:shadow-[0_0_30px_rgba(255,0,51,0.15)] hover:-translate-y-1 cursor-default"
              >
                {/* Icon Container */}
                <div className="p-3 rounded-lg bg-zinc-900 group-hover:bg-black transition-colors border border-zinc-800 group-hover:border-neon-red/30">
                  <IconComponent 
                    size={32} 
                    className="text-white transition-all duration-300 group-hover:text-neon-red group-hover:scale-110" 
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-sm md:text-base tracking-wide group-hover:text-neon-red transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-zinc-500 text-[10px] md:text-xs mt-1 uppercase tracking-wider font-mono group-hover:text-zinc-400 transition-colors">
                    {tech.desc}
                  </p>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-neon-red/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-10 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: 'Uptime Guarantee', value: '99.9%' },
            { label: 'Security Standard', value: 'Enterprise' },
            { label: 'Scalability', value: 'Unlimited' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
              <div className="text-sm text-zinc-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
