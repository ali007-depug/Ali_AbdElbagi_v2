'use client';
import SkillsBadges from "@/app/ui/components/SkillsBadges";
import { useTranslations } from "next-intl";
export default function MySkills() {
  const t  = useTranslations()
  return (
    <>
    <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px] bg-p-color">
      {/* title */}
      <h1 className="text-dyTitle mx-auto w-fit font-bold  text-white mb-5">
        {t('skillsPage.title')}
      </h1>
      {/* desc */}
      <p className="text-gray-50/80  text- font-semibold mx-auto text-center w-[30ch] sm:w-[50ch] mb-5">
      {t('skillsPage.description')}
      </p>
      {/* skill badges */}
      <SkillsBadges isLearntSkills={true} bg={'bg-sky-900'}/>

      {/* Thing i want to learn */}
      <h2 className="text-2xl md:text-4xl mx-auto w-fit font-bold  text-white my-5">
        {t('skillsPage.nextLevelTitle')}
      </h2>

    <SkillsBadges isLearntSkills={false} bg={'bg-gray-500'}/>
    </section>
    </>
  );
}
