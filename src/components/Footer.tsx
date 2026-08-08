/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { Instagram, Mail, Phone, MapPin, ArrowUpRight, ShieldAlert, FileCode, Download } from "lucide-react";

interface FooterProps {
  onAdminClick: () => void;
}

export default function Footer({ onAdminClick }: FooterProps) {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleQuickScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadHTML = () => {
    const rawContent = document.documentElement.outerHTML;
    const cleanDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lottus Designers | Luxury Event & Wedding Design</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #121212; color: #FAF9F7; margin: 0; padding: 0; }
    h1, h2, h3, h4, .font-serif { font-family: 'Cormorant Garamond', serif; }
  </style>
</head>
<body>
${rawContent}
</body>
</html>`;

    const blob = new Blob([cleanDoc], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lottus_designers_website.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const socialLinks = [
    { icon: <Instagram size={14} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Mail size={14} />, href: "mailto:enquire@lottusdesigners.com", label: "Email" },
    { icon: <Phone size={14} />, href: "https://wa.me/573124801290", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-charcoal text-warm-white py-16 md:py-24 border-t border-[#FAF9F7]/10 relative overflow-hidden" id="footer-section">
      {/* Subtle Background Elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-gold-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-10 w-48 h-48 bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#FAF9F7]/10">
          
          {/* Col 1: Brand details (Lottus Designers) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <Logo size="sm" withBg={true} className="border border-gold-accent/15 rounded-xs scale-90" />
              <div>
                <span className="font-serif tracking-[0.25em] text-md md:text-lg uppercase text-champagne font-medium block">
                  Lottus Designers
                </span>
                <span className="font-sans tracking-[0.3em] text-[8px] uppercase text-logo-grey font-light">
                  Medellín, Colombia
                </span>
              </div>
            </div>

            <p className="font-sans text-xs md:text-sm text-logo-grey font-light leading-relaxed max-w-sm">
              {t("footerParagraph")}
            </p>

            {/* Social media icons */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#FAF9F7]/10 flex items-center justify-center text-logo-grey hover:text-gold-accent hover:border-gold-accent transition-colors duration-300 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-sm text-champagne uppercase tracking-widest font-semibold border-b border-[#FAF9F7]/5 pb-2">
              {language === "en" ? "Quick Navigation" : "Navegación Rápida"}
            </h4>
            <div className="grid grid-cols-1 gap-3 font-sans text-xs">
              <button
                onClick={() => handleQuickScroll("#about")}
                className="text-logo-grey hover:text-gold-accent transition-colors text-left flex items-center space-x-1 group cursor-pointer"
              >
                <span>{language === "en" ? "About Our Studio" : "Sobre Nuestro Estudio"}</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => handleQuickScroll("#services")}
                className="text-logo-grey hover:text-gold-accent transition-colors text-left flex items-center space-x-1 group cursor-pointer"
              >
                <span>{language === "en" ? "Bespoke Services" : "Servicios Personalizados"}</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => handleQuickScroll("#portfolio")}
                className="text-logo-grey hover:text-gold-accent transition-colors text-left flex items-center space-x-1 group cursor-pointer"
              >
                <span>{language === "en" ? "Visual Gallery" : "Galería Visual"}</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => handleQuickScroll("#process")}
                className="text-logo-grey hover:text-gold-accent transition-colors text-left flex items-center space-x-1 group cursor-pointer"
              >
                <span>{language === "en" ? "The Orchestration Process" : "El Proceso de Orquestación"}</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => handleQuickScroll("#testimonials")}
                className="text-logo-grey hover:text-gold-accent transition-colors text-left flex items-center space-x-1 group cursor-pointer"
              >
                <span>{language === "en" ? "Client Love Notes" : "Notas de Amor de Clientes"}</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => handleQuickScroll("#contact")}
                className="text-logo-grey hover:text-gold-accent transition-colors text-left flex items-center space-x-1 group cursor-pointer"
              >
                <span>{language === "en" ? "Request Consultation" : "Solicitar Consulta"}</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* Col 3: Coordinates details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-serif text-sm text-champagne uppercase tracking-widest font-semibold border-b border-[#FAF9F7]/5 pb-2">
              {language === "en" ? "Our Locations" : "Nuestras Ubicaciones"}
            </h4>
            <div className="space-y-4 font-sans text-xs text-logo-grey font-light">
              <div className="flex items-start space-x-3">
                <MapPin size={14} className="text-gold-accent mt-0.5" />
                <div>
                  <p className="text-champagne font-semibold font-serif">Medellín Studio</p>
                  <p className="mt-0.5 leading-relaxed">
                    Vía Provenza, El Poblado, Medellín, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin size={14} className="text-gold-accent mt-0.5" />
                <div>
                  <p className="text-champagne font-semibold font-serif">
                    {language === "en" ? "Llanogrande Depot (By Appt Only)" : "Depósito Llanogrande (Solo con Cita Previa)"}
                  </p>
                  <p className="mt-0.5 leading-relaxed">
                    Kilómetro 4, Vía Rionegro-Llanogrande, Antioquia
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright, export HTML button & admin link */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 font-sans text-[10px] uppercase tracking-widest text-logo-grey">
          <p>{t("footerLegal").replace("2026", String(currentYear))}</p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            <span className="font-light hidden lg:inline">
              {language === "en" 
                ? "Medellín & Destination Events Worldwide" 
                : "Medellín e Invitados de Destino Internacional"}
            </span>

            {/* Direct Static HTML Download */}
            <button
              onClick={handleDownloadHTML}
              className="flex items-center space-x-1.5 border border-gold-accent/40 bg-gold-accent/10 hover:bg-gold-accent hover:text-charcoal text-gold-accent px-3 py-1 rounded-xs transition-all text-[9px] font-semibold cursor-pointer"
              title="Download full static HTML web page"
            >
              <FileCode size={11} />
              <span>Export HTML / CSS</span>
            </button>

            {/* Subtle backend lead portal access */}
            <button
              onClick={onAdminClick}
              className="flex items-center space-x-1 hover:text-gold-accent text-[#FAF9F7]/30 transition-all text-[9px] hover:underline cursor-pointer"
              aria-label="Secure Lead Portal"
            >
              <ShieldAlert size={10} />
              <span>{t("footerAdminLink")}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
