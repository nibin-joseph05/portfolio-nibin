import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C++", "Flutter", "Dart"] },
    { category: "Web Frameworks", items: ["Django", "Spring Boot", "Next.js", "React", "React Vite", "Flask", "Laravel", "FastAPI"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
    { category: "ML/AI", items: ["Machine Learning", "NLP", "TF-IDF", "Cosine Similarity", "Sentence Embeddings"] },
    { category: "Cloud & Tools", items: ["GCP", "AWS", "Git", "Docker", "Tailwind CSS", "HTML/CSS"] }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A passionate and self-driven Full-Stack Developer with strong expertise in Java and Python
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-1 shadow-2xl">
                <div
                  className="w-full h-full rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/portfolio-nibin/my-pic.jpeg')" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800"></div>
            </div>

            {/* Personal Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Personal Details</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span><strong>Birth Date:</strong> November 5th, 2003</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span><strong>Location:</strong> Kerala, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-cyan-400" />
                  <span><strong>Email:</strong> nibin.joseph.career@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nibin-joseph05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nibin-joseph05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="mailto:nibin.joseph.career@gmail.com"
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <FaEnvelope className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Text & Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* About Text */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Who I Am</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a passionate and self-driven Full-Stack Developer with strong expertise in Java and Python. 
                  Currently pursuing my Master of Computer Applications (MCA) at Marian College Kuttikkanam, 
                  I thrive on building impactful web applications using technologies like Spring Boot, Django, 
                  and integrating machine learning solutions.
                </p>
                <p>
                  I'm experienced in both solo and team-based projects, always focusing on solving real-world 
                  problems with clean, scalable code and innovative thinking.
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4 space-y-2">
                  <p><strong className="text-cyan-400">🌱 Currently learning:</strong> Deeper aspects of Machine Learning and Flutter app development.</p>
                  <p><strong className="text-cyan-400">💬 Ask me about:</strong> Python, Java, Django, Spring Boot, Next.js, PostgreSQL, NLP, and full-stack web development.</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-200 mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
