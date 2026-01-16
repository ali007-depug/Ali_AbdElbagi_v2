import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // All languages your app supports
  locales: ['en-US', 'ar'] as const,
  
  // The fallback language
  defaultLocale: 'ar',
  
  // Optional: How locales appear in URLs
  localePrefix: 'always' // or 'as-needed', 'never'
});

export type Locale = (typeof routing.locales)[number];


