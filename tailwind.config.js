/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#B98DFE",
        "primary-light-color": "#E6E6FA",
        "dark-purple": "#A36DEB"
      },
    },
  },
  plugins: [],
}