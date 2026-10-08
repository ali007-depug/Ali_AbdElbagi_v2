import { FaCode } from "react-icons/fa6";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import Image from "next/image";
import { Link } from "@/../i18n/navigation";

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

export default function Card({
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
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-s-color/10 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl ${customStyle ?? ""}`}
    >
      {/* thumbnail */}
      <Link
        href={`/works/${modalTitle.toLowerCase()}`}
        scroll={false}
        className="relative block aspect-video overflow-hidden bg-s-color"
      >
        <Image
          src={`/${thumb}`}
          fill
          alt={title}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="eager"
        />

        {/* hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <span className="rounded-full bg-white/90 p-3 text-p-color shadow-xl">
            <FaExternalLinkAlt size={18} />
          </span>
          <span className="text-sm font-bold uppercase tracking-widest text-white">
            {t("myWorks.projects.viewDetails") || "Details"}
          </span>
        </div>
      </Link>

      {/* content */}
      <div className="flex flex-1 flex-col gap-3 p-5 text-start">
        <div>
          <h2 className="text-xl font-bold text-p-color">{title}</h2>
          <h4 className="text-sm font-semibold capitalize text-s-color">{details}</h4>
        </div>

        {/* built with */}
        {Object.keys(builtWith ?? {}).length > 0 && (
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            {Object.entries(builtWith).map(([tech, iconSrc]) => (
              <Image
                key={tech}
                src={`/${iconSrc}`}
                width={24}
                height={24}
                alt={tech}
                title={tech}
                className="size-6 rounded-md bg-s-color/10 p-1"
                loading="lazy"
                fetchPriority="low"
              />
            ))}
          </div>
        )}

        {/* links */}
        <div className="flex items-center gap-2 border-t border-s-color/10 pt-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold text-p-color transition-colors duration-300 hover:bg-p-color/10"
            title={t("myWorks.projects.viewProject")}
          >
            <FaEye size={16} />
            {t("myWorks.projects.liveSite")}
          </a>

          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold text-sky-700 transition-colors duration-300 hover:bg-sky-700/10"
            title={t("myWorks.projects.viewCode")}
          >
            <FaCode size={16} />
            {t("myWorks.projects.code")}
          </a>
        </div>
      </div>
    </article>
  );
}