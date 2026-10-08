import { useProjects } from "@/context/ProjectContext";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "./Card";
import type { Project, ProjectsContextType } from "../types";

export interface WorkCardsProps {
  customStyle?: string;
  numberOfCards: number;
}

export default function CardsFilter({ customStyle, numberOfCards }: WorkCardsProps) {
  const { filterdProjects } = useProjects() as ProjectsContextType;
  const t = useTranslations();

  const projects: Project[] = filterdProjects;
  const visibleProjects = projects.slice(0, numberOfCards);

  return (
    <>
      {visibleProjects.map((work, index) => (
        <motion.div
          key={work.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.08, ease: "easeOut" }}
        >
          <Card
            title={work.title}
            modalTitle={work.modalTitle}
            description={work.description}
            details={work.details}
            thumb={work.imgs[0]}
            href={work.href}
            repo={work.repo}
            builtWith={work.builtWith}
            customStyle={customStyle}
            t={t}
          />
        </motion.div>
      ))}
    </>
  );
}