import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PremiumLoader from "./components/PremiumLoader";
import PremiumCursor from "./components/PremiumCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-black App">
      <PremiumLoader isLoading={isLoading} />

      {/* Hide cursor on mobile devices */}
      <div className="hidden md:block">
        <PremiumCursor />
      </div>

      {/* Animated Background - Mobile Optimized */}
      <div className="animated-bg" />

      {/* Mobile-optimized Floating Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(15)].map(
          (
            _,
            i // Reduced particles for mobile performance
          ) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0], // Reduced movement for mobile
                x: [0, Math.random() * 25 - 12.5, 0],
                opacity: [0, 0.4, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 8, // Faster animations
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          )
        )}
      </div>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Header />
          <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </motion.div>
      )}
    </div>
  );
}

export default App;
