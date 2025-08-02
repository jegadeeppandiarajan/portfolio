import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Close } from "@mui/icons-material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "certifications",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Certifications",
    "Projects",
    "Contact",
  ];

  const handleNavClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    setActiveSection(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-black/20 backdrop-blur-sm"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container px-4 mx-auto sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Mobile Optimized */}
            <motion.div
              className="relative z-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="text-lg font-bold tracking-wide cursor-pointer sm:text-xl md:text-2xl"
                style={{ fontFamily: "Inter, sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick("Home")}
              >
                <span className="text-white">~~></span>
                <span className="ml-1 text-yellow-400 sm:ml-2">JEGADEEP</span>
              </motion.div>
            </motion.div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="items-center hidden space-x-8 lg:flex">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.div
                    key={item}
                    className="relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`font-medium transition-all duration-300 relative z-10 text-sm xl:text-base py-2 px-1 ${
                        isActive
                          ? "text-yellow-400 font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item}
                    </button>

                    {/* Active indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="relative z-50 lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-lg menu-button sm:w-12 sm:h-12 hover:bg-white/10 active:scale-95"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <Close fontSize="medium" />
                    ) : (
                      <Menu fontSize="medium" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-black/95 backdrop-blur-xl border-l border-white/10 z-40 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="text-lg font-bold text-white">
                    <span className="text-white">Menu</span>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-6">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.toLowerCase();
                    return (
                      <motion.button
                        key={item}
                        onClick={() => handleNavClick(item)}
                        className={`w-full text-left font-medium py-4 px-6 transition-all duration-300 flex items-center justify-between group ${
                          isActive
                            ? "text-yellow-400 bg-yellow-400/10 border-r-2 border-yellow-400"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.3,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center">
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 mr-3 bg-yellow-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                          <span className="text-base">{item}</span>
                        </div>

                        <motion.div
                          className="transition-opacity opacity-0 group-hover:opacity-100"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-1 h-1 bg-current rounded-full" />
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="text-sm text-center text-gray-400">
                    © 2024 Jegadeep Pandiarajan
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
