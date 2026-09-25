import React, { useState, useEffect } from 'react';
import { AppLogo } from './AppLogo';
import { Language } from '../types';
import { translations } from '../translations';
import { APP_CONFIG } from '../config/appConfig';
import { Menu, X, ArrowDownToLine, Globe } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onDownloadClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onDownloadClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#ai-coach', label: t.nav.aiCoach },
    { href: '#security', label: t.nav.security },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06121F]/90 backdrop-blur-md border-b border-[#153B50]/60 shadow-lg shadow-black/20 py-3'
          : 'bg-[#06121F]/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element Brand mark */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35E0C1] rounded-lg"
            aria-label="Personal Finance OS Homepage"
          >
            <AppLogo size="md" language={language} />
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#A8BEC4]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F5FAFA] transition-colors relative py-1 focus:outline-none focus-visible:text-[#35E0C1]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & Download Action */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher Segmented Control */}
            <div className="flex items-center bg-[#0C2433] border border-[#153B50] rounded-lg p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-2.5 py-1 rounded transition-all ${
                  language === 'bn'
                    ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                    : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                }`}
                aria-label="বাংলা ভাষায় পরিবর্তন করুন"
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded transition-all ${
                  language === 'en'
                    ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                    : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#06121F] bg-[#35E0C1] hover:bg-[#42E6C8] active:scale-98 rounded-lg transition-all shadow-sm shadow-[#35E0C1]/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#35E0C1]"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>{t.nav.downloadApp}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'en' ? 'bn' : 'en')}
              className="p-1.5 text-xs text-[#35E0C1] font-semibold bg-[#0C2433] border border-[#153B50] rounded-md"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#A8BEC4] hover:text-[#F5FAFA] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden pt-4 pb-6 mt-3 border-t border-[#153B50]/60 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#A8BEC4] hover:text-[#35E0C1] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#153B50]/40 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onDownloadClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#06121F] bg-[#35E0C1] rounded-lg"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>{t.nav.downloadApp}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
