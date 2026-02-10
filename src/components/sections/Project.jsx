import Card from "../ui/Card";

export default function Project() {
  const projectsData = [
    {
      title: "TaskFlow",
      description:
        "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes. Développée avec React et Node.js pour une expérience utilisateur optimale.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      link: "https://demo.example.com",
      githubLink: "https://github.com/username/project",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Tableau de bord analytique avec visualisations interactives et rapports en temps réel pour le suivi des KPIs d'entreprise.",
      tags: ["React", "D3.js", "TypeScript", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "https://demo.example.com",
      githubLink: "https://github.com/username/project",
    },
    {
      title: "App Mobile Fitness",
      description:
        "Application mobile de suivi fitness avec programmes d'entraînement personnalisés et tracking des calories en temps réel.",
      tags: ["React Native", "Redux", "Firebase", "API REST"],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      link: null,
      githubLink: "https://github.com/username/project",
    },
  ];

  return (
    <section id="projects" className="py-20 px-5 bg-(--bg-primary) min-h-screen transition-colors duration-300">
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
