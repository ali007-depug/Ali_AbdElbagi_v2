import MarkdownRendering from "@/app/ui/components/blog/MarkdownRendering";
import BackButton from "@/app/ui/components/blog/BackBtn";
import { TbArrowBack } from "react-icons/tb";
import { client } from "@/app/lib/contentful";
import { getTranslations } from "next-intl/server";
import getAllPosts from "@/app/actions/getAllPosts";
export const dynamic = "force-static";

export default async function Post({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = await params;
  // Fetch blog post data using custom hook
  const post = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
    locale,
  });
  // Translation hook
  const t = await getTranslations({
    locale,
    namespace: "blogPage",
  });
  // Show loading spinner while data is being fetched

  // Destructure post fields
  const { title, description, content, tag } = post.items[0]?.fields as any;

  return (
    <section className="text-center py-5 space-y-2 max-md:px-5  relative top-[76px] sm:max-md:top-[111px]">
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
    </section>
  );
}

export async function generateStaticParams() {
  // Fetch all blog slugs once
  const entries = await client.getEntries({
    content_type: "blog",
    select: ["fields.slug"],
  });

  return entries.items.flatMap((item: any) =>
    ["en-US", "ar"].map((locale) => ({
      slug: item.fields.slug,
      locale,
    }))
  );
}
