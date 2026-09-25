import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import {
  Bot,
  User,
  Sparkles,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Target,
  HelpCircle,
  Activity,
} from 'lucide-react';

interface AICoachSectionProps {
  language: Language;
}

export const AICoachSection: React.FC<AICoachSectionProps> = ({ language }) => {
  const t = translations[language].aiCoach;
  const [activeTab, setActiveTab] = useState<'ask' | 'understand' | 'plan' | 'simulate' | 'forecast'>('ask');

  const currentExample = t.examples[activeTab];

  return (
    <section id="ai-coach" className="py-20 md:py-28 bg-[#071827]/70 border-t border-[#153B50]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <Bot className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-3 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.subhead}
          </p>
        </div>

        {/* Tab Controls for Examples (Ask, Understand, Plan, Simulate, Forecast) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('ask')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'ask'
                ? 'bg-[#35E0C1] text-[#06121F] shadow-md shadow-[#35E0C1]/20 font-bold'
                : 'bg-[#0C2433] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
            }`}
          >
            {t.tabAsk}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('understand')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'understand'
                ? 'bg-[#35E0C1] text-[#06121F] shadow-md shadow-[#35E0C1]/20 font-bold'
                : 'bg-[#0C2433] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
            }`}
          >
            {t.tabUnderstand}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('plan')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'plan'
                ? 'bg-[#35E0C1] text-[#06121F] shadow-md shadow-[#35E0C1]/20 font-bold'
                : 'bg-[#0C2433] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
            }`}
          >
            {t.tabPlan}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('simulate')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'simulate'
                ? 'bg-[#35E0C1] text-[#06121F] shadow-md shadow-[#35E0C1]/20 font-bold'
                : 'bg-[#0C2433] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
            }`}
          >
            {t.tabSimulate}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('forecast')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'forecast'
                ? 'bg-[#35E0C1] text-[#06121F] shadow-md shadow-[#35E0C1]/20 font-bold'
                : 'bg-[#0C2433] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
            }`}
          >
            {t.tabForecast}
          </button>
        </div>

        {/* Conversational Screen Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#06121F] border border-[#153B50] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Assistant Status Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#153B50]/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C2433] border border-[#35E0C1]/40 flex items-center justify-center text-[#35E0C1]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#F5FAFA]">Personal Finance AI Coach</div>
                <div className="text-[11px] text-[#35E0C1] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35E0C1] animate-pulse" />
                  {language === 'bn' ? 'ব্যক্তিগত আর্থিক বিশ্লেষণ সক্রিয়' : 'On-Device Analysis Ready'}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-[#A8BEC4] font-mono bg-[#0C2433] px-3 py-1.5 rounded-lg border border-[#153B50]">
              <span>Scenario:</span>
              <span className="text-[#35E0C1] uppercase">{activeTab}</span>
            </div>
          </div>

          {/* Interactive Chat Stream */}
          <div className="space-y-6">
            
            {/* User Message Bubble */}
            <div className="flex items-start justify-end gap-3">
              <div className="max-w-lg bg-[#0C2433] border border-[#153B50] p-4 rounded-2xl rounded-tr-xs text-sm font-semibold text-[#F5FAFA] shadow-md">
                {currentExample.q}
              </div>
              <div className="w-8 h-8 rounded-full bg-[#153B50] text-[#F5FAFA] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                <User className="w-4 h-4" />
              </div>
            </div>

            {/* AI Response Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#35E0C1]/20 border border-[#35E0C1]/50 text-[#35E0C1] flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="max-w-2xl bg-[#071827] border border-[#35E0C1]/30 p-5 rounded-2xl rounded-tl-xs text-sm text-[#A8BEC4] leading-relaxed shadow-lg">
                <p className="text-[#F5FAFA] mb-4">
                  {currentExample.a}
                </p>

                {/* AI Calculated Data Callout Box */}
                <div className="p-3.5 rounded-xl bg-[#0C2433] border border-[#153B50] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[11px] text-[#A8BEC4] block">{currentExample.statLabel}</span>
                    <span className="text-sm font-mono font-bold text-[#35E0C1] tabular-nums">
                      {currentExample.statVal}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {currentExample.statChange}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Chat Prompt Suggestions */}
          <div className="mt-8 pt-6 border-t border-[#153B50]/50 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#A8BEC4] text-[11px] mr-2">
              {language === 'bn' ? 'আরও নমুনা প্রশ্ন:' : 'Try asking:'}
            </span>
            <button
              type="button"
              onClick={() => setActiveTab('understand')}
              className="text-xs text-[#35E0C1] bg-[#0C2433] hover:bg-[#153B50] border border-[#153B50] px-3 py-1.5 rounded-lg transition-colors"
            >
              {language === 'bn' ? 'কেন খরচ বাড়ল?' : 'Why did my spending increase?'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('forecast')}
              className="text-xs text-[#35E0C1] bg-[#0C2433] hover:bg-[#153B50] border border-[#153B50] px-3 py-1.5 rounded-lg transition-colors"
            >
              {language === 'bn' ? 'আগামী মাসের সম্ভাব্য সমাপনী ব্যালেন্স' : 'Project next month balance'}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
