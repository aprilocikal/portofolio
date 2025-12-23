import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSupabase,
  SiVite,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    level: 75,
    category: "Frontend",
    description: "Semantic markup & accessibility",
    color: "orange",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: 80,
    category: "Frontend",
    description: "Modern layouts & animations",
    color: "blue",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 80,
    category: "Frontend",
    description: "ES6+ & modern features",
    color: "yellow",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: 65,
    category: "Frontend",
    description: "Hooks & component architecture",
    color: "cyan",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    level: 50,
    category: "Frontend",
    description: "Utility-first CSS framework",
    color: "sky",
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    level: 70,
    category: "Backend",
    description: "Real-time database & authentication",
    color: "green",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    level: 75,
    category: "Backend",
    description: "Relational database & SQL queries",
    color: "blue",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    level: 65,
    category: "Design",
    description: "UI/UX design & prototyping",
    color: "pink",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: 86,
    category: "Tools",
    description: "Version control & collaboration",
    color: "gray",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    level: 58,
    category: "Tools",
    description: "Fast build tool & dev server",
    color: "purple",
  },
];

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState(new Set());
  const categories = [...new Set(skills.map((skill) => skill.category))];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(
              (prev) => new Set([...prev, entry.target.dataset.skill])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-skill]");
    cards.forEach((card) => observer.observe(card));

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const getIconColor = (color) => {
    return (
      {
        orange: "text-orange-400",
        blue: "text-blue-500",
        yellow: "text-yellow-400",
        cyan: "text-cyan-500",
        sky: "text-sky-500",
        green: "text-emerald-500",
        pink: "text-pink-400",
        gray: "text-gray-500",
        purple: "text-purple-500",
      }[color] || "text-slate-600"
    );
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-cyan-100 text-slate-700"
    >
      {/* top fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-800">
          My Skills
        </h2>

        {categories.map((category) => (
          <div key={category} className="mb-20">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    data-skill={skill.name}
                    className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-sky-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-3xl ${getIconColor(skill.color)}`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800">
                          {skill.name}
                        </h4>
                        <p className="text-slate-500 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    <div className="h-2 w-full bg-sky-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <div className="text-right text-sm text-slate-500 mt-1">
                      {skill.level}%
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-100 to-white pointer-events-none" />
    </section>
  );
};

export default Skills;
