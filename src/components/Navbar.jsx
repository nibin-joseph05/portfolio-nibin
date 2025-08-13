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
    <header className={`fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700/50 transition-all duration-300 ${scrolled ? "shadow-xl shadow-slate-900/50" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <motion.a
          href="#top"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Nibin Joseph
        </motion.a>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {["About", "Resume", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-white transition-all duration-300 ${
                activeSection === item.toLowerCase() ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setActiveSection(item.toLowerCase())}
            >
              {item}
              <motion.div
                className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === item.toLowerCase() ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          onClick={() => setNavOpen(!navOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-2xl z-50"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {["About", "Resume", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-cyan-400 transition-all duration-300 relative group"
                onClick={() => setNavOpen(false)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
            ))}
            
            {/* Close button for mobile */}
            <motion.button
              className="absolute top-6 right-6 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setNavOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTimes size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}