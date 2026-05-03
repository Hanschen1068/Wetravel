import React from 'react';
import { ShieldCheck, Clock, MessageCircleHeart } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <MessageCircleHeart className="text-orange-500" size={28} />,
      title: "中文沟通 0 障碍",
      desc: "不仅仅是司机，更是您的当地向导。解决点餐、买票、退税所有语言难题，让异国他乡没有陌生感。"
    },
    {
      icon: <ShieldCheck className="text-green-600" size={28} />,
      title: "安全出行 不踩坑",
      desc: "熟悉当地交规与路况。拒绝隐形消费，拒绝强制购物，给您最纯粹的旅行体验。"
    },
    {
      icon: <Clock className="text-blue-500" size={28} />,
      title: "时间灵活 不早起",
      desc: "只有自由行的时间灵活性，没有自由行的操心。睡到自然醒，想停就停，行程节奏完全由您掌控。"
    }
  ];

  return (
    <div className="bg-white py-16 px-6 -mt-10 relative z-10 max-w-6xl mx-auto rounded-3xl shadow-xl border border-stone-100 mb-12">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">为什么选择我们？</h2>
        <p className="text-slate-500">别想着“怎么接更多单”，我们只思考：如何解决您在瑞典的焦虑。</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-md transition-shadow">
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 inline-block">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;