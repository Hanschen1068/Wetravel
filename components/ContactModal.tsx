import React from 'react';
import { X, Copy, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const wechatId = "Stockholm_Guide_VIP"; // Placeholder

  const handleCopy = () => {
    navigator.clipboard.writeText(wechatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6 relative shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-300 hover:text-slate-500">
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M8.2 14.5c.3 0 .6-.1.8-.3 0-.1 2.9-2.2 2.9-2.2.8-.6 1.1-1.1 1.1-1.9 0-2.3-2.5-4.2-5.6-4.2-3.1 0-5.7 1.9-5.7 4.2 0 2.3 2.5 4.2 5.7 4.2.3 0 .6 0 .8-.1zM17.5 15.5c-2.7 0-4.9-1.6-4.9-3.6 0-.3 0-.5.1-.8 1.1.4 2.3.7 3.5.7 4.3 0 7.7-2.7 7.7-6 0-.2 0-.4-.1-.5 1.5.9 2.5 2.3 2.5 3.9 0 .7-.3 1.4-1.1 2.2 0 0-2.5 1.9-2.5 1.9-.2.2-.5.3-.8.3-.3 0-.5 0-.8-.1l-.6.4c-.6.3-1.6.8-2.1.9-.3 0-.6.1-.9.1z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800">添加微信咨询</h3>
          <p className="text-sm text-slate-500 mt-2">
            请备注 "斯德哥尔摩旅游" <br/>
            我们将尽快为您定制方案
          </p>
        </div>

        <div className="bg-stone-50 p-4 rounded-xl flex items-center justify-between mb-6 border border-stone-100">
          <div className="text-left">
            <span className="text-xs text-stone-400 block mb-1">微信号 ID</span>
            <span className="font-mono font-bold text-lg text-slate-800">{wechatId}</span>
          </div>
          <button 
            onClick={handleCopy}
            className={`p-2 rounded-lg transition-colors ${copied ? 'bg-green-100 text-green-600' : 'bg-white text-slate-600 shadow-sm border border-stone-200'}`}
          >
            {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
          </button>
        </div>

        <button 
          onClick={onClose}
          className="w-full py-3 rounded-xl border border-stone-200 text-stone-500 font-medium hover:bg-stone-50"
        >
          稍后再说
        </button>
      </div>
    </div>
  );
};

export default ContactModal;