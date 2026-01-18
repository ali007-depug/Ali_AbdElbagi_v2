'use client";'

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useProjects } from "@/app/context/ProjectContext";
import { ProjectsContextType } from "../WorkCard";
export default function TapList() {
  const { selectedCategory, setSelectedCategory } =
    useProjects() as ProjectsContextType;
  const t = useTranslations();

  // Translated list labels
  const list = [
    { key: "all", label: t("worksPage.works.filters.all") },
    { key: "personal", label: t("worksPage.works.filters.personal") },
    { key: "frontend mentor", label: t("worksPage.works.filters.frontend") },
    { key: "freelancing", label: t("worksPage.works.filters.freelancing") },
  ];

  return (
    <div className="flex justify-center max-sm:flex-col my-10">
      {list.map((item) => (
        <motion.button
          key={item.key}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            selectedCategory === item.key ? "bg-s-color !text-bg-color " : ""
          } capitalize cursor-pointer sm:not-first:ml-2 max-sm:not-last:mb-2 px-2 py-3 rounded text-p-color bg-n-color/30 max-sm:min-w-20 sm:min-w-35 font-extrabold`}
          onClick={() => setSelectedCategory?.(item.key)}
        >
          {item.label}
        </motion.button>
      ))}
    </div>
  );
}
