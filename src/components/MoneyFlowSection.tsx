import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ArrowDownRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface MoneyFlowSectionProps {
  language: Language;
}

export const MoneyFlowSection: React.FC<MoneyFlowSectionProps> = ({ language }) => {
  const t = translations[language].moneyFlow;
  const [selectedBranch, setSelectedBranch] = useState<'all' | 'needs' | 'wants' | 'savings'>('all');

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35E0C1]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Interactive Sankey-style Flow Presentation */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#071827] border border-[#153B50] shadow-xl relative overflow-hidden">
          
          {/* Top Inflow Source Block */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-[#153B50]/60">
            <div>
              <div className="text-xs font-semibold text-[#A8BEC4] uppercase tracking-wider mb-1">
                {t.incomeSource}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#F5FAFA] tracking-tight tabular-nums">
                {t.incomeVal}
              </div>
            </div>

            {/* Interactive Filters for branches */}
            <div className="flex items-center gap-1.5 bg-[#0C2433] p-1 rounded-xl border border-[#153B50] text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectedBranch('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBranch === 'all'
                    ? 'bg-[#153B50] text-[#35E0C1] font-semibold'
                    : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                }`}
              >
                {language === 'bn' ? 'সব শাখা' : 'All Branches'}
              </button>
              <button
                type="button"
                onClick={() => setSelectedBranch('needs')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBranch === 'needs'
                    ? 'bg-[#153B50] text-cyan-400 font-semibold'
                    : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                }`}
              >
                {language === 'bn' ? 'প্রয়োজন' : 'Needs'}
              </button>
              <button
                type="button"
                onClick={() => setSelectedBranch('wants')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBranch === 'wants'
                    ? 'bg-[#153B50] text-amber-400 font-semibold'
                    : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                }`}
              >
                {language === 'bn' ? 'শখ' : 'Wants'}
              </button>
              <button
                type="button"
                onClick={() => setSelectedBranch('savings')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBranch === 'savings'
                    ? 'bg-[#153B50] text-emerald-400 font-semibold'
                    : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                }`}
              >
                {language === 'bn' ? 'সঞ্চয়' : 'Savings'}
              </button>
            </div>
          </div>

          {/* Flow Visual Breakdown: 3 Stream Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stream 1: Needs (50%) */}
            <div
              className={`p-6 rounded-2xl bg-[#0C2433] border transition-all duration-300 ${
                selectedBranch === 'all' || selectedBranch === 'needs'
                  ? 'border-cyan-500/50 shadow-md shadow-cyan-500/5'
                  : 'border-[#153B50]/40 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {t.needs}
                </span>
                <span className="text-xs font-mono font-bold text-[#F5FAFA] bg-[#071827] px-2 py-0.5 rounded border border-[#153B50]">
                  50.0%
                </span>
              </div>
              <div className="text-2xl font-bold font-mono text-[#F5FAFA] tracking-tight tabular-nums mb-3">
                {t.needsAmount}
              </div>
              <div className="w-full bg-[#071827] h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-cyan-400 h-full rounded-full w-[50%]" />
              </div>
              <p className="text-xs text-[#A8BEC4] leading-relaxed">
                {t.needsDesc}
              </p>
            </div>

            {/* Stream 2: Wants (24%) */}
            <div
              className={`p-6 rounded-2xl bg-[#0C2433] border transition-all duration-300 ${
                selectedBranch === 'all' || selectedBranch === 'wants'
                  ? 'border-amber-500/50 shadow-md shadow-amber-500/5'
                  : 'border-[#153B50]/40 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {t.wants}
                </span>
                <span className="text-xs font-mono font-bold text-[#F5FAFA] bg-[#071827] px-2 py-0.5 rounded border border-[#153B50]">
                  23.9%
                </span>
              </div>
              <div className="text-2xl font-bold font-mono text-[#F5FAFA] tracking-tight tabular-nums mb-3">
                {t.wantsAmount}
              </div>
              <div className="w-full bg-[#071827] h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-amber-400 h-full rounded-full w-[24%]" />
              </div>
              <p className="text-xs text-[#A8BEC4] leading-relaxed">
                {t.wantsDesc}
              </p>
            </div>

            {/* Stream 3: Savings & Goals (26%) */}
            <div
              className={`p-6 rounded-2xl bg-[#0C2433] border transition-all duration-300 ${
                selectedBranch === 'all' || selectedBranch === 'savings'
                  ? 'border-[#35E0C1]/50 shadow-md shadow-[#35E0C1]/10 ring-1 ring-[#35E0C1]/20'
                  : 'border-[#153B50]/40 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#35E0C1]">
                  {t.savingsFlow}
                </span>
                <span className="text-xs font-mono font-bold text-[#35E0C1] bg-[#071827] px-2 py-0.5 rounded border border-[#153B50]">
                  26.1%
                </span>
              </div>
              <div className="text-2xl font-bold font-mono text-[#F5FAFA] tracking-tight tabular-nums mb-3">
                {t.savingsAmount}
              </div>
              <div className="w-full bg-[#071827] h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-[#35E0C1] h-full rounded-full w-[26%]" />
              </div>
              <p className="text-xs text-[#A8BEC4] leading-relaxed">
                {t.savingsDesc}
              </p>
            </div>

          </div>

          {/* Positive Automated Insight Footer */}
          <div className="mt-8 p-4 rounded-xl bg-[#0C2433] border border-[#153B50] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#35E0C1]">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold">{t.insight}</span>
            </div>
            <span className="text-[11px] text-[#A8BEC4]">
              {language === 'bn' ? 'স্বয়ংক্রিয় ৫০/৩০/২০ নীতি' : 'Auto 50/30/20 Rule Analysis'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
