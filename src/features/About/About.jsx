import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaBrain, FaCode, FaDatabase, FaCloud, FaInstagram } from "react-icons/fa";
import { IMAGES } from "../../core/constants/assets";

const SkillCategory = memo(({ category }) => (
  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 sm:p-5 hover:border-cyan-500/30 transition-all duration-300">
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <category.icon className="text-white text-xs" />
      </div>
      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-200">{category.category}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {category.items.map((item, idx) => (
        <span 
          key={idx} 
          className="text-[10px] sm:text-xs font-semibold px-3 py-1 bg-slate-900/50 text-slate-300 rounded-full border border-slate-700/50"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
));

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const handleSkillHover = useCallback((category) => {
    setHoveredSkill(category);
  }, []);

  const skills = [
    { 
      category: "Languages", 
      items: ["Java", "Python", "Dart", "JavaScript", "TypeScript", "PHP", "C++"],
      icon: FaCode,
      color: "from-cyan-500 to-blue-600"
    },
    { 
      category: "Mobile Development", 
      items: ["Flutter", "Kotlin (Jetpack Compose)"],
      icon: FaRocket,
      color: "from-blue-500 to-purple-600"
    },
    { 
      category: "Backend", 
      items: ["Spring Boot", "Spring Security", "Hibernate / JPA", "Django", "FastAPI", "Flask", "REST APIs", "Microservices"],
      icon: FaDatabase,
      color: "from-purple-500 to-pink-600"
    },
    { 
      category: "Frontend", 
      items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
      icon: FaRocket,
      color: "from-green-500 to-teal-600"
    },
    { 
      category: "Databases", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "LevelDB"],
      icon: FaDatabase,
      color: "from-teal-500 to-emerald-600"
    },
    { 
      category: "AI / NLP", 
      items: ["BERT", "TF-IDF", "MiniLM Embeddings", "SHAP Explainability"],
      icon: FaBrain,
      color: "from-pink-500 to-red-600"
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git", "Docker", "Firebase", "AWS", "Google Cloud Platform"],
      icon: FaCloud,
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            About Me
          </span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 text-center mb-6 sm:mb-8 md:mb-12 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          A passionate and self-driven Full-Stack Developer with strong expertise in Java and Python
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column - Profile Info */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Optimized Profile Image */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-1 shadow-xl">
                <div
                  className="w-full h-full rounded-xl sm:rounded-2xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${IMAGES.DP})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-3 md:-right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-500 rounded-full border-2 sm:border-3 border-slate-800 shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 md:-top-3 md:-left-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Optimized Personal Details */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-slate-700/50 shadow-xl"
              whileHover={{ y: -3, boxShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.25)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
                <FaRocket className="text-base sm:text-lg md:text-xl" />
                Personal Details
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { icon: FaCalendarAlt, label: "Birth Date", value: "November 5th, 2003" },
                  { icon: FaMapMarkerAlt, label: "Location", value: "Kerala, India" },
                  { icon: FaEnvelope, label: "Email", value: "nibin.joseph.career@gmail.com", link: true }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white text-xs sm:text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-300 text-xs sm:text-sm">{item.label}</p>
                      {item.link ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-xs sm:text-sm break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-xs sm:text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Optimized Social Links */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-slate-700/50 shadow-xl"
              whileHover={{ y: -3, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
                <FaRocket className="text-base sm:text-lg md:text-xl" />
                Connect With Me
              </h3>
              <div className="flex flex-wrap space-x-3 justify-center sm:justify-start gap-y-3">
                {[
                  { icon: FaRocket, href: "https://linktr.ee/nibin__", label: "Linktree", color: "hover:shadow-cyan-500/50" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nibin-joseph05/", label: "LinkedIn", color: "hover:shadow-blue-500/50" },
                  { icon: FaGithub, href: "https://github.com/nibin-joseph05", label: "GitHub", color: "hover:shadow-slate-500/50" },
                  { icon: FaInstagram, href: "https://www.instagram.com/_.n_.i_.b_.i_.n", label: "Instagram", color: "hover:shadow-purple-500/50" },
                  { icon: FaEnvelope, href: "mailto:nibin.joseph.career@gmail.com", label: "Email", color: "hover:shadow-cyan-500/50" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} border border-slate-600 hover:border-cyan-500 flex-shrink-0 flex items-center gap-2`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -3, 3, 0],
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    title={social.label}
                  >
                    <social.icon className="text-base sm:text-lg md:text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Text & Skills */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Optimized About Text */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-slate-700/50 shadow-xl"
              whileHover={{ y: -3, boxShadow: "0 20px 40px -12px rgba(168, 85, 247, 0.25)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
                <FaBrain className="text-base sm:text-lg md:text-xl" />
                Who I Am
              </h3>
              <div className="space-y-3 sm:space-y-4 text-slate-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm md:text-base"
                >
                  I am a Software Engineer and Full-Stack Developer based in Kerala, India.
                  Currently working at AIBI Campus in Kochi, contributing to production mobile applications and backend services.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm md:text-base"
                >
                  My work focuses on building scalable platforms, real-time systems, and mobile applications that integrate modern technologies such as AI services, blockchain-backed data integrity, and distributed architectures. I enjoy designing complete systems — from mobile interfaces and frontend experiences to backend APIs, databases, and infrastructure.
                </motion.p>
                <motion.div 
                  className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-lg p-3 sm:p-4 space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <p className="flex items-start gap-2 text-xs sm:text-sm md:text-base">
                    <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">🚀</span>
                    <span><strong className="text-cyan-400">Mobile:</strong> Development using Flutter and Kotlin.</span>
                  </p>
                  <p className="flex items-start gap-2 text-xs sm:text-sm md:text-base">
                    <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">⚙️</span>
                    <span><strong className="text-cyan-400">Backend:</strong> Systems using Java Spring Boot and REST APIs.</span>
                  </p>
                  <p className="flex items-start gap-2 text-xs sm:text-sm md:text-base">
                    <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">🌐</span>
                    <span><strong className="text-cyan-400">Real-time:</strong> Communication using WebSockets.</span>
                  </p>
                  <p className="flex items-start gap-2 text-xs sm:text-sm md:text-base">
                    <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">🧠</span>
                    <span><strong className="text-cyan-400">AI:</strong> NLP integrations and blockchain-based integrity systems.</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Optimized Skills Section */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-slate-700/50 shadow-xl"
              whileHover={{ y: -3, boxShadow: "0 20px 40px -12px rgba(34, 197, 94, 0.25)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2">
                <FaCode className="text-base sm:text-lg md:text-xl" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((skillGroup, index) => (
                  <SkillCategory key={skillGroup.category} category={skillGroup} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
