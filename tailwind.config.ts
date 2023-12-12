import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#eb3434",
            },
            secondary: {
              DEFAULT: "#04aceb",
            },
            background: {
              DEFAULT: "#f4f4f4",
            },
          }
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#eb3434",
            },
            secondary: {
              DEFAULT: "#04aceb",
            },
            background: {
              DEFAULT: "#262626",
            }
          }
        }
      },
    },
  )],
}
export default config
