'use client'

import { motion } from 'framer-motion'
import { EASE } from './MotionProvider'

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex items-center overflow-hidden bg-bg pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="font-display font-semibold text-hero text-text-primary mb-6"
        >
          We build the systems{' '}
          <span className="text-highlight">your business</span> runs on.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
          className="font-sans text-lg text-text-secondary max-w-xl mx-auto mb-9 leading-[1.6]"
        >
          Websites, AI automation, and continuous support for businesses
          that want to move faster. Simple monthly pricing, no lock-in.
        </motion.p>

        {/* CTAs — filled primary, tinted secondary, both flat */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#book"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 font-sans text-base font-medium text-white transition-colors duration-150 hover:bg-accent-ink"
          >
            Book a discovery call
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-accent-tint px-5 py-3 font-sans text-base font-medium text-accent-ink transition-colors duration-150 hover:bg-[#d5eafd]"
          >
            See pricing
          </a>
        </motion.div>
      </div>
    </section>
  )
}
