"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const features = [
  {
    title: "Speed",
    description:
      "Ship a polished startup site quickly with a focused process that removes bottlenecks and keeps momentum high.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m1 5v4.38l3.21 1.85-.75 1.3-3.96-2.28V7Z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Design",
    description:
      "Every section is designed around your product story so your startup feels credible, distinct, and investor-ready.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M19 3H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 9H7V9h4Zm6-3h-4V6h4Zm0 3h-4v-3h4Z"
        />
      </svg>
    ),
  },
  {
    title: "SEO-Ready",
    description:
      "Built with clean structure, fast loading, and clear messaging so customers and search engines find value fast.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M10 18a8 8 0 1 1 5.29-14l-1.32 1.5A6 6 0 1 0 16 10h2a8 8 0 0 1-8 8m8.71-13.29-4 4-1.42-1.42 4-4Z"
        />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Launch Websites",
    description:
      "Conversion-ready websites crafted to help early-stage startups look credible and win trust from day one.",
  },
  {
    title: "Brand Starter Kits",
    description:
      "Practical visual foundations including typography, color, and tone so your team can communicate with confidence.",
  },
  {
    title: "Website Copywriting",
    description:
      "Clear, strategic messaging that explains your product fast and turns curious visitors into qualified conversations.",
  },
  {
    title: "Growth Redesigns",
    description:
      "Focused redesigns for startups that have outgrown their first site and need stronger performance for the next stage.",
  },
];

const processSteps = [
  {
    title: "Discover",
    intro: "We start with what you’re building.",
    copy: "Before we design anything, we learn how your startup works, who it serves, and what you need the website to accomplish.",
    bullets: [
      "What your product does and who your ideal customer is",
      "What makes your startup different",
      "What visitors need to understand first",
      "The primary action you want users to take",
    ],
    deliverable:
      "A clear project direction, audience profile, website goals, and an agreed scope.",
  },
  {
    title: "Define",
    intro: "We turn your ideas into a sharper story.",
    copy: "We organize your positioning into a clear structure so visitors understand your value quickly and know exactly where to go next.",
    bullets: [
      "Core messaging and website positioning",
      "Hero headline and call-to-action direction",
      "Page structure and navigation plan",
      "Content priorities that build trust",
    ],
    deliverable:
      "A focused website strategy and content plan built around your customers, not jargon.",
  },
  {
    title: "Design",
    intro: "We make your first impression count.",
    copy: "Every section is designed to make your startup feel credible, memorable, and launch-ready across mobile and desktop.",
    bullets: [
      "Custom visual direction and conversion-focused layouts",
      "Branded colors, typography, and interface components",
      "Responsive page design for all key breakpoints",
      "Collaborative milestone reviews before final sign-off",
    ],
    deliverable:
      "A complete, presentation-ready website design that feels uniquely yours.",
  },
  {
    title: "Launch",
    intro: "We turn the design into a real website.",
    copy: "After approval, we build, test, polish, and publish your site so you can launch with confidence and focus on growth.",
    bullets: [
      "Performance, mobile responsiveness, and browser testing",
      "Form and interaction checks",
      "Foundational SEO and analytics setup",
      "Final QA of copy, visuals, and links",
    ],
    deliverable:
      "A live, fast, professional website ready to support your next milestone.",
  },
];

const projects = [
  {
    title: "Orbitly",
    type: "Collaboration software for remote teams",
    summary:
      "Reframed a dense product into a clear homepage that improved feature discoverability and demo signups.",
  },
  {
    title: "Morrow",
    type: "Personalized financial planning",
    summary:
      "Built a trust-first experience with strong storytelling and conversion-focused guidance for new users.",
  },
  {
    title: "Clayhouse",
    type: "Marketplace for independent makers",
    summary:
      "Designed a flexible catalog layout that made products feel premium while simplifying the path to purchase.",
  },
  {
    title: "Relay",
    type: "Operations platform for repetitive workflows",
    summary:
      "Created a bold B2B narrative with clear use-case framing, helping teams quickly understand platform value.",
  },
];

