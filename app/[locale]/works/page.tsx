import ProjectsTaps from "@/app/ui/components/worksPage/ProjectsTaps";
import WorksHeader from "@/app/ui/components/worksPage/WorksHeader";

export default async function MyWorks({ params } :{params :Promise<{ locale: string }>}) {
  const { locale } = await params;
  return (
      <section className="px-dyp py-5 md:py  relative top-[76px] sm:max-md:top-[111px]">
        <WorksHeader locale={locale} />
        {/* Projects List */}
        <ProjectsTaps />
      </section>
  );
}
