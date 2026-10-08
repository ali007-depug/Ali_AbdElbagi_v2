import { useTranslations } from "next-intl";
import { TbArrowRight } from "react-icons/tb";
import CTAButton from "../../../../components/CTAButton";
import { useParams } from "next/navigation";

export default function AboutText() {
  const t = useTranslations();
  const params = useParams();
  const isRtl = params.locale !== "en-US";

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between gap-10">
      <div className="relative h-full">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-sky-400">
          {t("aboutPage.about.subtitle") || "Get to know me"}
        </span>

        <p className="mb-6 max-w-xl text-lg font-medium leading-relaxed text-white max-md:text-center md:text-xl">
          {t("aboutMe.me")}{" "}
          <span className="font-extrabold text-sky-400">{t("aboutMe.name")}</span>
          {t("aboutMe.smallBreif")}
        </p>

        <p className="max-w-xl text-lg font-medium leading-relaxed text-white/80 max-md:text-center md:text-xl">
          {t("aboutMe.aboutTech")}
        </p>

        <CTAButton
          isLink={false}
          to="/about"
          action={t("aboutMe.btnStory")}
          icon={<TbArrowRight className={isRtl ? "rotate-180" : ""} />}
          customStyle="rounded-full mt-10 w-fit bg-white text-p-color hover:bg-sky-500 hover:text-white border-2 border-sky-400 cursor-pointer font-bold md:text-xl transition-all duration-200 ease-linear"
        />
      </div>
    </div>
  );
}