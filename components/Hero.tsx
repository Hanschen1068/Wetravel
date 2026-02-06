import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { HERO_IMAGE } from '../constants';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[kenburns_20s_infinite_alternate]"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-900/80" />
        <div className="absolute inset-0 bg-black/10" /> {/* General dim */}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 pb-20 max-w-4xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20 hover:bg-white/20 transition-colors cursor-default">
            <MapPin size={14} className="text-orange-300" />
            <span className="text-sm font-medium text-white tracking-widest uppercase">Sweden · Stockholm</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight shadow-sm leading-tight">
            不做游客，<br className="md:hidden" />
            做一天<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">北欧当地人</span>。
          </h1>
          
          <p className="text-stone-200 text-base md:text-xl mb-10 leading-relaxed max-w-lg mx-auto font-light">
            解决语言焦虑，告别千篇一律的打卡。<br />
            为您提供更有温度的<strong className="text-white font-medium">私享中文包车</strong>体验。
          </p>

          <button 
            onClick={onExplore}
            className="group bg-white text-stone-900 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            查看精选路线
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;