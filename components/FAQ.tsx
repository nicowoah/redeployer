'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'How can there be no setup fee?',
    a: "Because we make our money on the monthly, not on a big invoice upfront. That only works if you stick around, which means we're motivated to keep your site and your booking system actually earning. The build cost is spread across the plan instead of landing on you before you've seen a single new client.",
  },
  {
    q: "What's the difference between the two plans?",
    a: "Redeployer Starter ($149/mo) is the storefront: a custom site up to 5 pages, hosting, SSL, uptime monitoring, Google Business Profile setup, and a basic booking request form where clients ask for a time and you confirm it manually. The Redeployer System ($299/mo) runs your front desk on top of that: full ongoing local SEO, booking synced straight to your calendar, missed-call text-back, automated SMS and email reminders, review requests after sessions, and an instant response to every new inquiry.",
  },
  {
    q: 'Is there a guarantee?',
    a: "The Redeployer System comes with a 30-day setup guarantee: if you're not happy with how your site and system are built in the first 30 days, we'll refund you in full. Beyond that, there's nothing to guarantee against, because there's no setup fee and no contract. If it stops being worth $299 a month, you cancel.",
  },
  {
    q: 'What is missed-call text-back?',
    a: "When you're with a client and can't pick up, the caller automatically gets a text within seconds: a friendly note that you'll be right with them, plus a booking link. Most people who reach voicemail just call the next business on the list. This is the single cheapest way to stop losing them.",
  },
  {
    q: 'What does "inquiries answered instantly" actually mean?',
    a: "Every form fill, message, and missed call gets an immediate response, day or night, with a link to book. You are not sitting down to write replies. Speed is most of the battle here: the business that answers first usually gets the job.",
  },
  {
    q: 'How long until my site is live?',
    a: 'Most sites go live within a few days of the discovery call, depending on how quickly we can get your content, photos, and Google Business Profile access. You review the site before it ships, and nothing goes live until you sign off.',
  },
  {
    q: 'Am I locked into a contract?',
    a: "No. Both plans are month-to-month and you can cancel anytime. There's no setup fee to recoup and no minimum term, so if the site and the system aren't pulling their weight, you're free to walk.",
  },
  {
    q: 'Can I start on Starter and upgrade later?',
    a: "Yes, and plenty of people do. Start at $149/mo, get the site live, then move up to the full system any month. There's no new setup fee and no rebuild. We just switch the front-desk layer on.",
  },
  {
    q: 'What if I already have a website?',
    a: "It depends which plan you're on. On Starter we rebuild it for you, included at no extra cost. On the System we can leave your current site in place and add our tools to it instead, so your booking, reminders, missed-call text-back, and review requests all run on the site you already have. Bring it to the call and we'll tell you honestly which is the better move.",
  },
  {
    q: 'How do I get started?',
    a: "Book a free 30-minute call using the button on this page. We'll talk through your goals and send you a written scope within 24 hours. No pressure, no pitch deck. Just an honest conversation.",
  },
]

function FAQItem({ question, answer, id }: { question: string; answer: string; id: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[rgba(0,0,0,0.08)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-8 group"
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        id={`faq-trigger-${id}`}
      >
        <span className="font-display font-medium text-base md:text-[1.05rem] text-text-primary group-hover:text-accent-ink transition-colors duration-200">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            open
              ? 'border-accent bg-accent text-white'
              : 'border-[rgba(0,0,0,0.12)] text-text-muted'
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
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-trigger-${id}`}
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
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 py-20 bg-surface relative">
      <div className="divider-subtle absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-subtle absolute bottom-0 left-0 right-0" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="font-display font-semibold text-display text-text-primary">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-xl bg-white border border-[rgba(0,0,0,0.10)] shadow-card px-8"
        >
          {FAQS.map(({ q, a }, i) => (
            <FAQItem key={q} question={q} answer={a} id={String(i)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
