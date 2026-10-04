/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "motion/react";
import { X, Trash2, Download, ExternalLink, CalendarDays, Inbox, ShieldCheck, FileCode, Globe, Lock } from "lucide-react";
import { LeadSubmission } from "../types";

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SESSION_UNLOCK_KEY = "lottus_admin_unlocked";
// NOTE: this is a client-side deterrent only, not real access control — the
// passcode ships inside the JS bundle and can be read by anyone who opens
// devtools. It stops casual visitors from browsing/deleting leads through the
// UI; it does not stop a determined attacker. Real protection requires the
// leads to live behind a server-side authenticated endpoint instead of
// localStorage.
const ADMIN_PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE as string | undefined;

export default function AdminPortal({ isOpen, onClose }: AdminPortalProps) {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_UNLOCK_KEY) === "true"
  );
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (isOpen && unlocked) {
      const storedLeads = localStorage.getItem("lottus_design_leads");
      if (storedLeads) {
        setLeads(JSON.parse(storedLeads));
      }
    }
  }, [isOpen, unlocked]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (ADMIN_PASSCODE && passwordInput === ADMIN_PASSCODE) {
      sessionStorage.setItem(SESSION_UNLOCK_KEY, "true");
      setUnlocked(true);
      setAuthError("");
      setPasswordInput("");
    } else {
      setAuthError("Incorrect passcode.");
    }
  };

  const handleDelete = (id: string) => {
    const updatedLeads = leads.filter((lead) => lead.id !== id);
    setLeads(updatedLeads);
    localStorage.setItem("lottus_design_leads", JSON.stringify(updatedLeads));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to purge all stored inquiries?")) {
      setLeads([]);
      localStorage.removeItem("lottus_design_leads");
    }
  };

  const downloadCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ["ID", "Name", "Email", "Phone", "Event Date", "Event Type", "Guest Count", "Message", "Submitted At"];
    const rows = leads.map((lead) => [
      lead.id,
      `"${lead.name.replace(/"/g, '""')}"`,
      lead.email,
      lead.phone,
      lead.eventDate,
      lead.eventType,
      lead.guestCount,
      `"${(lead.message || "").replace(/"/g, '""')}"`,
      lead.submittedAt,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "lottus_designers_leads.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadStaticHTML = () => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          id="admin-portal-modal"
          className="fixed inset-0 bg-charcoal/98 z-[999999] flex items-center justify-center p-4 md:p-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <m.div
            className="bg-[#1E1E1E] border border-gold-accent/25 w-full max-w-5xl h-[85vh] flex flex-col justify-between overflow-hidden shadow-2xl relative text-warm-white rounded-xs"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background luxury highlights */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-gold-accent/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-80 h-80 bg-logo-grey/5 rounded-full filter blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-[#FAF9F7]/10 flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="text-gold-accent w-6 h-6 stroke-[1.2]" />
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-champagne font-semibold">
                    Leads Vault / Client Portal
                  </h3>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-logo-grey mt-0.5">
                    Lottus Designers Administrative Console
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={downloadStaticHTML}
                  className="flex items-center space-x-1.5 border border-gold-accent/30 hover:border-gold-accent bg-gold-accent/10 hover:bg-gold-accent/20 py-1.5 px-3 rounded-xs text-[10px] uppercase tracking-wider font-sans text-gold-accent transition-all cursor-pointer"
                  title="Download static HTML/CSS/JS file"
                >
                  <FileCode size={13} />
                  <span>Export HTML/CSS/JS</span>
                </button>

                {leads.length > 0 && (
                  <button
                    onClick={downloadCSV}
                    className="flex items-center space-x-1.5 border border-[#FAF9F7]/10 hover:border-gold-accent/40 bg-[#FAF9F7]/5 hover:bg-[#FAF9F7]/10 py-1.5 px-3 rounded-xs text-[10px] uppercase tracking-wider font-sans text-champagne transition-all cursor-pointer"
                  >
                    <Download size={12} />
                    <span>Export CSV</span>
                  </button>
                )}
                
                <button
                  onClick={onClose}
                  className="p-2 bg-[#FAF9F7]/5 hover:bg-[#FAF9F7]/15 rounded-full transition-colors cursor-pointer text-logo-grey hover:text-warm-white border border-[#FAF9F7]/10"
                  aria-label="Close Admin Portal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Lead Entries Listing & Export Tools */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 relative z-10 space-y-6">

              {!unlocked ? (
                <div className="flex flex-col items-center justify-center h-full py-16 space-y-5 text-center">
                  <div className="bg-[#FAF9F7]/5 p-4 rounded-full border border-[#FAF9F7]/10">
                    <Lock className="w-8 h-8 text-gold-accent stroke-[1.2]" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-md text-champagne">Restricted Access</p>
                    <p className="font-sans text-xs text-logo-grey max-w-sm">
                      Enter the administrative passcode to view client inquiries.
                    </p>
                  </div>
                  {!ADMIN_PASSCODE ? (
                    <p className="font-sans text-xs text-red-400 max-w-sm">
                      No passcode configured (VITE_ADMIN_PASSCODE). Access is disabled until it is set.
                    </p>
                  ) : (
                    <form onSubmit={handleUnlock} className="flex flex-col items-center space-y-3 w-full max-w-xs">
                      <input
                        type="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Passcode"
                        autoFocus
                        className="w-full bg-white border border-logo-grey/25 py-2.5 px-4 font-sans text-xs rounded-xs text-rich-black focus:outline-none focus:border-gold-accent transition-all"
                      />
                      {authError && (
                        <p className="font-sans text-[10px] text-red-400">{authError}</p>
                      )}
                      <button
                        type="submit"
                        className="bg-gold-accent hover:bg-champagne text-charcoal py-2 px-6 font-sans text-[10px] tracking-widest uppercase font-semibold transition-all rounded-xs w-full"
                      >
                        Unlock
                      </button>
                    </form>
                  )}
                </div>
              ) : (
              <>
              {/* Site Export Box */}
              <div className="bg-[#242424] border border-gold-accent/20 p-5 rounded-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center space-x-2">
                    <Globe className="text-gold-accent w-4 h-4" />
                    <h4 className="font-serif text-sm text-champagne font-semibold">Static Site Export & Source Bundle</h4>
                  </div>
                  <p className="font-sans text-xs text-logo-grey leading-relaxed font-light">
                    This React web application compiles into pure static HTML, CSS, and JavaScript. Click <strong className="text-warm-white">Export HTML/CSS/JS</strong> above for instant single-file download, or run <code className="bg-black/40 px-1.5 py-0.5 rounded text-gold-accent text-[11px] font-mono">npm run build</code> in the root directory to generate the optimized static production folder (<code className="text-champagne font-mono">/dist</code>).
                  </p>
                </div>
                <button
                  onClick={downloadStaticHTML}
                  className="bg-gold-accent hover:bg-champagne text-charcoal py-2 px-4 rounded-xs font-sans text-[10px] uppercase tracking-wider font-semibold transition-all whitespace-nowrap flex items-center space-x-1.5 cursor-pointer"
                >
                  <FileCode size={13} />
                  <span>Download HTML Package</span>
                </button>
              </div>

              {leads.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-16 space-y-4 text-center">
                  <div className="bg-[#FAF9F7]/5 p-4 rounded-full border border-[#FAF9F7]/10">
                    <Inbox className="w-8 h-8 text-logo-grey/50 stroke-[1.2]" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-md text-champagne">Archive Is Empty</p>
                    <p className="font-sans text-xs text-logo-grey max-w-sm">
                      Submit sample questionnaires on the landing page form to see real lead submissions register instantly in this private portal.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-[#FAF9F7]/5">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-logo-grey">
                      {leads.length} Inquiries Logged
                    </span>
                    <button
                      onClick={handleClearAll}
                      className="font-sans text-[9px] uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors"
                    >
                      Purge All Inquiries
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className="bg-[#2A2A2A]/50 border border-[#FAF9F7]/5 hover:border-gold-accent/25 p-6 rounded-xs space-y-4 transition-colors relative group"
                      >
                        {/* Right header: Submission Timestamp & Delete button */}
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-sans text-[9px] uppercase tracking-widest bg-gold-accent/10 border border-gold-accent/20 py-1 px-3 rounded-full text-gold-accent font-semibold mr-2">
                              {lead.eventType}
                            </span>
                            <span className="font-sans text-[9px] uppercase tracking-widest text-logo-grey">
                              {new Date(lead.submittedAt).toLocaleDateString()}
                            </span>
                          </div>

                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="text-logo-grey hover:text-red-400 p-1.5 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Delete Lead"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        {/* Middle row: Grid of customer attributes */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                          <div>
                            <p className="font-sans text-[9px] uppercase tracking-widest text-logo-grey">Client Name</p>
                            <p className="font-serif text-sm text-champagne mt-0.5 font-medium">{lead.name}</p>
                          </div>
                          <div>
                            <p className="font-sans text-[9px] uppercase tracking-widest text-logo-grey">Contact Information</p>
                            <p className="font-sans text-xs text-warm-white font-light mt-0.5">{lead.email}</p>
                            <p className="font-sans text-xs text-logo-grey font-light font-mono">{lead.phone}</p>
                          </div>
                          <div>
                            <p className="font-sans text-[9px] uppercase tracking-widest text-logo-grey">Celebration Date</p>
                            <p className="font-sans text-xs text-warm-white font-light mt-0.5 flex items-center space-x-1">
                              <CalendarDays size={12} className="text-gold-accent" />
                              <span>{lead.eventDate}</span>
                            </p>
                          </div>
                          <div>
                            <p className="font-sans text-[9px] uppercase tracking-widest text-logo-grey font-semibold">Guests</p>
                            <p className="font-sans text-xs text-warm-white font-light mt-0.5 font-mono">{lead.guestCount} guests</p>
                          </div>
                        </div>

                        {/* Vision Statement box */}
                        {lead.message && (
                          <div className="bg-[#1C1C1C] p-4 border border-[#FAF9F7]/5 rounded-xs mt-2">
                            <p className="font-sans text-[8px] uppercase tracking-widest text-logo-grey mb-1">Aesthetic Vision Statement</p>
                            <p className="font-sans text-xs text-warm-white/85 leading-relaxed font-light italic">
                              "{lead.message}"
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 bg-[#181818] border-t border-[#FAF9F7]/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-center md:text-left">
              <div>
                <p className="font-serif text-xs text-gold-accent">
                  Secured Lead Database (Client-Side Local Storage)
                </p>
                <p className="font-sans text-[9px] text-logo-grey mt-0.5">
                  Submissions do not leave this browser sandbox and are fully secure for design demonstration.
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-gold-accent hover:bg-champagne text-charcoal py-2 px-6 font-sans text-[10px] tracking-widest uppercase font-semibold transition-all rounded-xs"
              >
                Close Vault
              </button>
            </div>

          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
