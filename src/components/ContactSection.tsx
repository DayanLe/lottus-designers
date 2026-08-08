/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Phone, MapPin, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { LeadSubmission } from "../types";

export default function ContactSection() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: language === "en" ? "Wedding" : "Boda de Lujo",
    guestCount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple fields check
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.guestCount) {
      setError(
        language === "en"
          ? "Please compose all requested field dimensions."
          : "Por favor complete todos los campos requeridos."
      );
      setLoading(false);
      return;
    }

    // Simulate high-end server-side processing
    setTimeout(() => {
      try {
        // Construct lead payload
        const newLead: LeadSubmission = {
          id: `lead_${Date.now()}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.eventDate,
          eventType: formData.eventType,
          guestCount: parseInt(formData.guestCount, 10) || 50,
          message: formData.message,
          submittedAt: new Date().toISOString(),
        };

        // Extract and append to local storage
        const existingLeadsString = localStorage.getItem("lottus_design_leads");
        const existingLeads: LeadSubmission[] = existingLeadsString ? JSON.parse(existingLeadsString) : [];
        existingLeads.unshift(newLead);
        localStorage.setItem("lottus_design_leads", JSON.stringify(existingLeads));

        // Success state
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          eventType: language === "en" ? "Wedding" : "Boda de Lujo",
          guestCount: "",
          message: "",
        });
      } catch (err) {
        setError(
          language === "en"
            ? "A spatial communication issue occurred. Please retry."
            : "Ocurrió un error al enviar la solicitud. Por favor intente de nuevo."
        );
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  const eventTypes = language === "en"
    ? ["Wedding", "Corporate Gala", "Private Soirée", "Floral Styling Only", "Other Celebration"]
    : ["Boda de Lujo", "Gala Corporativa", "Celebración Privada", "Solo Diseño Floral", "Otra Celebración"];

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      {/* Decorative Blur Backdrops */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-champagne/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Coordinates & Branding info */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-block">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="h-[1px] w-8 bg-gold-accent" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-accent font-medium">
                  {language === "en" ? "Enquire Design" : "Consulta de Diseño"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-rich-black font-medium leading-tight">
                {t("contactTitle")}
              </h2>

              <p className="font-sans text-sm md:text-base text-rich-black/60 leading-relaxed font-light">
                {t("contactSubtitle")}
              </p>

              {/* Physical Coordinates Detail cards */}
              <div className="space-y-6 pt-6 border-t border-logo-grey/15" id="contact-coordinates">
                {/* Map Pin */}
                <div className="flex items-start space-x-4">
                  <div className="bg-champagne/40 text-gold-accent p-2 rounded-full mt-1">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-rich-black">
                      {language === "en" ? "Creative Studio" : "Estudio Creativo"}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-rich-black/60 font-light mt-0.5">
                      Vía Provenza, El Poblado, Medellín, Colombia
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-champagne/40 text-gold-accent p-2 rounded-full mt-1">
                    <Mail size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-rich-black">
                      {language === "en" ? "Direct Communications" : "Comunicaciones Directas"}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-rich-black/60 font-light mt-0.5">
                      enquire@lottusdesigners.com
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="bg-champagne/40 text-gold-accent p-2 rounded-full mt-1">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-rich-black">
                      {language === "en" ? "Secure Line / WhatsApp" : "Línea Segura / WhatsApp"}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-rich-black/60 font-light mt-0.5 font-mono">
                      +57 (312) 480-1290
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on exclusivity */}
            <div className="mt-12 bg-warm-white p-6 border-l-2 border-gold-accent rounded-r-xs hidden lg:block">
              <p className="font-serif italic text-sm text-rich-black/75">
                {language === "en"
                  ? '"We accept a highly limited number of weddings and luxury commissions each year to guarantee our absolute undivided artistic devotion."'
                  : '"Aceptamos un número muy limitado de bodas y comisiones de lujo cada año para garantizar nuestra absoluta e indivisible devoción artística."'}
              </p>
            </div>
          </div>

          {/* Right Column: Elegant Booking Form */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-warm-white border border-logo-grey/15 p-8 md:p-12 shadow-xl rounded-xs relative overflow-hidden">
              {/* Offset decorative lines */}
              <div className="absolute top-3 right-3 bottom-3 left-3 border border-logo-grey/5 pointer-events-none rounded-xs" />
              
              <h3 className="font-serif text-xl md:text-2xl text-rich-black font-semibold mb-8 text-center md:text-left">
                {language === "en" ? "Design Questionnaire" : "Cuestionario de Diseño"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative" id="booking-questionnaire">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs py-3 px-4 rounded-xs font-sans">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest text-logo-grey font-bold">
                      {t("formName")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Victoria Sterling"
                      required
                      className="w-full bg-white border border-logo-grey/25 py-3 px-4 font-sans text-xs md:text-sm rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all font-light"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest text-logo-grey font-bold">
                      {t("formEmail")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="victoria@luxuryunion.com"
                      required
                      className="w-full bg-white border border-logo-grey/25 py-3 px-4 font-sans text-xs md:text-sm rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all font-light"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="font-sans text-[10px] uppercase tracking-widest text-logo-grey font-bold">
                      {t("formPhone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      required
                      className="w-full bg-white border border-logo-grey/25 py-3 px-4 font-sans text-xs md:text-sm rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all font-light"
                    />
                  </div>

                  {/* Event Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="eventDate" className="font-sans text-[10px] uppercase tracking-widest text-logo-grey font-bold">
                      {t("formDate")} *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-logo-grey/25 py-3 px-4 font-sans text-xs md:text-sm rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all font-light"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="eventType" className="font-sans text-[10px] uppercase tracking-widest text-logo-grey font-bold">
                      {t("formType")} *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-white border border-logo-grey/25 py-3 px-4 font-sans text-xs md:text-sm rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all font-light"
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-1.5">
                    <label htmlFor="guestCount" className="font-sans text-[10px] uppercase tracking-widest text-logo-grey font-bold">
                      {t("formGuests")} *
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="150"
                      required
                      min="1"
                      className="w-full bg-white border border-logo-grey/25 py-3 px-4 font-sans text-xs md:text-sm rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all font-light"
                    />
                  </div>
                </div>

                {/* Message / Vision details */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest text-logo-grey font-bold">
                    {language === "en"
                      ? "Tell Us About Your Vision (Aesthetic, Venues, Desired Florals...)"
                      : "Cuéntenos Sobre Su Visión (Estética, Lugares, Flores Deseadas...)"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      language === "en"
                        ? "We envision a botanical-forward celebration inside a glass pavilion in Llanogrande. Hanging installations are high-priority..."
                        : "Imaginamos una celebración de estilo botánico dentro de un pabellón de cristal en Llanogrande. Las instalaciones colgantes son de alta prioridad..."
                    }
                    rows={4}
                    className="w-full bg-white border border-logo-grey/25 py-3 px-4 font-sans text-xs md:text-sm rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all font-light"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-charcoal text-warm-white border border-gold-accent/20 py-4 font-sans text-xs tracking-[0.25em] uppercase hover:bg-gold-accent hover:text-charcoal cursor-pointer font-semibold transition-all duration-500 rounded-xs flex items-center justify-center space-x-2 shadow-lg"
                  id="submit-consultation-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin text-gold-accent" />
                      <span>
                        {language === "en" ? "Transmitting Inquiry..." : "Transmitiendo Solicitud..."}
                      </span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={12} className="text-gold-accent animate-none" />
                      <span>{t("formBtn")}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Overlay Reveal */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    id="success-overlay"
                    className="absolute inset-0 bg-charcoal text-warm-white flex flex-col justify-center items-center p-8 text-center z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="space-y-6 max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <div className="flex justify-center text-gold-accent">
                        <CheckCircle2 size={56} className="stroke-[1] animate-pulse" />
                      </div>
                      
                      <h4 className="font-serif text-2xl md:text-3xl text-champagne">
                        {language === "en" ? "Inquiry Secured" : "Consulta Recibida"}
                      </h4>
                      
                      <p className="font-sans text-xs md:text-sm text-logo-grey leading-relaxed font-light">
                        {t("formSuccessMsg")}
                      </p>

                      <div className="pt-4">
                        <button
                          onClick={() => setSuccess(false)}
                          className="border border-[#FAF9F7]/20 hover:border-gold-accent text-warm-white hover:text-gold-accent font-sans text-[10px] tracking-widest uppercase py-2 px-6 rounded-xs transition-colors duration-300 cursor-pointer"
                        >
                          {language === "en" ? "Submit New Questionnaire" : "Enviar Nuevo Cuestionario"}
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
