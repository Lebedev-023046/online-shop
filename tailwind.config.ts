import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    extend: {
      gridTemplateColumns: {
        "row-content": "repeat(auto-fit, 200px)",
        // "cart-content": "1fr 2fr 1fr 1fr 1fr",
        "cart-content-md": "1fr 2fr 1fr 1fr 1fr",
        "cart-content": "1fr 2fr 1fr 1fr",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    // require("@tailwindcss/deprecation-warnings"),
    require("autoprefixer"),
  ],
});
export default config;
