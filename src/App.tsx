/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Calendar, Compass, Phone, Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

// Modular Component Imports
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FeaturedGallery from "./components/FeaturedGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import PortfolioHighlights from "./components/PortfolioHighlights";
import TestimonialsSection from "./components/TestimonialsSection";
import ProcessSection from "./components/ProcessSection";
import InstagramSection from "./components/InstagramSection";
import ContactSection from "./components/ContactSection";
import AdminPortal from "./components/AdminPortal";
import Footer from "./components/Footer";

// @ts-ignore
import luxuryHeroImg from "./assets/images/luxury_hero_event_1783970688999.jpg";

export default function App() {
  const { t, stats } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [adminOpen, setAdminOpen] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);


  // Handle scroll trigger to increment stats counters elegantly
  useEffect(() => {
    if (loading) return;

    const handleScrollForStats = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInViewport) {
          // Softly transition counters to their final value
          const targets = [500, 250, 10, 100];
          const increments = targets.map((t) => Math.ceil(t / 40));
          
          const interval = setInterval(() => {
            setCounts((prev) =>
              prev.map((val, idx) => {
                if (val >= targets[idx]) return targets[idx];
                return Math.min(val + increments[idx], targets[idx]);
              })
            );
          }, 40);

          // Remove scroll listener after counting completes
          window.removeEventListener("scroll", handleScrollForStats);
        }
      }
    };

    window.addEventListener("scroll", handleScrollForStats);
    return () => window.removeEventListener("scroll", handleScrollForStats);
  }, [loading]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Premium Slow Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="bg-warm-white min-h-screen text-rich-black relative selection:bg-gold-accent/20 selection:text-gold-accent">
          
          {/* 2. Transparent to Translucent Sticky Navigation */}
          <Navbar onAdminClick={() => setAdminOpen(true)} />

          {/* 3. Hero Section: Cinematic Autoplay Video and Overlays */}
          <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img
                src={luxuryHeroImg}
                alt="Luxury wedding reception tablescape design"
                className="w-full h-full object-cover transform scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Premium dark vignette overlay with gold atmospheric notes */}
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/50 to-charcoal/90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C8A76B]/10 via-transparent to-transparent opacity-60" />
            </div>

            {/* Hero Main Copy Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-warm-white flex flex-col items-center space-y-8" id="hero-main-header">
              
              {/* Monogram or spark tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center space-x-2 bg-[#C8A76B]/15 border border-[#C8A76B]/25 py-2 px-5 rounded-full"
              >
                <Sparkles size={13} className="text-gold-accent animate-pulse" />
                <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold-accent font-semibold">
                  {t("heroTag")}
                </span>
              </motion.div>

              {/* Master Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-champagne max-w-4xl font-medium">
                {t("heroTitle1")}
                <span className="italic text-gold-accent">{t("heroTitle2")}</span>
              </h1>

              {/* Master Subheading */}
              <p className="font-sans text-sm md:text-lg text-warm-white/75 max-w-2xl leading-relaxed font-light">
                {t("heroSubtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto" id="hero-cta-group">
                {/* Book a Consultation */}
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gold-accent hover:bg-champagne text-charcoal py-4 px-8 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-500 rounded-xs shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {t("heroCtaBook")}
                </button>

                {/* View Our Portfolio */}
                <button
                  onClick={() => scrollToSection("#portfolio")}
                  className="border border-warm-white/35 text-warm-white hover:border-gold-accent hover:text-gold-accent hover:bg-warm-white/5 py-4 px-8 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-500 rounded-xs backdrop-blur-xs cursor-pointer"
                >
                  {t("heroCtaPortfolio")}
                </button>
              </div>
            </div>

            {/* Scroll indicator at bottom */}
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-logo-grey hover:text-gold-accent transition-colors duration-300 cursor-pointer z-10"
              onClick={() => scrollToSection("#about")}
              id="hero-scroll-indicator"
            >
              <span className="font-sans text-[8px] uppercase tracking-[0.4em] font-medium">
                {t("heroScrollIndicator")}
              </span>
              <motion.div
                className="w-5 h-8 border border-logo-grey/40 rounded-full flex justify-center p-1"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-1 h-1.5 bg-gold-accent rounded-full" />
              </motion.div>
            </div>
          </section>

          {/* 4. About Lottus Designers Split Section */}
          <AboutSection />

          {/* 5. Featured Category-Filtered Masonry Gallery */}
          <FeaturedGallery />

          {/* 6. Cinematic Showcase: Secondary Video Overlay section */}
          <section id="cinematic-reel" className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-charcoal text-center text-warm-white">
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transform scale-100"
                src="https://assets.mixkit.co/videos/preview/mixkit-decorating-a-gorgeous-wedding-hall-with-flowers-43110-large.mp4"
                poster="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
              />
              {/* Deep charcoal protective masks */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/90" />
            </div>

            <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center space-y-6" id="cinematic-showcase-copy">
              <Compass className="text-gold-accent w-6 h-6 animate-spin-slow stroke-[1.2]" />
              
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-champagne leading-tight">
                {t("cinematicTitle")}
              </h2>
              
              <p className="font-sans text-xs md:text-sm text-logo-grey max-w-xl leading-relaxed tracking-wider font-light">
                {t("cinematicDescription")}
              </p>

              <div className="pt-4">
                <button
                  onClick={() => scrollToSection("#portfolio-highlights")}
                  className="bg-transparent border border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-charcoal py-3 px-8 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-500 rounded-xs cursor-pointer"
                >
                  {t("cinematicBtn")}
                </button>
              </div>
            </div>
          </section>

          {/* 7. Services Section */}
          <ServicesSection />

          {/* 8. Why Choose Us Promises Cards */}
          <WhyChooseUs />

          {/* 9. Portfolio Highlights Carousel */}
          <PortfolioHighlights />

          {/* 10. Testimonials Love Notes */}
          <TestimonialsSection />

          {/* 11. Statistics Section with Animated Viewport Counting */}
          <section id="stats-section" className="py-20 bg-charcoal text-warm-white relative border-b border-[#FAF9F7]/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" id="stats-grid-wrapper">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center space-y-2 border-r border-[#FAF9F7]/10 last:border-r-0" id={`stat-block-${idx}`}>
                    <div className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold-accent tracking-wide font-medium">
                      {idx === 3 ? `${counts[idx]}%` : `${counts[idx]}+`}
                    </div>
                    <div className="font-sans text-[10px] md:text-xs tracking-widest text-logo-grey uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 12. Orchestration Process Timeline */}
          <ProcessSection />

          {/* 13. Instagram Social Grid */}
          <InstagramSection />

          {/* 14. Luxury Call To Action Banner */}
          <section id="cta-banner" className="relative py-28 md:py-36 flex items-center justify-center overflow-hidden bg-charcoal text-center text-warm-white">
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
              <img
                src="https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1600"
                alt="Magical candlelit reception tables under hanging lights"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/85" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/80" />
            </div>

            <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center space-y-8" id="cta-banner-content">
              <div className="w-12 h-[1px] bg-gold-accent" />
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight text-champagne leading-tight">
                {t("ctaBannerTitle")}
              </h2>

              <p className="font-sans text-sm md:text-base text-logo-grey max-w-2xl leading-relaxed font-light">
                {t("ctaBannerSubtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto" id="cta-banner-btns">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gold-accent hover:bg-champagne text-charcoal py-4 px-8 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-500 rounded-xs shadow-lg cursor-pointer"
                >
                  {t("ctaBannerBtnSchedule")}
                </button>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="border border-[#FAF9F7]/35 hover:border-gold-accent hover:text-gold-accent py-4 px-8 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-500 rounded-xs backdrop-blur-xs cursor-pointer"
                >
                  {t("ctaBannerBtnContact")}
                </button>
              </div>
            </div>
          </section>

          {/* 15. Form Questionnaire Section */}
          <ContactSection />

          {/* 16. Multi-Column Minimal Footer */}
          <Footer onAdminClick={() => setAdminOpen(true)} />

          {/* 17. Hidden Lead Admin Management Portal Modal */}
          <AdminPortal isOpen={adminOpen} onClose={() => setAdminOpen(false)} />

        </div>
      )}
    </>
  );
}
