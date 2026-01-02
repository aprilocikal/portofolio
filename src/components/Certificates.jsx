import { useState } from "react";

const certificates = [
   {
    title: "Belajar Dasar AI",
    image: "/certificates/foto-dicoding-ai.png",
    link: "https://www.dicoding.com/certificates/NVP7J322OXR0",
    category: "Dicoding",
  },
   {
    title: "Financial Literacy",
    image: "/certificates/foto-dicoding-finance.png",
    link: "https://www.dicoding.com/certificates/L4PQ2KEOOZO1",
    category: "Dicoding",
  },
  {
    title: "Cyber Security Workshop",
    image: "/certificates/foto-sertif-cs.png",
    link: "https://drive.google.com/file/d/1zqp57y4tigCfI4LxNihLF21xUwltq__T/view",
    category: "Cyber Security",
  },
  {
    title: "Bahasa Jerman",
    image: "/certificates/foto-sertif-jerman.jpg",
    link: "https://drive.google.com/file/d/19tEb7c1NSt9veirpKWAbgVd-ZBeSoF5S/view",
    category: "Language",
  },
  {
    title: "Psikolog Pemuda",
    image: "/certificates/foto-sertif-psiko.jpg",
    link: "https://drive.google.com/file/d/1xPmIHQpHbc43DJDHHI5DPiANljjLs2ho/view",
    category: "Dispora",
  },
];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(certificates.map((c) => c.category)),
  ];

  const filtered =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="certificates"
      className="py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full">
            Achievements
          </span>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent my-4">
            Certificates
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of my professional certifications and learning achievements
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg"
                  : "bg-white/80 text-slate-700 hover:bg-white border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block mb-3 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                  {cert.category}
                </span>

                <h3 className="font-bold text-lg text-slate-800 mb-4 group-hover:text-blue-600 transition">
                  {cert.title}
                </h3>

                <div className="text-blue-600 font-semibold text-sm">
                  Lihat Sertifikat →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
