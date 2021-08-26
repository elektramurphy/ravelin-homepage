const colors = require('tailwindcss/colors')

const defaultFontStack = [
  "SF Mono",
];

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    fontSize: {
      sm: ['14px'],
      base: ['17px'],
      md: ['20px'],
      lg: ['27px'],
      xl: ['45px'],
    },
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        light: '#1F9BF4',
        dark: '#2749FF',
      },
      green: {
        DEFAULT: '#31C9AD',
      },
      pink: {
        DEFAULT: '#EC4E6E',
      },
      purple: {
        DEFAULT: '#7056F8',
      },
    },
    fontFamily: {
      'mono': ['SF Mono'],
      extend: {
        fontFamily: {
          sans: defaultFontStack,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}