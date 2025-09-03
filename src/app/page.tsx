import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Page(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <FAQ />
      <Contact />
    </main>
  );
}