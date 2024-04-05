import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(to right, #5d9fde, #7866ef, #d362f0)',
        'custom-gradient-2': 'linear-gradient(to right, #e73c9f, #9e32c7, #4025f9)',
      },
      colors:{
        'primary': '#0f0b29',
        'secondary': '#261046',
        'cus-card': '#F2EBFF'
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;
