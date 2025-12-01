
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Menu, ArrowRight, CheckCircle, Search, User, 
  Layout, Hexagon, ShoppingCart, X, Star, ShieldCheck, 
  RotateCcw, Minus, Maximize2, Workflow, Database, Cloud, 
  MessageSquare, Bot, Zap, Code, BarChart, Server, Globe, 
  Box, Layers, RefreshCcw, Mail, MapPin, Lock
} from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectDetailProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

// --- ROBUST IMAGE SYSTEM (NO REDIRECTS) ---

// High Quality Curated Images to prevent connection errors
const IMAGE_COLLECTIONS: Record<string, string[]> = {
  // Abstract / 3D / Neon
  '3d': [
    '1618005182384-a83a8bd57fbe', // Abstract Shapes
    '1550684848-fac1c5b4e853', // Neon Tunnel
    '1634152962476-4b8a00e1915c', // Dark 3D
    '1563089145-599997674d42', // Neon Lights
    '1614850523459-c2f4c699c52e'  // Abstract Fluid
  ],
  // Tech / Gaming / Servers
  'tech': [
    '1518770660439-4636190af475', // Circuit Chip
    '1550751827-4bd374c3f58b', // Server Room
    '1593640408609-0ef8974971d8', // Gaming Keyboard
    '1531297422935-d67944c1602d', // Code Screen
    '1526374965328-7f61d4dc18c5'  // Matrix Code
  ],
  // Fashion / Products
  'product': [
    '1542291026-7eec264c27ff', // Red Shoes
    '1523381210434-271e8be1f52b', // Clothing Rack
    '1505740420928-5e560c06d30e', // Headphones
    '1572635196237-14b3f281503f', // Sunglasses
    '1600185365483-26d7a4cc7519'  // Sneaker
  ],
  // Architecture / Interior / Minimal
  'minimal': [
    '1592078615290-033ee584e267', // Minimal Chair
    '1494438639946-1ebd1d20bf85', // White Room
    '1493663284031-b7e3aefcae8e', // Plant on table
    '1507146426996-ef05306b995a', // Minimal Building
    '1519710164239-da123dc03ef4'  // Interior Art
  ],
  // Corporate / Office / People
  'people': [
    '1560250097-0b93528c311a', // Professional Man
    '1573496359142-b8d87734a5a2', // Professional Woman
    '1556761175-5973ac0f9648', // Handshake
    '1600880292205-83d474558580', // Team Meeting
    '1519389950473-47ba0277781c'  // Typing on laptop
  ]
};

const getImageUrl = (imageId: string | undefined, category: keyof typeof IMAGE_COLLECTIONS, index: number) => {
  // If a specific ID is provided (like for Hero), use it
  if (imageId && index === -1) {
    return `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=1200&q=80`;
  }
  
  // Otherwise pick from the collection based on index
  const collection = IMAGE_COLLECTIONS[category] || IMAGE_COLLECTIONS['minimal'];
  const safeIndex = index % collection.length;
  const id = collection[safeIndex];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
};

// Helper to map project theme/niche to image collection
const getThemeCategory = (tags: string, layout: string): keyof typeof IMAGE_COLLECTIONS => {
  if (layout === '3d-portfolio') return '3d';
  if (layout === 'n8n-automation' || layout === 'tech') return 'tech';
  if (layout === 'bold' || tags.includes('fashion')) return 'product';
  if (layout === 'agency-modern') return 'people';
  return 'minimal';
};

const getRandomPrice = (index: number) => {
  const prices = [49.99, 89.00, 129.50, 249.00, 15.99, 199.00];
  return prices[index % prices.length];
};

// --- SUB-COMPONENTS FOR CONSISTENCY ---

const AnnouncementBar = ({ bg, text }: { bg: string, text: string }) => (
  <div className={`${bg} ${text} text-[10px] font-bold py-1.5 text-center uppercase tracking-widest px-4`}>
    Free Shipping Worldwide • 30-Day Money Back Guarantee
  </div>
);

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'center' | 'start';
  color?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center', color = 'text-gray-900' }) => (
  <div className={`mb-8 ${align === 'center' ? 'text-center' : 'text-start'} px-6`}>
    <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${color}`}>{title}</h2>
    <div className={`h-1 w-16 bg-current opacity-30 mb-3 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    <p className="opacity-60 max-w-xl mx-auto text-sm">{subtitle}</p>
  </div>
);

