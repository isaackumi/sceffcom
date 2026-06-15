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
        brand: {
          ink: '#0a0a0a',
          paper: '#ffffff',
          sand: '#f5f5f4',
          mist: '#f4f4f5',
          clay: '#92400e',
        },
        banner: '#FFDD67', // Warm yellow for banner (job posting aesthetic)
        primary: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFC300', // Main yellow
          600: '#CC9C00',
          700: '#997500',
          800: '#664E00',
          900: '#332700',
        },
        secondary: {
          50: '#FFE6E6',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0000', // Main red
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        surface: {
          DEFAULT: '#ffffff',
          warm: '#f9fafb',
          light: '#ffffff',
        },
        link: {
          DEFAULT: '#1d4ed8',
          hover: '#1e40af',
        },
        dark: {
          50: '#f5f5f4',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#1c1917', // Warm dark - complements primary gold
          600: '#292524',
          700: '#44403c',
          800: '#57534e',
          900: '#0c0a09',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: ['BagossCondensedFont', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['BagossCondensedFont', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        bagoss: [
          'BagossCondensedFont',
          'BagossCondensedFont Fallback',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-down': 'fadeDown 0.5s ease-out',
        'fade-left': 'fadeLeft 0.5s ease-out',
        'fade-right': 'fadeRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Jagged/curved banner edge - geometric cut at bottom
      clipPath: {
        'banner-jagged': 'polygon(0 0, 100% 0, 100% 85%, 92% 100%, 80% 92%, 60% 100%, 40% 92%, 20% 100%, 8% 90%, 0 100%)',
        'banner-jagged-sm': 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 85% 95%, 70% 100%, 50% 92%, 30% 100%, 15% 95%, 5% 100%, 0 95%)',
      },
    },
  },
  plugins: [],
}
export default config

