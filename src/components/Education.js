import React from "react";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarRateIcon from "@mui/icons-material/StarRate";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const educationDetails = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kongu Engineering College, Erode",
    period: "2024 – Present",
    info: "CGPA: 8.51",
    icon: <WorkspacePremiumIcon className="text-yellow-400" fontSize="large" />,
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Thiagarajar College of Arts and Science, Madurai",
    period: "2021 – 2024",
    info: "CGPA: 7.49",
    icon: <SchoolIcon className="text-blue-400" fontSize="large" />,
  },
  {
    degree: "Higher Secondary",
    institution: "Krishnammal Ramasubbaiyer Higher Secondary School, Madurai",
    period: "2021",
    info: "Percentage: 88.2%",
    icon: <StarRateIcon className="text-green-400" fontSize="large" />,
  },
  {
    degree: "SSLC",
    institution: "B.M.S. Vidhyalayam Matriculation School, Madurai",
    period: "2019",
    info: "Percentage: 85.2%",
    icon: <EmojiEventsIcon className="text-pink-400" fontSize="large" />,
  },
];

const Education = () => (
  <section id="education" className="py-16 md:py-20 gradient-bg">
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
          Education
        </motion.h2>
        <p className="max-w-xl px-4 mx-auto text-base text-gray-400 md:text-lg">
          My academic journey and achievements in technology
        </p>
      </motion.div>

      {/* Mobile-optimized Education Cards */}
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2 md:gap-8">
        {educationDetails.map((ed, idx) => (
          <motion.div
            key={ed.degree}
            className="p-6 shadow-lg glass-effect md:p-8 rounded-xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            whileHover={{
              y: -3,
              scale: 1.02,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start mb-4 space-x-4">
              <div className="flex-shrink-0 mt-1">{ed.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-lg font-bold leading-tight text-white md:text-xl">
                  {ed.degree}
                </h3>
                <span className="text-xs font-bold text-yellow-400 md:text-sm">
                  {ed.period}
                </span>
              </div>
            </div>
            <div className="ml-12 text-left md:ml-14">
              <p className="mb-1 text-sm font-semibold leading-snug text-gray-200 md:text-base">
                {ed.institution}
              </p>
              <p className="text-xs text-gray-400 md:text-sm">{ed.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
