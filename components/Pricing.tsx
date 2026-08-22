'use client'

import { motion } from 'framer-motion'

const PLANS = [
  {
    name: 'Redeployer Starter',
    subline: 'Website + Google Business',
    price: '$149',
    meta: '$0 setup fee · cancel anytime',
    features: [
      'Custom-designed site, up to 5 pages',
      'Hosting, SSL & uptime monitoring',
      'Google Business Profile setup',
      'Basic booking request form',
      'Mobile-optimized, fast load times',
    ],
    cta: 'Book a call about Starter',
    featured: false,
  },
  {
    name: 'Redeployer System',
    subline: 'The full end-to-end system for running your front desk',
    price: '$299',
    meta: '$0 setup fee · cancel anytime',
    features: [
      'Everything in Starter, including full local SEO (ongoing optimization, not just setup)',
      'Online booking synced to your calendar',
      "Missed-call text-back, so no inquiry goes cold while you're in session",
      'Automated appointment reminders (SMS + email) to cut no-shows',
      'Review requests sent automatically after sessions',
      'New inquiries get an instant response, before they call the next name on their list',
    ],
    guarantee:
      "If you're not happy with how your site and system are built in the first 30 days, we'll refund you in full.",
    cta: 'Book a call about the System',
    featured: true,
  },
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
        dark ? 'bg-white/[0.12]' : 'bg-accent-tint'
      }`}
      aria-hidden="true"
    >
      <svg
        className={`w-2.5 h-2.5 ${dark ? 'text-white' : 'text-accent-ink'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="scroll-mt-20 py-20 bg-surface relative">
      <div className="divider-subtle absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-subtle absolute bottom-0 left-0 right-0" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 id="pricing-heading" className="font-display font-semibold text-display text-text-primary mb-4">
            Two Ways to Start
          </h2>
          <p className="font-sans text-text-secondary text-lg max-w-lg mx-auto">
            No setup fee either way. One flat monthly price, month-to-month,
            cancel anytime.
          </p>
        </motion.div>

        {/* Plan cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          {PLANS.map((plan) => {
            const dark = plan.featured
            return (
              <motion.div
                key={plan.name}
                variants={cardVariant}
                className={`relative flex flex-col rounded-xl p-8 sm:p-10 ${
                  dark
                    ? 'bg-text-primary order-first md:order-none'
                    : 'bg-white border border-[rgba(0,0,0,0.10)] shadow-card'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 font-sans text-[13px] font-medium text-white">
                    Most Popular
                  </span>
                )}

                {/* Plan header */}
                <div className="mb-7">
                  <h3
                    className={`font-display font-bold text-2xl mb-2 ${
                      dark ? 'text-white' : 'text-text-primary'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-sans leading-relaxed ${
                      dark ? 'text-white/70' : 'text-text-secondary'
                    }`}
                  >
                    {plan.subline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-7">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`font-display font-semibold text-[2.75rem] leading-none tracking-[-0.03em] ${
                        dark ? 'text-white' : 'text-text-primary'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className={`font-sans text-lg ${dark ? 'text-white/[0.55]' : 'text-text-muted'}`}>
                      /mo
                    </span>
                  </div>
                  <p className={`font-sans text-sm mt-2 ${dark ? 'text-white/[0.55]' : 'text-text-muted'}`}>
                    {plan.meta}
                  </p>
                </div>

                {/* Divider */}
                <div className={`h-px mb-7 ${dark ? 'bg-white/[0.12]' : 'bg-surface'}`} />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckIcon dark={dark} />
                      <span
                        className={`font-sans text-sm leading-snug ${
                          dark ? 'text-white/[0.85]' : 'text-text-secondary'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Setup guarantee — System only */}
                {plan.guarantee && (
                  <div className="mt-7 flex items-start gap-3 border-t border-white/[0.12] pt-6">
                    <svg
                      className="mt-0.5 w-4 h-4 flex-shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div>
                      <span className="block font-sans text-[13px] font-semibold text-white mb-1">
                        30-day setup guarantee
                      </span>
                      <span className="block font-sans text-xs leading-relaxed text-white/70">
                        {plan.guarantee}
                      </span>
                    </div>
                  </div>
                )}

                {/* CTA — pinned to the bottom so both cards align */}
                <div className="mt-auto pt-10">
                  <motion.a
                    href="#book"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-sans font-semibold text-sm transition-colors duration-200 ${
                      dark
                        ? 'bg-accent text-white hover:bg-accent-ink'
                        : 'bg-white text-text-primary border border-[rgba(0,0,0,0.16)] hover:border-[rgba(0,0,0,0.28)] hover:text-text-primary'
                    }`}
                  >
                    {plan.cta}
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
