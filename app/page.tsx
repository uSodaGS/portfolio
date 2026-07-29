import Navbar from "@/components/layout/Navbar";
import Background from "@/components/ui/Background";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Goals from "@/components/sections/Goals";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Technologies from "@/components/sections/Technologies";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Goals />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}