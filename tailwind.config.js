module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      drawer: '260px',
    },
    left: {
      drawerhidden: '-265px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
