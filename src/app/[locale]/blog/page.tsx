import { Suspense } from "react";
import { PostWrapper,BlogHeader,TagsWrapper,PostsSkeleton } from "@/features/blog";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    locale: "ar" | "en-US";
  }>;
};
const baseUrl = "https://ali-abd-elbagi-v2.vercel.app";


export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <section className="mb-10 px-dyp py-5 relative top-19 sm:max-md:top-27.75">
      <Suspense fallback={<p>Loading...</p>}>
        <BlogHeader locale={locale} />
      </Suspense>

      <TagsWrapper locale={locale} />

      <article className="mt-6 min-h-[80dvh] w-full bg-p-color  p-5 rounded-lg text-center">
        <Suspense fallback={<PostsSkeleton />}>
          <PostWrapper locale={locale} />
        </Suspense>
      </article>
    </section>
  );
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: isArabic ? "المدونة | ركن البرمجة" : "Blog | Code Corner",

    description: isArabic
      ? "مقالات ودروس تقنية يكتبها علي عبدالباقي حول تطوير الويب"
      : "Articles and technical tutorials by Ali AbdElbagi about web development",

    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        ar: `${baseUrl}/ar/blog`,
        en: `${baseUrl}/en-US/blog`,
      },
    },

    openGraph: {
      title: isArabic ? "مدونة علي | ركن البرمجة" : "Ali's Blog | Code Corner",

      description: isArabic
        ? "مقالات تقنية حول تطوير الويب"
        : "Technical articles about web development",

      url: `${baseUrl}/${locale}/blog`,
      type: "website",

      images: [
        {
          url: `${baseUrl}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isArabic ? "مدونة علي | ركن البرمجة" : "Ali's Blog | Code Corner",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [`${baseUrl}/${locale}/opengraph-image`],
    },
  };
}
