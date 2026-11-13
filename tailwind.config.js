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
        blast: {
          dark: '#0f172a',
          board: '#1e293b',
          cell: '#334155',
          neonBlue: '#00f0ff',
          neonPink: '#ff007f',
          neonGreen: '#39ff14',
          neonYellow: '#ffe600',
          neonPurple: '#b026ff',
          neonOrange: '#ff7700',
          neonRed: '#ff3131',
        }
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        explode: {
          '0%': { transform: 'scale(1)', filter: 'brightness(2)' },
          '50%': { transform: 'scale(1.25)', opacity: '0.8', filter: 'brightness(3)' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        comboFlash: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        pop: 'pop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        explode: 'explode 0.4s ease-out forwards',
        comboFlash: 'comboFlash 0.35s ease-in-out',
        shimmer: 'shimmer 2.5s infinite linear'
      }
    },
  },
  plugins: [],
}
