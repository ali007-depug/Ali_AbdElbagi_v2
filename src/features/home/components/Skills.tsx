"use client";
import SkillsBadges from "@/features/skills/SkillsBadges";
import { Link } from "@/../i18n/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { TbArrowRight } from "react-icons/tb";

export default function Skills() {
  const t = useTranslations();
  const params = useParams();
  const isRtl = params.locale !== "en-US";

  return (
    <div
      className="px-dyp relative top-[76px] sm:max-md:top-[121px] mt-10 py-16 bg-p-color"
      id="skills"
    >
      {/* section header */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-400">
          {t("mySkills.eyebrow")}
        </span>
        <h1 className="mt-3 text-dyTitle font-bold text-white">{t("mySkills.title")}</h1>
      </div>

      {/* skill badges */}
      <SkillsBadges />

      {/* view more */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/skills"
          className="group flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-p-color transition-colors duration-300 hover:bg-sky-400 hover:text-white"
        >
          {t("mySkills.btnNextLearning")}
          <TbArrowRight
            className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
          />
        </Link>
      </div>
    </div>
  );
}