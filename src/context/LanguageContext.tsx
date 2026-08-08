/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Language,
  TRANSLATIONS,
  SERVICES_ES,
  GALLERY_ITEMS_ES,
  PORTFOLIO_HIGHLIGHTS_ES,
  TESTIMONIALS_ES,
  PROCESS_STEPS_ES,
  REASONS_ES,
  STATS_ES,
  BRAND_STORY_ES,
  ReasonItem
} from "../translations";
import {
  SERVICES,
  GALLERY_ITEMS,
  PORTFOLIO_HIGHLIGHTS,
  TESTIMONIALS,
  PROCESS_STEPS,
  STATS,
  BRAND_STORY
} from "../data";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  services: typeof SERVICES;
  galleryItems: typeof GALLERY_ITEMS;
  portfolioHighlights: typeof PORTFOLIO_HIGHLIGHTS;
  testimonials: typeof TESTIMONIALS;
  processSteps: typeof PROCESS_STEPS;
  stats: typeof STATS;
  brandStory: typeof BRAND_STORY;
  reasons: ReasonItem[];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Try to load initial language from localStorage or default to "en"
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("lottus_lang");
      if (saved === "en" || saved === "es") {
        return saved;
      }
    } catch (e) {
      // Ignore localStorage errors in sandboxes
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("lottus_lang", lang);
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  // Safe translation helper
  const t = (key: string): string => {
    const record = TRANSLATIONS[key];
    if (!record) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return record[language] || record["en"] || key;
  };

  // Default English reasons list structure matching WhyChooseUs component
  const reasonsEn: ReasonItem[] = [
    {
      id: "r1",
      title: "Personalised Planning",
      description: "We tailor every element to match your personal signature, ensuring your event is a direct reflection of your dreams."
    },
    {
      id: "r2",
      title: "Creative Event Concepts",
      description: "We reject the generic. Our studio invents bespoke concepts, combining architectural lighting, floral art, and spatial layout."
    },
    {
      id: "r3",
      title: "Attention to Every Detail",
      description: "From custom hand-lettered cards to the exact centimeter of table offsets, our perfectionist nature guarantees excellence."
    },
    {
      id: "r4",
      title: "Premium Vendors",
      description: "We connect you to Medellin's elite florists, master chefs, fine wine curators, and live performers for a world-class standard."
    },
    {
      id: "r5",
      title: "Experienced Team",
      description: "A seasoned collective of designers, floral artists, structural constructors, and on-site directors with a decade of expertise."
    },
    {
      id: "r6",
      title: "Stress-Free Coordination",
      description: "We provide complete peace of mind, managing timelines, vendor logistics, and emergency backups with seamless grace."
    },
    {
      id: "r7",
      title: "Luxury Finish",
      description: "Utilizing velvet drapes, real crystal, custom gilded silverware, and spectacular light fixtures to ensure an ultra-premium visual depth."
    },
    {
      id: "r8",
      title: "Memorable Experiences",
      description: "We craft emotional moments designed to linger. Your guests will remember the elegance, joy, and storytelling for years to come."
    }
  ];

  // Resolve localized lists
  const services = language === "en" ? SERVICES : SERVICES_ES;
  const galleryItems = language === "en" ? GALLERY_ITEMS : GALLERY_ITEMS_ES;
  const portfolioHighlights = language === "en" ? PORTFOLIO_HIGHLIGHTS : PORTFOLIO_HIGHLIGHTS_ES;
  const testimonials = language === "en" ? TESTIMONIALS : TESTIMONIALS_ES;
  const processSteps = language === "en" ? PROCESS_STEPS : PROCESS_STEPS_ES;
  const stats = language === "en" ? STATS : STATS_ES;
  const brandStory = language === "en" ? BRAND_STORY : BRAND_STORY_ES;
  const reasons = language === "en" ? reasonsEn : REASONS_ES;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        services,
        galleryItems,
        portfolioHighlights,
        testimonials,
        processSteps,
        stats,
        brandStory,
        reasons
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
