import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "skyblue-50": "#8adfe0",
        "skyblue-100":'#A2E4FD',
        "skyblue-200":'#77d1f1',
        "skyblue-500": "#037c94",

        "graydark": "#171717",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
