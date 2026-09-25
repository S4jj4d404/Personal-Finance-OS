import React, { useState } from 'react';
import { Language, FeatureItem } from '../types';
import { translations, FEATURE_CATALOG } from '../translations';
import {
  TrendingUp,
  Receipt,
  Wallet,
  ArrowLeftRight,
  Search,
  PieChart,
  PiggyBank,
  Target,
  CalendarCheck,
  ShieldAlert,
  GitFork,
  BarChart3,
  Activity,
  BookOpen,
  Bot,
  Radar,
  Sparkles,
  Sliders,
  Camera,
  Mic,
  Calendar,
  PenTool,
  Briefcase,
  Users,
  Coins,
  Languages,
} from 'lucide-react';

interface FeatureDirectoryProps {
  language: Language;
}

export const FeatureDirectory: React.FC<FeatureDirectoryProps> = ({ language }) => {
  const t = translations[language].directory;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    Receipt,
    Wallet,
    ArrowLeftRight,
    Search,
    PieChart,
    PiggyBank,
    Target,
    CalendarCheck,
    ShieldAlert,
    GitFork,
    BarChart3,
    Activity,
    BookOpen,
    Bot,
    Radar,
    Sparkles,
    Sliders,
    Camera,
    Mic,
    Calendar,
    PenTool,
    Briefcase,
    Users,
    Coins,
    Languages,
  };

  const filteredFeatures = FEATURE_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const title = language === 'bn' ? item.title_bn : item.title_en;
    const desc = language === 'bn' ? item.description_bn : item.description_en;
    const matchesSearch =
      searchQuery === '' ||
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35E0C1]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0C2433] p-1 rounded-xl border border-[#153B50] text-xs font-medium w-full md:w-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                  : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('track')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === 'track'
                  ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                  : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
              }`}
            >
              {t.filterTrack}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('plan')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === 'plan'
                  ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                  : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
              }`}
            >
              {t.filterPlan}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('understand')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === 'understand'
                  ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                  : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
              }`}
            >
              {t.filterUnderstand}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('intelligence')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === 'intelligence'
                  ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                  : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
              }`}
            >
              {t.filterAi}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('smart')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === 'smart'
                  ? 'bg-[#153B50] text-[#35E0C1] font-semibold shadow-xs'
                  : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
              }`}
            >
              {t.filterSmart}
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A8BEC4] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0C2433] border border-[#153B50] rounded-xl pl-9 pr-4 py-2 text-xs text-[#F5FAFA] placeholder-[#A8BEC4]/60 focus:outline-none focus:border-[#35E0C1]"
            />
          </div>

        </div>

        {/* Dynamic Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredFeatures.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#0C2433] hover:bg-[#0D2938] border border-[#153B50] hover:border-[#35E0C1]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center text-[#35E0C1] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    {item.isComingSoon ? (
                      <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {t.comingSoonTag}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#A8BEC4]/70">
                        {item.category.toUpperCase()}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#F5FAFA] mb-1.5 group-hover:text-[#35E0C1] transition-colors">
                    {language === 'bn' ? item.title_bn : item.title_en}
                  </h3>

                  <p className="text-xs text-[#A8BEC4] leading-relaxed">
                    {language === 'bn' ? item.description_bn : item.description_en}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#153B50]/40 flex items-center justify-between text-[11px] text-[#A8BEC4]">
                  <span>{item.isComingSoon ? (language === 'bn' ? 'আসন্ন আপডেট' : 'Next Release') : t.availableTag}</span>
                  <span className="text-[#35E0C1] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
