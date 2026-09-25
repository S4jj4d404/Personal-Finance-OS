import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { AppLogo } from './AppLogo';
import { ArrowDownToLine, Shield, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onDownloadClick: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onLanguageChange,
  onDownloadClick,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const t = translations[language].footer;

  return (
    <footer className="bg-[#050E17] border-t border-[#153B50]/60 pt-16 pb-20 sm:pb-12 text-[#A8BEC4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#153B50]/50">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="mb-4 focus:outline-none">
              <AppLogo size="md" language={language} />
            </a>
            <p className="text-xs sm:text-sm text-[#A8BEC4] leading-relaxed max-w-sm mb-6">
              {t.brandDesc}
            </p>

            {/* Direct Download Android Button */}
            <button
              type="button"
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#06121F] bg-[#35E0C1] hover:bg-[#42E6C8] rounded-xl transition-all shadow-sm"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>{language === 'bn' ? 'Android অ্যাপ ডাউনলোড করুন' : 'Download Android App'}</span>
            </button>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-[#F5FAFA] uppercase tracking-wider mb-4">
              {t.colProduct}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" className="hover:text-[#35E0C1] transition-colors">
                  {t.features}
                </a>
              </li>
              <li>
                <a href="#ai-coach" className="hover:text-[#35E0C1] transition-colors">
                  {t.aiCoach}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#35E0C1] transition-colors">
                  {t.howItWorks}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#35E0C1] transition-colors">
                  {t.download}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-[#F5FAFA] uppercase tracking-wider mb-4">
              {t.colResources}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#faq" className="hover:text-[#35E0C1] transition-colors">
                  {t.faq}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#35E0C1] transition-colors">
                  {t.help}
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#35E0C1] transition-colors">
                  {language === 'bn' ? 'নিরাপত্তা ব্যবস্থা' : 'Security Model'}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-[#F5FAFA] uppercase tracking-wider mb-4">
              {t.colLegal}
            </h4>
            <ul className="space-y-2.5 text-xs mb-6">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#35E0C1] transition-colors text-left"
                >
                  {t.privacy}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-[#35E0C1] transition-colors text-left"
                >
                  {t.terms}
                </button>
              </li>
            </ul>

            {/* Language Switcher in Footer */}
            <div className="flex items-center gap-2 text-xs">
              <Globe className="w-3.5 h-3.5 text-[#35E0C1]" />
              <span className="text-[#A8BEC4]">{t.langSwitch}</span>
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`hover:text-[#35E0C1] font-semibold transition-colors ${
                  language === 'bn' ? 'text-[#35E0C1] underline' : 'text-[#A8BEC4]'
                }`}
              >
                বাংলা
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`hover:text-[#35E0C1] font-semibold transition-colors ${
                  language === 'en' ? 'text-[#35E0C1] underline' : 'text-[#A8BEC4]'
                }`}
              >
                English
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#718991]">
          <p className="max-w-2xl text-[11px] leading-relaxed">
            {t.disclaimer}
          </p>
          <p className="whitespace-nowrap text-[11px] font-mono">
            {t.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};
