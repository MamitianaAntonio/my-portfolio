import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Project from "./components/sections/Project.jsx";
import Skills from "./components/sections/Skills.jsx";
import Contact from "./components/sections/Contact.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SmokeyCursor from "./components/lightswind/smokey-cursor.js";


export const App = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <SmokeyCursor />
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={fadeInVariants}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={fadeInVariants}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={fadeInVariants}
      >
        <Project />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={fadeInVariants}
      >
        <Contact />
      </motion.div>
    </>
  );
};
