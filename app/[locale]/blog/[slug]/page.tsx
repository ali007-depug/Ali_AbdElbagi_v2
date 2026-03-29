import MarkdownRendering from "@/app/ui/components/blog/MarkdownRendering";
import BackButton from "@/app/ui/components/blog/BackBtn";
import { TbArrowBack } from "react-icons/tb";
import { client } from "@/app/lib/contentful";
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

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  // Fetch blog post data using custom hook
  const post = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
    locale,
    include: 2,
  });
  // Translation hook
  const t = await getTranslations({
    locale,
    namespace: "blogPage",
  });
  // Show loading spinner while data is being fetched
  if (post.items[0]?.fields.title === undefined) {
    notFound();
  }

  // Destructure post fields
  const { title, description, content, tag, author } = post.items[0]
    ?.fields as any;
  console.log(author);
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
      <p className="text-base md:text-xl font-semibold text-s-color mt-3 mb-8 max-w-[50ch] mx-auto">
        {description}
      </p>
      {/* Main blog post content */}
      <div className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5  mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-ine">
        {/* {content} */}
        <MarkdownRendering content={content} />
      </div>
      {/* Tag/category badge */}
      <span className="inline-block mb-5 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md">
        #{tag}
      </span>
            {author && (
        <div className="max-w-xl mx-auto my-12 p-6 border-2 border-p-color rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow-sm transition-all hover:shadow-md text-start">
          {/* Author Image with Border to match your Image style */}
          <div className="relative shrink-0">
            <Image
              src={`https:${author.fields.media.fields.file.url}`}
              width={80}
              height={80}
              className="rounded-full border-2 border-sky-600 object-cover shadow-sm"
              alt={author.fields.name}
            />
          </div>

          <div className="space-y-2">
            {/* Author Name - Using your Sky color for branding */}
            <h3 className="text-lg md:text-xl font-bold text-sky-600">
              {author.fields.name}
            </h3>

            {/* Author Bio - Matching your content font size and leading */}
            <p className="text-base text-p-color leading-relaxed font-medium">
              {author.fields.bio}
            </p>

            {/* Optional: Social Link if you added it to Contentful */}
            {author.fields.github && (
              <a
                href={author.fields.github}
                target="_blank"
                className="inline-block mt-2 text-sm font-bold text-s-color underline hover:text-sky-500 transition-colors"
              >
                View Profile
              </a>
            )}
          </div>
        </div>
      )}{" "}

    </section>
  );
}

export async function generateStaticParams() {
  // Fetch all blog slugs once
  const entries = await client.getEntries({
    content_type: "blog",
    select: ["fields.slug"],
    limit: 7,
  });

  return entries.items.flatMap((item: any) =>
    ["en-US", "ar"].map((locale) => ({
      slug: item.fields.slug,
      locale,
    })),
  );
}

export const dynamicParams = true; // This means "Generate them on-demand when visited"

// meta data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  const post = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
    locale,
  });

  // If post wasn't found, return fallback metadata
  if (!post || !post.items || post.items.length === 0) {
    return { title: "Post Not Found" };
  }

  const isArabic = locale === "ar";

  const { title, description, media } = post.items[0]?.fields as any;
  const imageUrl = `https:${media.fields.file.url}`;

  return {
    title: isArabic ? `${title}` : `${title}`,

    description: description,

    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        ar: `/ar/blog/${slug}`,
        en: `/en-US/blog/${slug}`,
      },
    },
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: `/${locale}/blog/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`/${locale}/opengraph-image`],
    },
  };
}
