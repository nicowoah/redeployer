'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const BOOKING_URL = 'https://calendly.com/sn-rivera/redeployer-discovery-call'

// Calendly renders into the container it finds on the page. Theming it through
// params keeps the booking step in our own palette instead of Calendly navy,
// and hides the event blurb the section above already states.
const EMBED_URL =
  `${BOOKING_URL}?primary_color=0075de&text_color=1a1a18&background_color=ffffff` +
  `&hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1`

type Status = 'loading' | 'ready' | 'failed'

export default function FinalCTA() {
  const [status, setStatus] = useState<Status>('loading')
  const containerRef = useRef<HTMLDivElement>(null)

  // The widget is the page's only conversion path, so treat "script never
  // resolved" as a real state rather than leaving a blank 700px hole. Blocked
  // by a tracker blocker, a corporate network, or a slow CDN all land here.
  useEffect(() => {
    if (status !== 'loading') return

    const poll = window.setInterval(() => {
      if (containerRef.current?.querySelector('iframe')) {
        setStatus('ready')
      }
    }, 250)

    const timeout = window.setTimeout(() => {
      if (!containerRef.current?.querySelector('iframe')) setStatus('failed')
    }, 8000)

    return () => {
      window.clearInterval(poll)
      window.clearTimeout(timeout)
    }
  }, [status])

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-24 md:py-28 bg-surface relative border-t border-hairline-soft"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2
          id="contact-heading"
          className="font-display font-semibold text-hero text-text-primary mb-6"
        >
          Ready to move <span className="text-highlight">faster?</span>
        </h2>

        <p
          className="font-sans text-lg text-text-secondary max-w-xl mx-auto mb-6 leading-[1.6]"
        >
          Book a free 30-minute call. No pitch deck, no pressure. Just an honest
          conversation about what your business needs.
        </p>

        {/* Reassurance sits above the widget: below it, it is only read after
            the visitor has already booked or left. */}
        <div className="mb-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-sans text-sm text-text-muted">
          <span>$0 setup fee</span>
          <span className="h-3 w-px bg-hairline" aria-hidden="true" />
          <span>Month-to-month, cancel anytime</span>
        </div>

        <div id="book" className="scroll-mt-20 w-full text-left">
          {status === 'failed' ? (
            /* Booking still has to be possible when the embed cannot load. */
            <div className="mx-auto max-w-md rounded-xl border border-hairline bg-white p-8 text-center shadow-card">
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                The booking calendar didn&rsquo;t load
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                A privacy extension or network filter is usually the cause. Opening
                the calendar in a new tab gets around it.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 font-sans text-base font-medium text-white transition-colors duration-150 hover:bg-accent-ink"
              >
                Open the calendar
              </a>
            </div>
          ) : (
            <div className="relative w-full overflow-hidden rounded-xl border border-hairline bg-white">
              {status === 'loading' && (
                <div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white"
                  role="status"
                  aria-live="polite"
                >
                  <span
                    className="h-6 w-6 animate-spin rounded-full border-2 border-hairline border-t-accent"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-sm text-text-muted">
                    Loading the booking calendar&hellip;
                  </span>
                </div>
              )}
              <div
                ref={containerRef}
                className="calendly-inline-widget w-full"
                data-url={EMBED_URL}
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          )}
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onError={() => setStatus('failed')}
      />
    </section>
  )
}
