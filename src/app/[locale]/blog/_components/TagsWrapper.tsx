import { Suspense } from "react";
import TagsNav from "./TagsNav";
import { useTranslations } from "next-intl";
import TagsSkeleton from "./TagsSkeleton";

export default function TagsWrapper({ locale }: { locale: string }) {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-2 lg:basis-[25%]  p-5 bg-p-color rounded-lg h-fit mt-4 lg:sticky lg:top-20 lg:self-start ">
      {/* Tag title */}
      <h3 className="text-xl text-center font-semibold mb-4 text-white">
        {t("blogPage.tags")}
      </h3>
      {/* Tags */}
      <aside className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        <Suspense fallback={<TagsSkeleton />}>
          <TagsNav locale={locale} />
        </Suspense>
      </aside>
    </div>
  );
}
