import {getRequestConfig} from 'next-intl/server';
import {Locale, routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // 1. Get the locale from the middleware
  let locale = await requestLocale;
  
  // 2. Validate it's a supported locale
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }
  
  // 3. Load the translation file for this locale
  const messages = (await import(`../messages/${locale}.json`)).default;
  
  // 4. Return both locale and messages
  return {
    locale,
    messages,
  };
});