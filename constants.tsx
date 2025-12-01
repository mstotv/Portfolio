
import React from 'react';
import { 
  Bot, ShoppingCart, Layout, TrendingUp, Palette, // Service Icons
  Box, Globe, Workflow, MessageCircle // Portfolio & New Service Icons
} from 'lucide-react';
import { Service, Testimonial, PortfolioItem, UiTranslation, Language, ProfessionalPackage } from './types';

export const SOCIAL_LINKS = {
  instagramMain: "https://www.instagram.com/mstotv",
  instagramViral: "https://www.instagram.com/msto.viral",
  whatsapp: "https://wa.me/447413076745"
};

// 3D Portfolio Items
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    id: 1, 
    title: "Immersive 3D Experience", 
    category: "Website", 
    niche: "Next-Gen Personal Brand", 
    gradient: "from-violet-900 via-fuchsia-900 to-black",
    icon: <Box size={40} className="text-fuchsia-300" />,
    accentColor: "bg-fuchsia-600",
    imageTheme: "3d,abstract,neon,dark",
    imageId: "1618005182384-a83a8bd57fbe", // Abstract 3D Shapes
    layoutStyle: "3d-portfolio"
  },
  { 
    id: 2, 
    title: "Quantum Digital Agency", 
    category: "Website", 
    niche: "High-End Corporate", 
    gradient: "from-slate-900 via-cyan-900 to-black",
    icon: <Globe size={40} className="text-cyan-300" />,
    accentColor: "bg-cyan-600",
    imageTheme: "architecture,glass,technology,office",
    imageId: "1486406146926-c627a92ad1ab", // Modern Architecture
    layoutStyle: "agency-modern"
  },
  { 
    id: 3, 
    title: "n8n Automation Cloud", 
    category: "Website", 
    niche: "SaaS Platform", 
    gradient: "from-gray-900 via-orange-900 to-black",
    icon: <Workflow size={40} className="text-orange-400" />,
    accentColor: "bg-orange-600",
    imageTheme: "server,code,network,technology",
    imageId: "1550751827-4bd374c3f58b", // Tech/Server Image
    layoutStyle: "n8n-automation"
  }
];

// --- TRANSLATIONS ---

export const TRANSLATIONS: Record<Language, UiTranslation> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      pricing: 'الباقات الاحترافية',
      portfolio: 'أعمالي',
      testimonials: 'آراء العملاء',
      contact: 'تواصل معي'
    },
    hero: {
      greeting: 'أهلاً بالعالم',
      iam: 'أنا',
      role: 'مطور برمجيات، صانع محتوى، وخبير ذكاء اصطناعي.\nأقوم ببناء أنظمة أتمتة ومواقع ويب متطورة للمستقبل.',
      cta_contact: 'تواصل معي',
      cta_insta: 'إنستغرام'
    },
    sections: {
      services_title: 'خدماتي',
      services_subtitle: 'اضغط على الخدمة لعرض التفاصيل والباقات',
      portfolio_title: 'يمكننا فعله',
      portfolio_link: 'شاهد المزيد على إنستغرام',
      testimonials_title: 'آراء العملاء',
      contact_title: 'تواصل معي',
      contact_subtitle: 'هل لديك مشروع في ذهنك؟ تواصل معي اليوم لبدء رحلة النجاح الرقمي.'
    },
    form: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال الرسالة'
    },
    common: {
      most_popular: 'الأكثر طلباً',
      order_service: 'طلب الخدمة',
      verified: 'عميل موثق',
      footer_rights: 'جميع الحقوق محفوظة.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pro Packages',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      greeting: 'HELLO WORLD',
      iam: 'I am',
      role: 'Developer, Content Creator, and AI Builder.\nBuilding futuristic automation systems and web experiences.',
      cta_contact: 'CONTACT ME',
      cta_insta: 'INSTAGRAM'
    },
    sections: {
      services_title: 'MY SERVICES',
      services_subtitle: 'Click on a service to view details and pricing plans',
      portfolio_title: 'WHAT WE CAN DO',
      portfolio_link: 'See more on Instagram',
      testimonials_title: 'TESTIMONIALS',
      contact_title: 'GET IN TOUCH',
      contact_subtitle: 'Have a project in mind? Contact me today to start your digital success journey.'
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'SEND MESSAGE'
    },
    common: {
      most_popular: 'MOST POPULAR',
      order_service: 'Order Now',
      verified: 'Verified Client',
      footer_rights: 'All rights reserved.'
    }
  },
  ku: {
    nav: {
      home: 'سەرەتا',
      services: 'خزمەتگوزارییەکان',
      pricing: 'پاکێجە پڕۆفیشناڵەکان',
      portfolio: 'کارەکانم',
      testimonials: 'ڕای بەشداربووان',
      contact: 'پەیوەندی'
    },
    hero: {
      greeting: 'سڵاو لە جیهان',
      iam: 'من',
      role: 'گەشەپێدەر، دروستکەری ناوەڕۆک، و دروستکەری زیرەکی دەستکرد.\nسیستەمی ئۆتۆمەیشن و وێبسایتی پێشکەوتوو بۆ داهاتوو بنیاد دەنێم.',
      cta_contact: 'پەیوەندیم پێوە بکە',
      cta_insta: 'ئینستاگرام'
    },
    sections: {
      services_title: 'خزمەتگوزارییەکانم',
      services_subtitle: 'کلیل لەسەر خزمەتگوزاری بکە بۆ بینینی وردەکاری و نرخەکان',
      portfolio_title: 'ئەوەی دەتوانین بیکەین',
      portfolio_link: 'زیاتر ببینە لە ئینستاگرام',
      testimonials_title: 'ڕای بەشداربووان',
      contact_title: 'پەیوەندی',
      contact_subtitle: 'پرۆژەیەکت لە مێشكدایە؟ ئەمڕۆ پەیوەندیم پێوە بکە بۆ دەستپێکردنی سەرکەوتنی دیجیتاڵیت.'
    },
    form: {
      name: 'ناو',
      email: 'ئیمەیڵ',
      message: 'نامە',
      send: 'ناردنی نامە'
    },
    common: {
      most_popular: 'زۆرترین داواکاری',
      order_service: 'داواکردنی خزمەتگوزاری',
      verified: 'کڕیاری پشتڕاستکراوە',
      footer_rights: 'هەموو مافەکان پارێزراون.'
    }
  }
};

