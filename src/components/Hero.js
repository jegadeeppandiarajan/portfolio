import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import profileImg from "../assets/images/profile.jpg";

// Array of images to cycle through
const images = [profileImg];

const socials = [
  {
    icon: GitHub,
    link: "https://github.com/jegadeeppandiarajan",
    color: "#ffffff",
  },
  {
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/jegadeep-pandiarajan-537b282a5/",
    color: "#0a66c2",
  },
  {
    icon: Email,
    link: "mailto:jegadeeppandiarajan2003@gmail.com",
    color: "#fbbf24",
  },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.15, duration: 0.8 },
    },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-20 pb-10 overflow-hidden gradient-bg"
    >
      {/* Decorative background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-white/8 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Profile image - adjust w-XX and h-XX to resize */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center w-full mb-8 md:mb-12"
          >
            <motion.div
              className="relative flex items-center justify-center w-full h-48 max-w-md overflow-hidden bg-black shadow-2xl md:max-w-2xl md:h-64 rounded-2xl" // Added overflow-hidden
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                duration: 1.2,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Transition using AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex} // Key is crucial for AnimatePresence to detect a change
                  src={images[currentImageIndex]}
                  alt={`Jegadeep Pandiarajan - ${currentImageIndex + 1}`}
                  className="object-contain w-full h-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
              {/* Optional overlay for a golden fade, as above */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(251,191,36,0.06) 5%, transparent 100%)",
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.42 }}
              />
            </motion.div>
          </motion.div>

          {/* Animated name */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="px-2 mb-4 text-3xl font-light tracking-wide text-white md:text-5xl lg:text-7xl md:mb-7"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {Array.from("JEGADEEP P").map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + idx * 0.06,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                    color: "#fbbf24",
                    textShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                  className="inline-block cursor-pointer"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="px-4 mb-6 text-lg font-light tracking-wide text-gray-300 md:text-xl lg:text-2xl md:mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Aspiring Full Stack & Cloud Devloper
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl px-4 mx-auto mb-8 text-base font-light leading-relaxed text-gray-400 md:text-lg md:mb-12"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Dedicated to building elegant, high-performance digital experiences
            through clean code and intuitive design. Passionate about solving
            real-world problems and driving innovation with cutting-edge
            technology.
          </motion.p>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center px-4 mb-8 space-x-4 md:space-x-6 md:mb-12"
          >
            {socials.map(({ icon: Icon, link, color }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 overflow-hidden text-gray-300 transition-all duration-300 md:w-14 md:h-14 glass-effect group touch-manipulation"
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: `0 6px 20px ${color}30`,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  className="relative z-10 transition-all duration-300 group-hover:scale-110"
                  fontSize="small"
                  style={{ color: "inherit" }}
                />
                <motion.div
                  className="absolute inset-0 border rounded-full border-white/20"
                  initial={{ scale: 0, opacity: 1 }}
                  whileHover={{
                    scale: 1.3,
                    opacity: 0,
                    transition: { duration: 0.5 },
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center gap-4 px-4 sm:flex-row md:gap-6"
          >
            <motion.a
              href="#projects"
              className="relative px-6 py-3 overflow-hidden font-medium text-center text-white border md:px-10 md:py-4 border-white/30 rounded-xl group touch-manipulation"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white rounded-xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                View Work
              </span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Jegadeep-Pandiarajan-Resume.pdf"
              className="relative px-6 py-3 overflow-hidden font-medium text-center text-black bg-white md:px-10 md:py-4 rounded-xl group touch-manipulation"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 1.8,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                boxShadow: "0 8px 25px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-yellow-400 rounded-xl"
                initial={{ scale: 0, borderRadius: "12px" }}
                whileHover={{
                  scale: 1,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              />
              <span className="relative z-10 font-semibold">Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
