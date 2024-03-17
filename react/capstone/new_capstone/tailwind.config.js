/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
});
