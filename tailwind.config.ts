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
            },
            fontFamily: {
                heading: ["var(--font-outfit)"],
                sans: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};
export default config;
