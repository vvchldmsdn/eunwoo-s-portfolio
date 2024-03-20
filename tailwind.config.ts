import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        // 세로 길이 기준 미디어 쿼리 추가
        'h-sm': {'raw': '(min-height: 640px)'},
        'h-md': {'raw': '(min-height: 768px)'},
        'h-lg': {'raw': '(min-height: 1024px)'},
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'backgroundColor': '#FBF3E4',
        'darkbg': '#DFD8CA',
        'homeRed': '#B91646',
        'homeYellow': '#F9C041',
        'homeGreen': '#105652',
      },
      fontSize: {
        'vxl': '10rem',
      }
    },
  },
  plugins: [nextui({
    addCommonColors: true,
  })],
};
export default config;
