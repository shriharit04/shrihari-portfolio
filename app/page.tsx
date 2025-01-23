import AboutMe from "./Components/main/AboutMe";
import ComingSoon from "./Components/main/ComingSoon";
import ContactMe from "./Components/main/ContactMe";
import Hero from "./Components/main/Hero";
import Projects from "./Components/main/Projects";
import Skills from "./Components/main/Skills";

export default function Home() {
  return(
    <main className="h-full w-full">

      <div className="flex flex-col gap-20 h-screen overflow-y-scroll scroll-smooth snap-y snap-proximity">
        <Hero className="snap-start min-h-screen"/>
        <AboutMe  className="pt-32 snap-start min-h-screen"/>
        <Skills className="pt-32 snap-start min-h-screen"/>
        <Projects className="pt-32 snap-start"/>
        {/* <KnowMore className="pt-32 snap-start h-screen"/>
        <ContactMe className="pt-32 snap-start h-screen"/> */}
        <ComingSoon/>
      </div>
    </main>
  )
}
