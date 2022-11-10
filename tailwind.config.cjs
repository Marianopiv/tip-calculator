/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom:{950:"#044A4D"},
        cyan:{950:"#CAEAEC"},
        green2:{950:"#26C1AD"},
        blue:{950:"#72AAA8"},
        green:{1000:"#0B726C"},       
      }
    },
  },
  plugins: [],
}
