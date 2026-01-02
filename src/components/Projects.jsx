import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Songfess",
    description:
      "Website mengirim pesan secara anonymous.",
    tech: ["React.vite", "tailwind", "Supabase"],
    image: "/foto-songfess.png",
    demo: "https://songfess.site",
    code: "https://github.com/aprilocikal/songfess",
    category: "Public",
  },
  {
    title: "Tiket konser",
    description:
      "Website pemesanan dengan fitur cart, checkout, realtime, dan Supabase.",
    tech: ["HTML", "JS", "CSS", "Supabase"],
    image: "/foto-tiket-konser.png",
    demo: "https://tiket-konser.vercel.app/",
    code: "https://github.com/aprilocikal/tiket_konser",
    category: "E-Commerce",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-cyan-100"
    >
      {/* soft background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.15),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase text-sky-600 bg-sky-100 px-4 py-2 rounded-full border border-sky-200">
            Portfolio Showcase
          </span>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Exclusive
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Exclusive creations in modern web development, crafted with
            cutting-edge technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                  : "bg-white/70 text-slate-600 border border-sky-200 hover:bg-sky-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Regular Projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(activeFilter === "All" ? regularProjects : filteredProjects).map(
            (project, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl rounded-2xl border border-sky-200 shadow transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover rounded-t-2xl"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-sky-500 text-white py-3 rounded-lg text-sm font-semibold"
                    >
                      Live Demo
                    </a>
                    {project.code !== "#" && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-sky-300 text-sky-700 py-3 rounded-lg text-sm font-semibold"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
