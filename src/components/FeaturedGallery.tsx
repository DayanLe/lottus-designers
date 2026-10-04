/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { CATEGORY_TRANSLATIONS } from "../translations";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { unsplashSrcSet } from "../images";

export default function FeaturedGallery() {
  const { t, language, galleryItems } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const filters = ["All", "Weddings", "Florals", "Corporate", "Details"];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  // Monitor scroll progress in the carousel
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollPosition(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  // Recalculate max scroll on resize or when filtered items change
  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setScrollPosition(scrollLeft);
        setMaxScroll(scrollWidth - clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    
    // Slight timeout to ensure DOM renders before measurement
    const timer = setTimeout(() => {
      handleResize();
    }, 150);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [filteredItems, activeFilter]);

  // Reset scroll position when active filter changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setScrollPosition(0);
    }
  }, [activeFilter]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll about 75% of view area for elegant framing
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const openLightbox = (id: string) => {
    // Find index in the filtered items array
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    
    let nextIndex = lightboxIndex;
    if (direction === "prev") {
      nextIndex = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    } else {
      nextIndex = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    }
    setLightboxIndex(nextIndex);
  };

  const scrollPercent = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-[1px] w-8 bg-gold-accent" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
                  {t("galleryTitle")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-rich-black font-medium leading-tight">
                {t("gallerySub")}
              </h2>
            </div>

            {/* Luxury Filter Bar */}
            <div className="flex flex-wrap gap-2 md:gap-4 border-b border-logo-grey/10 pb-2 md:pb-0" id="gallery-filters">
              {filters.map((filter) => {
                const filterLabel = CATEGORY_TRANSLATIONS[filter]?.[language] || filter;
                return (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      closeLightbox();
                    }}
                    className={`font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase py-2 px-3 transition-all duration-300 relative cursor-pointer ${
                      activeFilter === filter
                        ? "text-gold-accent font-semibold"
                        : "text-rich-black/50 hover:text-rich-black"
                    }`}
                  >
                    {filterLabel}
                    {activeFilter === filter && (
                      <m.div
                        layoutId="activeFilterUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Carousel Slider with negative margins for visual edge-bleed */}
          <div className="relative -mx-6 md:-mx-12 px-6 md:px-12 overflow-hidden">
            {/* Soft gradient edge fade masks (editorial luxury look) */}
            <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar py-4 px-2 select-none"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => {
                  const itemCategoryLabel = CATEGORY_TRANSLATIONS[item.category]?.[language] || item.category;
                  return (
                    <m.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.04 }}
                      className="flex-none w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/5] relative overflow-hidden group cursor-pointer bg-charcoal rounded-xs shadow-md border border-logo-grey/10"
                      style={{ scrollSnapAlign: "start" }}
                      onClick={() => openLightbox(item.id)}
                    >
                      {/* Image */}
                      <img
                        src={item.url}
                        srcSet={unsplashSrcSet(item.url, [400, 640, 800])}
                        sizes="(min-width: 768px) 380px, (min-width: 640px) 320px, 280px"
                        decoding="async"
                        alt={item.title}
                        className="w-full h-full object-cover transform scale-100 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Luxurious Dark Ambient Bottom Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Content details overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                        <div className="flex justify-between items-end">
                          <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-gold-accent font-bold">
                              {itemCategoryLabel}
                            </span>
                            <h4 className="font-serif text-lg md:text-xl text-warm-white tracking-wide leading-tight group-hover:text-champagne transition-colors duration-300">
                              {item.title}
                            </h4>
                          </div>
                          {/* Floating Zoom Indicator */}
                          <div className="bg-warm-white/10 p-2.5 text-warm-white rounded-full backdrop-blur-xs border border-warm-white/20 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 flex-none ml-4">
                            <ZoomIn size={14} className="text-gold-accent" />
                          </div>
                        </div>
                      </div>

                      {/* Discrete Category Tag */}
                      <div className="absolute top-4 right-4 bg-warm-white/90 backdrop-blur-xs text-rich-black py-1 px-3 rounded-xs text-[8px] uppercase tracking-widest font-semibold border border-logo-grey/10 group-hover:opacity-0 transition-opacity duration-300">
                        {itemCategoryLabel}
                      </div>
                    </m.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Controls and Custom Sleek Scroll Indicator Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-12 gap-6">
            {/* Custom Sleek Scroll progress bar */}
            <div className="flex items-center space-x-4">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-logo-grey font-semibold">
                {language === "en" ? "Scroll Exhibit" : "Desplazar Galería"}
              </span>
              <div className="w-32 h-[1px] bg-logo-grey/25 relative rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gold-accent transition-all duration-300"
                  style={{ width: `${Math.max(8, scrollPercent)}%` }}
                />
              </div>
              <span className="font-sans text-[9px] text-logo-grey font-mono">
                {Math.round(scrollPercent)}%
              </span>
            </div>

            {/* Styled Circular Next / Prev Arrows */}
            <div className="flex items-center space-x-3 self-end sm:self-auto">
              <button
                onClick={() => scroll("left")}
                disabled={scrollPosition <= 5}
                className={`p-3 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  scrollPosition <= 5
                    ? "border-logo-grey/15 text-logo-grey/30 cursor-not-allowed opacity-40"
                    : "border-logo-grey/30 text-rich-black hover:border-gold-accent hover:text-gold-accent bg-transparent hover:bg-gold-accent/5"
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={scrollPosition >= maxScroll - 5}
                className={`p-3 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  scrollPosition >= maxScroll - 5 || maxScroll <= 0
                    ? "border-logo-grey/15 text-logo-grey/30 cursor-not-allowed opacity-40"
                    : "border-logo-grey/30 text-rich-black hover:border-gold-accent hover:text-gold-accent bg-transparent hover:bg-gold-accent/5"
                }`}
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

    {/* Lightbox Modal */}
    <AnimatePresence>
        {lightboxIndex !== null && (
          <m.div
            id="gallery-lightbox"
            className="fixed inset-0 bg-charcoal/95 z-[99999] flex flex-col items-center justify-between py-6 px-4 md:px-12 text-warm-white select-none backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Lightbox Header */}
            <div className="w-full flex justify-between items-center max-w-5xl">
              <div>
                <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-accent font-bold">
                  {CATEGORY_TRANSLATIONS[filteredItems[lightboxIndex].category]?.[language] || filteredItems[lightboxIndex].category}
                </p>
                <h3 className="font-serif text-md md:text-xl text-champagne">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 bg-warm-white/10 hover:bg-warm-white/20 text-warm-white rounded-full border border-warm-white/20 hover:text-gold-accent transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Lightbox Content Area */}
            <div className="relative flex items-center justify-center w-full max-w-5xl my-auto aspect-video md:aspect-auto max-h-[70vh]">
              {/* Prev Button */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-2 md:-left-16 z-10 p-3 bg-warm-white/5 hover:bg-warm-white/10 text-warm-white rounded-full border border-warm-white/10 hover:text-gold-accent transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Core Image Display with custom reveal motion */}
              <m.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-full max-h-[70vh] flex items-center justify-center overflow-hidden"
              >
                <img
                  src={filteredItems[lightboxIndex].url}
                  srcSet={unsplashSrcSet(filteredItems[lightboxIndex].url)}
                  sizes="90vw"
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-[65vh] object-contain rounded-xs border border-logo-grey/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </m.div>

              {/* Next Button */}
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-2 md:-right-16 z-10 p-3 bg-warm-white/5 hover:bg-warm-white/10 text-warm-white rounded-full border border-warm-white/10 hover:text-gold-accent transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Lightbox Footer Details */}
            <div className="w-full text-center max-w-5xl flex flex-col items-center gap-2">
              <span className="font-sans text-[10px] tracking-widest text-logo-grey uppercase">
                {language === "en" 
                  ? `Image ${lightboxIndex + 1} of ${filteredItems.length}` 
                  : `Imagen ${lightboxIndex + 1} de ${filteredItems.length}`}
              </span>
              <div className="flex space-x-1 justify-center">
                {filteredItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      lightboxIndex === idx ? "bg-gold-accent w-4" : "bg-logo-grey/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
