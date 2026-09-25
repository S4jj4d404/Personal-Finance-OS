import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Layers, Eye, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  language: Language;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ language }) => {
  const t = translations[language].howItWorks;

  const steps = [
    {
      num: t.step1Num,
      title: t.step1Title,
      desc: t.step1Desc,
      icon: Layers,
      highlight: language === 'bn' ? 'ভয়েস ও রসিদ স্ক্যান' : 'Natural voice & OCR',
    },
    {
      num: t.step2Num,
      title: t.step2Title,
      desc: t.step2Desc,
      icon: Eye,
      highlight: language === 'bn' ? '৮২/১০০ হেলথ স্কোর' : '82/100 health metrics',
    },
    {
      num: t.step3Num,
      title: t.step3Title,
      desc: t.step3Desc,
      icon: Sparkles,
      highlight: language === 'bn' ? 'এআই সিমুলেটর ও লক্ষ্য' : 'What-If & forecast',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
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

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-[#0C2433] border border-[#153B50] hover:border-[#35E0C1]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#35E0C1]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center text-[#35E0C1] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F5FAFA] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#A8BEC4] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#153B50]/60 flex items-center justify-between text-xs text-[#35E0C1] font-semibold">
                  <span>{step.highlight}</span>
                  {index < 2 && (
                    <span className="hidden md:inline text-[#A8BEC4]">→</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