// --- DYNAMIC DATA FUNCTIONS ---

// NEW FUNCTION FOR PROFESSIONAL PACKAGES
export const getProfessionalPackages = (lang: Language): ProfessionalPackage[] => {
  const isEn = lang === 'en';
  const isKu = lang === 'ku';

  return [
    {
      id: 1,
      name: isEn ? "Business Starter" : isKu ? "دەستپێکی بازرگانی" : "حزمة البداية (Starter)",
      oldPrice: "$599",
      price: "$459",
      description: isEn 
        ? "Essential bundle excluding WhatsApp." 
        : isKu 
          ? "پاکێجی سەرەکی بەبێ واتسئەپ." 
          : "الحزمة الأساسية الشاملة (بدون واتساب).",
      features: isEn ? [
        "Instagram & FB Automation (Basic)",
        "Custom Website (Standard)",
        "E-Commerce Store (Full)",
        "Ads Management (Starter)",
        "Branding Design (Basic)"
      ] : isKu ? [
        "ئۆتۆمەیشنی ئینستاگرام و فەیسبووک",
        "دیزاینی وێبسایت",
        "فرۆشگای ئەلیکترۆنی",
        "بەڕێوەبردنی ریکلام",
        "دیزاینی براندینگ"
      ] : [
        "أتمتة إنستغرام وفيسبوك (الخطة الأساسية)",
        "تصميم موقع ويب (الخطة القياسية)",
        "متجر إلكتروني متكامل",
        "إدارة الحملات الإعلانية",
        "هوية بصرية وتصميم"
      ],
      isComingSoon: false
    },
    {
      id: 2,
      name: isEn ? "Ultimate Empire" : isKu ? "پاکێجی ئیمپایەر" : "الإمبراطورية (Ultimate)",
      oldPrice: "$1199",
      price: "$999",
      highlight: true,
      description: isEn 
        ? "All-in-one solution including WhatsApp AI." 
        : isKu 
          ? "چارەسەری گشتگیر لەگەڵ واتسئەپ." 
          : "الحل المتكامل الشامل لكل خدماتنا.",
      features: isEn ? [
        "Everything in Business Starter",
        "WhatsApp AI Automation (Elite)",
        "Priority Support 24/7",
        "Advanced Strategy Session",
        "Full System Integration"
      ] : isKu ? [
        "هەموو شتێک لە پاکێجی دەستپێک",
        "ئۆتۆمەیشنی واتسئەپ (ئیلیت)",
        "پشتگیری 24/7",
        "دانیشتنی ستراتیژی پێشکەوتوو",
        "بەستنەوەی سیستەمی تەواو"
      ] : [
        "كل خدمات حزمة البداية",
        "أتمتة واتساب الذكية (باقة الأعمال)",
        "دعم فني ذو أولوية 24/7",
        "جلسة استراتيجية متقدمة",
        "ربط الأنظمة بالكامل"
      ],
      isComingSoon: false
    },
    {
      id: 3,
      name: isEn ? "Coming Soon" : isKu ? "بەڕێوەیە" : "قريباً",
      price: "",
      description: "",
      features: [],
      isComingSoon: true
    }
  ];
};

