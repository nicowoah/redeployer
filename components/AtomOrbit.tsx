'use client'

import { motion } from 'framer-motion'

interface AtomOrbitProps {
  size?: number
  className?: string
}

const ACCENT = '#3b82f6'

const ORBITS = [
  { radius: 62,  nodeR: 7,  speed: 9,  startAngle: 30 },
  { radius: 108, nodeR: 5,  speed: 17, startAngle: 150 },
  { radius: 150, nodeR: 8,  speed: 27, startAngle: 270 },
]

export default function AtomOrbit({ size = 380, className = '' }: AtomOrbitProps) {
  const cx = size / 2
  const cy = size / 2

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dashed orbit rings */}
      {ORBITS.map((orbit, i) => (
        <circle
          key={`ring-${i}`}
          cx={cx}
          cy={cy}
          r={orbit.radius}
          stroke={ACCENT}
          strokeWidth="1"
          strokeDasharray="4 10"
          opacity="0.14"
        />
      ))}

      {/* Central node — outer glow */}
      <circle cx={cx} cy={cy} r={28} fill={ACCENT} opacity="0.10" />
      <circle cx={cx} cy={cy} r={18} fill={ACCENT} opacity="0.18" />
      {/* Central node — core */}
      <circle cx={cx} cy={cy} r={11} fill={ACCENT} opacity="0.95" />
      <circle cx={cx} cy={cy} r={5}  fill="white"  opacity="0.95" />

      {/* Orbiting nodes */}
      {ORBITS.map((orbit, i) => (
        <motion.g
          key={`orbit-${i}`}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          initial={{ rotate: orbit.startAngle }}
          animate={{ rotate: orbit.startAngle + 360 }}
          transition={{ duration: orbit.speed, repeat: Infinity, ease: 'linear' }}
        >
          {/* Connecting line, pulsing opacity */}
          <motion.line
            x1={cx}
            y1={cy}
            x2={cx + orbit.radius}
            y2={cy}
            stroke={ACCENT}
            strokeWidth="1"
            animate={{ opacity: [0.18, 0.45, 0.18] }}
            transition={{
              duration: orbit.speed * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Node glow */}
          <circle cx={cx + orbit.radius} cy={cy} r={orbit.nodeR + 5} fill={ACCENT} opacity="0.12" />
          {/* Node */}
          <circle cx={cx + orbit.radius} cy={cy} r={orbit.nodeR} fill={ACCENT} opacity="0.88" />
          {/* Node inner highlight */}
          <circle cx={cx + orbit.radius - 2} cy={cy - 2} r={orbit.nodeR * 0.35} fill="white" opacity="0.5" />
        </motion.g>
      ))}
    </svg>
  )
}
