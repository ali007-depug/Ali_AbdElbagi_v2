import Hero from "../ui/components/Home/Hero";
import About from "../ui/components/Home/About/About";
import Skills from "../ui/components/Home/Skills";
import Work from "../ui/components/Home/Works";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Work/>
      <Skills />
    </div>
  );
}
