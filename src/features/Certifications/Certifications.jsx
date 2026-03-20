import React from "react";
import { motion } from "framer-motion";


export default function Certifications() {
  const certs = [
    { title: "Flutter & Dart — Comprehensive Mobile Development", issuer: "Udemy / Google Certified Instructor", color: "from-cyan-500 to-blue-600" },
    { title: "Kotlin for Android Development", issuer: "JetBrains Academy", color: "from-blue-500 to-cyan-600" },
    { title: "Professional JVM Spring Boot Architecture", issuer: "Medium / Self-Guided Mastery", color: "from-cyan-500 to-blue-600" },
    { title: "Data Structures and Algorithms using Java", issuer: "NPTEL (IIT Kharagpur)", color: "from-blue-600 to-indigo-700" },
    { title: "Red Hat System Administration", issuer: "Red Hat", color: "from-cyan-400 to-blue-500" },
    { title: "Data Analysis with Python", issuer: "IBM / Cognitive Class", color: "from-blue-500 to-indigo-600" },
    { title: "Data Science Tools", issuer: "IBM / Cognitive Class", color: "from-blue-500 to-indigo-600" },
    { title: "Data Science 101 & Methodology", issuer: "IBM / Cognitive Class", color: "from-blue-500 to-indigo-600" }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
            Certifications
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 shadow-xl relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.25)" }}
            >
              <h3 className="text-lg font-bold text-white mb-2 leading-tight mt-4">{cert.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-cyan-400 text-sm font-medium">{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
