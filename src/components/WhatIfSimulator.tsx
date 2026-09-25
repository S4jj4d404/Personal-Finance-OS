import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Sliders, Sparkles, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

interface WhatIfSimulatorProps {
  language: Language;
}

export const WhatIfSimulator: React.FC<WhatIfSimulatorProps> = ({ language }) => {
  const t = translations[language].whatIf;
  const [reductionPercent, setReductionPercent] = useState<number>(20);

  // Baseline figures
  const baseFoodSpending = 10000; // ৳10,000 baseline
  const monthlySavings = (baseFoodSpending * (reductionPercent / 100));
  const yearlySavings = monthlySavings * 12;
  
  // Accelerated timeline: with ৳80,000 target and ৳8,750 base needed:
  const baselineMonths = 6;
  const acceleratedMonths = (baselineMonths * (1 - (reductionPercent / 100) * 0.4)).toFixed(1);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <Sliders className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#071827] border border-[#153B50] p-6 sm:p-10 shadow-2xl">
          
          {/* Slider Control Area */}
          <div className="mb-10 p-6 rounded-2xl bg-[#0C2433] border border-[#153B50]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <label htmlFor="reduction-slider" className="text-sm font-bold text-[#F5FAFA]">
                {t.sliderLabel}
              </label>
              <span className="text-lg font-bold font-mono text-[#35E0C1] bg-[#071827] px-3 py-1 rounded-lg border border-[#153B50] self-start sm:self-auto">
                -{reductionPercent}%
              </span>
            </div>

            <input
              id="reduction-slider"
              type="range"
              min="0"
              max="50"
              step="5"
              value={reductionPercent}
              onChange={(e) => setReductionPercent(Number(e.target.value))}
              className="w-full h-2.5 bg-[#06121F] rounded-lg appearance-none cursor-pointer accent-[#35E0C1] focus:outline-none"
            />

            <div className="flex justify-between text-[11px] font-mono text-[#A8BEC4] mt-2">
              <span>0% (No Change)</span>
              <span>-25% (Moderate)</span>
              <span>-50% (High Discipline)</span>
            </div>
          </div>

          {/* Real-time Dynamic Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Monthly Surplus Impact */}
            <div className="p-6 rounded-2xl bg-[#0C2433] border border-emerald-500/30">
              <span className="text-xs font-semibold text-[#A8BEC4] block mb-2">
                {t.savingsResultMonth}
              </span>
              <div className="text-3xl font-extrabold font-mono text-emerald-400 tabular-nums mb-1">
                +৳{monthlySavings.toLocaleString()}
              </div>
              <span className="text-[11px] text-[#A8BEC4]">
                {language === 'bn' ? 'প্রতি মাসে অতিরিক্ত সঞ্চয় ফান্ডে' : 'Redirected to wealth surplus'}
              </span>
            </div>

            {/* Annual Accumulated Impact */}
            <div className="p-6 rounded-2xl bg-[#0C2433] border border-[#35E0C1]/30">
              <span className="text-xs font-semibold text-[#A8BEC4] block mb-2">
                {t.savingsResultYear}
              </span>
              <div className="text-3xl font-extrabold font-mono text-[#35E0C1] tabular-nums mb-1">
                +৳{yearlySavings.toLocaleString()}
              </div>
              <span className="text-[11px] text-[#A8BEC4]">
                {language === 'bn' ? '১ বছরে অতিরিক্ত সঞ্চিত মূলধন' : 'Compounded annual nest egg'}
              </span>
            </div>

            {/* Laptop Goal Completion Acceleration */}
            <div className="p-6 rounded-2xl bg-[#0C2433] border border-cyan-500/30">
              <span className="text-xs font-semibold text-[#A8BEC4] block mb-2">
                {t.goalResult}
              </span>
              <div className="text-3xl font-extrabold font-mono text-cyan-400 tabular-nums mb-1">
                {reductionPercent === 0 ? '6.0 mos' : `${acceleratedMonths} mos`}
              </div>
              <span className="text-[11px] text-[#A8BEC4]">
                {reductionPercent > 0
                  ? language === 'bn'
                    ? `${((baselineMonths - Number(acceleratedMonths)).toFixed(1))} মাস আগেই সম্পূর্ণ!`
                    : `${(baselineMonths - Number(acceleratedMonths)).toFixed(1)} months earlier!`
                  : language === 'bn' ? 'স্বাভাবিক সময়সীমা' : 'Standard timeline'}
              </span>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-[#0C2433] border border-[#153B50] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#35E0C1]">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>{t.cta}</span>
            </div>
            <a
              href="#download"
              className="text-xs font-bold text-[#06121F] bg-[#35E0C1] hover:bg-[#42E6C8] px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap"
            >
              {language === 'bn' ? 'অ্যাপে পরীক্ষা করুন' : 'Run Scenarios in App'}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
