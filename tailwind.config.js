/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Epilogue", "sans-serif"], 

      },
      borderWidth:{
        1: "1px",
      }
    },
  },
  plugins: [],
}

 