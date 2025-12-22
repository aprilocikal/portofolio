import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-sky-50"
    >
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(14,165,233,0.35) 0%, 
            rgba(56,189,248,0.25) 30%, 
            rgba(186,230,253,0.2) 55%, 
            transparent 75%)`,
        }}
      ></div>

      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-100 to-cyan-100"></div>

      {/* ================= FLOATING ELEMENTS (FINAL) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Small glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-sky-500 rounded-full animate-ping shadow-[0_0_14px_rgba(14,165,233,0.9)]"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-1000 shadow-[0_0_12px_rgba(34,211,238,0.9)]"></div>
        <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping delay-500 shadow-[0_0_14px_rgba(59,130,246,0.9)]"></div>

        {/* Medium floating orbs */}
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full blur-md animate-float opacity-80"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-md animate-float-delayed opacity-80"></div>

        {/* Large glow blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-400/45 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-cyan-400/45 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 -right-48 w-72 h-72 bg-blue-400/35 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(14,165,233,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(14,165,233,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* LEFT */}
          <div
            className={`space-y-10 transform transition-all duration-1200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 border border-sky-300 backdrop-blur-xl">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-slate-700">
                Available for Collab
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              <span className="block text-slate-800 mb-2">Hi, im </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift">
                  Aprilo Cikal Munazat
                </span>
                <div className="absolute -inset-1 bg-sky-400/40 blur-lg animate-pulse-glow"></div>
              </span>
            </h1>

            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-sky-500"></div>
              <span className="text-xl sm:text-2xl font-semibold text-slate-600">
                AI ENGINEERING AND DATA ANALYST
              </span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Saya{" "}
              <span className="font-semibold text-slate-800">
                Aprilo Cikal Munazat
              </span>
              , developer berpengalaman dari Bogor yang berfokus pada{" "}
              <span className="font-semibold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                aplikasi web modern
              </span>{" "}
              dan elegan.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Node.js", "Tailwind CSS", "Supabase"].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/70 border border-sky-200 backdrop-blur text-sky-600 text-sm font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/70 border border-sky-300 text-sky-700 text-sm rounded-xl backdrop-blur">
                🏆 Ex-Ketua Komisi C MPK SMAN 1 Cigombong
              </div>
              <div className="px-4 py-2 bg-white/70 border border-sky-300 text-sky-700 text-sm rounded-xl backdrop-blur">
                🎓 Staff Bakti ASA UI 2025
              </div>
              <div className="px-4 py-2 bg-white/70 border border-sky-300 text-sky-700 text-sm rounded-xl backdrop-blur">
                🎭 Teater UI
              </div>
              <div className="px-4 py-2 bg-white/70 border border-sky-300 text-sky-700 text-sm rounded-xl backdrop-blur">
                💼 Sales and Marketing Yamaha Cinere 2025
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition"
              >
                Eksplorasi Proyek →
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white/70 border border-sky-200 text-slate-700 font-bold rounded-2xl shadow"
              >
                Mari Berkolaborasi
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-sky-400/40 blur-3xl rounded-full animate-pulse-glow"></div>

              <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 animate-border-spin p-1">
                  <div className="w-full h-full rounded-full bg-white"></div>
                </div>

                <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="./foto-cikal.png"
                    alt="Aprilo Cikal"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
