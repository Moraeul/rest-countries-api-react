/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
    },
    gridTemplateColumns: {
      'fill-40': 'repeat(auto-fill, 320px)',
    },
  },
  darkMode: 'class',
  plugins: [],
};
