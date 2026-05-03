import React, { useState } from 'react';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import ProductList from './components/ProductList';
import ItineraryDetail from './components/ItineraryDetail';
import ContactModal from './components/ContactModal';

import { TourPackage } from './types';
import { TESTIMONIALS } from './constants';
import { Quote, MessageCircle, Instagram, Facebook } from 'lucide-react';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      
      {/* Navigation / Header (Simple) */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-white font-bold text-lg tracking-wider bg-black/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
          WeTravel
        </div>
        <button 
          onClick={() => setIsContactOpen(true)}
          className="hidden md:block bg-white text-stone-900 px-6 py-2 rounded-full font-medium text-sm hover:bg-stone-100 transition-colors shadow-lg"
        >
          联系咨询
        </button>
      </nav>

      <Hero onExplore={scrollToProducts} />
      
      <main className="max-w-7xl mx-auto">
        <WhyUs />
        <ProductList onSelect={setSelectedPackage} />

        {/* Social Proof Section */}
        <section className="px-6 py-20 bg-white rounded-3xl mx-4 my-8 shadow-sm">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">客户真实评价</h2>
            <p className="text-slate-500">不用听我们怎么说，听听老客户的真实评价</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative hover:-translate-y-1 transition-transform duration-300">
                <Quote className="text-stone-200 absolute top-6 right-6" size={40} />
                <p className="text-slate-600 leading-relaxed mb-6 relative z-10 italic">"{t.text}"</p>
                <div className="flex items-center justify-between border-t border-stone-200 pt-4">
                  <span className="font-bold text-slate-800">{t.user}</span>
                  <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">STOCKHOLM PRIVATE TOURS</h3>
            <p className="text-sm">专注瑞典私人定制旅行服务 · 让旅行回归体验</p>
          </div>
          <div className="flex gap-6">
             {/* Social placeholders */}
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
               <Instagram size={20} className="text-white" />
             </div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
               <MessageCircle size={20} className="text-white" />
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center md:text-left mt-8 pt-8 border-t border-white/10 text-xs text-stone-600">
          © 2024 Nordic Private Travel. All rights reserved.
        </div>
      </footer>

      {/* Sticky Floating Action Button (FAB) - Visible mainly on mobile or as a persistent call to action */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setIsContactOpen(true)}
          className="group flex items-center gap-3 bg-stone-900 text-white pl-5 pr-2 py-2 rounded-full shadow-2xl hover:bg-stone-800 transition-all hover:scale-105"
        >
          <span className="font-bold text-sm hidden md:block pr-2">定制我的行程</span>
          <div className="bg-white text-stone-900 p-3 rounded-full">
            <MessageCircle size={20} />
          </div>
        </button>
      </div>

      {/* Modals */}
      {selectedPackage && (
        <ItineraryDetail 
          pkg={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
          onContact={() => setIsContactOpen(true)}
        />
      )}

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
