import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function ChangeLangButton({ language }: { language: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
 
  const langSwitch = (lng: string) => {
  // Remove current locale from pathname
  const segments = pathname.split("/");

  // Replace the locale segment
  segments[1] = lng;

  const newPathname = segments.join("/");

  router.push(newPathname);
  };


  return (
    <button
      className={`${
        locale === language
          ? `bg-p-color`
          : `bg-p-color/40 hover:bg-p-color cursor-pointer`
      } text-white text-sm px-2 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white  transition-all duration-300 ease-in-out`}
      onClick={() => langSwitch(language)}
    >
      {language === "en-US" ? "EN 🇺🇸" : "AR 🇸🇩"}
    </button>
  );
}
