import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { IMAGES, DOCUMENTS } from "../../core/constants/assets";

// Skill Item component for a cleaner list
const SkillItem = ({ item }) => (
  <motion.span 
    className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 bg-slate-900/50 text-slate-300 rounded-full border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
    whileHover={{ scale: 1.05 }}
  >
    {item}
  </motion.span>
);

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const skills = [
    { 
      category: "Programming Languages", 
      items: ["Java (Core & Advanced)", "Python", "Dart", "JavaScript", "TypeScript", "PHP", "C++"],
    },
    { 
      category: "Mobile Ecosystem", 
      items: ["Flutter (Provider, BLoC)", "Kotlin (Jetpack Compose)", "Android SDK", "Firebase Integration"],
    },
    { 
      category: "Backend & Systems", 
      items: ["Spring Boot (Learning & Revising)", "Spring Security", "Hibernate / JPA", "Django", "FastAPI", "Flask", "REST APIs", "Microservices", "WebSockets"],
    },
    { 
      category: "Web Frontend", 
      items: ["React", "Next.js", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Framer Motion"],
    },
    { 
      category: "Database Systems", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "Hive (Local Storage)", "LevelDB"],
    },
    { 
      category: "AI & Data Science", 
      items: ["LLMs (Gemini, Claude, OpenAI)", "NLP (BERT, TF-IDF, Spacy)", "GANs & VAEs", "Computer Vision (OpenCV)"],
    },
    { 
      category: "Tools & DevOps", 
      items: ["Git", "GitHub", "Docker", "Postman", "Firebase Console", "VS Code", "Android Studio", "Vercel"],
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
              Profile Summary
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Image & Contextual Details */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Professional DP Wrapper */}
            <div className="relative group mb-4">
              <motion.div 
                className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-2xl overflow-hidden border-2 border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${IMAGES.DP})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              
              <div className="absolute -inset-2 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <motion.div 
                className="absolute -bottom-2 -right-2 w-7 h-7 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-lg z-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Personal Details Block */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden group flex-grow"
              whileHover={{ y: -3, borderColor: "rgba(6, 182, 212, 0.3)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30" />
              <h3 className="text-xl font-bold text-cyan-400 mb-5 flex items-center gap-2 uppercase tracking-wider text-xs">
                Personal Baseline
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Full Name", value: "Nibin Joseph" },
                  { label: "Email", value: "nibin.joseph.career@gmail.com", link: "mailto:nibin.joseph.career@gmail.com" },
                  { label: "Location", value: "Kochi, Kerala" }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-slate-700/50 pb-2">
                    <p className="text-[9px] uppercase text-slate-500 font-bold tracking-widest mb-0.5">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-sm font-medium text-white hover:text-cyan-400 transition-colors uppercase antialiased tracking-tight">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-200 uppercase antialiased tracking-tight">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
              <motion.a
                href={DOCUMENTS.RESUME}
                download
                className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all border border-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Export CV (.PDF)
              </motion.a>
            </motion.div>

            {/* Current Focus Block */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ y: -3, borderColor: "rgba(34, 197, 94, 0.3)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-cyan-500 opacity-40" />
              <h3 className="text-xl font-bold text-green-400 mb-5 flex items-center gap-2 uppercase tracking-wider text-xs">
                Current Intensive Focus
              </h3>
              <div className="space-y-3">
                <p className="text-[11px] text-slate-300 leading-relaxed uppercase tracking-wide">
                  Deeply diving into <strong className="text-white">Java Architecture</strong> and 
                  evolving as a <strong className="text-cyan-400">Spring Boot Developer</strong>. 
                  Currently revising core concepts and building scalable microservices.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[9px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-md border border-green-500/20 font-black uppercase">Learning</span>
                  <span className="text-[9px] px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20 font-black uppercase">Revising</span>
                </div>
              </div>
            </motion.div>

            {/* Social Integration - Height filler to match technical stack */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30" />
              <h3 className="text-xl font-bold text-cyan-400 mb-5 flex items-center gap-2 uppercase tracking-wider text-xs">
                Digital Presence
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: "https://linktr.ee/nibin__", label: "Linktree" },
                  { href: "https://www.linkedin.com/in/nibin-joseph05/", label: "LinkedIn" },
                  { href: "https://github.com/nibin-joseph05", label: "GitHub" },
                  { href: "https://www.instagram.com/_.n_.i_.b_.i_.n", label: "Instagram" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900/50 hover:bg-slate-700/50 rounded-xl border border-slate-700 text-center text-[9px] font-bold uppercase tracking-widest text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all font-sans"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Narrative & Mastery */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Bio Section */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 uppercase tracking-wider text-sm">
                About Me
              </h3>
              <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg antialiased">
                <p>
                  <strong className="text-white">Backend-focused Software Engineer</strong> specializing in <strong className="text-cyan-400">Java and Spring Boot</strong>, with experience building scalable, secure, and production-grade systems. 
                </p>
                <p>
                  Strong expertise in designing <strong className="text-white">REST APIs</strong>, authentication systems, and real-time workflows. Experienced in solving backend challenges including concurrency control, transactional integrity, and distributed system design. Currently contributing to enterprise applications at <strong className="text-cyan-400">AIBI Campus</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  {[
                    { label: "Current Role", value: "Software Engineer @ AIBI Campus" },
                    { label: "Main Stack", value: "Java, Spring Boot, Flutter" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                      <p className="text-[9px] uppercase text-cyan-500 font-bold tracking-widest mb-1">{item.label}</p>
                      <p className="text-sm text-slate-200 antialiased font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Unified Mastery Section */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden group flex-grow"
              whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 uppercase tracking-wider text-sm">
                Technical Stack
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {skills.map((group, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.2em] border-l-2 border-cyan-500 pl-3">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, sIdx) => (
                        <SkillItem key={sIdx} item={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
