'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: "What's included in a website build?",
    a: "Every build includes custom design (no templates), full development, mobile-responsive layout, basic on-page SEO, and contact form integration. You own the codebase outright. We handle hosting setup and domain connection as part of the process, and hosting is included with our Continuous Support plans.",
  },
  {
    q: 'How long does a project take?',
    a: 'Most small projects launch in as little as 2-3 days. Larger builds with custom AI automation may take 2-3 weeks depending on scope. We give you a clear timeline estimate upfront, and we stick to it.',
  },
  {
    q: 'What is Continuous Support?',
    a: 'Continuous Support is our monthly retainer for ongoing updates, improvements, and priority help after your project launches. We offer multiple tiers depending on how much support you need. All tiers are no lock-in and month-to-month, so you can cancel anytime. It is the easiest way to keep your site and systems running smoothly without hiring in-house.',
  },
  {
    q: "What's the AI automation service?",
    a: "We build custom automation workflows tailored to your business: automatic lead follow-up emails, appointment booking, CRM integrations, and internal ops tools. Everything is built around what you actually need.",
  },
  {
    q: 'What is the money-back guarantee?',
    a: "If you're not satisfied with the result within the first 30 days, we'll make it right. If we can't, you get your money back. We stand behind our work and want every client to feel confident working with us.",
  },
  {
    q: 'Are there any long-term contracts?',
    a: "No. We offer retainers for Continuous Support with no hard lock-ins. It's month-to-month, and you can cancel anytime. Project work is scoped and priced upfront with no hidden commitments.",
  },
  {
    q: 'How do I get started?',
    a: "Book a free 30-minute call using the button on this page. We'll talk through your goals and put together a scope and quote within 24 hours. No pressure, no pitch deck. Just an honest conversation.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-8 group"
        aria-expanded={open}
      >
        <span className="font-display font-medium text-base md:text-[1.05rem] text-text-primary group-hover:text-accent transition-colors duration-200">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            open
              ? 'border-accent bg-accent text-white'
              : 'border-gray-200 text-text-muted'
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-text-secondary text-[0.96rem] leading-[1.75] pb-6 pr-14">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 bg-surface relative">
      <div className="divider-subtle absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-subtle absolute bottom-0 left-0 right-0" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            FAQ
          </p>
          <h2 id="faq-heading" className="font-display font-bold text-display text-text-primary">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl bg-white border border-[rgba(26,26,26,0.10)] shadow-card px-8"
        >
          {FAQS.map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
