import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Camera, Mic, ArrowRight, Check, Sparkles, Receipt, FileText } from 'lucide-react';

interface SmartToolsSectionProps {
  language: Language;
}

export const SmartToolsSection: React.FC<SmartToolsSectionProps> = ({ language }) => {
  const t = translations[language].smartTools;
  const [activeTab, setActiveTab] = useState<'receipt' | 'voice'>('receipt');

  return (
    <section className="py-20 md:py-28 bg-[#071827]/70 border-t border-[#153B50]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {language === 'bn' ? 'স্মার্ট এন্ট্রি টুলস' : 'Frictionless Smart Capture'}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {language === 'bn'
              ? 'টাইপ করার ঝামেলা ছাড়াই রসিদের ছবি কিংবা মুখে বলে চোখের পলকে লেনদেন যুক্ত করুন।'
              : 'Turn paper receipts and spoken voice notes into clean, categorized financial records in seconds.'}
          </p>
        </div>

        {/* 2-Column Split: Receipt Scanner & Voice/Natural Language */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Receipt Scanner (PRD Section 46) */}
          <div className="p-8 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#071827] border border-[#35E0C1]/40 flex items-center justify-center text-[#35E0C1] mb-6">
                <Camera className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#F5FAFA] mb-3">
                {t.receiptHeadline}
              </h3>
              <p className="text-sm text-[#A8BEC4] leading-relaxed mb-8">
                {t.receiptDesc}
              </p>

              {/* 4-Step Interactive Visual Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                <div className="p-3 rounded-xl bg-[#071827] border border-[#153B50] text-center">
                  <div className="text-xs font-mono font-bold text-[#35E0C1] mb-1">01</div>
                  <div className="text-[11px] font-semibold text-[#F5FAFA]">{t.step1}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#071827] border border-[#153B50] text-center">
                  <div className="text-xs font-mono font-bold text-[#35E0C1] mb-1">02</div>
                  <div className="text-[11px] font-semibold text-[#F5FAFA]">{t.step2}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#071827] border border-[#153B50] text-center">
                  <div className="text-xs font-mono font-bold text-[#35E0C1] mb-1">03</div>
                  <div className="text-[11px] font-semibold text-[#F5FAFA]">{t.step3}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#071827] border border-emerald-500/40 text-center">
                  <div className="text-xs font-mono font-bold text-emerald-400 mb-1">04</div>
                  <div className="text-[11px] font-semibold text-emerald-400">{t.step4}</div>
                </div>
              </div>
            </div>

            {/* Receipt Preview Mockup Box */}
            <div className="p-4 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <Receipt className="w-6 h-6 text-[#35E0C1]" />
                <div>
                  <div className="font-semibold text-[#F5FAFA]">Supermarket Cash Memo</div>
                  <div className="text-[10px] text-[#A8BEC4]">4 items detected · Category: Grocery</div>
                </div>
              </div>
              <div className="font-mono font-bold text-rose-400 text-sm">
                -৳2,450
              </div>
            </div>
          </div>

          {/* Card 2: Natural Language & Voice Entry (PRD Section 47) */}
          <div className="p-8 rounded-3xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#071827] border border-[#35E0C1]/40 flex items-center justify-center text-[#35E0C1] mb-6">
                <Mic className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#F5FAFA] mb-3">
                {t.nlHeadline}
              </h3>
              <p className="text-sm text-[#A8BEC4] leading-relaxed mb-6">
                {t.nlDesc}
              </p>

              {/* Bangla Voice Sample Demonstration */}
              <div className="p-4 rounded-2xl bg-[#071827] border border-[#153B50] mb-4">
                <div className="flex items-center justify-between text-xs text-[#A8BEC4] mb-2">
                  <span className="font-semibold text-[#35E0C1]">Bangla Input</span>
                  <span className="text-[10px] font-mono">Audio / Text</span>
                </div>
                <div className="text-sm font-semibold text-[#F5FAFA] mb-3 italic">
                  {t.nlBnInput}
                </div>
                <div className="pt-2 border-t border-[#153B50]/60 flex flex-wrap items-center gap-3 text-xs text-[#A8BEC4]">
                  <span className="bg-[#0C2433] px-2.5 py-1 rounded text-emerald-400 font-medium">
                    {t.nlBnOutputCat}
                  </span>
                  <span className="bg-[#0C2433] px-2.5 py-1 rounded text-[#F5FAFA] font-mono font-bold">
                    {t.nlBnOutputAmt}
                  </span>
                  <span className="text-[11px]">
                    {t.nlBnOutputDate}
                  </span>
                </div>
              </div>

              {/* English Voice Sample Demonstration */}
              <div className="p-4 rounded-2xl bg-[#071827] border border-[#153B50]">
                <div className="flex items-center justify-between text-xs text-[#A8BEC4] mb-2">
                  <span className="font-semibold text-cyan-400">English Input</span>
                  <span className="text-[10px] font-mono">Speech-to-Text</span>
                </div>
                <div className="text-sm font-semibold text-[#F5FAFA] mb-3 italic">
                  {t.nlEnInput}
                </div>
                <div className="pt-2 border-t border-[#153B50]/60 flex flex-wrap items-center gap-3 text-xs text-[#A8BEC4]">
                  <span className="bg-[#0C2433] px-2.5 py-1 rounded text-cyan-400 font-medium">
                    {t.nlEnOutputCat}
                  </span>
                  <span className="bg-[#0C2433] px-2.5 py-1 rounded text-[#F5FAFA] font-mono font-bold">
                    {t.nlEnOutputAmt}
                  </span>
                </div>
              </div>

            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#A8BEC4]">
              <Check className="w-4 h-4 text-[#35E0C1]" />
              <span>{language === 'bn' ? 'অফলাইনে অন-ডিভাইস পার্সিং সমর্থিত' : 'Fast on-device parsing works offline'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
