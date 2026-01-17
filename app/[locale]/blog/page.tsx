import TagsNav from "@/app/ui/components/blog/TagsNav";
import { Suspense } from "react";
import PostWrapper from "@/app/ui/components/blog/PostWrapper";
import BlogHeader from "@/app/ui/components/blog/BlogHeader";



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
          <Suspense fallback={<h4>Loading posts...</h4>}>
            {/* Render all blog posts */}
            <PostWrapper locale={locale} />
          </Suspense>
        </article>

        {/* Tags sidebar */}
        <div className="flex flex-col gap-2 lg:basis-[25%]  p-5 bg-p-color rounded-lg h-fit mt-4 lg:sticky lg:top-20 lg:self-start ">
          {/* Tag title */}
          {/* <h3 className="text-xl font-semibold mb-4 text-white">{t("tags")}</h3> */}
          {/* Tags */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
            <TagsNav locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
