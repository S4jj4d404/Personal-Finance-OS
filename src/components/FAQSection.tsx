import React, { useState } from 'react';
import { Language, FAQItem } from '../types';
import { translations, FAQ_DATA } from '../translations';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const t = translations[language].faq;
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            const question = language === 'bn' ? item.question_bn : item.question_en;
            const answer = language === 'bn' ? item.answer_bn : item.answer_en;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-[#0C2433] border-[#35E0C1]/40 shadow-lg shadow-black/20'
                    : 'bg-[#0C2433]/70 border-[#153B50] hover:border-[#153B50]/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35E0C1] rounded-2xl"
                >
                  <span className="text-sm sm:text-base font-bold text-[#F5FAFA]">
                    {question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#35E0C1] text-[#06121F]'
                        : 'bg-[#071827] text-[#A8BEC4] border border-[#153B50]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A8BEC4] leading-relaxed border-t border-[#153B50]/50 animate-in fade-in duration-200">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
