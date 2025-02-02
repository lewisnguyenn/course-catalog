import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screen: {
        md: "790px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
