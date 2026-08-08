/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Elegant timing for the luxury intro
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800); // Allow fade out animation to finish
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const titleLetters = "LOTTUS DESIGNERS".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="preloader-container"
          className="fixed inset-0 bg-charcoal z-[9999] flex flex-col items-center justify-center text-warm-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo container */}
          <div className="relative mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Logo size="lg" withBg={true} className="border border-gold-accent/20 rounded-sm" />
            </motion.div>
            
            {/* Elegant glowing gold ring around the logo */}
            <motion.div
              className="absolute -inset-4 border border-gold-accent/30 rounded-full pointer-events-none"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1.1, opacity: [0, 1, 0.4, 0.8, 0] }}
              transition={{ duration: 2.2, ease: "easeInOut", repeat: 0 }}
            />
          </div>

          {/* Letter Reveal Title */}
          <div className="flex space-x-1.5 md:space-x-3 mb-2 overflow-hidden" id="preloader-title">
            {titleLetters.map((char, index) => (
              <motion.span
                key={index}
                className="font-serif text-lg md:text-2xl lg:text-3xl tracking-[0.25em] font-medium text-champagne"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.05,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Subheading / Location */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-logo-grey font-light">
              Medellín, Colombia
            </p>
          </motion.div>

          {/* Micro loading line at the bottom */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-charcoal-light overflow-hidden">
            <motion.div
              className="h-full bg-gold-accent"
              initial={{ left: "-100%", width: "0%" }}
              animate={{ left: "0%", width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
