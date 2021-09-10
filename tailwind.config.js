module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          lighter: '#DEF5F2',
          light: '#63BDAF',
          medium: '#44A798',
          DEFAULT: '#006156',
          faint: '#C8E2DE',
        },

        yellow: { light: '#FFEEA7', DEFAULT: '#FFCE00' },

        gray: {
          darker: '#444854',
          dark: '#575A65',
          medium: ' #9DA8B6',
          inactive: '#979AA5',
          light: '#F9FAFC',
          lighter: '#EFF2F7',
        },
        red: { DEFAULT: '#CC4945' },
      },
      fontSize: {
        '4xl': ['2.625rem', { lineHeight: '2.5rem' }],
      },
      fontFamily: {
        sans: [
          'Gilroy',
          'sans-serif',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        alt: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
