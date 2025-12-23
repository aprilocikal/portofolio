import React, { useState } from "react";

const certificates = [
  {
    title: "Belajar Dasar AI",
    image: "/certificates/foto-dicoding-ai.png",
    link: "https://www.dicoding.com/certificates/NVP7J322OXR0",
    category: "Artificial Intelligence",
    year: "2025",
    difficulty: "Advanced",
  },
  {
    title: "Psikolog (Dispora)",
    image: "/certificates/foto-sertif-psiko.jpg",
    category: "Psikolog",
    link: "https://drive.google.com/file/d/1xPmIHQpHbc43DJDHHI5DPiANljjLs2ho/view?usp=sharing",
    year: "2023",
    difficulty: "Normal",
  },
  {
    title: "Pelatihan Kepemimpinan (Dispora)",
    image: "/certificates/foto-sertif-pemimpin.jpg",
    category: "Pemimpin",
    link: "https://drive.google.com/file/d/15QiE2-5j5Slt-JDUeAp5rggOLgz_Iy96/view?usp=drive_link",
    year: "2023",
    difficulty: "Normal",
  },
];

/* 🔵 SEMUA KATEGORI DISAMAKAN WARNANYA */
const categoryColors = {
  "Artificial Intelligence": "from-sky-500 to-blue-600",
  Psikolog: "from-sky-500 to-blue-600",
  Pemimpin: "from-sky-500 to-blue-600",
};

const difficultyColors = {
  Foundation: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Advanced: "bg-red-100 text-red-800 border-red-200",
  Normal: "bg-slate-100 text-slate-700 border-slate-200",
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
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.18),transparent_45%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Certified
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A curated selection of certifications across academic, leadership,
            and professional domains.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                  : "bg-white/70 text-slate-600 border-sky-200 hover:bg-sky-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-sky-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${categoryColors[cert.category]}`}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* Difficulty */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full border ${difficultyColors[cert.difficulty]}`}
                    >
                      {cert.difficulty}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 bg-white/80 text-slate-700 text-xs rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* 🔴 HURUF D DIHAPUS, STRUKTUR TETAP */}
                      <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
                      <div>
                        <span className="text-sm font-semibold text-slate-800">
                          Cek Sertifikat
                        </span>
                        <p className="text-xs text-slate-500">Di sini</p>
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
      </div>
    </section>
  );
};

export default Certificates;
