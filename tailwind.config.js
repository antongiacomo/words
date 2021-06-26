const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' }
      },
      colors:{
        teal: colors.teal,
        'yellow': {
          100: '#FEFCEF',
          200: '#FEF6D6',
          300: '#FDF1BE',
          400: '#FBE78D',
          500: '#F9DC5C',
          600: '#E0C653',
          700: '#958437',
          800: '#706329',
          900: '#4B421C',
          },
          'red': {
          100: '#FDE9ED',
          200: '#FBC9D3',
          300: '#F8A8B8',
          400: '#F26683',
          500: '#ED254E',
          600: '#D52146',
          700: '#8E162F',
          800: '#6B1123',
          900: '#470B17',
          },
          'green': {
          100: '#E6FDEF',
          200: '#C0F9D8',
          300: '#9BF5C0',
          400: '#4FEE91',
          500: '#04E762',
          600: '#04D058',
          700: '#028B3B',
          800: '#02682C',
          900: '#01451D',
          },

      }
    },
  },
  variants: {},
  plugins: [],
}
