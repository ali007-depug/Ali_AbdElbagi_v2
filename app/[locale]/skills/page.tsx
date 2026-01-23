import NextLevel from "@/app/ui/components/skillPage/NextLevel";
import SkillHeader from "@/app/ui/components/skillPage/skillHeader";
import SkillsBadges from "@/app/ui/components/SkillsBadges";
import type { Metadata } from "next";

type Props = {
  params: {
    locale: "ar" | "en-US";
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const locale =await  params.locale ?? "ar";
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "مهاراتي "
      : "Skills",

    description: isArabic
      ? "تعرف على مهارات علي عبدالباقي في تطوير واجهات الويب باستخدام React و Next.js"
      : "Discover Ali AbdElbagi’s skills in frontend development using React and Next.js",

    alternates: {
      canonical: `/${locale}/skills`,
      languages: {
        ar: "/ar/skills",
        en: "/en-US/skills",
      },
    },

    openGraph: {
      title: isArabic
        ? "مهاراتي – علي عبدالباقي"
        : "Skills – Ali AbdElbagi",

      description: isArabic
        ? "مهارات وتقنيات علي عبدالباقي في تطوير الويب"
        : "Frontend development skills and technologies",

      url: `/${locale}/skills`,
      type: "website",

      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isArabic
            ? "مهارات علي عبدالباقي"
            : "Ali AbdElbagi skills",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [`/${locale}/opengraph-image`],
    },
  };
}


export const dynamic = 'force-static'
export default async function MySkills({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px] bg-p-color">
      <SkillHeader locale={locale} />
      {/* skill badges */}
      <SkillsBadges isLearntSkills={true} bg={"bg-sky-900"} />
      {/* Next Level */}
      <NextLevel locale={locale} />
    </section>
  );
}
