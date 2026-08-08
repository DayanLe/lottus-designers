/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  withBg?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", withBg = false, size = "md" }: LogoProps) {
  // Dimensions based on size selection
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-32 h-32 md:w-40 md:h-40"
  };

  const containerClasses = withBg
    ? `bg-logo-grey rounded-none shadow-sm flex items-center justify-center p-2 border border-[#B4B1A3]/20`
    : "flex items-center justify-center";

  return (
    <div className={`${containerClasses} ${sizeClasses[size]} ${className}`} id="lottus-logo-container">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-warm-white"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Lottus Designers Monogram"
      >
        {/* Customized high-fidelity serif monogram curves of "LD" interlocking */}
        <g id="monogram-ld">
          {/* Elegant Serif "L" */}
          <path
            d="M 32 25 
               H 40 
               V 58 
               C 40 68, 30 72, 22 72 
               C 17 72, 14 68, 17 64 
               C 20 60, 24 64, 25 67 
               C 27 70, 31 69, 33 63 
               C 34 60, 34 54, 34 40 
               V 27 
               C 34 25, 33 25, 32 25 Z"
            fill="#FAF9F7"
          />
          
          {/* Swash from the bottom of "L" curving to the right and left */}
          <path
            d="M 33 61 
               C 37 61, 48 64, 55 68 
               C 59 70, 61 71, 62 70 
               C 63 69, 61 68, 55 64 
               C 46 58, 35 55, 31 55 
               C 23 55, 18 58, 18 64
               C 18 70, 23 74, 27 74
               C 31 74, 31 71, 29 69
               C 27 67, 24 67, 22 65
               C 21 64, 21 62, 22 61
               C 24 60, 29 61, 33 61 Z"
            fill="#FAF9F7"
          />

          {/* Elegant Serif "D" interlocking */}
          <path
            d="M 46 25 
               V 75 
               C 46 76, 44 76, 42 76 
               H 41 
               V 78 
               H 53 
               V 76 
               C 51 76, 49 76, 49 75 
               V 25 
               C 49 24, 51 24, 53 24 
               V 22 
               H 41 
               V 24 
               C 44 24, 46 24, 46 25 Z"
            fill="#FAF9F7"
          />

          {/* Curved loop of "D" stretching forward and looping around the L */}
          <path
            d="M 49 25 
               C 58 25, 78 32, 78 50 
               C 78 68, 59 75, 49 75 
               V 73 
               C 58 73, 75 66, 75 50 
               C 75 34, 58 27, 49 27 Z"
            fill="#FAF9F7"
          />

          {/* S-curve swash inside D bowl, creating the interlocking details */}
          <path
            d="M 52 48 
               C 54 41, 60 41, 63 45 
               C 66 49, 65 57, 60 62 
               C 55 67, 51 64, 51 59 
               C 51 54, 56 50, 58 53 
               C 59 55, 57 57, 55 57 
               C 53 57, 53 53, 55 51 
               C 58 49, 62 52, 60 58 
               C 58 64, 53 64, 50 58 
               C 48 54, 50 51, 52 48 Z"
            fill="#FAF9F7"
          />
        </g>
      </svg>
    </div>
  );
}
