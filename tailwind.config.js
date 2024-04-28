const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        karla: ['KarlaVariable', 'InterVariable', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

