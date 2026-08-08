/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { INSTAGRAM_ITEMS } from "../data";
import { Instagram, Heart, MessageCircle } from "lucide-react";

export default function InstagramSection() {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-warm-white relative border-t border-b border-logo-grey/10" id="instagram-feed">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <Instagram className="text-gold-accent w-6 h-6 mb-4 stroke-[1.2]" />
          <h2 className="font-serif text-2xl md:text-3xl text-rich-black font-medium tracking-wide">
            {language === "en" ? "Follow Our Journey" : "Siga Nuestro Viaje"}
          </h2>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-logo-grey font-medium mt-1">
            @LottusDesigners
          </p>
          <div className="w-8 h-[1px] bg-gold-accent mt-4" />
        </div>

        {/* 6-Column Responsive Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="instagram-grid">
          {INSTAGRAM_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative aspect-square overflow-hidden group cursor-pointer bg-charcoal rounded-xs shadow-xs border border-logo-grey/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={`Instagram highlight ${item.id}`}
                className="w-full h-full object-cover transform scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Black Tint Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3 text-warm-white" />

              {/* Overlaid Likes/Comments Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 text-warm-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 pointer-events-none">
                <Instagram size={18} className="text-gold-accent" />
                <div className="flex space-x-4 text-xs font-sans">
                  <span className="flex items-center space-x-1 font-medium">
                    <Heart size={14} fill="currentColor" className="text-gold-accent stroke-[1]" />
                    <span>{item.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1 font-medium">
                    <MessageCircle size={14} fill="currentColor" className="stroke-[1]" />
                    <span>{item.comments}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 border border-logo-grey/35 hover:border-gold-accent hover:text-gold-accent px-6 py-3 font-sans text-[10px] tracking-[0.25em] uppercase text-rich-black transition-all font-medium rounded-xs cursor-pointer"
            id="instagram-follow-btn"
          >
            <span>{language === "en" ? "Follow Our Journey" : "Siga Nuestro Viaje"}</span>
            <Instagram size={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
