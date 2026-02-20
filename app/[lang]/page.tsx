import { ProjectsSection } from "@/components/sections/Projects";
import { AboutMe } from "@/components/sections/AboutMe";
import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/ui/header-2";
import { StackSection } from "@/components/sections/Stack";
import { ContactMe } from "@/components/sections/ContactMe";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <StackSection />
      <ContactMe />
      <Footer />
    </main>
  );
}
