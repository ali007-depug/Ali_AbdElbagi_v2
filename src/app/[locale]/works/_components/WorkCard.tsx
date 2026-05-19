import { useProjects } from "@/src/context/ProjectContext";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { FaCode } from "react-icons/fa6";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface WorkCardsProps {
  customStyle?: string;
  numberOfCards: number;
}

export interface Project {
  id: string;
  title: string;
  modalTitle: string;
  description?: string;
  details: string;
  imgs: string[];
  href: string;
  repo: string;
  builtWith: { [key: string]: string };
}
export interface ProjectsContextType {
  filterdProjects: Project[];
  allProjects?: number;
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
}
export default function WorkCards({
  customStyle,
  numberOfCards,
}: WorkCardsProps) {
  const { filterdProjects } = useProjects() as ProjectsContextType;
  const t = useTranslations();

  const filterdProjectsArray: Project[] = filterdProjects;
  const mapinnCards = filterdProjectsArray.map((work, index) => {
    if (index <= numberOfCards) {
      return (
        <Fragment key={work.id}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <Card
              title={work.title}
              modalTitle={work.modalTitle}
              description={work.description}
              details={work.details}
              thumb={work.imgs[0]} // Use the first image as the thumbnail
              href={work.href}
              repo={work.repo}
              builtWith={work.builtWith}
              customStyle={customStyle}
              t={t}
            />
          </motion.div>
        </Fragment>
      );
    }
  });

  return mapinnCards;
}

interface CardProps {
  title: string;
  modalTitle: string;
  details: string;
  description?: string;
  thumb: string;
  href: string;
  repo: string;
  customStyle?: string;
  builtWith: { [key: string]: string };
  t: (key: string) => string;
}
// Card component
function Card({
  title,
  modalTitle,
  details,
  thumb,
  href,
  repo,
  builtWith,
  customStyle,
  t,
}: CardProps) {
  return (
    <article
      className={`work bg-white shadow-2xl shadow-s-color rounded-md overflow-hidden ${customStyle}`}
    >
      <div className="relative">
        {/* thumb wrapper */}
        <Link
          href={`/works/${modalTitle.toLowerCase()}`}
          scroll={false}
          className="relative group block overflow-hidden rounded-md bg-s-color"
        >
          {/* Image with subtle scale-up on hover */}
          <Image
            src={`/${thumb}`}
            width={350}
            height={350}
            alt={title}
            className="img__thumb sm:w-[90%] mx-auto p-1.5 sm:p-2.5 
               group-hover:scale-110 group-hover:w-full group-hover:p-0 
               transition-all duration-500 ease-out object-cover"
            sizes="350px"
            loading="eager"
          />

          {/* Modern Overlay: Glassmorphism effect */}
          <div
            className="absolute inset-0 z-10 flex flex-col justify-center items-center 
                  bg-slate-900/40 backdrop-blur-[2px] 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-300 ease-in-out"
          >
            {/* Animated "More" Content */}
            <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <div className="bg-white/90 p-3 rounded-full mb-2 shadow-xl text-p-color">
                <FaExternalLinkAlt size={20} className="animate-pulse" />
              </div>
              <span className="text-white font-bold text-lg tracking-widest uppercase">
                {t("myWorks.projects.viewDetails") || "Details"}
              </span>
            </div>

            {/* Subtle Corner Accents (Optional Modern Touch) */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
          </div>
        </Link>
        {/* projects content wrapper */}
        <div className="work__content text-center px-4 mt-6 my-3">
          {/* project name */}
          <h2 className="text-p-color text-xl font-bold">{title}</h2>
          {/* project details */}
          <h4 className="text-s-color text-sm capitalize font-semibold">
            {details}
          </h4>

          {/* Tech that used in projects wrapper & repo */}
          <div className="mt-4 flex items-center justify-between gap-3.5 @container">
            {/* Tech icons */}
            <div className="flex gap-3 items-center">
              <span className="text-sky-800 font-bold hidden md:blockg">
                {t("myWorks.projects.builtWith")}
              </span>
              {Object.entries(builtWith ?? {}).map(([tech, iconSrc], index) => (
                <Image
                  key={index}
                  src={`/${iconSrc}`}
                  width={250}
                  height={250}
                  alt={tech}
                  title={tech}
                  className="@md:size-8 size-6"
                  loading="lazy"
                  fetchPriority="low"
                />
              ))}
            </div>

            {/* Work links */}
            <div className="flex gap-2.5">
              {/* Live Site */}
              <a
                href={href}
                target="_blank"
                className="flex items-center gap-1 rounded-[5px] text-p-color font-semibold @md:hover:bg-p-color/20 transition-all duration-300 ease-in-out border-s-color @md:p-2"
                title={t("myWorks.projects.viewProject")} // ✅ Translated tooltip
              >
                <span className="block @max-sm:p-2 rounded transition-all duration-300 ease-linear @max-sm:hover:bg-p-color/20">
                  <FaEye size={22} color="#223549" />
                </span>
                <h5 className="@md:block hidden w-fit">
                  {t("myWorks.projects.liveSite")}
                </h5>
              </a>

              {/* GitHub Repo */}
              <a
                href={repo}
                target="_blank"
                className="flex items-center gap-1 rounded-[5px] text-p-color font-semibold @md:hover:bg-p-color/20 transition-all duration-300 ease-in-out border-s-color @md:p-2"
                title={t("myWorks.projects.viewCode")}
              >
                <span className="block @max-sm:p-2 rounded transition-all duration-300 ease-linear @max-sm:hover:bg-p-color/20">
                  <FaCode size={23} color="oklch(50% 0.134 242.749) " />
                </span>
                <h5 className="@md:block hidden">
                  {t("myWorks.projects.code")}
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
