import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: "var(--color-card)",
                "card-border": "var(--color-card-border)",
                anthracite: "#2D2D2D",
            },
            fontFamily: {
                heading: ["'FormaDJR Micro'", "var(--font-inter)", "system-ui", "sans-serif"],
                subheading: ["'FormaDJR Display'", "var(--font-inter)", "system-ui", "sans-serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
