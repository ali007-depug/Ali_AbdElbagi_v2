import { getTranslations } from "next-intl/server";
import SkillsBadges from "./SkillsBadges";

export default async function NextLevel({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "skillsPage" });

  return (
    <div className="mt-16 border-t border-white/10 pt-12">
      <div className="mb-6 flex items-center gap-3">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          {t("nextLevelTitle")}
        </h2>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <SkillsBadges isLearntSkills={false} bg="bg-white/5" />
    </div>
  );
}