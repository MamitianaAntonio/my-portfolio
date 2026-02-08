import "./Skills.css";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiJava,
  DiPython,
  DiGit,
  DiPostgresql,
  DiNodejs,
  DiLinux,
} from "react-icons/di";
import {
  SiSpringboot,
  SiLua,
  SiPrisma,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: DiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: DiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: DiReact, color: "#61DAFB" },
    { name: "Node.js", icon: DiNodejs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Java", icon: DiJava, color: "#007396" },
    { name: "Python", icon: DiPython, color: "#3776AB" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Lua", icon: SiLua, color: "#2C2D72" },
    { name: "PostgreSQL", icon: DiPostgresql, color: "#336791" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: DiGit, color: "#F05032" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
    { name: "Linux", icon: DiLinux, color: "#FCC624" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-b bg-var(--bg-secondary)"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
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
              Skills
            </span>
          </h2>
          <div
            style={{
              background:
                "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="w-24 h-1 bg-linear-to-r mx-auto rounded-full"
          ></div>

          <p className="text-lg text-(--text-secondary) max-w-2x">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-var(--bg-primary) backdrop-blur-sm rounded-xl p-6
                         border border-gray-700/50 hover:border-var(--bg-secondary)
                         transform hover:scale-110 transition-all duration-300
                         hover:shadow-2xl hover:shadow-purple-500/20
                         cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-600/10
                            rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              {/* Icon */}
              <div className="relative flex flex-col items-center justify-center space-y-3">
                <skill.icon
                  className="text-5xl transition-all duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />

                {/* Skill Name */}
                <span
                  className="text-var(--text-primary) text-sm font-medium text-center
                    group-hover:text-var(--text-primary) transition-colors duration-300"
                >
                  {skill.name}
                </span>
              </div>

              {/* Animated border effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 pointer-events-none"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="absolute inset-0 rounded-xl
                    opacity-20 blur-xl"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
