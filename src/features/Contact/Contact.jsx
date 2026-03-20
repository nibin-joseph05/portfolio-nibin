import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      setStatus("Please fix the errors before sending.");
      return;
    }
    
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:nibin.joseph.career@gmail.com?subject=${encodeURIComponent(subject || "Contact from Portfolio")}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    setStatus("Opening email client...");
    
    setTimeout(() => {
      setStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const infoItems = [
    {
      title: "Email",
      value: "nibin.joseph.career@gmail.com",
      link: "mailto:nibin.joseph.career@gmail.com",
      
    },
    {
      title: "Location",
      value: "Kerala, India (IST)",
      link: null,
     
    },
    {
      title: "Available for",
      value: "Full-time, Freelance, Collaborations",
      link: null,
      
    },
    {
      title: "Working Mode",
      value: "Remote & Hybrid preferred",
      link: null,
      
    }
  ];

  return (
    <section
      id="contact"
      className="py-8 sm:py-10 md:py-12 bg-slate-900 text-white relative overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-10 left-10 sm:left-10 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-10 right-10 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
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
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600">
            Get In Touch
          </span>
        </motion.h2>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl sm:max-w-5xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind? Let's collaborate and bring your ideas to life! 💬
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-stretch">
          
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-2xl flex-grow flex flex-col justify-center"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-8 sm:mb-10 flex items-center gap-3">
                Let's Connect
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors border border-transparent hover:border-cyan-500/20"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl sm:text-3xl mt-1">{item.icon}</div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-slate-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white hover:text-cyan-400 font-semibold text-sm sm:text-base md:text-lg transition-colors break-all block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-700/50 text-slate-400 text-sm italic text-center">
                Always open to discussing new opportunities and creative ideas.
              </div>
            </motion.div>
          </motion.div>

          
          <motion.div
            className="bg-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              Send Message
            </h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                { [
                  { label: "Name", type: "text", name: "name" },
                  { label: "Email", type: "email", name: "email" },
                  { label: "Subject", type: "text", name: "subject" },
                ].map(({ label, type, name }, index) => (
                  <motion.div 
                    key={name} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={`peer w-full bg-slate-700/50 border ${
                        errors[name] ? "border-red-500 ring-1 ring-red-500" : "border-slate-600"
                      } rounded-lg sm:rounded-xl py-3 sm:py-4 md:py-4 px-3 sm:px-4 md:px-5 text-white placeholder-transparent focus:outline-none focus:ring-2 ${
                        errors[name] ? "focus:ring-red-500" : "focus:ring-cyan-500"
                      } focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base`}
                      placeholder={label}
                    />
                    <label
                      className={`absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-4 text-slate-400 text-xs sm:text-sm transition-all pointer-events-none
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:bg-[#0f172a] peer-focus:px-2 ${
                          errors[name] ? "peer-focus:text-red-400" : "peer-focus:text-cyan-400"
                        }
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0f172a] peer-[:not(:placeholder-shown)]:px-2`}
                    >
                      {label}
                    </label>
                    {errors[name] && (
                      <span className="text-red-400 text-[10px] sm:text-xs mt-1 ml-1 block">
                        {errors[name]}
                      </span>
                    )}
                  </motion.div>
                ))}
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`peer w-full bg-slate-700/50 border ${
                    errors.message ? "border-red-500 ring-1 ring-red-500" : "border-slate-600"
                  } rounded-lg sm:rounded-xl py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 text-white placeholder-transparent focus:outline-none focus:ring-2 ${
                    errors.message ? "focus:ring-red-500" : "focus:ring-cyan-500"
                  } focus:border-transparent transition-all h-32 sm:h-40 resize-none backdrop-blur-sm text-sm sm:text-base`}
                  placeholder="Message"
                ></textarea>
                <label
                  className={`absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 text-slate-400 text-xs sm:text-sm transition-all pointer-events-none
                    peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:bg-[#0f172a] peer-focus:px-2 ${
                      errors.message ? "peer-focus:text-red-400" : "peer-focus:text-cyan-400"
                    }
                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#0f172a] peer-[:not(:placeholder-shown)]:px-2`}
                >
                  Message
                </label>
                {errors.message && (
                  <span className="text-red-400 text-[10px] sm:text-xs mt-1 ml-1 block">
                    {errors.message}
                  </span>
                )}
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 sm:gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >

                Send Message
              </motion.button>
              
              {status && (
                <motion.p
                  className={`text-center mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-medium ${
                    status.includes("successfully") 
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                      : status.includes("error") || status.includes("Failed")
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
