import ChangeLangButton from "./LangButton";
import { Link, usePathname } from "@/../i18n/navigation";
import { useTranslations } from "next-intl";
import {
  HomeIcon,
  InfoIcon,
  BriefcaseIcon,
  SparklesIcon,
  NewspaperIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

interface NavProp {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const navLinks = [
  { id: 0, link: "home", icon: <HomeIcon size={15} /> },
  { id: 1, link: "about", icon: <InfoIcon size={15} /> },
  { id: 2, link: "works", icon: <BriefcaseIcon size={15} /> },
  { id: 3, link: "skills", icon: <SparklesIcon size={15} /> },
  { id: 4, link: "blog", icon: <NewspaperIcon size={15} /> },
];

export default function Nav({ isMenuOpen, toggleMenu }: NavProp) {
  const pathname = usePathname();
  const t = useTranslations();

  const links = navLinks.map((link) => {
    const isActive =
      link.link === "home"
        ? pathname === "/"
        : link.link === "blog"
          ? pathname.startsWith("/blog")
          : pathname.startsWith(`/${link.link}`);

    const to = link.link === "home" ? "/" : `/${link.link}`;

    return (
      <li key={link.id}>
        <Link
          href={to}
          onClick={isMenuOpen ? toggleMenu : undefined}
          className={`flex min-w-fit items-center gap-2 transition-colors duration-200 ${
            isActive ? "text-sky-500" : "text-p-color hover:text-sky-500"
          }`}
        >
          {link.icon}
          {t(`header.menu.${link.link}`)}
        </Link>
      </li>
    );
  });

  return (
    <nav aria-label="mainNav">
      <button
        onClick={toggleMenu}
        className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-p-color sm:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobileMenu"
        aria-label={isMenuOpen ? t("header.aria.closeMenu") : t("header.aria.openMenu")}
      >
        {isMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
      </button>

      <ul
        id={isMenuOpen ? "mobileMenu" : "desktopMenu"}
        className={
          isMenuOpen
            ? "absolute end-0 mt-4 flex min-h-90 w-full flex-col items-center justify-center gap-3 bg-white text-center pb-4 shadow-lg [&_a]:inline-flex [&_a]:min-w-[110px] [&_a]:justify-center [&_a]:rounded-full [&_a]:bg-p-color/5 [&_a]:px-4 [&_a]:py-2 [&_a]:font-bold [&_a]:capitalize [&_a]:text-p-color"
            : "hidden sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 [&_a]:font-bold [&_a]:capitalize"
        }
      >
        {links}
        <div className="flex gap-2">
          <ChangeLangButton language="en-US" />
          <ChangeLangButton language="ar" />
        </div>
      </ul>
    </nav>
  );
}