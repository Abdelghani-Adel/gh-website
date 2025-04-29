import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b2361",
        secondary: "#05ccc5",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-rtl")],
  corePlugins: {
    preflight: true,
  },
};
export default config;
