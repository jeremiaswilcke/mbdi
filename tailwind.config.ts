import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#145073",
        secondary: "#69AFD2",
        foreground: "#2D2D2D",
        anthracite: "#2D2D2D",
        background: "#FFFFFF",
      },
      fontFamily: {
        heading: ["'FormaDJR Micro'", "system-ui", "sans-serif"],
        subheading: ["'FormaDJR Display'", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
