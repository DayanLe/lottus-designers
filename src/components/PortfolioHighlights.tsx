/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { unsplashSrcSet } from "../images";

export default function PortfolioHighlights() {
  const { t, language, portfolioHighlights } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioHighlights.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolioHighlights.length - 1 ? 0 : prev + 1));
  };

  const currentProject = portfolioHighlights[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-charcoal text-warm-white relative overflow-hidden" id="portfolio-highlights">
      {/* Decorative Dark Background Overlays */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gold-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-10 w-[300px] h-[300px] bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-[1px] w-8 bg-gold-accent" />
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
                {t("portfolioTitle")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight text-champagne font-medium leading-tight">
              {t("portfolioSub")}
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 items-center">
            <span className="font-sans text-xs tracking-widest text-logo-grey">
              0{currentIndex + 1} / 0{portfolioHighlights.length}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FAF9F7]/10 hover:border-gold-accent text-warm-white hover:text-gold-accent transition-all cursor-pointer bg-charcoal-light/40"
                aria-label="Previous Project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FAF9F7]/10 hover:border-gold-accent text-warm-white hover:text-gold-accent transition-all cursor-pointer bg-charcoal-light/40"
                aria-label="Next Project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="portfolio-showcase-container">
          
          {/* Left Side: Text and Metadata Details */}
          <div className="lg:col-span-5 space-y-6 lg:pr-6 ordered-2 lg:order-1">
            <AnimatePresence mode="wait">
              <m.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Event Type & Sparkle Tag */}
                <div className="inline-flex items-center space-x-2 bg-[#C8A76B]/10 border border-[#C8A76B]/20 py-1.5 px-4 rounded-full">
                  <Sparkles size={12} className="text-gold-accent animate-pulse" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-accent font-semibold">
                    {currentProject.eventType}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl md:text-4xl font-serif text-champagne tracking-wide leading-tight">
                  {currentProject.title}
                </h3>

                {/* Location Marker */}
                <div className="flex items-center space-x-2 text-logo-grey text-xs md:text-sm font-light">
                  <MapPin size={14} className="text-gold-accent" />
                  <span>{currentProject.location}</span>
                </div>

                {/* Description Paragraph */}
                <p className="font-sans text-sm md:text-base text-warm-white/77 leading-relaxed font-light pt-2">
                  {currentProject.description}
                </p>

                {/* Contact Enquire details */}
                <div className="pt-6 border-t border-logo-grey/15 flex items-center space-x-4">
                  <a
                    href="#contact"
                    className="font-sans text-[10px] uppercase tracking-widest text-gold-accent hover:text-warm-white font-semibold transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>
                      {language === "en" ? "Request Comparable Design" : "Solicitar Diseño Similar"}
                    </span>
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Showcase Image Frame */}
          <div className="lg:col-span-7 ordered-1 lg:order-2">
            <div className="relative group overflow-hidden shadow-2xl rounded-xs border border-logo-grey/10">
              {/* Gold Offset Detail lines */}
              <div className="absolute top-4 right-4 bottom-4 left-4 border border-[#C8A76B]/20 pointer-events-none z-10 rounded-xs" />
              
              <div className="aspect-[16/10] overflow-hidden bg-[#1E1E1E]">
                <AnimatePresence mode="wait">
                  <m.img
                    key={currentIndex}
                    src={currentProject.imageUrl}
                    srcSet={unsplashSrcSet(currentProject.imageUrl)}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    decoding="async"
                    alt={currentProject.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover transform scale-100 transition-transform duration-[2000ms] ease-out group-hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Small Overlay indicator dots */}
              <div className="absolute bottom-6 right-6 flex space-x-2 z-15 bg-charcoal/80 py-2 px-4 border border-[#FAF9F7]/10 backdrop-blur-xs">
                {portfolioHighlights.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? "bg-gold-accent scale-125" : "bg-logo-grey/40"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
