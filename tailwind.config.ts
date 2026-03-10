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
        porscheRed: "#FF0000",
        porscheDark: "#050505",
        porscheGray: "#333333",
      },
      fontFamily: {
        sans: ["var(--font-din)"],
      },
    },
  },
  plugins: [],
};
export default config;
