import React from 'react';
import { HelpCircle, ChevronRight, MessageCircle } from 'lucide-react';
import { FAQS } from '../constants';

interface FAQProps {
  onContact: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onContact }) => {
  return (
    <div className="py-16 px-6 bg-stone-100 border-t border-stone-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200 mb-4 shadow-sm">
            <HelpCircle size={16} className="text-orange-500" />
            <span className="text-xs font-bold text-slate-600 tracking-wide">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">🤔 常见问题 Q&A</h2>
          <p className="text-slate-500">给第一次来瑞典的中国游客</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/60">
              <h3 className="font-bold text-lg text-slate-800 mb-3">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
                {faq.answer}
              </p>
              {faq.cta && (
                <div className="bg-orange-50/50 p-3 rounded-xl text-sm text-slate-700 font-medium border border-orange-100/50">
                  {faq.cta}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Soft Sales Funnel / Trigger Section */}
        <div className="mt-12 bg-stone-900 rounded-3xl p-8 text-center shadow-xl relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-800 to-black z-0" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">还是觉得不踏实？</h3>
            <p className="text-stone-300 mb-8 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
              如果你是第一次来瑞典，或者行程里有老人/小孩，<br className="hidden md:block"/>
              可以提前跟我说一下你的到达时间和天数，<br className="hidden md:block"/>
              我可以帮你简单看一眼行程是否合适。
            </p>
            
            <button 
              onClick={onContact}
              className="bg-white text-stone-900 px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-stone-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              私聊简单咨询
              <MessageCircle size={18} />
            </button>
            <p className="text-stone-500 text-xs mt-4">
              *不做任何强制推销，纯当交个朋友
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;