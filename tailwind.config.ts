import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      carrot: "#fa5f1a",
      light: "#ffffff",
      soft: "#f7f0f0",
      dark: "#252525",
    },
  },
  plugins: [],
});
export default config;
