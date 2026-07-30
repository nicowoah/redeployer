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
        bg: '#fafafa',
        surface: '#f2f4f8',
        accent: '#3b82f6',
        'text-primary': '#0f0f11',
        'text-secondary': '#5c5c78',
        'text-muted': '#9494ac',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        display: ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 2px 12px rgba(0, 0, 0, 0.07)',
        'btn-accent': '0 4px 18px rgba(59, 130, 246, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
