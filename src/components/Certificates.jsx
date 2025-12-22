import React, { useState } from "react";

const certificates = [
  {
    title: "Belajar Dasar AI",
    image: "/certificates/foto-dicoding-ai.png",
    link: "https://www.dicoding.com/certificates/GRX5OR0ORP0M",
    category: "Artificial Intelligence",
    year: "2025",
    difficulty: "Advanced",
  },
];

const categoryColors = {
  "Web Development": "from-sky-400 to-blue-500",
  Frontend: "from-sky-400 to-cyan-500",
  Programming: "from-blue-400 to-indigo-500",
  "Cloud Computing": "from-cyan-400 to-sky-500",
  Backend: "from-slate-400 to-slate-500",
  "Artificial Intelligence": "from-sky-500 to-blue-600",
  React: "from-cyan-400 to-blue-500",
};

const difficultyColors = {
  Foundation: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Advanced: "bg-red-100 text-red-800 border-red-200",
};

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    "All",
    ...new Set(certificates.map((cert) => cert.category)),
  ];

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section
      id="certificates"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-cyan-100"
    >
      {/* soft background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.18),transparent_45%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-sky-700">
              Professional Certifications
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Certified
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A curated selection of premium certifications showcasing expertise
            across multiple professional domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-transparent shadow-lg"
                  : "bg-white/70 text-slate-600 border-sky-200 hover:bg-sky-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCertificates.map((cert, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-sky-200 shadow transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* image */}
                <div className="relative h-56 overflow-hidden bg-sky-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* category */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${categoryColors[cert.category]}`}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* difficulty */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${difficultyColors[cert.difficulty]}`}
                    >
                      {cert.difficulty}
                    </span>
                  </div>

                  {/* year */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur text-slate-700 text-xs rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        D
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-800">
                          Dicoding
                        </span>
                        <p className="text-xs text-slate-500">Indonesia</p>
                      </div>
                    </div>

                    <svg
                      className="w-6 h-6 text-sky-400 group-hover:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-sky-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-sky-600">
                  {certificates.length}
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  Certificates
                </div>
              </div>
              <div>
                <div className="text-5xl font-black text-blue-600">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  Domains
                </div>
              </div>
              <div>
                <div className="text-5xl font-black text-emerald-600">100%</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  Completion
                </div>
              </div>
              <div>
                <div className="text-5xl font-black text-cyan-600">2025</div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  Latest
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
