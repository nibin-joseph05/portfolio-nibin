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

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-5xl font-bold text-center text-pink-400 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>
        <p className="text-lg text-gray-300 text-center mb-12">
          I'd love to hear from you. Feel free to contact me!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="p-8 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-lg shadow-lg"
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
                    className="peer w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-pink-400"
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
                  className="peer w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-pink-400 h-32 resize-none"
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
                className="w-full py-3 bg-pink-600 text-lg font-semibold rounded-lg hover:bg-pink-700 transition-all"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                Submit
              </motion.button>
              {status && <p className="text-center text-pink-400 mt-4">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}