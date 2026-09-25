import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Coins, Globe, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface MultiCurrencyAndBilingualProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const MultiCurrencyAndBilingual: React.FC<MultiCurrencyAndBilingualProps> = ({
  language,
  onLanguageChange,
}) => {
  const tCurr = translations[language].multiCurrency;
  const tLang = translations[language].bilingual;

  const [baseCurrency, setBaseCurrency] = useState<'BDT' | 'USD' | 'EUR'>('BDT');

  return (
    <section className="py-20 md:py-28 bg-[#071827]/70 border-y border-[#153B50]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* SECTION 1: MULTI-CURRENCY (PRD Section 48) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-4">
                <Coins className="w-4 h-4" />
                <span>{tCurr.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFA] tracking-tight mb-3">
                {tCurr.headline}
              </h2>
              <p className="text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {tCurr.description}
              </p>

              {/* Base Currency Selector */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-[#A8BEC4]">Base Currency:</span>
                <div className="flex items-center bg-[#071827] border border-[#153B50] rounded-lg p-0.5 text-xs font-mono">
                  {(['BDT', 'USD', 'EUR'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setBaseCurrency(curr)}
                      className={`px-2.5 py-1 rounded transition-all ${
                        baseCurrency === curr
                          ? 'bg-[#35E0C1] text-[#06121F] font-bold'
                          : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Multi-Currency Balances Card Stack */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#071827] border border-[#153B50]">
                  <div className="text-[10px] font-mono text-[#35E0C1] mb-1">BANGLADESH TAKA</div>
                  <div className="text-base font-bold font-mono text-[#F5FAFA] tabular-nums">
                    {tCurr.bdt}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#071827] border border-[#153B50]">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">US DOLLAR</div>
                  <div className="text-base font-bold font-mono text-[#F5FAFA] tabular-nums">
                    {tCurr.usd}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#071827] border border-[#153B50]">
                  <div className="text-[10px] font-mono text-indigo-400 mb-1">EURO</div>
                  <div className="text-base font-bold font-mono text-[#F5FAFA] tabular-nums">
                    {tCurr.eur}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#071827] border border-[#153B50]">
                  <div className="text-[10px] font-mono text-amber-400 mb-1">UAE DIRHAM</div>
                  <div className="text-base font-bold font-mono text-[#F5FAFA] tabular-nums">
                    {tCurr.aed}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#153B50]/60 text-xs text-[#A8BEC4]">
              {tCurr.features}
            </div>
          </div>

          {/* SECTION 2: BANGLA + ENGLISH BILINGUAL (PRD Section 49) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-4">
                <Globe className="w-4 h-4" />
                <span>{tLang.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFA] tracking-tight mb-3">
                {tLang.headline}
              </h2>
              <p className="text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {tLang.description}
              </p>

              {/* Interactive Language Demo Toggles */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => onLanguageChange('bn')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                    language === 'bn'
                      ? 'bg-[#35E0C1] text-[#06121F] font-bold shadow-md shadow-[#35E0C1]/20'
                      : 'bg-[#071827] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
                  }`}
                >
                  বাংলা মোড দেখুন
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                    language === 'en'
                      ? 'bg-[#35E0C1] text-[#06121F] font-bold shadow-md shadow-[#35E0C1]/20'
                      : 'bg-[#071827] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
                  }`}
                >
                  English Mode
                </button>
              </div>

              {/* Side-by-Side Example Comparison */}
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-[#071827] border border-[#153B50]">
                  <div className="text-[10px] font-semibold text-[#35E0C1] mb-1">
                    বাংলা (BENGALI)
                  </div>
                  <div className="text-sm font-semibold text-[#F5FAFA]">
                    “{tLang.bnExample}”
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#071827] border border-[#153B50]">
                  <div className="text-[10px] font-semibold text-cyan-400 mb-1">
                    ENGLISH
                  </div>
                  <div className="text-sm font-semibold text-[#F5FAFA]">
                    “{tLang.enExample}”
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#153B50]/60 flex items-center gap-2 text-xs text-[#A8BEC4]">
              <CheckCircle2 className="w-4 h-4 text-[#35E0C1]" />
              <span>{language === 'bn' ? 'ব্রাউজার ও লোকালস্টোরেজে পছন্দের ভাষা সংরক্ষিত থাকে' : 'Language choice is remembered across visits'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
