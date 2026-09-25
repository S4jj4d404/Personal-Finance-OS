import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowDownToLine } from 'lucide-react';

interface MobileStickyCTAProps {
  language: Language;
  onDownloadClick: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({
  language,
  onDownloadClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language].mobileSticky;

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px (hero section)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Mobile Download Bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071827]/95 border-t border-[#153B50] backdrop-blur-md px-4 py-2.5 shadow-2xl transition-all duration-300 max-h-[14vh]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#F5FAFA] truncate">
            {t.title}
          </span>
          <span className="text-[10px] text-[#35E0C1] font-mono">
            {t.subtitle}
          </span>
        </div>

        <button
          type="button"
          onClick={onDownloadClick}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#06121F] bg-[#35E0C1] active:bg-[#42E6C8] rounded-lg shadow-md shadow-[#35E0C1]/20 whitespace-nowrap"
        >
          <ArrowDownToLine className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>{t.btn}</span>
        </button>
      </div>
    </aside>
  );
};
