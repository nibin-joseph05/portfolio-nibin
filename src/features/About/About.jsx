import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { IMAGES, DOCUMENTS } from "../../core/constants/assets";

const SkillItem = ({ item }) => (
  <motion.span 
    className="text-[10px] sm:text-xs font-semibold px-3 py-1 bg-slate-900/50 text-slate-300 rounded-full border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
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
      items: ["Java", "Python", "Dart", "JavaScript", "TypeScript", "PHP", "C++"],
    },
    { 
      category: "Mobile Ecosystem", 
      items: ["Flutter", "Kotlin (Jetpack Compose)", "Android Architecture Components"],
    },
    { 
      category: "Backend & Systems", 
      items: ["Spring Boot", "Spring Security", "Hibernate / JPA", "Django", "FastAPI", "Flask", "REST APIs", "Microservices", "WebSockets"],
    },
    { 
      category: "Web Frontend", 
      items: ["React", "Next.js", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Framer Motion"],
    },
    { 
      category: "Database Systems", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "Hive", "LevelDB", "Redis"],
    },
    { 
      category: "AI & Data Science", 
      items: ["LLMs (Gemini, Claude, OpenAI)", "NLP (BERT, TF-IDF, Spacy)", "Spam Detection & Urgency Classification", "GANs & VAEs", "Computer Vision (OpenCV)"],
    },
    { 
      category: "Tools & DevOps", 
      items: ["Git", "GitHub", "Docker", "Postman", "Firebase", "VS Code", "Android Studio", "Vercel", "AWS / GCP Basics"],
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

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column - Image & Contact */}
          <motion.div
            className="w-full lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Professional DP Wrapper */}
            <div className="relative group">
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
              
              {/* Animated Accents */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <motion.div 
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-lg z-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Personal Details Block */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50" />
              <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2 uppercase tracking-wider text-sm">
                Personal Baseline
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Full Name", value: "Nibin Joseph" },
                  { label: "Status", value: "Available for Hire" },
                  { label: "Email", value: "nibin.joseph.career@gmail.com", link: "mailto:nibin.joseph.career@gmail.com" },
                  { label: "Location", value: "Kerala, India" }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-slate-700/50 pb-2">
                    <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-sm font-medium text-white hover:text-cyan-400 transition-colors uppercase antialiased">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-200 uppercase antialiased">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
              
              <motion.a
                href={DOCUMENTS.RESUME}
                download
                className="mt-8 w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all border border-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Export CV (.PDF)
              </motion.a>
            </motion.div>

            {/* Social Integration */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50" />
              <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2 uppercase tracking-wider text-sm">
                Digital Presence
              </h3>
              <div className="grid grid-cols-2 gap-3">
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
                    className="p-3 bg-slate-900/50 hover:bg-slate-700/50 rounded-xl border border-slate-700 text-center text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
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
            className="w-full lg:w-2/3 space-y-8"
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
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                Professional Manifesto
              </h3>
              <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg antialiased">
                <p>
                  I am a <strong className="text-white">Software Engineer</strong> and <strong className="text-white">Full-Stack Architect</strong> driven by the challenge of bridging complex backend systems with high-performance mobile interfaces. Based in Kerala, India, I specialize in crafting scalable platforms that balance technical integrity with seamless user experiences.
                </p>
                <p>
                  My recent work at <strong className="text-cyan-400">AIBI Campus</strong> involves architecting real-time mobile applications using <strong className="text-white">Flutter</strong> and high-throughput backend services with <strong className="text-white">Spring Boot</strong>. I am passionate about integrating AI-driven insights and ensuring data security through immutable architectures.
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  {[
                    { label: "Focus", value: "Distributed scalability and AI/LLM integration." },
                    { label: "Motto", value: "Building for performance, security, and human impact." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                      <p className="text-[10px] uppercase text-cyan-500 font-black tracking-tighter mb-1">{item.label}</p>
                      <p className="text-sm text-slate-200 antialiased font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Unified Mastery Section */}
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
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
