/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        wix:["Wix Madefor Text", "serif"],
        montserrat:["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

