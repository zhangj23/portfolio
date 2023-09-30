/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FBEBD9",
        black: "#2d3036",
        dark_teal: "#3d8486",
        light_teal: "#a5dcc0",
        Dark: "#2d3036",
        secondaryGreen: "#3d8486",
        primaryGreen: "#a5dcc0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        ibm: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss")],
};
