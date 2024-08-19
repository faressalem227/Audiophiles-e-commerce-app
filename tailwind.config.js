/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_orange: "#D87D4A",
        hover_orange: "#fbaf85",
        main_grey: "#F1F1F1",
        hover_grey: "#FAFAFA",
        binary_black: "#101010",
        Neutral_grey: "#eee",
        Desc_gray: "#7d7d7d"
      },
      fontFamily: {
        ManRope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        mobileHeaderImg: "url('/products/assets/home/mobile/image-header.jpg')",
        tabletHeaderImg: "url('/products/assets/home/tablet/image-header.jpg')",
        pcHeaderImg: "url('/products/assets/home/desktop/image-hero.jpg')",
        AboutDesktopImg:
          "url('/products/assets/shared/desktop/image-best-gear.jpg')",
        AboutTabletImg: "url('/products/assets/shared/tablet/image-best-gear.jpg')",
        AboutMobileImg: "url('/products/assets/shared/mobile/image-best-gear.jpg')",
        PatternCircle: "url('/products/assets/home/desktop/pattern-circles.svg')",
        Zx7Mobile: "url('products/assets/home/mobile/image-speaker-zx7.jpg')",
        Zx7Tablet: "url('products/assets/home/tablet/image-speaker-zx7.jpg')",
        Zx7Desktop: "url('products/assets/home/desktop/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],
};
