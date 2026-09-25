import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import {
  ShieldCheck,
  Download,
  Database,
  Trash2,
  Lock,
  ArrowRight,
  Smartphone,
  Server,
  FileCheck,
} from 'lucide-react';

interface SecuritySectionProps {
  language: Language;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ language }) => {
  const t = translations[language].security;

  return (
    <section id="security" className="py-20 md:py-28 bg-[#071827]/70 border-t border-[#153B50]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#35E0C1] uppercase mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFA] tracking-tight mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A8BEC4] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Minimal Architecture Flow Diagram (PRD Section 57) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#0C2433] border border-[#153B50] mb-12 shadow-2xl">
          <div className="text-xs font-bold text-[#35E0C1] uppercase tracking-wider mb-6 text-center">
            {language === 'bn' ? 'সিস্টেম আর্কিটেকচার ফ্লো' : 'System Boundary Flow'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center relative text-center">
            
            {/* Node 1: Device */}
            <div className="p-4 rounded-2xl bg-[#071827] border border-[#153B50] flex flex-col items-center">
              <Smartphone className="w-6 h-6 text-[#35E0C1] mb-2" />
              <span className="text-xs font-bold text-[#F5FAFA]">{t.diagramDevice}</span>
              <span className="text-[10px] text-[#A8BEC4] mt-1">{language === 'bn' ? 'লোকাল স্টোরেজ' : 'Local Encryption'}</span>
            </div>

            {/* Node 2: Connection */}
            <div className="p-4 rounded-2xl bg-[#071827] border border-[#153B50] flex flex-col items-center relative">
              <Lock className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-xs font-bold text-[#F5FAFA]">{t.diagramConn}</span>
              <span className="text-[10px] text-[#A8BEC4] mt-1">{language === 'bn' ? 'টিএলএস ট্রান্সপোর্ট' : 'TLS 1.3 Transport'}</span>
            </div>

            {/* Node 3: Auth System */}
            <div className="p-4 rounded-2xl bg-[#071827] border border-[#153B50] flex flex-col items-center relative">
              <Server className="w-6 h-6 text-indigo-400 mb-2" />
              <span className="text-xs font-bold text-[#F5FAFA]">{t.diagramAuth}</span>
              <span className="text-[10px] text-[#A8BEC4] mt-1">{language === 'bn' ? 'আইসোলেটেড এক্সেস' : 'Scoped Access'}</span>
            </div>

            {/* Node 4: Private Data */}
            <div className="p-4 rounded-2xl bg-[#071827] border-2 border-[#35E0C1] flex flex-col items-center relative">
              <FileCheck className="w-6 h-6 text-[#35E0C1] mb-2" />
              <span className="text-xs font-bold text-[#35E0C1]">{t.diagramData}</span>
              <span className="text-[10px] text-[#A8BEC4] mt-1">{language === 'bn' ? 'শুধু আপনার নিয়ন্ত্রণ' : 'Zero Ad Sharing'}</span>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#153B50]/60 text-center text-xs text-[#A8BEC4]">
            {t.factDisclaimer}
          </div>
        </div>

        {/* 4 User Data Control Pillars (PRD Section 58) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center text-[#35E0C1] mb-4">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5FAFA] mb-2">
                {t.exportTitle}
              </h3>
              <p className="text-xs text-[#A8BEC4] leading-relaxed">
                {t.exportDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#153B50]/40 text-[11px] font-mono text-[#35E0C1]">
              CSV / JSON Format
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center text-cyan-400 mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5FAFA] mb-2">
                {t.backupTitle}
              </h3>
              <p className="text-xs text-[#A8BEC4] leading-relaxed">
                {t.backupDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#153B50]/40 text-[11px] font-mono text-cyan-400">
              Offline-First Ready
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center text-rose-400 mb-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5FAFA] mb-2">
                {t.deleteTitle}
              </h3>
              <p className="text-xs text-[#A8BEC4] leading-relaxed">
                {t.deleteDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#153B50]/40 text-[11px] font-mono text-rose-400">
              Total Erasure
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0C2433] border border-[#153B50] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#071827] border border-[#153B50] flex items-center justify-center text-[#35E0C1] mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5FAFA] mb-2">
                {t.aiTitle}
              </h3>
              <p className="text-xs text-[#A8BEC4] leading-relaxed">
                {t.aiDesc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#153B50]/40 text-[11px] font-mono text-[#35E0C1]">
              Zero Ad Profiling
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
