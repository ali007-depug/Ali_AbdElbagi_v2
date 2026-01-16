'use client';
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Nav from "./HeaderNav";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const  t  = useTranslations();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    let lastScrollY = window.scrollY; // current scroll value
    const handleScroll = () => {
      // 400 > 300 & 400
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling DOWN and past 400
        setShowHeader(true);
      } else if (window.scrollY < lastScrollY) {
        // Scrolling UP
        setShowHeader(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    // // clean-up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      ></div>
      {/* === End overlay === */}

      {/* header  */}
      <header
        className={`flex fixed top-0 w-full bg-white items-center justify-between py-4 px-5 md:px-10 z-30 transition-discrete transition-all duration-200 ${
          showHeader ? "opacity-0 invisible" : "opacity-100 visible"
        } `}
      >
        {/* avatar + info  */}
        <div className="header__avatarWithInfo md:w-1/3">
          {/* avatar */}
          <Link href="/" className="flex items-center gap-3 ">
            <Image
              className="size-10 object-cover rounded-full"
              src="/avatar.webp"
              alt={t(`header.avatarAlt`)}
              width={50}
              height={50}
            />
            {/* info */}
            <div className="header__info text-p-color">
              <h2 className={`text-base font-bold sm:text-lg`}>
                {t(`header.name`)}
              </h2>
              <p className="text-xs font-semiboldbold">
                {t(`header.jobTitle`)}
              </p>
            </div>
          </Link>
        </div>
        {/* === End avatar + info === */}

        {/*==== Nav ====== */}
        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {/* === End nav === */}
      </header>
      {/* === End header === */}
    </>
  );
}

