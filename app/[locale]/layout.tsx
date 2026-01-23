
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { cairo } from "../ui/fonts";
import Header from "../ui/components/Home/Header/Header";
import Contact from "../ui/components/Home/Contact/Contact";
import {ProjcetsProvider} from "../context/ProjectContext"

const SITE_URL = "https://ali-abd-elbagi-v2.vercel.app/";

type Props = {
  children: React.ReactNode;
  params?: { locale?: "ar" | "en" };
};

/**
 * Dynamic SEO based on locale
 */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const locale = await (params)?.locale ?? "ar"; 

  const isArabic = locale === "ar";

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: isArabic ? "علي عبدالباقي" : "Ali AbdElbagi",
      template: 
         "%s | Ali AbdElbagi",
    },

    description: isArabic
      ? "الموقع الشخصي لعلي عبدالباقي – مطور واجهات ويب باستخدام Next.js"
      : "Ali AbdElbagi personal website – Frontend developer using Next.js",

    alternates: {
      canonical: isArabic ? "/ar" : "/en-US",
      languages: {
        ar: "/ar",
        en: "/en-US",
      },
    },

    openGraph: {
      title: isArabic ? "علي عبدالباقي" : "Ali AbdElbagi",
      description: isArabic
        ? "الموقع الشخصي لعلي عبدالباقي"
        : "Ali AbdElbagi personal website",
      url: isArabic ? `${SITE_URL}/ar` : `${SITE_URL}/en-US`,
      siteName: "Ali AbdElbagi",
      locale: isArabic ? "ar" : "en_US",
      alternateLocale: ["ar", "en_US"],
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Ali AbdElbagi",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: isArabic ? "علي عبدالباقي" : "Ali AbdElbagi",
      description: isArabic
        ? "الموقع الشخصي لعلي عبدالباقي"
        : "Ali AbdElbagi personal website",
      // images: ["/opengraph-image"],
            images: [`/${locale}/opengraph-image`],

    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // 1. Extract locale from URL params
  const { locale } =  await params;

    // for static route
  setRequestLocale(locale);

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
