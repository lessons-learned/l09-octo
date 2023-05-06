/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        indigoVivid: {
          600: '#3000F0',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
