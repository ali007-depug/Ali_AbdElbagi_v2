"use client";

import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";
import { useProjects } from "@/src/context/ProjectContext";
import { useTranslations } from "next-intl";
import {
  Project,
  ProjectsContextType,
} from "@/src/app/[locale]/works/_components/WorkCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectContentProps {
  title: string;
}

export default function ProjectContent({ title }: ProjectContentProps) {
  const t = useTranslations();
  const { filterdProjects } = useProjects() as ProjectsContextType;

  const project = filterdProjects.find(
    (p: Project) => p.modalTitle.toLowerCase() === title.toLowerCase(),
  );

  if (!project) return null;

  return (
    <div className="px-6 pb-10 sm:px-10">
      {/* Hero Section: Image and Basic Info */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image Container / Carousel */}
        <div className="w-full h-full">
          <Carousel className="w-full h-full group">
            <CarouselContent className="h-full">
              {project.imgs?.map((screenshot, idx) => (
                <CarouselItem key={idx} className="relative aspect-video">
                  <div className="relative w-full h-full">
                    <Image
                      src={`/${screenshot}`}
                      alt={`${project.title} Screenshot ${idx + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Carousel>
        </div>

        {/* Project details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-sky-600">
            {project.details}
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-sky-800 text-white rounded-lg font-bold hover:bg-sky-900 transition-all shadow-lg shadow-sky-800/20"
            >
              <FaEye size={18} /> {t("myWorks.projects.liveSite")}
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border-2 border-slate-200 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-all"
            >
              <FaGithub size={18} /> {t("myWorks.projects.code")}
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-slate-100" />

      {/* Details Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            About the Project
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {project.description ||
              "This project was built focusing on performance, accessibility, and modern UI/UX principles. It leverages cutting-edge technology to provide a seamless user experience."}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(project.builtWith ?? {}).map(
              ([tech, iconSrc], idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <Image
                    src={`/${iconSrc}`}
                    width={24}
                    height={24}
                    alt={tech}
                  />
                  <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                    {tech}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
