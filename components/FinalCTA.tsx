'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Soft decorative blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.08)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-6"
        >
          Get Started
        </motion.p>

        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="font-display font-extrabold text-hero text-text-primary mb-7 leading-none"
        >
          Ready to move
          <br />
          <span className="text-gradient">faster?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-sans text-xl text-text-secondary max-w-lg mx-auto mb-10 leading-[1.7]"
        >
          Book a free 30-minute call. No pitch deck, no pressure. Just an honest
          conversation about what your business needs.
        </motion.p>

        {/* Calendly inline widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="w-full"
        >
          <div
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
            data-url="https://calendly.com/sn-rivera/redeployer-discovery-call"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        {/* Money-back trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-sans text-sm text-text-muted mt-8"
        >
          30-day money-back guarantee if you're not satisfied.
        </motion.p>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  )
}
