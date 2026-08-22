'use client'

import { motion } from 'framer-motion'

const PILLARS = [
  {
    label: 'Mission',
    text: 'Make enterprise-grade digital infrastructure accessible to every business, without the agency markup.',
  },
  {
    label: 'Approach',
    text: 'Transparent pricing, fast execution, long-term relationships. We start where you need us most and grow with you.',
  },
  {
    label: 'Values',
    text: 'Honesty, speed, and outcomes over promises. No bloated timelines, no vague deliverables, no lock-in.',
  },
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 py-20 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 id="about-heading" className="font-display font-semibold text-display text-text-primary">
            Built for businesses that are ready to grow.
          </h2>
        </motion.div>

        {/* Two-column: body copy + pillars card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="space-y-4 font-sans text-text-secondary leading-[1.75] text-[1.05rem]"
          >
            <p>
              Redeployer was founded on a simple belief: businesses deserve the same quality
              of digital infrastructure that enterprise companies take for granted, without the
              agency markup, bloated timelines, or vague deliverables.
            </p>
            <p>
              We start where you need us most: a website that actually converts. Then we layer in
              AI automation and Continuous Support to compound your growth over time. Real systems, real results.
            </p>
          </motion.div>

          {/* Pillars card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          >
            <div className="p-8 rounded-xl bg-white border border-[rgba(0,0,0,0.10)] shadow-card">
              <div className="divide-y divide-[rgba(0,0,0,0.08)]">
                {PILLARS.map((pillar, i) => (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                    className="flex gap-5 py-6 first:pt-0 last:pb-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-sans text-[13px] font-semibold text-accent-ink block mb-1.5">
                        {pillar.label}
                      </span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
