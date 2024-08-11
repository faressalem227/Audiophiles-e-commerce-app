/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_orange: "D87D4A",
        hover_oranhe: "#fbaf85",
        main_grey: "#F1F1F1",
        hover_grey: "#FAFAFA",
        binary_black: "#101010",
      },
      fontFamily: {
        ManRope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
