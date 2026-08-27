export default function Experience() {
  const experiences = [
    {
      period: "September 2024",
      company: "TAG IP",
      location: "Ivandry - IBC Building",
      role: "IT Discovery Internship",
      description:
      "Developed a web interface for road traffic visualization using HTML, CSS and JavaScript, implemented an OSRM and Node.js based routing service, and explored Geographic Information Systems (GIS).",
      link: "https://traffic.tag-ip.com",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "OSRM"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-5 bg-(--bg-primary) transition-colors duration-300"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
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
              Experience
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
          />
          <p className="text-lg text-(--text-secondary) mt-4">
            My professional journey and internships
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-1 bottom-1 w-px bg-linear-to-b from-blue-500/50 via-purple-600/50 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{
                    background:
                    "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                    boxShadow: "0 0 12px var(--gradient-to)",
                  }}
                  aria-hidden="true"
                />

                {/* Period (left side on desktop) */}
                <div className="hidden md:flex md:justify-end md:pr-16">
                  <span className="text-lg font-bold text-(--text-secondary) pt-0.5">
                    {exp.period}
                  </span>
                </div>
                <div className="ml-16 md:ml-0 md:pl-16">
                  {/* Mobile period */}
                  <span className="md:hidden inline-flex text-sm font-bold text-(--text-secondary) mb-3">
                    {exp.period}
                  </span>

                  {/* Company & Role */}
                  <h3 className="text-2xl font-bold text-(--text-primary) mb-1">
                    {exp.company}
                  </h3>
                  <div
                    style={{
                      background:
                      "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-base font-semibold mb-1"
                  >
                    {exp.role}
                  </div>
                  <p className="text-sm text-(--text-secondary) mb-6">
                    {exp.location}
                  </p>

                  {/* Description */}
                  <p className="mb-6 text-(--text-secondary) leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Link & Tags */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:opacity-80"
                      style={{
                        background:
                        "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      traffic.tag-ip.com
                      <span aria-hidden="true">↗</span>
                    </a>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-500/10 border border-gray-500/30 text-(--text-secondary)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
