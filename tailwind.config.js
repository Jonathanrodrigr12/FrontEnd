/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#630412",
        secondary: "#d6042b",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimRed: "rgba(255, 17, 0, 0.1)",
      },
      fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    
    },
  },
  plugins: [],
};