'use client'

import { MotionConfig } from 'framer-motion'

/**
 * The one easing curve this site animates on. Exponential ease-out: fast
 * departure, long settle. Imported wherever motion is authored so the
 * timing feel stays identical across sections.
 */
export const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

/**
 * Honors the OS "reduce motion" setting for every Framer Motion animation.
 * Framer applies its transforms via inline styles, so the CSS media query in
 * globals.css can't reach them — this is the supported way to opt out.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
