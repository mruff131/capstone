/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      customRed: 'rgba(255, 0, 0, 1)',
      customYellow: 'rgba(255, 214, 0, 1)',
      },
    },
  },
  plugins: [],
}
