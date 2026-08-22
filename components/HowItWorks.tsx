'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Book a Discovery Call',
    description:
      "Schedule a free 30-minute strategy session. We'll learn your business, goals, and what's holding you back. No pitch, no pressure.",
  },
  {
    num: '02',
    title: 'We Build',
    description:
      'Our team gets to work fast. Most sites go live within a few days; larger builds ship based on your agreed scope and timeline. You always know where things stand.',
  },
  {
    num: '03',
    title: 'Launch and Grow',
    description:
      "We go live, then keep improving. Every project includes post-launch support, and our Continuous Support retainer keeps things running smoothly long-term.",
  },
]

export default function HowItWorks() {
  return (
    <section id="process" aria-labelledby="process-heading" className="scroll-mt-20 py-20 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 id="process-heading" className="font-display font-semibold text-display text-text-primary">
            How It Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[2.2rem] left-[16.67%] right-[16.67%] h-px bg-[rgba(0,0,0,0.10)]" aria-hidden="true" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex flex-col items-center text-center"
            >
              {/* Number badge */}
              <div
                className="w-[4.5rem] h-[4.5rem] rounded-xl bg-white border border-[rgba(0,0,0,0.10)] shadow-card flex items-center justify-center mb-8 relative z-10"
                aria-hidden="true"
              >
                <span className="font-display font-semibold text-accent-ink text-xl">{step.num}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
