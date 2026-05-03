import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { TOUR_PACKAGES } from '../constants';
import { TourPackage } from '../types';

interface ProductListProps {
  onSelect: (pkg: TourPackage) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelect }) => {
  return (
    <div className="py-12 px-6" id="products">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">热门路线方案</h2>
          </div>
          <div className="text-sm text-stone-400">
            *所有路线均可根据当天情况微调
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => onSelect(pkg)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder while loading */}
                <img 
                  src={pkg.coverImage} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4">
                  {pkg.tags.map((tag, i) => (
                    <span key={i} className="bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-slate-800 mb-2 leading-tight group-hover:text-orange-600 transition-colors">{pkg.title}</h3>
                <p className="text-sm text-stone-500 mb-4 font-medium">{pkg.subtitle}</p>
                
                <p className="text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed flex-grow">
                  {pkg.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
                  <div className="flex items-center gap-1.5 text-orange-400 bg-orange-50 px-2 py-1 rounded-md">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-orange-700">精选系列</span>
                  </div>
                  <button className="text-sm font-bold text-stone-900 flex items-center gap-1 group/btn">
                    查看详情 <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;