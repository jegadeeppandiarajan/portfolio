import React from "react";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Email, Favorite } from "@mui/icons-material";

const Footer = () => {
  const socialLinks = [
    {
      icon: GitHub,
      href: "https://github.com/jegadeeppandiarajan",
      label: "GitHub",
    },
    {
      icon: LinkedIn,
      href: "https://www.linkedin.com/in/jegadeep-pandiarajan-537b282a5/",
      label: "LinkedIn",
    },
    {
      icon: Email,
      href: "mailto:jegadeeppandiarajan2003@email.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Jegadeep</h3>
            <p className="mb-4 text-gray-400">
              Full Stack Developer passionate about creating amazing digital
              experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-primary"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>jegadeeppandiarajan2003@gmail.com</p>
              <p>7904390722</p>
              <p>Your Madurai, TamilNadu</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025 Jegadeep. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-1 text-sm text-gray-400 md:mt-0">
            <span></span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Favorite className="text-red-500" />
            </motion.div>
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
