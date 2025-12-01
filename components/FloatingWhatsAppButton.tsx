
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Language } from '../types';

interface FloatingWhatsAppButtonProps {
  lang: Language;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ lang }) => {
  const isRTL = lang === 'ar' || lang === 'ku';
  
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed z-50 flex items-center justify-center
        w-16 h-16 rounded-full
        bg-green-600 hover:bg-green-700
        text-white shadow-2xl
        transition-all duration-300
        hover:scale-110 hover:shadow-green-900/50
        border-2 border-white/20
        group
        ${isRTL ? 'left-6 bottom-6' : 'right-6 bottom-6'}
      `}
      aria-label="Contact on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <MessageCircle className="w-8 h-8" />
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20 group-hover:opacity-30"></div>
      
      {/* Tooltip */}
      <div className={`
        absolute bottom-full mb-3 px-3 py-2
        bg-black/90 backdrop-blur-sm
        text-white text-sm font-bold rounded-lg
        whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        border border-green-500/30
        ${isRTL ? 'right-0' : 'left-0'}
      `}>
        {lang === 'en' ? 'Chat on WhatsApp' : 
         lang === 'ku' ? 'پەیوەندی لە ڕێگەی واتسئەپ' : 
         'تواصل عبر واتساب'}
        <div className={`
          absolute top-full w-0 h-0
          border-l-4 border-r-4 border-t-4
          border-l-transparent border-r-transparent border-t-black/90
          ${isRTL ? 'right-3' : 'left-3'}
        `}></div>
      </div>
      
      {/* Notification Badge (Optional) */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold">!</span>
      </div>
    </a>
  );
};

export default FloatingWhatsAppButton;
