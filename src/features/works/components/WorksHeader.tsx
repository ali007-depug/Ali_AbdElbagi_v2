import { getTranslations } from "next-intl/server";
export default async function WorksHeader({locale}: {locale: string}) {
    const t = await getTranslations({
  locale,
  namespace: "worksPage",
});

  return (
    <>
      {/* title */}
      <h1 className="text-4xl mx-auto w-fit font-bold text-fluid text-p-color mb-5">
        {t("works.title")}
      </h1>

      {/* desc */}
      <p className="text-lg text-p-color/65 text-balance font-semibold mx-auto w-[35ch] max-xs:w-[30ch] md:w-[50ch] text-center mb-5">
        {t("works.description")}
      </p>
    </>
  );
}
