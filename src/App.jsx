import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <p className="text-center text-text-secondary py-8">© 2024 Antonio. Tous droits réservés.</p>
    </>
  );
};
