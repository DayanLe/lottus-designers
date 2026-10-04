/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { m, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  onAdminClick: () => void;
}

export default function Navbar({ onAdminClick }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navServices"), href: "#services" },
    { label: t("navPortfolio"), href: "#portfolio" },
    { label: t("navProcess"), href: "#process" },
    { label: t("navTestimonials"), href: "#testimonials" },
    { label: t("navContact"), href: "#contact" },
  ];

  // Subtle administrative backdoor: Double click or click 5 times on the navbar logo to open Lead Management portal
  const handleLogoClick = () => {
    setLogoClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        onAdminClick();
        return 0;
      }
      return next;
    });

    // Reset click count after 3 seconds of inactivity
    setTimeout(() => setLogoClicks(0), 3000);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-warm-white/95 backdrop-blur-md border-b border-logo-grey/10 py-4 shadow-sm"
            : "bg-transparent py-8 md:py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo & Brand Name */}
          <div
            className="flex items-center space-x-4 cursor-pointer select-none group"
            onClick={handleLogoClick}
            id="nav-logo-trigger"
          >
            <Logo
              size="sm"
              withBg={isScrolled}
              className={`transition-all duration-500 rounded-xs ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-serif tracking-[0.2em] text-xs lg:text-sm xl:text-base uppercase transition-colors duration-500 font-medium ${
                  isScrolled ? "text-rich-black" : "text-warm-white"
                }`}
              >
                Lottus Designers
              </span>
              <span
                className={`font-sans tracking-[0.3em] text-[7px] xl:text-[8px] uppercase font-light transition-colors duration-500 ${
                  isScrolled ? "text-logo-grey" : "text-champagne/70"
                }`}
              >
                Medellín
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8" id="desktop-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`relative font-sans text-[10px] xl:text-xs tracking-[0.18em] xl:tracking-[0.25em] py-2 transition-colors duration-300 font-medium group text-left ${
                  isScrolled ? "text-rich-black hover:text-gold-accent" : "text-warm-white hover:text-champagne"
                }`}
              >
                {link.label}
                {/* Animated Elegant Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Consultation CTA and Mobile Hamburger */}
          <div className="flex items-center space-x-3 xl:space-x-6">
            {/* Discreet Language Switcher */}
            <div id="language-switcher" className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-sans font-semibold uppercase">
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors duration-300 py-1 px-1.5 focus:outline-none cursor-pointer ${
                  language === "en"
                    ? "text-gold-accent font-bold"
                    : isScrolled
                    ? "text-rich-black/55 hover:text-rich-black"
                    : "text-warm-white/55 hover:text-warm-white"
                }`}
                aria-label="Set language to English"
              >
                EN
              </button>
              <span className={`text-[8px] pointer-events-none ${isScrolled ? "text-rich-black/15" : "text-warm-white/20"}`}>|</span>
              <button
                onClick={() => setLanguage("es")}
                className={`transition-colors duration-300 py-1 px-1.5 focus:outline-none cursor-pointer ${
                  language === "es"
                    ? "text-gold-accent font-bold"
                    : isScrolled
                    ? "text-rich-black/55 hover:text-rich-black"
                    : "text-warm-white/55 hover:text-warm-white"
                }`}
                aria-label="Set language to Spanish"
              >
                ES
              </button>
            </div>

            <button
              onClick={() => scrollToSection("#contact")}
              className={`hidden md:flex items-center space-x-1.5 xl:space-x-2 border px-3 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 text-[8px] lg:text-[9px] xl:text-[10px] tracking-[0.18em] xl:tracking-[0.25em] uppercase transition-all duration-300 font-medium cursor-pointer ${
                isScrolled
                  ? "border-rich-black text-rich-black hover:bg-rich-black hover:text-warm-white"
                  : "border-warm-white text-warm-white hover:bg-warm-white hover:text-rich-black"
              }`}
              id="nav-cta-btn"
            >
              <span>{t("navConsultation")}</span>
              <Phone size={10} />
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-rich-black" : "text-warm-white"
              }`}
              aria-label="Toggle menu"
              id="mobile-menu-hamburger"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id="mobile-drawer-overlay"
            className="fixed inset-0 bg-charcoal z-40 lg:hidden flex flex-col justify-between pt-24 pb-12 px-8 text-warm-white"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Background design elements */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#C8A76B]/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute left-10 bottom-10 w-48 h-48 bg-logo-grey/5 rounded-full filter blur-2xl pointer-events-none" />

            <div className="flex flex-col space-y-6 my-auto" id="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <m.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="font-serif text-3xl text-left text-champagne hover:text-gold-accent transition-colors tracking-wide py-1 cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                >
                  {link.label}
                </m.button>
              ))}

              <m.button
                onClick={() => scrollToSection("#contact")}
                className="mt-8 border border-gold-accent text-gold-accent px-6 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold-accent hover:text-charcoal transition-all text-center w-full cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {t("heroCtaBook")}
              </m.button>
            </div>

            {/* Footer coordinates inside drawer */}
            <div className="border-t border-logo-grey/10 pt-6 text-center lg:text-left">
              <p className="font-serif text-md text-gold-accent mb-1">Lottus Designers</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-logo-grey">
                Medellín, Colombia • info@lottusdesigners.com
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
