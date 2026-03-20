import React from "react";
import { motion } from "framer-motion";

import { IMAGES } from "../../core/constants/assets";

export default function Experience() {
  const role = {
    company: "AIBI Campus",
    location: "Kochi, Kerala",
    title: "Software Engineer",
    period: "Nov 2025 – Present",
    summary:
      "Developing and maintaining production-grade enterprise applications across mobile and backend systems at AIBI Campus.",
    highlights: [
      "Developing and maintaining production-grade enterprise applications across mobile and backend systems.",
      "Building backend services using Node.js and REST APIs for real-time and CRM-based workflows.",
      "Developing mobile applications using Flutter and Android apps using Kotlin (Jetpack Compose).",
      "Contributing to frontend systems using Next.js for admin dashboards and analytics interfaces.",
      "Handling database operations (PostgreSQL/MySQL) and optimizing queries for performance.",
      "Debugging production issues and improving system reliability and responsiveness.",
    ],
    logo: IMAGES.AIBI_CAMPUS_LOGO, 
    projects: [
      {
        name: "ANAD CRM",
        status: "Live Production Application",
        tech: "Flutter",
        description: "Contributed to a production Flutter CRM application used for customer management and call analytics. Integrated backend APIs and improved performance and UI responsiveness.",
        link: "https://play.google.com/store/apps/details?id=com.paragon.anad.crm&pcampaignid=web_share"
      },
      {
        name: "ANAD Dialer",
        status: "Kotlin Android Application",
        tech: "Kotlin, Jetpack Compose",
        description: "Built Android system for call monitoring, syncing logs with backend APIs. Implemented offline queue with retry mechanisms for network failure handling.",
        features: [
          "Background call monitoring service",
          "Automatic call log synchronization with CRM APIs",
          "Call recording detection and upload",
          "Analytics dashboard with charts",
          "Offline queue with automatic retry mechanisms"
        ]
      }
    ]
  };

  return (
    <section
      id="experience"
      className="py-8 sm:py-10 md:py-16 bg-slate-900 text-white relative overflow-hidden font-sans"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 font-sans tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {/* Main Employment Block */}
          <motion.div
            className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "rgba(6, 182, 212, 0.3)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden flex-shrink-0 shadow-xl p-2"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <img
                  src={role.logo}
                  alt={`${role.company} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.div>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                      {role.title}
                    </h3>
                    <p className="text-lg font-bold text-cyan-400 font-sans">{role.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-slate-400">
                    <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-black uppercase tracking-widest font-sans">
                      {role.period}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold font-sans">{role.location}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                  {role.summary}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {role.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                      <p className="text-sm text-slate-300 antialiased font-sans leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Projects Subsection */}
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {role.projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative overflow-hidden group flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-1 block font-sans">
                    {project.status}
                  </span>
                  <h4 className="text-xl font-bold text-white font-sans">{project.name}</h4>
                  <p className="text-xs font-bold text-cyan-500 mt-1 uppercase font-sans tracking-wider">{project.tech}</p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans flex-grow">
                  {project.description}
                </p>

                {project.features && (
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-400 font-sans">
                        <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit px-5 py-2.5 bg-cyan-600/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-600 hover:text-white transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-2 font-sans"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View on Play Store
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14L21,12.66C21.63,12.3 21.63,11.7 21,11.34L18.66,10L16.81,8.88L14.4,11.3L16.81,15.12M4.27,2.15L14.54,12.42L17.07,9.89L4.9,2.9C4.69,2.79 4.47,2.72 4.27,2.72C3.84,2.72 3.44,2.93 3.19,3.31L4.27,2.15M3.19,20.69C3.44,21.07 3.84,21.28 4.27,21.28C4.47,21.28 4.69,21.21 4.9,21.1L17.07,14.11L14.54,11.58L4.27,21.85" />
                    </svg>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


