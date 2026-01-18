import { getTranslations } from "next-intl/server";
import SkillsBadges from "../SkillsBadges";
export default async function NextLevel({locale}: {locale: string}) {
    const t = await getTranslations({
    locale,
    namespace: "skillsPage",
    })
  return (
    <>
      {/* Thing i want to learn */}
      <h2 className="text-2xl md:text-4xl mx-auto w-fit font-bold  text-white my-5">
        {t("nextLevelTitle")}
      </h2>
        <SkillsBadges isLearntSkills={false} bg={"bg-gray-500"} />

    </>
  );
}
