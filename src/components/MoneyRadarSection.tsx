import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { AlertCircle, AlertTriangle, CheckCircle2, Radar, ArrowRight } from 'lucide-react';

interface MoneyRadarSectionProps {
  language: Language;
}

export const MoneyRadarSection: React.FC<MoneyRadarSectionProps> = ({ language }) => {
  const t = translations[language].moneyRadar;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <Radar className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 3 Real-Time Money Radar Signal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Signal 1: Red Alert (Needs Attention) */}
          <div className="p-6 rounded-3xl bg-[#0C2433] border border-rose-500/40 relative overflow-hidden flex flex-col justify-between group hover:border-rose-500 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping mr-1" />
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>{t.item1Type}</span>
                </div>
                <span className="text-[11px] font-mono text-[#A8BEC4]">92% Limit</span>
              </div>

              <h3 className="text-lg font-bold text-[#F5FAFA] mb-2">
                {t.item1Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {t.item1Desc}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-between text-xs font-mono">
              <span className="text-[#A8BEC4]">Remaining:</span>
              <span className="text-rose-400 font-bold">৳1,600 / 8 days</span>
            </div>
          </div>

          {/* Signal 2: Yellow Alert (Watch) */}
          <div className="p-6 rounded-3xl bg-[#0C2433] border border-amber-500/40 relative overflow-hidden flex flex-col justify-between group hover:border-amber-500 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 mr-1" />
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>{t.item2Type}</span>
                </div>
                <span className="text-[11px] font-mono text-amber-400">+24% Var</span>
              </div>

              <h3 className="text-lg font-bold text-[#F5FAFA] mb-2">
                {t.item2Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {t.item2Desc}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-between text-xs font-mono">
              <span className="text-[#A8BEC4]">Anomaly Flag:</span>
              <span className="text-amber-400 font-bold">Discretionary Spend</span>
            </div>
          </div>

          {/* Signal 3: Green Alert (Positive) */}
          <div className="p-6 rounded-3xl bg-[#0C2433] border border-emerald-500/40 relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-1" />
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.item3Type}</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Record High</span>
              </div>

              <h3 className="text-lg font-bold text-[#F5FAFA] mb-2">
                {t.item3Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {t.item3Desc}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-between text-xs font-mono">
              <span className="text-[#A8BEC4]">Total Surplus:</span>
              <span className="text-emerald-400 font-bold">৳13,550 Saved</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
