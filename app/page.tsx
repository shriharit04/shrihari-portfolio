import AboutMe from "./Components/main/AboutMe";
import Hero from "./Components/main/Hero";
import Projects from "./Components/main/Projects";
import Skills from "./Components/main/Skills";
import Footer from "./Components/main/Footer";
export default function Home() {
  return(
    <main className="h-full w-full">

      <div className="flex flex-col gap-20 h-screen overflow-y-visible scroll-smooth snap-y snap-proximity">
        <Hero className="md:snap-start min-h-screen"/>
        <AboutMe  className="md:pt-32 pt-16 md:snap-start min-h-screen"/>
        <Skills className="pt-32 md:snap-start min-h-screen"/>
        <Projects className="pt-32 md:snap-start"/>
 
        <Footer/>
      </div>
    </main>
  )
}
