import { getTranslations } from "next-intl/server";
export default async function SkillHeader({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "skillsPage",
  });
  return (
    <>
      {/* title */}
      <h1 className="text-dyTitle mx-auto w-fit font-bold  text-white mb-5">
        {t("title")}
      </h1>
      {/* desc */}
      <p className="text-gray-50/80  text- font-semibold mx-auto text-center w-[30ch] sm:w-[50ch] mb-5">
        {t("description")}
      </p>
    </>
  );
}
