'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PLANS = [
  {
    name: 'Small Business',
    tagline: 'Everything you need to launch, automate, and grow, built around your goals.',
    features: [
      'Custom website design and build',
      'AI automation setup and workflows',
      'Continuous Support: no lock-in, month-to-month',
      '30-day money-back guarantee if you\'re not satisfied',
    ],
    cta: 'Book a Discovery Call',
  },
  {
    name: 'Enterprise',
    tagline: 'Custom builds, advanced integrations, and dedicated support at scale.',
    features: [
      'Custom web platform or multi-site build',
      'Advanced AI workflow integrations',
      'Dedicated ongoing support and optimization',
      '30-day money-back guarantee if you\'re not satisfied',
    ],
    cta: 'Talk to Us',
  },
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function CheckIcon() {
  return (
    <div
      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-accent/10"
      aria-hidden="true"
    >
      <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function Pricing() {
  const [active, setActive] = useState(0)
  const plan = PLANS[active]

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20 bg-surface relative">
      <div className="divider-subtle absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-subtle absolute bottom-0 left-0 right-0" aria-hidden="true" />

      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Pricing
          </p>
          <h2 id="pricing-heading" className="font-display font-bold text-display text-text-primary mb-4">
            Find Your Fit
          </h2>
          <p className="font-sans text-text-secondary text-lg max-w-md mx-auto">
            Whether you're just getting started or ready to scale, we have a path for you.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="relative inline-flex bg-white border border-[rgba(26,26,26,0.10)] rounded-xl p-1 shadow-card">
            {PLANS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className="relative z-10 px-6 py-2.5 rounded-lg font-sans text-sm font-medium transition-colors duration-200"
                style={{ color: active === i ? '#fff' : undefined }}
              >
                {active !== i && (
                  <span className="text-text-secondary">{p.name}</span>
                )}
                {active === i && (
                  <span>{p.name}</span>
                )}
                {active === i && (
                  <motion.span
                    layoutId="pricing-tab"
                    className="absolute inset-0 rounded-lg bg-accent"
                    style={{ zIndex: -1 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Single animated card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative rounded-2xl p-10 bg-white border border-[rgba(26,26,26,0.10)] shadow-card"
          >
            {/* Plan header */}
            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
                {plan.name}
              </h3>
              <p className="font-sans leading-relaxed text-text-secondary">
                {plan.tagline}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px mb-7 bg-gray-100" />

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-sans text-sm leading-snug text-text-secondary">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-accent text-white font-sans font-semibold text-sm shadow-btn-accent btn-glow transition-colors duration-200 hover:bg-blue-600"
            >
              {plan.cta}
            </motion.a>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-6 text-center font-sans text-sm text-text-muted"
        >
          All projects include a discovery call, written scope, and revision rounds.
        </motion.p>
      </div>
    </section>
  )
}
