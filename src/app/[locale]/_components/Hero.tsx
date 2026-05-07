"use client";
import { useEffect, useState } from "react";
import TypeWritter from "@/src/components/Typewritter";
import CTAButton from "@/src/components/CTAButton";
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
    <section className="px-4 relative min-h-screen max-lg:top-17.5 sm:max-md:top-27.75 pt-4 text-center font-extrabold z-10 rounded-xl md:flex md:gap-15 justify-evenly items-center">
      {/* hero img */}
      <div className="relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-98 lg:h-98 max-md:mx-auto my-auto">
        {/* Decorative Background Ring - Now inherits parent size */}
        <div className="absolute -inset-2 bg-linear-to-tr from-sky-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

        {/* Image Container - Fills the parent exactly */}
        <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-2xl">
          <Image
            src={"/hero2.webp"}
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
      <div className="md:w-1/2 @container md:text-start md:flex md:justify-center md:flex-col">
        <h2 className="text-p-color max-md:my-5 text-4xl sm:text-5xl font-bold">
          {t("hero.hi")} 🙋‍♂️
        </h2>

        <h3 className="text-p-color text-fluid font-bold my-5">
          <TypeWritter
            texts={t(`hero.heading`)}
            typingSpeed={100}
            keyy={locale}
          />
        </h3>

        <p className="font-extrabold mb-3 text-lg sm:text-xl text-s-color">
          {t("hero.job")}
        </p>

        <p className="text-s-color font-normal text-lg text-balance sm:text-xl sm:w-1/2 md:w-fit lg:w-[40ch] max-md:mx-auto">
          {t("hero.desc")}
        </p>

        {/* Buttons */}
        <div className="flex @xs:flex-wrap @xs:justify-center w-fit max-lg:mx-auto gap-5 mt-8">
          <CTAButton
            isLink={true}
            href="https://www.linkedin.com/in/ali-abdelbagi-02313b223/"
            icon={
              <FaLinkedin className="self-center ms-2" size={25} color="#eee" />
            }
            action={t("hero.btnText")}
            customStyle="bg-p-color hover:bg-s-color max-md:mx-auto rounded-full text-white border border-sky-400 md:text-lg"
          />
          <CTAButton
            isLink={false}
            to={`/blog`}
            action={t("hero.blogBtn")}
            icon={
              <MdArticle className="self-center ms-2" size={25} color="#eee" />
            }
            customStyle="max-md:mx-auto rounded-full bg-s-color text-white hover:bg-s-color/80 md:text-lg"
          />
        </div>

        {/* Next Section Scroll Indicator */}
        {showAboutMeScrollDown && (
          <div className="hidden lg:flex items-center px-5 py-3 absolute bottom-0 rounded-full bg-s-color/50 text-white animate-bounce w-fit">
            {t("aboutMe.title")}{" "}
            <HiChevronDoubleDown color="#223549" className="ms-2" />
          </div>
        )}
      </div>
    </section>
  );
}
