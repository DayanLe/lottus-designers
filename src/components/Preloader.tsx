/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [show, setShow] = useState(true);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Short intro: the page is already rendering underneath, so keep this brief
    let doneTimer: number | undefined;
    const timer = window.setTimeout(() => {
      setShow(false);
      doneTimer = window.setTimeout(() => onCompleteRef.current(), 600); // Allow fade out animation to finish
    }, 1600);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const titleLetters = "LOTTUS DESIGNERS".split("");

  return (
    <AnimatePresence>
      {show && (
        <m.div
          id="preloader-container"
          className="fixed inset-0 bg-charcoal z-[9999] flex flex-col items-center justify-center text-warm-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo container */}
          <div className="relative mb-6">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Logo size="lg" withBg={true} className="border border-gold-accent/20 rounded-sm" />
            </m.div>
            
            {/* Elegant glowing gold ring around the logo */}
            <m.div
              className="absolute -inset-4 border border-gold-accent/30 rounded-full pointer-events-none"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1.1, opacity: [0, 1, 0.4, 0.8, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: 0 }}
            />
          </div>

          {/* Letter Reveal Title */}
          <div className="flex space-x-1.5 md:space-x-3 mb-2 overflow-hidden" id="preloader-title">
            {titleLetters.map((char, index) => (
              <m.span
                key={index}
                className="font-serif text-lg md:text-2xl lg:text-3xl tracking-[0.25em] font-medium text-champagne"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.03,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </m.span>
            ))}
          </div>

          {/* Subheading / Location */}
          <m.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-logo-grey font-light">
              Medellín, Colombia
            </p>
          </m.div>

          {/* Micro loading line at the bottom */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-charcoal-light overflow-hidden">
            <m.div
              className="h-full bg-gold-accent"
              initial={{ left: "-100%", width: "0%" }}
              animate={{ left: "0%", width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
