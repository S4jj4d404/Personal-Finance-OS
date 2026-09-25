import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Calendar, BookOpen, Check, TrendingUp, Sparkles } from 'lucide-react';

interface CalendarStorySectionProps {
  language: Language;
}

export const CalendarStorySection: React.FC<CalendarStorySectionProps> = ({ language }) => {
  const t = translations[language].calendarStory;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* SECTION 1: FINANCIAL CALENDAR (PRD Section 50) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-4">
                <Calendar className="w-4 h-4" />
                <span>{t.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFA] tracking-tight mb-3">
                {t.calendarHeadline}
              </h2>
              <p className="text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {t.calendarDesc}
              </p>

              {/* Calendar Grid Demo */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#071827] border border-[#153B50]">
                <div className="flex items-center justify-between text-xs font-bold text-[#F5FAFA] mb-4">
                  <span>September 2026</span>
                  <span className="text-[11px] font-mono text-[#35E0C1]">5 Events Scheduled</span>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono text-[#A8BEC4] mb-2">
                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                  {/* Sample calendar days */}
                  <div className="p-2 rounded bg-[#0C2433]/40 text-[#A8BEC4]">24</div>
                  <div className="p-2 rounded bg-[#0C2433]/40 text-[#A8BEC4]">25</div>
                  <div className="p-2 rounded bg-[#0C2433]/40 text-[#A8BEC4]">26</div>
                  <div className="p-2 rounded bg-[#0C2433]/40 text-[#A8BEC4]">27</div>
                  <div className="p-2 rounded bg-[#0C2433]/40 text-[#A8BEC4]">28</div>
                  <div className="p-2 rounded bg-[#0C2433]/40 text-[#A8BEC4]">29</div>
                  <div className="p-2 rounded bg-[#0C2433]/40 text-[#A8BEC4]">30</div>

                  {/* Sept 1: Salary Payday */}
                  <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold">
                    01
                    <span className="block text-[8px] font-mono">+৳45k</span>
                  </div>

                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">02</div>
                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">03</div>
                  
                  {/* Sept 4: Internet Bill */}
                  <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold">
                    04
                    <span className="block text-[8px] font-mono">Net ৳1k</span>
                  </div>

                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">05</div>
                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">06</div>
                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">07</div>

                  {/* Sept 10: Rent Due */}
                  <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold">
                    10
                    <span className="block text-[8px] font-mono">Rent ৳12k</span>
                  </div>

                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">11</div>
                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">12</div>
                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">13</div>

                  {/* Sept 15: Laptop Goal Deposit */}
                  <div className="p-2 rounded-lg bg-[#35E0C1]/20 border border-[#35E0C1]/50 text-[#35E0C1] font-bold">
                    15
                    <span className="block text-[8px] font-mono">Goal ৳5k</span>
                  </div>

                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">16</div>
                  <div className="p-2 rounded bg-[#0C2433] text-[#F5FAFA]">17</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#153B50]/60 text-xs text-[#A8BEC4]">
              {language === 'bn' ? 'ক্যালেন্ডার ভিউ থেকে এক নজরে সব বিলের ডেট দেখা যায়' : 'Never miss upcoming bills or deposit deadlines'}
            </div>
          </div>

          {/* SECTION 2: MONTHLY FINANCIAL STORY (PRD Section 51) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-4">
                <BookOpen className="w-4 h-4" />
                <span>AI RECAP</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFA] tracking-tight mb-3">
                {t.storyHeadline}
              </h2>
              <p className="text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {language === 'bn'
                  ? 'প্রতি মাস শেষে এআই আপনার আর্থিক জয় ও খরচগুলোকে একটি সাজানো গল্পের মতো উপস্থাপন করে।'
                  : 'An intelligent narrative summary highlighting key achievements, changes, and savings milestones.'}
              </p>

              {/* Monthly Story Card Mockup */}
              <div className="p-6 rounded-2xl bg-[#071827] border border-[#35E0C1]/40 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#35E0C1] uppercase tracking-wider">
                    {t.storyMonth}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#35E0C1]" />
                </div>

                <div className="grid grid-cols-3 gap-2 pb-4 mb-4 border-b border-[#153B50] text-center font-mono">
                  <div>
                    <span className="text-[10px] text-[#A8BEC4] block">{language === 'bn' ? 'আয়' : 'Earned'}</span>
                    <span className="text-xs font-bold text-emerald-400">{t.storyIncome}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A8BEC4] block">{language === 'bn' ? 'ব্যয়' : 'Spent'}</span>
                    <span className="text-xs font-bold text-rose-400">{t.storySpent}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A8BEC4] block">{language === 'bn' ? 'সঞ্চয়' : 'Saved'}</span>
                    <span className="text-xs font-bold text-[#35E0C1]">{t.storySaved}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#F5FAFA]">
                  <div className="flex items-start gap-2">
                    <span className="text-[#35E0C1] font-bold">✓</span>
                    <span>{t.bullet1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">⚠</span>
                    <span>{t.bullet2}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#35E0C1] font-bold">🎯</span>
                    <span>{t.bullet3}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#153B50]/60 text-xs text-[#A8BEC4]">
              {language === 'bn' ? 'মাসিক রিপোর্ট পিডিএফ আকারে এক্সপোর্ট করা সম্ভব' : 'Export and share your monthly financial report anytime'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
