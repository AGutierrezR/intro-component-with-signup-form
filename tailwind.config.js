/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'san-serif'],
    },
    colors: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      'dark-blue': 'hsl(249, 10%, 26%)',
      'grayish-blue': 'hsl(246, 25%, 77%)',
      white: 'hsl(0, 0%, 100%)',
    },
    boxShadow: {
      inner: 'inset 0 -0.25rem 0 0',
      DEFAULT: '0 0.5rem 0 0 rgba(0, 0, 0, 0.1)',
    },
    boxShadowColor: {
      green: 'hsl(154, 59%, 45%)',
    },
    extend: {},
  },
  plugins: [],
}