interface ProductCardProps {
  index: number;
  styleType: string;
  project: PortfolioItem;
  onAddToCart: (e?: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ index, styleType, project, onAddToCart }) => {
  const price = getRandomPrice(index);
  const imgUrl = getImageUrl(undefined, 'product', index);
  
  if (styleType === 'minimal') {
    return (
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-3">
          <img src={imgUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Product" />
          <button 
            onClick={onAddToCart}
            className="absolute bottom-3 right-3 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
          >
            <ShoppingBag size={14} />
          </button>
        </div>
        <h3 className="text-xs font-medium text-gray-900">Premium Item {index + 1}</h3>
        <p className="text-gray-500 text-xs mt-1">${price}</p>
      </div>
    );
  }

  if (styleType === 'tech') {
    return (
      <div className="group bg-slate-900 border border-cyan-900/50 hover:border-cyan-500/50 transition-colors overflow-hidden">
        <div className="aspect-square relative overflow-hidden">
           <img src={imgUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Tech" />
           <div className="absolute top-2 right-2 bg-cyan-500/20 text-cyan-300 text-[10px] px-1.5 py-0.5 font-mono border border-cyan-500/50">NEW</div>
        </div>
        <div className="p-3">
           <div className="flex justify-between items-start mb-2">
             <h3 className="text-cyan-50 font-bold font-mono text-xs truncate pr-2">CYBER ITEM 0{index}</h3>
             <span className="text-cyan-400 font-mono text-xs">${price}</span>
           </div>
           <button onClick={onAddToCart} className="w-full py-1.5 mt-1 bg-cyan-900/30 text-cyan-400 border border-cyan-800 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all text-[10px] font-bold tracking-wider">
             ADD
           </button>
        </div>
      </div>
    );
  }

  // Standard/Default
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img src={imgUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Product" />
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={onAddToCart}
            className="w-full bg-black text-white py-2 rounded font-bold text-xs shadow-lg hover:bg-gray-800"
          >
            Add - ${price}
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-gray-800 mb-1 text-sm">{project.niche} Product {index}</h3>
        <p className="font-bold text-sm text-black">${price}</p>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  index: number;
  styleType: string;
  project: PortfolioItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, styleType, project }) => {
  // Determine category based on style
  const cat = styleType === 'tech' ? 'tech' : (styleType === 'minimal' ? 'minimal' : 'people');
  const imgUrl = getImageUrl(undefined, cat, index + 10);
  
  return (
    <div className={`p-5 ${styleType === 'tech' ? 'bg-slate-900 border border-cyan-900' : 'bg-white border border-gray-100'} rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
       <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${styleType === 'tech' ? 'bg-cyan-900/30 text-cyan-400' : `${project.accentColor} text-white`}`}>
          <Layout size={20} />
       </div>
       <h3 className={`text-lg font-bold mb-2 ${styleType === 'tech' ? 'text-white' : 'text-gray-900'}`}>Professional Service {index + 1}</h3>
       <p className={`text-xs leading-relaxed ${styleType === 'tech' ? 'text-gray-400' : 'text-gray-600'}`}>
         We provide top-tier {project.niche.toLowerCase()} solutions tailored to your specific needs.
       </p>
       <button className={`mt-3 text-xs font-bold flex items-center gap-1 ${styleType === 'tech' ? 'text-cyan-400' : 'text-black'} hover:underline`}>
         Learn More <ArrowRight size={12} />
       </button>
    </div>
  );
};

interface FooterProps {
  styleType: string;
  project: PortfolioItem;
  isStore: boolean;
}

const Footer: React.FC<FooterProps> = ({ styleType, project, isStore }) => {
  const isDark = styleType === 'tech' || styleType === 'luxury' || styleType === '3d-portfolio' || styleType === 'agency-modern' || styleType === 'n8n-automation';
  const bg = isDark ? (styleType === 'agency-modern' ? 'bg-white text-black' : 'bg-black border-t border-gray-800') : 'bg-gray-900';
  const text = (isDark && styleType !== 'agency-modern') ? 'text-gray-400' : (styleType === 'agency-modern' ? 'text-gray-600' : 'text-gray-300');
  const head = (isDark && styleType !== 'agency-modern') ? 'text-white' : (styleType === 'agency-modern' ? 'text-black' : 'text-white');
  const border = styleType === 'agency-modern' ? 'border-gray-200' : 'border-gray-800';

  return (
    <footer className={`${styleType === 'agency-modern' ? 'bg-white border-t border-gray-100' : bg} py-10 px-6`}>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
         <div className="space-y-3">
            <h3 className={`text-xl font-bold ${head} flex items-center gap-2`}>
              {project.icon} {project.title}
            </h3>
            <p className={`text-xs ${text}`}>
              Quality, trust, and excellence in every detail.
            </p>
         </div>
         
         <div>
           <h4 className={`font-bold mb-3 text-sm ${head}`}>Links</h4>
           <ul className={`space-y-2 text-xs ${text}`}>
             <li className="hover:opacity-70 cursor-pointer">About Us</li>
             <li className="hover:opacity-70 cursor-pointer">Services</li>
             <li className="hover:opacity-70 cursor-pointer">Contact</li>
           </ul>
         </div>

         <div>
           <h4 className={`font-bold mb-3 text-sm ${head}`}>{isStore ? 'Categories' : 'Solutions'}</h4>
           <ul className={`space-y-2 text-xs ${text}`}>
             <li className="hover:opacity-70 cursor-pointer">New Arrivals</li>
             <li className="hover:opacity-70 cursor-pointer">Best Sellers</li>
           </ul>
         </div>

         <div>
           <h4 className={`font-bold mb-3 text-sm ${head}`}>Contact</h4>
           <ul className={`space-y-2 text-xs ${text}`}>
             <li className="flex items-center gap-2"><MapPin size={12} /> Tech City</li>
             <li className="flex items-center gap-2"><Mail size={12} /> support@demo.com</li>
           </ul>
         </div>
      </div>
      <div className={`mt-8 pt-6 border-t ${border} text-center text-[10px] ${text}`}>
        &copy; 2024 {project.title}.
      </div>
    </footer>
  );
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState<{message: string} | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setCartCount(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  const showToast = (message: string) => {
    setNotification({ message });
    setTimeout(() => setNotification(null), 2500);
  };

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCartCount(prev => prev + 1);
    showToast("Added to Cart");
  };

  if (!project) return null;

  const isStore = project.category === 'Store';
  const heroImg = getImageUrl(project.imageId, 'minimal', -1);
  const themeCat = getThemeCategory(project.imageTheme, project.layoutStyle);

  // --- RENDER CONTENT BY STYLE ---

  const renderContent = () => {

    // === NEW: N8N AUTOMATION (High-Tech SaaS) ===
    if (project.layoutStyle === 'n8n-automation') {
      return (
        <div className="bg-[#101010] text-gray-200 font-sans selection:bg-orange-500 selection:text-white">
          {/* Navbar */}
          <nav className="sticky top-0 z-40 bg-[#101010]/90 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
               <Workflow className="text-orange-500" />
               n8n<span className="text-orange-500">.</span>cloud
            </div>
            <div className="hidden md:flex gap-6 text-xs font-semibold text-gray-400">
               <span className="hover:text-orange-500 cursor-pointer transition-colors">Features</span>
               <span className="hover:text-orange-500 cursor-pointer transition-colors">Workflows</span>
               <span className="hover:text-orange-500 cursor-pointer transition-colors">Pricing</span>
            </div>
            <button className="bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-orange-700 transition-colors shadow-[0_0_15px_rgba(234,88,12,0.4)]">
               Get Started
            </button>
          </nav>

          {/* Hero with Workflow Animation */}
          <div className="relative py-20 px-6 overflow-hidden">
             {/* Background Gradients */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] -z-10"></div>
             
             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/20 border border-orange-700/50 text-orange-400 text-[10px] font-bold uppercase tracking-wider">
                      <Zap size={10} /> Private n8n Hosting
                   </div>
                   <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                     Automate Everything with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">n8n</span>
                   </h1>
                   <p className="text-gray-400 max-w-md leading-relaxed text-sm">
                     Get your own private n8n account with unlimited workflows, instant activation, and premium performance for only $99/Year.
                   </p>
                   <div className="flex flex-wrap gap-4 pt-4">
                      <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-sm shadow-lg">
                         Buy Now - $99/yr
                      </button>
                      <button className="bg-gray-800 text-white border border-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors text-sm flex items-center gap-2">
                         <Star size={14} className="text-orange-500" /> Best Value
                      </button>
                   </div>
                   <div className="flex items-center gap-4 text-[10px] text-gray-500 font-mono pt-4">
                      <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> 99.99% Uptime</span>
                      <span className="flex items-center gap-1"><Lock size={12} className="text-green-500" /> Encrypted</span>
                   </div>
                </div>

                {/* Animated Node Graph Simulation */}
                <div className="relative h-[400px] w-full bg-[#1A1A1A] rounded-xl border border-gray-800 shadow-2xl p-6 overflow-hidden group">
                   <div className="absolute top-0 left-0 right-0 h-10 bg-[#252525] border-b border-gray-700 flex items-center px-4 gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   </div>
                   
                   {/* Grid Background */}
                   <div className="absolute inset-0 top-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.3 }}></div>

                   {/* Floating Nodes */}
                   <div className="relative w-full h-full pt-10">
                      {/* Node 1: Webhook */}
                      <motion.div 
                        initial={{ x: 20, y: 150 }}
                        animate={{ y: [145, 155, 145] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute bg-[#2D2D2D] rounded-lg shadow-lg w-32 border border-gray-700"
                      >
                         <div className="h-2 bg-pink-500 rounded-t-lg"></div>
                         <div className="p-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-pink-900/30 flex items-center justify-center text-pink-500"><Zap size={16} /></div>
                            <span className="text-xs font-bold text-white">Webhook</span>
                         </div>
                      </motion.div>

                      {/* Connection Line 1 */}
                      <svg className="absolute inset-0 pointer-events-none z-0">
                         <motion.path 
                           d="M 150 180 C 200 180, 200 80, 250 80"
                           fill="none"
                           stroke="#666"
                           strokeWidth="2"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 1.5, repeat: Infinity }}
                         />
                      </svg>

                       {/* Node 2: Google Sheets */}
                       <motion.div 
                        initial={{ x: 250, y: 50 }}
                        animate={{ y: [45, 55, 45] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="absolute bg-[#2D2D2D] rounded-lg shadow-lg w-32 border border-gray-700"
                      >
                         <div className="h-2 bg-green-500 rounded-t-lg"></div>
                         <div className="p-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-green-900/30 flex items-center justify-center text-green-500"><Database size={16} /></div>
                            <span className="text-xs font-bold text-white">Sheets</span>
                         </div>
                      </motion.div>

                       {/* Connection Line 2 */}
                       <svg className="absolute inset-0 pointer-events-none z-0">
                         <motion.path 
                           d="M 150 180 C 200 180, 200 280, 250 280"
                           fill="none"
                           stroke="#666"
                           strokeWidth="2"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                         />
                      </svg>

                       {/* Node 3: AI */}
                       <motion.div 
                        initial={{ x: 250, y: 250 }}
                        animate={{ y: [245, 255, 245] }}
                        transition={{ repeat: Infinity, duration: 4.5 }}
                        className="absolute bg-[#2D2D2D] rounded-lg shadow-lg w-32 border border-gray-700"
                      >
                         <div className="h-2 bg-purple-500 rounded-t-lg"></div>
                         <div className="p-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-purple-900/30 flex items-center justify-center text-purple-500"><Bot size={16} /></div>
                            <span className="text-xs font-bold text-white">OpenAI</span>
                         </div>
                      </motion.div>
                   </div>
                </div>
             </div>
          </div>

          {/* Features Grid */}
          <div className="py-20 px-6 bg-[#0A0A0A]">
             <div className="max-w-6xl mx-auto">
                <SectionHeader title="Everything You Need" subtitle="Powerful infrastructure built for automation professionals." color="text-white" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                     { title: "Unlimited Workflows", icon: <Workflow />, desc: "Create as many automations as you need without limits." },
                     { title: "Secure Cloud", icon: <Cloud />, desc: "Isolated environment with banking-grade security." },
                     { title: "API Integrations", icon: <Code />, desc: "Connect to any service with REST/GraphQL support." },
                     { title: "AI Ready", icon: <Bot />, desc: "Built-in nodes for ChatGPT, Claude, and more." },
                     { title: "Webhooks & Cron", icon: <Zap />, desc: "Trigger flows instantly or on a schedule." },
                     { title: "24/7 Support", icon: <MessageSquare />, desc: "Expert help whenever you need it." }
                   ].map((item, i) => (
                      <div key={i} className="bg-[#151515] p-6 rounded-xl border border-gray-800 hover:border-orange-600/50 transition-colors group">
                         <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                            {item.icon}
                         </div>
                         <h3 className="text-white font-bold mb-2">{item.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Pricing Section */}
          <div className="py-20 px-6 bg-[#101010]">
             <div className="max-w-md mx-auto bg-gradient-to-b from-[#1A1A1A] to-[#151515] border border-gray-800 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
                <div className="text-center mb-6">
                   <span className="bg-orange-600/20 text-orange-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Best Value</span>
                   <h2 className="text-4xl font-black text-white mt-4">$99<span className="text-lg text-gray-500 font-medium">/year</span></h2>
                   <p className="text-gray-400 text-sm mt-2">Full Access. No Hidden Fees.</p>
                </div>

                <ul className="space-y-4 mb-8">
                   {[
                     "Private Account", "Unlimited Executions", "Fast Cloud Hosting", "All Nodes Unlocked", "Priority Support"
                   ].map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                         <CheckCircle size={16} className="text-orange-500" /> {feat}
                      </li>
                   ))}
                </ul>

                <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                   Get Started Now
                </button>
             </div>
          </div>

          <Footer styleType="n8n-automation" project={project} isStore={isStore} />
        </div>
      );
    }

    // === NEW: AGENCY MODERN (Professional Corporate) ===
    if (project.layoutStyle === 'agency-modern') {
      return (
        <div className="bg-slate-50 text-slate-900 font-sans selection:bg-cyan-200 selection:text-black">
           {/* Sticky Header */}
           <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 px-6 md:px-8 flex justify-between items-center transition-all">
              <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
                 <div className="w-6 h-6 bg-cyan-600 rounded flex items-center justify-center text-white">
                   <Globe size={14} />
                 </div>
                 QUANTUM<span className="text-cyan-600">.</span>AGENCY
              </div>
              <div className="hidden md:flex gap-6 text-xs font-semibold tracking-tight text-slate-600">
                 {['Strategy', 'Digital', 'Technology'].map((link) => (
                    <span key={link} className="hover:text-cyan-600 cursor-pointer transition-colors relative group">
                       {link}
                    </span>
                 ))}
              </div>
              <button className="bg-slate-900 text-white px-4 py-1.5 rounded-full font-bold text-[10px] hover:bg-cyan-600 transition-colors">
                GET IN TOUCH
              </button>
           </nav>

           {/* Hero - Adjusted Height */}
           <div className="relative pt-10 pb-16 px-6 md:px-8 overflow-hidden bg-white">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                 <div className="relative z-10">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: '40px' }} 
                      className="h-1 bg-cyan-600 mb-4"
                    ></motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-[0.9] tracking-tighter mb-4 text-slate-900">
                       FUTURE<br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">PROOF</span><br/>
                       DIGITAL.
                    </h1>
                    <p className="text-sm text-slate-500 max-w-md leading-relaxed mb-6 border-l-2 border-gray-200 pl-4">
                       We architect digital ecosystems for the world's most ambitious enterprises.
                    </p>
                    <div className="flex gap-4">
                       <button className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all text-sm">
                          Start Transformation
                       </button>
                    </div>
                 </div>
                 <div className="relative h-[300px] rounded-[1.5rem] overflow-hidden shadow-2xl">
                    <img src={heroImg} className="w-full h-full object-cover" alt="Agency Hero" />
                 </div>
              </div>
           </div>

           {/* Services Grid */}
           <div className="bg-slate-50 py-16 px-6 md:px-8">
              <div className="max-w-7xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-4">
                    <div>
                       <h2 className="text-2xl font-bold mb-1">Capabilities</h2>
                       <p className="text-slate-500 text-sm">End-to-end digital solutions.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {[
                       { title: "Digital Twin", icon: <Box size={24} />, desc: "Virtual replicas of physical systems." },
                       { title: "Cloud", icon: <Server size={24} />, desc: "Scalable infrastructure." },
                       { title: "Data AI", icon: <BarChart size={24} />, desc: "Actionable insights driven by AI." },
                       { title: "Security", icon: <ShieldCheck size={24} />, desc: "Bank-grade protection protocols." },
                       { title: "UX Design", icon: <Layout size={24} />, desc: "Human-centric interface design." },
                       { title: "Automation", icon: <Zap size={24} />, desc: "Streamlining complex workflows." }
                    ].map((item, i) => (
                       <div key={i} className="bg-white p-6 hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-cyan-100 relative overflow-hidden">
                          <div className="bg-cyan-50 w-10 h-10 rounded-xl flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                             {item.icon}
                          </div>
                          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                          <p className="text-slate-500 leading-relaxed text-xs">{item.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           <Footer styleType="agency-modern" project={project} isStore={isStore} />
        </div>
      );
    }

    // === NEW: 3D PORTFOLIO LAYOUT ===
    if (project.layoutStyle === '3d-portfolio') {
      return (
        <div className="bg-[#050505] text-white font-sans selection:bg-fuchsia-600 selection:text-white min-h-full">
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-transparent">
             <div className="text-lg font-bold tracking-widest flex items-center gap-2">
                <Box className="text-fuchsia-500" size={20} /> PORTFOLIO
             </div>
             <div className="flex gap-4 text-xs font-medium tracking-widest text-gray-400">
               <span className="hover:text-white cursor-pointer transition-colors">WORK</span>
               <span className="hover:text-white cursor-pointer transition-colors">ABOUT</span>
             </div>
          </nav>

          {/* Immersive Hero - Reduced Height for Modal */}
          <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
             {/* 3D Floating Elements Background */}
             <div className="absolute inset-0 perspective-1000">
               {[...Array(5)].map((_, i) => (
                 <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -30, 0], 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ 
                      duration: 15 + i * 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className={`absolute rounded-full blur-[80px] opacity-20`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${200 + Math.random() * 100}px`,
                      height: `${200 + Math.random() * 100}px`,
                      background: i % 2 === 0 ? '#c026d3' : '#4f46e5'
                    }}
                 />
               ))}
             </div>

             <div className="relative z-10 text-center max-w-2xl px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="text-fuchsia-400 font-mono mb-2 tracking-[0.5em] text-xs">DIGITAL CREATOR</p>
                  <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-2xl">
                    I BUILD<br/>DIGITAL UNIVERSES
                  </h1>
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(192, 38, 211, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-fuchsia-600 text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase transition-all text-xs"
                  >
                    Start The Journey
                  </motion.button>
                </motion.div>
             </div>
          </div>

          {/* Skills Section */}
          <div className="py-16 container mx-auto px-6 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Visual Depth", icon: <Layers size={24} />, desc: "Creating layers of meaning." },
                  { title: "Fluid Motion", icon: <RefreshCcw size={24} />, desc: "Smooth transitions that feel organic." },
                  { title: "Clean Code", icon: <Code size={24} />, desc: "Architecture that scales beautifully." }
                ].map((item, i) => (
                   <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      whileHover={{ y: -10 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl relative overflow-hidden group"
                   >
                      <div className="mb-4 text-fuchsia-400">{item.icon}</div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Selected Works */}
          <div className="py-16 bg-black/30">
            <div className="container mx-auto px-6">
               <SectionHeader title="Selected Masterpieces" subtitle="A curation of digital art and functional design." color="text-white" />
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="group relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                    >
                       <img 
                          src={getImageUrl(undefined, '3d', i + 3)} 
                          className="absolute inset-0 w-full h-full object-cover" 
                          alt="Project" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                       <div className="absolute bottom-0 left-0 p-6">
                          <span className="text-fuchsia-400 text-[10px] font-mono mb-1 block tracking-widest">PROJECT 0{i}</span>
                          <h3 className="text-xl font-bold">Neon Horizon</h3>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>

          <Footer styleType="3d-portfolio" project={project} isStore={isStore} />
        </div>
      );
    }

    // === 1. MINIMAL (e.g., Organic, Decor, Arch) ===
    if (project.layoutStyle === 'minimal') {
      return (
        <div className="bg-white text-zinc-900 font-sans selection:bg-black selection:text-white">
          <AnnouncementBar bg="bg-gray-100" text="text-gray-600" />
          
          {/* Header */}
          <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-100">
             <Menu className="cursor-pointer hover:opacity-50" size={20} />
             <div className="text-lg font-light tracking-[0.2em] uppercase">{project.title}</div>
             <div className="flex gap-4">
                <Search className="cursor-pointer hover:opacity-50" size={20} />
                {isStore && (
                  <div className="relative cursor-pointer hover:opacity-50" onClick={handleAddToCart}>
                    <ShoppingBag size={20} />
                    {cartCount > 0 && <span className="absolute -top-1 -right-1 w-3 h-3 bg-black text-white text-[9px] flex items-center justify-center rounded-full">{cartCount}</span>}
                  </div>
                )}
             </div>
          </nav>

          {/* Hero */}
          <div className="relative h-[400px] flex items-center justify-center bg-gray-50 overflow-hidden">
             <motion.img 
               initial={{ scale: 1.1 }}
               animate={{ scale: 1 }}
               transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
               src={heroImg} 
               className="absolute inset-0 w-full h-full object-cover opacity-90" 
             />
             <div className="absolute inset-0 bg-black/10"></div>
             <div className="relative z-10 text-center px-4">
               <h1 className="text-4xl md:text-5xl font-light text-white mb-4 drop-shadow-lg leading-tight">
                 Pure <span className="font-bold">Essence</span>
               </h1>
               <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-xl">
                 {isStore ? 'Shop Collection' : 'View Projects'}
               </button>
             </div>
          </div>

          {/* Categories / Stats */}
          <div className="py-16 px-6 container mx-auto">
             <div className="flex flex-wrap justify-center gap-8 mb-16 text-center">
                {[isStore ? 'New' : 'Concept', isStore ? 'Best Sellers' : 'Design', isStore ? 'Sale' : 'Awards'].map((cat, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-3 mx-auto border border-gray-200">
                       <img src={getImageUrl(undefined, themeCat, i + 5)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="cat" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-black transition-all pb-1">{cat}</span>
                  </div>
                ))}
             </div>

             <SectionHeader title={isStore ? "Curated Picks" : "Our Philosophy"} subtitle="Minimalism is not a lack of something. It's simply the perfect amount of something." />
             
             {isStore ? (
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[1,2,3,4].map(i => <ProductCard key={i} index={i} styleType="minimal" project={project} onAddToCart={handleAddToCart} />)}
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1,2,3].map(i => (
                    <div key={i} className="space-y-3">
                       <img src={getImageUrl(undefined, 'minimal', i + 8)} className="w-full aspect-video object-cover" alt="Service" />
                       <h3 className="text-lg font-light">Design Process 0{i}</h3>
                       <p className="text-gray-500 text-xs leading-loose">We focus on the essential details.</p>
                    </div>
                  ))}
               </div>
             )}
          </div>
          
          <Footer styleType="minimal" project={project} isStore={isStore} />
        </div>
      );
    }

    // === 2. TECH / CYBER (e.g., Gaming, Gadgets) ===
    if (project.layoutStyle === 'tech') {
      return (
        <div className="bg-slate-950 text-cyan-50 font-mono selection:bg-cyan-500 selection:text-black">
          <div className="bg-cyan-900/20 border-b border-cyan-500/30 text-cyan-400 text-[10px] py-1 px-4 flex justify-between items-center">
             <span>SYSTEM: ONLINE</span>
             <span>V.2.0.24</span>
          </div>

          <nav className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur border-b border-cyan-900 flex justify-between items-center px-4 py-3">
             <div className="flex items-center gap-2 font-bold text-lg text-cyan-400">
               <Hexagon className="fill-cyan-900" size={18} /> {project.title}
             </div>
             <div className="hidden md:flex gap-4 text-xs">
                <span className="hover:text-cyan-400 cursor-pointer">HARDWARE</span>
                <span className="hover:text-cyan-400 cursor-pointer">SOFTWARE</span>
             </div>
             <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                {isStore && (
                  <button onClick={handleAddToCart} className="flex items-center gap-2 bg-cyan-600 text-black px-3 py-1 text-[10px] font-bold hover:bg-cyan-400 transition-colors skew-x-[-10deg]">
                    CART <span className="bg-black text-cyan-500 px-1 rounded">{cartCount}</span>
                  </button>
                )}
             </div>
          </nav>

          {/* Glitch Hero */}
          <div className="relative h-[400px] flex items-center overflow-hidden border-b border-cyan-900">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
             <img src={heroImg} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Hero" />
             <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl">
                   <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                     NEXT GEN<br/>REALITY
                   </h1>
                   <p className="text-sm text-slate-300 mb-6 max-w-sm border-l-4 border-cyan-500 pl-4 bg-black/50 p-2">
                     Upgrade your experience with high-performance gear.
                   </p>
                   <div className="flex gap-4">
                      <button className="px-6 py-2 bg-cyan-500 text-black font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all skew-x-[-10deg] text-xs">
                        {isStore ? 'SHOP NOW' : 'EXPLORE'}
                      </button>
                   </div>
                </div>
             </div>
          </div>

          {/* Content */}
          <div className="py-16 px-6 container mx-auto">
             <div className="flex justify-between items-end mb-8 border-b border-cyan-900/50 pb-2">
                <h2 className="text-xl font-bold text-cyan-50 flex items-center gap-2">
                   <span className="w-2 h-6 bg-cyan-500"></span>
                   {isStore ? 'FEATURED UNITS' : 'SYSTEM MODULES'}
                </h2>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {isStore ? (
                  [1,2,3,4].map(i => <ProductCard key={i} index={i} styleType="tech" project={project} onAddToCart={handleAddToCart} />)
                ) : (
                  [1,2,3,4].map(i => <ServiceCard key={i} index={i} styleType="tech" project={project} />)
                )}
             </div>
          </div>

          <Footer styleType="tech" project={project} isStore={isStore} />
        </div>
      );
    }

    // === 3. BOLD / STORE (e.g., Fashion, Sneakers) ===
    if (project.layoutStyle === 'bold') {
      return (
        <div className="bg-white text-black font-sans">
           <AnnouncementBar bg="bg-black" text="text-white" />
           
           <nav className="flex items-center justify-between px-6 py-3 border-b-4 border-black sticky top-0 bg-white z-40">
              <div className="text-2xl font-black tracking-tighter italic transform -skew-x-12 uppercase">
                {project.title}
              </div>
              <div className="flex gap-4">
                 <User className="w-5 h-5 border-2 border-black rounded-full p-0.5 hover:bg-black hover:text-white transition-colors cursor-pointer" />
                 <div className="relative cursor-pointer" onClick={handleAddToCart}>
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 border-2 border-black w-4 h-4 flex items-center justify-center text-[9px] font-bold rounded-full">{cartCount}</span>
                 </div>
              </div>
           </nav>

           {/* Bold Hero */}
           <div className="grid md:grid-cols-2 min-h-[350px] border-b-4 border-black">
              <div className="bg-yellow-400 p-8 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
                 <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.8] mb-4 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                   Be<br/><span className="text-white text-stroke-black">Bold.</span>
                 </h1>
                 <button className="bg-black text-white px-6 py-3 text-lg font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all border-2 border-transparent hover:border-black hover:bg-white hover:text-black w-fit">
                   Shop Now
                 </button>
              </div>
              <div className="relative overflow-hidden group">
                 <img src={heroImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Hero" />
                 <div className="absolute inset-0 bg-black/10"></div>
              </div>
           </div>

           {/* Marquee */}
           <div className="overflow-hidden bg-black text-white py-2 border-b-4 border-black">
              <div className="whitespace-nowrap animate-marquee font-bold text-sm uppercase">
                 NEW ARRIVALS • 50% OFF SELECT ITEMS • FREE SHIPPING • LIMITED EDITION • 
                 NEW ARRIVALS • 50% OFF SELECT ITEMS • FREE SHIPPING • LIMITED EDITION •
              </div>
           </div>

           {/* Products */}
           <div className="py-16 px-6 container mx-auto">
              <SectionHeader title="Trending Now" subtitle="Don't miss out on the hottest items of the season." />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="group cursor-pointer">
                      <div className="aspect-square border-4 border-black bg-gray-100 mb-3 relative overflow-hidden">
                         <img src={getImageUrl(undefined, 'product', i + 50)} className="w-full h-full object-cover" alt="Item" />
                         {isStore && (
                           <div onClick={handleAddToCart} className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="bg-white text-black font-bold px-3 py-1.5 border-2 border-black hover:bg-yellow-400 transform hover:-rotate-3 transition-all text-xs">ADD</span>
                           </div>
                         )}
                      </div>
                      <h3 className="font-bold text-sm uppercase leading-none mb-1">Urban Item {i}</h3>
                      <p className="font-black text-lg">${getRandomPrice(i)}</p>
                   </div>
                 ))}
              </div>
           </div>
           
           <Footer styleType="bold" project={project} isStore={isStore} />
        </div>
      );
    }

    // === 4. LUXURY (e.g., Jewelry, Law) ===
    if (project.layoutStyle === 'luxury') {
      return (
        <div className="bg-[#050505] text-amber-50 font-serif">
           <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 sticky top-0 bg-[#050505]/95 z-40">
              <Menu className="text-amber-100 cursor-pointer" size={20} />
              <div className="text-2xl italic font-bold">{project.title}</div>
              <div className="flex gap-6 text-amber-100">
                 <Search className="cursor-pointer" size={20} />
                 {isStore && <ShoppingBag className="cursor-pointer" size={20} onClick={handleAddToCart} />}
              </div>
           </nav>

           <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                 <img src={heroImg} className="w-full h-full object-cover" alt="Hero" />
              </div>
              <div className="relative z-10 text-center space-y-6 p-6 border border-white/20 bg-black/30 backdrop-blur-sm max-w-lg">
                 <p className="text-amber-200 tracking-[0.3em] uppercase text-[10px]">Since 2024</p>
                 <h1 className="text-4xl md:text-5xl italic leading-tight">Exquisite<br/>Craftsmanship</h1>
                 <button className="px-8 py-2 border border-amber-200 text-amber-200 hover:bg-amber-900/30 transition-colors uppercase tracking-widest text-[10px]">
                   Discover
                 </button>
              </div>
           </div>

           <div className="py-20 px-8 max-w-5xl mx-auto">
              <div className="text-center mb-16">
                 <span className="inline-block w-px h-12 bg-gradient-to-b from-transparent via-amber-200 to-transparent mb-4"></span>
                 <h2 className="text-3xl italic text-amber-50 mb-2">The Collection</h2>
                 <p className="text-gray-400 max-w-lg mx-auto text-xs leading-loose">
                   Each piece is a testament to our dedication to perfection.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[1,2,3].map(i => (
                   <div key={i} className="group cursor-pointer">
                      <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                         <div className="absolute inset-0 border border-amber-200/20 z-10 m-3 pointer-events-none transition-all duration-700 group-hover:m-0"></div>
                         <img src={getImageUrl(undefined, 'product', i + 80)} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" alt="Luxury" />
                      </div>
                      <div className="text-center">
                         <h3 className="text-lg italic mb-1">{isStore ? `Royal Edition ${i}` : `Service Tier ${i}`}</h3>
                         {isStore && <p className="text-amber-200/80 text-xs">$1,250.00</p>}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <Footer styleType="luxury" project={project} isStore={isStore} />
        </div>
      );
    }

    // === 5. STANDARD (Corporate/Clean) - Default ===
    return (
      <div className="bg-gray-50 font-sans text-gray-800">
         <AnnouncementBar bg="bg-blue-900" text="text-white" />
         
         <nav className="bg-white sticky top-0 z-40 shadow-sm border-b border-gray-200 px-6 h-16 flex items-center justify-between">
            <div className={`flex items-center gap-2 font-bold text-lg ${project.textColor || 'text-blue-700'}`}>
               {project.icon} {project.title}
            </div>
            <div className="hidden md:flex gap-6 text-xs font-medium text-gray-600">
               <span className="hover:text-blue-600 cursor-pointer">Home</span>
               <span className="hover:text-blue-600 cursor-pointer">Services</span>
               <span className="hover:text-blue-600 cursor-pointer">{isStore ? 'Products' : 'About'}</span>
               <span className="hover:text-blue-600 cursor-pointer">Contact</span>
            </div>
            <div className="flex gap-4">
               {isStore ? (
                  <div className="flex items-center gap-4">
                     <User size={18} className="text-gray-600 cursor-pointer" />
                     <div className="relative cursor-pointer" onClick={handleAddToCart}>
                        <ShoppingCart size={18} className="text-gray-600" />
                        <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">{cartCount}</span>
                     </div>
                  </div>
               ) : (
                  <button className={`${project.accentColor} text-white px-4 py-1.5 rounded-lg font-bold text-xs shadow hover:opacity-90 transition-opacity`}>
                    Get Started
                  </button>
               )}
            </div>
         </nav>

         {/* Hero */}
         <div className="bg-white">
            <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
               <div className="space-y-4 animate-fade-in-up">
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                    Professional {project.niche} Solutions.
                  </h1>
                  <p className="text-sm text-gray-600 max-w-sm">
                    We combine expertise with innovation to deliver results.
                  </p>
                  <div className="flex gap-3 pt-2">
                     <button className={`${project.accentColor} text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:-translate-y-1 transition-transform text-xs`}>
                        {isStore ? 'Shop Now' : 'Our Services'}
                     </button>
                     <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors text-xs">
                        Learn More
                     </button>
                  </div>
               </div>
               <div className="relative h-[250px] md:h-[300px]">
                  <div className={`absolute -inset-4 ${project.accentColor} opacity-20 rounded-2xl rotate-3`}></div>
                  <img src={heroImg} className="relative rounded-2xl shadow-2xl w-full h-full object-cover" alt="Hero" />
               </div>
            </div>
         </div>

         {/* Stats Section */}
         <div className="bg-white border-y border-gray-100 py-8">
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               {[
                 { num: '5K+', label: 'Clients' },
                 { num: '98%', label: 'Satisfaction' },
                 { num: '10+', label: 'Years' },
                 { num: '24/7', label: 'Support' }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className={`text-2xl font-bold ${project.textColor}`}>{stat.num}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                 </div>
               ))}
            </div>
         </div>

         {/* Main Content */}
         <div className="py-16 px-6 container mx-auto">
            <SectionHeader 
               title={isStore ? "Featured Products" : "Our Expertise"} 
               subtitle={`Explore our wide range of ${project.niche.toLowerCase()} offerings.`} 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {isStore ? (
                  [1,2,3,4,5,6].map(i => <ProductCard key={i} index={i} styleType="standard" project={project} onAddToCart={handleAddToCart} />)
               ) : (
                  [1,2,3,4,5,6].map(i => <ServiceCard key={i} index={i} styleType="standard" project={project} />)
               )}
            </div>
         </div>

         <Footer styleType="standard" project={project} isStore={isStore} />
      </div>
    );
  };

  // --- MAIN MODAL WRAPPER (WINDOW STYLE) ---
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
          className="w-[95%] h-[85%] md:w-[1000px] md:h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col relative border border-zinc-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* TOAST NOTIFICATION */}
          <AnimatePresence>
            {notification && (
              <motion.div 
                initial={{ y: -50, opacity: 0, scale: 0.9 }}
                animate={{ y: 20, opacity: 1, scale: 1 }}
                exit={{ y: -50, opacity: 0, scale: 0.9 }}
                className="absolute top-16 left-1/2 transform -translate-x-1/2 z-[100] bg-zinc-900 text-white px-5 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-zinc-700"
              >
                <CheckCircle className="text-green-500" size={16} />
                <span className="font-bold text-xs">{notification.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SIMULATOR BROWSER BAR (Professional Window Header) */}
          <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 h-11 flex items-center px-4 justify-between shrink-0 border-b border-zinc-950/50 z-50 relative shadow-md select-none">
             {/* Traffic Lights with Interaction */}
             <div className="flex gap-2 group w-20">
                <div onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-75 cursor-pointer shadow-inner flex items-center justify-center group-hover:text-black/50 text-transparent text-[8px] font-bold transition-all" title="Close"><X size={8} strokeWidth={4} /></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-inner flex items-center justify-center group-hover:text-black/50 text-transparent text-[8px] font-bold transition-all" title="Minimize"><Minus size={8} strokeWidth={4} /></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-inner flex items-center justify-center group-hover:text-black/50 text-transparent text-[8px] font-bold transition-all" title="Expand"><Maximize2 size={6} strokeWidth={4} /></div>
             </div>
             
             {/* Address Bar */}
             <div className="flex-1 max-w-xl mx-4">
               <div className="bg-zinc-950/50 h-7 rounded flex items-center justify-center text-gray-400 text-[11px] font-mono px-3 shadow-inner border border-zinc-700/50 hover:border-zinc-600 transition-colors group cursor-text">
                  <div className="flex items-center gap-2 flex-1 justify-center">
                    <Lock size={10} className="text-green-500/80" />
                    <span className="text-gray-300 opacity-90 group-hover:text-white transition-colors">
                      https://<span className="text-white font-semibold">{project.title.toLowerCase().replace(/\s/g, '')}</span>.com
                    </span>
                  </div>
                  <RotateCcw size={10} className="ml-2 opacity-50 hover:opacity-100 cursor-pointer" />
               </div>
             </div>

             {/* Right Controls / Close Action */}
             <div className="w-auto flex justify-end">
                <button 
                  onClick={onClose} 
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors px-3 py-1 hover:bg-white/5 rounded-md text-[10px] font-medium border border-transparent hover:border-white/10"
                >
                  <span className="uppercase tracking-wider">Close Preview</span>
                  <X size={12} />
                </button>
             </div>
          </div>

          {/* MAIN SCROLLABLE CONTENT AREA */}
          <div ref={containerRef} className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
             {renderContent()}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;
