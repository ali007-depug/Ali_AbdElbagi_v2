import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillsBadgesProps {
  isLearntSkills?: boolean;
  bg?: string;
}
export default function SkillsBadges({
  isLearntSkills = true,
  bg = "bg-sky-900",
}:SkillsBadgesProps) {
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
  };
  
  const upComingSkills = {
    nodeJs: "nodejs.webp",
    expressJs: "express.webp",
    mongoDb: "mongoDB.webp",
    nextjs: "nextJs.webp",
  };

  return (
    <motion.div
      className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-6 pb-15`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {/* render learnt skill or upcoming skills "the ones that i want to learn in future" */}
      {isLearntSkills
        ? Object.entries(skills ?? {}).map(([tech, iconSrc], index) => (
            <Fragment key={index}>
              <motion.div
                className={`flex flex-col gap-4 items-center rounded-md shadow-2xl ${bg} `}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={`/${iconSrc}`}
                  alt={tech}
                  title={tech}
                  className="w-10 mt-2.5"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                <h1 className="uppercase text-white font-semibold mb-2 tracking-widest">
                  {tech}
                </h1>
              </motion.div>
            </Fragment>
          ))
        : Object.entries(upComingSkills ?? {}).map(([tech, iconSrc], index) => (
            <Fragment key={index}>
              <motion.div
                className={`flex flex-col gap-4 items-center rounded-md shadow-2xl ${bg} `}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={`/${iconSrc}`}
                  alt={tech}
                  title={tech}
                  className="w-10 mt-2.5"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                <h1 className="uppercase text-white font-semibold mb-2 tracking-widest">
                  {tech}
                </h1>
              </motion.div>
            </Fragment>
          ))}
    </motion.div>
  );
}
