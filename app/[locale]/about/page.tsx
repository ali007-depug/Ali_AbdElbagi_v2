import About from "@/app/ui/components/AboutPage/About";
import Sidepanel from "@/app/ui/components/SidePanel";
import { getTranslations } from "next-intl/server";

export default async function AboutMe({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ namespace: "aboutPage", locale });
  return (
    <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px]  bg-p-color">
      {/* Section title */}
      <h1 className="text-dyTitle mx-auto w-fit font-bold text-white mb-5">
        {t("about.title")}
      </h1>

      <Sidepanel />

      <About />
    </section>
  );
}
