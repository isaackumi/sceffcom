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
        parchment: {
          DEFAULT: '#F4F0E6',
          dark: '#E8E2D4',
        },
        cream: '#FDFBF7',
        ink: {
          DEFAULT: '#1C2B22',
          muted: '#4A5C52',
          faint: '#6B7D73',
        },
        forest: {
          DEFAULT: '#1A3C34',
          light: '#2D5A4E',
          dark: '#0F2620',
          muted: '#3D6B5E',
        },
        terracotta: {
          DEFAULT: '#C15F3C',
          light: '#D4785A',
          dark: '#9E4A2E',
        },
        sage: {
          DEFAULT: '#E8EDE6',
          dark: '#D5DDD2',
        },
        gold: {
          DEFAULT: '#9A7B2F',
          light: '#B8953D',
        },
        border: {
          DEFAULT: '#D4CFC4',
          dark: '#B8B2A4',
        },
        // Legacy aliases mapped to new palette for gradual migration
        brand: {
          ink: '#1C2B22',
          paper: '#FDFBF7',
          sand: '#F4F0E6',
          mist: '#E8EDE6',
          clay: '#C15F3C',
        },
        primary: {
          50: '#F0F5F3',
          100: '#D9E8E3',
          200: '#B3D1C7',
          300: '#7AADA0',
          400: '#4D8A7A',
          500: '#2D5A4E',
          600: '#1A3C34',
          700: '#153029',
          800: '#0F2620',
          900: '#0A1A15',
        },
        surface: {
          DEFAULT: '#FDFBF7',
          warm: '#F4F0E6',
          light: '#FDFBF7',
        },
        link: {
          DEFAULT: '#C15F3C',
          hover: '#9E4A2E',
        },
      },
      fontFamily: {
        sans: ['var(--font-source)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        editorial: '0 1px 0 0 rgba(28, 43, 34, 0.06), 0 8px 32px -8px rgba(28, 43, 34, 0.12)',
        card: '0 0 0 1px rgba(28, 43, 34, 0.08), 0 4px 20px -4px rgba(28, 43, 34, 0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
