import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("Configuration error. Please check your API keys.");
      return;
    }
  
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email sending error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <p className="text-lg text-gray-300 text-center mb-12">
          Have a project in mind? Let's chat! 💬
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <motion.div
            className="w-full md:w-1/2 p-8 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-xl shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 transition-all"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
                { label: "Subject", type: "text", name: "subject" },
              ].map(({ label, type, name }) => (
                <div key={name} className="relative">
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder={label}
                    required
                  />
                  <label
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
                  >
                    {label}
                  </label>
                </div>
              ))}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all h-32 resize-none"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
                >
                  Message
                </label>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:scale-105 transition-transform hover:shadow-lg shadow-pink-500/40"
                whileTap={{ scale: 0.95 }}
              >
                Send Message 🚀
              </motion.button>
              {status && <p className="text-center text-pink-400 mt-4">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
