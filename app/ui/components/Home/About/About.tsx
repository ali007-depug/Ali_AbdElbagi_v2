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
      className="px-dyp relative py-5 md:py-15 top-[76px] sm:max-md:top-[120px] bg-p-color"
      id="about"
    >
      {/* section title */}
      <h1 className="text-center font-bold text-dyTitle text-white mb-10 tracking-wide">
        {t("aboutMe.title")}
      </h1>
      {/* 2 col wrapper */}
      <div className="flex max-md:flex-col gap-10">
        {/* texts Wrapper*/}
        <AboutText />
        {/* Info with icon wrapper */}
        <div className="w-full @container md:w-1/2  grid grid-cols-2 sm:grid-rows-2 gap-5 md:gap-10 p- md:p- rounded-lg mx-auto lg:mx-0">
          <AboutCard
            cardDetails={t("aboutMe.uOfG")}
            icon={
              <FaUserGraduate size={25} color="oklch(50% 0.134 242.749) " />
            }
          />
          <AboutCard
            cardDetails={t("aboutMe.techCard")}
            icon={<FaLaptop size={25} color="oklch(50% 0.134 242.749) " />}
          />
          <AboutCard
            cardDetails={t("aboutMe.workCard")}
            icon={<FaPeopleGroup size={25} color="oklch(50% 0.134 242.749) " />}
          />
          <AboutCard
            cardDetails={t("aboutMe.learnCard")}
            icon={<IoLibrary size={25} color="oklch(50% 0.134 242.749) " />}
          />
        </div>
      </div>
      {/* ==== End of content */}
    </div>
  );
}
