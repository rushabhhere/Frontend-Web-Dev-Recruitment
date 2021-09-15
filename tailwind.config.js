module.exports = {
  mode: 'jit',
  purge: ['./public/*.html', './public/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      black: '#000000',

      primary: '#5964E0',
      'primary-light': '#6771E3',
      body: '#F4F6F8',
      dim: '#6E8098',

      'dark-body': '#000972',
      'dark-card': '#2737EE',
      'dark-button-dim': '#5764f3',
      'dark-dim': '#BFDAFF',
    },
    fontFamily: {
      sans: [
        'Kumbh Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
      ],
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      md: '0.375rem',
      full: '9999px',
      85: '85px',
    },
    rotate: {
      '-35': '-35deg',
      12: '12deg',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
