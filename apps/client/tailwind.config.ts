import type { Config } from 'tailwindcss'
import { themeTailwindColor } from './src/themes'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: themeTailwindColor
    }
  }
}

export default config
