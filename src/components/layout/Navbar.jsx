import { useEffect, useState } from "react";
import { DarkModeToggle } from "../ui/DarkModeToggle";
import { useTheme } from "../hooks/useTheme.js";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, setIsDarkMode } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`px-2 fixed top-0 w-full z-50  transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg border-b border-(--nav-border-color)"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border m-2 rounded-lg border-(--nav-border-color)">
        <div className="flex justify-between items-center h-15">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity"
          >
            R.Antonio
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-primary hover:text-accent transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              {/* desktop toggle (visible md+) */}
              <DarkModeToggle
                isDarkMode={isDarkMode}
                onChange={setIsDarkMode}
              />
            </div>

            <div className="md:hidden flex items-center gap-4">
              <DarkModeToggle
                isDarkMode={isDarkMode}
                onChange={setIsDarkMode}
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-primary bg-primary/5 
                hover:bg-accent/15 hover:text-accent
                border border-(--border-color) rounded-md
                    hover:text-accent transition-all duration-300 active:scale-95"
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon
                  icon={isOpen ? faXmark : faBars}
                  className={`w-4 h-4 transition-all duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
                  size="lg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`
            w-full mx-auto mt-4 md:hidden rounded-lg
            bg-(--bg-primary) backdrop-blur-lg
            shadow-sm border border-(--nav-border-color)
            overflow-hidden
            transform transition-all duration-300 ease-out
            ${
            isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
            }
        `}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="
            block px-6 py-4 text-primary font-medium
            hover:bg-accent/10 hover:text-accent
            transition-all duration-300
            border-b last:border-b-0
            border-(--nav-border-color)
            active:scale-[0.98]
            "
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
