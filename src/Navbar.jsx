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
      const sections = ["about", "resume", "portfolio", "contact"];
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
    <header className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 border-b border-white/20 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="#top"
          className="text-3xl font-extrabold text-white uppercase tracking-wide hover:text-pink-500 transition duration-300"
        >
          Nibin Joseph
        </a>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {["About", "Resume", "Portfolio", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-white transition duration-300 ${activeSection === item.toLowerCase() ? "text-pink-500" : "hover:text-pink-500"}`}
              whileHover={{ scale: 1.1 }}
            >
              {item}
              <motion.div
                className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === item.toLowerCase() ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <div
          className="md:hidden cursor-pointer text-white"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-2xl"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {["About", "Resume", "Portfolio", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-pink-500 transition duration-300"
                onClick={() => setNavOpen(false)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}