/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#fa5f1a",
        light: "#ffffff",
        soft: "#f7f0f0",
        dark: "#252525",
      },
      screens: {
        sm: "375px",
        xmd: "900px",
      },
      gridTemplateColumns: {
        "row-content": "repeat(auto-fit, 200px)",
        "cart-content-md": "1fr 2fr 1fr 1fr 1fr",
        "cart-content": "1fr 2fr 1fr 1fr",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