const buttonPrimaryClass =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(76,29,149,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(76,29,149,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 motion-reduce:transform-none motion-reduce:transition-none";

const buttonSecondaryClass =
  "inline-flex items-center justify-center rounded-full border border-black/20 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 motion-reduce:transform-none motion-reduce:transition-none";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const modalRef = useRef(null);
  const firstFieldRef = useRef(null);
  const previousFocusRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    firstFieldRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const focusable = Array.from(focusableElements).filter(
        (element) => !element.hasAttribute("disabled")
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [isModalOpen]);

  const openModal = () => {
    setSubmissionComplete(false);
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmissionComplete(true);
    form.reset();
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only left-4 top-4 rounded-full bg-violet-600 px-3 py-2 text-sm font-semibold text-white focus:not-sr-only focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_45%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.12),_transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#f6f6f4]/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center gap-3 py-4" aria-label="Primary">
          <a href="#top" id="top" className="inline-flex items-center gap-2 text-xl font-bold" aria-label="Launchlane home">
            <span className="inline-block h-4 w-4 rounded-full bg-gradient-to-br from-violet-600 to-blue-500" aria-hidden="true" />
            <span>
              <span>Launch</span>
              <span className="text-violet-600">lane</span>
            </span>
          </a>

          <button
            type="button"
            className="ml-auto inline-flex items-center rounded-lg border border-black/15 bg-white/80 px-3 py-2 text-sm font-semibold md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
          >
            Menu
          </button>

          <div
            id="primary-menu"
            className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col gap-3 rounded-xl border border-black/10 bg-white/90 p-4 md:ml-auto md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className={`${buttonPrimaryClass} px-4 py-2`} onClick={openModal}>
              Start your launch
            </button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="mx-auto grid w-[min(1120px,92vw)] items-center gap-10 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Websites for startups ready to move</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
              Launch faster with a
              <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-blue-500 bg-clip-text text-transparent"> website built to convert</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-zinc-600">
              Launchlane designs and builds high-impact startup websites that help founders earn trust quickly and turn traffic into real conversations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className={buttonPrimaryClass} onClick={openModal}>
                Start your launch
              </button>
              <a className={buttonSecondaryClass} href="#portfolio">
                See our work
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur" aria-label="Launchlane preview">
            <p className="text-sm font-semibold text-violet-600">Launch-ready in days</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">Clear positioning. Sharp design. Faster momentum.</h2>
            <p className="mt-4 text-zinc-600">
              Strategy, design, and development in one focused sprint so your startup looks credible for customers, investors, and partners.
            </p>
            <button className="mt-6 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100" onClick={openModal}>
              Start your launch →
            </button>
          </aside>
        </section>

        <section id="features" className="mx-auto w-[min(1120px,92vw)] py-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">What makes Launchlane different</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_15px_35px_rgba(79,70,229,0.15)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="inline-flex rounded-xl border border-violet-200 bg-violet-50 p-2 text-violet-700">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-950">{feature.title}</h3>
                <p className="mt-2 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[min(1120px,92vw)] py-20" id="services" aria-labelledby="services-title">
          <h2 id="services-title" className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Websites designed for your next milestone.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{service.title}</h3>
                <p className="mt-2 text-zinc-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-200/80 bg-gradient-to-b from-white to-violet-50/40 py-20" id="process" aria-labelledby="process-title">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <h2 id="process-title" className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              From idea to online in four steps
            </h2>
            <p className="mt-3 max-w-3xl text-zinc-600">
              A clear, collaborative process designed to remove uncertainty and move your startup from rough concept to polished launch.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-zinc-200/80 bg-white p-6">
                  <p className="text-sm font-semibold text-violet-600">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">{step.title}</h3>
                  <p className="mt-2 font-semibold text-zinc-800">{step.intro}</p>
                  <p className="mt-2 text-zinc-600">{step.copy}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-600">
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-zinc-200 pt-3 text-zinc-700">
                    <strong>You leave this step with:</strong> {step.deliverable}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-[min(1120px,92vw)] py-20" id="portfolio" aria-labelledby="portfolio-title">
          <h2 id="portfolio-title" className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Small teams. Big first impressions.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-zinc-200/80 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">{project.title}</h3>
                <p className="mt-2 text-zinc-600">{project.summary}</p>
                <a href="#contact" className="mt-3 inline-block font-semibold text-zinc-900 underline decoration-violet-300 underline-offset-4">
                  View project story
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[min(1120px,92vw)] pb-20" aria-labelledby="cta-title">
          <div className="rounded-3xl border border-zinc-200/80 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
            <h2 id="cta-title" className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Your next chapter deserves a better homepage.
            </h2>
            <button className={`${buttonPrimaryClass} mt-6`} onClick={openModal}>
              Start your launch
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white" id="contact">
        <div className="mx-auto flex w-[min(1120px,92vw)] flex-col justify-between gap-4 py-10 md:flex-row">
          <div>
            <a href="#top" className="text-lg font-bold" aria-label="Launchlane home">
              <span>Launch</span>
              <span className="text-violet-600">lane</span>
            </a>
            <p className="mt-2 text-zinc-600">Websites for startups ready to move.</p>
          </div>
          <address className="grid gap-1 not-italic text-zinc-700">
            <a href="tel:+233558684733" className="underline underline-offset-4">
              +233 558684733
            </a>
            <a href="tel:+233205495018" className="underline underline-offset-4">
              +233 205495018
            </a>
            <a href="mailto:launchlane@gmail.com" className="underline underline-offset-4">
              launchlane@gmail.com
            </a>
          </address>
        </div>
      </footer>

      <div
        className={`fixed inset-0 z-[60] grid place-items-center bg-[#0b0d16]/55 px-4 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${isModalOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closeModal();
          }
        }}
        aria-hidden={!isModalOpen}
      >
        <section
          className={`relative w-full max-w-2xl overflow-auto rounded-3xl border border-white/30 bg-white p-6 shadow-2xl transition duration-300 motion-reduce:transition-none ${isModalOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-title"
          aria-describedby="inquiry-description"
          ref={modalRef}
        >
          <button
            className="absolute right-4 top-4 h-9 w-9 rounded-full border border-zinc-200 bg-zinc-50 text-lg transition hover:bg-zinc-100"
            onClick={closeModal}
            aria-label="Close form"
            type="button"
          >
            ×
          </button>

          {submissionComplete ? (
            <div className="pt-4" role="status" aria-live="polite">
              <h2 id="inquiry-title" className="text-3xl font-semibold tracking-tight text-zinc-950">
                Thanks for reaching out.
              </h2>
              <p id="inquiry-description" className="mt-3 text-zinc-600">
                We&apos;ve received your project details and will contact you soon.
              </p>
              <button className={`${buttonPrimaryClass} mt-6`} onClick={closeModal}>
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 id="inquiry-title" className="text-3xl font-semibold tracking-tight text-zinc-950">
                Let&apos;s get your startup moving.
              </h2>
              <p id="inquiry-description" className="mt-3 text-zinc-600">
                Tell us a little about your company, and we&apos;ll help you pick the best next step.
              </p>

              <form className="mt-6 grid gap-3" onSubmit={handleSubmit} noValidate>
                <label htmlFor="companyName" className="text-sm font-medium text-zinc-800">
                  Company name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  required
                  ref={firstFieldRef}
                  className="rounded-xl border border-zinc-300 px-3 py-2.5 text-zinc-900 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                />

                <label htmlFor="personName" className="text-sm font-medium text-zinc-800">
                  Your name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="personName"
                  name="personName"
                  required
                  className="rounded-xl border border-zinc-300 px-3 py-2.5 text-zinc-900 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                />

                <label htmlFor="email" className="text-sm font-medium text-zinc-800">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-zinc-300 px-3 py-2.5 text-zinc-900 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                />

                <label htmlFor="phone" className="text-sm font-medium text-zinc-800">
                  Phone number <span aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="rounded-xl border border-zinc-300 px-3 py-2.5 text-zinc-900 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                />

                <label htmlFor="comments" className="text-sm font-medium text-zinc-800">
                  Additional information or comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="rounded-xl border border-zinc-300 px-3 py-2.5 text-zinc-900 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                />

                <button className={`${buttonPrimaryClass} mt-2`} type="submit">
                  Send project details
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </>
  );
}
