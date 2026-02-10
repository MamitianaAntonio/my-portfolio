import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Project from "./components/sections/Project.jsx";
import Skills from "./components/sections/Skills.jsx";
import Contact from "./components/sections/Contact.jsx";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};
