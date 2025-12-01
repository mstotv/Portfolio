
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ServiceDetailProps {
  service: Service | null;
  onClose: () => void;
  lang: Language;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose, lang }) => {
  const t = TRANSLATIONS[lang];
  const isRTL = lang !== 'en';

  // Lock body scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [service]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm overflow-y-auto p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className={`relative w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto ${isRTL ? 'text-right' : 'text-left'}`}
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-zinc-800 bg-black/50 sticky top-0 z-10 flex-row">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-neon-red flex items-center gap-3">
              {service.icon}
              {service.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 bg-zinc-800 rounded-full hover:bg-neon-red hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 md:p-10">
            {/* Description */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-white border-b border-neon-red/30 inline-block pb-1">
                {lang === 'en' ? 'Service Details' : lang === 'ku' ? 'وردەکاری خزمەتگوزاری' : 'تفاصيل الخدمة'}
              </h3>
              <p className="text-gray-300 leading-loose text-lg whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            {/* Pricing Grid */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white border-b border-neon-red/30 inline-block pb-1">
                 {lang === 'en' ? 'Pricing Plans' : lang === 'ku' ? 'پاکێجەکانی نرخ' : 'باقات الأسعار'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {service.plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className={`relative p-6 rounded-xl border flex flex-col ${
                      (plan.highlight || plan.badge)
                        ? 'border-neon-red bg-zinc-900 shadow-neon' 
                        : 'border-zinc-700 bg-black'
                    }`}
                  >
                    {(plan.highlight || plan.badge) && (
                      <span className={`absolute -top-3 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${plan.badge ? 'bg-gradient-to-r from-red-600 to-orange-600' : 'bg-neon-red'}`}>
                        {plan.badge ? plan.badge : t.common.most_popular}
                      </span>
                    )}
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                      <div className="text-3xl font-bold text-neon-red font-mono">
                        {plan.price}
                        <span className={`text-sm text-gray-400 font-normal ml-1 ${lang !== 'en' ? 'font-arabic' : ''}`}>
                          {plan.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="flex-1 space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check size={16} className={`${feature.includes('الاوفر') || feature.includes('Saver') || feature.includes('سێڤەر') ? 'text-green-500' : 'text-neon-red'} mt-1 shrink-0`} />
                          <span className={`${feature.includes('الاوفر') || feature.includes('Saver') || feature.includes('سێڤەر') ? 'text-green-400 font-bold' : ''}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                      (plan.highlight || plan.badge)
                        ? 'bg-neon-red text-white hover:bg-red-700' 
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}>
                      {t.common.order_service}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceDetail;