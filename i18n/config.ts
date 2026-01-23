// Supported locales for KOSYN
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar'; // Default to Arabic for Arab countries

// Language metadata
export const languages: Record<Locale, {
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  code: string;
}> = {
  en: {
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    code: 'EN'
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    code: 'AR'
  },
};

// Country to locale mapping for auto-detection
export const countryToLocale: Record<string, Locale> = {
  // Gulf Countries (Arabic)
  OM: 'ar',  // Oman
  SA: 'ar',  // Saudi Arabia
  AE: 'ar',  // UAE
  KW: 'ar',  // Kuwait
  BH: 'ar',  // Bahrain
  QA: 'ar',  // Qatar
  // Other Arabic-speaking countries
  EG: 'ar',  // Egypt
  JO: 'ar',  // Jordan
  LB: 'ar',  // Lebanon
  IQ: 'ar',  // Iraq
  YE: 'ar',  // Yemen
  SY: 'ar',  // Syria
  PS: 'ar',  // Palestine
  LY: 'ar',  // Libya
  SD: 'ar',  // Sudan
  MA: 'ar',  // Morocco
  DZ: 'ar',  // Algeria
  TN: 'ar',  // Tunisia
};

// Get locale from country code
export function getLocaleFromCountry(countryCode: string): Locale {
  return countryToLocale[countryCode?.toUpperCase()] || 'en'; // Default to English if not Arab country
}
