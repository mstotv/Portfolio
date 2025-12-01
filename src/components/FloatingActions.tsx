
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';

interface FloatingActionsProps {
  lang: Language;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  const isRTL = lang === 'ar' || lang === 'ku';
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: lang === 'en' ? "Hello! I'm Msto TV's AI Assistant. Ask me about services, prices, or automation! 🤖" :
            lang === 'ku' ? "سڵاو! من یاریدەدەری زیرەکی Msto TVـم. پرسیارم لێ بکە دەربارەی خزمەتگوزاری و نرخەکان!" :
            "مرحباً! أنا المساعد الذكي لـ Msto TV. اسألني عن الخدمات، الأسعار، أو الأتمتة! 🤖",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isChatOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const responseText = await getAIResponse(userMsg.text, lang);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: lang === 'en' ? 'Sorry, I encountered an error. Please try again.' :
              lang === 'ku' ? 'ببوورە، کێشەیەک هەیە. تکایە دووبارە هەوڵ بدەوە.' :
              'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  // Gemini API Integration
  const GEMINI_API_KEY = 'AIzaSyB8RqwUT8o3FbtgDY2WSz7PJG6l5A5aXcQ';
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

  const getAIResponse = async (input: string, l: Language): Promise<string> => {
    try {
      // Determine language for prompt
      const languagePrompt = l === 'ar' ? 'Respond in Arabic.' : 
                            l === 'ku' ? 'Respond in Kurdish.' : 
                            'Respond in English.';
      
      const prompt = `You are Msto TV's AI assistant. ${languagePrompt} 
      Msto TV is a digital agency offering automation, website development, and marketing services.
      User question: "${input}"
      
      Provide a helpful, concise response in the same language as the user's question. 
      If the question is about pricing, mention that automation starts at $29 and professional bundles start at $459.
      If about WhatsApp automation, explain it uses AI for booking and orders.
      If about websites, mention modern responsive design starting at $150.
      Otherwise, offer general help about digital services.`;

      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      return aiText || getFallbackResponse(input, l);
    } catch (error) {
      console.error('Gemini API error:', error);
      return getFallbackResponse(input, l);
    }
  };

  // Fallback response if API fails
  const getFallbackResponse = (input: string, l: Language): string => {
    const lowerInput = input.toLowerCase();
    const isAr = l === 'ar';
    const isKu = l === 'ku';

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('سعر') || lowerInput.includes('نرخ') || lowerInput.includes('بكم')) {
      return isAr ? "لدينا باقات تبدأ من 29$ للأتمتة، و459$ للباقات الاحترافية الكاملة. هل تريد تفاصيل أكثر عن باقة محددة؟" :
             isKu ? "پاکێجەکانمان لە 29$ دەست پێدەکات بۆ ئۆتۆمەیشن، و 459$ بۆ پاکێجە پڕۆفیشناڵەکان. وردەکاری زیاترت دەوێت؟" :
             "Our automation starts at $29, and full professional bundles start at $459. Would you like details on a specific package?";
    }
    
    if (lowerInput.includes('whatsapp') || lowerInput.includes('واتساب') || lowerInput.includes('واتسئەپ')) {
      return isAr ? "نظام أتمتة واتساب لدينا يستخدم الذكاء الاصطناعي لحجز المواعيد وأخذ الطلبات تلقائياً." :
             isKu ? "سیستەمی واتسئەپی ئێمە زیرەکی دەستکرد بەکاردەهێنێت بۆ دیاریکردنی کات و وەرگرتنی داواکاری." :
             "Our WhatsApp Automation system uses AI to book appointments and take orders automatically.";
    }

    if (lowerInput.includes('website') || lowerInput.includes('موقع') || lowerInput.includes('وێبسایت')) {
      return isAr ? "نقوم بتصميم مواقع عصرية متجاوبة مع الهواتف. تبدأ أسعار صفحات الهبوط من 150$." :
             isKu ? "وێبسایتی مۆدێرن دروست دەکەین. نرخی پەڕەیەک لە 150$ دەست پێدەکات." :
             "We design modern, mobile-responsive websites. Landing pages start at $150.";
    }

    if (lowerInput.includes('contact') || lowerInput.includes('تواصل') || lowerInput.includes('پەیوەندی')) {
      return isAr ? "يمكنك التواصل معنا عبر نموذج الاتصال في الموقع أو عبر وسائل التواصل الاجتماعي." :
             isKu ? "دەتوانیت لە ڕێگەی فۆڕمی پەیوەندی یان سۆشیاڵ میدیا پەیوەندیمان پێوە بکەیت." :
             "You can contact us via the contact form or social media channels.";
    }

    return isAr ? "أنا هنا لمساعدتك في بناء نظامك الرقمي. يمكنك سؤالي عن الأتمتة، المواقع، أو الإعلانات." :
           isKu ? "من لێرەم بۆ یارمەتیدانت. دەتوانیت پرسیار بکەیت دەربارەی ئۆتۆمەیشن، وێبسایت، یان ریکلام." :
           "I'm here to help you build your digital system. You can ask me about Automation, Websites, or Ads.";
  };

  // Determine positions based on language (Left or Right side)
  const sideStyle = isRTL ? { left: '24px' } : { right: '24px' };

  return (
    <>
      {/* --- CHAT WINDOW --- */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed z-[2147483647] w-[300px] md:w-[350px] h-[450px] bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{
              bottom: '100px', // Positioned right above the main button
              ...sideStyle
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 border-b border-white/10 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center relative">
                  <Bot size={20} className="text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Msto AI</h3>
                  <span className="text-[10px] text-blue-200 flex items-center gap-1">
                    <Sparkles size={8} /> Online
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`
                    max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed
                    ${msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-zinc-800 text-gray-200 rounded-bl-none border border-zinc-700'}
                  `}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-zinc-700 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={lang === 'en' ? "Type..." : "اكتب..."}
                className="flex-1 bg-zinc-950 border border-zinc-700 text-white rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- AI Button (PRIMARY) --- */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-900/40 flex items-center justify-center border border-white/10 group z-[2147483647]"
        style={{
          bottom: '24px', 
          ...sideStyle
        }}
      >
        {isChatOpen ? <X size={28} /> : <Bot size={32} />}
        
        {/* Glow & Pulse */}
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
        
        {/* Tooltip */}
        {!isChatOpen && (
          <div className={`
            absolute top-1/2 -translate-y-1/2 px-3 py-1.5
            bg-zinc-900 text-white text-xs font-bold rounded-lg
            opacity-0 group-hover:opacity-100 transition-opacity
            whitespace-nowrap border border-blue-500/30 pointer-events-none
            ${isRTL ? 'left-full ml-4' : 'right-full mr-4'}
          `}>
            {lang === 'en' ? 'Talk to AI' : 'تحدث مع الذكاء الاصطناعي'}
            <div className={`
              absolute top-1/2 -translate-y-1/2 w-0 h-0 border-4 border-transparent
              ${isRTL ? 'right-full border-r-zinc-900 mr-[-1px]' : 'left-full border-l-zinc-900 ml-[-1px]'}
            `}></div>
          </div>
        )}
      </motion.button>
    </>
  );
};

export default FloatingActions;
