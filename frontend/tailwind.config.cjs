/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e1e1e',
        'secondary': '#C4C5C5',
        'home-input-bg': '#262626',
        'home-box-bg': '#222222',
        'primary-button': '#0077FF'
      }
    },
  },
  plugins: [],
}