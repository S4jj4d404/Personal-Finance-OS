import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ChevronRight, ArrowDown } from 'lucide-react';

interface NotJustATrackerProps {
  language: Language;
}

export const NotJustATracker: React.FC<NotJustATrackerProps> = ({ language }) => {
  const t = translations[language].differentiation;

  return (
    <section className="py-16 md:py-24 bg-[#071827]/70 border-y border-[#153B50]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35E0C1]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-3 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg font-semibold text-[#35E0C1] mb-3">
            {t.subhead}
          </p>
          <p className="text-sm sm:text-base text-[#A8BEC4] leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* 5-Stage Progression Flow: TRACK -> UNDERSTAND -> PREDICT -> PLAN -> IMPROVE */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {t.steps.map((step, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#0C2433] border border-[#153B50] hover:border-[#35E0C1]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#35E0C1]">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-bold tracking-wider text-[#F5FAFA] uppercase group-hover:text-[#35E0C1] transition-colors">
                    {step.label}
                  </span>
                </div>
                <p className="text-xs text-[#A8BEC4] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-3 border-t border-[#153B50]/50 flex items-center justify-between text-[11px] text-[#A8BEC4]">
                <span className="text-[10px] font-mono">Stage 0{index + 1}</span>
                {index < 4 && (
                  <span className="hidden md:inline text-[#35E0C1]">→</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
