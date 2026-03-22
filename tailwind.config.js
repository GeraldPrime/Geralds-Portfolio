/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          bg: '#e8eaf0',
          'bg-dark': '#d1d5e0',
          shadow: '#b8bec8',
          light: '#ffffff',
          accent: '#e67e22',
          'accent-dark': '#d35400',
          'accent-light': '#f39c12',
          text: '#2d3748',
          muted: '#718096',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'neu': '6px 6px 12px #b8bec8, -6px -6px 12px #ffffff',
        'neu-sm': '3px 3px 6px #b8bec8, -3px -3px 6px #ffffff',
        'neu-lg': '10px 10px 20px #b8bec8, -10px -10px 20px #ffffff',
        'neu-inset': 'inset 4px 4px 8px #b8bec8, inset -4px -4px 8px #ffffff',
        'neu-inset-sm': 'inset 2px 2px 5px #b8bec8, inset -2px -2px 5px #ffffff',
        'neu-pressed': 'inset 6px 6px 12px #b8bec8, inset -6px -6px 12px #ffffff',
        'neu-accent': '6px 6px 12px rgba(230,126,34,0.3), -2px -2px 8px #ffffff',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'slide-right': 'slide-right 0.7s ease forwards',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
