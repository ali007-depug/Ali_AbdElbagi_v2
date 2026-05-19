"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useProjects } from "@/src/context/ProjectContext";
import {
  Project,
  ProjectsContextType,
} from "@/src/app/[locale]/works/_components/WorkCard";
import ProjectContent from "@/src/app/[locale]/_components/ProjectContent";
export default function ProjectModal({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = use(params);
  const router = useRouter();
  const { filterdProjects } = useProjects() as ProjectsContextType;

  // Find project data based on the dynamic title/id
  const project = filterdProjects.find(
    (p: Project) => p.modalTitle.toLowerCase() === title.toLowerCase(),
  );

  if (!project) return null;
  console.log(project.imgs);

  return (
    <div className="fixed inset-0 z-100  flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => router.back()}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-linear-to-b from-white via-white to-transparent">
          <button
            onClick={() => router.back()}
            className="p-2 transition-colors bg-slate-100 rounded-full hover:bg-red-100 group cursor-pointer"
          >
            <FaTimes
              className="text-slate-500 group-hover:text-red-500"
              size={20}
            />
          </button>
        </div>

        <ProjectContent title={title} />
      </motion.div>
    </div>
  );
}
