import React, { useState } from "react";
import { Mail, Send, User, MessageCircle, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      await fetch("https://formspree.io/f/meejrwzp", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-cyan-100"
    >
      {/* background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.15),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(56,189,248,0.18),transparent_45%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 border border-sky-200 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-sky-500 mr-2" />
            <span className="text-sky-700 text-sm font-medium">
              Mari Berkolaborasi
            </span>
          </div>

          <h2 className="text-6xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Hubungi Saya
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Punya proyek menarik, ide brilian, atau ingin berkolaborasi?
            <br />
            <span className="text-sky-600 font-medium">
              Mari wujudkan sesuatu yang luar biasa bersama!
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FORM */}
          <div className="relative">
            <div className="absolute inset-0 bg-sky-200/40 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/70 backdrop-blur-xl border border-sky-200 rounded-2xl p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center text-slate-700 mb-3 font-medium">
                  <User className="w-4 h-4 mr-2 text-sky-500" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-sky-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center text-slate-700 mb-3 font-medium">
                  <Mail className="w-4 h-4 mr-2 text-sky-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-sky-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                  placeholder="nama@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center text-slate-700 mb-3 font-medium">
                  <MessageCircle className="w-4 h-4 mr-2 text-sky-500" />
                  Pesan Anda
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  required
                  className="w-full px-4 py-4 bg-white border border-sky-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all resize-none"
                  placeholder="Ceritakan tentang proyek atau ide Anda..."
                ></textarea>
              </div>

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? "Mengirim Pesan..." : "Kirim Pesan"}
              </button>
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-xl border border-sky-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Informasi Kontak
              </h3>

              {/* Email */}
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <a
                    href="mailto:cikalmunazat@gmail.com"
                    className="text-slate-800 font-medium hover:text-sky-600 transition"
                  >
                    cikalmunazat@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Instagram</p>
                  <a
                    href="https://instagram.com/aprilocikall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 font-medium hover:text-sky-600 transition"
                  >
                    @aprilocikall
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/aprilo-cikal-munazat-91bb37360/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 font-medium hover:text-sky-600 transition"
                  >
                    Aprilo Cikal Munazat
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-sky-100 border border-sky-200 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                Ready To Start?
              </h4>
              <p className="text-slate-600 mb-6">
                Fast response within 24 hours. Let’s discuss your project and
                create something exceptional together.
              </p>
              <span className="text-sky-600 text-sm font-medium">
                Online & Ready to Help
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
