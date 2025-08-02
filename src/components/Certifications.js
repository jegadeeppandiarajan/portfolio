import React from "react";
import { motion } from "framer-motion";
import {
  WorkspacePremium,
  Code,
  Cloud,
  ArrowOutward,
} from "@mui/icons-material";

// Import your certification images here
// You will need to create these files in your assets folder
import certImage1 from "../assets/images/certifications/github-foundations.jpg"; // Replace with your image
import certImage2 from "../assets/images/certifications/java-programming.jpg"; // Replace with your image
// import certImage3 from "../assets/images/certifications/typewriting.jpg"; // Replace with your image
import certImage4 from "../assets/images/certifications/oracle-oci.jpg"; // Replace with your image

const certifications = [
  {
    image: certImage1, // New image property
    icon: <WorkspacePremium fontSize="large" />,
    title: "GitHub Foundations Certification",
    issuer: "GitHub",
    link: "https://www.linkedin.com/in/jegadeep-pandiarajan/details/certifications/", // Replace with your actual GitHub cert link
    color: "#fbbf24", // Yellow
  },
  {
    image: certImage2, // New image property
    icon: <Code fontSize="large" />,
    title: "Java Programming",
    issuer: "Guvi Platform",
    link: "https://example.com/java-cert", // Replace with your actual Java cert link
    color: "#4ade80", // Green
  },
  {
    image: certImage4, // New image property
    icon: <Cloud fontSize="large" />,
    title: "Oracle Cloud Developer",
    issuer: "Oracle",
    link: "https://example.com/oci-cert", // Replace with your actual OCI cert link
    color: "#a855f7", // Purple
  },
];

const Certifications = () => (
  <section id="certifications" className="py-16 md:py-20 gradient-bg">
    <div className="container px-4 mx-auto md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12 text-center md:mb-16"
      >
        <motion.h2
          className="px-2 mb-4 text-3xl font-bold text-white cursor-pointer md:text-4xl lg:text-5xl md:mb-6"
          whileHover={{
            color: "#fbbf24",
            textShadow: "0 0 30px rgba(251, 191, 36, 0.4)",
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
        >
          Certifications & Awards
        </motion.h2>
        <p className="max-w-xl px-4 mx-auto text-base text-gray-300 md:text-lg">
          Verified credentials showcasing my commitment to learning and
          excellence.
        </p>
      </motion.div>

      <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:gap-10">
        {certifications.map((cert, idx) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }} // amount:0.2 to trigger early
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative flex flex-col items-start overflow-hidden transition-transform duration-300 glass-effect rounded-2xl hover:scale-105 group"
            whileHover={{
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Dynamic border on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              initial={{
                border: "2px solid transparent",
                opacity: 0,
                boxShadow: "none",
              }}
              whileHover={{
                border: `2px solid ${cert.color}40`,
                boxShadow: `0 0 10px ${cert.color}80, 0 0 20px ${cert.color}30`,
                opacity: 1,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Certification Image */}
            <motion.div className="relative w-full overflow-hidden">
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="object-cover w-full h-auto rounded-t-2xl aspect-video" // Use aspect-video for a consistent ratio
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Certification Details */}
            <div className="relative z-10 flex flex-row items-center flex-1 w-full p-5 space-x-4 md:p-6 md:space-x-5">
              <div
                className="flex-shrink-0 text-white group-hover:text-transparent"
                style={{ color: cert.color }}
              >
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <motion.h3
                  className="mb-1 text-base font-semibold leading-tight text-white transition-colors duration-300 md:text-xl"
                  whileHover={{ color: cert.color }}
                >
                  {cert.title}
                </motion.h3>
                <motion.span
                  className="text-xs text-gray-400 transition-colors duration-300 md:text-sm"
                  whileHover={{ color: cert.color }}
                >
                  {cert.issuer}
                </motion.span>
              </div>
              {/* Link arrow icon */}
              <motion.div
                className="relative z-10 text-gray-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                initial={{ x: 10, scale: 0.8 }}
                whileInView={{ x: 0, scale: 1 }}
                whileHover={{ x: 5, color: cert.color }}
                transition={{ duration: 0.3 }}
              >
                <ArrowOutward fontSize="small" />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
