import { Suspense } from "react";
import PostWrapper from "@/app/ui/components/blog/PostWrapper";
import BlogHeader from "@/app/ui/components/blog/BlogHeader";
import TagsWrapper from "@/app/ui/components/blog/TagsWrapper";
import PostsSkeleton from "@/app/ui/components/blog/PostsSkeleton";
import type { Metadata } from "next";

type Props = {
  params: {
    locale: "ar" | "en-US";
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const locale = await (params).locale ?? "ar";
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "المدونة"
      : "Blog ",

    description: isArabic
      ? "مقالات ودروس تقنية يكتبها علي عبدالباقي حول تطوير الويب" 
      : "Articles and technical tutorials by Ali AbdElbagi about web development",

    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        ar: "/ar/blog",
        en: "/en-US/blog",
      },
    },

    openGraph: {
      title: isArabic
        ? "مدونة علي عبدالباقي"
        : "Ali AbdElbagi Blog",

      description: isArabic
        ? "مقالات تقنية حول تطوير الويب"
        : "Technical articles about web development",

      url: `/${locale}/blog`,
      type: "website",

      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isArabic
            ? "مدونة علي عبدالباقي"
            : "Ali AbdElbagi blog",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [`/${locale}/opengraph-image`],
    },
  };
}


export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <section className="mb-10 px-dyp py-5  relative top-[76px] sm:max-md:top-[111px]">
      <Suspense fallback={<p>Loading...</p>}>
        <BlogHeader locale={locale}/>
      </Suspense>
      {/* post + tags Wrapper */}
      <div className="flex max-lg:flex-col px- gap-5">
        {/*posts section wrapper */}
        <article className="space-y-4 mt-4 w-full basis-[80%] min-h-[80dvh] text-center bg-p-color sm:px-3 sm:py-2 rounded-lg  max-lg:order-2">
          <Suspense fallback={<PostsSkeleton/>}>
            {/* Render all blog posts */}
            <PostWrapper locale={locale} />
          </Suspense>
        </article>

        {/* Tags sidebar */}
        <TagsWrapper locale={locale} />
      </div>
    </section>
  );
}
