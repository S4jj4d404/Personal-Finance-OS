import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Sparkles, ArrowRight, Plus, Minus, Equal, Info } from 'lucide-react';

interface ForecastSectionProps {
  language: Language;
}

export const ForecastSection: React.FC<ForecastSectionProps> = ({ language }) => {
  const t = translations[language].forecast;

  return (
    <section className="py-20 md:py-28 bg-[#071827]/70 border-y border-[#153B50]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Forecast Formula Cards */}
        <div className="max-w-5xl mx-auto bg-[#0C2433] border border-[#153B50] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            {/* Step 1: Current */}
            <div className="p-4 rounded-2xl bg-[#071827] border border-[#153B50] text-center">
              <span className="text-[11px] font-semibold text-[#A8BEC4] block mb-1">
                {t.currentBalance}
              </span>
              <span className="text-xl font-bold font-mono text-[#F5FAFA] tabular-nums">
                {t.currentBalanceVal}
              </span>
            </div>

            {/* Step 2: Expected Income */}
            <div className="p-4 rounded-2xl bg-[#071827] border border-emerald-500/30 text-center relative">
              <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0C2433] border border-[#153B50] items-center justify-center text-emerald-400 text-xs font-bold">
                <Plus className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">
                {t.expectedIncome}
              </span>
              <span className="text-xl font-bold font-mono text-emerald-400 tabular-nums">
                {t.expectedIncomeVal}
              </span>
            </div>

            {/* Step 3: Bills */}
            <div className="p-4 rounded-2xl bg-[#071827] border border-amber-500/30 text-center relative">
              <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0C2433] border border-[#153B50] items-center justify-center text-amber-400 text-xs font-bold">
                <Minus className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-semibold text-amber-400 block mb-1">
                {t.scheduledBills}
              </span>
              <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">
                {t.scheduledBillsVal}
              </span>
            </div>

            {/* Step 4: Spending */}
            <div className="p-4 rounded-2xl bg-[#071827] border border-rose-500/30 text-center relative">
              <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0C2433] border border-[#153B50] items-center justify-center text-rose-400 text-xs font-bold">
                <Minus className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-semibold text-rose-400 block mb-1">
                {t.expectedSpending}
              </span>
              <span className="text-xl font-bold font-mono text-rose-400 tabular-nums">
                {t.expectedSpendingVal}
              </span>
            </div>

            {/* Step 5: Projected Balance */}
            <div className="p-4 rounded-2xl bg-[#071827] border-2 border-[#35E0C1] text-center shadow-lg shadow-[#35E0C1]/10 relative">
              <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0C2433] border border-[#35E0C1] items-center justify-center text-[#35E0C1] text-xs font-bold">
                <Equal className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-bold text-[#35E0C1] block mb-1 uppercase tracking-wider">
                {t.projectedBalance}
              </span>
              <span className="text-2xl font-bold font-mono text-[#35E0C1] tabular-nums">
                {t.projectedBalanceVal}
              </span>
            </div>

          </div>

          {/* Factual Disclaimer required by PRD Section 44 */}
          <div className="mt-8 pt-6 border-t border-[#153B50]/60 flex items-center justify-center gap-2 text-xs text-[#A8BEC4] text-center">
            <Info className="w-4 h-4 text-[#35E0C1] flex-shrink-0" />
            <span>{t.disclaimer}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
