import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        wa: { DEFAULT: "#25D366", dark: "#1EBE5A" },
      },
    },
  },
  plugins: [],
};
export default config;
