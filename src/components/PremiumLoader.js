import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PremiumLoader = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          {/* Animated loader ring */}
          <motion.div
            className="w-20 h-20 mb-8 border-4 rounded-full border-yellow-400/30 border-b-white animate-spin bg-gradient-to-tr from-yellow-500/5 via-black/20 to-yellow-500/5"
            style={{ borderRightColor: "transparent" }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
          <div className="text-lg font-light tracking-widest text-white opacity-80">
            Loading Portfolio...
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PremiumLoader;
