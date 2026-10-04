/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const { t, testimonials } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000); // Gentle 8s loop
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[index] || testimonials[0];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-warm-white relative overflow-hidden border-t border-logo-grey/10">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-champagne/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative" id="testimonials-carousel">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-accent" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
              {t("testimonialsTitle")}
            </span>
            <div className="h-[1px] w-6 bg-gold-accent" />
          </div>
          <h2 className="text-xl md:text-2xl font-serif text-rich-black/80 font-light leading-relaxed max-w-xl">
            {t("testimonialsSub")}
          </h2>
        </div>

        {/* Floating Huge Quote Symbol */}
        <div className="flex justify-center mb-6 text-gold-accent/25">
          <Quote size={56} className="stroke-[1] transform scale-x-[-1]" />
        </div>

        {/* Dynamic Quote and Details Slider */}
        {activeTestimonial && (
          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-8"
              >
                {/* Star Rating */}
                <div className="flex justify-center space-x-1.5 text-gold-accent" id="rating-stars">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" className="stroke-[1.5]" />
                  ))}
                </div>

                {/* Quote Statement */}
                <blockquote className="font-serif text-lg md:text-xl lg:text-2xl tracking-wide leading-relaxed text-rich-black italic font-light max-w-3xl mx-auto">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Client Profile Info */}
                <div className="flex flex-col items-center space-y-3 pt-4">
                  <img
                    src={activeTestimonial.avatarUrl}
                    alt={activeTestimonial.name}
                    className="w-14 h-14 rounded-full object-cover border border-gold-accent/30 shadow-md animate-none"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-serif text-sm md:text-md text-rich-black font-semibold">
                      {activeTestimonial.name}
                    </p>
                    <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-logo-grey font-medium mt-0.5">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        )}

        {/* Carousel Controls */}
        <div className="flex items-center justify-center space-x-8 mt-12">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-logo-grey/20 text-rich-black hover:border-gold-accent hover:text-gold-accent transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === idx ? "bg-gold-accent w-5" : "bg-logo-grey/30"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-logo-grey/20 text-rich-black hover:border-gold-accent hover:text-gold-accent transition-all cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
