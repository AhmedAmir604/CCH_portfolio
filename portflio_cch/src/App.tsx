import Contact from "./components/Contact";
import Footer from "./components/footer";
import { Hero } from "./components/hero";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Resume from "./components/Resume";
import Skills from "./components/skills";

export default function App() {
  return (
    <main className=" bg-[#101820] flex flex-col items-center gap-[3rem]">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
