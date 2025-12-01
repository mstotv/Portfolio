
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, MessageCircle, ExternalLink, Code2, Menu, X, Globe, ChevronDown, Monitor, ChevronDown as ChevronDownIcon, Package, Check, Star } from 'lucide-react';
import { SOCIAL_LINKS, TRANSLATIONS, getServices, getTestimonials, PORTFOLIO_ITEMS, getProfessionalPackages } from './constants';
import ServiceDetail from './components/ServiceDetail';
import ProjectDetail from './components/ProjectDetail';
import FloatingActions from './src/components/FloatingActions';
import TechStackMarquee from './components/TechStackMarquee';
import FAQ from './components/FAQ';
import { Service, Language, PortfolioItem } from './types';

function App() {
  // Get initial language from localStorage or default to 'ar'
  const getInitialLang = (): Language => {
    const saved = localStorage.getItem('msto-lang');
    return (saved === 'en' || saved === 'ku' || saved === 'ar') ? saved : 'ar';
  };

  const [lang, setLang] = useState<Language>(getInitialLang);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  // Testimonials State
  const [visibleTestimonials, setVisibleTestimonials] = useState(9);

  // Derived state
  const t = TRANSLATIONS[lang];
  const services = getServices(lang);
  const testimonials = getTestimonials(lang);
  const professionalPackages = getProfessionalPackages(lang);
  const dir = lang === 'en' ? 'ltr' : 'rtl';
  const isRTL = dir === 'rtl';
  const fontClass = lang === 'en' ? 'font-mono' : (lang === 'ku' ? 'font-kurdish' : 'font-arabic');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.pricing, href: '#pricing' }, // Updated Link to new Pricing Section
    { name: t.nav.faq, href: '#faq' }, // Added FAQ Link
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
  ];

  // Robust Scroll Handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('msto-lang', l);
    setLangMenuOpen(false);
    // Reset visible testimonials when language changes
    setVisibleTestimonials(9);
  };

  const handleShowMoreTestimonials = () => {
    setVisibleTestimonials(prev => prev + 9);
  };

  return (
    <div className={`bg-black min-h-screen text-white ${fontClass} selection:bg-neon-red selection:text-white dir-${dir}`}>
      
      {/* 3D Header */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 font-mono cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Code2 className="text-neon-red" />
            <span className="text-neon-red">MSTO</span> TV
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold hover:text-neon-red transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-red transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Socials & Language & Mobile Toggle */}
          <div className="flex items-center gap-4">
             {/* Language Switcher Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-sm font-bold border border-zinc-700 px-3 py-1.5 rounded hover:border-neon-red hover:text-neon-red transition-colors font-mono bg-black/50"
              >
                <Globe size={16} />
                <span className="uppercase">{lang}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <div className={`absolute top-full mt-2 w-32 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl flex flex-col z-50 overflow-hidden ${isRTL ? 'left-0' : 'right-0'}`}>
                  <button 
                    onClick={() => changeLang('ar')} 
                    className={`px-4 py-3 text-start hover:bg-zinc-800 hover:text-neon-red transition-colors text-sm font-bold font-arabic ${lang === 'ar' ? 'text-neon-red bg-zinc-800/50' : 'text-gray-300'}`}
                  >
                    العربية
                  </button>
                  <button 
                    onClick={() => changeLang('ku')} 
                    className={`px-4 py-3 text-start hover:bg-zinc-800 hover:text-neon-red transition-colors text-sm font-bold font-arabic ${lang === 'ku' ? 'text-neon-red bg-zinc-800/50' : 'text-gray-300'}`}
                  >
                    کوردی
                  </button>
                  <button 
                    onClick={() => changeLang('en')} 
                    className={`px-4 py-3 text-start hover:bg-zinc-800 hover:text-neon-red transition-colors text-sm font-bold font-mono ${lang === 'en' ? 'text-neon-red bg-zinc-800/50' : 'text-gray-300'}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            <a href={SOCIAL_LINKS.instagramMain} target="_blank" rel="noreferrer" className="hidden md:block hover:text-neon-red transition-colors">
              <Instagram size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagramViral} target="_blank" rel="noreferrer" className="hidden md:block hover:text-neon-red transition-colors font-mono">
              <span className="font-bold text-xs border border-white px-1 rounded hover:border-neon-red">Viral</span>
            </a>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: 'auto' }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-bold hover:text-neon-red py-2 border-b border-zinc-800 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 0, 51, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 51, 0.1) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
        
        <div className={`container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <motion.div 
            initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`flex-1 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
          >
            <h2 className="text-neon-red font-bold tracking-widest mb-2 font-mono">{t.hero.greeting}</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.hero.iam} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-mono">Msto TV</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 whitespace-pre-line">
              {t.hero.role}
            </p>
            
            <div className={`flex flex-wrap gap-4 justify-center ${isRTL ? 'md:justify-end' : 'md:justify-start'}`}>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-8 py-3 bg-neon-red text-white font-bold rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform border border-neon-red hover:bg-transparent hover:text-neon-red shadow-neon"
              >
                {t.hero.cta_contact}
              </a>
              <a 
                href={SOCIAL_LINKS.instagramMain}
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 bg-transparent text-white font-bold rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform border border-zinc-600 hover:border-white flex items-center gap-2"
              >
                <Instagram size={18} /> {t.hero.cta_insta}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group"
          >
            {/* 3D Floating Image Effect */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-neon-red rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
              <img 
                src="https://e.top4top.io/p_362199f7v1.jpg" 
                alt="Msto TV" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
              />
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-0 right-0 bg-black border border-neon-red p-3 rounded text-neon-red font-bold shadow-neon font-mono"
              >
                &lt;Code /&gt;
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute bottom-10 left-0 bg-black border border-white p-3 rounded text-white font-bold font-mono"
              >
                AI Auto
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee lang={lang} />

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.sections.services_title}</h2>
            <div className="h-1 w-20 bg-neon-red mx-auto"></div>
            <p className="mt-4 text-gray-400">{t.sections.services_subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black border border-zinc-800 p-8 rounded-xl cursor-pointer hover:border-neon-red hover:shadow-neon transition-all group text-start"
                onClick={() => setSelectedService(service)}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className={`mt-6 flex ${isRTL ? 'justify-end' : 'justify-end'}`}>
                  <ExternalLink className={`text-neon-red opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Professional Packages (Pricing) */}
      <section id="pricing" className="py-20 bg-zinc-950 border-t border-b border-zinc-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-900 via-neon-red to-zinc-900 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-red blur-[120px] opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              {t.nav.pricing}
            </h2>
            <div className="h-1 w-20 bg-neon-red mx-auto"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              {lang === 'en' ? 'Choose the perfect package for your business growth.' : lang === 'ku' ? 'پاکێجی گونجاو هەڵبژێرە بۆ گەشەکردنی کارەکەت.' : 'اختر الباقة المثالية لنمو مشروعك.'}
            </p>
          </div>

          {/* REAL PACKAGES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
             {professionalPackages.map((pkg) => (
               <motion.div 
                 key={pkg.id} 
                 whileHover={{ y: pkg.isComingSoon ? 0 : -10 }}
                 className={`relative bg-black border rounded-2xl p-8 flex flex-col min-h-[500px] transition-all group
                    ${pkg.isComingSoon ? 'border-zinc-800 opacity-80 cursor-default' : 'border-zinc-700 hover:border-neon-red hover:shadow-neon'}
                    ${pkg.highlight ? 'border-neon-red shadow-[0_0_20px_rgba(255,0,51,0.2)]' : ''}
                 `}
               >
                  {pkg.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-red text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Star size={12} fill="white" /> {t.common.most_popular}
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                     <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-6 mx-auto group-hover:bg-neon-red/10 transition-colors">
                        <Package size={32} className={`${pkg.isComingSoon ? 'text-gray-600' : pkg.highlight ? 'text-neon-red' : 'text-gray-300'}`} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                     
                     {!pkg.isComingSoon && (
                       <div className="flex flex-col items-center gap-1 mt-4">
                          <span className="text-gray-500 line-through decoration-neon-red decoration-2 text-lg font-bold">{pkg.oldPrice}</span>
                          <span className="text-4xl font-black text-white font-mono">{pkg.price}</span>
                       </div>
                     )}
                     
                     <p className="text-gray-500 text-sm mt-4 min-h-[40px]">
                       {pkg.description || (pkg.isComingSoon ? (lang === 'en' ? 'Stay tuned for more.' : 'انتظرونا قريباً.') : '')}
                     </p>
                  </div>

                  {/* Features List */}
                  {!pkg.isComingSoon && (
                    <ul className="space-y-4 mb-8 flex-1">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                           <div className={`mt-1 p-0.5 rounded-full ${pkg.highlight ? 'bg-neon-red text-white' : 'bg-zinc-800 text-neon-red'}`}>
                              <Check size={12} strokeWidth={3} />
                           </div>
                           <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA / Coming Soon */}
                  <div className="mt-auto">
                    {pkg.isComingSoon ? (
                       <div className="w-full py-3 bg-zinc-900 text-zinc-500 rounded-xl font-bold text-center cursor-not-allowed border border-zinc-800">
                          {pkg.name}
                       </div>
                    ) : (
                       <a 
                          href={SOCIAL_LINKS.whatsapp} 
                          target="_blank" 
                          rel="noreferrer"
                          className={`block w-full py-3 rounded-xl font-bold text-center transition-all 
                            ${pkg.highlight 
                               ? 'bg-neon-red text-white hover:bg-red-700 hover:shadow-neon' 
                               : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 hover:border-white'}`}
                       >
                          {t.common.order_service}
                       </a>
                    )}
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Static Gallery */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.sections.portfolio_title}</h2>
            <div className="h-1 w-20 bg-neon-red mx-auto"></div>
          </div>

          {/* Static Grid Gallery */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {PORTFOLIO_ITEMS.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="relative group aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-neon-red hover:shadow-neon transition-all"
                >
                  {/* Browser Mockup Visual */}
                  <div className="w-full h-full bg-zinc-900 flex flex-col">
                    {/* Mockup Header */}
                    <div className="h-8 bg-zinc-800 border-b border-zinc-700 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      <div className="ml-2 flex-1 h-4 bg-black/40 rounded-full"></div>
                    </div>
                    {/* Mockup Body */}
                    <div className={`flex-1 relative p-6 flex flex-col items-center justify-center bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-500 origin-center`}>
                       {/* Icon Circle */}
                       <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4 text-white shadow-xl ring-1 ring-white/20">
                         {item.icon}
                       </div>
                       
                       <h3 className="text-xl font-bold text-white text-center mb-1 drop-shadow-md">{item.title}</h3>
                       <p className="text-xs font-mono text-white/70 uppercase tracking-widest">{item.niche}</p>
                       
                       {/* Decorative UI elements (Lines) */}
                       <div className="mt-8 w-full max-w-[120px] h-2 bg-white/20 rounded-full"></div>
                       <div className="mt-2 w-full max-w-[80px] h-2 bg-white/10 rounded-full"></div>

                       {/* Hover Overlay */}
                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <span className="flex items-center gap-2 text-white font-bold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                            <Monitor size={16} /> Preview Site
                          </span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-12 text-center">
             <a href={SOCIAL_LINKS.instagramMain} target="_blank" rel="noreferrer" className="inline-block text-gray-400 hover:text-white font-mono text-sm border-b border-gray-800 hover:border-white pb-1 transition-all">
              {t.sections.portfolio_link}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ lang={lang} />

      {/* Testimonials Section (Static Grid) */}
      <section id="testimonials" className="py-20 bg-zinc-900">
         <div className="container mx-auto px-6 mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">{t.sections.testimonials_title}</h2>
            <div className="h-1 w-20 bg-neon-red mx-auto mb-10"></div>
         </div>
          
         {/* Static Grid Container */}
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {testimonials.slice(0, visibleTestimonials).map((tr) => (
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={tr.id} 
                    className="bg-black border border-zinc-800 p-8 rounded-xl hover:border-neon-red transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col"
                 >
                    <div className={`flex text-yellow-500 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className={s < tr.stars ? "opacity-100" : "opacity-30"}>★</span>
                      ))}
                    </div>
                    <p className={`text-gray-300 leading-relaxed mb-6 text-sm flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>"{tr.text}"</p>
                    <div className={`mt-auto border-t border-zinc-800 pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h4 className="font-bold text-white text-lg">{tr.name}</h4>
                      <span className="text-xs text-gray-500 flex items-center gap-1 mt-1 justify-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                        {t.common.verified}
                      </span>
                    </div>
                 </motion.div>
               ))}
            </div>

            {/* Show More Button */}
            {visibleTestimonials < testimonials.length && (
              <div className="mt-12 text-center">
                <button 
                  onClick={handleShowMoreTestimonials}
                  className="group flex items-center gap-2 mx-auto text-white border border-zinc-700 bg-zinc-800 px-6 py-3 rounded-full hover:bg-neon-red hover:border-neon-red transition-all duration-300 font-bold text-sm"
                >
                  {lang === 'en' ? 'Show More Reviews' : lang === 'ku' ? 'زیاتر پیشان بدە' : 'عرض المزيد من الآراء'}
                  <ChevronDownIcon size={16} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            )}
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800 backdrop-blur text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t.sections.contact_title}</h2>
            
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              {t.sections.contact_subtitle}
            </p>
            
            <div className="flex flex-col gap-4 font-sans max-w-md mx-auto">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-colors shadow-lg hover:shadow-green-900/20 text-lg">
                <MessageCircle size={24} /> WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a href={SOCIAL_LINKS.instagramMain} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:opacity-90 shadow-lg hover:shadow-pink-900/20">
                  <Instagram /> @mstotv
                </a>
                <a href={SOCIAL_LINKS.instagramViral} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-zinc-800 rounded-xl text-white font-bold hover:bg-zinc-700 border border-zinc-700">
                  <Instagram /> @msto.viral
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 font-mono">
            <span className="text-neon-red">MSTO</span> TV
          </div>
          
          <div className={`text-gray-500 text-sm text-center ${isRTL ? 'md:text-left' : 'md:text-right'} font-mono`}>
            <p>&copy; {new Date().getFullYear()} Msto TV. {t.common.footer_rights}</p>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <ServiceDetail 
        service={selectedService} 
        onClose={() => setSelectedService(null)}
        lang={lang} 
      />

      {/* Project Simulator Modal (Simulates Internal Websites) */}
      <ProjectDetail 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating AI Chat Button */}
      <FloatingActions lang={lang} />

    </div>
  );
}

export default App;
