/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import {
  Sparkles,
  Briefcase,
  GlassWater,
  Palette,
  Flower,
  Layers,
  Maximize,
  CalendarDays,
} from "lucide-react";

// Icon mapper for Lucide icons
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const props = { className: className || "w-6 h-6", strokeWidth: 1.2 };
  switch (name) {
    case "Sparkles":
      return <Sparkles {...props} />;
    case "Briefcase":
      return <Briefcase {...props} />;
    case "GlassWater":
      return <GlassWater {...props} />;
    case "Palette":
      return <Palette {...props} />;
    case "Flower":
      return <Flower {...props} />;
    case "Layers":
      return <Layers {...props} />;
    case "Maximize":
      return <Maximize {...props} />;
    case "CalendarDays":
      return <CalendarDays {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};

export default function ServicesSection() {
  const { t, services } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-warm-white border-t border-logo-grey/10 relative">
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-champagne/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-1/4 w-64 h-64 bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-accent" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
              {t("servicesSubtitle")}
            </span>
            <div className="h-[1px] w-6 bg-gold-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-rich-black font-medium leading-tight mb-6">
            {t("servicesHeadline")}
          </h2>
          
          <p className="font-sans text-sm text-rich-black/60 font-light leading-relaxed max-w-2xl">
            {t("servicesDescription")}
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white border border-logo-grey/15 p-8 flex flex-col justify-between transition-all duration-500 rounded-xs hover:shadow-lg hover:border-gold-accent/40 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              id={`service-card-${service.id}`}
            >
              {/* Top hover accent bar */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-accent transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              
              <div className="space-y-6">
                {/* Custom Icon Container */}
                <div className="bg-champagne/40 text-gold-accent w-12 h-12 flex items-center justify-center rounded-xs transition-colors duration-500 group-hover:bg-gold-accent group-hover:text-white">
                  <IconComponent name={service.iconName} className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-lg md:text-xl text-rich-black font-medium group-hover:text-gold-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-sans text-xs md:text-sm text-rich-black/60 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Decorative detail at the bottom */}
              <div className="pt-6 mt-6 border-t border-logo-grey/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[9px] uppercase tracking-widest text-gold-accent font-medium">
                  {t("servicesEnquire")}
                </span>
                <span className="text-gold-accent text-xs font-light">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
