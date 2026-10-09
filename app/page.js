"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  X, 
  Search, 
  Palette, 
  Rocket,
  Menu,
  ChevronDown
} from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
];

const countries = [
  { code: "+233", label: "GHA", name: "Ghana" },
  { code: "+1", label: "USA", name: "United States" },
  { code: "+44", label: "GBR", name: "United Kingdom" },
  { code: "+234", label: "NGA", name: "Nigeria" },
  { code: "+254", label: "KEN", name: "Kenya" },
];

const LaunchlaneSymbol = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12H7V22H17V12H22L12 2Z" fill="url(#orange-grad)" />
    <defs>
      <linearGradient id="orange-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5500" />
        <stop offset="1" stopColor="#FF7700" />
      </linearGradient>
    </defs>
  </svg>
);

const processSteps = [
  {
    step: "01",
    title: "Discover",
    intro: "We start with what you’re building.",
    copy: "Before we design anything, we learn how your startup works, who it serves, and what you need the website to accomplish.",
    bullets: [
      "What your product does and who your ideal customer is",
      "What makes your startup different",
      "What visitors need to understand first",
      "The primary action you want users to take",
    ],
    deliverable: "A clear project direction, audience profile, website goals, and an agreed scope.",
  },
  {
    step: "02",
    title: "Define",
    intro: "We turn your ideas into a sharper story.",
    copy: "We organize your positioning into a clear structure so visitors understand your value quickly and know exactly where to go next.",
    bullets: [
      "Core messaging and website positioning",
      "Hero headline and call-to-action direction",
      "Page structure and navigation plan",
      "Content priorities that build trust",
    ],
    deliverable: "A focused website strategy and content plan built around your customers, not jargon.",
  },
  {
    step: "03",
    title: "Design",
    intro: "We make your first impression count.",
    copy: "Every section is designed to make your startup feel credible, memorable, and launch-ready across mobile and desktop.",
    bullets: [
      "Custom visual direction and conversion-focused layouts",
      "Branded colors, typography, and interface components",
      "Responsive page design for all key breakpoints",
      "Collaborative milestone reviews before final sign-off",
    ],
    deliverable: "A complete, presentation-ready website design that feels uniquely yours.",
  },
  {
    step: "04",
    title: "Launch",
    intro: "We turn the design into a real website.",
    copy: "After approval, we build, test, polish, and publish your site so you can launch with confidence and focus on growth.",
    bullets: [
      "Performance, mobile responsiveness, and browser testing",
      "Form and interaction checks",
      "Foundational SEO and analytics setup",
      "Final QA of copy, visuals, and links",
    ],
    deliverable: "A live, fast, professional website ready to support your next milestone.",
  },
];

const projects = [

  {
    title: "Relay",
    type: "Operations Engine",
    desc: "Created a bold B2B narrative with clear use-case framing, helping teams quickly understand platform value.",
    images: ["/portfolio/relay_main.png", "/portfolio/relay_1.png", "protfolio/relay_2.png"],
  },
  {
    title: "Clayhouse",
    type: "Design Marketplace",
    desc: "Designed a flexible catalog layout that made products feel premium while simplifying the path to purchase.",
    images: ["/portfolio/clayhouse_main.png", "/portfolio/clayhouse_1.png"],
  },
];

const faqItems = [
  {
    question: "Do you specialize in custom builds or templates?",
    answer: "We build fully custom designs—never pre-made templates. We typically develop on Webflow or Framer for marketing sites so your team can easily manage content, or React/Next.js if you require complex custom web apps or portal integrations."
  },
  {
    question: "What is the typical timeline from kick-off to launch?",
    answer: "Most startup website builds take 4 to 8 weeks from kick-off to launch, split into four two-week sprints: Discovery & Wireframing, UI Design, Development, and QA/Testing."
  },
  {
    question: "What do you need from my side to keep things on schedule?",
    answer: "We need a single point of contact on your end, timely feedback on design deliverables (within 48 hours), high-resolution brand assets, and product copy."
  },
  {
    question: "What happens after launch?",
    answer: "We include a 30-day post-launch warranty covering any bug fixes or adjustments for free. After that, we offer optional monthly retainer packages for continuous conversion rate optimization (CRO), custom feature additions, and routine maintenance."
  },
  {
    question: "Is this a fixed-fee contract or time-and-materials?",
    answer: "We operate almost exclusively on a fixed-fee project basis so you know the exact cost upfront. Payment is structured as 50% upon signing, 25% at design approval, and 25% prior to domain switch and site launch."
  }
];

