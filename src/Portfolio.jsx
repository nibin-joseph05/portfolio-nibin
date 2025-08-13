import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaRocket, FaCode, FaBrain } from "react-icons/fa";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // Simulate loading time with smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Enhanced Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="fixed inset-0 flex flex-col justify-center items-center bg-slate-900 text-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Enhanced Loading Spinner */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Outer Ring */}
              <div className="w-24 h-24 border-4 border-slate-300/30 border-t-cyan-500 rounded-full animate-spin"></div>
              
              {/* Middle Ring */}
              <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" 
                   style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              
              {/* Inner Ring */}
              <div className="absolute inset-2 w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" 
                   style={{ animationDuration: '2s' }}></div>
              
              {/* Center Dot */}
              <motion.div
                className="absolute inset-0 w-24 h-24 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Enhanced Loading Text */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.p
                className="text-3xl font-bold text-slate-200 mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading Portfolio...
              </motion.p>
              <motion.p
                className="text-slate-400 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Preparing something amazing for you
              </motion.p>
            </motion.div>

            {/* Loading Progress Bar */}
            <motion.div
              className="mt-8 w-64 h-2 bg-slate-700 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-20 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      {/* Enhanced Hero Section */}
      <section id="top" className="relative flex justify-center items-center h-screen">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/portfolio-nibin/main-image.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Enhanced Mouse Follow Effect */}
        <motion.div
          className="fixed w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none z-0"
          style={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          style={{ y: springY }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative text-center z-10"
        >
          {/* Enhanced Animated Icons */}
          <motion.div
            className="flex justify-center mb-8 space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            {[
              { icon: FaCode, gradient: "from-cyan-500 to-blue-600" },
              { icon: FaBrain, gradient: "from-blue-500 to-purple-600" },
              { icon: FaRocket, gradient: "from-purple-500 to-pink-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-4 bg-gradient-to-r ${item.gradient} rounded-full shadow-2xl`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.7 + index * 0.2, 
                  duration: 0.6, 
                  ease: "easeOut",
                  hover: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                <item.icon className="text-2xl text-white" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            className="text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              Nibin Joseph
            </span>
          </motion.h1>

          <motion.p
            className="text-3xl mb-4 text-slate-300 drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          >
            👋 Full-Stack Developer
          </motion.p>

          <motion.div
            className="text-2xl mt-6 font-light text-slate-200 drop-shadow-2xl mb-12 h-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
          >
            <Typewriter
              options={{
                strings: [
                  "MCA Student at Marian College",
                  "Java & Spring Boot Expert",
                  "Python & Django Developer",
                  "React & Next.js Enthusiast",
                  "Machine Learning Practitioner",
                  "Blockchain & AI Innovator"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </motion.div>
          
          {/* Enhanced Social Links with Hover Effects */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          >
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
                className={`p-4 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/70 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} border border-slate-700 hover:border-cyan-500`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <social.icon className="text-2xl text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg font-semibold rounded-xl transition-all duration-300 uppercase tracking-wide drop-shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.button
              onClick={() => setCvModalOpen(true)}
              className="group relative px-8 py-4 border-2 border-cyan-500 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-cyan-500 hover:text-white uppercase tracking-wide drop-shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      <About />
      <Resume />  
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

      {/* Enhanced CV Modal */}
      <AnimatePresence>
        {cvModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="bg-slate-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-slate-600"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-600 bg-gradient-to-r from-slate-700 to-slate-800">
                <h2 className="text-2xl font-bold text-cyan-400">My Resume</h2>
                <motion.button
                  onClick={() => setCvModalOpen(false)}
                  className="text-slate-400 hover:text-red-400 text-3xl font-bold transition-colors p-2 hover:bg-slate-700 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </div>
              <div className="p-6">
                <iframe
                  src="/portfolio-nibin/nibin-resume.pdf"
                  className="w-full h-96 rounded-lg border border-slate-600"
                  title="Resume Preview"
                ></iframe>
              </div>
              <div className="p-6 border-t border-slate-600 flex justify-end bg-gradient-to-r from-slate-800 to-slate-700">
                <motion.a
                  href="/portfolio-nibin/nibin-resume.pdf"
                  download
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
