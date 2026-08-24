import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral ground — no cool grays anywhere
        bg: '#ffffff',
        surface: '#f9f9f8',

        // Blue splits by role: `accent` fills (white text = 4.57:1),
        // `accent-ink` is the text/link weight (6.8:1) since the fill
        // tone is too light for small type.
        accent: '#0075de',
        'accent-ink': '#005bab',
        'accent-tint': '#e6f3fe',

        'text-primary': '#1a1a18',
        'text-secondary': '#615d59',
        'text-muted': '#6b6862',

        // Hairlines carry all separation in this system — depth comes from
        // 1px edges, not shadow. Four steps, by role:
        //   soft   dividers and section edges
        //   DEFAULT cards, chips, controls at rest
        //   strong  emphasis borders (outline control at rest)
        //   hover   the interactive partner to `strong`
        hairline: {
          soft: 'rgba(0, 0, 0, 0.08)',
          DEFAULT: 'rgba(0, 0, 0, 0.10)',
          strong: 'rgba(0, 0, 0, 0.16)',
          hover: 'rgba(0, 0, 0, 0.28)',
        },
      },
      fontFamily: {
        display: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Restrained scale with tight optical tracking
        hero: ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.033em' }],
        display: ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.14', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        // Depth comes from hairlines, not glow
        card: '0 1px 2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

export default config
