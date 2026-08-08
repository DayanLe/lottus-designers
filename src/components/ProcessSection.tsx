/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { PROCESS_STEPS } from "../data";

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative">
      <div className="absolute right-0 top-10 w-96 h-96 bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-champagne/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-accent" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
              The Journey
            </span>
            <div className="h-[1px] w-6 bg-gold-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-rich-black font-medium leading-tight mb-6">
            The Orchestration Process
          </h2>
          
          <p className="font-sans text-sm text-rich-black/60 font-light leading-relaxed max-w-2xl">
            A seamless, meticulous timeline designed to lead you from inspiration to your grand celebration, completely stress-free.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto" id="process-timeline-wrapper">
          {/* Central Elegant Vertical Linking Line (for desktop) */}
          <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-[1.5px] bg-gold-accent/20 transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-20 relative">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  id={`process-step-${step.number}`}
                >
                  {/* Central Node Indicator Dot (Desktop Only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 bg-white border-2 border-gold-accent rounded-full z-10 hidden md:flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gold-accent rounded-full animate-ping" />
                  </div>

                  {/* Left Column (Empty on one side for desktop zig-zag layout) */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 flex justify-start md:justify-end items-center" />

                  {/* Right Column: Actual Step Card */}
                  <div className={`w-full md:w-1/2 px-4 md:px-12 flex justify-start ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                    <div className="bg-warm-white p-8 md:p-10 border border-logo-grey/10 hover:border-gold-accent/30 transition-all duration-500 rounded-xs shadow-xs relative group flex flex-col justify-between w-full max-w-md">
                      
                      {/* Floating Huge Number */}
                      <span className="font-serif text-5xl md:text-6xl font-semibold text-gold-accent/15 absolute top-6 right-8 group-hover:text-gold-accent/25 transition-colors duration-500">
                        {step.number}
                      </span>

                      <div className="space-y-4">
                        <span className="font-sans text-[10px] uppercase tracking-widest text-gold-accent font-bold">
                          Step {step.number}
                        </span>

                        <h3 className="font-serif text-xl md:text-2xl text-rich-black font-semibold">
                          {step.title}
                        </h3>

                        <p className="font-sans text-xs md:text-sm text-rich-black/60 leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>

                      {/* Small golden underline hook */}
                      <div className="w-12 h-[1px] bg-gold-accent/30 mt-6 group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
