"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import JourneyStep from "./JourneyStep";

interface Paragraph {
  before: string;
  link?: { href: string; text: string };
  after: string;
}

export default function About() {
  const t = useTranslations();

  const paragraphs = t.raw(
    "aboutPage.about.frontend.paragraphs",
  ) as Paragraph[];

  return (
    <div className="w-full flex gap-4">
      {/* Text content */}
      <div className="w-full space-y-5 [&_h4]:text-sky-300 [&_p]:text-lg [&_p]:text-white/95 [&_p]:font-medium [&_a]:text-sky-400 [&_a]:underline">
        <h3 className="text-white text-4xl lg:text-6xl font-bold">
          {t("aboutPage.about.story.title")}
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            delay: 0.2,
          }}
        >
          {/* tech */}
          <JourneyStep
            title={t("aboutPage.about.technology.title")}
            text={t("aboutPage.about.technology.text")}
            imgSrc="/old-pc.jpg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            delay: 0.2,
          }}
        >
          {/* University */}
          <JourneyStep
            title={t("aboutPage.about.university.title")}
            text={t("aboutPage.about.university.text")}
            imgSrc="/CE.jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            delay: 0.2,
          }}
        >
          {/* Falling in love */}
          <JourneyStep
            title={t("aboutPage.about.love.title")}
            text={t("aboutPage.about.love.text")}
            imgSrc="/linux.jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            delay: 0.2,
          }}
        >
          {/* Frontend */}
          <div className="relative p-8 rounded-3xl flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/3">
              <h4 className="mb-4 text-4xl font-bold text-slate-800">
                {t("aboutPage.about.frontend.title")}
              </h4>
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-lg  border-s-4 border-blue-500 ps-4"
                >
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
            <div className="lg:w-1/3 w-full">
              <Image
                src={"/frontend.jpg"}
                alt={`frontend image`}
                className="rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-300"
                width={400}
                height={200}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            delay: 0.2,
          }}
        >
          {/* grad */}
          <JourneyStep
            title={t("aboutPage.about.grad.title")}
            text={t("aboutPage.about.grad.text")}
            imgSrc="/cer.jpg"
          />
        </motion.div>
      </div>
    </div>
  );
}
