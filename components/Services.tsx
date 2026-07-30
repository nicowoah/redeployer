'use client'

import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Builds',
    description:
      'Custom-built sites designed to convert, launched fast. No templates, no cookie-cutters. Just a site that works as hard as you do.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI Automation',
    description:
      'Automation systems that save time and capture more leads: follow-up sequences, booking flows, CRM sync, and internal workflows.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Continuous Support',
    description:
      'An ongoing monthly retainer for updates, improvements, and support after launch. No lock-in, month-to-month, cancel anytime.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 bg-surface relative">
      <div className="divider-subtle absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-subtle absolute bottom-0 left-0 right-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Services
          </p>
          <h2 id="services-heading" className="font-display font-bold text-display text-text-primary mb-4">
            What We Do
          </h2>
          <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-xl mx-auto">
            Three focused services that cover every layer of your digital presence,
            from launch to long-term growth.
          </p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {SERVICES.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariant}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="group relative p-7 rounded-2xl bg-white border border-[rgba(26,26,26,0.10)] shadow-card card-glow cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/12 group-hover:border-accent/25 transition-all duration-200"
                aria-hidden="true"
              >
                {svc.icon}
              </div>

              <h3 className="font-display font-semibold text-[1.05rem] text-text-primary mb-2.5">
                {svc.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
