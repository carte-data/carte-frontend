const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blue,
      cream: '#fffaf8',
      black: colors.black,
      transparent: colors.transparent,
      white: colors.white,
      green: colors.emerald,
      gray: colors.blueGray,
    },
    fontFamily: {
      sans: ['wotfard', 'sans-serif'],
      mono: ['silka-mono', 'courier'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
