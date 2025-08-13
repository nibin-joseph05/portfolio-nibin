import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaBrain, FaCode, FaDatabase, FaCloud } from "react-icons/fa";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const skills = [
    { 
      category: "Languages", 
      items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C++", "Flutter", "Dart"],
      icon: FaCode,
      color: "from-cyan-500 to-blue-600"
    },
    { 
      category: "Web Frameworks", 
      items: ["Django", "Spring Boot", "Next.js", "React", "React Vite", "Flask", "Laravel", "FastAPI"],
      icon: FaRocket,
      color: "from-blue-500 to-purple-600"
    },
    { 
      category: "Databases", 
      items: ["PostgreSQL", "MongoDB", "MySQL"],
      icon: FaDatabase,
      color: "from-purple-500 to-pink-600"
    },
    { 
      category: "ML/AI", 
      items: ["Machine Learning", "NLP", "TF-IDF", "Cosine Similarity", "Sentence Embeddings"],
      icon: FaBrain,
      color: "from-pink-500 to-red-600"
    },
    { 
      category: "Cloud & Tools", 
      items: ["GCP", "AWS", "Git", "Docker", "Tailwind CSS", "HTML/CSS"],
      icon: FaCloud,
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.h2
          className="text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            About Me
          </span>
        </motion.h2>

        <motion.p
          className="text-2xl text-slate-300 text-center mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          A passionate and self-driven Full-Stack Developer with strong expertise in Java and Python
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Enhanced Profile Image */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-1 shadow-2xl">
                <div
                  className="w-full h-full rounded-3xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/portfolio-nibin/my-pic.jpeg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full border-4 border-slate-800 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Enhanced Personal Details */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                <FaRocket className="text-2xl" />
                Personal Details
              </h3>
              <div className="space-y-4">
                {[
                  { icon: FaCalendarAlt, label: "Birth Date", value: "November 5th, 2003" },
                  { icon: FaMapMarkerAlt, label: "Location", value: "Kerala, India" },
                  { icon: FaEnvelope, label: "Email", value: "nibin.joseph.career@gmail.com", link: true }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <item.icon className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">{item.label}</p>
                      {item.link ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                <FaRocket className="text-2xl" />
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: "https://github.com/nibin-joseph05", color: "hover:shadow-cyan-500/50" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nibin-joseph05/", color: "hover:shadow-blue-500/50" },
                  { icon: FaEnvelope, href: "mailto:nibin.joseph.career@gmail.com", color: "hover:shadow-cyan-500/50" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} border border-slate-600 hover:border-cyan-500`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Text & Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Enhanced About Text */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                <FaBrain className="text-2xl" />
                Who I Am
              </h3>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  I'm a passionate and self-driven Full-Stack Developer with strong expertise in Java and Python. 
                  Currently pursuing my Master of Computer Applications (MCA) at Marian College Kuttikkanam, 
                  I thrive on building impactful web applications using technologies like Spring Boot, Django, 
                  and integrating machine learning solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  I'm experienced in both solo and team-based projects, always focusing on solving real-world 
                  problems with clean, scalable code and innovative thinking.
                </motion.p>
                <motion.div 
                  className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl p-6 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">🌱</span>
                    <span><strong className="text-cyan-400">Currently learning:</strong> Deeper aspects of Machine Learning and Flutter app development.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">💬</span>
                    <span><strong className="text-cyan-400">Ask me about:</strong> Python, Java, Django, Spring Boot, Next.js, PostgreSQL, NLP, and full-stack web development.</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Skills Section */}
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-semibold text-cyan-400 mb-8 flex items-center gap-3">
                <FaCode className="text-2xl" />
                Technical Skills
              </h3>
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredSkill(skillGroup.category)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 bg-gradient-to-r ${skillGroup.color} rounded-lg flex items-center justify-center`}>
                        <skillGroup.icon className="text-white text-sm" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-200">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${skillGroup.color} bg-opacity-20 border border-slate-600 rounded-full text-sm text-cyan-300 hover:bg-opacity-30 transition-all duration-300 cursor-default backdrop-blur-sm`}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)"
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.05, duration: 0.4, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
