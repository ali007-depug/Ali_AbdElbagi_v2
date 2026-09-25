import { MarkdownRendering, BackButton, getPostById } from "@/features/blog";
import { TbArrowBack } from "react-icons/tb";
import { client } from "@/lib/contentful";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{
    locale: "ar" | "en-US";
    slug: string;
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = true; // This means "Generate them on-demand when 
// visited"
const baseUrl = "https://ali-abd-elbagi-v2.vercel.app";


export default async function Post({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const { post, readingTime } = await getPostById({ slug, locale });

  // Translation hook
  const t = await getTranslations({
    locale,
    namespace: "blogPage",
  });
  // Show loading spinner while data is being fetched
  if (post?.fields.title === undefined) {
    notFound();
  }

  const { title, description, content, tag, author } = post?.fields;
  const authorImage = author?.fields.media?.fields.file?.url;

  return (
    <section className="text-center py-5 space-y-2 max-md:px-5  relative top-19 sm:max-md:top-27.75">
      <BackButton
        backTo={`/blog`}
        btnText={t("backToAllPosts")}
        icon={<TbArrowBack />}
        customStyle="mx-auto text-bold text-base md:text-lg text-p-color hover:text-sky-500"
      />
      {/* Blog post title */}
      <h1 className="text-sky-600 font-bold text-xl md:text-3xl my-3 ">
        {title}
      </h1>
      {/* Blog post description/subtitle */}
      <p className="text-base md:text-xl font-semibold text-s-color mt-3 mb-1 max-w-[50ch] mx-auto">
        {description}
      </p>
      {/* Reading Time */}
      <p className="text-base md:text-l italic font-semibold text-s-color/80 mt-3 mb-8 max-w-[50ch] mx-auto">
        {readingTime.label}
      </p>
      {/* Main blog post content */}
      <div className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5  mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-ine">
        {/* {content} */}
        <MarkdownRendering content={content ?? ""} />
      </div>

      {tag?.map((t) => (
        <span
          key={t}
          className="inline-block mb-5 me-2 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md"
        >
          #{t}
        </span>
      ))}

      {author && (
        <div className="max-w-xl mx-auto my-12 p-6 border-2 border-p-color rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow-sm hover:shadow-md text-start">
          {authorImage && (
            <Image
              src={`https:${authorImage}`}
              width={80}
              height={80}
              className="rounded-full border-2 border-sky-600 object-cover shadow-sm shrink-0"
              alt={author.fields.name ?? ""}
            />
          )}
          <div className="space-y-2">
            {author.fields.name && (
              <h3 className="text-lg md:text-xl max-sm:text-center font-bold text-sky-600">
                {author.fields.name}
              </h3>
            )}
            <p className="text-base text-p-color leading-relaxed font-medium">
              {author.fields.bio}
            </p>
            {/* ======== For Futrue ============ */}
            {/* {author.fields.forSocialLinks && (
              
                href={author.fields.forSocialLinks}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-bold text-s-color underline hover:text-sky-500 transition-colors"
              >
                View profile
              </a>
            )} */}
          </div>
        </div>
      )}
    </section>
  );
}

export async function generateStaticParams() {
  const entries = await client.getEntries({
    content_type: "blog",
    select: ["fields.slug"],
    limit: 7,
  });

  return entries.items.flatMap((item) =>
    typeof item.fields.slug === "string"
      ? ["en-US", "ar"].map((locale) => ({ slug: item.fields.slug as string, locale }))
      : [],
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const { post } = await getPostById({slug, locale}); // same cached call as the page

  const { title, description, media } = post.fields;
  const rawUrl = media?.fields.file?.url;
  const imageUrl = rawUrl ? `https:${rawUrl}` : undefined;
  const url = `${baseUrl}/${locale}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ar: `${baseUrl}/ar/blog/${slug}`,
        en: `${baseUrl}/en-US/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}