
import React, { useState } from 'react';

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
  onAction?: () => void;
}

const HotMixLogo = ({ size = "w-16 h-16" }: { size?: string }) => (
  <div className={`${size} relative flex items-center justify-center overflow-hidden rounded-full border-2 border-[#f36f21] shadow-xl bg-white transition-transform group-hover:rotate-12 duration-500`}>
    <img 
      src="https://i.postimg.cc/wBQhHs7n/Chat-GPT-Image-Jan-12-2026-11-06-12-AM.png" 
      alt="Hot Mix Logo" 
      className="w-full h-full object-contain p-1"
    />
  </div>
);

const Header: React.FC<Props> = ({ isDark, onToggleTheme, onAction }) => {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const phoneNumbers = [
    { label: "رقم 1", number: "01126770105", color: "#f36f21" },
    { label: "رقم 2", number: "01094280173", color: "#f36f21" },
    { label: "رقم 3", number: "01220691771", color: "#f36f21" }
  ];

  const handleCallClick = () => {
    onAction?.();
    setShowCallMenu(!showCallMenu);
  };

  return (
    <header className="relative z-50 bg-white dark:bg-[#050505] border-b border-zinc-200 dark:border-white/10 pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-2xl mx-auto px-5 py-4 md:py-6 text-right">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onAction}>
            <div className="relative transform group-hover:scale-105 transition-transform duration-300">
               <HotMixLogo />
               <div className="absolute inset-0 bg-orange-600/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none italic uppercase -mb-1">
                HOT MIX
              </h1>
              <span className="text-orange-600 dark:text-orange-500 text-[11px] font-black uppercase tracking-[0.1em] mt-1">
                مطعم هوت ميكس - البدرشين
              </span>
            </div>
          </div>

          <button
            onClick={onToggleTheme}
            className="w-11 h-11 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl transition-all active:scale-90 border border-zinc-200 dark:border-white/10 shadow-sm"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="flex w-full gap-3 relative">
          <div className="flex-1 relative">
            <button
              onClick={handleCallClick}
              className={`w-full font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.96] shadow-xl text-[14px] border ${showCallMenu ? 'bg-zinc-900 text-white border-zinc-800' : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-white/10'}`}
            >
              <span className="text-xl" aria-hidden="true">📞</span>
              <span>اتصل بنا</span>
            </button>
            
            {showCallMenu && (
              <>
                <div className="fixed inset-0 z-[-1] bg-black/40 backdrop-blur-[4px]" onClick={() => setShowCallMenu(false)}></div>
                <div className="absolute top-full mt-3 left-0 right-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[1.5rem] shadow-2xl overflow-hidden animate-slide-up z-50">
                  <div className="px-4 py-2 bg-zinc-50 dark:bg-white/5 border-b border-zinc-100 dark:border-white/5">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">خطوط الطلبات</span>
                  </div>
                  {phoneNumbers.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.number}`}
                      onClick={() => setShowCallMenu(false)}
                      className="flex items-center justify-between px-5 py-3.5 hover:bg-orange-50 dark:hover:bg-orange-500/5 border-b last:border-0 border-zinc-100 dark:border-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: phone.color }}></div>
                        <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400">{phone.label}</span>
                      </div>
                      <span className="text-[15px] font-black text-zinc-900 dark:text-white tabular-nums tracking-tighter">{phone.number}</span>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <a
            href="https://wa.me/201126770105"
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.96] shadow-xl text-[14px] border border-orange-400/20"
          >
            <span className="text-xl" aria-hidden="true">💬</span>
            <span>واتساب</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
