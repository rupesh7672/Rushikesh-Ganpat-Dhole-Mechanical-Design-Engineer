/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0A1226',
          850: '#0F1A36',
          800: '#142247',
          700: '#1C2F60',
          600: '#274287',
        },
        steel: {
          400: '#7AA2D6',
          500: '#4F78B2',
          600: '#35598F',
          700: '#223D69',
        },
        cyan: {
          400: '#38BDF8',
          500: '#0EA5E9',
          alt: '#00F0FF',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          orange: '#FF6B35',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