export default function LaunchlaneLight() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const openModal = () => {
    setSubmissionComplete(false);
    setIsSubmitting(false);
    setFormError("");
    setFormData({ name: "", company: "", email: "", phone: "", details: "" });
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    setActiveImageIndex(0);
  };

  // Web3Forms Submit Handler + Blank Validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Validate blank / whitespace inputs
    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
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
          subject: `New Lead from ${formData.name} (${formData.company})`,
          from_name: "Launchlane Website",
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: `${selectedCountry.code} ${formData.phone}`,
          message: formData.details || "No additional details provided.",
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

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-white text-stone-900 font-sans selection:bg-[#FF5500] selection:text-white overflow-x-hidden">
      <div className="fixed top-6 left-0 right-0 z-40 px-4 md:px-8 max-w-6xl mx-auto pointer-events-none">
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-auto w-full rounded-2xl md:rounded-full border border-stone-200 bg-white/80 backdrop-blur-2xl shadow-xl px-6 py-3.5 flex items-center justify-between"
        >
          <Link href="/" className="flex items-center gap-3 text-lg font-black tracking-tight text-black group">
            <LaunchlaneSymbol className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
            <span className="tracking-wider">LAUNCH<span className="text-[#FF5500]">LANE</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-stone-600 transition-colors hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#FF5500] after:transition-all after:duration-300 pb-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={openModal}
              className="rounded-full bg-[#FF5500] px-5 py-2 text-xs font-bold text-white shadow-[0_4px_20px_rgba(255,85,0,0.25)] transition-colors hover:bg-[#FF6611]"
            >
              Start your launch
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-black rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.header>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="pointer-events-auto lg:hidden rounded-2xl border border-stone-200 bg-white/95 backdrop-blur-2xl p-6 shadow-2xl space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-stone-700 hover:text-[#FF5500] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="relative z-10 pt-36">
        <section className="relative mx-auto max-w-5xl px-6 py-20 text-center flex flex-col justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-[#FF5500]/10 blur-[120px] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF5500]/30 bg-[#FF5500]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF5500]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Conversion-Focused Web Design for Startups
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-black sm:text-6xl md:text-7xl leading-[1.08]"
          >
            Launch faster with a website <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FF7700]">
              built to convert.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-stone-600 font-normal leading-relaxed"
          >
            We design and build high-impact startup websites that help founders earn trust quickly and turn traffic into real conversations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="group inline-flex items-center gap-3 rounded-full bg-[#FF5500] px-8 py-4 text-sm font-extrabold text-white shadow-[0_4px_30px_rgba(255,85,0,0.3)] transition-all hover:bg-[#FF6611]"
            >
              Start your launch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>
          </motion.div>
        </section>

        <div className="relative flex overflow-x-hidden border-y border-stone-200 bg-stone-50 py-5 my-8">
          <motion.div 
            animate={{ x: ["0%", "-100%"] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap text-sm font-bold uppercase tracking-widest text-stone-600 w-max"
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 pr-8">
                HIGH CONVERTING WEBSITES <Zap className="text-[#FF5500] w-4 h-4 fill-[#FF5500]" /> ZERO FRICTION <Sparkles className="text-stone-800 w-4 h-4" /> 4-WEEK SPRINT <Rocket className="text-[#FF5500] w-4 h-4" />
                HIGH CONVERTING WEBSITES <Zap className="text-[#FF5500] w-4 h-4 fill-[#FF5500]" /> ZERO FRICTION <Sparkles className="text-stone-800 w-4 h-4" /> 4-WEEK SPRINT <Rocket className="text-[#FF5500] w-4 h-4" />
              </span>
            ))}
          </motion.div>
        </div>

        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">Why Choose Launchlane</h2>
            <p className="mt-3 text-stone-600 text-sm">Engineering competitive advantages for ambitious founders.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: <Zap className="w-6 h-6 text-[#FF5500]" />, title: "Speed", desc: "Ship a polished startup site quickly with a focused process that removes bottlenecks and keeps momentum high." },
              { icon: <Palette className="w-6 h-6 text-[#FF5500]" />, title: "Custom Design", desc: "Every section is designed around your product story so your startup feels credible, distinct, and investor-ready." },
              { icon: <Search className="w-6 h-6 text-[#FF5500]" />, title: "SEO-Ready", desc: "Built with clean structure, fast loading, and clear messaging so customers and search engines find value fast." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-stone-200 bg-stone-50/50 p-8 shadow-sm hover:border-[#FF5500]/40 transition-colors"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white p-3.5 border border-stone-200 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                <p className="mt-3 text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24 border-t border-stone-200">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-14 text-center">Our Capabilities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Launch Websites", desc: "Conversion-ready websites crafted to help early-stage startups look credible and win trust from day one." },
              { title: "Brand Starter Kits", desc: "Practical visual foundations including typography, color, and tone so your team can communicate with confidence." },
              { title: "Website Copywriting", desc: "Clear, strategic messaging that explains your product fast and turns curious visitors into qualified conversations." },
              { title: "Growth Redesigns", desc: "Focused redesigns for startups that have outgrown their first site and need stronger performance." },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-stone-200 bg-stone-50/50 p-8 shadow-sm hover:border-stone-400 transition-colors"
              >
                <h3 className="text-xl font-extrabold text-black">{service.title}</h3>
                <p className="mt-3 text-stone-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-4xl px-6 py-24 border-t border-stone-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">From Idea to Online</h2>
            <p className="mt-3 text-stone-600 text-sm md:text-base">A four-step framework designed to remove uncertainty and move your startup forward.</p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl border border-stone-200 bg-stone-50 p-8 md:p-10 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-5 mb-5">
                  <span className="text-4xl font-black text-[#FF5500]">{step.step}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black">{step.title}</h3>
                </div>

                <p className="text-lg font-bold text-stone-800 mb-2">{step.intro}</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">{step.copy}</p>

                <ul className="space-y-3 mb-8">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-700 text-sm font-medium">
                      <div className="mt-0.5 rounded-full bg-[#FF5500]/10 p-1 text-[#FF5500]">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-1">You leave this step with:</p>
                  <p className="text-stone-800 font-medium text-sm leading-relaxed">{step.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-5xl px-6 py-24 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-black">Selected Work</h2>
              <p className="mt-1 text-stone-600 text-sm">Small teams. Big first impressions.</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleNextProject}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-2.5 text-xs font-bold text-black shadow-xs transition hover:border-[#FF5500] hover:text-[#FF5500]"
            >
              Next Project <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="relative w-full rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProjectIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-200 shadow-xs">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={projects[activeProjectIndex].images?.[activeImageIndex] || "/portfolio/placeholder.jpg"}
                          alt={`${projects[activeProjectIndex].title} preview ${activeImageIndex + 1}`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {projects[activeProjectIndex].images?.length > 1 && (
                    <div className="flex items-center gap-3 overflow-x-auto pb-1">
                      {projects[activeProjectIndex].images.map((imgSrc, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative aspect-video w-16 overflow-hidden rounded-lg border transition-all ${
                            activeImageIndex === idx 
                              ? "border-[#FF5500] ring-2 ring-[#FF5500]/30 scale-105" 
                              : "border-stone-300 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image 
                            src={imgSrc} 
                            alt={`Thumbnail ${idx + 1}`} 
                            fill 
                            className="object-cover object-top" 
                            sizes="64px"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <span className="inline-block rounded-full border border-[#FF5500]/30 bg-[#FF5500]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FF5500] mb-4">
                    {projects[activeProjectIndex].type}
                  </span>
                  <h3 className="text-2xl font-extrabold text-black mb-3">
                    {projects[activeProjectIndex].title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {projects[activeProjectIndex].desc}
                  </p>

                  <div className="text-xs font-semibold text-stone-500">
                    Image {activeImageIndex + 1} of {projects[activeProjectIndex].images?.length || 1}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-24 border-t border-stone-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">Frequently Asked Questions</h2>
            <p className="mt-3 text-stone-600 text-sm">Everything you need to know about working with Launchlane.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden transition-colors hover:border-stone-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-base font-bold text-black pr-4">{item.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-stone-500 shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-stone-200 text-stone-600 text-sm leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="relative rounded-[2.5rem] border border-stone-200 bg-stone-50 p-10 md:p-20 text-center shadow-sm overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-[#FF5500]/10 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="relative z-10 mx-auto max-w-2xl text-3xl sm:text-5xl font-black tracking-tight text-black mb-10">
              Your next chapter deserves a better homepage.
            </h2>

            <motion.button
              animate={{ 
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 4px 20px rgba(255,85,0,0.25)",
                  "0 8px 40px rgba(255,85,0,0.5)",
                  "0 4px 20px rgba(255,85,0,0.25)"
                ]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="relative z-10 rounded-full bg-[#FF5500] px-10 py-4 text-base font-normal text-white transition-colors hover:bg-[#FF6611]"
            >
              Start your launch
            </motion.button>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-black text-black">
            <LaunchlaneSymbol className="w-5 h-5" />
            <span>LAUNCH<span className="text-[#FF5500]">LANE</span></span>
          </Link>

          <address className="flex flex-col sm:flex-row gap-4 sm:gap-8 not-italic text-xs font-semibold text-stone-600">
            <a href="tel:+233558684733" className="hover:text-black transition-colors">+233 558684733</a>
            <a href="tel:+233205495018" className="hover:text-black transition-colors">+233 205495018</a>
            <a href="mailto:launchlane@gmail.com" className="hover:text-black transition-colors">launchlane@gmail.com</a>
          </address>
        </div>
      </footer>

      {/* --- INQUIRY MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-200 bg-white p-8 md:p-10 shadow-2xl z-10"
            >
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-stone-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <LaunchlaneSymbol className="w-8 h-8 mb-6" />

              {submissionComplete ? (
                <div className="py-10 text-center">
                  <h3 className="text-2xl font-bold text-black">Inquiry Received</h3>
                  <p className="mt-2 text-stone-600 text-sm">We’ll review your details and be in touch shortly.</p>
                  <button
                    onClick={closeModal}
                    className="mt-6 rounded-full border border-stone-200 bg-stone-100 px-6 py-2.5 text-xs font-bold text-black hover:bg-stone-200"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <h3 className="text-2xl font-extrabold tracking-tight text-black">Let's build together.</h3>

                  {formError && (
                    <div className="rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-200">
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
                      className="w-full border-0 border-b border-stone-200 bg-transparent py-2.5 px-0 text-sm text-black placeholder-stone-400 outline-none transition-colors focus:border-[#FF5500]"
                    />
                    <input
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name *"
                      className="w-full border-0 border-b border-stone-200 bg-transparent py-2.5 px-0 text-sm text-black placeholder-stone-400 outline-none transition-colors focus:border-[#FF5500]"
                    />
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address *"
                      className="w-full border-0 border-b border-stone-200 bg-transparent py-2.5 px-0 text-sm text-black placeholder-stone-400 outline-none transition-colors focus:border-[#FF5500]"
                    />

                    <div className="relative flex items-center border-b border-stone-200 focus-within:border-[#FF5500] transition-colors">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsCountryMenuOpen(!isCountryMenuOpen)}
                          className="flex items-center gap-1.5 py-2.5 pr-3 text-xs font-bold text-[#FF5500] outline-none"
                        >
                          <span>{selectedCountry.label} {selectedCountry.code}</span>
                        </button>

                        {isCountryMenuOpen && (
                          <div className="absolute left-0 top-full mt-2 w-44 rounded-xl border border-stone-200 bg-white p-2 shadow-xl z-20">
                            {countries.map((c) => (
                              <button
                                key={`${c.code}-${c.label}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsCountryMenuOpen(false);
                                }}
                                className="w-full text-left px-3 py-1.5 text-xs text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
                              >
                                <span className="font-bold text-[#FF5500]">{c.label}</span> <span className="text-[10px] text-stone-400">{c.code}</span>
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
                        className="flex-1 border-0 bg-transparent py-2.5 px-0 text-sm text-black placeholder-stone-400 outline-none"
                      />
                    </div>

                    <textarea
                      rows={2}
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Project details or goals..."
                      className="w-full border-0 border-b border-stone-200 bg-transparent py-2.5 px-0 text-sm text-black placeholder-stone-400 outline-none transition-colors focus:border-[#FF5500] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#FF5500] py-3.5 text-sm font-bold text-white shadow-[0_4px_25px_rgba(255,85,0,0.3)] transition-all hover:bg-[#FF6611] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Project Inquiry"}
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