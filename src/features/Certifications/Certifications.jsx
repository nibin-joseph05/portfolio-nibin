import React from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { 
      title: "Data Structures and Algorithms using Java", 
      issuer: "NPTEL | IIT Kharagpur", 
      instructor: "Prof. Debasis Samanta",
      duration: "12 Weeks (Jul - Oct 2025)",
      description: "A comprehensive course focused on the object-oriented paradigm, platform independence, and robust software development. Covered essential DSA topics implemented in Java for mobile, internet, and distributed systems.",
      featured: true,
      tags: ["DSA", "Java", "OOP", "Distributed Systems"]
    },
    { title: "Red Hat System Administration", issuer: "Red Hat" },
    { title: "Data Analysis with Python", issuer: "IBM / Cognitive Class" },
    { title: "Data Science Tools", issuer: "IBM / Cognitive Class" },
    { title: "Data Science 101 & Methodology", issuer: "IBM / Cognitive Class" }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className={`bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300 flex flex-col ${
                cert.featured ? 'md:col-span-2 lg:col-span-2 border-cyan-500/30 ring-1 ring-cyan-500/20' : ''
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }}
            >
              <div className="relative z-10 space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className={`font-black text-white font-sans tracking-tight leading-tight ${
                    cert.featured ? 'text-2xl sm:text-3xl md:text-4xl pr-20' : 'text-lg'
                  }`}>
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-cyan-400 font-black uppercase tracking-widest text-[10px] sm:text-xs">
                    <span>{cert.issuer}</span>
                    {cert.featured && (
                      <>
                        <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
                        <span>{cert.instructor}</span>
                      </>
                    )}
                  </div>
                </div>

                {cert.featured && (
                  <>
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-900/50 text-slate-400 rounded-md border border-slate-700/50 text-[9px] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans antialiased">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-bold font-sans">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {cert.duration}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {!cert.featured && (
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-slate-400 text-xs font-bold italic font-sans uppercase tracking-widest opacity-60">Completed</span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
