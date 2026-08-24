
const SERVICES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Builds',
    plans: 'In both plans',
    description:
      'A custom site designed around your business and built to convert. Clean, fast, and live in days rather than months.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI Automation',
    plans: 'System only',
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
    plans: 'In both plans',
    description:
      'An ongoing monthly retainer for updates, improvements, and support after launch. No lock-in, month-to-month, cancel anytime.',
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 py-20 bg-surface relative">
      <div className="divider-subtle absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="divider-subtle absolute bottom-0 left-0 right-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16 text-center"
        >
          <h2 id="services-heading" className="font-display font-semibold text-display text-text-primary mb-4">
            What We Do
          </h2>
          <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-xl mx-auto">
            Three focused services that cover every layer of your digital presence,
            from launch to long-term growth.
          </p>
        </div>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group relative p-7 rounded-xl bg-white border border-hairline shadow-card"
            >
              <div
                className="w-11 h-11 rounded-lg bg-accent-tint flex items-center justify-center text-accent-ink mb-5 transition-colors duration-150"
                aria-hidden="true"
              >
                {svc.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-text-primary mb-2.5">
                {svc.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {svc.description}
              </p>

              <span className="mt-5 inline-flex items-center rounded-full border border-hairline bg-surface px-2.5 py-1 font-sans text-xs font-medium text-text-secondary">
                {svc.plans}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
