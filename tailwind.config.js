const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens : {
      xs : "376px",
      tab : '786px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 2.6s linear infinite',
        'spin-medium-once':'spin 0.6s linear 2',
        "widgle-slow": 'wiggle 1s ease-in-out infinite',
        'spin-reverse': 'spinReverse 1s linear infinite',
        'spin-reverse-slow': 'spinReverse 2.6s linear infinite',
        'bounce-once' : 'bounce 1s linear 2'
      },
      keyframes: {
        'spinReverse': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
