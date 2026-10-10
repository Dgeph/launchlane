"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, X, ChevronLeft } from "lucide-react";

const countries = [
  { code: "+233", label: "GHA", name: "Ghana" },
  { code: "+1", label: "USA", name: "United States" },
  { code: "+44", label: "GBR", name: "United Kingdom" },
  { code: "+234", label: "NGA", name: "Nigeria" },
  { code: "+254", label: "KEN", name: "Kenya" },
];

const LaunchlaneSymbol = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12H7V22H17V12H22L12 2Z" fill="url(#orange-grad-pricing)" />
    <defs>
      <linearGradient id="orange-grad-pricing" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5500" />
        <stop offset="1" stopColor="#FF7700" />
      </linearGradient>
    </defs>
  </svg>
);

export default function PricingPageDark() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [selectedTier, setSelectedTier] = useState("The Sprint");

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const openModal = (tierName) => {
    if (tierName) setSelectedTier(tierName);
    setSubmissionComplete(false);
    setIsSubmitting(false);
    setFormError("");
    setFormData({ name: "", email: "", phone: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Validate blank / whitespace inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "96b975d1-847d-4e57-8837-fa823f702b91",
          subject: `Pricing Inquiry: ${selectedTier} from ${formData.name}`,
          from_name: "Launchlane Pricing Page",
          selected_plan: selectedTier,
          name: formData.name,
          email: formData.email,
          phone: `${selectedCountry.code} ${formData.phone}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionComplete(true);
      } else {
        setFormError(result.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setFormError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-stone-100 font-sans selection:bg-[#FF5500] selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      <div 
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="fixed top-6 left-0 right-0 z-40 px-4 md:px-8 max-w-6xl mx-auto pointer-events-none">
        <header className="pointer-events-auto w-full rounded-full border border-stone-800/80 bg-[#0A0A0A]/60 backdrop-blur-2xl shadow-2xl px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-lg font-black tracking-tight text-white group">
            <LaunchlaneSymbol className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
            <span className="tracking-wider">LAUNCH<span className="text-[#FF5500]">LANE</span></span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-stone-400 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF5500]" />
            Back to Home
          </Link>
        </header>
      </div>

      <main className="relative z-10 pt-36 pb-24 px-6 flex-1 max-w-5xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF5500]/30 bg-[#FF5500]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF5500]">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Engagements
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Simple, Fair Pricing.
          </h1>

          <p className="mt-4 text-stone-400 text-sm md:text-base leading-relaxed">
            Focused engagements engineered for exactly where your startup is today.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto pt-6">
          
          <div className="relative rounded-3xl border border-stone-800 bg-[#121212] p-8 shadow-xl flex flex-col justify-between hover:border-stone-700 transition-colors">
            <div>
              <h2 className="text-2xl font-black text-white">The Sprint</h2>
              <p className="mt-1 text-stone-400 text-xs">For pre-seed & seed startups needing instant market credibility.</p>
              
              <div className="mt-6 mb-6 border-b border-stone-800 pb-6">
                <span className="text-4xl font-black text-white">$3,500</span>
                <span className="text-stone-500 text-xs ml-2 font-semibold">/ project</span>
              </div>

              <ul className="space-y-3 text-stone-300 text-xs font-medium mb-8">
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  Single-page high-converting landing site
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  Conversion copywriting & positioning
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  Mobile-first responsive engineering
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  4-week turnaround
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModal("The Sprint")}
              className="w-full rounded-full border border-stone-800 bg-[#1A1A1A] py-3 text-xs font-bold text-white transition-colors hover:border-[#FF5500] hover:text-[#FF5500]"
            >
              Choose Sprint
            </button>
          </div>

          <div className="relative rounded-3xl border-2 border-[#FF5500] bg-[#121212] p-8 shadow-2xl flex flex-col justify-between overflow-visible">
            <div className="absolute -top-3.5 right-8 bg-[#FF5500] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg z-20">
              Most Popular
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">Full Agency Build</h2>
              <p className="mt-1 text-stone-400 text-xs">For funded startups ready to scale marketing and product storytelling.</p>
              
              <div className="mt-6 mb-6 border-b border-stone-800 pb-6">
                <span className="text-4xl font-black text-white">$7,500</span>
                <span className="text-stone-500 text-xs ml-2 font-semibold">/ project</span>
              </div>

              <ul className="space-y-3 text-stone-300 text-xs font-medium mb-8">
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  Multi-page complete marketing site
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  Brand Starter Kit (Typography & Palette)
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  CMS Integration (Blog & Case Studies)
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]"><Check className="w-3.5 h-3.5" /></div>
                  Foundational SEO & analytics setup
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModal("Full Agency Build")}
              className="w-full rounded-full bg-[#FF5500] py-3 text-xs font-bold text-white shadow-[0_0_20px_rgba(255,85,0,0.3)] transition-all hover:bg-[#FF6611]"
            >
              Choose Agency Build
            </button>
          </div>

        </div>
      </main>

      <footer className="border-t border-stone-800/80 bg-[#0A0A0A] py-8 px-6 text-center text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Launchlane. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-800 bg-[#121212] p-8 md:p-10 shadow-2xl z-10"
            >
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-stone-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <LaunchlaneSymbol className="w-8 h-8 mb-6" />

              {submissionComplete ? (
                <div className="py-10 text-center">
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="mt-2 text-stone-400 text-sm">We’ll review your details for {selectedTier} and respond shortly.</p>
                  <button
                    onClick={closeModal}
                    className="mt-6 rounded-full border border-stone-800 bg-[#1A1A1A] px-6 py-2.5 text-xs font-bold text-white hover:bg-stone-800"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5500]">Selected Plan</span>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white mt-0.5">{selectedTier}</h3>
                  </div>

                  {formError && (
                    <div className="rounded-xl bg-red-950/60 p-3 text-xs font-semibold text-red-400 border border-red-800/60">
                      {formError}
                    </div>
                  )}

                  <div className="space-y-5">
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name *"
                      className="w-full border-0 border-b border-stone-800 bg-transparent py-2.5 px-0 text-sm text-white placeholder-stone-500 outline-none transition-colors focus:border-[#FF5500]"
                    />
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address *"
                      className="w-full border-0 border-b border-stone-800 bg-transparent py-2.5 px-0 text-sm text-white placeholder-stone-500 outline-none transition-colors focus:border-[#FF5500]"
                    />

                    <div className="relative flex items-center border-b border-stone-800 focus-within:border-[#FF5500] transition-colors">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsCountryMenuOpen(!isCountryMenuOpen)}
                          className="flex items-center gap-1.5 py-2.5 pr-3 text-xs font-bold text-[#FF5500] outline-none"
                        >
                          <span>{selectedCountry.label} {selectedCountry.code}</span>
                        </button>

                        {isCountryMenuOpen && (
                          <div className="absolute left-0 top-full mt-2 w-44 rounded-xl border border-stone-800 bg-[#1A1A1A] p-2 shadow-2xl z-20">
                            {countries.map((c) => (
                              <button
                                key={`${c.code}-${c.label}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsCountryMenuOpen(false);
                                }}
                                className="w-full text-left px-3 py-1.5 text-xs text-stone-300 hover:bg-stone-800 rounded-lg transition-colors"
                              >
                                <span className="font-bold text-[#FF5500]">{c.label}</span> <span className="text-[10px] text-stone-500">{c.code}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number *"
                        className="flex-1 border-0 bg-transparent py-2.5 px-0 text-sm text-white placeholder-stone-500 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#FF5500] py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,85,0,0.3)] transition-all hover:bg-[#FF6611] disabled:opacity-50"
                  >
                    {isSubmitting ? "Locking In..." : "Lock In Plan"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}