import React, { useState } from "react";

const experiences = [
  {
    title: "Ketua Komisi MPK SMAN 1 Cigombong",
    date: "Agustus 2023 - Agustus 2024",
    description:
      "Memimpin staff di divisi saya, mengkoordinasi kegiatan ekstrakulikuler siswa, serta menjadi penghubung strategis antara pihak osis dan siswa kelas.",
    logo: "/foto-mpk.jpeg",
    certificateUrl: "/sertif-mpk.png",
  },
  {
    title: "Staff PR Bakti ASA UI 2025",
    date: "September 2025 - Desember 2025",
    description:
      "Menjadi penghubung antara media partner dan sebuah organisasi kampus agar berjalan dengan lancar.",
    logo: "/foto-baksa.jpg",
    instagramUrl: "https://www.instagram.com/baktiasaui/",
  },
  {
    title: "Staff Teater UI",
    date: "Juni 2025 - Juni 2027",
    description:
      "Menjadi seorang yang berperan dalam kegiatan acara seperti acting dan lain sebagainya.",
    logo: "/foto-teater.jpg",
    instagramUrl: "https://www.instagram.com/teaterui/",
  },
  {
    title: "Magang Sales and Marketing Yamaha Cinere",
    date: "Oktober 2025",
    description:
      "Bertugas sebagai promosi dari Yamaha dan bertanggung jawab untuk melaporkan hasil penjualan.",
    logo: "/foto-yamaha.png",
  },
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-cyan-100"
    >
      {/* background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.12),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.15),transparent_45%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
           “A journey of career growth and organizational experiences that shape my professional skills and character.”
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full"></div>

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div className="absolute left-4 top-6 w-9 h-9 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Card */}
                <div className="ml-20">
                  <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-sky-200 shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500"></div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.title} logo`}
                          className="w-12 h-12 rounded-xl border border-sky-200 shadow-sm object-contain bg-white"
                        />
                        <h3 className="text-2xl font-bold text-slate-800">
                          {exp.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full border border-sky-200">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed mt-4">
                      {exp.description}
                    </p>

                    {/* ACTION LINKS */}
                    <div className="flex flex-wrap gap-4 mt-5">
                      {exp.certificateUrl && (
                        <button
                          onClick={() => setSelectedImage(exp.certificateUrl)}
                          className="text-sm font-medium text-sky-600 hover:text-blue-600 underline underline-offset-4"
                        >
                          📄 Lihat Sertifikat
                        </button>
                      )}

                      {exp.instagramUrl && (
                        <a
                          href={exp.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-sky-600 hover:text-blue-600 underline underline-offset-4"
                        >
                          📸 Instagram
                        </a>
                      )}
                    </div>

                    {/* hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/40 group-hover:to-blue-50/40 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-t-xl">
              <h3 className="text-lg">Sertifikat</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white text-2xl hover:scale-110 transition"
              >
                &times;
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Sertifikat"
              className="w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
