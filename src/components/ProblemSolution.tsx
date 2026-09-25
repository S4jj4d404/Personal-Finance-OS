import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import {
  TrendingUp,
  Receipt,
  Wallet,
  PieChart,
  PiggyBank,
  Target,
  CalendarCheck,
  ShieldAlert,
  BarChart3,
  Bot,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface ProblemSolutionProps {
  language: Language;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ language }) => {
  const tProb = translations[language].problem;
  const tSol = translations[language].solution;

  const solutionIcons = [
    TrendingUp,
    Receipt,
    Wallet,
    PieChart,
    PiggyBank,
    Target,
    CalendarCheck,
    ShieldAlert,
    BarChart3,
    Bot,
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PROBLEM BLOCK */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-rose-400 uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{tProb.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
              {tProb.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
              {tProb.description}
            </p>
          </div>

          {/* Sequential Problem Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-2xl bg-[#0C2433]/70 border border-[#153B50] flex flex-col justify-between">
              <div className="text-xs font-mono font-bold text-[#35E0C1] mb-2">01 · DAY 01</div>
              <p className="text-sm font-semibold text-[#F5FAFA]">{tProb.step1}</p>
              <div className="text-[11px] text-[#A8BEC4] mt-3">{language === 'bn' ? 'অ্যাকাউন্টে স্বস্তি' : 'Accounts look healthy'}</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C2433]/70 border border-[#153B50] flex flex-col justify-between">
              <div className="text-xs font-mono font-bold text-amber-400 mb-2">02 · DAY 10</div>
              <p className="text-sm font-semibold text-[#F5FAFA]">{tProb.step2}</p>
              <div className="text-[11px] text-[#A8BEC4] mt-3">{language === 'bn' ? 'বাইরে খাওয়া ও কেনাকাটা' : 'Unconscious spending creeps'}</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C2433]/70 border border-[#153B50] flex flex-col justify-between">
              <div className="text-xs font-mono font-bold text-orange-400 mb-2">03 · DAY 18</div>
              <p className="text-sm font-semibold text-[#F5FAFA]">{tProb.step3}</p>
              <div className="text-[11px] text-[#A8BEC4] mt-3">{language === 'bn' ? 'বিল ও স্বয়ংক্রিয় কর্তন' : 'Recurring expenses debit'}</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C2433]/70 border border-[#153B50] flex flex-col justify-between">
              <div className="text-xs font-mono font-bold text-rose-400 mb-2">04 · DAY 25</div>
              <p className="text-sm font-semibold text-[#F5FAFA]">{tProb.step4}</p>
              <div className="text-[11px] text-[#A8BEC4] mt-3">{language === 'bn' ? 'সঞ্চয় স্থগিত' : 'Surplus vanishes'}</div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-medium text-rose-200">
              {tProb.conclusion}
            </p>
          </div>
        </div>

        {/* SOLUTION BLOCK (PRD Section 24) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35E0C1]" />
              <span>{tSol.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
              {tSol.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
              {tSol.description}
            </p>
          </div>

          {/* 10-Item Clean System Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tSol.items.map((item, index) => {
              const Icon = solutionIcons[index] || Wallet;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#0C2433] hover:bg-[#0D2938] border border-[#153B50] hover:border-[#35E0C1]/40 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center text-[#35E0C1] mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#F5FAFA] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A8BEC4] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#153B50]/40 flex items-center text-[11px] font-semibold text-[#35E0C1] group-hover:translate-x-1 transition-transform">
                    <span>{language === 'bn' ? 'বিস্তারিত' : 'Explore'}</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
