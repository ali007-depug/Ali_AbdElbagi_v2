import { getTranslations } from "next-intl/server";

export default async function SkillHeader({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "skillsPage" });

  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-400">
        {t("eyebrow")}
      </span>
      <h1 className="mt-3 text-dyTitle font-bold text-white">{t("title")}</h1>
      <p className="mt-4 font-medium text-gray-50/70">{t("description")}</p>
    </div>
  );
}