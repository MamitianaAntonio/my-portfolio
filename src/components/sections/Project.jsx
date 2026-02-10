import Card from "../ui/Card";

export default function Project() {
  const projectsData = [
    {
      title: "TaskFlow",
      description:
        "Task management platform designed to organize projects, track tasks, and improve productivity with a smooth and intuitive user experience.",
      tags: [
        "React",
        "Node.js",
        "Prisma",
        "Express",
        "PostgresQL",
        "Express",
        "JWT",
        "Vite",
        "TailwindCSS",
        "Typescript",
      ],
      image: "/projects/taskflow.png",
      link: "",
      githubLink: "https://github.com/MamitianaAntonio/task-flow-frontend",
    },
    {
      title: "Simple Pokedex",
      description:
        "Interactive Pokédex built with React, allowing users to search Pokémon and view detailed information such as stats, types, and abilities through a clean and responsive interface.",
      tags: ["React", "Vite", "TailwindCSS", "Axios", "PokéAPI"],
      image: "/projects/pokedex.png",
      link: "https://simple-pokedex-peach.vercel.app",
      githubLink: "https://github.com/MamitianaAntonio/simple-pokedex",
    },
    {
      title: "My lazyvim setup",
      description:
        "Personal LazyVim configuration with plugins and key mappings for a productive development environment.",
      tags: ["Neovim", "lazy.nvim", "Lua", "Tmux"],
      image: "/projects/lazy.png",
      link: null,
      githubLink: "https://github.com/MamitianaAntonio/my-lazyvim-setup2",
    },
    {
      title: "My Portfolio",
      description:
        "Personal developer portfolio showcasing my projects, skills, and design decisions, built with React and Tailwind CSS for a clean and responsive experience.",
      tags: ["React", "Tailwind CSS", "Vite", "Framer Motion", "EmailJS"],
      image: "/projects/portfolio.png",
      githubLink: "https://github.com/MamitianaAntonio/my-portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-5 bg-(--bg-primary) min-h-screen transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-var(--text-white) mb-4">
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-transparent bg-clip-text"
            >
              Projects
            </span>
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto">
            Discover a selection of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
