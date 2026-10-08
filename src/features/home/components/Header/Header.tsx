"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Nav from "./HeaderNav";
import { Link } from "@/../i18n/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const t = useTranslations();

  function toggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHideHeader(true);
      } else if (window.scrollY < lastScrollY) {
        setHideHeader(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black/60 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
        onClick={toggleMenu}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-30 flex w-full max-w-full items-center justify-between border-b border-p-color/5 bg-white/90 px-4 py-3 backdrop-blur-sm transition-all duration-200 md:px-10 ${
          hideHeader ? "invisible -translate-y-full opacity-0" : "visible translate-y-0 opacity-100"
        }`}
      >
        <div className="min-w-0 md:w-1/3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              className="size-10 flex-shrink-0 rounded-full object-cover ring-2 ring-sky-400/30"
              src="/me11.webp"
              alt={t("header.avatarAlt")}
              width={50}
              height={50}
            />
            <div className="min-w-0 text-p-color">
              <h2 className="truncate text-base font-bold sm:text-lg">{t("header.name")}</h2>
              <p className="truncate text-xs font-semibold text-s-color">{t("header.jobTitle")}</p>
            </div>
          </Link>
        </div>

        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
}