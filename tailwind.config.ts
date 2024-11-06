import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bLightGray : "#F5F5F5",
        bLightBlue : "#48CFCB",
        bDarkBlue : "#229799",
        bDarkGray : "#1A1A1D",
        bGray : "#424242"
      },
    },
  },
  plugins: [],
};
export default config;
