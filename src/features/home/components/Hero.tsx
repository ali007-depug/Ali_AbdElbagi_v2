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
    <section className="relative min-h-screen max-lg:top-17.5 sm:max-md:top-27.75 flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-12 md:gap-16 px-4 pt-4 text-center font-extrabold z-10">
      {/* hero img */}
      <div className="group relative my-auto h-64 w-64 sm:h-72 sm:w-72 lg:h-98 lg:w-98">
        <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-sky-400 to-indigo-500 opacity-25 blur transition duration-1000 group-hover:opacity-50" />

        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl">
          <Image
            src="/hero2.webp"
            fill
            alt="Ali Abd-Elbagi"
            loading="eager"
            priority
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 392px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Hero text */}
      <div className="@container flex flex-col md:w-1/2 md:justify-center md:text-start">
        <span className="mb-3 inline-block w-fit text-sm font-semibold uppercase tracking-widest text-sky-500 max-md:mx-auto">
          {t("hero.hi")} 🙋‍♂️
        </span>

        <h1 className="my-2 text-fluid font-bold text-p-color">
          <TypeWritter texts={t("hero.heading")} typingSpeed={100} keyy={locale} />
        </h1>

        <p className="mb-3 text-lg font-extrabold text-sky-500 sm:text-xl">
          {t("hero.job")}
        </p>

        <p className="text-balance text-lg font-normal text-s-color max-md:mx-auto sm:w-1/2 sm:text-xl md:w-fit lg:w-[40ch]">
          {t("hero.desc")}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-fit max-lg:mx-auto gap-4 @xs:flex-wrap @xs:justify-center">
          <CTAButton
            isLink
            href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
            icon={<FaLinkedin size={20} />}
            action={t("hero.btnText")}
            customStyle="rounded-full bg-p-color text-white border border-sky-400 hover:bg-s-color md:text-lg"
          />
          <CTAButton
            isLink={false}
            to="/blog"
            action={t("hero.blogBtn")}
            icon={<MdArticle size={20} />}
            customStyle="rounded-full bg-transparent text-p-color border-2 border-p-color/20 hover:bg-p-color/5 md:text-lg"
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