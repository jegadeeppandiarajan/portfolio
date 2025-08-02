import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Code,
  Send,
  Person,
  Subject,
  Message,
  CheckCircle,
  AutoAwesome,
  Error,
} from "@mui/icons-material";

const contactInfo = [
  {
    icon: <Email className="text-yellow-400" fontSize="large" />,
    label: "Email",
    value: "jegadeeppandiarajan2003@gmail.com",
    href: "mailto:jegadeeppandiarajan2003@gmail.com",
    color: "#fbbf24",
  },
  {
    icon: <Phone className="text-green-400" fontSize="large" />,
    label: "Phone",
    value: "+91 7904390722",
    href: "tel:+917904390722",
    color: "#10b981",
  },
  {
    icon: <LocationOn className="text-blue-400" fontSize="large" />,
    label: "Location",
    value: "Madurai, Tamil Nadu",
    href: "https://maps.google.com/?q=Madurai,Tamil+Nadu",
    color: "#3b82f6",
  },
];

const socialLinks = [
  {
    icon: <GitHub fontSize="large" />,
    label: "GitHub",
    href: "https://github.com/jegadeeppandiarajan",
    color: "#ffffff",
  },
  {
    icon: <LinkedIn fontSize="large" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jegadeep-pandiarajan-537b282a5/",
    color: "#0a66c2",
  },
  {
    icon: <Code fontSize="large" />,
    label: "LeetCode",
    href: "https://leetcode.com/u/Jegadeep_pandiarajan",
    color: "#ffa116",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 gradient-bg scroll-mt-20">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Mobile-responsive heading */}
          <motion.h2
            className="px-2 mb-4 text-3xl font-bold text-white cursor-pointer md:text-4xl lg:text-5xl md:mb-6"
            whileHover={{
              color: "#fbbf24",
              textShadow: "0 0 30px rgba(251, 191, 36, 0.4)",
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            Get In Touch
          </motion.h2>
          <p className="max-w-2xl px-4 mx-auto text-base text-gray-300 md:text-lg">
            Let's collaborate and build something amazing together. I'm always
            open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        {/* Mobile-first responsive grid */}
        <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto xl:grid-cols-2 md:gap-12">
          {/* Contact Information - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 xl:order-1"
          >
            <h3 className="flex items-center justify-center mb-8 text-xl font-bold text-white xl:justify-start md:text-2xl">
              <AutoAwesome className="mr-3 text-yellow-400" />
              Contact Information
            </h3>

            {/* Mobile-optimized contact details */}
            <div className="mb-10 space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="flex items-center p-4 transition-all duration-300 md:p-5 glass-effect rounded-xl group hover:scale-105 touch-manipulation"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: `0 8px 25px ${info.color}30`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 mr-4 transition-transform duration-300 group-hover:scale-110">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-sm font-medium text-white truncate md:text-base">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mobile-optimized social links */}
            <h4 className="mb-6 text-lg font-semibold text-center text-white md:text-xl xl:text-left">
              Follow Me
            </h4>
            <div className="flex justify-center space-x-4 xl:justify-start">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-300 transition-all duration-300 md:w-14 md:h-14 glass-effect group touch-manipulation"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: `0 8px 25px ${social.color}40`,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 xl:order-2"
          >
            <div className="p-6 glass-effect md:p-8 rounded-2xl">
              <h3 className="flex items-center justify-center mb-6 text-xl font-bold text-white xl:justify-start md:text-2xl">
                <Send className="mr-3 text-yellow-400" />
                Send Message
              </h3>

              {/* Error/Success Messages */}
              {error && (
                <motion.div
                  className="flex items-center p-3 mb-6 text-sm text-red-300 border rounded-lg bg-red-500/20 border-red-500/50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Error className="flex-shrink-0 mr-2" fontSize="small" />
                  <span>{error}</span>
                </motion.div>
              )}

              {isSubmitted && (
                <motion.div
                  className="flex items-center p-3 mb-6 text-sm text-green-300 border rounded-lg bg-green-500/20 border-green-500/50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle
                    className="flex-shrink-0 mr-2"
                    fontSize="small"
                  />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Mobile-optimized form fields */}
                <div className="relative">
                  <Person
                    className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                    fontSize="small"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-4 text-sm text-white placeholder-gray-400 transition-colors border rounded-lg md:py-4 bg-black/40 border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:text-base"
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="relative">
                  <Email
                    className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                    fontSize="small"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-4 text-sm text-white placeholder-gray-400 transition-colors border rounded-lg md:py-4 bg-black/40 border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:text-base"
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="relative">
                  <Subject
                    className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                    fontSize="small"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-4 text-sm text-white placeholder-gray-400 transition-colors border rounded-lg md:py-4 bg-black/40 border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:text-base"
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="relative">
                  <Message
                    className="absolute text-gray-400 left-3 top-4"
                    fontSize="small"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-4 text-sm text-white placeholder-gray-400 transition-colors border rounded-lg resize-none md:py-4 bg-black/40 border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 md:text-base"
                    disabled={isLoading}
                    required
                  />
                </div>

                {/* Mobile-optimized submit button */}
                <motion.button
                  type="submit"
                  className="relative w-full py-3 overflow-hidden font-semibold text-black rounded-lg md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 group disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
                  whileHover={
                    !isLoading && !isSubmitted
                      ? {
                          scale: 1.02,
                          boxShadow: "0 8px 25px rgba(251, 191, 36, 0.4)",
                        }
                      : {}
                  }
                  whileTap={!isLoading && !isSubmitted ? { scale: 0.98 } : {}}
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        className="w-5 h-5 mr-2 border-2 rounded-full border-black/30 border-t-black"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle className="mr-2" />
                      Message Sent!
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2" />
                      Send Message
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
