import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#F9E9EA",
          "100": "#EDBABD",
          "200": "#E5989D",
          "300": "#D96970",
          "400": "#D14C55",
          "500": "#C61F2A",
          "600": "#B41C26",
          "700": "#8D161E",
          "800": "#6D1117",
          "900": "#530D12",
        },
        black: {
          "1": "#FFFFFF",
          "2": "#FCFCFC",
          "3": "#F5F5F5",
          "4": "#F0F0F0",
          "5": "#D9D9D9",
          "6": "#BFBFBF",
          "7": "#8C8C8C",
          "8": "#595959",
          "9": "#454545",
          "10": "#262626",
          "11": "#1F1F1F",
          "12": "#141414",
          "13": "#000000",
        }
      },
      backgroundImage: {
        "brand-grad": "linear-gradient(159deg, #C61F2A 0%, #6B142B 100%)",
      },
      fontFamily: {
        sans: ["var(--font-tomato-grotesk)"]
      }
    },
  },
  plugins: [],
}
export default config
