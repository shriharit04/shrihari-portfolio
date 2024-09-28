import Image from "next/image";
import Hero from "./Components/main/Hero";
import Navbar from "./Components/main/Navbar";

export default function Home() {
  return(
    <main className="h-full w-full">

      <div className="flex flex-col  gap-20">
        <Hero/>
      </div>
    </main>
  )
}
