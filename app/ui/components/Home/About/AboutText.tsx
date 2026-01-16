import { useTranslations } from "next-intl";
import { FaArrowCircleRight } from "react-icons/fa";
import CTAButton from "../../CTAButton";
import { useParams } from "next/navigation";
export default function AboutText() {
  const t = useTranslations();
   const params = useParams();

  return (
    <div className="w-full md:w-1/2 flex flex-col lg:flex-row justify-between gap-10 outlie outline-red-500">
      {/* Text */}
      <div className="text relative h-full">
        <p className="text-white font-medium text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 max-md:text-center">
          {t("aboutMe.me")}{" "}
          <span className="font-extrabold text-sky-400">
            {t("aboutMe.name")}
          </span>
          {t("aboutMe.smallBreif")}
        </p>
        <p className="text-white max-md:text-center font-medium text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
          {t("aboutMe.aboutTech")}
        </p>
        {/* CTAs  */}
        <CTAButton
          isLink={false}
          to={"/about"}
          action={t("aboutMe.btnStory")}
          icon={
            params.locale === "en-US" ? (
              <FaArrowCircleRight />
            ) : (
              <FaArrowCircleRight className="rotate-180" />
            )
          }
          customStyle="rounded-full max-lg:mt-10 max-lg:w-fit max-lg:mx-auto lg:absolute bottom-0 ltr:lg:translate-x-1/2 rtl:lg:-translate-x-1/2  bg-white text-p-color hover:bg-sky-600 hover:text-white border-2 border-sky-500 cursor-pointer font-bold md:text-xl transition-all duration-200 ease-linear"
        />
      </div>
    </div>
  );
}
