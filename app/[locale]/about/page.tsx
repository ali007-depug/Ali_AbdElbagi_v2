import About from "@/app/ui/components/AboutPage/About";
import Sidepanel from "@/app/ui/components/SidePanel";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const {locale} = await (params) ?? "ar";
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "من أنا "
      : "About Me ",

    description: isArabic
      ? "تعرف على علي عبدالباقي، مطور واجهات ويب متخصص في Next.js"
      : "Learn more about Ali AbdElbagi, a frontend developer specialized in Next.js",

    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        ar: "/ar/about",
        en: "/en-US/about",
      },
    },

    openGraph: {
      title: isArabic
        ? "من أنا – علي عبدالباقي"
        : "About Me – Ali AbdElbagi",

      description: isArabic
        ? "تعرف على علي عبدالباقي، مطور واجهات ويب"
        : "Learn more about Ali AbdElbagi",

      url: `/${locale}/about`,
      type: "profile",

      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [`/${locale}/opengraph-image`],
    },
  };
}

export default async function AboutMe({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ namespace: "aboutPage", locale });
  return (
    <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px]  bg-p-color">
      {/* Section title */}
      <h1 className="text-dyTitle mx-auto w-fit font-bold text-white mb-5">
        {t("about.title")}
      </h1>

      <Sidepanel />

      <About />
    </section>
  );
}
