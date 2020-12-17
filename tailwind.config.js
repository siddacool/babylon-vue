module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      // eslint-disable-next-line quotes
      sans: `'Rubik', sans-serif`,
    },
    colors: {
      primary: 'var(--c-colors-primary)',
    },
  },
  variants: {},
  plugins: [],
};
