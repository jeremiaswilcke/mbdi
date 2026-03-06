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
        foreground: "#0B2E42",
        background: "#FFFFFF",
      },
      fontFamily: {
        heading: ["'FormaDJR Micro'", "system-ui", "sans-serif"],
        subheading: ["'FormaDJR Display'", "system-ui", "sans-serif"],
        body: ["'FormaDJR Display'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
