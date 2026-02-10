import React, { useEffect, useState } from "react";
import "./Hero.css";
import Button from "../ui/Button";

export default function Hero() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ["Full-Stack Web Developer", "Modern Interfaces", "Clean Code"];

  const [text, setText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setText(roles[0]);
      return;
    }

    const i = loopNum % roles.length;
    const fullText = roles[i];

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1),
        );

        if (!isDeleting && text === fullText) {
          setTimeout(() => setIsDeleting(true), 700);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setLoopNum((n) => n + 1);
        }
      },
      isDeleting ? 50 : 120,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, roles]);

  return (
    <section id="about" aria-labelledby="hero-name" className="hero">
      <div className="hero-inner">
        {/* Photo */}
        <div className="hero-photo-wrapper">
          <div className="hero-glow" />
          <img
            src="/images/me.jpg"
            alt="Portrait of RATOLOJANAHARY Mamitiana Antonio"
            loading="lazy"
            className="hero-photo"
          />
        </div>

        {/* Content */}
        <div className="hero-content">
          <h1
            id="hero-name"
            className="hero-name bg-linear-to-r from-(--gradient-from) to-(--gradient-to) bg-clip-text text-transparent brightness-95"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            RATOLOJANAHARY Mamitiana Antonio
          </h1>
          <p className="hero-role">
            <span>{text}</span>
            <span className="caret" aria-hidden />
          </p>

          <p className="hero-description text-lg text-(--text-secondary) max-w-2xl">
            I build modern, accessible web applications with a strong focus on
            clean interfaces, performance, and developer experience.
          </p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
