import React from 'react';
import { Language } from '../types';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalsProps {
  language: Language;
  activeModal: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  language,
  activeModal,
  onClose,
}) => {
  if (!activeModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#06121F]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative max-w-2xl w-full bg-[#0C2433] border border-[#153B50] rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#153B50]/60 mb-4">
          <div className="flex items-center gap-2.5">
            {activeModal === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#35E0C1]" />
            ) : (
              <FileText className="w-5 h-5 text-[#35E0C1]" />
            )}
            <h3 className="text-lg font-bold text-[#F5FAFA]">
              {activeModal === 'privacy'
                ? language === 'bn' ? 'প্রাইভেসি পলিসি (Privacy Policy)' : 'Privacy Policy'
                : language === 'bn' ? 'ব্যবহারের শর্তাবলী (Terms of Service)' : 'Terms of Service'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#A8BEC4] hover:text-[#F5FAFA] bg-[#071827] rounded-full border border-[#153B50]"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-[#A8BEC4] leading-relaxed">
          {activeModal === 'privacy' ? (
            <>
              <p className="text-[#F5FAFA] font-medium">
                {language === 'bn'
                  ? 'সর্বশেষ সংস্করণ: সেপ্টেম্বর ২০২৬। পার্সোনাল ফাইন্যান্স ওএস আপনার ব্যক্তিগত তথ্যের সর্বোচ্চ গোপনীয়তা রক্ষা করতে অঙ্গীকারবদ্ধ।'
                  : 'Last Updated: September 2026. Personal Finance OS is engineered around the principle of strict financial data ownership and privacy.'}
              </p>

              <div>
                <h4 className="text-sm font-bold text-[#F5FAFA] mb-1">
                  {language === 'bn' ? '১. ডেটা মালিকানা' : '1. Data Ownership'}
                </h4>
                <p>
                  {language === 'bn'
                    ? 'আপনার সমস্ত আয়, ব্যয়, একাউন্ট ব্যালেন্স ও লক্ষ্য সম্পর্কিত ডেটা একমাত্র আপনারই নিজস্ব সম্পত্তি। আমরা কোনো অবস্থাতেই আপনার আর্থিক তথ্য কোনো বিজ্ঞাপনদাতা সংস্থা বা ব্রোকারের কাছে বিক্রি করি না।'
                    : 'All income, expense, ledger, and goal figures remain your exclusive property. We never sell, lease, or monetize your individual financial records to third-party ad networks.'}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F5FAFA] mb-1">
                  {language === 'bn' ? '২. এআই ও প্রসেসিং' : '2. On-Device & AI Processing'}
                </h4>
                <p>
                  {language === 'bn'
                    ? 'অ্যাপের এআই ফাইন্যান্সিয়াল কোচ এবং মানি রাডার অ্যালগরিদম শুধুমাত্র আপনাকে অন্তর্দৃষ্টি প্রদান করতে কাজ করে। আপনি সেটিংস থেকে যেকোনো সময় এআই পারমিশন বন্ধ বা সীমিত করতে পারবেন।'
                    : 'AI-generated coaching and radar signal calculations process metrics strictly to furnish your personal analytics. You retain complete authority to disable or limit AI analysis in Settings.'}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F5FAFA] mb-1">
                  {language === 'bn' ? '৩. ডেটা এক্সপোর্ট ও মুছে ফেলা' : '3. Export and Deletion Rights'}
                </h4>
                <p>
                  {language === 'bn'
                    ? 'আপনি যেকোনো সময় আপনার সমস্ত লেনদেনের হিস্ট্রি CSV বা JSON ফরম্যাটে ডাউনলোড করে নিতে পারেন এবং চাইলে এক ক্লিকে সম্পূর্ণ একাউন্ট ও ডেটা স্থায়ীভাবে মুছে ফেলতে পারেন।'
                    : 'You possess the perpetual right to export your complete dataset in standard CSV/JSON format, or execute an irreversible complete deletion of your records at any time.'}
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-[#F5FAFA] font-medium">
                {language === 'bn'
                  ? 'সর্বশেষ সংস্করণ: সেপ্টেম্বর ২০২৬। পার্সোনাল ফাইন্যান্স ওএস ব্যবহারের শর্তাবলী।'
                  : 'Last Updated: September 2026. Terms governing the use of Personal Finance OS application and services.'}
              </p>

              <div>
                <h4 className="text-sm font-bold text-[#F5FAFA] mb-1">
                  {language === 'bn' ? '১. আর্থিক পরামর্শ সংক্রান্ত স্পষ্ট ডিসক্লেইমার' : '1. Non-Advisory Disclaimer'}
                </h4>
                <p className="bg-[#071827] p-3 rounded-xl border border-[#153B50] text-[#F5FAFA]">
                  {language === 'bn'
                    ? 'পার্সোনাল ফাইন্যান্স ওএস ব্যক্তিগত বাজেট ট্র্যাকিং, ক্যাশ ফ্লো বিশ্লেষণ ও লক্ষ্য পরিকল্পনার জন্য তৈরি। অ্যাপে প্রদত্ত এআই পরামর্শ বা হেলথ স্কোর কেবল তথ্যমূলক উদ্দেশ্যে প্রদত্ত এবং এগুলোকে পেশাদার বিনিয়োগ, কর বা আইনগত পরামর্শ হিসেবে বিবেচনা করা যাবে না।'
                    : 'Personal Finance OS provides budgeting, analytics, and scenario modeling software. All automated coaching tips, forecast figures, and financial health scores are strictly informational and do NOT constitute certified financial, tax, or investment advice.'}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F5FAFA] mb-1">
                  {language === 'bn' ? '২. ব্যবহারকারীর দায়িত্ব' : '2. User Responsibility'}
                </h4>
                <p>
                  {language === 'bn'
                    ? 'লেনদেনের সঠিকতা বজায় রাখা এবং নিজের ডিভাইস লক ও সুরক্ষার দায়িত্ব ব্যবহারকারীর।'
                    : 'You are responsible for the accuracy of manually entered financial data and preserving the physical and credential security of your client device.'}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F5FAFA] mb-1">
                  {language === 'bn' ? '৩. সফটওয়্যার আপডেট' : '3. Platform Evolution'}
                </h4>
                <p>
                  {language === 'bn'
                    ? 'আমরা প্রতিনিয়ত বাগ ফিক্স, নিরাপত্তা প্যাচ ও নতুন ফিচার যোগ করি। নিয়মিত নতুন APK ভার্সনে আপডেট থাকার পরামর্শ দেওয়া হচ্ছে।'
                    : 'We continuously improve the platform with stability patches and functional enhancements. Users are encouraged to maintain updated releases.'}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-[#153B50]/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#06121F] bg-[#35E0C1] hover:bg-[#42E6C8] rounded-xl transition-all"
          >
            {language === 'bn' ? 'বুঝেছি / বন্ধ করুন' : 'I Understand & Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
