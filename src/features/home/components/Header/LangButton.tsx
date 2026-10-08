import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/../i18n/navigation";

export default function ChangeLangButton({ language }: { language: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <button
      className={`rounded-md px-2.5 py-1.5 text-sm font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ${
        locale === language ? "bg-p-color" : "cursor-pointer bg-p-color/40 hover:bg-p-color"
      }`}
      onClick={() => router.push(pathname, { locale: language })}
    >
      {language === "en-US" ? "EN 🇺🇸" : "AR 🇸🇩"}
    </button>
  );
}