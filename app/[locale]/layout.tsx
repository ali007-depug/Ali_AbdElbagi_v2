import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cairo } from "../ui/fonts";
import Header from "../ui/components/Home/Header/Header";
import Contact from "../ui/components/Home/Contact/Contact";
import {ProjcetsProvider} from "../context/ProjectContext"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 1. Extract locale from URL params
  const { locale } = await params;

  // 2. Validate it's a supported locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound(); // Show 404 if invalid locale
  }

  // 3. Load messages for this locale
  const messages = await getMessages();

  // 4. Render with proper locale
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${cairo} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header/>
          <ProjcetsProvider>
          {children}
          </ProjcetsProvider>
          <Contact/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Generate static pages for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
