import React, { useState, useEffect, useCallback } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const springY = useSpring(y, { stiffness: 200, damping: 40 });

  // Optimized mouse tracking with throttling
  const handleMouseMove = useCallback((e) => {
    if (!isMobile) {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    }
  }, [isMobile]);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove, isMobile]);

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans overflow-x-hidden">
      {/* Advanced Animated Background with Performance Optimization */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        {/* Optimized Floating Particles - Reduced count for mobile */}
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Advanced Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="fixed inset-0 flex flex-col justify-center items-center bg-slate-900 text-white z-50 px-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Advanced Loading Spinner */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Outer Ring */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-slate-300/30 border-t-cyan-500 rounded-full animate-spin"></div>
              
              {/* Middle Ring */}
              <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" 
                   style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
              
              {/* Inner Ring */}
              <div className="absolute inset-2 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" 
                   style={{ animationDuration: '1.8s' }}></div>
              
              {/* Center Dot */}
              <motion.div
                className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="mt-4 sm:mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <motion.p
                className="text-lg sm:text-2xl font-bold text-slate-200 mb-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Portfolio...
              </motion.p>
            </motion.div>

            {/* Loading Progress Bar */}
            <motion.div
              className="mt-3 sm:mt-4 w-32 sm:w-48 h-1 bg-slate-700 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      {/* Advanced Hero Section - Fully Responsive */}
      <section id="top" className="relative flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-8"
          style={{ backgroundImage: "url('/portfolio-nibin/main-image.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Advanced Mouse Follow Effect - Desktop Only */}
        {!isMobile && (
          <motion.div
            className="fixed w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl pointer-events-none z-0"
            style={{
              x: mousePosition.x - 120,
              y: mousePosition.y - 120,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        <motion.div
          style={{ y: springY }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-center z-10 max-w-4xl mx-auto"
        >
          {/* Advanced Animated Icons */}
          <motion.div
            className="flex justify-center mb-4 sm:mb-6 space-x-2 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            {[
              { icon: FaCode, gradient: "from-cyan-500 to-blue-600" },
              { icon: FaBrain, gradient: "from-blue-500 to-purple-600" },
              { icon: FaRocket, gradient: "from-purple-500 to-pink-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-2 sm:p-3 bg-gradient-to-r ${item.gradient} rounded-full shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.5 + index * 0.1, 
                  duration: 0.4, 
                  ease: "easeOut",
                  hover: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <item.icon className="text-lg sm:text-xl text-white" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              Nibin Joseph
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-slate-300 drop-shadow-xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          >
            👋 Full-Stack Developer
          </motion.p>

          <motion.div
            className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 font-light text-slate-200 drop-shadow-2xl mb-6 sm:mb-8 h-8 sm:h-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
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
          
          {/* Advanced Social Links */}
          <motion.div
            className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
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
                className={`p-2 sm:p-3 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/70 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} border border-slate-700 hover:border-cyan-500`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.4, ease: "easeOut" }}
              >
                <social.icon className="text-lg sm:text-xl text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Advanced Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 uppercase tracking-wide drop-shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.button
              onClick={() => setCvModalOpen(true)}
              className="group relative px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-cyan-500 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-cyan-500 hover:text-white uppercase tracking-wide drop-shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Advanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="w-4 h-6 sm:w-5 sm:h-8 border-2 border-cyan-400 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-0.5 h-1.5 sm:h-2 bg-cyan-400 rounded-full mt-1.5 sm:mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Advanced CV Modal - Fully Responsive */}
      <AnimatePresence>
        {cvModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div 
              className="bg-slate-800 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-hidden border border-slate-600"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center p-3 sm:p-4 border-b border-slate-600 bg-gradient-to-r from-slate-700 to-slate-800">
                <h2 className="text-lg sm:text-xl font-bold text-cyan-400">My Resume</h2>
                <motion.button
                  onClick={() => setCvModalOpen(false)}
                  className="text-slate-400 hover:text-red-400 text-xl sm:text-2xl font-bold transition-colors p-1 hover:bg-slate-700 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </div>
              <div className="p-3 sm:p-4">
                <iframe
                  src="/portfolio-nibin/nibin-resume.pdf"
                  className="w-full h-64 sm:h-80 rounded-lg border border-slate-600"
                  title="Resume Preview"
                ></iframe>
              </div>
              <div className="p-3 sm:p-4 border-t border-slate-600 flex justify-end bg-gradient-to-r from-slate-800 to-slate-700">
                <motion.a
                  href="/portfolio-nibin/nibin-resume.pdf"
                  download
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 text-sm sm:text-base"
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
