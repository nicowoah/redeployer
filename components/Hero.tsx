'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-bg"
    >
      {/* Decorative accent blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.07)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-[380px] h-[380px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-accent/40" aria-hidden="true" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
            Digital Agency
          </span>
          <span className="h-px w-10 bg-accent/40" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-hero text-text-primary mb-6">
          We build the systems
          <br />
          <span className="text-gradient">your business</span>
          <br />
          runs on.
        </h1>

        {/* Subhead */}
        <p className="font-sans text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-[1.7]">
          Websites, AI automation, and continuous support for businesses
          that want to move faster. Every project is scoped and priced around
          what you actually need.
        </p>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-white font-sans font-semibold text-base shadow-btn-accent btn-glow transition-colors duration-200 hover:bg-blue-600"
        >
          Book a Discovery Call
          <svg
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>

      </div>
    </section>
  )
}
