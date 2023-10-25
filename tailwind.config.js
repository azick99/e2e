/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        primary: '#2D2D2D',
        secondary: '#606060',
        blue: '#0344DC',
        pink: '#FF37BB',
        white: '#FFFFFF',
        'whate-bg': '#F1F6FF',
        'white-primary': '#E8E8E8',
      },
      fontSize: {
        //h1
        '4xl': '2.875rem',
        '5xl': '3.25rem',
      },
      boxShadow: {
        service: '0 6px 25px -10px #B1C6F5',
      },
      spacing: {
        '60px': '3.75rem',
        '52px': '3.25rem',
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
    },
  },
  plugins: [],
}
