import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        "s-blue": "#060293",
        "s-blue-l": "#009dea",
        "s-pink": "#daa6ff",
        "s-green": "#3fbea7",
        "s-green-d": "#4d8075",
        "s-cream": "#fffade",
        "s-red": "#bb0001",
        "s-yellow": "#f9f871",
        "s-purple": "#5e4d7d",
        "s-pruple-d": "#a2007f",
        "s-orange": "#ff6a45"
      }
    }
  },
  plugins: []
};
export default config;
