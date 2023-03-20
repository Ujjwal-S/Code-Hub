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
        'code-page': '#1e1e1e',
        'secondary': '#C4C5C5',
        'home-input-bg': '#262626',
        'home-box-bg': '#222222',
        'primary-button': '#0077FF',
        'code-page-secondary': '#252525',
        'seperator': '#343434'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  plugins: [],
}