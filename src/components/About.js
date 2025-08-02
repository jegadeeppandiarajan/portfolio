import React from "react";
import { motion } from "framer-motion";
import { EmojiObjects, Code, Group, TrendingUp } from "@mui/icons-material";

const features = [
  {
    icon: <Code className="text-yellow-400" fontSize="large" />,
    title: "Clean Code",
    description:
      "I write maintainable, scalable solutions with a love for code quality and clarity.",
  },
  {
    icon: <EmojiObjects className="text-blue-400" fontSize="large" />,
    title: "Creative Problem Solver",
    description:
      "Turning ideas into reality with innovative thinking and a can-do attitude.",
  },
  {
    icon: <TrendingUp className="text-green-400" fontSize="large" />,
    title: "Continuous Learner",
    description:
      "Always upgrading my skills to match the fast-paced tech world.",
  },
  {
    icon: <Group className="text-pink-400" fontSize="large" />,
    title: "Team Player",
    description: "Collaboration and empathy drive my work in diverse teams.",
  },
];

const aboutMe = `I'm a passionate full-stack developer with a drive for building impactful digital experiences. With a solid foundation in modern web technologies and a love for creative UI/UX, I thrive on solving real-world problems through code and design.`;

const interests = [
  "Full Stack Development",
  "Software Web Applications",
  "Cloud / SaaS",
  "UI/UX Design",
  "Continuous Learning",
];

const About = () => (
  <section
    id="about"
    className="py-16 md:py-20 gradient-bg scroll-mt-20"
    style={{ scrollMarginTop: "5rem" }}
  >
    <div className="container max-w-6xl px-4 mx-auto md:px-6">
      <motion.div
        className="mb-12 text-center md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
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
          About Me
        </motion.h2>
        <p className="max-w-2xl px-4 mx-auto text-base text-gray-300 md:text-lg">
          {aboutMe}
        </p>
      </motion.div>

      {/* Mobile-first responsive grid */}
      <div className="grid gap-8 mb-12 lg:grid-cols-2 lg:gap-10 md:mb-16">
        {/* Areas of Interest - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center order-2 p-6 text-base text-left text-gray-200 rounded-2xl glass-effect md:p-8 md:text-lg lg:order-1"
        >
          <div className="mb-6 text-xl font-semibold tracking-wide text-white md:text-2xl">
            Areas of Interest
          </div>
          <ul className="pl-0 space-y-3 list-none">
            {interests.map((topic, i) => (
              <motion.li
                key={i}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="flex-shrink-0 inline-block w-2 h-2 mr-3 bg-yellow-400 rounded-full" />
                <span className="text-sm md:text-base">{topic}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Features Grid - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid order-1 grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:order-2"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-4 text-center border shadow-lg bg-black/40 md:p-6 rounded-2xl border-white/10 glass-effect"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="mb-2 text-base font-bold text-white md:text-lg">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-400 md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