export const getTestimonials = (lang: Language): Testimonial[] => {
  const t = (ar: string, en: string, ku: string) => {
    if (lang === 'en') return en;
    if (lang === 'ku') return ku;
    return ar;
  };

  return [
    { id: 1, name: "Ahmed Ali", stars: 5, text: t("خدمة الأتمتة وفرت عليّ وقت كبير جداً، البوت يرد على العملاء بذكاء!", "Automation service saved me huge time. The bot replies intelligently!", "خزمەتگوزاری ئۆتۆمەیشن کاتێکی زۆری بۆ گەڕاندنمەوە.") },
    { id: 2, name: "Sarah Mohammed", stars: 5, text: t("تصميم المتجر كان خرافياً وسريعاً، أنصح بالتعامل معه.", "The store design was legendary and fast. Highly recommended.", "دیزاینی فرۆشگاکە خەیاڵی و خێرا بوو.") },
    { id: 3, name: "Fahad Al-Harbi", stars: 5, text: t("نتائج الإعلانات كانت ممتازة وزادت المبيعات عندي بنسبة 40%.", "Ad results were excellent and increased my sales by 40%.", "ئەنجامی ریکلامەکان نایاب بوون.") },
    { id: 4, name: "Karwan Othman", stars: 5, text: t("أفضل شخص تعاملت معه في بناء أنظمة n8n.", "The best person I worked with building n8n systems.", "باشترین کەس بۆ دروستکردنی سیستەمی n8n.") },
    { id: 5, name: "Layla Hassan", stars: 5, text: t("بوت الإنستغرام يعمل 24 ساعة بدون توقف، شيء لا يصدق.", "Instagram bot works 24/7 without stopping. Incredible.", "بۆتی ئینستاگرام ٢٤ کاتژمێر کار دەکات بێ وەستان.") },
    { id: 6, name: "Omar Youssef", stars: 4, text: t("خدمة العملاء ممتازة والرد سريع جداً.", "Customer service is excellent and reply is very fast.", "خزمەتگوزاری کڕیار نایابە.") },
    { id: 7, name: "Zina Tariq", stars: 5, text: t("تصميم الموقع للعيادة كان احترافياً جداً.", "The clinic website design was very professional.", "دیزاینی وێبسایتی کلینیکەکە زۆر پڕۆفیشناڵ بوو.") },
    { id: 8, name: "Rami K.", stars: 5, text: t("نظام الرد التلقائي ضاعف مبيعاتنا.", "Auto-reply system doubled our sales.", "سیستەمی وەڵامدانەوەی خودکار فرۆشمانى دوو هێندە کرد.") },
    { id: 9, name: "Dina Samer", stars: 5, text: t("الهوية البصرية التي صممتها غيرت شكل البراند بالكامل.", "The visual identity you designed completely changed the brand.", "ناسنامەی بینراو کە دیزاینت کرد براندەکەی گۆڕی.") },
    { id: 10, name: "Hassan J.", stars: 4, text: t("إعلانات فيسبوك حققت نتائج فوق التوقعات.", "Facebook ads achieved results beyond expectations.", "ریکلامی فەیسبووک ئەنجامی نایابی هەبوو.") },
    { id: 11, name: "Mina Adel", stars: 5, text: t("شخص مبدع وخلوق، والعمل معه مريح جداً.", "Creative and polite person, working with him is very comfortable.", "کەسێکی داهێنەر و بەڕێزە.") },
    { id: 12, name: "Yasser F.", stars: 5, text: t("المتجر الإلكتروني سريع جداً وسهل الاستخدام.", "The e-commerce store is very fast and easy to use.", "فرۆشگا ئەلیکترۆنیەکە زۆر خێرا و ئاسانە.") },
    { id: 13, name: "Nour E.", stars: 5, text: t("الذكاء الاصطناعي في الردود يبدو طبيعياً جداً.", "AI in replies feels very natural.", "زیرەکی دەستکرد لە وەڵامەکان زۆر سروشتی دەردەکەوێت.") },
    { id: 14, name: "Ali Bassem", stars: 5, text: t("ربط ووكومرس مع السوشيال ميديا كان دقيقاً.", "Connecting WooCommerce with social media was precise.", "بەستنەوەی ووکۆمێرس لەگەڵ سۆشیاڵ میدیا ورد بوو.") },
    { id: 15, name: "Reem T.", stars: 4, text: t("زيادة متابعين حقيقية وتفاعل ملحوظ.", "Real follower increase and noticeable engagement.", "زیادبوونی فۆڵۆوەر و کارلێکی ڕاستەقینە.") },
    { id: 16, name: "Saman Kurdi", stars: 5, text: t("أتمتة الطلبات وفرت علينا تكلفة موظفين.", "Order automation saved us employee costs.", "ئۆتۆمەیشنی داواکاری تێچووی کارمەندی بۆ گەڕاندینەوە.") },
    { id: 17, name: "Tamer H.", stars: 5, text: t("تصميم اللوجو كان مبتكراً ومعبراً.", "Logo design was innovative and expressive.", "دیزاینی لۆگۆکە داهێنەرانە بوو.") },
    { id: 18, name: "Lara M.", stars: 5, text: t("خطة الإعلانات الشهرية كانت استثماراً ناجحاً.", "Monthly ad plan was a successful investment.", "پلانی ریکلامی مانگانە وەبەرهێنانێکی سەرکەوتوو بوو.") },
    { id: 19, name: "Khalid O.", stars: 5, text: t("الدعم الفني بعد البيع ممتاز.", "After-sales technical support is excellent.", "پشتگیری تەکنیکی دوای فرۆشتن نایابە.") },
    { id: 20, name: "Jwan S.", stars: 5, text: t("فهم احتياجاتي بدقة ونفذها باحترافية.", "Understood my needs precisely and executed professionally.", "تێگەیشتن لە پێداویستییەکانم ورد بوو.") },
    { id: 21, name: "Mostafa A.", stars: 5, text: t("تكامل n8n مع جوجل شيت سهل عملنا كثيراً.", "n8n integration with Google Sheets eased our work a lot.", "تەواوکاری n8n لەگەڵ گۆگڵ شیت کارەکەمانی ئاسان کرد.") },
    { id: 22, name: "Hala W.", stars: 4, text: t("تصميم البوستات جذاب جداً.", "Post design is very attractive.", "دیزاینی پۆستەکان زۆر سەرنجڕاکێشە.") },
    { id: 23, name: "Riad N.", stars: 5, text: t("موقع الشركة أصبح واجهة مشرفة لنا.", "Company website became an honorable facade for us.", "وێبسایتی کۆمپانیا بووەتە ڕوویەکی شانازی بۆ ئێمە.") },
    { id: 24, name: "Tara K.", stars: 5, text: t("بوت الرد الآلي ذكي جداً في فهم اللهجات.", "Auto-reply bot is very smart in understanding dialects.", "بۆتی وەڵامدانەوە زۆر زیرەکە لە تێگەیشتنی شێوەزار.") },
    { id: 25, name: "Bilal D.", stars: 5, text: t("أنصح بخدمة الأتمتة لأي صاحب متجر.", "I recommend automation service for any store owner.", "پێشنیاری خزمەتگوزاری ئۆتۆمەیشن دەکەم.") },
    { id: 26, name: "Dania R.", stars: 5, text: t("تجربة مميزة وسرعة في التنفيذ.", "Distinctive experience and speed in execution.", "ئەزموونێکی تایبەت و خێرایی لە جێبەجێکردن.") },
    { id: 27, name: "Samer G.", stars: 5, text: t("لوحة تحكم المتجر سهلة جداً.", "Store control panel is very easy.", "لوحەی کۆنتڕۆڵی فرۆشگا زۆر ئاسانە.") },
    { id: 28, name: "Faten L.", stars: 5, text: t("زيادة المبيعات كانت فورية بعد تشغيل الحملة.", "Sales increase was instant after launching campaign.", "زیادبوونی فرۆش دەستبەجێ بوو دوای کەمپەین.") },
    { id: 29, name: "Kamal S.", stars: 4, text: t("تصميمات عصرية تناسب الذوق العالمي.", "Modern designs suiting global taste.", "دیزاینی مۆدێرن کە لەگەڵ زەوقی جیهانی دەگونجێت.") },
    { id: 30, name: "Nada P.", stars: 5, text: t("حلول برمجية ذكية وفريدة.", "Smart and unique software solutions.", "چارەسەری نەرمەکاڵای زیرەک و بێهاوتا.") },
    { id: 31, name: "Ibrahim K.", stars: 5, text: t("بوت الواتساب وفر علينا توظيف 3 أشخاص.", "WhatsApp bot saved us hiring 3 people.", "بۆتی واتسئەپ پارەی ٣ کارمەندی بۆ گەڕاندینەوە.") },
    { id: 32, name: "Ghaith M.", stars: 5, text: t("احترافية عالية في التعامل والالتزام.", "High professionalism in dealing and commitment.", "پڕۆفیشناڵی بەرز لە مامەڵە و پابەندبوون.") },
    { id: 33, name: "Salma H.", stars: 5, text: t("موقعي الشخصي أصبح يبدو عالمياً.", "My personal site looks global now.", "وێبسایتی شەخسیم ئێستا جیهانی دەردەکەوێت.") },
    { id: 34, name: "Rawand A.", stars: 5, text: t("خدمة تستحق كل دولار.", "Service worth every dollar.", "خزمەتگوزارییەکە شایەنی هەموو دۆلارێکە.") },
    { id: 35, name: "Zeinab F.", stars: 4, text: t("التصاميم إبداعية جداً.", "Designs are very creative.", "دیزاینەکان زۆر داهێنەرانەن.") },
    { id: 36, name: "Majid O.", stars: 5, text: t("نظام إدارة العملاء عبر الـ CRM ممتاز.", "CRM customer management system is excellent.", "سیستەمی بەڕێوەبردنی کڕیار نایابە.") },
    { id: 37, name: "Vian K.", stars: 5, text: t("شكراً على المصداقية والسرعة.", "Thanks for credibility and speed.", "سوپاس بۆ ڕاستگۆیی و خێرایی.") },
    { id: 38, name: "Adnan T.", stars: 5, text: t("تحسين محركات البحث رفع ترتيب موقعي.", "SEO improved my site ranking.", "SEO ڕیزبەندی وێبسایتەکەمی بەرز کردەوە.") },
    { id: 39, name: "Bayan L.", stars: 5, text: t("فريق عمل محترم ومتعاون.", "Respectful and cooperative team.", "تیمێکی بەڕێز و هاوکار.") },
    { id: 40, name: "Sherzad R.", stars: 5, text: t("أفضل استثمار لعملي هذا العام.", "Best investment for my business this year.", "باشترین وەبەرهێنان بۆ کارەکەم ئەمساڵ.") },
    { id: 41, name: "Maysam K.", stars: 5, text: t("دقة في التفاصيل بشكل مذهل.", "Amazing attention to detail.", "وردی لە وردەکارییەکان بە شێوەیەکی سەرسوڕهێنەر.") },
    { id: 42, name: "Walid J.", stars: 5, text: t("البوت يتحدث وكأنه موظف حقيقي.", "Bot speaks like a real employee.", "بۆتەکە وەک کارمەندێکی ڕاستەقینە قسە دەکات.") },
    { id: 43, name: "Shilan M.", stars: 4, text: t("خدمة إدارة الحسابات مريحة جداً.", "Account management service is very comfortable.", "خزمەتگوزاری بەڕێوەبردنی هەژمار زۆر ئاسوودەیە.") },
    { id: 44, name: "Qusay H.", stars: 5, text: t("تقنيات حديثة لم أكن أعرفها.", "Modern technologies I didn't know.", "تەکنەلۆژیای مۆدێرن کە نەمدەزانی.") },
    { id: 45, name: "Nizar B.", stars: 5, text: t("سأتعامل معكم دائماً.", "I will always work with you.", "همیشە کارتان لەگەڵ دەکەم.") },
    { id: 46, name: "Diana S.", stars: 5, text: t("المتجر يعمل بسلاسة على الموبايل.", "Store works smoothly on mobile.", "فرۆشگاکە بە لوسى لەسەر مۆبایل کار دەکات.") },
    { id: 47, name: "Alan P.", stars: 5, text: t("الأتمتة جعلت عملي يعمل لوحده.", "Automation made my business run itself.", "ئۆتۆمەیشن وای کرد کارەکەم بە تەنها کار بکات.") },
    { id: 48, name: "Firas D.", stars: 5, text: t("مبدع في حل المشاكل التقنية.", "Creative in solving technical problems.", "داهێنەر لە چارەسەرکردنی کێشە تەکنیکییەکان.") },
    { id: 49, name: "Rasha T.", stars: 5, text: t("تنسيق الألوان في التصميم رائع.", "Color coordination in design is wonderful.", "ڕێکخستنی ڕەنگەکان لە دیزاین نایابە.") },
    { id: 50, name: "Gorran K.", stars: 5, text: t("شريك نجاح حقيقي.", "A real success partner.", "هاوبەشێکی ڕاستەقینەی سەرکەوتن.") },
    { id: 51, name: "Yara M.", stars: 5, text: t("خدمة 5 نجوم بجدارة.", "5-star service well deserved.", "خزمەتگوزاری ٥ ئەستێرە بە شایستەیی.") },
    { id: 52, name: "Bassam H.", stars: 4, text: t("تجاوب سريع مع التعديلات.", "Fast response to edits.", "وەڵامدانەوەی خێرا بۆ دەستکارییەکان.") },
    { id: 53, name: "Sawsan F.", stars: 5, text: t("وفرتوا علي جهد كبير.", "You saved me a lot of effort.", "هەوڵێکی زۆرتان بۆ گەڕاندمەوە.") },
    { id: 54, name: "Azad N.", stars: 5, text: t("شغل نظيف ومرتب.", "Clean and organized work.", "کارێکی پاک و ڕێک.") }
  ];
};

