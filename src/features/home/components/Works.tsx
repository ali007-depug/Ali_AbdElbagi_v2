"use client";
import WorkCards from "@/features/works/components/CardsFilter";
import { Link } from "@/../i18n/navigation";
import { useProjects, ProjcetsProvider } from "@/context/ProjectContext";
import { useTranslations } from "next-intl";
import { TbArrowRight } from "react-icons/tb";
import { useParams } from "next/navigation";

import type { ProjectsContextType } from "@/features/works";

function WorkSection() {
  const { allProjects } = useProjects() as ProjectsContextType;
  const t = useTranslations();
  const params = useParams();
  const isRtl = params.locale !== "en-US";
  const projectCount = Array.isArray(allProjects) ? allProjects.length : allProjects;

  return (
    <div className="px-dyp relative top-[76px] sm:max-md:top-[121px] mt-10 pb-20" id="works">
      {/* section header */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-500">
          {t("worksPage.works.eyebrow")}
        </span>
        <h1 className="mt-3 text-dyTitle font-bold text-p-color">{t("worksPage.works.title")}</h1>
        {t("worksPage.works.description") && (
          <p className="mt-4 text-s-color/70 font-medium">{t("worksPage.works.description")}</p>
        )}
      </div>

      {/* cards */}
      <div className="card__wrapper grid gap-6 xs:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        <WorkCards numberOfCards={6} />
      </div>

      {/* view all */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/works"
          className="group flex w-fit items-center gap-2 rounded-full bg-p-color px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-s-color hover:text-bg-color"
        >
          {t("myWorks.btnExplore.first")}
          <span className="text-sky-300 underline underline-offset-2">{projectCount}</span>
          {t("myWorks.btnExplore.second")}
          <TbArrowRight
            className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`}
          />
        </Link>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <ProjcetsProvider>
      <WorkSection />
    </ProjcetsProvider>
  );
}