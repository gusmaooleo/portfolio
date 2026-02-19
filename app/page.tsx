import { ProjectsSection } from "@/components/sections/Projects";
import { AboutMe } from "@/components/sections/AboutMe";
import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/ui/header-2";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsSection />
    </main>
  );
}
