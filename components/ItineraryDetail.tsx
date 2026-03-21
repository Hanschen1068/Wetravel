import React, { useEffect } from 'react';
import { X, MapPin, Navigation, Camera, Utensils, Footprints, Car, Sun, Sunset, Coffee, HeartHandshake, Briefcase } from 'lucide-react';
import { TourPackage, TourType } from '../types';

interface ItineraryDetailProps {
  pkg: TourPackage;
  onClose: () => void;
  onContact: () => void;
}

const getIcon = (type?: string) => {
  switch (type) {
    case 'walk': return <Footprints size={18} />;
    case 'car': return <Car size={18} />;
    case 'food': return <Utensils size={18} />;
    case 'photo': return <Camera size={18} />;
    case 'landmark': return <MapPin size={18} />;
    case 'business': return <Briefcase size={18} />;
    default: return <Navigation size={18} />;
  }
};

const getTimeIcon = (time: string) => {
    if (time.includes("上午")) return <Sun size={14} className="text-orange-400" />;
    if (time.includes("下午")) return <Coffee size={14} className="text-orange-500" />;
    if (time.includes("傍晚")) return <Sunset size={14} className="text-purple-500" />;
    return <div className="w-2 h-2 rounded-full bg-slate-300" />;
}

const ItineraryDetail: React.FC<ItineraryDetailProps> = ({ pkg, onClose, onContact }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose} />
      
      {/* Modal Container */}
      {/* Added md:h-[80vh] to force a constrained height on desktop, ensuring inner scroll works */}
      <div className="relative bg-white w-full max-w-5xl max-h-[85vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col md:flex-row">
        
        {/* Left Side: Image & Header (Desktop) */}
        <div className="md:w-2/5 h-48 md:h-auto relative shrink-0">
          <img src={pkg.coverImage} className="w-full h-full object-cover brightness-90 md:brightness-100" alt="cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/50" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition-colors z-20 md:hidden"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
            <h2 className="text-2xl font-bold shadow-black/50 drop-shadow-md">{pkg.title}</h2>
          </div>
        </div>

        {/* Right Side: Content */}
        {/* Added min-h-0 to ensure flex child scrolling works properly on all browsers */}
        <div className="flex-1 flex flex-col min-h-0 bg-stone-50 relative">
             <button 
                onClick={onClose}
                className="hidden md:block absolute top-4 right-4 text-stone-400 hover:text-stone-800 transition-colors z-20 p-2"
              >
                <X size={24} />
              </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 p-6 md:p-10 custom-scrollbar">
            <div className="hidden md:block mb-8 pr-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">{pkg.title}</h2>
                <p className="text-lg text-stone-500">{pkg.subtitle}</p>
            </div>

            {/* Intro Box */}
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm mb-8">
              <div className="flex items-start gap-4 mb-4">
                 <div className="bg-orange-100 p-2 rounded-lg text-orange-600 shrink-0 mt-1">
                     {pkg.id === TourType.BUSINESS ? <Briefcase size={20} /> : <Sun size={20} />}
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">💡 适合人群</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{pkg.idealFor}</p>
                 </div>
              </div>
              <div className="border-t border-stone-100 pt-4 mt-4">
                 <p className="text-slate-600 leading-relaxed text-sm md:text-base">{pkg.description}</p>
              </div>
            </div>

            {/* Special Service (Added Feature) */}
            {pkg.specialService && (
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 mb-8 flex gap-4 items-start">
                    <div className="bg-white p-2 rounded-full text-emerald-600 shadow-sm shrink-0">
                        <HeartHandshake size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-emerald-800 text-base mb-1">{pkg.specialService.title}</h4>
                        <p className="text-sm text-emerald-700/80 leading-relaxed">{pkg.specialService.description}</p>
                    </div>
                </div>
            )}

            {/* Timeline */}
            <div>
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-3 text-lg">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-xs">
                    <Navigation size={14} />
                </span>
                {pkg.id === TourType.BUSINESS ? '服务内容' : '参考行程 (可随时灵活调整)'}
              </h3>
              
              <div className="relative border-l-2 border-stone-200 ml-4 space-y-10 pb-4">
                {pkg.itinerary.map((item, idx) => (
                  <div key={idx} className="relative pl-10 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 bg-stone-50 p-1 group-hover:scale-110 transition-transform">
                      <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-orange-500' : 'bg-slate-300 group-hover:bg-slate-400'}`}></div>
                    </div>

                    {/* Time Label */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 mb-2 bg-stone-200/50 px-3 py-1 rounded-full uppercase tracking-wide">
                      {getTimeIcon(item.time)}
                      {item.time}
                    </span>

                    {/* Card */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-slate-400 bg-stone-50 p-2 rounded-lg">
                          {getIcon(item.iconType)}
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">{item.location}</h4>
                      </div>
                      
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      
                      {item.highlight && (
                        <div className="text-sm bg-orange-50 text-orange-900 px-4 py-3 rounded-lg border border-orange-100/50 flex gap-2 items-start">
                          <span className="font-bold shrink-0">✨ 亮点:</span> 
                          <span className="opacity-90">{item.highlight}</span>
                        </div>
                      )}
                      {item.note && (
                        <p className="text-xs text-stone-400 mt-2 italic">* {item.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {pkg.lunchOptions && (
                <div className="mt-8 bg-gradient-to-br from-white to-stone-50 p-6 rounded-2xl border border-stone-100">
                  <h4 className="font-bold text-slate-800 text-sm mb-4 flex items-center gap-2">
                    <Utensils size={16} className="text-orange-500" /> 餐饮推荐
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.lunchOptions.map((lunch, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex flex-col">
                        <span className="font-bold text-slate-700 text-sm">{lunch.name}</span>
                        <div className="flex justify-between items-center mt-2 text-xs">
                          <span className="text-stone-500">{lunch.type}</span>
                          <span className="font-mono text-stone-400">{lunch.priceLevel}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-white border-t border-stone-100 p-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] shrink-0 flex flex-col sm:flex-row items-center gap-4 justify-between z-10">
            <div className="text-xs text-stone-400 hidden sm:block">
                <p>感兴趣这个方案？</p>
                <p>联系我们获取详细报价单</p>
            </div>
            <button 
              onClick={onContact}
              className="w-full sm:w-auto px-8 bg-stone-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-stone-800 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              咨询此行程报价
              <Navigation size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetail;