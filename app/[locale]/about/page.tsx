'use client';
import Sidepanel from "@/app/ui/components/SidePanel";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMe() {
  const t = useTranslations();

  interface Paragraph {
    before: string;
    link?: { href: string; text: string };
    after: string;
  }

  const paragraphs = t.raw(
  "aboutPage.about.frontend.paragraphs"
) as Paragraph[];

  return (
    <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px]  bg-p-color">
      {/* Section title */}
      <h1 className="text-dyTitle mx-auto w-fit font-bold text-white mb-5">
        {t("aboutPage.about.title")}
      </h1>

      <Sidepanel />

      <div className="w-full flex gap-4">
        {/* image */}
        <div className="hidden sm:block sm:w-1/2 lg:w-1/3 order-1 sticky top-10 h-fit shadow-lg shadow-p-color/50 rounded overflow-hidden">
          <Image src="/Ali.jpg" alt={t("aboutPage.about.imageAlt")} width={940} height={100} />
          <p className="absolute bottom-0 left-2 text-sky-500 bg-p-color rounded px-2 italic text-sm font-bold">
            {t("aboutPage.about.imageDate")}
          </p>
        </div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-fit sm:w-3/4 lg:w-3/4 space-y-5 [&_h4]:text-sky-300 [&_p]:text-lg [&_p]:text-white/95 [&_p]:font-medium [&_a]:text-sky-400 [&_a]:underline"
        >
          <h3 className="text-white text-4xl lg:text-6xl font-bold">
            {t("aboutPage.about.story.title")}
          </h3>

          {/* With Technology */}
          <div className="[&_h4]:font-bold [&_h4]:text-2xl">
            <h4>{t("aboutPage.about.technology.title")}</h4>
            <p>{t("aboutPage.about.technology.text")}</p>
          </div>

          {/* University */}
          <div className="[&_h4]:font-bold [&_h4]:text-2xl">
            <h4>{t("aboutPage.about.university.title")}</h4>
            <p>{t("aboutPage.about.university.text")}</p>
          </div>

          {/* Falling in love */}
          <div className="[&_h4]:font-bold [&_h4]:text-2xl">
            <h4>{t("aboutPage.about.love.title")}</h4>
            <p>{t("aboutPage.about.love.text")}</p>
          </div>

          {/* Frontend */}
          <div className="[&_h4]:font-bold [&_h4]:text-2xl">
            <h4>{t("aboutPage.about.frontend.title")}</h4>
            {paragraphs.map((para, i) => (
              <p key={i}>
                {para.before}{" "}
                {para.link && (
                  <a href={para.link.href} target="_blank">
                    {para.link.text}
                  </a>
                )}{" "}
                {para.after}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
