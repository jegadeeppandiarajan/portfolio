import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaGithub,
  FaCode,
  FaServer,
  FaTools,
  FaLaptopCode,
  FaFire,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiOracle } from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode className="text-blue-400" size={28} />,
      color: "#3b82f6",
      gradient: "from-blue-500 to-blue-600",
      skills: [
        {
          name: "React",
          icon: <FaReact className="text-blue-400" size={24} />,
          color: "#61dafb",
          description: "Component-based UI",
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" size={24} />,
          color: "#f7df1e",
          description: "Dynamic programming",
        },
        {
          name: "HTML/CSS",
          icon: <FaHtml5 className="text-orange-400" size={24} />,
          color: "#e34f26",
          description: "Semantic markup",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" size={24} />,
          color: "#06b6d4",
          description: "Utility-first CSS",
        },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-400" size={28} />,
      color: "#10b981",
      gradient: "from-green-500 to-green-600",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" size={24} />,
          color: "#339933",
          description: "Server-side runtime",
        },
        {
          name: "PHP",
          icon: <FaPhp className="text-purple-400" size={24} />,
          color: "#777bb4",
          description: "Web development",
        },
        {
          name: "Python",
          icon: <FaPython className="text-yellow-300" size={24} />,
          color: "#3776ab",
          description: "Versatile programming",
        },
        {
          name: "Java",
          icon: <FaJava className="text-orange-500" size={24} />,
          color: "#ed8b00",
          description: "Enterprise solutions",
        },
      ],
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="text-purple-400" size={28} />,
      color: "#8b5cf6",
      gradient: "from-purple-500 to-purple-600",
      skills: [
        {
          name: "Git/GitHub",
          icon: <FaGithub className="text-gray-100" size={24} />,
          color: "#f05032",
          description: "Version control",
        },
        {
          name: "Firebase",
          icon: <FaFire className="text-orange-400" size={24} />,
          color: "#ffca28",
          description: "Backend services",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-400" size={24} />,
          color: "#4479a1",
          description: "Database management",
        },
        {
          name: "Oracle Cloud",
          icon: <SiOracle className="text-red-400" size={24} />,
          color: "#f80000",
          description: "Cloud infrastructure",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 overflow-hidden md:py-20 gradient-bg"
    >
      {/* Mobile-optimized background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-48 h-48 rounded-full top-10 md:top-20 left-5 md:left-10 md:w-72 md:h-72 bg-blue-500/5 blur-2xl md:blur-3xl" />
        <div className="absolute w-64 h-64 rounded-full bottom-10 md:bottom-20 right-5 md:right-10 md:w-96 md:h-96 bg-purple-500/5 blur-2xl md:blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
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
            Skills & Expertise
          </motion.h2>
          <p className="max-w-3xl px-4 mx-auto text-base text-gray-300 md:text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Mobile-first responsive grid */}
        <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              className="relative p-6 transition-all duration-500 glass-effect md:p-8 rounded-2xl hover:scale-105 group touch-manipulation"
              whileHover={{
                boxShadow: `0 20px 40px ${category.color}20`,
                borderColor: `${category.color}40`,
              }}
              whileTap={{ scale: 0.98 }} // Mobile tap feedback
            >
              {/* Mobile-optimized category header */}
              <div className="flex items-center justify-center mb-8 md:mb-10">
                <motion.div
                  className={`mr-3 md:mr-4 p-2 md:p-3 rounded-full bg-gradient-to-r ${category.gradient} shadow-lg`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }} // Mobile tap effect
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white transition-colors duration-300 md:text-2xl group-hover:text-yellow-400">
                  {category.title}
                </h3>
              </div>

              {/* Mobile-optimized skills grid */}
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="relative flex items-center p-4 overflow-hidden text-left transition-all duration-300 border cursor-pointer bg-black/30 border-white/10 md:p-5 rounded-xl hover:bg-black/40 hover:border-white/20 group/skill touch-manipulation"
                    whileHover={{
                      y: -2,
                      boxShadow: `0 12px 25px ${skill.color}25`,
                    }}
                    whileTap={{ scale: 0.95 }} // Mobile feedback
                  >
                    {/* Mobile-friendly background glow */}
                    <motion.div
                      className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover/skill:opacity-100"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
                      }}
                    />

                    {/* Mobile-optimized icon */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 mr-3 transition-transform duration-300 md:mr-4 group-hover/skill:scale-110"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        filter: `drop-shadow(0 4px 8px ${skill.color}60)`,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Mobile-responsive content */}
                    <div className="relative z-10 flex-1 min-w-0">
                      {" "}
                      {/* min-w-0 for text truncation */}
                      <h4 className="text-base font-semibold text-white truncate transition-colors duration-300 md:text-lg group-hover/skill:text-yellow-400">
                        {skill.name}
                      </h4>
                      <p className="mt-1 text-sm text-gray-400 transition-colors duration-300 group-hover/skill:text-gray-300 line-clamp-1">
                        {skill.description}
                      </p>
                    </div>

                    {/* Mobile-friendly progress indicator */}
                    <div className="relative z-10 flex items-center flex-shrink-0 ml-3 md:ml-4">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <motion.div
                            key={dot}
                            className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-600 rounded-full group-hover/skill:bg-yellow-400 transition-colors duration-300"
                            style={{ transitionDelay: `${dot * 60}ms` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Mobile-friendly animation line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-responsive learning banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center md:mt-16"
        >
          <div className="relative max-w-4xl p-6 mx-auto overflow-hidden border glass-effect md:p-8 rounded-2xl border-white/10">
            {/* Mobile-optimized background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-yellow-500/5" />

            <div className="relative z-10 flex flex-col items-center justify-center mb-4 md:flex-row md:mb-6">
              <motion.div
                className="p-2 mb-3 rounded-full shadow-lg md:mb-0 md:mr-4 md:p-3 bg-gradient-to-r from-yellow-400 to-yellow-500"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaCode className="text-black" size={20} />
              </motion.div>
              <h4 className="text-2xl font-bold text-center text-white md:text-3xl">
                Continuous Learning
              </h4>
            </div>
            <p className="relative z-10 px-2 text-base leading-relaxed text-gray-300 md:text-lg">
              Actively expanding expertise in cutting-edge technologies.
              Currently mastering
              <span className="px-2 py-1 mx-1 text-sm font-semibold text-yellow-400 rounded bg-yellow-400/10 md:text-base">
                Next.js
              </span>
              ,
              <span className="px-2 py-1 mx-1 text-sm font-semibold text-blue-400 rounded bg-blue-400/10 md:text-base">
                TypeScript
              </span>
              , and
              <span className="px-2 py-1 mx-1 text-sm font-semibold text-purple-400 rounded bg-purple-400/10 md:text-base">
                AWS Cloud Services
              </span>
              to deliver scalable, enterprise-grade solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
