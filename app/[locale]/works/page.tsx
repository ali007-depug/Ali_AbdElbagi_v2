import ProjectsTaps from "@/app/ui/components/worksPage/ProjectsTaps";
import WorksHeader from "@/app/ui/components/worksPage/WorksHeader";
import type { Metadata } from "next";

type Props = {
  params: {
    locale: "ar" | "en-US";
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const locale = await params.locale ?? "ar";
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "أعمالي "
      : "My Work ",

    description: isArabic
      ? "استعرض أعمال ومشاريع علي عبدالباقي "
      : "Explore projects and portfolio work by Ali AbdElbagi",

    alternates: {
      canonical: `/${locale}/works`,
      languages: {
        ar: "/ar/works",
        en: "/en-US/works",
      },
    },

    openGraph: {
      title: isArabic
        ? "أعمالي – علي عبدالباقي"
        : "My Work – Ali AbdElbagi",

      description: isArabic
        ? "مشاريع وأعمال علي عبدالباقي في تطوير الويب"
        : "Projects and portfolio work by Ali AbdElbagi",

      url: `/${locale}/works`,
      type: "website",

      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isArabic
            ? "أعمال علي عبدالباقي"
            : "Ali AbdElbagi portfolio",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [`/${locale}/opengraph-image`],
    },
  };
}

export default async function MyWorks({ params } :{params :Promise<{ locale: string }>}) {
  const { locale } = await params;
  return (
      <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px]">
        <WorksHeader locale={locale} />
        {/* Projects List */}
        <ProjectsTaps />
      </section>
  );
}
