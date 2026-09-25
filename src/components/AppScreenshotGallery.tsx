import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { APP_SCREENSHOTS } from '../config/screenshots';
import {
  Smartphone,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Target,
  Bot,
  Activity,
  Radar,
  Wallet,
  Settings,
  Image as ImageIcon,
} from 'lucide-react';

interface AppScreenshotGalleryProps {
  language: Language;
}

export const AppScreenshotGallery: React.FC<AppScreenshotGalleryProps> = ({ language }) => {
  const t = translations[language].gallery;
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const screens = APP_SCREENSHOTS;
  const currentScreen = screens[selectedScreenIndex];
  const hasRealImage = !failedImages[currentScreen.id];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 md:py-28 bg-[#071827]/70 border-y border-[#153B50]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <Smartphone className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-3 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Gallery Screen Nav Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              type="button"
              onClick={() => setSelectedScreenIndex(idx)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                selectedScreenIndex === idx
                  ? 'bg-[#35E0C1] text-[#06121F] font-bold shadow-md shadow-[#35E0C1]/20'
                  : 'bg-[#0C2433] text-[#A8BEC4] hover:text-[#F5FAFA] border border-[#153B50]'
              }`}
            >
              {language === 'bn' ? screen.title_bn.split(' ')[0] : screen.tag}
            </button>
          ))}
        </div>

        {/* Showcase Container: Phone Frame + Explanatory Details */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0C2433] border border-[#153B50] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Left: Phone Mockup Frame */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[280px] bg-[#071827] rounded-[36px] p-3 border-4 border-[#153B50] shadow-2xl">
              
              {/* Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#06121F] rounded-full z-20" />

              {/* High-res Screen UI: Real Screenshot with Fallback Mockup */}
              <div className="bg-[#06121F] rounded-[28px] overflow-hidden border border-[#153B50]/60 min-h-[460px] relative flex flex-col justify-between">
                
                {/* Check if user provided real screenshot */}
                {hasRealImage ? (
                  <img
                    src={currentScreen.imagePath}
                    alt={language === 'bn' ? currentScreen.title_bn : currentScreen.title_en}
                    onError={() => handleImageError(currentScreen.id)}
                    className="w-full h-full object-cover object-top min-h-[460px]"
                  />
                ) : (
                  /* Fallback UI when screenshot file is pending */
                  <div className="p-4 pt-7 min-h-[460px] flex flex-col justify-between">
                    {/* Top header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#153B50]/40 mb-3">
                      <span className="text-xs font-bold text-[#F5FAFA]">
                        {language === 'bn' ? currentScreen.title_bn : currentScreen.title_en}
                      </span>
                      <span className="text-[10px] font-mono text-[#35E0C1] bg-[#0C2433] px-1.5 py-0.5 rounded">
                        OS 1.0
                      </span>
                    </div>

                    {/* Body content based on selected screen */}
                    {selectedScreenIndex === 0 && (
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50]">
                          <div className="text-[10px] text-[#A8BEC4]">Total Balance</div>
                          <div className="text-xl font-bold font-mono text-[#F5FAFA]">৳42,850</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="p-2 rounded-lg bg-[#071827] text-emerald-400 font-mono">+৳50,000</div>
                          <div className="p-2 rounded-lg bg-[#071827] text-rose-400 font-mono">-৳21,450</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0C2433] border border-[#153B50] text-[11px]">
                          <div className="flex justify-between font-semibold mb-1">
                            <span>Laptop Goal</span>
                            <span className="text-[#35E0C1]">34%</span>
                          </div>
                          <div className="w-full bg-[#06121F] h-1.5 rounded-full">
                            <div className="bg-[#35E0C1] h-full w-[34%] rounded-full" />
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedScreenIndex === 1 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-[#0C2433] border border-[#153B50] flex justify-between">
                          <span>City Bank</span>
                          <span className="font-mono font-bold">৳30,000</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0C2433] border border-[#153B50] flex justify-between">
                          <span>bKash Wallet</span>
                          <span className="font-mono font-bold">৳7,850</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0C2433] border border-[#153B50] flex justify-between">
                          <span>Cash In Hand</span>
                          <span className="font-mono font-bold">৳5,000</span>
                        </div>
                      </div>
                    )}

                    {selectedScreenIndex === 2 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-[#0C2433] border border-[#153B50]">
                          <div className="font-semibold mb-1">💻 Work Laptop</div>
                          <div className="w-full bg-[#06121F] h-1.5 rounded-full mb-1">
                            <div className="bg-[#35E0C1] h-full w-[34%] rounded-full" />
                          </div>
                          <div className="text-[10px] text-[#A8BEC4]">৳27,500 / ৳80,000</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0C2433] border border-[#153B50]">
                          <div className="font-semibold mb-1">🛡️ Emergency Fund</div>
                          <div className="w-full bg-[#06121F] h-1.5 rounded-full mb-1">
                            <div className="bg-emerald-400 h-full w-[60%] rounded-full" />
                          </div>
                          <div className="text-[10px] text-[#A8BEC4]">৳60,000 / ৳100,000</div>
                        </div>
                      </div>
                    )}

                    {selectedScreenIndex === 3 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2 rounded bg-[#071827] border border-[#153B50] text-[#A8BEC4]">
                          “How much did I spend on Food?”
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0C2433] border border-[#35E0C1]/40 text-[#F5FAFA] text-[11px] leading-relaxed">
                          You spent <span className="text-[#35E0C1] font-bold">৳8,500</span> so far, which is 18% higher than last month's pace.
                        </div>
                      </div>
                    )}

                    {selectedScreenIndex === 4 && (
                      <div className="space-y-2 text-xs text-center">
                        <div className="text-3xl font-bold font-mono text-[#35E0C1] my-2">82 / 100</div>
                        <div className="p-2 rounded bg-[#071827] text-[10px] text-emerald-400">Excellent Standing</div>
                        <div className="text-[10px] text-[#A8BEC4] text-left pt-2">
                          Savings 88 · Budget 79 · Debt 91 · Goals 76
                        </div>
                      </div>
                    )}

                    {selectedScreenIndex === 5 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px]">
                          🔴 Food budget 92% used
                        </div>
                        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px]">
                          🟡 Shopping spend surge +24%
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px]">
                          🟢 Savings reached record high
                        </div>
                      </div>
                    )}

                    {selectedScreenIndex === 6 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2 rounded bg-[#0C2433] border border-[#153B50] flex justify-between">
                          <span>Export CSV/JSON</span>
                          <span className="text-[#35E0C1]">Ready</span>
                        </div>
                        <div className="p-2 rounded bg-[#0C2433] border border-[#153B50] flex justify-between">
                          <span>AI On-Device</span>
                          <span className="text-emerald-400">Enabled</span>
                        </div>
                        <div className="p-2 rounded bg-[#0C2433] border border-[#153B50] flex justify-between">
                          <span>Language</span>
                          <span className="text-[#35E0C1]">বাংলা / EN</span>
                        </div>
                      </div>
                    )}

                    {/* Bottom App Dock */}
                    <div className="pt-2 border-t border-[#153B50]/40 flex justify-around text-[#A8BEC4] text-[9px]">
                      <span>Home</span>
                      <span>Money</span>
                      <span>Goals</span>
                      <span>AI</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Right: Screen Details & Inspection */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#35E0C1] uppercase tracking-wider mb-2">
                <span>0{selectedScreenIndex + 1} OF 07</span>
                <span>·</span>
                <span>{currentScreen.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFA] tracking-tight mb-3">
                {language === 'bn' ? currentScreen.title_bn : currentScreen.title_en}
              </h3>

              <p className="text-sm sm:text-base text-[#A8BEC4] leading-relaxed mb-6">
                {language === 'bn' ? currentScreen.desc_bn : currentScreen.desc_en}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F5FAFA] bg-[#071827] hover:bg-[#153B50] border border-[#153B50] rounded-xl transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#35E0C1]" />
                  <span>{language === 'bn' ? 'পূর্ণ পর্দায় দেখুন' : 'View Fullscreen'}</span>
                </button>

                <div className="text-[11px] text-[#A8BEC4] font-mono bg-[#071827] px-3 py-1.5 rounded-lg border border-[#153B50]">
                  Path: <span className="text-[#35E0C1]">{currentScreen.imagePath}</span>
                </div>
              </div>
            </div>

            {/* Previous / Next Controls */}
            <div className="mt-8 pt-6 border-t border-[#153B50]/60 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setSelectedScreenIndex(
                    selectedScreenIndex === 0 ? screens.length - 1 : selectedScreenIndex - 1
                  )
                }
                className="p-2 rounded-lg bg-[#071827] border border-[#153B50] text-[#A8BEC4] hover:text-[#F5FAFA]"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-[#A8BEC4]">
                {selectedScreenIndex + 1} / {screens.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setSelectedScreenIndex(
                    selectedScreenIndex === screens.length - 1 ? 0 : selectedScreenIndex + 1
                  )
                }
                className="p-2 rounded-lg bg-[#071827] border border-[#153B50] text-[#A8BEC4] hover:text-[#F5FAFA]"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#06121F]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="relative max-w-lg w-full bg-[#071827] border border-[#153B50] rounded-3xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#A8BEC4] hover:text-[#F5FAFA] bg-[#0C2433] rounded-full border border-[#153B50]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-lg font-bold text-[#F5FAFA] mb-1">
              {language === 'bn' ? currentScreen.title_bn : currentScreen.title_en}
            </h4>
            <p className="text-xs text-[#A8BEC4] mb-4">
              {language === 'bn' ? currentScreen.desc_bn : currentScreen.desc_en}
            </p>

            <div className="p-4 bg-[#06121F] rounded-2xl border border-[#153B50] flex flex-col items-center justify-center min-h-[360px] overflow-hidden">
              {hasRealImage ? (
                <img
                  src={currentScreen.imagePath}
                  alt={language === 'bn' ? currentScreen.title_bn : currentScreen.title_en}
                  className="max-h-[60vh] object-contain rounded-xl"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <ImageIcon className="w-12 h-12 text-[#35E0C1] mb-3" />
                  <div className="text-sm font-bold text-[#F5FAFA] mb-1">
                    Personal Finance OS Mobile Preview
                  </div>
                  <div className="text-xs font-mono text-[#35E0C1]">
                    Drop `{currentScreen.imagePath}` to display real screen
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
