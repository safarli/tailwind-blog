/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [],
};
