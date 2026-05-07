// import Hero from "../../components/ui/components/Home/Hero";
import Hero from "./_components/Hero";
import About from "./_components/About/About";
import Skills from "./_components/Skills";
import Work from "./_components/Works";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <Skills />
    </div>
  );
}
