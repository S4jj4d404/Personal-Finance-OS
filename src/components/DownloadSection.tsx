import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { APP_CONFIG } from '../config/appConfig';
import { AppLogo } from './AppLogo';
import { ArrowDownToLine, QrCode, Shield, CheckCircle2 } from 'lucide-react';

interface DownloadSectionProps {
  language: Language;
  onDownloadClick: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  language,
  onDownloadClick,
}) => {
  const t = translations[language].downloadSection;

  return (
    <section id="download" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Teal Glow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06121F] via-[#08222E] to-[#06121F] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#35E0C1]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#0C2433]/90 border border-[#35E0C1]/40 p-8 sm:p-14 shadow-2xl backdrop-blur-md text-center">
          
          {/* Centered App Logo */}
          <div className="flex justify-center mb-6">
            <AppLogo size="lg" language={language} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>

          <p className="text-lg sm:text-xl text-[#35E0C1] font-medium mb-8 max-w-xl mx-auto text-balance">
            {t.subhead}
          </p>

          {/* Feature Highlights Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-semibold text-[#A8BEC4]">
            {t.pills.map((pill, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1.5 bg-[#071827] px-3 py-1.5 rounded-lg border border-[#153B50]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35E0C1]" />
                {pill}
              </span>
            ))}
          </div>

          {/* Central Dominant Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button
              type="button"
              onClick={onDownloadClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#06121F] bg-[#35E0C1] hover:bg-[#42E6C8] active:scale-98 rounded-2xl shadow-xl shadow-[#35E0C1]/30 hover:shadow-[#35E0C1]/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35E0C1]"
            >
              <ArrowDownToLine className="w-5 h-5 stroke-[2.5]" />
              <span>{t.ctaPrimary}</span>
              <span className="text-xs font-semibold bg-[#06121F]/15 px-2 py-0.5 rounded">
                APK
              </span>
            </button>
          </div>

          <div className="text-xs font-mono text-[#A8BEC4] mb-8">
            {t.versionInfo}
          </div>

          {/* Quick QR Code Card for mobile device scanning */}
          <div className="p-4 rounded-2xl bg-[#071827] border border-[#153B50] max-w-xs mx-auto flex items-center justify-center gap-4">
            {/* SVG Minimal QR Code Simulation */}
            <div className="w-14 h-14 bg-white p-1 rounded-lg flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#06121F" className="w-full h-full">
                <path d="M2 2h7v7H2V2zm2 2v3h3V4H4zm9-2h7v7h-7V2zm2 2v3h3V4h-3zM2 13h7v7H2v-7zm2 2v3h3v-3H4zm11 1h2v2h-2v-2zm-2-3h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 4h4v2h-4v-2zm4 2h2v2h-2v-2zM9 10h2v2H9v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2z" />
              </svg>
            </div>
            <div className="text-left text-xs">
              <span className="text-[11px] text-[#A8BEC4] block">{t.qrPrompt}</span>
              <span className="text-xs font-bold text-[#35E0C1]">{t.qrScanText}</span>
            </div>
          </div>

          <div className="mt-8 text-[11px] text-[#A8BEC4]/70">
            {t.futureStores}
          </div>

        </div>
      </div>
    </section>
  );
};
