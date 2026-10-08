"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useProjects } from "@/context/ProjectContext";
import type { ProjectsContextType } from "../index";

export default function TapList() {
  const { selectedCategory, setSelectedCategory } =
    useProjects() as ProjectsContextType;
  const t = useTranslations();

  const list = [
    { key: "all", label: t("worksPage.works.filters.all") },
    { key: "personal", label: t("worksPage.works.filters.personal") },
    { key: "frontend mentor", label: t("worksPage.works.filters.frontend") },
    { key: "freelancing", label: t("worksPage.works.filters.freelancing") },
  ];

  return (
    <div
      role="tablist"
      className="mb-10 flex flex-wrap justify-center gap-2"
    >
      {list.map((item) => {
        const active = selectedCategory === item.key;
        return (
          <motion.button
            key={item.key}
            role="tab"
            aria-selected={active}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedCategory?.(item.key)}
            className={`rounded-full px-5 py-2 text-sm font-bold capitalize transition-colors duration-300 ${
              active
                ? "bg-s-color text-bg-color"
                : "bg-n-color/20 text-p-color hover:bg-n-color/30"
            }`}
          >
            {item.label}
          </motion.button>
        );
      })}
    </div>
  );
}