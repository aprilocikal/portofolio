import React from "react";

const educations = [
  {
    level: "Sekolah Dasar (SD)",
    institution: "SDN Benda",
    description:
      "Pendidikan dasar sebagai fondasi pembelajaran dan karakter.",
    logo:"/logo/logo-sd.jpg", // ← ganti nanti
    color: "from-sky-400 to-blue-500",
  },
  {
    level: "Sekolah Menengah Pertama (SMP)",
    institution: "MTs Al-Muchtari Boarding School",
    description:
      "Pendidikan berbasis boarding school dengan penekanan akademik dan karakter.",
    logo: "/logo/logo-smp.webp", // ← ganti nanti
    color: "from-sky-400 to-blue-500", // ⬅️ BUKAN BIRU
  },
  {
    level: "Sekolah Menengah Atas (SMA)",
    institution: "SMAN 1 Cigombong",
    description:
      "Aktif dalam organisasi dan pengembangan kepemimpinan.",
    logo: "/logo/logo-sma.png", // ← ganti nanti
    color: "from-sky-400 to-blue-500",
  },
  {
    level: "Perguruan Tinggi",
    institution: "Universitas Indonesia – Profesional Program CEP CCIT FTUI",
    description:
      "Fokus pada pengembangan skill IT, project-based learning, dan profesionalisme.",
    logo: "/logo/logo-UI.png", // ← ganti nanti
    color: "from-sky-500 to-indigo-600",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-cyan-100"
    >
      {/* background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.12),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.15),transparent_45%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            “An academic journey that builds discipline, mindset, and professional growth.”
          </p>
        </div>

        <div className="relative">
          {/* TIMELINE LINE (KANAN) */}
          <div className="absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full"></div>

          <div className="space-y-14">
            {educations.map((edu, index) => (
              <div key={index} className="relative group">
                {/* DOT */}
                <div
                  className={`absolute right-4 top-6 w-9 h-9 bg-gradient-to-r ${edu.color} rounded-full shadow-lg flex items-center justify-center z-10`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* CARD */}
                <div className="mr-20">
                  <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-sky-200 shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`}
                    ></div>

                   <div className="flex items-start justify-between gap-6">
                    {/* TEXT */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800">
                        {edu.level}
                        </h3>
                        <p className="text-slate-700 font-medium mt-1">
                        {edu.institution}
                        </p>
                    </div>

                    {/* LOGO (KANAN) */}
                    <div className="w-16 h-16 rounded-xl border border-sky-200 bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                        <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain"
                        />
                    </div>
                    </div>


                    <p className="text-slate-600 leading-relaxed mt-4">
                      {edu.description}
                    </p>

                    {/* hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/40 group-hover:to-blue-50/40 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
