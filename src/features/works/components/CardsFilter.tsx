import { useProjects } from "@/context/ProjectContext";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { useTranslations } from "next-intl";
import Card from "./Card";
import type {Project, ProjectsContextType } from "../types";


export interface WorkCardsProps {
  customStyle?: string;
  numberOfCards: number;
}

export default function CardsFilter({
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
