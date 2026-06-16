import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0B1628',
          light: '#152238',
          dark: '#060D18',
        },
        stone: {
          DEFAULT: '#F7F4EE',
          dark: '#EDE8DF',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A017',
          dark: '#8B6914',
          faint: 'rgba(184, 134, 11, 0.12)',
        },
        slate: {
          DEFAULT: '#4A5D73',
          light: '#6B7D91',
          faint: '#8E9DAD',
        },
        ink: '#0C1222',
        // Legacy aliases
        brand: {
          ink: '#0C1222',
          paper: '#F7F4EE',
          sand: '#EDE8DF',
          mist: '#F7F4EE',
          clay: '#B8860B',
        },
        primary: {
          50: '#F5F0E6',
          100: '#E8DFD0',
          200: '#D4C4A8',
          300: '#B8860B',
          400: '#A67809',
          500: '#8B6914',
          600: '#0B1628',
          700: '#060D18',
          800: '#040A12',
          900: '#020508',
        },
        surface: {
          DEFAULT: '#F7F4EE',
          warm: '#EDE8DF',
          light: '#F7F4EE',
        },
        link: {
          DEFAULT: '#B8860B',
          hover: '#8B6914',
        },
        border: {
          DEFAULT: '#D8D0C4',
          dark: '#C4B9A8',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem,11vw,8rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem,6vw,4.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        editorial: '72rem',
      },
      boxShadow: {
        lift: '0 24px 48px -12px rgba(11, 22, 40, 0.18)',
        subtle: '0 1px 0 0 rgba(11, 22, 40, 0.06)',
      },
      animation: {
        'line-grow': 'lineGrow 1.2s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
