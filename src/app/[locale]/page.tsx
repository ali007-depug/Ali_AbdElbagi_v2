import { Skills,Works,About,Hero,BlogOnHome } from "@/features/home";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await (params);

  return (
    <div>
      <Hero />
      <About />
      <Works />
      <Skills />
      <BlogOnHome locale={locale} />
    </div>
  );
}
