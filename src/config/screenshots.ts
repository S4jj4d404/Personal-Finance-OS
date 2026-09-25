/**
 * Screenshot Configuration for Personal Finance OS
 * 
 * To add your real mobile app screenshots:
 * 1. Take screenshots from your mobile app or emulator.
 * 2. Save/copy them into the `public/screenshots/` folder with these names:
 *    - dashboard.png
 *    - accounts.png
 *    - goals.png
 *    - ai_coach.png
 *    - health.png
 *    - radar.png
 *    - settings.png
 * 
 * If a screenshot image is not yet present, the website automatically falls
 * back to the interactive high-fidelity preview with zero broken image errors!
 */

export interface AppScreenshotConfig {
  id: string;
  imagePath: string;
  title_en: string;
  title_bn: string;
  desc_en: string;
  desc_bn: string;
  tag: string;
}

export const APP_SCREENSHOTS: AppScreenshotConfig[] = [
  {
    id: 'dashboard',
    imagePath: '/screenshots/dashboard.png',
    title_en: 'Command Center Dashboard',
    title_bn: 'কমান্ড সেন্টার ড্যাশবোর্ড',
    desc_en: 'Consolidated balance across accounts, 30-day cash flow overview, and active goal indicators.',
    desc_bn: 'সব অ্যাকাউন্টের সম্মিলিত ব্যালেন্স, মাসিক ক্যাশ ফ্লো এবং সক্রিয় লক্ষ্যের অগ্রগতি।',
    tag: 'DASHBOARD',
  },
  {
    id: 'accounts',
    imagePath: '/screenshots/accounts.png',
    title_en: 'Multi-Account & Wallets',
    title_bn: 'মাল্টি-অ্যাকাউন্ট ও ওয়ালেট',
    desc_en: 'Segregated views for Cash, Bank Accounts, Cards, and Mobile Wallets with zero double-counting.',
    desc_bn: 'ক্যাশ, ব্যাংক এবং মোবাইল ওয়ালেটের জন্য স্বতন্ত্র লেজার ও নিখুঁত ট্রান্সফার ট্র্যাকিং।',
    tag: 'ACCOUNTS',
  },
  {
    id: 'goals',
    imagePath: '/screenshots/goals.png',
    title_en: 'Destination Goals',
    title_bn: 'নির্দিষ্ট সঞ্চয় লক্ষ্য',
    desc_en: 'Target amounts, automatic monthly required savings calculation, and projected target dates.',
    desc_bn: 'লক্ষ্য নির্ধারণ, প্রতি মাসে কত জমাতে হবে তার হিসাব এবং সম্ভাব্য সম্পন্ন হওয়ার তারিখ।',
    tag: 'GOALS',
  },
  {
    id: 'ai-coach',
    imagePath: '/screenshots/ai_coach.png',
    title_en: 'Conversational AI Coach',
    title_bn: 'এআই ফাইন্যান্সিয়াল কোচ',
    desc_en: 'Plain language inquiries about where your money went, with actionable optimization suggestions.',
    desc_bn: 'টাকা কোথায় গেল তা নিয়ে প্রশ্ন করুন এবং সঞ্চয় বৃদ্ধির সুনির্দিষ্ট পরামর্শ পান।',
    tag: 'AI COACH',
  },
  {
    id: 'health',
    imagePath: '/screenshots/health.png',
    title_en: 'Financial Health Benchmark',
    title_bn: 'আর্থিক স্বাস্থ্য স্কোর',
    desc_en: '0–100 weighted index tracking savings rate, budget discipline, debt load, and goal consistency.',
    desc_bn: 'সঞ্চয়, বাজেট শৃঙ্খলা এবং ঋণের অনুপাতের ওপর ভিত্তি করে তৈরি সার্বিক ০–১০০ মূল্যায়ন।',
    tag: 'HEALTH',
  },
  {
    id: 'radar',
    imagePath: '/screenshots/radar.png',
    title_en: 'Money Radar Monitor',
    title_bn: 'মানি রাডার মনিটর',
    desc_en: 'Automated anomaly detection, renewal warnings, and unexpected spending surge alerts.',
    desc_bn: 'অস্বাভাবিক খরচ বৃদ্ধি ও আসন্ন বিলের জন্য আগাম সতর্কীকরণ সিস্টেম।',
    tag: 'MONEY RADAR',
  },
  {
    id: 'settings',
    imagePath: '/screenshots/settings.png',
    title_en: 'Data Control & Privacy',
    title_bn: 'ডেটা ও প্রাইভেসি কন্ট্রোল',
    desc_en: 'One-click full CSV/JSON export, on-device AI permission toggles, and total privacy management.',
    desc_bn: 'এক ক্লিকে সম্পূর্ণ ডেটা এক্সপোর্ট, এআই পারমিশন নিয়ন্ত্রণ এবং সম্পূর্ণ অফলাইন মোড।',
    tag: 'SETTINGS',
  },
];
