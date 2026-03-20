import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        const sections = ["about", "experience", "education", "projects", "contact"];
        let found = "top";
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 120) {
            found = section;
          }
        });
        setActiveSection(found);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-xl z-50 border-b border-slate-700/50 transition-all duration-500 ${scrolled ? "shadow-2xl shadow-slate-900/50" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 sm:py-4 md:py-5 px-4 sm:px-6">
        <motion.a
          href="#top"
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 hover:from-cyan-300 hover:via-blue-400 hover:to-blue-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Nibin Joseph
        </motion.a>

        <nav className="hidden lg:flex space-x-4 lg:space-x-6 text-[13px] lg:text-sm font-medium">
          {[
            { id: "top", label: "Home" },
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" }
          ].map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-white transition-all duration-300 ${
                activeSection === item.id ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(item.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <motion.div
                className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="lg:hidden text-white p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-slate-800/50 transition-colors backdrop-blur-sm"
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
                <span className="text-sm font-black tracking-widest">CLOSE</span>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-black tracking-widest">MENU</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed inset-0 w-full h-[100dvh] bg-slate-900/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-2xl sm:text-3xl z-[100]"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            {[
              { id: "top", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" }
            ].map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-all duration-300 relative group text-center font-bold tracking-tight ${
                  activeSection === item.id ? "text-cyan-400" : "text-white"
                }`}
                onClick={() => {
                  setNavOpen(false);
                  setActiveSection(item.id);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-full"
                  />
                )}
              </motion.a>
            ))}
            
            <motion.button
              className="absolute top-4 right-4 text-white p-3 rounded-xl hover:bg-slate-800/50 transition-colors"
              onClick={() => setNavOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xs font-black tracking-widest bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">CLOSE</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}