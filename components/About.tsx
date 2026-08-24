
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

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 py-20 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — centered */}
        <div
          className="text-center mb-14"
        >
          <h2 id="about-heading" className="font-display font-semibold text-display text-text-primary">
            Built for businesses that are ready to grow.
          </h2>
        </div>

        {/* Two-column: body copy + pillars card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className="max-w-[65ch] space-y-4 font-sans text-lg text-text-secondary leading-[1.75]"
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
          </div>

          {/* Pillars card */}
          <div
          >
            <div className="p-8 rounded-xl bg-white border border-hairline shadow-card">
              <div className="divide-y divide-hairline-soft">
                {PILLARS.map((pillar, i) => (
                  <div
                    key={pillar.label}
                    className="flex gap-5 py-6 first:pt-0 last:pb-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-sans text-xs font-semibold text-accent-ink block mb-1.5">
                        {pillar.label}
                      </span>
                      <p className="max-w-[62ch] font-sans text-sm text-text-secondary leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
