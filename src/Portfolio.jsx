import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaRocket, FaCode, FaBrain, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";

import { IMAGES, DOCUMENTS } from "./core/constants/assets";

import About from "./features/About/About";
import Experience from "./features/Experience/Experience";
import Resume from "./features/Resume/Resume";

const Projects = lazy(() => import("./features/Projects/Projects"));
const Contact = lazy(() => import("./features/Contact/Contact"));

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const springY = useSpring(y, { stiffness: 200, damping: 40 });

  const handleMouseMove = useCallback((e) => {
    if (!isMobile) {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    }
  }, [isMobile]);

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
    }, 800);

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
      <div className="fixed inset-0 z-0 text-cyan-400">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${IMAGES.MAIN_IMAGE})` }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Optimized Floating Particles - Reduced count for mobile */}
        {[...Array(isMobile ? 5 : 10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.7, 0.3],
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
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-slate-300/30 border-t-cyan-500 rounded-full animate-spin"></div>
              
              {/* Middle Ring */}
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" 
                   style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
              
              {/* Inner Ring */}
              <div className="absolute inset-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" 
                   style={{ animationDuration: '1.8s' }}></div>
              
              {/* Center Dot */}
              <motion.div
                className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="mt-3 sm:mt-4 md:mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <motion.p
                className="text-base sm:text-lg md:text-2xl font-bold text-slate-200 mb-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Portfolio...
              </motion.p>
            </motion.div>

            {/* Loading Progress Bar */}
            <motion.div
              className="mt-2 sm:mt-3 md:mt-4 w-24 sm:w-32 md:w-48 h-1 bg-slate-700 rounded-full overflow-hidden"
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

      {/* Advanced Hero Section - Centered Layout */}
      <section
        id="top"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white mb-4 leading-tight"
              >
                Nibin{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Joseph
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl sm:text-3xl font-bold text-slate-200 mb-6"
              >
                Software Engineer | Full-Stack & Mobile Developer
              </motion.p>

              <motion.div
                className="text-xl sm:text-2xl font-medium text-cyan-400 mb-8 flex items-center justify-center gap-2"
              >
                <span>Flutter • Kotlin</span>
                <span className="text-slate-500">|</span>
              </motion.div>

              <motion.p
                className="text-slate-300 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Building scalable mobile applications and backend systems with modern technologies, 
                real-time architectures, and AI integrations.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <motion.button
                  onClick={() => setCvModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center gap-2 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileAlt /> View Resume
                </motion.button>
                
                <motion.a
                  href="https://linktr.ee/nibin__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-slate-800/80 backdrop-blur-md text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-2 text-lg shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket className="text-cyan-400" /> Linktree
                </motion.a>

                <div className="flex gap-4 w-full justify-center mt-4">
                  {[
                    { icon: FaGithub, href: "https://github.com/nibin-joseph05", label: "GitHub" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nibin-joseph05", label: "LinkedIn" },
                    { icon: FaInstagram, href: "https://www.instagram.com/_.n_.i_.b_.i_.n", label: "Instagram" },
                    { icon: FaEnvelope, href: "mailto:nibin.joseph.career@gmail.com", label: "Email" }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-slate-800/80 backdrop-blur-md text-white rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all shadow-lg"
                      whileHover={{ scale: 1.1, y: -5, rotate: [0, -5, 5, 0] }}
                      whileTap={{ scale: 0.9 }}
                      title={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Improved Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      <div id="experience" className="scroll-mt-24">
        <Experience />
      </div>
      <div id="education" className="scroll-mt-24">
        <Resume />
      </div>
      
      <Suspense fallback={<div className="py-20 text-center text-slate-500 text-xl animate-pulse">Loading Projects...</div>}>
        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>
      </Suspense>

      <Suspense fallback={<div className="py-20 text-center text-slate-500 text-xl animate-pulse">Loading Contact...</div>}>
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </Suspense>
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
              className="bg-slate-800 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-hidden border border-slate-600"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center p-3 sm:p-4 border-b border-slate-600 bg-gradient-to-r from-slate-700 to-slate-800">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-cyan-400">My Resume</h2>
                <motion.button
                  onClick={() => setCvModalOpen(false)}
                  className="text-slate-400 hover:text-red-400 text-lg sm:text-xl md:text-2xl font-bold transition-colors p-1 hover:bg-slate-700 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </div>
              <div className="p-3 sm:p-4">
                <iframe
                  src={DOCUMENTS.RESUME}
                  className="w-full h-48 sm:h-64 md:h-80 rounded-lg border border-slate-600"
                  title="Resume Preview"
                ></iframe>
              </div>
              <div className="p-3 sm:p-4 border-t border-slate-600 flex justify-end bg-gradient-to-r from-slate-800 to-slate-700">
                <motion.a
                  href={DOCUMENTS.RESUME}
                  download
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 text-xs sm:text-sm md:text-base"
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
