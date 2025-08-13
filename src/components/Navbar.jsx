import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "resume", "projects", "contact"];
      let found = "top";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 80) {
          found = section;
        }
      });
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-xl z-50 border-b border-slate-700/50 transition-all duration-500 ${scrolled ? "shadow-2xl shadow-slate-900/50" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        <motion.a
          href="#top"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Nibin Joseph
        </motion.a>

        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          {["About", "Resume", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-white transition-all duration-300 ${
                activeSection === item.toLowerCase() ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(item.toLowerCase())}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <motion.div
                className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === item.toLowerCase() ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="md:hidden text-white p-3 rounded-xl hover:bg-slate-800/50 transition-colors backdrop-blur-sm"
          onClick={() => setNavOpen(!navOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <AnimatePresence mode="wait">
            {navOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-10 text-3xl z-50"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {["About", "Resume", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-cyan-400 transition-all duration-300 relative group"
                onClick={() => setNavOpen(false)}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
            
            {/* Enhanced Close button for mobile */}
            <motion.button
              className="absolute top-8 right-8 text-white p-4 rounded-2xl hover:bg-slate-800/50 transition-colors backdrop-blur-sm"
              onClick={() => setNavOpen(false)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={28} />
            </motion.button>

            {/* Background decoration for mobile menu */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}