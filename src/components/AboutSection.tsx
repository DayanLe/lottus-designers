/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Check } from "lucide-react";
// @ts-ignore
import foundersPortraitImg from "../assets/images/team_portrait_clean_1783972299399.jpg";

export default function AboutSection() {
  const { t, brandStory } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white relative overflow-hidden">
      {/* Decorative background elements for a luxury editorial vibe */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-champagne/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />
      
      {/* Editorial Watermark Text */}
      <div className="absolute right-10 top-16 hidden xl:block text-[140px] font-serif text-logo-grey/5 tracking-wider select-none pointer-events-none uppercase">
        Est. 2016
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Large Lifestyle Editorial Image Frame */}
          <div className="lg:col-span-5 relative group" id="about-image-frame">
            {/* Elegant double offset border representing luxury frames */}
            <div className="absolute -inset-4 border border-gold-accent/20 translate-x-3 translate-y-3 rounded-xs pointer-events-none transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1" />
            
            <motion.div
              className="relative aspect-[3/4] overflow-hidden bg-charcoal shadow-xl rounded-xs border border-logo-grey/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Premium Team Portrait Image */}
              <img
                src={foundersPortraitImg}
                alt="Lottus Designers Founders and Event Planning Team"
                className="w-full h-full object-cover object-top transform scale-100 transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Soft Darkened Overlay that brightens on hover */}
              <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-700 group-hover:bg-transparent" />
              
              {/* Small Overlay Medal Badge */}
              <div className="absolute bottom-6 left-6 bg-charcoal text-warm-white p-4 max-w-[200px] border border-gold-accent/20 backdrop-blur-xs">
                <p className="font-serif text-sm text-gold-accent mb-0.5">{t("aboutBadgeTitle")}</p>
                <p className="font-sans text-[8px] uppercase tracking-widest text-logo-grey">
                  Medellín, Colombia
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-text-content">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Subheading */}
              <div className="flex items-center space-x-3">
                <div className="h-[1px] w-8 bg-gold-accent" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
                  {t("aboutSubtitle")}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-rich-black font-medium leading-tight">
                {brandStory.headline}
              </h2>

              {/* Core Copy Paragraphs */}
              <p className="font-sans text-sm md:text-base text-rich-black/75 leading-relaxed font-light">
                {brandStory.paragraph1}
              </p>

              <p className="font-sans text-sm md:text-base text-rich-black/70 leading-relaxed font-light">
                {brandStory.paragraph2}
              </p>

              {/* Specialties Checklist Grid */}
              <div className="pt-6 border-t border-logo-grey/15" id="about-specialties">
                <p className="font-serif text-xs uppercase tracking-widest text-gold-accent font-semibold mb-4">
                  {t("aboutPillarsTitle")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brandStory.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <div className="mt-1 bg-champagne p-0.5 rounded-full text-gold-accent flex items-center justify-center transition-colors duration-300 group-hover/item:bg-gold-accent group-hover/item:text-charcoal">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="font-sans text-xs md:text-sm text-rich-black/85 font-medium transition-colors duration-300 group-hover/item:text-gold-accent">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder's signature */}
              <div className="pt-8 flex items-center space-x-4">
                <div className="border-l-2 border-gold-accent pl-4">
                  <p className="font-serif italic text-lg text-rich-black tracking-wide">Juan Múnera</p>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-logo-grey font-medium mt-0.5">
                    {t("founderRole")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
