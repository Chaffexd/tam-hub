import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/richTextOptions.tsx"
  ],
  theme: {
    extend: {
      colors: {
        cfblue: {
          1: "#1770e5"
        },
        cfgrey: {
          1: "#c4d1de"
        }
      }
    },
  },
  plugins: [],
};
export default config;
