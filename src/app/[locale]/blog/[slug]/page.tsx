import {
  MarkdownRendering,
  BackButton,
  ShareButton,
  getPostById,
  extractHeadingsFromMarkdown,
  TableOfContents,
} from "@/features/blog";
import { TbArrowBack } from "react-icons/tb";
import { client } from "@/lib/contentful";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
// import { notFound } from "next/navigation";
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

export default async function Post({ params }: Props) {
  const { slug, locale } = await params;

  const { post, readingTime } = await getPostById({ slug, locale });

  const t = await getTranslations({ locale, namespace: "blogPage" });

  const { title, description, content, tag, author } = post.fields;
  const headings = extractHeadingsFromMarkdown(content ?? "");
  const authorImage = author?.fields.media?.fields.file?.url;


  return (
    <section className="py-5 flex  gap-10 px-5 max-md:px-6 relative top-19 sm:max-md:top-27.75">
      <div className="min-w-0 flex items-center flex-col ">
        {/* post Header */}
        <div className="max-w-4xl">
          <BackButton
            backTo="/blog"
            locale={locale}
            btnText={t("backToAllPosts")}
            icon={<TbArrowBack />}
            customStyle="text-bold text-base md:text-lg text-p-color hover:text-sky-500"
          />

          {/* Hero header */}
          <header className="mt-6 mb-10">
            {/* ...coverImage block, unchanged... */}

            <div className="text-center space-y-3">
              <div className="flex justify-center items-center gap-2 text-xs text-s-color/70">
                {tag?.[0] && <span>#{tag[0]}</span>}
                {tag?.[0] && <span>·</span>}
                <span>{readingTime.label}</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-p-color text-balance">
                {title}
              </h1>

              <p className="text-lg text-s-color max-w-[50ch] mx-auto">
                {description}
              </p>

              {author && (
                <div className="flex items-center justify-center gap-2 pt-2">
                  {authorImage && (
                    <Image
                      src={`https:${authorImage}`}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                      alt=""
                    />
                  )}
                  {author.fields.name && (
                    <span className="text-sm text-s-color/80">
                      {author.fields.name}
                    </span>
                  )}
                  {post.fields.date && (
                    <>
                      <span className="text-s-color/40">·</span>
                      <span className="text-sm text-s-color/70">
                        {new Date(post.fields.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </>
                  )}
                </div>
              )}

              <div className="flex justify-center pt-2">
                <ShareButton title={title} />
              </div>
            </div>
          </header>
        </div>
        {/* Toc + Body content*/}
        <div className="grid grid-cols-1 lg:grid-cols-[25%_5%_55%] w-full">
          {/* TOC: hidden on mobile, sticky sidebar on desktop */}
          {headings.length > 0 && (
            <div className="max-lg:hidden ps-7">
              <div className="lg:sticky lg:top-24">
                <TableOfContents headings={headings} locale={locale} />
              </div>
            </div>
          )}

          {/* gap column: only exists as a spacer on desktop */}
          <div className="max-lg:hidden" />

          {/* BODY CONTENT */}
          <div className="min-w-0">
            <div className="leading-10 mb-4 text-start text-base md:text-lg font-medium text-p-color">
              <MarkdownRendering content={content ?? ""} />
            </div>

            {/* Tags */}
            <div className="text-center">
              {tag?.map((t) => (
                <span
                  key={t}
                  className="inline-block mb-5 me-2 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Full author card */}
{author && (
  <aside
    aria-label={t("writtenBy")}
    className="my-12 rounded-2xl bg-p-color/5 p-6 md:p-8 text-start"
  >
    <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:text-start md:gap-6">
      {authorImage && (
        <div className="shrink-0 rounded-full p-1 ring-2 ring-sky-600/40">
          <Image
            src={`https:${authorImage}`}
            width={88}
            height={88}
            className="size-22 rounded-full object-cover"
            alt={author.fields.name ?? ""}
          />
        </div>
      )}

      <div className="min-w-0 space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
          {t("writtenBy")}
        </p>

        {author.fields.name && (
          <h3 className="text-xl font-bold text-p-color md:text-2xl">
            {author.fields.name}
          </h3>
        )}

        {author.fields.bio && (
          <p className="max-w-[60ch] text-base leading-relaxed text-s-color">
            {author.fields.bio}
          </p>
        )}

        {/* enable when the social link is ready */}
        {/* {author.fields.forSocialLinks && (
          
            href={author.fields.forSocialLinks}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-sky-600 hover:text-sky-500 transition-colors"
          >
            {t("viewProfile")} <span aria-hidden>→</span>
          </a>
        )} */}
      </div>
    </div>
  </aside>
)}          </div>
        </div>{" "}
      </div>
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
      ? ["en-US", "ar"].map((locale) => ({
          slug: item.fields.slug as string,
          locale,
        }))
      : [],
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const { post } = await getPostById({ slug, locale }); // same cached call as the page

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
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}
