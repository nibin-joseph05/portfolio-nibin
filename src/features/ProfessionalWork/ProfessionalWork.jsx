import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaRocket, FaCode } from "react-icons/fa";

export default function ProfessionalWork() {
  const work = [
    {
      name: "ANAD CRM — Enterprise CRM Mobile Application",
      description: "Production Flutter application used for managing customer relationships, sales activities, and call analytics.",
      contributions: [
        "Feature development",
        "REST API integration",
        "UI improvements",
        "Performance optimization",
        "Git-based collaboration"
      ],
      playStore: "https://play.google.com/store/apps/details?id=com.paragon.anad.crm",
      icon: FaBriefcase,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "ANAD Dialer — Android Call Monitoring System",
      description: "Advanced Android application built with Kotlin and Jetpack Compose for enterprise call tracking and synchronization.",
      contributions: [
        "Background call monitoring",
        "Call log synchronization",
        "Recording detection",
        "Analytics dashboard",
        "Offline retry queue"
      ],
      icon: FaRocket,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="professional-work" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Professional Work
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {work.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <item.icon className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3">{item.name}</h3>
                  <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <FaCode className="text-cyan-400" />
                    Key Contributions:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {item.contributions.map((contribution, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <FaRocket className="text-cyan-500 text-xs" />
                        {contribution}
                      </div>
                    ))}
                  </div>

                  {item.playStore && (
                    <motion.a
                      href={item.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-sm font-bold shadow-lg hover:shadow-green-500/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get it on Play Store
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
