/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        darkGrey: '#121212',
        magenta: '#d6014f',
        lighGrey: '#1e1e1e',
        taskBg: '#252525',
        deleteColor: '#cf6679',
        editColor: '#bb86fa',
      }
    },
  },
  plugins: [],
}
