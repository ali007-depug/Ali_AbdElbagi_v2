"use client";
import { useEffect, useState } from "react";
import TypeWritter from "@/features/home/components/Typewritter";
import CTAButton from "@/components/CTAButton";
import { useTranslations } from "next-intl";
import { FaLinkedin } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { HiChevronDoubleDown } from "react-icons/hi2";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Hero() {
  const [showAboutMeScrollDown, setShowAboutMeScrollDown] = useState(true);
  const t = useTranslations();
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "ar";

  useEffect(() => {
    let scrollPosition = window.scrollY;
    const scroll = () => {
      if (scrollPosition > window.scrollY && window.scrollY > 0) {
        setShowAboutMeScrollDown(true);
      } else if (scrollPosition === 0) {
        setShowAboutMeScrollDown(false);
      }
      scrollPosition = window.scrollY;
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <section className="relative flex md:min-h-[calc(100vh-4rem)] md:w-full max-w-full flex-col items-center justify-center gap-8 overflow-x-clip px-4 pt-20 pb-12 text-center font-extrabold z-10 md:flex-row md:justify-evenly md:gap-12 md:pt-24 md:text-start">
      {/* hero img */}
      <div className="group relative my-auto aspect-square w-52 min-w-0 sm:w-64 lg:w-80 max-w-[80vw]">
        <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-sky-400 to-indigo-500 opacity-25 blur transition duration-1000 group-hover:opacity-50" />

        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl">
          <Image
            src="/hero2.webp"
            fill
            alt="Ali AbdElbagi"
            loading="eager"
            priority
            sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 320px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Hero text */}
      <div className="@container flex min-w-70 flex-col items-center max-w-full md:w-1/2 md:items-start md:justify-center">
        <h1 className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-500">
          {t("hero.hi")} 🙋‍♂️
        </h1>

        <h1 className="my-2 max-w-full text-balance text-2xl font-bold text-p-color sm:text-3xl md:text-4xl lg:text-5xl">
          <TypeWritter texts={t("hero.heading")} typingSpeed={100} keyy={locale} />
        </h1>

        <p className="mb-3 text-lg font-extrabold text-sky-500 sm:text-xl">
          {t("hero.job")}
        </p>

        <p className="max-w-full text-balance text-base font-normal text-s-color sm:text-lg md:max-w-prose">
          {t("hero.desc")}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full max-w-xs flex-col sm:flex-row sm:max-w-md sm:justify-center md:justify-start gap-3">
          <CTAButton
            isLink
            href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
            icon={<FaLinkedin size={20} />}
            action={t("hero.btnText")}
            customStyle="w-full sm:w-auto justify-center rounded-full bg-p-color text-white border border-sky-400 hover:bg-s-color text-base md:text-lg"
          />
          <CTAButton
            isLink={false}
            to="/blog"
            action={t("hero.blogBtn")}
            icon={<MdArticle size={20} />}
            customStyle="w-full sm:w-auto justify-center rounded-full bg-transparent text-p-color border-2 border-p-color/20 hover:bg-p-color/5 text-base md:text-lg"
          />
        </div>
      </div>

      {/* Next Section Scroll Indicator */}
      {showAboutMeScrollDown && (
        <a
          href="#about"
          className="absolute bottom-6 hidden items-center gap-1.5 rounded-full border border-p-color/10 bg-white px-4 py-2 text-sm font-semibold text-p-color shadow-sm transition-colors duration-300 hover:border-sky-400/50 lg:flex animate-bounce"
        >
          {t("aboutMe.title")}
          <HiChevronDoubleDown className="text-sky-500" />
        </a>
      )}
    </section>
  );
}