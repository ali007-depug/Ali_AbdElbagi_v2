"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillsBadgesProps {
  isLearntSkills?: boolean;
  bg?: string;
}

const skills = {
  html: "html.webp",
  css: "css3.webp",
  js: "js.webp",
  sass: "sass.webp",
  tailwind: "tailwindCss.webp",
  git: "git.webp",
  github: "github.webp",
  react: "react.webp",
  vite: "vite.svg",
  firebase: "firebase.webp",
  linux: "linux.webp",
  cli: "cli.webp",
  typeScript: "typeScript.webp",
  nextjs: "nextJs.webp",
};

const upComingSkills = {
  nodeJs: "nodejs.webp",
  expressJs: "express.webp",
  mongoDb: "mongoDB.webp",
};

export default function SkillsBadges({
  isLearntSkills = true,
  bg = "bg-sky-900",
}: SkillsBadgesProps) {
  const list = isLearntSkills ? skills : upComingSkills;

  return (
    <motion.div
      className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {Object.entries(list).map(([tech, iconSrc]) => (
        <Fragment key={tech}>
          <motion.div
            className={`group flex justify-center items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 ${bg}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image
              src={`/${iconSrc}`}
              alt={tech}
              title={tech}
              className="size-8 shrink-0 transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              width={32}
              height={32}
            />
            <span className="truncate text-sm font-semibold uppercase tracking-wider text-white">
              {tech}
            </span>
          </motion.div>
        </Fragment>
      ))}
    </motion.div>
  );
}