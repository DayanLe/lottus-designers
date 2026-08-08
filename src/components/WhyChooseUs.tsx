/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import {
  Heart,
  Sparkles,
  Compass,
  Award,
  Users,
  Smile,
  Crown,
  Bookmark,
} from "lucide-react";

export default function WhyChooseUs() {
  const { t, reasons } = useLanguage();
  const strokeWidth = 1.2;
  const iconClass = "w-6 h-6 text-gold-accent";

  const getIcon = (id: string) => {
    switch (id) {
      case "r1":
        return <Heart className={iconClass} strokeWidth={strokeWidth} />;
      case "r2":
        return <Sparkles className={iconClass} strokeWidth={strokeWidth} />;
      case "r3":
        return <Compass className={iconClass} strokeWidth={strokeWidth} />;
      case "r4":
        return <Award className={iconClass} strokeWidth={strokeWidth} />;
      case "r5":
        return <Users className={iconClass} strokeWidth={strokeWidth} />;
      case "r6":
        return <Smile className={iconClass} strokeWidth={strokeWidth} />;
      case "r7":
        return <Crown className={iconClass} strokeWidth={strokeWidth} />;
      case "r8":
        return <Bookmark className={iconClass} strokeWidth={strokeWidth} />;
      default:
        return <Sparkles className={iconClass} strokeWidth={strokeWidth} />;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-warm-white border-t border-logo-grey/10 relative">
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-champagne/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-accent" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
              {t("whyChooseUsTag")}
            </span>
            <div className="h-[1px] w-6 bg-gold-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-rich-black font-medium leading-tight mb-6">
            {t("whyChooseUsTitle")}
          </h2>
          
          <p className="font-sans text-sm text-rich-black/60 font-light leading-relaxed max-w-2xl">
            {t("whyChooseUsSubtitle")}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="why-choose-us-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="bg-white p-8 border border-logo-grey/10 flex flex-col justify-between transition-all duration-500 rounded-xs hover:border-[#C8A76B]/30 hover:shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              id={`reason-${reason.id}`}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-10 h-10 flex items-center justify-center bg-champagne/30 rounded-full group-hover:bg-[#C8A76B] group-hover:text-white transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {getIcon(reason.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-md md:text-lg text-rich-black font-semibold tracking-wide">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs md:text-sm text-rich-black/60 leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
