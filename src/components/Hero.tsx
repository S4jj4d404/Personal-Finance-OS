import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { APP_CONFIG } from '../config/appConfig';
import {
  ArrowDownToLine,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wallet,
  TrendingUp,
  TrendingDown,
  Target,
  Sparkles,
  PieChart,
  Smartphone,
  CreditCard,
  Building,
  Coins,
} from 'lucide-react';

interface HeroProps {
  language: Language;
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onDownloadClick }) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'dashboard' | 'accounts' | 'goals' | 'ai'>('dashboard');

  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#35E0C1]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-[#10BFA8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Unboxed editorial badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#35E0C1] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35E0C1] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Primary Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5FAFA] tracking-tight leading-[1.12] mb-4 text-balance">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl font-semibold text-[#35E0C1] mb-5 tracking-tight">
              {t.hero.subheadline}
            </p>

            {/* Supporting Prose Description */}
            <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed max-w-2xl mb-8">
              {t.hero.description}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onDownloadClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#06121F] bg-[#35E0C1] hover:bg-[#42E6C8] active:scale-98 rounded-xl shadow-lg shadow-[#35E0C1]/20 hover:shadow-[#35E0C1]/30 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35E0C1]"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>{t.hero.downloadCta}</span>
                <span className="text-[11px] font-normal opacity-80 border-l border-[#06121F]/20 pl-2">Android APK</span>
              </button>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F5FAFA] bg-[#0C2433] hover:bg-[#153B50] border border-[#153B50] rounded-xl transition-all duration-200 hover:border-[#35E0C1]/40"
              >
                <span>{t.hero.exploreFeatures}</span>
                <ArrowRight className="w-4 h-4 text-[#35E0C1]" />
              </a>
            </div>

            {/* Micro-Statements Strip (PRD Section 17) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#A8BEC4] font-medium pt-2 border-t border-[#153B50]/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35E0C1]" />
                {t.hero.micro1}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35E0C1]" />
                {t.hero.micro2}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35E0C1]" />
                {t.hero.micro3}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35E0C1]" />
                {t.hero.micro4}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup with Real Application UI */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Floating Contextual Pill 1: Recent Voice Entry */}
            <div className="hidden sm:flex absolute -left-10 top-16 z-20 items-center gap-3 bg-[#0C2433]/95 border border-[#153B50] backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-xl shadow-black/40 animate-pulse-subtle">
              <div className="w-8 h-8 rounded-lg bg-[#35E0C1]/15 text-[#35E0C1] flex items-center justify-center font-bold text-xs">
                ৳
              </div>
              <div className="text-left">
                <div className="text-[11px] text-[#A8BEC4]">{language === 'bn' ? 'ভয়েস এন্ট্রি' : 'Voice Added'}</div>
                <div className="text-xs font-semibold text-[#F5FAFA]">
                  {language === 'bn' ? 'দুপুরের খাবার ৳২৫০' : 'Lunch ৳250'}
                </div>
              </div>
            </div>

            {/* Floating Contextual Pill 2: Radar Anomaly Notice */}
            <div className="hidden sm:flex absolute -right-6 bottom-24 z-20 items-center gap-3 bg-[#0C2433]/95 border border-[#153B50] backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-xl shadow-black/40">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div className="text-left">
                <div className="text-[11px] text-[#A8BEC4]">{language === 'bn' ? 'মানি রাডার সিগন্যাল' : 'Money Radar'}</div>
                <div className="text-xs font-semibold text-emerald-400">
                  {language === 'bn' ? 'সঞ্চয় +১৮% বৃদ্ধি পেয়েছে' : 'Savings +18% up'}
                </div>
              </div>
            </div>

            {/* The Phone Device Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-[#071827] rounded-[42px] p-3.5 border-4 border-[#153B50] shadow-2xl shadow-black/70 ring-1 ring-[#35E0C1]/20">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#06121F] rounded-full z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#153B50]/60 mr-2" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#0C2433]" />
              </div>

              {/* Phone Screen Screen Surface */}
              <div className="relative bg-[#06121F] rounded-[32px] overflow-hidden pt-8 pb-4 px-4 border border-[#153B50]/50 text-left flex flex-col min-h-[580px]">
                
                {/* Phone App Header */}
                <div className="flex items-center justify-between mb-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0C2433] border border-[#35E0C1]/40 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#35E0C1]">PF</span>
                    </div>
                    <span className="text-xs font-semibold text-[#F5FAFA]">Personal Finance OS</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#35E0C1] bg-[#0C2433] px-2 py-0.5 rounded border border-[#153B50]">
                    v1.0
                  </div>
                </div>

                {/* Interactive In-Phone Screen Switcher */}
                <div className="flex items-center justify-between bg-[#071827] p-1 rounded-xl mb-4 text-[11px] font-medium border border-[#153B50]/60">
                  <button
                    type="button"
                    onClick={() => setActiveTab('dashboard')}
                    className={`flex-1 py-1 text-center rounded-lg transition-all ${
                      activeTab === 'dashboard'
                        ? 'bg-[#0C2433] text-[#35E0C1] font-semibold shadow-xs'
                        : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                    }`}
                  >
                    {language === 'bn' ? 'ড্যাশবোর্ড' : 'Home'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('accounts')}
                    className={`flex-1 py-1 text-center rounded-lg transition-all ${
                      activeTab === 'accounts'
                        ? 'bg-[#0C2433] text-[#35E0C1] font-semibold shadow-xs'
                        : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                    }`}
                  >
                    {language === 'bn' ? 'অ্যাকাউন্ট' : 'Accounts'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('goals')}
                    className={`flex-1 py-1 text-center rounded-lg transition-all ${
                      activeTab === 'goals'
                        ? 'bg-[#0C2433] text-[#35E0C1] font-semibold shadow-xs'
                        : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                    }`}
                  >
                    {language === 'bn' ? 'লক্ষ্য' : 'Goals'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ai')}
                    className={`flex-1 py-1 text-center rounded-lg transition-all ${
                      activeTab === 'ai'
                        ? 'bg-[#0C2433] text-[#35E0C1] font-semibold shadow-xs'
                        : 'text-[#A8BEC4] hover:text-[#F5FAFA]'
                    }`}
                  >
                    {language === 'bn' ? 'এআই' : 'AI'}
                  </button>
                </div>

                {/* Dynamic Screen Body */}
                {activeTab === 'dashboard' && (
                  <div className="space-y-3.5 flex-1 animate-in fade-in duration-200">
                    {/* Total Balance Card */}
                    <div className="bg-gradient-to-br from-[#0C2433] to-[#081B2A] p-4 rounded-2xl border border-[#153B50]">
                      <div className="flex items-center justify-between text-[#A8BEC4] text-xs mb-1">
                        <span>{t.hero.totalBalance}</span>
                        <span className="text-[11px] text-[#35E0C1] font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#35E0C1]" />
                          BDT (৳)
                        </span>
                      </div>
                      <div className="text-2xl font-bold font-mono text-[#F5FAFA] tracking-tight tabular-nums mb-3">
                        {t.hero.balanceAmount}
                      </div>

                      {/* Cash Flow 2-Pill Grid */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#153B50]/60">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                            <TrendingUp className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="text-[10px] text-[#A8BEC4]">{t.hero.income}</div>
                            <div className="text-xs font-semibold font-mono text-emerald-400 tabular-nums">
                              {t.hero.incomeAmount}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-rose-500/10 text-rose-400 flex items-center justify-center">
                            <TrendingDown className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="text-[10px] text-[#A8BEC4]">{t.hero.expenses}</div>
                            <div className="text-xs font-semibold font-mono text-rose-400 tabular-nums">
                              {t.hero.expensesAmount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Financial Health Mini Bar */}
                    <div className="bg-[#0C2433] p-3 rounded-xl border border-[#153B50] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#35E0C1]/10 text-[#35E0C1] flex items-center justify-center font-bold text-xs">
                          82
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-[#F5FAFA]">{t.hero.healthScore}</div>
                          <div className="text-[10px] text-emerald-400 font-medium">
                            {language === 'bn' ? 'চমৎকার আর্থিক শৃঙ্খলা' : 'Optimal Standing'}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-[#35E0C1]">82/100</div>
                        <div className="text-[10px] text-[#A8BEC4]">
                          {language === 'bn' ? 'সঞ্চয় হার ৩৭%' : 'Savings Rate 37%'}
                        </div>
                      </div>
                    </div>

                    {/* Goal Progress Banner */}
                    <div className="bg-[#0C2433] p-3 rounded-xl border border-[#153B50]">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-[#F5FAFA] flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-[#35E0C1]" />
                          {t.hero.laptopGoal}
                        </span>
                        <span className="font-mono text-[11px] text-[#35E0C1] font-bold">
                          {t.hero.laptopPercent}
                        </span>
                      </div>
                      <div className="w-full bg-[#06121F] h-1.5 rounded-full overflow-hidden mb-1">
                        <div className="bg-gradient-to-r from-[#10BFA8] to-[#35E0C1] h-full rounded-full w-[34%]" />
                      </div>
                      <div className="flex justify-between text-[10px] text-[#A8BEC4] font-mono">
                        <span>{t.hero.laptopProgress}</span>
                        <span>{language === 'bn' ? 'বাকি ৪ মাস' : '4 mos left'}</span>
                      </div>
                    </div>

                    {/* Recent Transactions List */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-semibold text-[#A8BEC4] px-1">
                        {t.hero.recentTransactions}
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#071827] border border-[#153B50]/40 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px]">
                            💼
                          </div>
                          <div>
                            <div className="font-medium text-[#F5FAFA] text-[11px]">{t.hero.tx1Title}</div>
                            <div className="text-[9px] text-[#A8BEC4]">Today, 10:30 AM · Bank</div>
                          </div>
                        </div>
                        <div className="font-mono font-semibold text-emerald-400 text-[11px] tabular-nums">
                          {t.hero.tx1Amount}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#071827] border border-[#153B50]/40 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-rose-500/10 text-rose-400 flex items-center justify-center text-[10px]">
                            🛒
                          </div>
                          <div>
                            <div className="font-medium text-[#F5FAFA] text-[11px]">{t.hero.tx2Title}</div>
                            <div className="text-[9px] text-[#A8BEC4]">Yesterday · bKash</div>
                          </div>
                        </div>
                        <div className="font-mono font-semibold text-rose-400 text-[11px] tabular-nums">
                          {t.hero.tx2Amount}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'accounts' && (
                  <div className="space-y-2.5 flex-1 animate-in fade-in duration-200">
                    <div className="text-xs text-[#A8BEC4] mb-1">
                      {language === 'bn' ? 'সংযুক্ত অ্যাকাউন্ট ও ব্যালেন্স' : 'Connected Ledgers & Balances'}
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <Building className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#F5FAFA]">Bank Account (City Bank)</div>
                          <div className="text-[10px] text-[#A8BEC4]">Salary & Savings Ledger</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-xs text-[#F5FAFA] tabular-nums">
                        ৳30,000
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#F5FAFA]">bKash & Nagad</div>
                          <div className="text-[10px] text-[#A8BEC4]">Daily Utilities & Food</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-xs text-[#F5FAFA] tabular-nums">
                        ৳7,850
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Coins className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#F5FAFA]">Physical Cash In Hand</div>
                          <div className="text-[10px] text-[#A8BEC4]">Pocket Wallet</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-xs text-[#F5FAFA] tabular-nums">
                        ৳5,000
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#F5FAFA]">Credit Card (Available)</div>
                          <div className="text-[10px] text-[#A8BEC4]">0% Interest Cycle</div>
                        </div>
                      </div>
                      <div className="font-mono font-bold text-xs text-[#35E0C1] tabular-nums">
                        ৳45,000
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'goals' && (
                  <div className="space-y-3 flex-1 animate-in fade-in duration-200">
                    <div className="text-xs text-[#A8BEC4] mb-1">
                      {language === 'bn' ? 'সক্রিয় আর্থিক লক্ষ্যসমূহ' : 'Active Financial Goals'}
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50]">
                      <div className="flex justify-between items-center text-xs font-semibold text-[#F5FAFA] mb-1">
                        <span>💻 Work Laptop</span>
                        <span className="font-mono text-[#35E0C1]">34%</span>
                      </div>
                      <div className="w-full bg-[#06121F] h-2 rounded-full overflow-hidden mb-1.5">
                        <div className="bg-[#35E0C1] h-full w-[34%]" />
                      </div>
                      <div className="flex justify-between text-[10px] text-[#A8BEC4]">
                        <span>৳27,500 / ৳80,000</span>
                        <span>Save ৳8,750 / mo</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50]">
                      <div className="flex justify-between items-center text-xs font-semibold text-[#F5FAFA] mb-1">
                        <span>🛡️ Emergency Fund</span>
                        <span className="font-mono text-emerald-400">60%</span>
                      </div>
                      <div className="w-full bg-[#06121F] h-2 rounded-full overflow-hidden mb-1.5">
                        <div className="bg-emerald-400 h-full w-[60%]" />
                      </div>
                      <div className="flex justify-between text-[10px] text-[#A8BEC4]">
                        <span>৳60,000 / ৳100,000</span>
                        <span>On track (2 mos left)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C2433] border border-[#153B50]">
                      <div className="flex justify-between items-center text-xs font-semibold text-[#F5FAFA] mb-1">
                        <span>✈️ Annual Vacation</span>
                        <span className="font-mono text-cyan-400">18%</span>
                      </div>
                      <div className="w-full bg-[#06121F] h-2 rounded-full overflow-hidden mb-1.5">
                        <div className="bg-cyan-400 h-full w-[18%]" />
                      </div>
                      <div className="flex justify-between text-[10px] text-[#A8BEC4]">
                        <span>৳9,000 / ৳50,000</span>
                        <span>Save ৳4,100 / mo</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-3 flex-1 animate-in fade-in duration-200">
                    <div className="text-xs text-[#A8BEC4] mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#35E0C1]" />
                      <span>{language === 'bn' ? 'এআই কোচ ডায়লগ' : 'AI Coach Session'}</span>
                    </div>

                    <div className="bg-[#071827] p-2.5 rounded-xl border border-[#153B50]/60 text-xs text-[#F5FAFA] ml-4">
                      {language === 'bn' ? '“আমি কি এই মাসে ল্যাপটপের লক্ষ্য পূরণ করতে পারব?”' : '“Am I on track for my laptop target?”'}
                    </div>

                    <div className="bg-[#0C2433] p-3 rounded-xl border border-[#35E0C1]/30 text-xs text-[#A8BEC4] leading-relaxed mr-2">
                      <div className="text-[10px] font-bold text-[#35E0C1] mb-1">AI FINANCIAL COACH</div>
                      {language === 'bn' ? (
                        <>
                          হ্যাঁ! আপনার বর্তমান মাসিক সঞ্চয় উদ্বৃত্ত <span className="text-[#F5FAFA] font-semibold">৳১৩,৫৫০</span>। প্রতি মাসে <span className="text-[#35E0C1] font-semibold">৳৮,৭৫০</span> জমালে নির্ধারিত ৬ মাসের মধ্যেই ৳৮০,০০০ এর লক্ষ্য সফলভাবে পূরণ হবে।
                        </>
                      ) : (
                        <>
                          Yes! Your current monthly surplus is <span className="text-[#F5FAFA] font-semibold">৳13,550</span>. By allocating <span className="text-[#35E0C1] font-semibold">৳8,750/mo</span>, you will reach your ৳80,000 target precisely on schedule in 6 months.
                        </>
                      )}
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#071827] border border-[#153B50] flex items-center justify-between text-[11px]">
                      <span className="text-[#A8BEC4]">{language === 'bn' ? 'প্রস্তাবিত কাটছাঁট' : 'Suggested Action'}</span>
                      <span className="text-emerald-400 font-semibold font-mono">{language === 'bn' ? 'বাইরে খাওয়া -১৫%' : 'Dining Out -15%'}</span>
                    </div>
                  </div>
                )}

                {/* Bottom App Nav Mockup */}
                <div className="pt-3 border-t border-[#153B50]/50 flex items-center justify-around text-[#A8BEC4]">
                  <div className="flex flex-col items-center gap-0.5 text-[#35E0C1]">
                    <Wallet className="w-4 h-4" />
                    <span className="text-[9px] font-medium">{language === 'bn' ? 'হোম' : 'Home'}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-[#F5FAFA]">
                    <PieChart className="w-4 h-4" />
                    <span className="text-[9px] font-medium">{language === 'bn' ? 'বাজেট' : 'Budget'}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-[#F5FAFA]">
                    <Target className="w-4 h-4" />
                    <span className="text-[9px] font-medium">{language === 'bn' ? 'লক্ষ্য' : 'Goals'}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-[#F5FAFA]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[9px] font-medium">{language === 'bn' ? 'এআই' : 'AI'}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
