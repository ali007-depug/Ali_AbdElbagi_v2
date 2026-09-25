'use client';
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Sidepanel() {
  const  t = useTranslations();
  const [showSidePanel, setShowSidePanel] = useState(false);
    const params = useParams();

  const isArabic = params.locale === "ar";

  function togglePanel() {
    setShowSidePanel(!showSidePanel);
  }

  return (
    <div
      className={`fixed top-20 w-[350px] rounded bg-s-color px-10 transition-all duration-300 ease-in-out z-50 ${
        // handle direction based on language
        isArabic
          ? showSidePanel
            ? "right-[-10px]"
            : "right-[-345px]"
          : showSidePanel
          ? "left-[-10px]"
          : "left-[-345px]"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <h3 className="text-2xl text-bg-color font-bold my-3">
        {t("aboutPage.sidepanel.greeting")}{" "}
        <span className="text-white font-extrabold">{t("aboutPage.sidepanel.name")}</span>{" "}
        🙋‍♂️
      </h3>

      <h4 className="text-white font-bold">{t("aboutPage.sidepanel.iamA")}</h4>

      <ul className="space-y-1 text-white rounded py-4 w-fit [&_li]:font-bold">
        <li>{t("aboutPage.sidepanel.roles.webDev")}</li>
        <li>{t("aboutPage.sidepanel.roles.engineer")}</li>
        <li>{t("aboutPage.sidepanel.roles.writer")}</li>
        <li>{t("aboutPage.sidepanel.roles.reader")}</li>
      </ul>

      {/* arrow toggle button */}
      <div
        className={`bg-bg-color shadow-md rounded-full absolute ${
          isArabic ? "left-[-35px]" : "right-[-35px]"
        } top-[calc(190px/2)] w-[29px] h-[30px] p-5 cursor-pointer`}
        onClick={togglePanel}
      >
        <div
          className={`size-5 relative top-[-10px] border-[3px] border-t-p-color border-r-p-color border-l-0 border-b-0 transition-all duration-300 ease-in-out ${
            isArabic
              ? !showSidePanel
                ? "rotate-[220deg] right-[-15px]"
                : "rotate-[40deg] right-[-7px]"
              : !showSidePanel
              ? "rotate-[40deg] left-[-15px]"
              : "rotate-[220deg] left-[-7px]"
          }`}
        ></div>
      </div>
    </div>
  );
}
