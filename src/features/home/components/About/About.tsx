"use client";
import AboutText from "./AboutText";
import AboutCard from "./AboutCard";
import { useTranslations } from "next-intl";
import { FaPeopleGroup, FaUserGraduate } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function About() {
  const t = useTranslations();
  return (
    <div
      className="px-dyp relative py-16 top-[76px] sm:max-md:top-[120px] bg-p-color"
      id="about"
    >
      {/* section header */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-400">
          {t("aboutPage.about.eyebrow")}
        </span>
        <h1 className="mt-3 text-dyTitle font-bold text-white tracking-wide">
          {t("aboutMe.title")}
        </h1>
      </div>

      {/* 2 col wrapper */}
      <div className="flex max-md:flex-col gap-10 md:gap-14">
        <AboutText />

        <div className="w-full @container md:w-1/2 grid grid-cols-2 gap-4 md:gap-6 mx-auto lg:mx-0">
          <AboutCard
            cardDetails={t("aboutMe.uOfG")}
            icon={<FaUserGraduate size={22} />}
          />
          <AboutCard
            cardDetails={t("aboutMe.techCard")}
            icon={<FaLaptop size={22} />}
          />
          <AboutCard
            cardDetails={t("aboutMe.workCard")}
            icon={<FaPeopleGroup size={22} />}
          />
          <AboutCard
            cardDetails={t("aboutMe.learnCard")}
            icon={<IoLibrary size={22} />}
          />
        </div>
      </div>
    </div>
  );
}