import { getAllPosts } from "@/features/blog";
import { Link } from "@/../i18n/navigation";
import { TbArrowRight } from "react-icons/tb";
import RecentPosts from "./RecentPosts";
import { getTranslations } from "next-intl/server";

export default async function BlogOnHome({ locale }: { locale: string }) {
  const posts = await getAllPosts({ locale, limit: 2 });

  const t = await getTranslations({ namespace: "blogOnHome", locale });

  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-30">
      {/* section title */}
      <h1 className="text-center font-bold text-dyTitle text-p-color mb-10 tracking-wide">
        {t("title")}
      </h1>

      {/* section header: eyebrow + title + description + CTA */}
      <div className="flex flex-col gap-6 mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-500">
            {t("fromTheBlog")}
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-s-color">
            {t("recentPosts")}
          </h2>
          <p className="max-w-[55ch] text-s-color/70">{t("recentPostsDescription")}</p>
        </div>

        <Link
          href="/blog"
          locale={locale}
          className="group inline-flex w-fit items-center gap-1.5 self-start rounded-full border border-sky-600 px-4 py-2 text-sm font-semibold text-sky-600 transition-colors duration-300 hover:bg-sky-600 hover:text-white sm:self-auto"
        >
          {t("viewAllPosts")}
          <TbArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <RecentPosts data={posts} />
    </section>
  );
}