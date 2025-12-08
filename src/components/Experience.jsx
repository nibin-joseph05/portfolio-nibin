import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaRocket } from "react-icons/fa";

export default function Experience() {
  const role = {
    company: "AIBI Campus",
    location: "Edappally, Kochi",
    title: "Flutter Developer Intern",
    period: "Present",
    summary:
      "Building and maintaining Flutter applications for live projects, collaborating with AIBI's in-house team and supporting international client work.",
    highlights: [
      "Implementing production-ready Flutter UI for mobile and web apps",
      "Integrating REST APIs, handling state, and improving performance",
      "Debugging, version control, and maintaining live client projects",
      "Contributing to AIBI’s in-house and international client deliverables",
    ],
    logo: "public/aibi_campus_logo.jpg",
  };

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-12 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-12 right-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 0.95, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Experience
          </span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Currently working with the team at AIBI Campus in Edappally, Kochi.
        </motion.p>

        <motion.div
          className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -6, boxShadow: "0 30px 60px -24px rgba(6, 182, 212, 0.35)" }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
            <motion.div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={role.logo}
                alt={`${role.company} logo`}
                className="w-full h-full object-contain bg-slate-900"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <div className="w-full md:flex-1 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 flex items-center gap-2">
                  <FaBriefcase className="text-base sm:text-lg" />
                  {role.title}
                </h3>
                <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-500/30">
                  {role.period}
                </span>
              </div>
              <p className="text-lg sm:text-xl font-semibold text-white">{role.company}</p>
              <div className="flex items-center gap-2 text-slate-300 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>{role.location}</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{role.summary}</p>

              <div className="mt-3 grid sm:grid-cols-2 gap-2 sm:gap-3">
                {role.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2 p-3 rounded-xl bg-slate-700/40 border border-slate-600/60"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FaRocket className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-200 text-sm sm:text-base">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2 text-slate-400 text-sm sm:text-base">
                <FaClock className="text-cyan-300" />
                <span>Hands-on internship driving live app releases and client support.</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-10 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            <FaRocket className="text-base sm:text-lg" />
            About AIBI Campus
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            AIBI Campus is a tech-focused learning and delivery hub in Kochi, offering AI, data science,
            and digital marketing programs with real-world projects, internships (including Dubai), and
            placement assistance. The team delivers client work alongside training, using industry tools
            and production standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


