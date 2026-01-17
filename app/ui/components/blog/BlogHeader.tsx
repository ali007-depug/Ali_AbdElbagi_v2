"use client";
import { useTranslations } from "next-intl";
export default function BlogHeader() {
  // const t = await getTranslations({
  //   namespace: "blogPage",
  //   locale,
  // });
  const t = useTranslations("blogPage");
  return (
    <>
      <h1 className="text-3xl md:text-5xl mb-5 mx-auto text-center font-bold text-p-color">
        {t("title")}
      </h1>

      {/* desc */}
      <p className="text-p-color font-semibold mx-auto text-center w-[30ch] sm:w-[50ch] mt-5">
        {t("description")}
      </p>

      {/* Subtitle */}
      <h2 className="text-2xl mt-4 md:text-3xl font-semibold text-s-color ms-10">
        {t("recentPosts")}
      </h2>
    </>
  );
}
