import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Check, X, Scale } from 'lucide-react';

interface ComparisonSectionProps {
  language: Language;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ language }) => {
  const t = translations[language].comparison;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <Scale className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Clean Comparison Matrix Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl bg-[#0C2433] border border-[#153B50] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#153B50] bg-[#071827]">
                  <th className="py-4 px-6 font-bold text-[#F5FAFA] w-1/2">
                    {t.feature}
                  </th>
                  <th className="py-4 px-6 font-semibold text-[#A8BEC4] text-center w-1/4">
                    {t.traditional}
                  </th>
                  <th className="py-4 px-6 font-bold text-[#35E0C1] text-center w-1/4 bg-[#10BFA8]/10">
                    {t.pfos}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#153B50]/60">
                {t.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#071827]/40 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-medium text-[#F5FAFA]">
                      {row.name}
                    </td>

                    {/* Traditional Tracker Column */}
                    <td className="py-3.5 px-6 text-center">
                      {row.trad ? (
                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-slate-300">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 text-rose-400">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </td>

                    {/* Personal Finance OS Column */}
                    <td className="py-3.5 px-6 text-center bg-[#10BFA8]/5">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#35E0C1]/20 text-[#35E0C1]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
