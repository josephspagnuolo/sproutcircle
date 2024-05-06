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
      },
      keyframes: {
        'infinite-scroll': {
          from: {
            transform: 'translateX(-80px)',
          },
          to: {
            transform: 'translateX(calc((-240px * 8) - 80px))',
          },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
