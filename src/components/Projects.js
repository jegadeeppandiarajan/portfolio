import React from "react";
import { motion } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";

const projects = [
  {
    title: "On-Stream Vending for Construction Raw Materials",
    description:
      "Role-based web portal (Admin/User/Vendor) built with HTML, CSS, and PHP. Features real-time product updates, order tracking, vendor management, and secure admin controls.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github: "https://github.com/jegadeeppandiarajan/raw-material-e-commerce",
    live: "",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "On-Stream Portal for Paint Shop",
    description:
      "Interactive single-page ReactJS app with Firebase authentication and Firestore DB. Includes product browsing, ordering, stock tracking, and customer history.",
    tech: ["ReactJS", "Firebase", "Firestore"],
    github: "https://github.com/jegadeeppandiarajan/PaintShop-react_firebase",
    live: "",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 md:py-20 gradient-bg scroll-mt-20">
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
          Projects
        </motion.h2>
        <p className="max-w-xl px-4 mx-auto text-base text-gray-300 md:text-lg">
          A selection of real-world builds, from web portals to full-stack apps.
        </p>
      </motion.div>

      {/* Mobile-first responsive grid */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2 md:gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="flex flex-col overflow-hidden border shadow-lg rounded-2xl glass-effect border-white/10"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(17, 25, 40, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Mobile-optimized image */}
            <div className="relative w-full h-48 overflow-hidden md:h-56 bg-black/40">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Mobile-optimized content */}
            <div className="flex flex-col flex-1 p-5 md:p-6">
              <h3 className="mb-3 text-xl font-semibold leading-tight text-white md:text-2xl">
                {proj.title}
              </h3>
              <p className="flex-1 mb-4 text-sm leading-relaxed text-gray-300 md:text-base">
                {proj.description}
              </p>

              {/* Mobile-friendly tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-white/10 text-yellow-400 text-xs md:text-sm rounded-full border border-yellow-400/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-optimized action buttons */}
              <div className="flex flex-col gap-3 mt-auto sm:flex-row">
                {proj.github && (
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-400 transition rounded-lg sm:justify-start hover:text-yellow-400 glass-effect"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GitHub fontSize="small" className="mr-2" />
                    View Code
                  </motion.a>
                )}
                {proj.live && (
                  <motion.a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-400 transition rounded-lg sm:justify-start hover:text-yellow-400 glass-effect"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Launch fontSize="small" className="mr-2" />
                    Live Demo
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

export default Projects;