// Tech Stack - Programming Languages & Technologies
export const TECH_STACK = [
  // Programming Languages
  { name: 'Python', color: 'text-white', bg: 'bg-white/10', logo: '/logos/python.svg' },
  { name: 'JavaScript', color: 'text-white', bg: 'bg-white/10', logo: '/logos/javascript.svg' },
  { name: 'TypeScript', color: 'text-white', bg: 'bg-white/10', logo: '/logos/typescript.svg' },
  
  // Frontend Frameworks
  { name: 'React', color: 'text-white', bg: 'bg-white/10', logo: '/logos/react.svg' },
  { name: 'Vite', color: 'text-white', bg: 'bg-white/10', logo: '/logos/vite.svg' },
  
  // Backend & Runtime
  { name: 'Node.js', color: 'text-white', bg: 'bg-white/10', logo: '/logos/nodejs.svg' },
  
  // Automation & Tools
  { name: 'n8n', color: 'text-white', bg: 'bg-white/10', logo: '/logos/n8n.svg' },
  { name: 'Automation', color: 'text-white', bg: 'bg-white/10', logo: '/logos/automation.svg' },
  
  // Companies & Platforms
  { name: 'Meta', color: 'text-white', bg: 'bg-white/10', logo: '/logos/meta.svg' },
  { name: 'Amazon', color: 'text-white', bg: 'bg-white/10', logo: '/logos/amazon.svg' },
  
  // E-commerce
  { name: 'WooCommerce', color: 'text-white', bg: 'bg-white/10', logo: '/logos/woocommerce.svg' },
  { name: 'Shopify', color: 'text-white', bg: 'bg-white/10', logo: '/logos/shopify.svg' },
];

