'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Honors the OS "reduce motion" setting for every Framer Motion animation.
 * Framer applies its transforms via inline styles, so the CSS media query in
 * globals.css can't reach them — this is the supported way to opt out.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
