/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple" :"#3b0764",
        "indigo-dark" : "#1e1b4b",
        "black-indigo": "#040711",
        "indigo":"#132043",
      }
    },
  },
  plugins: [],
}

