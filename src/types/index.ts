export type Language = 'en' | 'bn';

export interface FeatureItem {
  id: string;
  title_en: string;
  title_bn: string;
  description_en: string;
  description_bn: string;
  category: 'track' | 'plan' | 'understand' | 'intelligence' | 'smart';
  icon: string;
  badge?: string;
  isComingSoon?: boolean;
}

export interface FAQItem {
  id: string;
  question_en: string;
  question_bn: string;
  answer_en: string;
  answer_bn: string;
}

export interface ScreenshotItem {
  id: string;
  title_en: string;
  title_bn: string;
  subtitle_en: string;
  subtitle_bn: string;
  tag: string;
}
