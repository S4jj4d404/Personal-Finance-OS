import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { GraduationCap, Briefcase, Laptop, Building2, Users } from 'lucide-react';

interface WhoIsItForSectionProps {
  language: Language;
}

export const WhoIsItForSection: React.FC<WhoIsItForSectionProps> = ({ language }) => {
  const t = translations[language].whoIsItFor;

  const personas = [
    {
      title: t.studentTitle,
      desc: t.studentDesc,
      icon: GraduationCap,
      color: 'text-cyan-400',
    },
    {
      title: t.proTitle,
      desc: t.proDesc,
      icon: Briefcase,
      color: 'text-[#35E0C1]',
    },
    {
      title: t.freelanceTitle,
      desc: t.freelanceDesc,
      icon: Laptop,
      color: 'text-indigo-400',
    },
    {
      title: t.entrepreneurTitle,
      desc: t.entrepreneurDesc,
      icon: Building2,
      color: 'text-amber-400',
    },
    {
      title: t.familyTitle,
      desc: t.familyDesc,
      icon: Users,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#071827]/70 border-t border-[#153B50]/60 relative">
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

        {/* 5 Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0C2433] border border-[#153B50] hover:border-[#35E0C1]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center ${persona.color} mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#F5FAFA] mb-2">
                    {persona.title}
                  </h3>

                  <p className="text-xs text-[#A8BEC4] leading-relaxed">
                    {persona.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#153B50]/40 text-[11px] font-semibold text-[#35E0C1]">
                  <span>{language === 'bn' ? 'উপযুক্ত সমাধান' : 'Tailored Mode'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
