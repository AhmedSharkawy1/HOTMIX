
import React from 'react';
import { MenuSection as MenuSectionType } from '../types';

interface Props {
  section: MenuSectionType;
  isFirst?: boolean;
  onInteraction?: () => void;
}

const MenuSection: React.FC<Props> = ({ section, isFirst, onInteraction }) => {
  return (
    <section id={section.id} className="mb-10 scroll-mt-[195px]" aria-labelledby={`${section.id}-heading`}>
      {/* Visual Header */}
      <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl border border-zinc-200 dark:border-white/5 bg-zinc-200 dark:bg-zinc-900 reveal-item group">
        <img
          src={section.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading={isFirst ? "eager" : "lazy"}
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
        <div className="absolute bottom-8 right-8 left-8 text-right">
          <div className="flex flex-col gap-1">
            <span className="text-orange-500 font-black text-[11px] tracking-[0.2em] uppercase" aria-hidden="true">فئة القائمة</span>
            <div className="flex items-center gap-3">
              <h2 id={`${section.id}-heading`} className="text-3xl font-black text-white leading-none">{section.title}</h2>
              <span className="text-3xl leading-none" aria-hidden="true">{section.emoji}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Items Container */}
      <div className="bg-white dark:bg-zinc-900/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 border border-zinc-200 dark:border-white/10 shadow-xl reveal-item">
        {section.subtitles && !section.items.some(item => item.labels) && (
          <div className="flex justify-end mb-6 border-b border-zinc-100 dark:border-white/5 pb-4">
             <div className="flex gap-12 pl-6" aria-hidden="true">
                {section.subtitles.map((sub, idx) => (
                    <span key={idx} className="text-zinc-400 dark:text-zinc-600 text-[11px] font-black tracking-widest uppercase">{sub}</span>
                ))}
             </div>
          </div>
        )}
        
        <div className="divide-y divide-zinc-100 dark:divide-white/5" role="list">
          {section.items.map((item, idx) => {
            const itemDescription = `${item.name}. السعر: ${item.prices.join(' أو ')} جنيه مصري.`;
            
            return (
              <div 
                key={idx} 
                onClick={onInteraction}
                className="py-6 flex items-center justify-between gap-4 group transition-all duration-300 ease-out hover:bg-orange-50/30 dark:hover:bg-orange-900/5 -mx-4 px-4 rounded-3xl border border-transparent hover:border-orange-100 dark:hover:border-orange-900/10 active:scale-[0.98]"
                role="listitem"
                aria-label={itemDescription}
              >
                <div className="flex flex-col gap-2 max-w-[60%]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-zinc-900 dark:text-zinc-100 font-black text-base leading-snug group-hover:text-orange-600 transition-colors duration-300">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      {item.isPopular && (
                        <span className="bg-orange-600 text-white text-[9px] font-black px-2 py-0.5 rounded-lg animate-popular shadow-md shadow-orange-600/20">
                          مميز
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 md:gap-8 items-end shrink-0" aria-hidden="true">
                  {item.prices.map((price, pIdx) => (
                    <div key={pIdx} className="flex flex-col items-center gap-1.5">
                      {item.labels && item.labels[pIdx] && (
                        <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter">
                          {item.labels[pIdx]}
                        </span>
                      )}
                      <div className={`bg-zinc-100 dark:bg-zinc-800/80 group-hover:bg-white dark:group-hover:bg-zinc-800 px-4 py-2.5 rounded-2xl border border-zinc-200 dark:border-white/5 group-hover:border-orange-500/40 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-orange-600/10 ${price === '-' ? 'opacity-20 pointer-events-none' : ''}`}>
                          <span className="text-orange-600 font-black text-xl leading-none">
                              {price}
                          </span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-500 mr-1 font-black">ج</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
