import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import { APP_CONFIG } from './config/appConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { NotJustATracker } from './components/NotJustATracker';
import { MoneyFlowSection } from './components/MoneyFlowSection';
import { AICoachSection } from './components/AICoachSection';
import { MoneyRadarSection } from './components/MoneyRadarSection';
import { ForecastSection } from './components/ForecastSection';
import { WhatIfSimulator } from './components/WhatIfSimulator';
import { SmartToolsSection } from './components/SmartToolsSection';
import { FinancialHealthAndNetWorth } from './components/FinancialHealthAndNetWorth';
import { MultiCurrencyAndBilingual } from './components/MultiCurrencyAndBilingual';
import { CalendarStorySection } from './components/CalendarStorySection';
import { FeatureDirectory } from './components/FeatureDirectory';
import { AppScreenshotGallery } from './components/AppScreenshotGallery';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhoIsItForSection } from './components/WhoIsItForSection';
import { ComparisonSection } from './components/ComparisonSection';
import { SecuritySection } from './components/SecuritySection';
import { FAQSection } from './components/FAQSection';
import { DownloadSection } from './components/DownloadSection';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { CheckCircle2, ArrowDownToLine, X } from 'lucide-react';

export default function App() {
  // Language initialization with persistence in localStorage (PRD Section 13)
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('pfos_language');
      if (savedLang === 'bn' || savedLang === 'en') {
        return savedLang;
      }
      // Browser language check
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('bn')) {
        return 'bn';
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync language selection to localStorage
  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('pfos_language', newLang);
    } catch {
      // Ignore
    }
  };

  // Central Download Action (PRD Section 19, 20 & 80)
  const handleDownloadClick = () => {
    const t = translations[language];
    setToastMessage(t.toast.downloadStarted);

    // Direct APK download trigger
    try {
      const link = document.createElement('a');
      link.href = APP_CONFIG.APP_DOWNLOAD_URL;
      link.download = 'personal-finance-os.apk';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Download error:', e);
    }

    // Auto dismiss toast after 4s
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#06121F] text-[#F5FAFA] flex flex-col font-sans selection:bg-[#35E0C1]/20 selection:text-[#35E0C1]">
      {/* 01. Sticky Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onDownloadClick={handleDownloadClick}
      />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <Hero
          language={language}
          onDownloadClick={handleDownloadClick}
        />

        {/* 03. Trust Strip */}
        <TrustStrip language={language} />

        {/* 04 & 05. Problem & Solution */}
        <ProblemSolution language={language} />

        {/* 06. "More Than an Expense Tracker" Paradigm */}
        <NotJustATracker language={language} />

        {/* 07. Sankey Money Flow Section */}
        <MoneyFlowSection language={language} />

        {/* 08. AI Financial Coach */}
        <AICoachSection language={language} />

        {/* 09. Money Radar Signals */}
        <MoneyRadarSection language={language} />

        {/* 10. Liquidity Forecast */}
        <ForecastSection language={language} />

        {/* 11. What-If Simulator */}
        <WhatIfSimulator language={language} />

        {/* 12. Smart Tools (Receipt Scanner + Natural Voice) */}
        <SmartToolsSection language={language} />

        {/* 13. Financial Health & Net Worth Visualizer */}
        <FinancialHealthAndNetWorth language={language} />

        {/* 14. Multi-Currency & Bilingual Experience */}
        <MultiCurrencyAndBilingual
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        {/* 15. Financial Calendar & Monthly Story */}
        <CalendarStorySection language={language} />

        {/* 16. App Screenshot Gallery with Lightbox */}
        <AppScreenshotGallery language={language} />

        {/* 17. Complete Feature Directory with Search & Categories */}
        <FeatureDirectory language={language} />

        {/* 18. How It Works */}
        <HowItWorksSection language={language} />

        {/* 19. Who It's For */}
        <WhoIsItForSection language={language} />

        {/* 20. Comparison Table */}
        <ComparisonSection language={language} />

        {/* 21. Privacy & Security Architecture */}
        <SecuritySection language={language} />

        {/* 22. Frequently Asked Questions */}
        <FAQSection language={language} />

        {/* 23. Dominant Download Section */}
        <DownloadSection
          language={language}
          onDownloadClick={handleDownloadClick}
        />
      </main>

      {/* 24. Footer */}
      <Footer
        language={language}
        onLanguageChange={handleLanguageChange}
        onDownloadClick={handleDownloadClick}
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
      />

      {/* 25. Mobile Sticky CTA (<15% viewport height cap) */}
      <MobileStickyCTA
        language={language}
        onDownloadClick={handleDownloadClick}
      />

      {/* 26. Legal Modals (Privacy Policy & Terms) */}
      <LegalModals
        language={language}
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* 27. Download Active Feedback Toast */}
      {toastMessage && (
        <aside
          aria-label="Download Status"
          className="fixed bottom-6 right-6 z-50 bg-[#0C2433] border border-[#35E0C1] rounded-2xl p-4 shadow-2xl flex items-center gap-3 text-xs sm:text-sm text-[#F5FAFA] animate-in slide-in-from-bottom-5 duration-200"
        >
          <div className="w-8 h-8 rounded-lg bg-[#35E0C1]/20 text-[#35E0C1] flex items-center justify-center flex-shrink-0">
            <ArrowDownToLine className="w-4 h-4 animate-bounce" />
          </div>
          <span className="font-semibold">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="p-1 text-[#A8BEC4] hover:text-[#F5FAFA]"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}
    </div>
  );
}