export const getServices = (lang: Language): Service[] => {
  const isEn = lang === 'en';
  const isKu = lang === 'ku';

  // Helper Strings
  const day30 = isEn ? "/ 30 Days" : isKu ? "/ ٣٠ ڕۆژ" : "/ 30 يوم";
  const year = isEn ? "/ Year" : isKu ? "/ ساڵ" : "/ سنة";
  const lifetime = isEn ? "Lifetime" : isKu ? "هەتاهەتایی" : "مدى الحياة";
  const oneTime = isEn ? "One Time" : isKu ? "یەک جار" : "لمرة واحدة";
  const campaign = isEn ? "/ Campaign" : isKu ? "/ کەمپەین" : "/ حملة";
  const packageStr = isEn ? "Package" : isKu ? "پاکێج" : "حزمة";

  return [
    {
      id: 'automation',
      title: isEn ? 'Instagram & Facebook Automation' : isKu ? 'ئۆتۆمەیشنی ئینستاگرام و فەیسبووک' : 'أتمتة إنستغرام وفيسبوك',
      icon: <Bot className="w-10 h-10 text-neon-red" />,
      shortDescription: isEn 
        ? 'Auto-replies, post scheduling, and AI for customer service.' 
        : isKu 
          ? 'وەڵامدانەوەی خودکار، دانانی کاتی پۆست، و زیرەکی دەستکرد بۆ خزمەتگوزاری کڕیار.'
          : 'أتمتة الردود، جدولة المنشورات، وذكاء اصطناعي لخدمة العملاء.',
      fullDescription: isEn
        ? `A complete automation system for your social media.
           It explains your services, replies to comments/messages, and takes orders automatically.
           Includes post scheduling and AI integration. Can also include a simple e-store inside chat.`
        : isKu
          ? `سیستەمێکی ئۆتۆمەیشنی تەواو بۆ سۆشیاڵ میدیاکانت.
             خزمەتگوزارییەکانت ڕوون دەکاتەوە، وەڵامی کۆمێنت و نامەکان دەداتەوە، و داواکارییەکان بە شێوەی خودکار وەردەگرێت.
             دەتوانرێت پۆستەکان خشتەبەند بکرێن و زیرەکی دەستکرد زیاد بکرێت. هەروەها دەتوانرێت فرۆشگایەکی سادە لە ناو نامەکان زیاد بکرێت.`
          : `نظام أتمتة متكامل لحساباتك على السوشيال ميديا.
             يشرح النظام للعميل خدماتك، يرد على التعليقات والرسائل، ويأخذ الطلبات أوتوماتيكياً.
             يمكن جدولة المنشورات وإضافة الذكاء الاصطناعي للردود الطبيعية.
             يشمل إمكانية إضافة متجر إلكتروني بسيط داخل المحادثة.`,
      plans: [
        {
          name: "Basic",
          price: "$29",
          duration: day30,
          features: isEn ? [
            "Unlimited Bots",
            "Basic Tools (API – Webview)",
            "Auto Email Sending",
            "Broadcasting & Sequences",
            "Instagram Bot & Persistent Menu",
            "Auto Comments & Replies",
            "Posting (FB – IG)",
            "Live Chat"
          ] : isKu ? [
             "ژمارەی بۆت: بێسنوور",
             "ئامرازە سەرەکییەکان (API – Webview)",
             "ناردنی ئیمەیڵی خودکار",
             "بڵاوکردنەوە و نامەی زنجیرەیی",
             "بۆتی ئینستاگرام و لیستی بەردەوام",
             "وەڵامدانەوەی کۆمێنت و نامەی خودکار",
             "پۆستکردن (Facebook – Instagram)",
             "چاتی ڕاستەوخۆ"
          ] : [
            "عدد البوتات: غير محدود",
            "أدوات الربط الأساسية (API – Webview)",
            "إرسال بريد تلقائي",
            "أدوات البث والرسائل التسلسلية",
            "بوت إنستغرام & القائمة الدائمة",
            "نظام التعليقات والردود التلقائية",
            "نشر على (Facebook – Instagram)",
            "شات مباشر"
          ]
        },
        {
          name: "Pro",
          price: "$99",
          duration: day30,
          features: isEn ? [
            "All Basic Features",
            "AI Responses",
            "SMS & Email Campaigns",
            "User Input Flow",
            "E-Commerce & WooCommerce",
            "Team Manager",
            "WhatsApp Orders",
            "Unlimited Tools Usage"
          ] : isKu ? [
            "هەموو تایبەتمەندییەکان Basic",
            "وەڵامدانەوەی زیرەکی دەستکرد",
            "کەمپەینی نامە و ئیمەیڵ",
            "فلووی تێخستنی بەکارهێنەر",
            "بازرگانی ئەلیکترۆنی و ووکۆمێرس",
            "بەڕێوەبەری تیم",
            "ناردنی داواکاری لە ڕێگەی واتسئەپ",
            "بەکارهێنانی بێسنووری ئامرازەکان"
          ] : [
            "كل مزايا Basic",
            "ردود الذكاء الاصطناعي",
            "حملات البريد والرسائل النصية",
            "فلو الإنبت (User Input Flow)",
            "التجارة الإلكترونية & دمج ووكومرس",
            "مدير فريق",
            "إرسال الطلبات عبر واتساب",
            "إمكانيات غير محدودة بالأدوات"
          ]
        },
        {
          name: "Premium",
          price: "$499",
          duration: year,
          highlight: true, // Moved Most Popular to Premium
          features: isEn ? [
            "All Pro Features",
            "Google Sheet Accounts",
            "Team Members: 2",
            "WooCommerce Integrations: 5",
            "Advanced Annual Features"
          ] : isKu ? [
            "هەموو تایبەتمەندییەکان Pro",
            "هەژماری Google Sheet",
            "ژمارەی ئەندامانی تیم: ٢",
            "تەواوکاری ووکۆمێرس: ٥",
            "تایبەتمەندی پێشکەوتوو بۆ ساڵانە"
          ] : [
            "كل مزايا Pro",
            "حسابات Google Sheet",
            "عدد أعضاء الفريق: 2",
            "تكامل ووكومرس: 5",
            "مميزات متقدمة للنشر السنوي"
          ]
        },
        {
          name: "Lifetime",
          price: "$1499",
          duration: lifetime,
          badge: isEn ? "Lifetime Access" : isKu ? "هەتاهەتایی" : "مدى الحياة", // Added custom badge
          features: isEn ? [
            "All Premium Features",
            "(Saver) One-time purchase",
            "Lifetime Updates",
            "Unlimited Team Manager",
            "Unlimited WooCommerce",
            "Full Future Access"
          ] : isKu ? [
            "هەموو تایبەتمەندییەکان Premium",
            "(سێڤەر) کڕینی یەک جار",
            "نوێکاری هەتاهەتایی",
            "بەڕێوەبەری تیم بێسنوور",
            "ووکۆمێرس بێسنوور",
            "دەستگەیشتنی تەواو بۆ هەموو ئامرازەکان"
          ] : [
            "كل مزايا Premium",
            "(الاوفر) شراء مرة واحدة",
            "تحديثات مدى الحياة",
            "مدير فريق غير محدود",
            "دمج ووكومرس غير محدود",
            "وصول كامل بلا قيود مستقبلية"
          ]
        }
      ]
    },
    {
      id: 'whatsapp-automation',
      title: isEn ? 'WhatsApp AI Automation' : isKu ? 'ئۆتۆمەیشنی زیرەکی واتسئەپ' : 'أتمتة واتساب الذكية',
      icon: <MessageCircle className="w-10 h-10 text-green-500" />,
      shortDescription: isEn 
        ? 'Smart AI bot for appointments & orders, synced with Telegram.' 
        : isKu 
          ? 'بۆتی زیرەک بۆ کات و داواکاری، بەستراوە بە تێلیگرام.'
          : 'بوت ذكي للمواعيد والطلبات، مربوط مع تليجرام.',
      fullDescription: isEn
        ? `A premium WhatsApp solution for Doctors, Restaurants, and Cafes. 
           It handles appointments and orders automatically using AI. 
           All requests are instantly forwarded to your private Telegram Bot for easy management.`
        : isKu
          ? `چارەسەرێکی واتسئەپی پڕۆفیشناڵ بۆ پزیشک، ڕێستۆرانت و کافێکان. 
             بۆتەکە کاتەکان دیاری دەکات و داواکاری وەردەگرێت بە زیرەکی دەستکرد. 
             هەموو داواکارییەکان ڕاستەوخۆ دەنێردرێن بۆ بۆتی تێلیگرامی تایبەت بە خۆت بۆ بەڕێوەبردن.`
          : `حل واتساب احترافي للأطباء والمطاعم والكافيهات. 
             يقوم البوت بحجز المواعيد وأخذ الطلبات تلقائياً باستخدام الذكاء الاصطناعي. 
             يتم تحويل جميع الطلبات فوراً إلى بوت تليجرام خاص بك لإدارتها بسهولة.`,
      plans: [
        {
          name: isEn ? "Business Elite" : isKu ? "بیزنس ئیلیت" : "باقة الأعمال",
          price: "$499",
          duration: year,
          highlight: true,
          features: isEn ? [
            "1st 1000 Messages Free/Month",
            "AI Smart Reply (1st Month Free)",
            "Auto Appointment Booking",
            "Order Taking System",
            "Forward Orders to Telegram Bot",
            "Best for: Doctors, Cafes, Restaurants"
          ] : isKu ? [
            "١٠٠٠ نامەی سەرەتا بێ بەرامبەر/مانگانە",
            "وەڵامی زیرەکی دەستکرد (مانگی یەکەم بێ بەرامبەر)",
            "دیاریکردنی کاتی خودکار",
            "سیستەمی وەرگرتنی داواکاری",
            "ناردنی داواکاری بۆ بۆتی تێلیگرام",
            "باشترین بۆ: پزیشک، کافێ، ڕێستۆرانت"
          ] : [
            "أول 1000 رسالة مجاناً كل شهر",
            "ردود الذكاء الاصطناعي (أول شهر مجاناً)",
            "حجز مواعيد وأخذ طلبات آلياً",
            "تحويل الطلبات إلى بوت تليجرام خاص",
            "مثالي لـ: الأطباء، المطاعم، الكافيهات",
            "دعم فني وضبط النظام بالكامل"
          ]
        }
      ]
    },
    {
      id: 'web-design',
      title: isEn ? 'Custom Website Design' : isKu ? 'دیزاینی وێبسایتی تایبەت' : 'تصميم مواقع حسب الطلب',
      icon: <Layout className="w-10 h-10 text-neon-red" />,
      shortDescription: isEn 
        ? 'Modern custom website design (Design Only/No complex dev).' 
        : isKu 
          ? 'دیزاینی وێبسایتی مۆدێرن بەپێی داواکاری (بەبێ پەرەپێدانی ئاڵۆز).'
          : 'تصميم مواقع عصرية حسب الطلب (بدون تطوير معقد).',
      fullDescription: isEn
        ? 'Professional website designs to showcase your services. Flexible options whether you need a single page or a full site.'
        : isKu
          ? 'دیزاینی وێبسایتی پیشەیی بۆ نمایشکردنی خزمەتگوزارییەکانت. هەڵبژاردەی گونجاو جا پێویستت بە یەک پەڕە بێت یان وێبسایتێکی تەواو.'
          : 'تصميم مواقع ويب احترافية لعرض خدماتك أو شركتك. نوفر خيارات مرنة تناسب احتياجاتك سواء كنت تحتاج لصفحة واحدة أو موقع متكامل.',
      plans: [
        {
          name: isEn ? "Single Page" : isKu ? "یەک پەڕە" : "Single Page",
          price: "$150",
          duration: year,
          features: isEn ? [
            "One Landing Page",
            "Responsive Design",
            "Domain Connection",
            "Basic Support"
          ] : isKu ? [
            "یەک پەڕەی سەرەکی",
            "دیزاینی گونجاو (Responsive)",
            "بەستنەوەی دۆمەین",
            "پشتگیری سەرەتایی"
          ] : [
            "صفحة هبوط واحدة",
            "تصميم متجاوب",
            "ربط دومين",
            "دعم فني أساسي"
          ]
        },
        {
          name: "Standard",
          price: "$250",
          duration: oneTime,
          highlight: true,
          features: isEn ? [
            "3 Pages",
            "Professional Design",
            "Contact Form",
            "Photo Gallery",
            "Basic SEO"
          ] : isKu ? [
            "٣ پەڕە",
            "دیزاینی پیشەیی",
            "فۆڕمی پەیوەندی",
            "پێشانگای وێنە",
            "باشکردنی بزوێنەری گەڕان (SEO) سەرەتایی"
          ] : [
            "3 صفحات",
            "تصميم احترافي",
            "نموذج اتصال",
            "معرض صور",
            "تحسين محركات البحث (SEO) أولي"
          ]
        },
        {
          name: "Business",
          price: "$300",
          duration: oneTime,
          features: isEn ? [
            "5 Pages",
            "Easy Control Panel",
            "Google Maps",
            "Social Media Integration",
            "1 Month Support"
          ] : isKu ? [
            "٥ پەڕە",
            "لوحەی کۆنتڕۆڵی ئاسان",
            "نەخشەی گۆگڵ",
            "بەستنەوەی سۆشیاڵ میدیا",
            "پشتگیری بۆ ماوەی مانگێک"
          ] : [
            "5 صفحات",
            "لوحة تحكم سهلة",
            "خرائط جوجل",
            "ربط سوشيال ميديا",
            "دعم فني لمدة شهر"
          ]
        }
      ]
    },
    {
      id: 'ecommerce',
      title: isEn ? 'E-commerce Stores' : isKu ? 'فرۆشگای ئەلیکترۆنی' : 'المتاجر الإلكترونية',
      icon: <ShoppingCart className="w-10 h-10 text-neon-red" />,
      shortDescription: isEn 
        ? 'Professional WooCommerce online stores.' 
        : isKu 
          ? 'دروستکردنی فرۆشگای ئەلیکترۆنی پیشەیی بە ووکۆمێرس.'
          : 'إنشاء متاجر إلكترونية احترافية مع ووكومرس.',
      fullDescription: isEn 
        ? 'Transform your business digitally with powerful WooCommerce stores, professional themes, and sales-ready setup.'
        : isKu 
          ? 'بازرگانییەکەت بگۆڕە بۆ دیجیتاڵی بە دروستکردنی فرۆشگای بەهێز لەسەر بنەمای ووکۆمێرس بە ثیمی پیشەیی و ئامادە بۆ فرۆشتن.'
          : 'نحول تجارتك إلى الرقمية بإنشاء متاجر إلكترونية قوية مبنية على ووكومرس مع ثيمات احترافية وجاهزة للبيع.',
      plans: [
        {
          name: isEn ? "Full Store" : isKu ? "فرۆشگای تەواو" : "Full Store",
          price: "$250",
          duration: oneTime,
          highlight: true,
          features: isEn ? [
            "WooCommerce Setup",
            "Custom Pro Theme",
            "Payment Gateway Setup",
            "Initial Products Upload",
            "Order Management Panel",
            "Mobile Responsive"
          ] : isKu ? [
            "دامەزراندنی ووکۆمێرس",
            "ثیمی پیشەیی تایبەت",
            "رێکخستنی دەروازەی پارەدان",
            "زیادکردنی بەرهەمە سەرەتاییەکان",
            "لوحەی بەڕێوەبردنی داواکاری",
            "دیزاینی گونجاو بۆ مۆبایل"
          ] : [
            "تنصيب ووكومرس",
            "ثيم احترافي مخصص",
            "إعداد بوابات الدفع",
            "إضافة المنتجات الأولية",
            "لوحة تحكم لإدارة الطلبات",
            "تصميم متجاوب للجوال"
          ]
        }
      ]
    },
    {
      id: 'ads',
      title: isEn ? 'Professional Ads Growth' : isKu ? 'گەشەی ریکلامی پیشەیی' : 'إعلانات ممولة احترافية',
      icon: <TrendingUp className="w-10 h-10 text-neon-red" />,
      shortDescription: isEn 
        ? 'Pro paid ads to increase sales and growth.' 
        : isKu 
          ? 'ریکلامی پارەدار بۆ زیادکردنی فرۆش و گەشەکردن.'
          : 'إعلانات ممولة احترافية لزيادة المبيعات والنمو.',
      fullDescription: isEn 
        ? 'Expert ad strategies explaining impact on sales and account growth. Targeted reach for your audience.'
        : isKu 
          ? 'شروڤەیەکی سادە دەربارەی ریکلام بە شێوەی پیشەیی و کاریگەری لەسەر فرۆش و گەشەی هەژمار. ستراتیژی ورد بۆ گەیشتن بە بینەر.'
          : 'شرح بسيط عن الإعلانات باحتراف وكيف تؤثر على المبيعات ونمو الحساب. استراتيجيات مدروسة للوصول لجمهورك المستهدف.',
      plans: [
        {
          name: "Starter",
          price: "$129",
          duration: campaign,
          features: isEn ? [
            "1 Reel",
            "1 Photo Design",
            "10 Days Ad Management",
            "Precise Targeting",
            "Performance Report"
          ] : isKu ? [
            "١ ڕیڵز",
            "١ دیزاینی وێنە",
            "بەڕێوەبردنی ریکلام بۆ ١٠ ڕۆژ",
            "ئامانجگرتنی ورد",
            "ڕاپۆرتی ئەدا"
          ] : [
            "1 ريلز (فيديو قصير)",
            "1 صورة تصميم",
            "إدارة إعلان لمدة 10 أيام",
            "استهداف دقيق",
            "تقرير أداء"
          ]
        },
        {
          name: "Growth",
          price: "$159",
          duration: campaign,
          features: isEn ? [
            "2 Reels",
            "2 Photo Designs",
            "10 Days Ad Management",
            "Campaign Optimization",
            "Increased Engagement"
          ] : isKu ? [
            "٢ ڕیڵز",
            "٢ دیزاینی وێنە",
            "بەڕێوەبردنی ریکلام بۆ ١٠ ڕۆژ",
            "باشترکردنی بەردەوامی کەمپەین",
            "زیادکردنی کارلێک (Engagement)"
          ] : [
            "2 ريلز",
            "2 بوست تصميم",
            "إدارة إعلان لمدة 10 أيام",
            "تحسين مستمر للحملة",
            "زيادة التفاعل"
          ]
        },
        {
          name: "Exclusive",
          price: "$199",
          duration: campaign,
          highlight: true,
          features: isEn ? [
            "5 Reels",
            "5 Photo Designs",
            "10 Days Ad Management",
            "Most Popular & Exclusive",
            "Max Reach & Sales"
          ] : isKu ? [
            "٥ ڕیڵز",
            "٥ دیزاینی وێنە",
            "بەڕێوەبردنی ریکلام بۆ ١٠ ڕۆژ",
            "داواکراوترین و تایبەت",
            "زۆرترین گەیشتن و فرۆش"
          ] : [
            "5 ريلز",
            "5 بوستات تصميم",
            "إدارة إعلان لمدة 10 أيام",
            "الأكثر طلباً وحصرية",
            "أقصى وصول ومبيعات"
          ]
        }
      ]
    },
    {
      id: 'branding',
      title: isEn ? 'Branding & Design Identity' : isKu ? 'براندینگ و ناسنامەی دیزاین' : 'الهوية البصرية والتصميم',
      icon: <Palette className="w-10 h-10 text-neon-red" />,
      shortDescription: isEn 
        ? 'Visual identity and social media designs.' 
        : isKu 
          ? 'ناسنامەی بینراو و دیزاینی سۆشیاڵ میدیا بۆ بەهێزکردنی براندەکەت.'
          : 'هوية بصرية وتصاميم سوشيال ميديا لتعزيز علامتك.',
      fullDescription: isEn 
        ? 'Professional design is your business face. We help build a strong identity that positively impacts your account and attracts clients.'
        : isKu 
          ? 'دیزاینی پیشەیی ڕووی کارەکەتە. یارمەتیت دەدەین بۆ دروستکردنی ناسنامەیەکی بەهێز کە کاریگەری ئەرێنی هەبێت و کڕیار ڕابکێشێت.'
          : 'التصميم الاحترافي هو واجهة عملك. نساعدك في بناء هوية قوية تؤثر إيجابياً على الحساب وتجذب العملاء.',
      plans: [
        {
          name: isEn ? "Basic Content" : isKu ? "ناوەڕۆکی سەرەتایی" : "Basic Content",
          price: "$39",
          duration: packageStr,
          features: isEn ? [
            "5 Social Media Posts",
            "High Quality Design",
            "Consistent with Identity",
            "Source Files Included"
          ] : isKu ? [
            "٥ پۆستی سۆشیاڵ میدیا",
            "دیزاینی کوالێتی بەرز",
            "گونجاو لەگەڵ ناسنامە",
            "تەسلیمکردنی فایلە ئەسڵییەکان"
          ] : [
            "5 بوستات سوشيال ميديا",
            "تصميم عالي الدقة",
            "متناسق مع الهوية",
            "تسليم ملفات المصدر"
          ]
        },
        {
          name: isEn ? "Pro Content" : isKu ? "ناوەڕۆکی پیشەیی" : "Pro Content",
          price: "$99",
          duration: packageStr,
          highlight: true,
          features: isEn ? [
            "10 Social Media Posts",
            "Unlimited Revisions",
            "Highlights Design",
            "Story Design",
            "Creative Content Ideas"
          ] : isKu ? [
            "١٠ پۆستی سۆشیاڵ میدیا",
            "تێبینی و دەستکاری بێسنوور",
            "دیزاینی هایلایت (Highlights)",
            "دیزاینی ستۆری",
            "بیرۆکەی داهێنەرانە بۆ ناوەڕۆک"
          ] : [
            "10 بوستات سوشيال ميديا",
            "تعديلات مفتوحة",
            "تصميم هايلايت (Highlights)",
            "تصميم ستوري",
            "أفكار إبداعية للمحتوى"
          ]
        }
      ]
    }
  ];
};
