import { TbArrowBack } from "react-icons/tb";
import { getTranslations } from "next-intl/server";
import BackButton from "@/app/ui/components/blog/BackBtn";
import TagsArticles from "@/app/ui/components/blog/tagsPage/TagsArticles";

export default async function page({
  params,
}: {
  params: Promise<{ tag: string; locale: string }>;
}) {
  const { tag, locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "blogPage",
  });

  // Handle case where no posts are found for the given tag

  return (
    <section className="space-y-2 px-5 flex items-center flex-col relative top-[76px] sm:max-md:top-[111px ">
      {/* Page title showing the tag name */}
      <h1 className="text-2xl md:text-4xl mt-5 mx-auto text-center font-bold text-p-color">
        {tag}
      </h1>
      {/* Back to all posts button */}
      <BackButton
        backTo={`/blog`}
        btnText={t("backToAllPosts")}
        icon={<TbArrowBack />}
        customStyle="mx-auto text-bold text-base md:text-lg text-p-color hover:text-sky-500"
      />
      {/* Render all posts with the specified tag */}
      <article className="space-y-4 mt-4 w-full min-h-fit text-center bg-p-color sm:px-8 sm:py-4 rounded-lg  max-md:order-2">
        {/* Render all blog posts */}
        <TagsArticles tag={tag} locale={locale} />
      </article>
    </section>
  );
}
