import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const Resume = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const educationData = [
    {
      title: "MCA",
      duration: "2024 - 2026",
      college: "Marian College Kuttikkanam (Autonomous)",
      description: "Completed March 2026. Focused on: Full-Stack Development, AI Systems, Distributed Architectures. Overall 8.19 CGPA / 10. Major academic project: AURA — AI-Powered Safety, Wellness and Community Platform.",
      status: "Completed",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "BCA",
      duration: "2021 - 2024",
      college: "St Antony's College Peruvanthanam",
      description: "Studied core subjects: Data Structures, DBMS, Operating Systems, Computer Networks, Web Development. Coordinated a VR experience during the tech festival.",
      status: "Completed",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Schooling",
      duration: "2009 - 2021",
      college: "St Joseph Higher Secondary School Peruvanthanam",
      description: "Completed secondary education with core sciences and mathematics.",
      status: "Completed",
      color: "from-blue-500 to-cyan-500"
    },
  ];

  return (
    <section id="education" className="py-8 sm:py-10 md:py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
            Education
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl sm:max-w-5xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My academic journey and qualifications
        </motion.p>

        {/* Education Timeline */}
        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 sm:w-2 h-full bg-gradient-to-b from-cyan-500 via-blue-600 to-blue-700 rounded-full shadow-2xl shadow-cyan-500/50"></div>

          {/* Education Items */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center pt-8 sm:pt-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {/* Enhanced Timeline Dot */}
                <motion.div 
                  className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-2 sm:border-4 border-slate-900 z-10 shadow-2xl shadow-cyan-500/50"
                  whileHover={{ scale: 1.3 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(6, 182, 212, 0.4)",
                      "0 0 0 20px rgba(6, 182, 212, 0)",
                      "0 0 0 0 rgba(6, 182, 212, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                {/* Content Card */}
                <div className={`w-full sm:w-5/12 pl-12 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}>
                  <motion.div 
                    className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                    }}
                    style={{ y }}
                  >
                    {/* Enhanced Status Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400">{item.title}</h3>
                      </div>
                      <motion.span 
                        className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto ${
                          item.status === 'Completed' 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.status}
                      </motion.span>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <motion.p 
                        className="text-cyan-300 font-medium text-sm sm:text-base md:text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {item.duration}
                      </motion.p>
                      <motion.p 
                        className="text-slate-200 font-semibold text-lg sm:text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {item.college}
                      </motion.p>
                      <motion.p 
                        className="text-slate-300 leading-relaxed text-sm sm:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    {/* Gradient Border Effect */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-transparent rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Info */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            Achievements & Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div 
              className="text-center p-4 sm:p-6 bg-slate-700/30 rounded-xl sm:rounded-2xl border border-slate-600/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2 sm:mb-3">Student Police Cadet (SPC)</h4>
              <p className="text-slate-300 text-sm sm:text-base">Participated in structured leadership and civic training focused on discipline, teamwork, and public safety.</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 sm:p-6 bg-slate-700/30 rounded-xl sm:rounded-2xl border border-slate-600/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2 sm:mb-3">Technical Coordination</h4>
              <p className="text-slate-300 text-sm sm:text-base">Coordinated and managed Virtual Reality experience at a college tech fest.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
