import NextLevel from "@/app/ui/components/skillPage/NextLevel";
import SkillHeader from "@/app/ui/components/skillPage/skillHeader";
import SkillsBadges from "@/app/ui/components/SkillsBadges";
export const dynamic = 'force-static'
export default async function MySkills({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px] bg-p-color">
      <SkillHeader locale={locale} />
      {/* skill badges */}
      <SkillsBadges isLearntSkills={true} bg={"bg-sky-900"} />
      {/* Next Level */}
      <NextLevel locale={locale} />
    </section>
  );
}
