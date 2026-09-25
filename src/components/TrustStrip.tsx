import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import {
  Layers,
  Sparkles,
  Coins,
  Languages,
  ShieldCheck,
} from 'lucide-react';

interface TrustStripProps {
  language: Language;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ language }) => {
  const t = translations[language].trust;

  const trustItems = [
    { icon: Layers, label: t.trackEverything },
    { icon: Sparkles, label: t.aiPowered },
    { icon: Coins, label: t.multiCurrency },
    { icon: Languages, label: t.bilingual },
    { icon: ShieldCheck, label: t.privacyFocused },
  ];

  return (
    <section className="relative py-8 border-y border-[#153B50]/60 bg-[#071827]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm font-semibold text-[#A8BEC4] hover:text-[#F5FAFA] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0C2433] border border-[#153B50] flex items-center justify-center text-[#35E0C1] flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
