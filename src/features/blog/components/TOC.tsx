import { getTranslations } from "next-intl/server";

interface Heading {
    id: string;
    text: string;
    level: number;
}
export default async function TableOfContents({ headings,locale }: { headings: Heading[] ,locale:string}) {

  const t = await getTranslations({namespace:'blogPage',locale});

  if (!headings.length) return null;

  return (
    <nav className="toc-container" aria-label={t('TOC')}>
      <h3 className="text-p-color font-bold text-xl mb-3">{t('TOC')}</h3>
      <ul className="flex gap-2 flex-col font-semibold min-w-full">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className="hover:text-s-color cursor-pointer transition-all duration-300 ease-in-out"
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}