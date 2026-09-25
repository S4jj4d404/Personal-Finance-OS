import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Activity, TrendingUp, Info, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FinancialHealthAndNetWorthProps {
  language: Language;
}

export const FinancialHealthAndNetWorth: React.FC<FinancialHealthAndNetWorthProps> = ({
  language,
}) => {
  const t = translations[language].healthAndNetWorth;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* SECTION 1: FINANCIAL HEALTH (PRD Section 37) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-4">
                <Activity className="w-4 h-4" />
                <span>{t.healthTag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFA] tracking-tight mb-6">
                {t.healthHeadline}
              </h2>

              {/* Main Score Big Dial Card */}
              <div className="p-6 rounded-2xl bg-[#071827] border border-[#153B50] mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#A8BEC4] mb-1">
                    Overall Health Score
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#35E0C1] tracking-tight tabular-nums">
                      {t.healthScore}
                    </span>
                    <span className="text-lg font-mono text-[#A8BEC4]">{t.healthMax}</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 mt-1">
                    {t.healthStatus}
                  </div>
                </div>

                <div className="w-20 h-20 rounded-full border-4 border-[#153B50] border-t-[#35E0C1] border-r-[#35E0C1] flex items-center justify-center">
                  <span className="text-xs font-bold font-mono text-[#35E0C1]">82%</span>
                </div>
              </div>

              {/* 4 Pillars Breakdown */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#F5FAFA] mb-1">
                    <span>{t.metricSavings}</span>
                    <span className="font-mono text-[#35E0C1]">{t.metricSavingsScore} / 100</span>
                  </div>
                  <div className="w-full bg-[#071827] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#35E0C1] h-full rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#F5FAFA] mb-1">
                    <span>{t.metricBudget}</span>
                    <span className="font-mono text-cyan-400">{t.metricBudgetScore} / 100</span>
                  </div>
                  <div className="w-full bg-[#071827] h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full w-[79%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#F5FAFA] mb-1">
                    <span>{t.metricDebt}</span>
                    <span className="font-mono text-emerald-400">{t.metricDebtScore} / 100</span>
                  </div>
                  <div className="w-full bg-[#071827] h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full w-[91%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#F5FAFA] mb-1">
                    <span>{t.metricGoals}</span>
                    <span className="font-mono text-amber-400">{t.metricGoalsScore} / 100</span>
                  </div>
                  <div className="w-full bg-[#071827] h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full w-[76%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Informational Disclaimer required by PRD Section 37 */}
            <div className="pt-4 border-t border-[#153B50]/60 flex items-start gap-2 text-[11px] text-[#A8BEC4] leading-relaxed">
              <Info className="w-4 h-4 text-[#35E0C1] flex-shrink-0 mt-0.5" />
              <span>{t.healthDisclaimer}</span>
            </div>
          </div>

          {/* SECTION 2: NET WORTH (PRD Section 38) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>{t.netWorthTag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFA] tracking-tight mb-2">
                {t.netWorthHeadline}
              </h2>
              <p className="text-sm text-[#A8BEC4] mb-6">
                {t.netWorthDesc}
              </p>

              {/* Net Worth Equation Formula Box */}
              <div className="p-6 rounded-2xl bg-[#071827] border-2 border-[#35E0C1]/50 mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#35E0C1] uppercase tracking-wider">
                    {t.netWorthTotal}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {t.netWorthTrend}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#F5FAFA] tracking-tight tabular-nums mb-4">
                  {t.netWorthTotalVal}
                </div>

                {/* Assets minus Liabilities Breakdown */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#153B50]/60">
                  <div>
                    <span className="text-[11px] text-emerald-400 font-semibold block">{t.assets}</span>
                    <span className="text-base font-bold font-mono text-[#F5FAFA] tabular-nums">
                      {t.assetsVal}
                    </span>
                    <span className="text-[10px] text-[#A8BEC4] block mt-0.5">{t.assetsDesc}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-rose-400 font-semibold block">{t.liabilities}</span>
                    <span className="text-base font-bold font-mono text-rose-300 tabular-nums">
                      {t.liabilitiesVal}
                    </span>
                    <span className="text-[10px] text-[#A8BEC4] block mt-0.5">{t.liabilitiesDesc}</span>
                  </div>
                </div>
              </div>

              {/* Quarterly Progression Visualization */}
              <div className="p-4 rounded-xl bg-[#071827] border border-[#153B50]">
                <div className="text-[11px] font-semibold text-[#A8BEC4] mb-2 flex justify-between">
                  <span>{language === 'bn' ? 'ত্রৈমাসিক নেট ওর্থ প্রবৃদ্ধি' : 'Quarterly Progression'}</span>
                  <span className="text-emerald-400 font-mono">+18.4% (12 mo)</span>
                </div>
                <div className="flex items-end gap-3 h-16 pt-2">
                  <div className="flex-1 bg-[#153B50] rounded-t h-[50%] flex items-center justify-center text-[9px] font-mono text-[#A8BEC4]">Q1</div>
                  <div className="flex-1 bg-[#153B50] rounded-t h-[65%] flex items-center justify-center text-[9px] font-mono text-[#A8BEC4]">Q2</div>
                  <div className="flex-1 bg-[#10BFA8]/60 rounded-t h-[80%] flex items-center justify-center text-[9px] font-mono text-[#F5FAFA]">Q3</div>
                  <div className="flex-1 bg-[#35E0C1] rounded-t h-[100%] flex items-center justify-center text-[9px] font-mono text-[#06121F] font-bold">Q4</div>
                </div>
              </div>

            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#A8BEC4]">
              <ShieldCheck className="w-4 h-4 text-[#35E0C1]" />
              <span>{language === 'bn' ? 'সম্পদ ও দায় হিসাব আপনার ডিভাইসেই সংরক্ষিত' : 'All asset ledgers computed on your device'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
