import Image from "next/image";
import Hero from "./Components/main/Hero";
import Navbar from "./Components/main/Navbar";
import Skills from "./Components/main/Skills";

export default function Home() {
  return(
    <main className="h-full w-full">

      <div className="flex flex-col  gap-20">
        <Hero/>
        <Skills/>
      </div>
    </main>
  )
}
