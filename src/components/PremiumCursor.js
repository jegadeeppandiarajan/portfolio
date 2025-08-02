import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PremiumCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          width: 36,
          height: 36,
          left: mouse.x - 18,
          top: mouse.y - 18,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.11) 0%, transparent 80%)",
          border: "1.5px solid rgba(251,191,36,0.13)",
          boxShadow: "0px 0px 36px 6px rgba(251,191,36,0.09)",
          mixBlendMode: "plus-lighter",
        }}
        animate={{
          scale: isDown ? 1.7 : 1,
          opacity: isDown ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
      />
      {/* Central dot */}
      <motion.div
        className="pointer-events-none fixed z-[10000] rounded-full"
        style={{
          width: 9,
          height: 9,
          left: mouse.x - 4.5,
          top: mouse.y - 4.5,
          background: "linear-gradient(120deg, #fbbf24 20%, #fff 100%)",
          boxShadow: "0 0 16px 0 #fbbf24a0, 0 0 2px #fff2",
          mixBlendMode: "lighten",
        }}
        animate={{
          scale: isDown ? 0.73 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </>
  );
};

export default PremiumCursor;
