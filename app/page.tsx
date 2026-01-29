import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Certifications from "../components/Certifications"
import Goals from "../components/Goals"
import Footer from "../components/Footer"
import Contact from "@/components/Contact";




export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <About />
      <Goals />
      <Certifications />
      <Footer />

    </>
  )
}
