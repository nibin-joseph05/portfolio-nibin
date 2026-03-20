import React from "react";
import { motion } from "framer-motion";


export default function Publications() {
const publications = [
    {
      title: "AI Techniques for Sustainable Semiconductor Manufacturing",
      description: "Research exploring GANs and VAEs to optimize water recycling and predict chemical toxicity in semiconductor manufacturing.",
      presentation: "Presented at Marian College Kuttikkanam",
      color: "from-purple-500 to-pink-600",
      tags: ["AI", "Sustainability"]
    },
    {
      title: "AURA — Secure Distributed System Architecture for Public Safety",
      description: "Whitepaper detailing the multi-tier architecture of AURA, focusing on blockchain immutability and AI-driven real-time emergency response.",
      presentation: "System Architecture Documentation",
      color: "from-blue-500 to-cyan-600",
      tags: ["Blockchain", "Public Safety"]
    },
    {
      title: "Xpose — AI-Driven Urgency Classification for Crime Reporting",
      description: "Exploration of BERT and Gemini-based NLP techniques for classifying crime reports by urgency and detecting spam in real-time.",
      presentation: "NLP Research Monograph",
      color: "from-emerald-500 to-teal-600",
      tags: ["NLP", "AI"]
    }
  ];

  return (
    <section id="publications" className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-600">
              Publications & Research
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Academic contributions and technical whitepapers.</p>
        </motion.div>

        <div className="grid gap-6">
          {publications.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-pink-500/30 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                    <span className="text-pink-400">{item.presentation}</span>
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-900/50 text-slate-400 rounded-lg">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
