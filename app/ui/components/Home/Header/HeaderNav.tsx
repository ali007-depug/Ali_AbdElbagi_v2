import ChangeLangButton from "./LangButton";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface NavProp {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Nav({ isMenuOpen, toggleMenu, }: NavProp) {
  const location = usePathname();
  const params = useParams();

  
  const navLinks = [
    { id: 0, link: "home" },
    { id: 1, link: "about" },
    { id: 2, link: "works" },
    { id: 3, link: "skills" },
    { id: 4, link: "blog" },
  ];

  const  t  = useTranslations();

  const links = navLinks.map((link) => {
    const isActive =
      link.link === "blog"
        ? location.startsWith(`/${params.locale}/blog`) 
        : link.link === "home"
        ? location === "/"
        : location === `/${link.link}`;

    const to =
      link.link === "home"
        ? "/"
        : `/${link.link}`;

    return (
      <li key={link.id}>
        <Link
          href={to}
          onClick={isMenuOpen ? toggleMenu : undefined}
          className={`transition-all duration-100 ease-in-out ${
            isActive ? "border-b-p-color border-b-[3px]" : ""
          }`}
        >
          {t(`header.menu.${link.link}`)}
        </Link>
      </li>
    );
  });

  return (
    <nav aria-label="mainNav">
      {/* show hamburger menu on the mobile screen */}
      <button
        onClick={toggleMenu}
        className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-p-color cursor-pointer"
        aria-expanded={isMenuOpen}
        aria-controls="mobileMenu"
        aria-label={
          isMenuOpen ? t("header.aria.closeMenu") : t("header.aria.openMenu")
        }
      >
        {isMenuOpen ? <IoClose size={25}/> : <IoMenu size={25}/>}
      </button>

      <ul
        id={isMenuOpen ? "mobileMenu" : "desktopMenu"}
        className={
          isMenuOpen
            ? "flex flex-col justify-center items-center absolute right-0 mt-4 w-full text-center bg-s-color min-h-90 [&_li]:w-fit [&_a]:px-4 [&_a]:py-2 [&_a]:min-w-[90px] [&_a]:inline-block [&_a]:bg-bg-color [&_a]:text-p-color [&_a]:my-4 [&_a]:rounded-[5px] [&_a]:capitalize [&_a]:font-bold [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white pb-3"
            : "hidden sm:flex sm:flex-wrap sm:justify-center space-x-2  [&_li]:w-fit  [&_a]:px-4 [&_a]:py-2  [&_a]:inline-block  [&_a]:capitalize [&_a]:font-bold [&_a]:text-p-color [&_a]:text-base  [&_a]:hover:border-b-[3px] [&_a]:hover:border-s-color"
        }
      >
        {links}
        {/* change lang buttons wrapper */}
        <div className={`flex gap-2 `}>
          <ChangeLangButton language="en-US" />
          <ChangeLangButton language="ar" />
        </div>
      </ul>
    </nav>
  );
}
