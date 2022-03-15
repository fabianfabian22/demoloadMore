module.exports = {
  prefix: '',
  important: true,
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },

  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
