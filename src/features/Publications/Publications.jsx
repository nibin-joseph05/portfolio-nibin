import React from "react";
import { motion } from "framer-motion";

export default function Publications() {
  const research = {
    title: "AI Techniques for Sustainable Semiconductor Manufacturing",
    description: "Research exploring the use of Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs) to optimize water recycling systems and predict chemical toxicity in semiconductor manufacturing.",
    presentation: "Presented at Marian College Kuttikkanam, January 2025",
    tags: ["Artificial Intelligence", "Sustainability", "Semiconductor Manufacturing", "GANs & VAEs"]
  };

  return (
    <section id="publications" className="py-12 sm:py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden font-sans">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 font-sans tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
              Publications & Research
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "rgba(6, 182, 212, 0.3)" }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30" />
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {research.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-900/50 text-cyan-400 rounded-full border border-cyan-500/30 text-[10px] font-black uppercase tracking-widest font-sans">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-sans tracking-tight leading-tight">
              {research.title}
            </h3>
            
            <p className="text-cyan-400 font-bold text-sm sm:text-base font-sans italic opacity-80">
              {research.presentation}
            </p>

            <div className="pt-6 border-t border-slate-700/50">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg antialiased font-sans">
                {research.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
