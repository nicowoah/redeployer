'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    // Browsers restore scroll position on refresh, and an anchor link lands
    // mid-page, so sync once on mount — the listener alone would leave the bar
    // transparent over content until the next scroll event.
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the mobile menu and returns focus to the toggle
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/[0.92] supports-[not(backdrop-filter:blur(0px))]:bg-white backdrop-blur-xl border-b border-hairline-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center transition-colors duration-150 group-hover:bg-accent-ink">
              <div className="w-2.5 h-2.5 rounded-sm bg-white" />
            </div>
            <span className="font-display font-bold text-lg text-text-primary tracking-tight">
              Redeployer
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#book"
              aria-label="Book a discovery call"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-3 font-sans text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-ink md:px-4 md:py-2"
            >
              {/* Two labels for width; the anchor's aria-label is the single
                  accessible name so neither is announced twice. */}
              <span className="md:hidden" aria-hidden="true">Book a call</span>
              <span className="hidden md:inline" aria-hidden="true">Book a discovery call</span>
            </a>

            <button
              ref={toggleRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-11 h-11 -mr-2 gap-0 rounded-lg hover:bg-surface transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span
                  className={`block h-px w-full bg-text-secondary origin-center transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                  }`}
                />
                <span
                  className={`block h-px w-full bg-text-secondary transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-px w-full bg-text-secondary origin-center transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            id="mobile-menu"
            className="fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-hairline-soft shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 pt-4 pb-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-text-secondary hover:text-text-primary text-base py-3 border-b border-hairline-soft last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-accent text-white font-sans font-semibold text-sm transition-all duration-200 hover:bg-accent-ink"
              >
                Book a discovery call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
