import { getTranslations } from "next-intl/server";

export default async function WorksHeader({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "worksPage" });

  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <span className="inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-500">
        {t("works.eyebrow")}
      </span>
      <h1 className="mt-3 text-fluid font-bold text-p-color">{t("works.title")}</h1>
      <p className="mt-4 text-balance text-lg font-semibold text-p-color/65">
        {t("works.description")}
      </p>
    </div>
  );
}