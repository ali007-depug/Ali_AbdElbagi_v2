import ProjectsTaps from "./_components/ProjectsTaps";
import WorksHeader from "@/src/app/[locale]/works/_components/WorksHeader";
import type { Metadata } from "next";

type Props = {
  params: {
    locale: "ar" | "en-US";
  };
};

const baseUrl = "https://ali-abd-elbagi-v2.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params ?? "ar";
  const isArabic = locale === "ar";

  return {
    title: isArabic ? "أعمالي " : "My Work ",

    description: isArabic
      ? "استعرض أعمال ومشاريع علي عبدالباقي "
      : "Explore projects and portfolio work by Ali AbdElbagi",

    alternates: {
      canonical: `${baseUrl}/${locale}/works`,
      languages: {
        ar: `${baseUrl}/ar/works`,
        en: `${baseUrl}/en-US/works`,
      },
    },

    openGraph: {
      title: isArabic ? "أعمالي – علي عبدالباقي" : "My Work – Ali AbdElbagi",

      description: isArabic
        ? "مشاريع وأعمال علي عبدالباقي في تطوير الويب"
        : "Projects and portfolio work by Ali AbdElbagi",

      url: `${baseUrl}/${locale}/works`,
      type: "website",

      images: [
        {
          url: `${baseUrl}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isArabic ? "أعمال علي عبدالباقي" : "Ali AbdElbagi portfolio",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [`${baseUrl}/${locale}/opengraph-image`],
    },
  };
}

export default async function MyWorks({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <section className="px-dyp py-5 md:py  relative top-19 sm:max-md:top-27.75">
      <WorksHeader locale={locale} />
      {/* Projects List */}
      <ProjectsTaps />
    </section>
  );
}
